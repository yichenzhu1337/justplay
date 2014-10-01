var module = angular.module('createform', ['activityModule','jp.http','jp.flash','jp.utilities','restangular','jp.api.config'])
.value("filterRegex", 'EEEE, MMM d');

var factories = {};
var services = {};
var controllers = {};
var directives = {};

controllers.activityController = ['$scope', 'sportFactory', 'FlashService', 'ActivitySvc', 'DateTimeService', 'Restangular', 'api_const', 'API', '$state',
  function($scope, sportFactory, FlashService, ActivitySvc, DateTimeService, Restangular, api_const, API, $state){
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
      if ($state.params.startingtime !== null && angular.isDefined($state.params.startingtime))
      {
        $scope.create.date = new Date($state.params.startingtime);    
      }
      if ($scope.create.sport !== '' && $state.params.sport !== null && angular.isDefined($state.params.sport))
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
        var m_date = moment($scope.create.date);
        var m_startingtime = moment($scope.create.date_from);
        var m_endingtime = moment($scope.create.date_to);
        m_startingtime.set('date',m_date.date());
        m_startingtime.set('month',m_date.month());
        m_startingtime.set('year',m_date.year());
        m_endingtime.set('date',m_date.date());
        m_endingtime.set('month',m_date.month());
        m_endingtime.set('year',m_date.year());
         
        $scope.create.startingtime = m_startingtime.tz("Etc/UTC").toDate();
        $scope.create.endingtime = m_endingtime.tz("Etc/UTC").toDate();

        $scope.ActivitySvc.post($scope.create).then(
          function(id) {
            FlashService.show('You have succesfully created an activity!', 'success');
            $state.go('main.activities.detail', {id: id});
          });;
        
      } else {
        FlashService.show('There were errors with your input', 'error');
      }
  	}
    init();
  }];

controllers.activityCreateDateController = ['$scope', '$filter', 'filterRegex', 'DateTimeService',
  function($scope, $filter, filterRegex, DateTimeService) {
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
  }];

// Directive used to parse floats
directives.toNumber = [function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$parsers.push(function (value) {
                return parseFloat(value || '');
            });
        }
    };
}];

directives.jpcreateform = [function() {
	return {
		restrict: 'E',
    scope: {},
		templateUrl: 'app/modules/activities/components/createform/form.tmpl.html'
	}
}];

module.factory(factories);
module.controller(controllers);
module.service(services);
module.directive(directives);
