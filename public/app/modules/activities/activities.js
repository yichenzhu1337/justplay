var jpactivitiespage = angular.module('jp.activitiespage', 
	[
	'ui.router',
	'sortModule',
	'filterModule', 
  'searchbar',
  'cardModule',  
  'dateModule',
  'createform'
	]);

jpactivitiespage.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('mainpage.activities', {
		url: "/activities",
		views: {
			"header": {
				templateUrl: "app/modules/activities/partials/header.tmpl.html"
			},
			"body": {
				templateUrl: "app/modules/activities/partials/body.tmpl.html"
			}
		}
	})
	.state('mainpage.create', {
		url: "/activities/create",
		views: {
			"header": {}, 
			"body": {
				templateUrl: "app/modules/activities/partials/createform.tmpl.html"
			}
		}
	})
}]);
