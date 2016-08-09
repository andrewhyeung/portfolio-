var myApp = angular.module('myApp', ['ngRoute']);
	myApp.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/body.html'
		})
		.otherwise({
			redirectTo : '/'
		})
	})