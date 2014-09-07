var mod = angular.module('activityManagerModule', []);

var controllers = {};
var factories = {};
var services = {};
var directives = {};

services.activityManagerService = [function() {
	this.setSelectedCategory = function(category)
	{
		this.cat = category;
	}

	this.getSelectedCategory = function()
	{
		return this.cat;
	}
}];

controllers.activityManagerBodyController = 
['$scope', 'pastActList', 'upcomingActList', 'hostedActList', 'activityManagerService', '$filter', 
function($scope, pastActList, upcomingActList, hostedActList, activityManagerService, $filter) {
	function init() {
		$scope.activities = 
		{
			Past: $filter('orderBy')(constructOneArray(pastActList),'-starttime'),
			Upcoming: $filter('orderBy')(constructOneArray(upcomingActList),'+starttime'),
			Hosted: $filter('orderBy')(constructOneArray(hostedActList),'+starttime')
		};
		$scope.activityManagerSvc = activityManagerService;
		$scope.selectedCat = 'Upcoming';
		$scope.activeActList = $scope.activities;

		$scope.$watch(function() { return $scope.activityManagerSvc.getSelectedCategory() }, function(newVal,oldVal){
				if (newVal !== oldVal)
				{
					$scope.selectedCat = newVal;
				}
			});
	}

	var constructOneArray = function(list)
	{
		var masterarray = [];
		for (var i = 0; i < list.length; i++)
		{
			for (var j = 0; j < list[i].obj.length; j++)
			{
				masterarray.push(list[i].obj[j]);	
			}
		}
		return masterarray;
	}

	init();
}];

controllers.activityManagerHeaderController = ['$scope', 'activityManagerService', function($scope, activityManagerService) {
	function init() {
		$scope.activityManagerSvc = activityManagerService;

		$scope.$watch(function() { return $scope.radioModel}, function(newVal, oldVal) {
			if (newVal !== oldVal)
			{
				$scope.activityManagerSvc.setSelectedCategory($scope.radioModel);
			}
		});
		$scope.radioModel = 'Upcoming';
		$scope.activityManagerSvc.setSelectedCategory($scope.radioModel);
	}

	init();
}];

mod.controller(controllers);
mod.factory(factories);
mod.service(services);
mod.directive(directives);