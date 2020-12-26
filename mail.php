<?php

  $json = file_get_contents('php://input');

  $params = json_decode($json);

  $phone = $params->phone;
  $email = $params->email;
  $name = $params->name;
  $message = $params->message;
  $description = $params->description;

$recepient = "Info@em55.ru";
$recepient3 = "9175655@mail.ru";
$siteName = "Заявка с сайта";

//$name = trim($_POST["name"]);
//$email = trim($_POST["email"]);
//$phone = trim($_POST["phone"]);
//$description = trim($_POST["description"]);
$message = "На сайте оставлена заявка от $name. Пришел с заказом: '$description' \nПочта: $email \nТелефон: $phone";


$recepient2 = $email;
$pagetitle2 = "Вы оставили заявку в 'Энергомотнаж-55'";
$message2 = "Здравствуйте, $name. Спасибо, что оставили заявку. Мы обрабатываем ваш запрос.  \nМы свяжемся с вами в ближайшее время \nпо этому адресу почты: $email \nили по телефону: $phone";
mail($recepient2, $pagetitle2, $message2, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
mail($recepient3, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
