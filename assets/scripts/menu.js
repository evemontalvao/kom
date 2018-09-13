(function() {
 class Menu {
 	constructor(elem) {
 		this.$elem = $(elem)
 		this.$menuIcon = $('[data-menu-icon]');
 		this.listener()
 	}

 	listener() {
 		this.$menuIcon.on('click', this.toggleMenu.bind(this))
 	}

 	toggleMenu(event) {
 		this.$elem.toggleClass('active')
 	}
 }

  $(() => new Menu('[data-menu]'))
})();