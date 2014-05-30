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

  $scope.$watch('dt', function(newVal, oldVal) {
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
		templateUrl: 'modules/activities/components/createform/form.tmpl.html'
	}
};


module.factory(factories);
module.controller(controllers);
module.service(services);
module.directive(directives);
