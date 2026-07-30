<?php
// Shared helper for the form endpoints (contact.php, enquiry.php,
// newsletter.php): JSON in/out, validation, and SMTP sending via PHPMailer.

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

// The browser preflights a JSON POST when the API sits on another origin
// (the Vite dev server calling the Laragon host, for example).
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function send_response(bool $success, string $message, int $statusCode = 200): void {
    http_response_code($statusCode);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

function require_post(): void {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        send_response(false, 'Method not allowed', 405);
    }
}

/** Accepts a JSON body, falling back to a normal form post. */
function get_json_input(): array {
    $data = json_decode(file_get_contents('php://input'), true);
    if (is_array($data)) {
        return $data;
    }
    return is_array($_POST) ? $_POST : [];
}

function field(array $data, string $key): string {
    $value = $data[$key] ?? '';
    return is_scalar($value) ? trim((string) $value) : '';
}

function is_valid_email(string $value): bool {
    return (bool) filter_var($value, FILTER_VALIDATE_EMAIL);
}

/** Escapes a value for HTML, substituting a placeholder when it is empty. */
function esc(string $value, string $fallback = 'Not provided'): string {
    return htmlspecialchars($value !== '' ? $value : $fallback, ENT_QUOTES, 'UTF-8');
}

function load_mail_config(): array {
    $configFile = __DIR__ . '/config.php';
    if (!file_exists($configFile)) {
        error_log('mailer: config.php is missing');
        send_response(false, 'Server email configuration is missing.', 500);
    }
    return require $configFile;
}

/** Brand name shown in email bodies — kept in config.php alongside the sender. */
function brand_name(): string {
    return load_mail_config()['from_name'];
}

/** Sign-off block for the acknowledgement emails. */
function signoff(): string {
    return '<p style="margin:0;">Best regards,<br/>The ' . esc(brand_name()) . ' Team</p>';
}

/** Wraps body markup in a plain, client-safe HTML shell. */
function email_layout(string $heading, string $body): string {
    $config = load_mail_config();
    $headingSafe = htmlspecialchars($heading, ENT_QUOTES, 'UTF-8');
    $brandSafe = htmlspecialchars($config['from_name'], ENT_QUOTES, 'UTF-8');
    $addressSafe = htmlspecialchars($config['company_address'] ?? '', ENT_QUOTES, 'UTF-8');

    return <<<HTML
<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#1c1c1e;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e7;">
      <tr>
        <td style="padding:24px 32px;background:#c1121f;color:#ffffff;">
          <h1 style="margin:0;font-size:20px;font-weight:600;">{$headingSafe}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:28px 32px;font-size:15px;line-height:1.6;">
          {$body}
        </td>
      </tr>
      <tr>
        <td style="padding:18px 32px;background:#fafafa;border-top:1px solid #e4e4e7;font-size:12px;color:#71717a;">
          {$brandSafe} &middot; Global Sourcing &amp; Trading<br/>
          {$addressSafe}
        </td>
      </tr>
    </table>
  </body>
</html>
HTML;
}

/** Renders one label/value row for the admin notification emails. */
function detail_row(string $label, string $value): string {
    $labelSafe = htmlspecialchars($label, ENT_QUOTES, 'UTF-8');
    return "<p style=\"margin:0 0 10px;\"><strong>{$labelSafe}:</strong> {$value}</p>";
}

/**
 * Send a single HTML email over SMTP.
 * `$to` may be a comma-separated list. Throws on failure — callers catch it.
 */
function send_html_email(string $to, string $subject, string $html, string $replyTo = ''): void {
    $config = load_mail_config();

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_user'];
    $mail->Password = $config['smtp_pass'];
    $mail->SMTPSecure = ($config['smtp_secure'] ?? 'tls') === 'ssl'
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int) $config['smtp_port'];
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($config['smtp_user'], $config['from_name']);

    // addAddress() takes one mailbox at a time, so split the configured list.
    foreach (array_filter(array_map('trim', explode(',', $to))) as $recipient) {
        $mail->addAddress($recipient);
    }

    if (!empty($config['bcc_email'])) {
        foreach (array_filter(array_map('trim', explode(',', $config['bcc_email']))) as $bcc) {
            $mail->addBCC($bcc);
        }
    }

    // Lets the team hit Reply and reach whoever filled in the form.
    if ($replyTo !== '' && is_valid_email($replyTo)) {
        $mail->addReplyTo($replyTo);
    }

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $html;
    $mail->AltBody = trim(preg_replace(
        "/\n{3,}/",
        "\n\n",
        html_entity_decode(strip_tags(str_replace(['</p>', '<br/>', '<br>'], "\n", $html)), ENT_QUOTES, 'UTF-8'),
    ));

    $mail->send();
}

/**
 * Notify the admin, then acknowledge the sender.
 * The acknowledgement is best-effort: a bounce on the visitor's own address
 * must not report a failure for a notification that was already delivered.
 */
function deliver(
    string $adminSubject,
    string $adminHtml,
    string $userEmail,
    string $userSubject,
    string $userHtml,
): void {
    $config = load_mail_config();

    send_html_email($config['admin_email'], $adminSubject, $adminHtml, $userEmail);

    try {
        send_html_email($userEmail, $userSubject, $userHtml);
    } catch (Throwable $e) {
        error_log('mailer: acknowledgement to ' . $userEmail . ' failed: ' . $e->getMessage());
    }
}
