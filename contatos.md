---
title: Contato
layout: page
permalink: "/contato"
subtitle: Alguma dúvida, crítica ou sugestão? Manda pra gente!
date: 2018-09-13 20:53:08 +0000
fields:
- name: name
  size: 1
  label: Nome
- name: email
  size: 1
  label: Email
- name: telefone
  size: 1
  label: Telefone

---
<form action="email_contato.php" name="contact_form" method="POST" class="Contact" data-fade-fast>

	{% for field in page.fields %}

	<input type="text" class="Contact_input" name="{{field.name}}" data-contact-{{field.name}} type="text" placeholder="{{field.label}}">

	{% endfor %}

	<select class="Contact_input" name="{{field.type}}">

		<option disabled selected>Selecione um assunto</option>

		<option value="Sugestão">Sugestão</option>

		<option value="Dúvida">Dúvida</option>

		<option value="Comentário">Comentário</option>

	</select>

	<textarea rows="10" class="Contact_input" name="{{field.name}}" placeholder="{{field.label}}"></textarea>

	<input type="submit" value="Enviar" class="Contact_input Contact_button">

	<input type="hidden" name="_next" value="{{site.url}}/success" />

</form>