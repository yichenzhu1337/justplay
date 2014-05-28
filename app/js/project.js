var project = angular.module('project', 
	[
	'sortModule',
	'skillModule', 
	'cardModule', 
	'friendModule',  
	'searchbar',
	'filterModule', 
	'ui.multiselect',
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


