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
				templateUrl: "app/modules/activities/partials/bodyheader.tmpl.html"
			},
			"body": {
				templateUrl: "app/modules/activities/partials/body.tmpl.html"
			}
		},
		resolve: {
/*			activityList: function($q, $timeout, CardFactory) {
				var d = $q.defer();
				var data = CardFactory.getList();
				$timeout(
					d.resolve('hi')
				,1000);
				return d.promise;
			}	*/		
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
				templateUrl: "app/modules/activities/partials/activitydetail.tmpl.html"
			}
		}
	});
}]);
