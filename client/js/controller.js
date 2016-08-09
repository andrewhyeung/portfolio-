myApp.controller('emailController', function($scope, emailFactory){

	$scope.submitForm = function(){
		form = {
			name: $scope.name, 
			email: $scope.email,
			message: $scope.message
		}
		emailFactory.submitForm(form); 
		$scope.name = null; 
		$scope.email = null; 
		$scope.message = null; 
	}
})