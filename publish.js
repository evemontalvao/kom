(function() {
	$('[data-publish]').on('click', function() {
		var pass = prompt('Digite a senha:')

		var data = {password: pass}

		function asyncRequest(){
		 	var promiseObj = new Promise(function(resolve, reject){
		 		$.post('publish.php', data, function (response, error) {
		 			if(error) reject(error)

		        	resolve(response)
        		});
		 	});
		 	return promiseObj;
		}

		asyncRequest()
		.then(result => console.log(result))
		.catch(error => console.log(error))
        
	})
})()