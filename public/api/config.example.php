<?php
// Template for public/api/config.php (which is gitignored).
// Copy this file to config.php and fill in the real mailbox credentials.

return [
    // Mailbox that authenticates against SMTP and appears as the sender.
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 587,
    'smtp_secure' => 'tls', // 'tls' for port 587, 'ssl' for port 465
    'smtp_user' => 'noreply@example.com',
    'smtp_pass' => '',

    // Brand name and address used in the email templates.
    'from_name' => 'Costlow Global',
    'company_address' => '2937 Queen St. East Suite 1010, Brampton, ON L6T 5J1, Canada',

    // Where form submissions land. Comma-separated for multiple recipients.
    'admin_email' => 'info@example.com',

    // Blind copy on every outgoing mail. Set to '' to disable.
    'bcc_email' => '',
];
