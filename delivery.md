---
title: Delivery
layout: page
subtitle: Receba a KOM na porta da sua casa.<br>Somente para grande São Paulo.
date: 2018-09-13 21:35:55 +0000
permalink: "/delivery"
fields:
- size: 1
  label: Nome
  name: nome
- name: email
  size: 2
  label: Email
- size: 2
  label: Telefone
  name: telefone
- name: cep
  size: 1
  label: CEP
- name: logradouro
  size: 2
  label: Logradouro
- name: bairro
  label: Bairro
  size: 2
- name: numero
  size: 2
  label: Número
- name: complemento
  size: 2
  label: Complemento

---
<form action="email_pedidos.php" data-shipping name="contact_form" method="POST" class="Contact" data-fade-medium>

	{% for field in page.fields %}

	<div class="Contact_column{{field.size}}">

		<input type="text" class="Contact_input {{field.hiddenClass}}" name="{{field.name}}" type="{{field.type}}" data-shipping-{{field.name}} placeholder="{{field.label}}">

	</div>

	{% endfor %}

	<label class="Contact_label">Selecione os produtos</label>

	<div class="Contact_column2">

		<label class="Contact_productLabel" for="scales">Melissa Officinalis</label>

		<div class="Contact_columnTiny">

			<input type="number" min="0" name="melissa-officinalis" class="Contact_inputNumber" value="0" data-product-name="melissa-officinalis" data-product-value="">

			<div class="Contact_inputNumber__buttons" data-product="melissa-officinalis">

				<div class="Contact_inputNumber__button" data-product-sum="melissa-officinalis">+</div>

				<div class="Contact_inputNumber__button" data-product-sub="melissa-officinalis">-</div>

			</div>

		</div>

	</div>

	<div class="Contact_column2">

		<label class="Contact_productLabel" for="scales">Hibiscus Sabdariffa</label>

		<div class="Contact_columnTiny">

			<input type="number" min="0" name="hibiscus-sabdariffa" class="Contact_inputNumber" value="0" data-product-name="hibiscus-sabdariffa" data-product-value="">

			<div class="Contact_inputNumber__buttons" data-product="hibiscus-sabdariffa">

				<div class="Contact_inputNumber__button" data-product-sum="hibiscus-sabdariffa">+</div>

				<div class="Contact_inputNumber__button" data-product-sub="hibiscus-sabdariffa">-</div>

			</div>

		</div>

	</div>

	<div class="Contact_column2">

		<label class="Contact_productLabel" for="scales">Schinus Terebinthifolius</label>

		<div class="Contact_columnTiny">

			<input type="number" min="0" name="schinus-terebinthifolius" class="Contact_inputNumber" value="0" data-product-name="schinus-terebinthifolius" data-product-value="">

			<div class="Contact_inputNumber__buttons" data-product="schinus-terebinthifolius">

				<div class="Contact_inputNumber__button" data-product-sum="schinus-terebinthifolius">+</div>

				<div class="Contact_inputNumber__button" data-product-sub="schinus-terebinthifolius">-</div>

			</div>

		</div>

	</div>

	<label class="Contact_label" data-shipping-result></label>

	<input type="submit" value="Enviar" data-shipping-submit class="Contact_input Contact_button" disabled>

</form>