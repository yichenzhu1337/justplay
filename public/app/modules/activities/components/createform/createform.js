var module = angular.module('createform', ['activityModule','utilityDirectives','jp.http','jp.flash','jp.utilities','restangular','jp.api.config'])
.value("filterRegex", 'EEEE, MMM d');

var factories = {};
var services = {};
var controllers = {};
var directives = {};

controllers.activityController = function($scope, sportFactory, FlashService, ActivitySvc, DateTimeService, Restangular, api_const, API, $state){
  function init()
  {
    // Services
    $scope.DTSvc = DateTimeService;
    $scope.ActivitySvc = ActivitySvc;

    $scope.activities = sportFactory.getSportInList();
    $scope.activitySelected;
    $scope.submitted = {};

    // Fill our form object.
    $scope.create = {};
    if ($state.params.startingtime !== null)
    {
      $scope.create.date = new Date($state.params.startingtime);    
    }
    if ($scope.create.sport !== '' && $state.params.sport !== null)
    {
      $scope.create.sport = $state.params.sport;
    }
    $scope.create.capacity = 1; // Hardcoded because we're not using it atm 27/08/2014
  }

  $scope.isValidTimeRange = function(startTime, endTime)
  {
    return $scope.DTSvc.isValidTimeRange(startTime, endTime, true);
  }

	$scope.submit = function(isValid) {
    if (isValid && $scope.isValidTimeRange($scope.create.date_from,$scope.create.date_to)) {

      // Map it to the correct fieldname
      $scope.create.startingtime = $scope.create.date_from;
      $scope.create.endingtime = $scope.create.date_to;

      $scope.ActivitySvc.post($scope.create).then(
        function() {
          FlashService.show('You have succesfully created an activity!', 'success');
          $state.go('main.activities.list');
        });;
      
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
