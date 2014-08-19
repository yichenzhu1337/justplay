var jpactivitiespage = angular.module('jp.activitiespage', 
	[
	'ui.router',
	'sortModule',
	'filterModule', 
  'searchbar',
        'cardModule',
        'dateModule',
        'createform',
        'activityModule'
	]);

jpactivitiespage
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('main.activities.list', {
		url: "/",
		views: {
			"header": {
				templateUrl: "app/modules/activities/partials/bodyheader.tmpl.html"
			},
			"body": {
				templateUrl: "app/modules/activities/partials/body.tmpl.html",
				controller: "cardsController"
			}
		},
		resolve: {
			activityList: function(ActivitySvc) {
				return ActivitySvc.getList();
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
			"header": {
				templateUrl: "app/modules/activities/partials/detailedheader.tmpl.html"
			},
			"body": {
				templateUrl: "app/modules/activities/partials/activitydetail.tmpl.html",
				controller: 'detailedCardController'
			}
		},
		resolve: {
			activity: function(ActivitySvc, $stateParams) {
				return ActivitySvc.get($stateParams.id).then(
					function(data) {
						return data;
					});
			}
		}
	});
}]);
