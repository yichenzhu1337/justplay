var mod = angular.module('dateModule', [])
.value("filterRegex", 'EEEE, MMM d');

var controllers = {};

controllers.activityListDateController = function($scope, $location, $anchorScroll, $filter, filterRegex) {
	$scope.today = function() {
    $scope.dt = $scope.dateobj.date;
  };
  $scope.filterFormat = filterRegex;
  $scope.today();
  $scope.minDate = new Date();
  $scope.maxDate = new Date();
  $scope.maxDate.setDate($scope.maxDate.getDate()+6); // Show a week extra at max.

  $scope.clear = function () {
    $scope.dt = null;
  };

  function scrollTo(id) {
  	var formatedId = $filter('date')(id, $scope.filterFormat);
  	var old = $location.hash();
  	$location.hash(formatedId);
    console.log($location.hash());
    $anchorScroll();
    $location.hash(old);
  };

  $scope.$watch('dt', function(newVal, oldVal) {
  	if (newVal === oldVal) {
  		return
  	};

  	scrollTo(newVal);
  });

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
};

mod.controller(controllers);

