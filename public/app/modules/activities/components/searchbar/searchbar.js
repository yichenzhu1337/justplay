var module = angular.module('searchbar', [])
.value('SportValue', {
	sports: [
		{id: 'Badminton', category: ['RacquetSports'], label: 'Badminton'},
		{id: 'Tennis', category: ['RacquetSports'], label: 'Tennis'}, 
		{id: 'Squash', category: ['RacquetSports'], label: 'Squash'}, 
		{id: 'Table Tennis', category: ['RacquetSports'], label: 'Table Tennis'},
		{id: 'Basketball', category: ['TeamSports'], label: 'Basketball'},
		{id: 'Volleyball', category: ['TeamSports'], label: 'Volleyball'},
		{id: 'Ultimate Frisbee', category: ['TeamSports'], label: 'Ultimate Frisbee'}, 
		{id: 'Soccer', category: ['TeamSports'], label: 'Soccer'}, 
		{id: 'Football', category: ['TeamSports'], label: 'Football'},
		{id: 'Ice Hockey', category: ['TeamSports'], label: 'Ice Hockey'}, 
		{id: 'Lacrosse', category: ['TeamSports'], label: 'Lacrosse'}, 
		{id: 'Quidditch', category: ['TeamSports'], label: 'Quidditch'}, 
		{id: 'Rugby', category: ['TeamSports'], label: 'Rugby'}
	]
});
var factories = {};
var services = {};
var controllers = {};
var directives = {};

factories.sportFactory = ['SportValue', function(SportValue) {
	var factory = {};
	// Sports should be arranged in 5s
	
	var allSports = SportValue.sports;

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
}];

services.searchbarData = [function(){
	var activity;
	/**
	 * Sets current activity
	 * @param {string} act activity
	 */
	this.setData = function(act) {
		//currentSortStrategy.pop();
		activity = act;
	};

	/**
	 * Gets current activity
	 * @return {string} activity
	 */
	this.getData = function() {
		return activity;
	};
}];

controllers.sportController = ['$scope','sportFactory','searchbarData',
	function($scope, sportFactory, searchbarData) {
		$scope.sports = {};
		$scope.toggleIcon;
		$scope.savedSport;
		init();
		function init() {
			$scope.sports = sportFactory.getSports();
			searchbarData.setData("");
			$scope.toggleIcon = false;
			$scope.savedSport = "";
		};
		$scope.setValue = function(sport){
			$scope.currentsport = sport.label;
			searchbarData.setData($scope.currentsport);
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
	}];

directives.jpsearchbar = [function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'app/modules/activities/components/searchbar/search-bar.tmpl.html'
	}
}];

module.factory(factories);
module.controller(controllers);
module.service(services);
module.directive(directives);
