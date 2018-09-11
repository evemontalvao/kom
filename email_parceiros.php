<?php

	ini_set('display_errors', 1);
	error_reporting(E_ALL);

	$myemail = 'evemontalvao@gmail.com';
	if (isset($_POST['cnpj'])) {
	$cnpj = strip_tags($_POST['cnpj']);
	$inscricao = strip_tags($_POST['inscricao']);
	$fantasia = strip_tags($_POST['fantasia']);
	$responsavel = strip_tags($_POST['responsavel']);
	$telefone = strip_tags($_POST['telefone']);
	$email = strip_tags($_POST['email']);
	$endereco = strip_tags($_POST['endereco']);
	$cidade = strip_tags($_POST['cidade']);
	$estado = strip_tags($_POST['estado']);
	$cep = strip_tags($_POST['cep']);
	$mensagem = strip_tags($_POST['mensagem']);
	$data = strip_tags($_POST['data']);
	$grato = "Atenciosamente";

	$to = $myemail;
	$email_subject = "$responsavel tem interesse na kombucha artesanal";
	$email_body = "Oi, me chamo $responsavel - $mensagem.\n \n".
	"Favor entrar em contato comigo pelos dados abaixo:\n \n ".
	"CNPJ: $cnpj \n Inscrição Estadual: $inscricao \n Nome Fantasia: $fantasia \n Responsável $responsavel \n Telefone: $telefone \n Email: $email \n Endereço: $endereco \n Cidade: $cidade \n Estado: $estado \n CEP: $cep \n \n Atenciosamente $responsavel \n \n Enviado em: $data";
	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email";
	mail($to,$email_subject,$email_body,$headers);

}?>