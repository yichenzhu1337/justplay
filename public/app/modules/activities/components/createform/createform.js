var module = angular.module('createform', ['utilityDirectives','jp.http','jp.flash'])
.value("filterRegex", 'EEEE, MMM d');

var factories = {};
var services = {};
var controllers = {};
var directives = {};

controllers.activityController = function($scope, sportFactory, FlashService, API, $state){
	$scope.activities = sportFactory.getSportInList();
	$scope.activitySelected;
  $scope.submitted = {};

	$scope.submit = function(isValid) {
    if (isValid) {
      $scope.submitted = angular.copy($scope.create);
      $scope.submitted.date = $scope.submitted.date.toMysqlFormat();
      $scope.submitted.date_from = $scope.submitted.date_from.toMysqlFormat();
      $scope.submitted.date_to = $scope.submitted.date_to.toMysqlFormat();
      API.post('api/activities',$scope.submitted).then(
        function(){
          $state.go('main.activities.list');
          FlashService.show('You have succesfully created an activity!', 'success');
        })
    } else {
      FlashService.show('There were errors with your input', 'error');
    }
    
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
  		return;
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
		templateUrl: 'app/modules/activities/components/createform/form.tmpl.html'
	}
};

module.factory(factories);
module.controller(controllers);
module.service(services);
module.directive(directives);
