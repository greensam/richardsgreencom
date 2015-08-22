var app = angular.module('rsgApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home',{
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	})
	.otherwise({
		redirectTo:"/home"
	});
});