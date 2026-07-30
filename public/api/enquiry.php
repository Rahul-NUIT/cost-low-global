<?php
// Global "Request a quote" drawer: src/components/sections/EnquiryDrawer.jsx

require __DIR__ . '/mailer.php';

require_post();

$data = get_json_input();
$name = field($data, 'name');
$email = field($data, 'email');
$company = field($data, 'company');
$product = field($data, 'product');
$message = field($data, 'message');

if ($name === '' || $email === '' || $message === '') {
    send_response(false, 'Please fill in all the required fields.', 400);
}

if (!is_valid_email($email)) {
    send_response(false, 'Please enter a valid email address.', 400);
}

$messageHtml = nl2br(esc($message));
$subjectSuffix = $product !== '' ? $product : 'General';

$adminHtml = email_layout(
    'New Product Enquiry',
    detail_row('Name', esc($name))
        . detail_row('Email', esc($email))
        . detail_row('Company', esc($company))
        . detail_row('Product of interest', esc($product, 'Not specified'))
        . '<p style="margin:18px 0 6px;"><strong>Requirement:</strong></p>'
        . "<p style=\"margin:0;\">{$messageHtml}</p>",
);

$userHtml = email_layout(
    'We Received Your Enquiry',
    '<p style="margin:0 0 14px;">Hi ' . esc($name, 'there') . ',</p>'
        . '<p style="margin:0 0 14px;">Thank you for your enquiry. Our trade team will respond within one business day with samples and pricing.</p>'
        . detail_row('Product of interest', esc($product, 'Not specified'))
        . '<p style="margin:18px 0 6px;"><strong>Your requirement:</strong></p>'
        . "<p style=\"margin:0 0 18px;\">{$messageHtml}</p>"
        . signoff(),
);

try {
    deliver(
        "New Product Enquiry: {$subjectSuffix}",
        $adminHtml,
        $email,
        'We received your enquiry',
        $userHtml,
    );

    send_response(true, 'Your enquiry has been sent successfully!');
} catch (Throwable $e) {
    error_log('enquiry error: ' . $e->getMessage());
    send_response(false, 'Failed to send enquiry. Please try again.', 500);
}
