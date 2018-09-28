(function() {
	class ProductCounter {
		constructor(elem) {
			this.$elem = $(elem)
			this.$result = $('[data-counter-result]')
			this.listener()
			this.price = 120
		}

		listener() {
			this.$elem.on('click', '[data-product-sum]', this.sum.bind(this))
			this.$elem.on('click', '[data-product-sub]', this.subtract.bind(this))
		}

		sum(event) {
			const shippingCost = localStorage.getItem('shippingCost')

			const product = $(event.target).attr('data-product-sum')

			const currentElement = $(`[data-product-name="${product}"]`)

			const value = parseInt(currentElement.val()) + 1

			const currentPrice = this.price * value

			this.$result.html(`O valor total é R$${shippingCost? parseInt(shippingCost) + currentPrice : currentPrice},00`)

			currentElement.val(value)
		}

		subtract(event) {
			const shippingCost = localStorage.getItem('shippingCost')

			const product = $(event.target).attr('data-product-sub')

			const currentElement = $(`[data-product-name="${product}"]`)

			const value = parseInt(currentElement.val()) - 1

			const currentPrice = this.price * value

			this.$result.html(`O valor total é R$${shippingCost? parseInt(shippingCost) + currentPrice : currentPrice},00`)

			if(value > -1) currentElement.val(value)
		}

	}

	$(() => new ProductCounter('[data-product]'))
})();