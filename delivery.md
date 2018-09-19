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
    
    <label class="Contact_label">Selecione os produtos:</label>
    
    <div class="Contact_column1">
    
    	<label class="Contact_productLabel" for="scales">Melissa, Capim Limão, Abacaxi e Gengibre <small>(12 un.)</small></label>
    
    	<div class="Contact_columnTiny">
    
    		<input type="number" min="0" name="pack-melissa" class="Contact_inputNumber" value="0" data-product-name="pack-melissa" data-product-value="">
    
    		<div class="Contact_inputNumber__buttons" data-product="pack-melissa">
    
    			<div class="Contact_inputNumber__button" data-product-sum="pack-melissa">+</div>
    
    			<div class="Contact_inputNumber__button" data-product-sub="pack-melissa">-</div>
    
    		</div>
    
    	</div>
    
    </div>
    
    <div class="Contact_column1">
    
    	<label class="Contact_productLabel" for="scales">Hibisco e Frutas Vermelhas <small>(12 un.)</small></label>
    
    	<div class="Contact_columnTiny">
    
    		<input type="number" min="0" name="pack-hibisco" class="Contact_inputNumber" value="0" data-product-name="pack-hibisco" data-product-value="">
    
    		<div class="Contact_inputNumber__buttons" data-product="pack-hibisco">
    
    			<div class="Contact_inputNumber__button" data-product-sum="pack-hibisco">+</div>
    
    			<div class="Contact_inputNumber__button" data-product-sub="pack-hibisco">-</div>
    
    		</div>
    
    	</div>
    
    </div>
    
    <div class="Contact_column1">
    
      <label class="Contact_productLabel" for="scales">Aroeira, Maçã verde e Menta <small>(12 un.)</small></label>
    
      <div class="Contact_columnTiny">
    
        <input type="number" min="0" name="pack-aroeira" class="Contact_inputNumber" value="0" data-product-name="pack-aroeira" data-product-value="">
    
        <div class="Contact_inputNumber__buttons" data-product="pack-aroeira">
    
          <div class="Contact_inputNumber__button" data-product-sum="pack-aroeira">+</div>
    
          <div class="Contact_inputNumber__button" data-product-sub="pack-aroeira">-</div>
    
        </div>
    
      </div>
    
    </div>
    
    <div class="Contact_column1">
    
      <label class="Contact_productLabel" for="scales">Melissa e Hibisco <small>(6 un. cada)</small></label>
    
      <div class="Contact_columnTiny">
    
        <input type="number" min="0" name="pack-melissa-hibisco" class="Contact_inputNumber" value="0" data-product-name="pack-melissa-hibisco" data-product-value="">
    
        <div class="Contact_inputNumber__buttons" data-product="pack-melissa-hibisco">
    
          <div class="Contact_inputNumber__button" data-product-sum="pack-melissa-hibisco">+</div>
    
          <div class="Contact_inputNumber__button" data-product-sub="pack-melissa-hibisco">-</div>
    
        </div>
    
      </div>
    
    </div>
    
    <div class="Contact_column1">
    
    	<label class="Contact_productLabel" for="scales">Melissa, Hibisco e Aroeira <small>(4 un. cada)</small></label>
    
    	<div class="Contact_columnTiny">
    
    		<input type="number" min="0" name="pack-melissa-hibisco-aroeira" class="Contact_inputNumber" value="0" data-product-name="pack-melissa-hibisco-aroeira" data-product-value="">
    
    		<div class="Contact_inputNumber__buttons" data-product="pack-melissa-hibisco-aroeira">
    
    			<div class="Contact_inputNumber__button" data-product-sum="pack-melissa-hibisco-aroeira">+</div>
    
    			<div class="Contact_inputNumber__button" data-product-sub="pack-melissa-hibisco-aroeira">-</div>
    
    		</div>
    
    	</div>
    
    </div>
    
    <label class="Contact_label" data-shipping-result></label>
    <label class="Contact_label" data-counter-result></label>
    
    <input type="submit" value="Enviar" data-shipping-submit class="Contact_input Contact_button" disabled>

</form>