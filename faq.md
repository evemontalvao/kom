---
title: FAQ
layout: faq
date: 2018-09-13 20:40:38 +0000
subtitle: ''
questions:
- question: Teste?
  answer: Teste
---
<div class="Faq_accordionWrapper" data-accordion>

	{% for item in page.questions %}

	<div class="Faq_accordion" data-accordion-item>

			<div class="Faq_accordionTitle closed" data-accordion-item-title>{{item.question}}</div>

			<div class="Faq_accordionContent" data-accordion-item-content>{{item.answer}}</div>

	</div>

	{% endfor %}

</div>