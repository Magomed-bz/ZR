<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru','phpmailer/language/');
$mail->IsHTML=(true);

$mail->setForm('ttotikil@gmail.com','123');
$mail->addAddress('zurinka13-06@mail.ru');
$mail->Sudject = 'Привет';
 $body.='<p><strong>Имя:</strong>'.$_POST[name]'</p>';

 $mail->Body =$body;
 if(!$mail->send()){
 	$message = 'Ошибка'ж
 }else{
 	$message = 'Данные отправлены!';
 }
 $response = ['message'=>$message];

 header('Content-type: application/json');
 eche json_encode($response);
 ?>
