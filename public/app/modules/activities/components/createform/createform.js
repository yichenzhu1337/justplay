var module = angular.module('createform', ['utilityDirectives','jp.http','jp.flash','jp.utilities','restangular','jp.api.config'])
.value("filterRegex", 'EEEE, MMM d');

var factories = {};
var services = {};
var controllers = {};
var directives = {};

controllers.activityController = function($scope, sportFactory, FlashService, DateTimeService, Restangular, api_const, API, $state){
  function init()
  {
    $scope.DTSvc = DateTimeService;
    $scope.activities = sportFactory.getSportInList();
    $scope.activitySelected;
    $scope.submitted = {};
    $scope.create = {};
    $scope.create.capacity = 1; // Hardcoded because we're not using it atm 27/08/2014
  }

  $scope.isValidTimeRange = function(startTime, endTime)
  {
    return $scope.DTSvc.isValidTimeRange(startTime, endTime, true);
  }

	$scope.submit = function(isValid) {
    if (isValid && $scope.isValidTimeRange($scope.create.date_from,$scope.create.date_to)) {
      $scope.submitted = angular.copy($scope.create);
      $scope.submitted.date = $scope.submitted.date.toMysqlFormat();
      $scope.submitted.startingtime = $scope.submitted.date_from.toMysqlFormat();
      $scope.submitted.endingtime = $scope.submitted.date_to.toMysqlFormat();

      Restangular.all(api_const.activities).post($scope.submitted).then(
        function() {
          FlashService.show('You have succesfully created an activity!', 'success');
          $state.go('main.activities.list');
        });
    } else {
      FlashService.show('There were errors with your input', 'error');
    }
	}
  init();
};

controllers.activityCreateDateController = function($scope, $filter, filterRegex, DateTimeService) {
  $scope.filterFormat = filterRegex;
  $scope.minDate = moment(new Date());
  $scope.maxDate = DateTimeService.getDefaultDateRange().endRange;

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
