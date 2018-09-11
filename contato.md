---
{
	"layout": "page",
	"title": "Contato",
	"subtitle": "Tem alguma duvida, sugestão ou comentário? Conta pra gente.",
	"permalink": "/contato",
	"fields": [
		{
			"type": "text",
			"name": "name",
			"label": "Nome",
			"data": "data-contato-name",
		},
		{
			"type": "email",
			"name": "email",
			"label": "Email",
			"data": "data-contato-email",
		},
		{
			"type": "text",
			"name": "phone",
			"label": "Celular",
			"data": "data-contato-phone"
		},
		{
			"type": "select",
			"name": "subject",
			"label": "label",
			"config": {
				"source": {
					"type": "simple"
				},
				"options": [
					"Duvida",
					"Crítica/Sugestão"
				]
			}
		},
		{
			"type": "textarea",
			"name": "message",
			"label": "Mensagem"
		}
	]
}
---

<form action="https://formspree.io/evemontalvao@gmail.com" name="contact_form" method="POST" class="Contact" data-fade-fast>
	{% for field in page.fields %}
			
			{% if field.config.options %}
				<select class="Contact_input" name="{{field.type}}">
					<option disabled selected>Selecione um assunto</option>
					{% for option in field.config.options %}
						<option value="{{option}}">{{option}}</option>
					{% endfor %}
				</select>
				{% elsif field.type == "textarea" %}
					<textarea rows="10" class="Contact_input" name="{{field.name}}" placeholder="{{field.label}}"></textarea>
				{% else %}
				<input type="text" class="Contact_input" name="{{field.type}}" {{field.data}} type="{{field.type}}" placeholder="{{field.name}}">
			{% endif %}
	{% endfor %}

	<input type="submit" value="Enviar" class="Contact_input Contact_button">
	<input type="hidden" name="_next" value="{{site.url}}/success" />
</form>




