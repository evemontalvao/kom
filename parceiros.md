---
{
	"layout": "page",
	"title": "Parceiros",
	"subtitle": "Tem alguma duvida, sugestão ou comentário? Conta pra gente.",
	"permalink": "/parceiros",
	"fields": [
		{
			"type": "text",
			"name": "cnpj",
			"label": "CNPJ",
			"data": "data-partner-cnpj",
			"size": 1
		},
		{
			"type": "text",
			"name": "inscricao_estadual",
			"label": "Inscrição Estadual",
			"size": 1
		},
		{
			"type": "text",
			"name": "nome_fantasia",
			"label": "Nome Fantasia",
			"size": 1
		},
		{
			"type": "text",
			"name": "nome_responsavel",
			"label": "Nome Responsável",
			"size": 1
		},
		{
			"type": "text",
			"name": "telefone",
			"label": "Telefone",
			"data": "data-contato-phone",
			"size": 2
		},
		{
			"type": "text",
			"name": "email",
			"label": "Email",
			"size": 2
		},
		{
			"type": "text",
			"name": "cep",
			"label": "CEP",
			"data": "data-shipping-cep",
			"size": 1
		},
		{
			"type": "text",
			"name": "logradouro",
			"label": "Logradouro",
			"size": 1
		},
		{
			"type": "text",
			"name": "numero",
			"label": "Número",
			"size": 2
		},
		{
			"type": "text",
			"name": "complemento",
			"label": "Complemento",
			"size": 2
		}
	]
}
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
