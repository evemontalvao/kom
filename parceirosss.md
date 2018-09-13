---
title: parceirosss
layout: page
permalink: "/parceiros"
subtitle: Seja nosso parceiro, preencha os dados e retornaremos seu contato.
date: 2018-09-13 19:04:29 +0000
fields:
- name: cnpj
  size: 1
  label: CNPJ
- name: inscricao_estadual
  size: 1
  label: Inscrição Estadual
- name: nome_fantasia
  size: 1
  label: Nome Fantasia
- name: nome_responsavel
  size: 1
  label: Nome Responsável
- name: email
  size: 1
  label: Email
- name: telefone
  label: Telefone
  size: 2
- name: cep
  size: 2
  label: CEP
- size: 1
  label: Logradouro
  name: logradouro
- name: numero
  size: 2
  label: Número
- name: complemento
  size: 2
  label: Complemento
published: false

---
<form action="email_parceiros.php" data-partners name="contact_form" method="POST" class="Contact" data-fade-medium>

	{% for field in page.fields %}	

		<div class="Contact_column{{field.size}}">

			<input type="text" class="Contact_input {{field.hiddenClass}}" name="{{field.name}}" type="{{field.type}}" data-partner-{{field.name}} placeholder="{{field.label}}">

		</div>

	{% endfor %}

	<textarea name="message" class="Contact_input" width="100%" rows="10" placeholder="Mensagem"></textarea>

	<input type="submit" value="Enviar" data-shipping-submit class="Contact_input Contact_button" disabled>

</form>