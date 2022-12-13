<?php

/* https://api.telegram.org/bot5949426643:AAE9tktTxON_E1dr6E8zXWxBZBPMMy2qtco/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - bot  token */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];
$token = "5949426643:AAE9tktTxON_E1dr6E8zXWxBZBPMMy2qtco";
$chat_id = "-767164114";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email:' => $email,
  'Собщения:' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ');
} else {
  echo "Error";
}
