var app = angular.module('rsgApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		subheader: 'Attorney at Law',
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	})
	.when('/experience',{
		subheader: 'Experience',
		controller:'ExpController',
		templateUrl: 'views/experience.html'
	})
	.when('/awardsandpubs',{
		subheader: 'Awards, Publications, and Presentations',
		controller:'AwardsController',
		templateUrl: 'views/awards.html'
	})
	.otherwise({
		redirectTo:"/"
	});
});

app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.subheader = current.$$route.subheader;
    });
}]);