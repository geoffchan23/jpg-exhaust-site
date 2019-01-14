<?php 
  header("Access-Control-Allow-Origin: *");
  $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
  $parts = parse_url($url);
  parse_str($parts['query'], $query);

  $to = "info@jpgexhaust.com"; 
  $name = $query['name'];
  $email = $query['email'];
  $message = $query['message'];
  $subject = "$name requested a quote"; 
  $headers = "From: $email" . "\r\n" . "Reply-To: $email"; 
  mail($to, $subject, $message, $headers); 
?> 