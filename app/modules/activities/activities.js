var jpactivitiespage = angular.module('jp.activitiespage', 
	[
	'ui.router',
	'sortModule',
	'filterModule', 
  'searchbar',
  'cardModule',  
  'dateModule'
	]);

jpactivitiespage.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('mainpage.activities', {
		url: "/activities",
		views: {
			"header": {
				templateUrl: "modules/activities/partials/header.tmpl.html"
			},
			"body": {
				templateUrl: "modules/activities/partials/body.tmpl.html"
			}
		}
	})
	.state('mainpage.create', {
		url: "/activities/create",
		views: {
			"header": {
				templateUrl: "modules/activities/partials/createform.tmpl.html"
			}, 
			"body": {}
		}
	})
}]);
