var jpactivitiespage = angular.module('jp.activitiespage', 
	[
	'ui.router',
	'sortModule',
	'filterModule', 
  'searchbar',
  'cardModule',
  'activityManagerModule',
  'dateModule',
  'createform',
  'activityModule',
  'jp.flash'
	]);

jpactivitiespage
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	var access = 
	{
		auth: 'auth',
		anon: 'anon'
	}
	
	$stateProvider
	.state('main.activities.list', {
		url: "/",
		views: {
			"header": {
				templateUrl: "app/modules/activities/partials/activitylist.header.tmpl.html"
			},
			"body": {
				templateUrl: "app/modules/activities/partials/activitylist.body.tmpl.html",
				controller: "cardsController"
			}
		},
		resolve: {
			activityList: function(ActivitySvc) {
				return ActivitySvc.getList();
			}
		},
		data: {
			access: access.auth
		}
	})
	.state('main.activities.create', {
		url: "/create?sport&startingtime",
		views: {
			"header": {}, 
			"body": {
				templateUrl: "app/modules/activities/partials/createform.tmpl.html"
			}
		},
		data: {
			access: access.auth
		}
	})
	.state('main.activities.manager', {
		url: "/manager",
		views: {
			"header": {
				templateUrl: "app/modules/activities/partials/activitymanager.header.tmpl.html",
				controller: 'activityManagerHeaderController'
			},
			"body": {
				templateUrl: "app/modules/activities/partials/activitymanager.body.tmpl.html",
				controller: 'activityManagerBodyController'
			}
		},
		resolve: {
			pastActList: function(ActivitySvc) {
				return ActivitySvc.getPastList();
			},
			upcomingActList: function(ActivitySvc) {
				return ActivitySvc.getUpcomingList();
			},
			hostedActList: function(ActivitySvc) {
				return ActivitySvc.getHostedList();
			}
		},
		data: {
			access: access.auth
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
			activity: function(ActivitySvc, $stateParams, $state, FlashService) {
				return ActivitySvc.get($stateParams.id).then(
					function(data) {
						return data;
					},
					function() {
						FlashService.show("Activity doesn't exist anymore", 'error');
						$state.go('main.activities.list');
					});
			}
		},
		data: {
			access: access.auth
		}
	});
}]);
