var module = angular.module('createform', [])
.value("filterRegex", 'EEEE, MMM d');

var factories = {};
var services = {};
var controllers = {};
var directives = {};

controllers.activityController = function($scope, sportFactory){
	$scope.activities = sportFactory.getSportInList();
	$scope.activitySelected;

	$scope.submitt = function(isValid) {
		$scope.showValidation;
		if (isValid) {
			console.log("success: " + isValid);
		} else {
			console.log("fail: " + isValid);
		}
	}
};

controllers.activityCreateDateController = function($scope, $filter, filterRegex) {
  $scope.filterFormat = filterRegex;
  $scope.minDate = new Date();
  $scope.maxDate = new Date();
  $scope.maxDate.setDate($scope.maxDate.getDate()+6); // Show a week extra at max.

  $scope.$watch('startdate', function(newVal, oldVal) {
  	if (newVal === oldVal) {
  		return
  	};
  	console.log(newVal);
  });

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
}

directives.jpcreateform = function() {
	return {
		restrict: 'E',
    scope: {},
		templateUrl: 'modules/activities/components/createform/form.tmpl.html'
	}
};

controllers.Ctrl = function($scope) {
  $scope.services = [
    {ServiceID: 1, ServiceName: 'Service1'},
    {ServiceID: 2, ServiceName: 'Service2'},
    {ServiceID: 3, ServiceName: 'Service3'}
  ];
};

module.factory(factories);
module.controller(controllers);
module.service(services);
module.directive(directives);
