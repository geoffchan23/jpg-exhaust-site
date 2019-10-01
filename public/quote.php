<?php 
  header("Access-Control-Allow-Origin: *");
  $url = "https://$_SERVER[REQUEST_URI]";
  $parts = $_SERVER['QUERY_STRING'];
  parse_str($parts, $query);

  $to = "info@jpgexhaust.com"; 
  $name = $query['name'];
  $email = $query['email'];
  $message = $query['message'];
  $subject = "$name requested a quote"; 
  $headers = "From: $email" . "\r\n" . "Reply-To: $email"; 
  mail($to, $subject, $message, $headers); 
?> 