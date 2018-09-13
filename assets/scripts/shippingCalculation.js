(function() {
  
  const CITIES = {
    "São Paulo": {
      price: 20,
      neighborhoods: {
        // Centro
        "Sé Bela Vista": 15,
        "Bom Retiro": 15,
        "Cambuci": 15,
        "Consolação": 15,
        "Liberdade": 15,
        "República": 15,
        "Santa Cecília": 15,
        "Sé": 15,
        // Leste
        "Aricanduva": 20,
        "Carrão": 20,
        "Vila Formosa": 20,
        "Cidade Tiradentes": 20,
        "Ermelino Matarazzo": 20,
        "Ponte Rasa": 20,
        "Guaianases": 20,
        "Lajeado": 20,
        "Itaim Paulista": 20,
        "Vila Curuçá": 20,
        "Itaquera": 20,
        "Cidade Líder": 20,
        "José Bonifácio": 20,
        "Parque do Carmo": 20,
        "Mooca Água Rasa": 20,
        "Belém": 20,
        "Brás": 20,
        "Moóca": 20,
        "Pari": 20,
        "Tatuapé": 20,
        "Penha": 20,
        "Artur Alvim": 20,
        "Cangaíba": 20,
        "Penha": 20,
        "Vila Matilde": 20,
        "São Mateus": 20,
        "São Rafael": 20,
        "São Miguel ": 20,
        "Jardim Helena": 20,
        "Vila Jacuí": 20,
        "Sapopemba": 20,
        "Vila Prudente": 20,
        "São Lucas": 20,
        // Norte
        "Casa Verde": 20,
        "Cachoeirinha": 20,
        "Limão": 20,
        "Brasilândia": 20,
        "Freguesia do Ó": 20,
        "Jaçanã": 20,
        "Tremembé": 20,
        "Perus": 20,
        "Anhanguera": 20,
        "Pirituba": 20,
        "Jaraguá": 20,
        "São Domingos": 20,
        "Santana": 20,
        "Tucuruvi": 20,
        "Mandaqui": 20,
        "Vila Maria": 20,
        "Vila Guilherme": 20,
        "Vila Medeiros": 20,
        // Oeste
        "Butantã": 15,
        "Morumbi": 15,
        "Raposo Tavares": 15,
        "Rio Pequeno": 15,
        "Vila Sônia": 15,
        "Lapa": 15,
        "Barra Funda": 15,
        "Jaguara": 15,
        "Jaguaré": 15,
        "Perdizes": 15,
        "Vila Leopoldina": 15,
        "Pinheiros": 15,
        "Alto de Pinheiros": 15,
        "Itaim Bibi": 15,
        "Jardim Paulista": 15,
        "Pinheiros": 15,
        // Sul
        "Campo Limpo": 20,
        "Capão Redondo": 20,
        "Vila Andrade": 20,
        "Capela do Socorro Cidade Dutra": 20,
        "Grajaú": 20,
        "Socorro": 20,
        "Cidade Ademar": 20,
        "Pedreira": 20,
        "Ipiranga": 20,
        "Sacomã": 20,
        "Jabaquara": 20,
        "M'Boi Mirim": 20,
        "Jardim Ângela": 20,
        "Jardim São Luís": 20,
        "Parelheiros": 20,
        "Marsilac": 20,
        "Santo Amaro": 20,
        "Campo Belo": 20,
        "Campo Grande": 20,
        "Santo Amaro": 20,
        "Moema": 20,
        "Saúde": 20,
        "Vila Mariana": 20
      }
    },
    "Arujá": {
      price: 30,
      neighborhoods: {}
    },
    "Barueri": {
      price: 30,
      neighborhoods: {}
    },
    "Biritiba Mirim": {
      price: 30,
      neighborhoods: {}
    },
    "Caieiras": {
      price: 30,
      neighborhoods: {}
    },
    "Cajamar": {
      price: 30,
      neighborhoods: {}
    },
    "Carapicuíba": {
      price: 30,
      neighborhoods: {}
    },
    "Cotia": {
      price: 30,
      neighborhoods: {}
    },
    "Diadema": {
      price: 30,
      neighborhoods: {}
    },
    "Embu das Artes": {
      price: 30,
      neighborhoods: {}
    },
    "Embu-Guaçu": {
      price: 30,
      neighborhoods: {}
    },
    "Ferraz de Vasconcelos": {
      price: 30,
      neighborhoods: {}
    },
    "Francisco Morato": {
      price: 30,
      neighborhoods: {}
    },
    "Franco da Rocha": {
      price: 30,
      neighborhoods: {}
    },
    "Guararema": {
      price: 30,
      neighborhoods: {}
    },
    "Guarulhos": {
      price: 30,
      neighborhoods: {}
    },
    "Itapecerica da Serra": {
      price: 30,
      neighborhoods: {}
    },
    "Itapevi": {
      price: 30,
      neighborhoods: {}
    },
    "Itaquaquecetuba": {
      price: 30,
      neighborhoods: {}
    },
    "Jandira": {
      price: 30,
      neighborhoods: {}
    },
    "Juquitiba": {
      price: 30,
      neighborhoods: {}
    },
    "Mairiporã": {
      price: 30,
      neighborhoods: {}
    },
    "Mauá": {
      price: 30,
      neighborhoods: {}
    },
    "Mogi das Cruzes": {
      price: 30,
      neighborhoods: {}
    },
    "Osasco": {
      price: 30,
      neighborhoods: {}
    },
    "Pirapora do Bom Jesus": {
      price: 30,
      neighborhoods: {}
    },
    "Poá": {
      price: 30,
      neighborhoods: {}
    },
    "Ribeirão Pires": {
      price: 30,
      neighborhoods: {}
    },
    "Rio Grande da Serra": {
      price: 30,
      neighborhoods: {}
    },
    "Salesópolis": {
      price: 30,
      neighborhoods: {}
    },
    "Santa Isabel": {
      price: 30,
      neighborhoods: {}
    },
    "Santana de Parnaíba": {
      price: 30,
      neighborhoods: {}
    },
    "Santo André": {
      price: 30,
      neighborhoods: {}
    },
    "São Bernardo do Campo": {
      price: 30,
      neighborhoods: {}
    },
    "São Caetano do Sul": {
      price: 30,
      neighborhoods: {}
    },
    "São Lourenço da Serra": {
      price: 30,
      neighborhoods: {}
    },
    "Suzano": {
      price: 30,
      neighborhoods: {}
    },
    "Taboão da Serra": {
      price: 30,
      neighborhoods: {}
    },
    "Vargem Grande Paulista": {
      price: 30,
      neighborhoods: {}
    }
  }


  class ShippingCalculator {
    constructor(elem) {
      this.$elem = $(elem)
      this.$input = this.$elem.find('[data-shipping-cep]')
      this.$result = this.$elem.find('[data-shipping-result]')
      this.$submit = this.$elem.find('[data-shipping-submit]')
      this.$street = this.$elem.find('[data-shipping-logradouro]')
      this.$neighbourhood = this.$elem.find('[data-shipping-bairro]')

      this.CITIES = Object.keys(CITIES)

      this.initWithKnowCep()
      this.listeners()
    }

    initWithKnowCep() {
      const cost = localStorage.getItem('shippingCost')
      if (cost) {
        let cepInfo = JSON.parse(localStorage.getItem('cep_info'))

        this.$input.val(cepInfo.cep)
        return this.result(cost, cepInfo)
      }
    }

    listeners() {
      this.$input.on('blur', $.proxy(this, 'getCep'))
    }

    getCep(e) {
      e.preventDefault()
      const value = this.$input.val().replace(/\D/gm, '')
    
      if (value.length !== 8) return
    
      this.$result.html('')

      $.get(`https://viacep.com.br/ws/${value}/json/`, $.proxy(this, 'cepGetted'))
    }

    cepGetted(res) {     
      if(res.erro || !res) return this.result()
      if(this.CITIES.indexOf(res.localidade) === -1) return this.result()

      let city = CITIES[res.localidade]
      let neighborhood = city.neighborhoods[res.bairro]

      localStorage.setItem('cep_info', JSON.stringify(res))

      if (neighborhood) return this.result(neighborhood, res)

      return this.result(city.price, res)
    }

    result(value, info) {
      if (!value) {
        return this.$result.html('Nós ainda não entregamos nessa região. :(')
      }

      this.$submit.removeAttr('disabled')
      localStorage.setItem('shippingCost', value)
      this.$street.val(info.logradouro)
      this.$neighbourhood.val(info.bairro)

      return this.$result.html(
        `O valor da entrega para sua região é R$ ${value},00.`
      )
    }

  }

  $(() => new ShippingCalculator('[data-shipping]'))

})()