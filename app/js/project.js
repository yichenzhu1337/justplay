var project = angular.module('project', 
	[
	'sortModule',
	'filterModule', 
  'searchbar',
  'cardModule',  
	'ngRoute',
  'dateModule'
	])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/activities', {
			templateUrl: 'views/activities.html'
		})
		.when('/create', {
			templateUrl: 'views/create.html'
		})
		.otherwise({
			redirectTo: '/activities'
		});
}])


