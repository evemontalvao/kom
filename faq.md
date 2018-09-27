---
title: FAQ
layout: faq
date: 2018-09-13 20:40:38 +0000
subtitle: ''
questions:
- question: O que é a Kombucha KOM?
  answer: A Kombucha KOM é uma bebida fermentada, a base de blends de infusões que
    garantem um sabor equilibrado e suave. Durante o processo de fermentação se produzem
    bactérias benéficas ao organismo, além de vitaminas B e C. Uma bebida extremamente
    funcional, probiótica, prebiótica, o que garante o consumo de um alimento repleto
    de microorganismos que auxiliam em amplos aspectos a sua saúde.
- question: Qual o prazo de validade da Kombucha KOM?
  answer: A KOM tem a validade de 4 meses (120 dias) refrigerada entre 3 e 7 graus.
- question: Por que a KOM não tem açúcar residual?
  answer: 'A KOM levou 5 anos para desenvolver um produto estável, controlado, com
    a garantia advinda de laboratórios e institutos de análise para manter um padrão
    de qualidade.  Um dos nossos focos foi chegar ao ZERO açúcar para que toda a família,
    independente das restrições, possa consumir nosso produto. Através de controles
    laboratoriais efetuados em cada lote, garantimos que todo o açúcar inserido na
    primeira fermentação é consumido pelas bactérias. Por este motivo, sugerimos que
    quem gosta ou está habituado á bebidas mais açucaradas adoce sua KOM da maneira
    que achar mais confortável, desde stévia, eritrytol, até açúcar convencional,
    fique á vontade e usufrua com prazer. '
- question: Por que a KOM não tem cafeína?
  answer: 'Mais uma característica que a KOM se preocupou na formulação de seus produtos
    para torná-los acessíveis ao mais amplo público. Nossos blends de infusões não
    contém cafeína, por isso se você tiver alguma restrição, pode consumir á vontade. '
- question: Preciso manter a KOM refrigerada?
  answer: Sim. O processo de fermentação da KOM é totalmente natural, sem adição de
    conservadores por isso as bactérias e leveduras estão vivas e continuam seu trabalho
    na garrafa, junto com as frutas adicionadas. O calor instiga o processo de fermentação
    e de produção do gás, por isso é necessário manter a KOM refrigerada entre 3 e
    7 graus para garantir a estabilidade do produto.
- question: O gás da KOM é natural?
  answer: Sim. O gás da KOM é produzido naturalmente no processo de fermentação. Por
    isso podem haver pequenas variações entre uma garrafa e outra.
- question: LOW CARB, VEGANO, SEM GLUTEN, Como?
  answer: 'As frutas e insumos que usamos na KOM tem um índice baixíssimo de carboidratos,
    são livres de glúten e contaminação. Além disso, nenhum insumo usado na produção
    contém matéria prima de origem animal. '

---
<div class="Faq_accordionWrapper" data-accordion>

	{% for item in page.questions %}

	<div class="Faq_accordion" data-accordion-item>

			<div class="Faq_accordionTitle closed" data-accordion-item-title>{{item.question}}</div>

			<div class="Faq_accordionContent" data-accordion-item-content>{{item.answer}}</div>

	</div>

	{% endfor %}

</div>