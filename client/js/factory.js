myApp.factory('emailFactory', function($http){
	var factory = {}; 
	factory.submitForm = function(form){
		$http.post('/email', form); 
	}
	return factory; 
})