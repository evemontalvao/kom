(function() {
	class Main {
		constructor(elem) {
			console.log('oie')
			this.$elem = $(elem)
			this.$fadeFast = $('[data-fade-fast]')
			this.$fadeMedium = $('[data-fade-medium]')
			this.$fadeSlow = $('[data-fade-slow]')
		}

		start() {
			console.log('ioie')
			this.$fadeFast.addClass('elementsShow')
			this.$fadeMedium.addClass('elementsShow')
			this.$fadeSlow.addClass('elementsShow')
		}

	}

	$(document).ready(() => {
		console.log('oie')
		const startFade = new Main('[data-template]')
		startFade.start()
	})
})();