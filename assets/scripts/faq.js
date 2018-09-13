(function() {
 class Faq {
 	constructor(elem) {
 		this.$elem = $(elem)
 		this.$accordion = this.$elem.find('[data-accordion-item]');
 		this.listener()
 	}

 	listener() {
 		this.$accordion.on('click', '[data-accordion-item-title]', this.toggleAnswer.bind(this))
 	}

 	toggleAnswer(event) {
 		$(event.target).toggleClass('closed')
 		$(event.target).toggleClass('opened')
 		$(event.target).siblings('[data-accordion-item-content]').toggleClass('active')
 	}
 }

  $(() => new Faq('[data-accordion]'))
})();