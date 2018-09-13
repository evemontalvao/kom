(function() {
	class Main {
		constructor(elem) {
			this.$elem = $(elem)
			this.$fadeFast = $('[data-fade-fast]')
			this.$fadeMedium = $('[data-fade-medium]')
			this.$fadeSlow = $('[data-fade-slow]')
		}

		start() {
			this.$fadeFast.addClass('elementsShow')
			this.$fadeMedium.addClass('elementsShow')
			this.$fadeSlow.addClass('elementsShow')
		}

	}

	$(document).ready(() => {
		const startFade = new Main('[data-template]')
		startFade.start()
	})
})();