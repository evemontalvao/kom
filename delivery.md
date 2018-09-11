---
{
"layout": "page",
"title": "Delivery",
"fields": [
		{
			"type": "text",
			"name": "name",
			"label": "Nome",
			"size": 1
		},
		{
			"type": "email",
			"name": "email",
			"label": "Email",
			"size": 2
		},
		{
			"type": "text",
			"name": "phone",
			"label": "Celular",
			"data": "data-contato-phone",
			"size": 2
		},
		{
			"type": "field_group_list",
			"name": "products",
			"label": "Escolha um ou mais produtos",
			"size": 2,
			fields: [
				{
					"type": "text",
					"name": "melissa-officinalis",
					"label": "Melissa Officinalis"
				},
				{
					"type": "text",
					"name": "hibiscus-sabdariffa",
					"label": "Hibiscus Sabdariffa"
				},
				{
					"type": "text",
					"name": "schinus-terebinthifolius",
					"label": "Schinus Terebinthifolius"
				},
			]
		},
		{
			"type": "text",
			"name": "zipcode",
			"label": "CEP",
			"data": "data-shipping-cep",
			"size": 1
		},
		{
			"type": "text",
			"name": "street",
			"label": "Logradouro",
			"data": "data-shipping-street",
			"hiddenClass": "Contact_input__hidden",
			"size": 2
		},
		{
			"type": "text",
			"name": "neighbourhood",
			"label": "Bairro",
			"data": "data-shipping-neighbourhood",
			"hiddenClass": "Contact_input__hidden",
			"size": 2
		},
		{
			"type": "text",
			"name": "number",
			"label": "Número",
			"data": "data-shipping-number",
			"hiddenClass": "Contact_input__hidden",
			"size": 2
		},
		{
			"type": "text",
			"name": "complement",
			"label": "Complemento",
			"hiddenClass": "Contact_input__hidden",
			"size": 2
		}
	]
}
---

<form action="email_pedidos.php" data-shipping name="contact_form" method="POST" class="Contact" data-fade-medium>
	{% for field in page.fields %}
			
			{% if field.type == "field_group_list" %}
				<label class="Contact_label">{{field.label}}</label>
				{% for product in field.fields %}
				<div class="Contact_column{{field.size}}">
        			<label class="Contact_productLabel" for="scales">{{product.label}}</label>
        			<div class="Contact_columnTiny">
        				<input type="number" min="0" name="{{product.name}}" class="Contact_inputNumber" value="0" data-product-name="{{product.name}}" data-product-value="">
        				<div class="Contact_inputNumber__buttons" data-product="{{product.name}}">
        					<div class="Contact_inputNumber__button" data-product-sum="{{product.name}}">+</div>
        					<div class="Contact_inputNumber__button" data-product-sub="{{product.name}}">-</div>
        				</div>
        			</div>
			</div>

				{% endfor %}
			{% else %}
				<div class="Contact_column{{field.size}}">
					<input type="text" class="Contact_input {{field.hiddenClass}}" name="{{field.name}}" type="{{field.type}}" {{field.data}} placeholder="{{field.label}}">
				</div>
			{% endif %}
	{% endfor %}
	<label class="Contact_label" data-shipping-result></label>
	<input type="submit" value="Enviar" data-shipping-submit class="Contact_input Contact_button" disabled>
</form>