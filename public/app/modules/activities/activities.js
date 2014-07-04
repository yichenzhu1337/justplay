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

jpactivitiespage
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('main.activities.list', {
		url: "/",
		views: {
			"header": {
				templateUrl: "app/modules/activities/partials/header.tmpl.html"
			},
			"body": {
				templateUrl: "app/modules/activities/partials/body.tmpl.html"
			}
		}
	})
	.state('main.activities.create', {
		url: "/create",
		views: {
			"header": {}, 
			"body": {
				templateUrl: "app/modules/activities/partials/createform.tmpl.html"
			}
		}
	})
	.state('main.activities.detail', {
		url: "/:id",
		views: {
			"header": {},
			"body": {
				templateUrl: "app/modules/activities/partials/activitydetail.tmpl.html"
			}
		}
	});
}]);
