<?php
// Contact page form: src/components/sections/ContactForm.jsx

require __DIR__ . '/mailer.php';

require_post();

$data = get_json_input();
$name = field($data, 'name');
$email = field($data, 'email');
$company = field($data, 'company');
$subject = field($data, 'subject');
$message = field($data, 'message');

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    send_response(false, 'Please fill in all the required fields.', 400);
}

if (!is_valid_email($email)) {
    send_response(false, 'Please enter a valid email address.', 400);
}

$messageHtml = nl2br(esc($message));
$subjectSafe = esc($subject);

$adminHtml = email_layout(
    'New Contact Form Submission',
    detail_row('Name', esc($name))
        . detail_row('Email', esc($email))
        . detail_row('Company', esc($company))
        . detail_row('Subject', $subjectSafe)
        . '<p style="margin:18px 0 6px;"><strong>Message:</strong></p>'
        . "<p style=\"margin:0;\">{$messageHtml}</p>",
);

$userHtml = email_layout(
    'Thank You for Contacting Us',
    '<p style="margin:0 0 14px;">Hi ' . esc($name, 'there') . ',</p>'
        . '<p style="margin:0 0 14px;">We have received your message. Our trade team will get back to you within one business day.</p>'
        . '<p style="margin:18px 0 6px;"><strong>Your message:</strong></p>'
        . "<p style=\"margin:0 0 18px;\">{$messageHtml}</p>"
        . signoff(),
);

try {
    deliver(
        "New Contact Form Submission: {$subject}",
        $adminHtml,
        $email,
        'We received your message',
        $userHtml,
    );

    send_response(true, 'Your message has been sent successfully!');
} catch (Throwable $e) {
    error_log('contact error: ' . $e->getMessage());
    send_response(false, 'Failed to send message. Please try again.', 500);
}
