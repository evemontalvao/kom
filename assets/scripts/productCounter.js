(function() {
	class ProductCounter {
		constructor(elem) {
			this.$elem = $(elem)
			this.listener()
		}

		listener() {
			this.$elem.on('click', '[data-product-sum]', this.sum)
			this.$elem.on('click', '[data-product-sub]', this.subtract)
		}

		sum(event) {
			const product = $(event.target).attr('data-product-sum')

			const currentElement = $(`[data-product-name="${product}"]`)

			const value = parseInt(currentElement.val())

			currentElement.val(value + 1)
		}

		subtract(event) {
			const product = $(event.target).attr('data-product-sub')

			const currentElement = $(`[data-product-name="${product}"]`)

			const value = parseInt(currentElement.val())

			if(value > 0) currentElement.val(value - 1)
		}

	}

	$(() => new ProductCounter('[data-product]'))
})();