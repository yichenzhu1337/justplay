var mod = angular.module('sportModule', ['activityModule'])
.factory('sportFactory', function() {
	var factory = {};
	// Sports should be arranged in 5s
	
	var allSports = [
		{id: 1, category: ['RacquetSports'], label: 'Badminton'},
		{id: 2, category: ['RacquetSports'], label: 'Tennis'}, 
		{id: 3, category: ['RacquetSports'], label: 'Squash'}, 
		{id: 4, category: ['RacquetSports'], label: 'Table Tennis'},
		{id: 5, category: ['TeamSports'], label: 'Basketball'},
		{id: 6, category: ['TeamSports'], label: 'Volleyball'},
		{id: 7, category: ['TeamSports'], label: 'Ultimate Frisbee'}, 
		{id: 8, category: ['TeamSports'], label: 'Soccer'}, 
		{id: 9, category: ['TeamSports'], label: 'Football'},
		{id: 10, category: ['TeamSports'], label: 'Ice Hockey'}, 
		{id: 11, category: ['TeamSports'], label: 'Lacrosse'}, 
		{id: 12, category: ['TeamSports'], label: 'Quidditch'}, 
		{id: 13, category: ['TeamSports'], label: 'Rugby'}
	];

	var vsports = {
		'RacquetSports':[['Badminton', 'Tennis', 'Squash', 'Table Tennis']],
		'TeamSports':
		[
			['Basketball','Volleyball','Ultimate Frisbee', 'Soccer', 'Football'], 
			['Ice Hockey', 'Lacrosse', 'Quidditch', 'Rugby']
		]
	};
	factory.getSports = function () {
		var i;
		var cat;
		var sports = {
			'RacquetSports':[[]],
			'TeamSports':[[],[]]
		};

		for (i = 0; i < allSports.length; i++) {
			cat = allSports[i].category;
			
			if (cat == 'TeamSports') {
				if (sports.TeamSports[0].length< 5) {
					sports.TeamSports[0].push(allSports[i]);					
				} else {
					sports.TeamSports[1].push(allSports[i]);
				}
			} else if (cat == 'RacquetSports') {
				sports.RacquetSports[0].push(allSports[i]);
			}
		}

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