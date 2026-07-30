<?php
// Footer subscribe field: src/components/ui/Newsletter.jsx

require __DIR__ . '/mailer.php';

require_post();

$data = get_json_input();
$email = field($data, 'email');

if ($email === '') {
    send_response(false, 'Please enter your email address.', 400);
}

if (!is_valid_email($email)) {
    send_response(false, 'Please enter a valid email address.', 400);
}

$emailSafe = esc($email);

$adminHtml = email_layout(
    'New Newsletter Subscription',
    detail_row('Email', $emailSafe)
        . detail_row('Subscribed at', esc(date('d M Y, H:i') . ' server time')),
);

$userHtml = email_layout(
    'You Are Subscribed',
    '<p style="margin:0 0 14px;">Thank you for subscribing to the ' . esc(brand_name()) . ' newsletter.</p>'
        . '<p style="margin:0 0 14px;">You will receive product updates, sourcing news and trade offers straight to your inbox.</p>'
        . signoff(),
);

try {
    deliver(
        "New Newsletter Subscription: {$email}",
        $adminHtml,
        $email,
        'Thanks for subscribing to ' . brand_name(),
        $userHtml,
    );

    send_response(true, 'You have been subscribed successfully!');
} catch (Throwable $e) {
    error_log('newsletter error: ' . $e->getMessage());
    send_response(false, 'Subscription failed. Please try again.', 500);
}
