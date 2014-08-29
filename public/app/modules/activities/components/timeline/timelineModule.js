var mod = angular.module('timelineModule', []);

var controllers = {};
var factories = {};
var directives = {};

controllers.timelineController = ['$scope', 'activityList', function($scope, activityList) {
	function init() {
		$scope.activities = constructOneArray(activityList);
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

mod.controller(controllers);
mod.factory(factories);
mod.directive(directives);