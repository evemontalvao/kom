(($) => {
	const ShippingCalculation = function() {

		this.regions = [
			{
				1: [1000, 1599],
				2: [2000, 2099],
				4: [4000, 4599],
				3: [3000, 3199],
				5: [5000, 5599]	
			},
			{
				2: [2100, 2999],
				3: [3200, 3699],
				4: [4400, 4799],
				6: [6000, 6849]

			},
			{
				3: [3700, 3999],
				4: [4800, 4999],
				5: [5600, 5899],
				7: [7000, 7999],
				8: [8000, 8999],
				9: [9000, 9999]
			}
		]

		this.prices = {
			0: 15,
			1: 20,
			2: 30
		}

		this.excludes = {
			5: ['05200', '05299'],
			4: ['04400', '04499']
		}

		this.calculate(09030210)
	}

	ShippingCalculation.prototype.calculate = function(cep) {
		const firstDigit = parseInt(cep.toString()[0])

		if(!this.regions[0][firstDigit] && !this.regions[1][firstDigit] && !this.regions[2][firstDigit]) return console.log('cep invalido')

		const firstFourDigits = parseInt(cep.toString().substring(0, 4))

		const value = this.prices[this.checkForValue(firstDigit, firstFourDigits)]

		console.log(value)
		
	}

	ShippingCalculation.prototype.checkForValue = function(firstDigit, digits) {
		let clientsRegion = this.regions.filter(function(region) {
			return region.hasOwnProperty(firstDigit)
		})

		let value;

		for(let prop in clientsRegion) {
			if(digits >= clientsRegion[prop][firstDigit][0] && digits <= clientsRegion[prop][firstDigit][1]) {
				value = prop
			}
		}

		if(this.isExcludedArea(digits, firstDigit)) return parseInt(value + 1)

		return value
		
	}

	ShippingCalculation.prototype.isExcludedArea = function(digits, firstDigit) {

		if(digits >= this.excludes[firstDigit][0] && digits <= this.excludes[firstDigit][1]) {
			return true
		}

	}

	const shippingCalculation = new ShippingCalculation()

})(jQuery)