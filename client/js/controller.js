myApp.controller('emailController', function($scope, emailFactory){

	$scope.submitForm = function(){
		
		form = {
			name: $scope.name, 
			email: $scope.email,
			message: $scope.messages
		}
		emailFactory.submitForm(form);
		$scope.showForm = true; 
		$scope.name = null; 
		$scope.email = null; 
		$scope.messages = null; 
	}
})