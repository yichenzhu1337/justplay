var mod = angular.module('sportModule', ['activityModule'])
.factory('sportFactory', function() {
	var factory = {};
	// Sports should be arranged in 5s
	var allSports = ['Badminton', 'Tennis', 'Squash', 'Table Tennis','Basketball',
	'Volleyball','Ultimate Frisbee', 'Soccer', 'Football',
	'Ice Hockey', 'Lacrosse', 'Quidditch', 'Rugby'];

	var sports = {
		'RacquetSports':[['Badminton', 'Tennis', 'Squash', 'Table Tennis']],
		'TeamSports':
		[
			['Basketball','Volleyball','Ultimate Frisbee', 'Soccer', 'Football'], 
			['Ice Hockey', 'Lacrosse', 'Quidditch', 'Rugby']
		]
	};
	factory.getSports = function () {
		return sports;
	};
	factory.getSportInList = function(){
		return allSports;
	}
	return factory;
})
.controller('sportController', function($scope, sportFactory, activityService) {
	$scope.sports = {};
	$scope.toggleIcon;
	$scope.savedSport;
	init();
	function init() {
		$scope.sports = sportFactory.getSports();
		activityService.setActivity("");
		$scope.toggleIcon = false;
		$scope.savedSport = "";
	};
	$scope.setValue = function(sport){
		$scope.currentsport = sport;
		activityService.setActivity($scope.currentsport);
		if ($scope.currentsport == ""){
			$scope.toggleIcon = false;
		} else {
			$scope.toggleIcon = true;
		}
	};
	$scope.resetActivity = function(){
		$scope.setValue("");
		$scope.toggleIcon = false;
	};
	$scope.clickSearchBox = function(curSport){
		// Make it seem empty
		$scope.savedSport = curSport;
		$scope.currentsport = "";
	}
});