var mod = angular.module('activityModule', ['searchbar'])

var factories = {};
var services = {};
var controllers = {};
var directives = {};

controllers.activityController = function($scope, sportFactory){
	$scope.activities = sportFactory.getSportInList();
	$scope.activitySelected;
};

module.factory(factories);
module.controller(controllers);
module.service(services);
module.directive(directives);
