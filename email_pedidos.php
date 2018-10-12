<?php

	ini_set('display_errors', 1);
	error_reporting(E_ALL);
		
	$to = "pedidos@kombuchakom.com.br";
	$nome = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$cep = $_POST['zipcode'];
	$street = $_POST['street'];
	$neighbourhood = $_POST['neighbourhood'];
	$number = $_POST['number'];
	$complement = $_POST['complement'];
	$melissa = $_POST['melissa-officinalis'];
	$hibiscus = $_POST['hibiscus-sabdariffa'];
	$schinus = $_POST['schinus-terebinthifolius'];


	$subject = "$nome tem interesse na kombucha artesanal";

	$body = "<html><body>";
	$body .= "<h3>$nome tem interesse em:</h3>\n";
	$body .= '<table cellpadding="10">';
	$body .= "<tr style='background: #eee;'><td>Melissa Officinalis</td> <td>$melissa</td></tr>\n";
	$body .= "<tr><td>Schinus Terebinthifolius</td> <td> $schinus</td></tr>\n";
	$body .= "<tr style='background: #eee;'><td>Hibiscus Sabdariffa</td> <td> $hibiscus</td></tr>\n";
	$body .= "</table>";
	$body .= "<h3>Dados do cliente:</h3>\n";
	$body .= '<table cellpadding="10">';
	$body .= "<tr><td>Nome</td> <td>$nome</td></tr>\n";
	$body .= "<tr style='background: #eee;'><td>Email</td> <td>$email</td></tr>\n";
	$body .= "<tr><td>CEP</td> <td>$cep</td></tr>";
	$body .= "<tr style='background: #eee;'><td>Logradouro</td> <td>$street</td></tr>";
	$body .= "<tr><td>Número</td> <td>$number</td></tr>";
	$body .= "<tr style='background: #eee;'><td>Complemento</td> <td>$complement</td></tr>";
	$body .= "<tr><td>Bairro</td> <td>$neighbourhood</td></tr>";
	$body .= "</body>";

	$headers = "From: kombu476@br328.hostgator.com.br\n";
	$headers .= "Reply-To: $email";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	mail($to, $subject, $body, $headers);

	header("Location: http://kombuchakom.com.br/_site/contato.html")
?>
