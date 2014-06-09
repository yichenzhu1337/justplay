var mod = angular.module('activityModule', ['searchbar']);

var factories = {};
var services = {};
var controllers = {};
var directives = {};

controllers.activityController = function($scope, sportFactory){
	$scope.activities = sportFactory.getSportInList();
	$scope.activitySelected;
};

mod.controller(controllers);
mod.service(services);
mod.directive(directives);
