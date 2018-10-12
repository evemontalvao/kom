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
			const shippingCost = localStorage.getItem('shippingCost')

			const product = $(event.target).attr('data-product-sum')

			const currentElement = $(`[data-product-name="${product}"]`)

			this.items = this.items + 1

			console.log(this.items)

			const currentPrice = this.price * this.items

			this.$result.html(`O valor total é R$${shippingCost? parseInt(shippingCost) + currentPrice : currentPrice},00`)

			currentElement.val(this.items)
		}

		subtract(event) {

			const shippingCost = localStorage.getItem('shippingCost')

			const product = $(event.target).attr('data-product-sub')

			const currentElement = $(`[data-product-name="${product}"]`)

			this.items = this.items - 1
			
			console.log(this.items)

			const currentPrice = this.price * this.items

			if(this.items >= 0) this.$result.html(`O valor total é R$${shippingCost? parseInt(shippingCost) + currentPrice : currentPrice},00`)

			if(this.items > -1) currentElement.val(this.items)
		}

	}

	$(() => new ProductCounter('[data-product]'))
})();