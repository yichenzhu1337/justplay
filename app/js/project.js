var project = angular.module('project', 
	[
	'angularMoment', 
	'sortModule',
	'skillModule', 
	'cardModule', 
	'friendModule', 
	'activityModule', 
	'sportModule',
	'filterModule', 
	'ui.multiselect',
	'ngRoute'
	])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/activities', {
			templateUrl: 'views/activities.html'
		})
		.when('/create', {
			templateUrl: 'views/create.html'
		})
		.otherwise({
			redirectTo: '/activities'
		});
}])
.value("filterRegex", 'EEEE, MMM d')
.directive('selectOnClick', function () {
  // Linker function
	return function (scope, element, attrs) {
	  element.bind('click', function () {
	    this.select();
	  });
	};
});


var controllers = {};
controllers.dateController = function($scope, $location, $anchorScroll, $filter, filterRegex) {
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

/**
 * Displays the view for expanded cards
 * @param  {scope} $scope               scope
 * @param  {modalInstance} $modalInstance       modal
 * @param  {object} card                 json object for card details
 * @param  {factory} activitySkillFactory contains key values of skill descriptions
 * @return {none}                      none
 */
controllers.expandedCardController = function($scope, $modalInstance, card, activitySkillFactory) {
	init();
	function init(){
		$scope.card = card;
		$scope.stars = [];
		$scope.friendShow = true;
		$scope.commentShow = true;
		for (var i = 0; i < $scope.card.skill; i++) {
			$scope.stars.push(i);
		}
		$scope.skillDescription = activitySkillFactory.getStringValue($scope.card.skill);
	};

	$scope.toggleFriends = function(){
		$scope.friendShow = !$scope.friendShow;
	}

	$scope.toggleComments = function(){
		$scope.commentShow = !$scope.commentShow;
	}

	$scope.join = function() {
		$scope.ok();
	}

	$scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
  	console.log('cancel!');
    $modalInstance.dismiss('cancel');
  };
};

project.controller(controllers);

