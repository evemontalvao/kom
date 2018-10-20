(function() {
	class ProductCounter {
		constructor(elem) {
			this.$elem = $(elem)
			this.$result = $('[data-counter-result]')
			this.listener()
			this.price = 120
			this.items = 0
		}

		listener() {
			this.$elem.on('click', '[data-product-sum]', this.sum.bind(this))
			this.$elem.on('click', '[data-product-sub]', this.subtract.bind(this))
		}

		sum(event) {
			const currentQtd = parseInt($(event.target).parent().parent().find('[data-product-value]').val()) + 1

			const shippingCost = localStorage.getItem('shippingCost')

			const product = $(event.target).attr('data-product-sum')

			const currentElement = $(`[data-product-name="${product}"]`)

			this.items = this.items + 1

			const currentPrice = this.price * this.items

			this.$result.html(`O valor total é R$${shippingCost? parseInt(shippingCost) + currentPrice : currentPrice},00`)

			currentElement.val(currentQtd)
		}

		subtract(event) {
			const currentQtd = parseInt($(event.target).parent().parent().find('[data-product-value]').val())

			if(currentQtd == 0) return

			const shippingCost = localStorage.getItem('shippingCost')

			const product = $(event.target).attr('data-product-sub')

			const currentElement = $(`[data-product-name="${product}"]`)

			this.items = this.items - 1
			
			const currentPrice = this.price * this.items

			if(this.items >= 0) this.$result.html(`O valor total é R$${shippingCost? parseInt(shippingCost) + currentPrice : currentPrice},00`)

			currentElement.val(currentQtd - 1)
		}

	}

	$(() => new ProductCounter('[data-product]'))
})();