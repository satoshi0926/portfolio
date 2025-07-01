<?php
$subject = htmlspecialchars($_POST['subject'] ?? '', ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($_POST['message'] ?? '', ENT_QUOTES, 'UTF-8');

$headers = 'From: ポートフォリオ<info@satoshi-creative.com>';
$to = 'stamura0926@gmail.com';
$body = "お問い合わせ内容:\n\n$message";

mb_language("ja");
mb_internal_encoding("UTF-8");

if (mb_send_mail($to, $subject, $body, $headers)) {
  echo "送信ありがとうございました！";
} else {
  echo "送信に失敗しました。";
}
?>