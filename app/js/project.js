var project = angular.module('project', ['angularMoment', 'ui.unique', 'sortModule'])
.factory('sportFactory', function() {
	var factory = {};
	// Sports should be arranged in 5s
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
	return factory;
})
.factory('cardFactory', function() {
	var factory = {};
	// Sports should be arranged in 5s
	var cards = 
	[
		{
			date: window.moment().add({months: 1}), 
			obj: 
			[		
				{
					startdate: window.moment().add({months: 1}), 
					enddate: window.moment().add({months: 1, hours: 2}), 
					skill: 3,
					activity: 'Basketball',
					location: 'Gym',
					participants: 1,
					friends: 0,
					nonfriends: 1,
					capacity: 6,
					minimumrequired: 2,
				},
				{
					startdate: window.moment().add({months: 1}), 
					enddate: window.moment().add({months: 1, hours: 2}), 
					skill: 3,
					activity: '5th',
					location: 'Gym',
					participants: 1,
					friends: 0,
					nonfriends: 1,
					capacity: 6,
					minimumrequired: 2,
				}
			]
		},
		{
			date: window.moment().add({months: 0}),
			obj:
			[
				{
					startdate: window.moment().add({months: 0, minutes: 2}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: 2,
					activity: 'Tennis',
					location: 'The Valley',
					participants: 6,
					friends: 2,
					nonfriends: 4,
					capacity: 6,
					minimumrequired: 3,
				}, 
				{
					startdate: window.moment().add({days:0, hours:1}),
					enddate: window.moment().add({days: 0, hours: 4}), 
					skill: 1,
					activity: 'Badminton',
					location: 'Gym',
					participants: 3,
					friends: 1,
					nonfriends: 2,
					capacity: 6,
					minimumrequired: 4,
				},
				{
					startdate: window.moment().add({months: 0, hours:2}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: 2,
					activity: 'Basketball',
					location: 'The Valley',
					participants: 6,
					friends: 2,
					nonfriends: 4,
					capacity: 6,
					minimumrequired: 3,
				},
				{
					startdate: window.moment().add({months: 0, hours: 3}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: 3,
					activity: 'Table Tennis',
					location: 'The Valley',
					participants: 6,
					friends: 4,
					nonfriends: 2,
					capacity: 6,
					minimumrequired: 3,
				}
			]
		},
		{
			date: window.moment().add({days: 1}),
			obj:
			[
				{
					startdate: window.moment().add({days:1, hours:2}),
					enddate: window.moment().add({days: 1, hours: 4}), 
					skill: 1,
					activity: '4th',
					location: 'Gym',
					participants: 3,
					friends: 1,
					nonfriends: 2,
					capacity: 6,
					minimumrequired: 4,
				}
			]
		}		
	];
	/*function formatToDate(array){
		var copy = angular.copy(array);
		for (var i = 0; i < array.length; i++){
			copy[i].startdate = window.moment(copy[i].startdate).format('dddd, MMM Do');
		}
		return copy;
	}*/
	factory.getCards = function () {
		return cards;
	};
	/*factory.getDateCards = function(){
		return formatToDate(cards);
	}*/
	return factory;
})
.factory('cardsFactory', function(){
	var factory = {};
	/**
	 * Queries DB and returns activities between startDate and endDate
	 * in JSON Format.
	 * @param  {Epoch} startDate
	 * @param  {Epoch} endDate
	 * @return {Epoch} JSON activities between specified Dates.
	 */
	function getActivitiesFromDB(startDate, endDate){

	}

	/**
	 * Gets an unordered, unfiltered list of activities where Date is 
	 * between specified time period.	
	 * @param  {Epoch} startDate
	 * @param  {Epoch} endDate
	 * @return {Collection}
	 */
	factory.getUnorderedActivityList = function(startDate, endDate) {
		return getActivitiesFromDB(startDate, endDate);
	}

	/**
	 * Gets an empty unordered, unfiltered list of activities grouped by
	 * date.
	 * @return {Collection}
	 */
	function getEmptyActivityList(){

	}
	
	/**
	 * Gets an unordred, unfiltered list of activities grouped by Date
	 * @param  {Collection} unorderedList
	 * @return {Collection}
	 */
	factory.getActivtyList = function(unorderedList){

	}

	/**
	 * Orders a list of activity according to a set of strategies.
	 * These include filtering and ordering.
	 * @param  {Collection} filterStrategy
	 * @param  {String} orderStrategy
	 * @return {Array}
	 */
	factory.sortListOfActivity = function(filterStrategy, orderStrategy){

	}

	/**
	 * Gets an ordered and filtered list of activities grouped by date
	 * @param  {collection} activityList
	 * @param  {Collection} filterStrategy
	 * @param  {String} orderStrategy
	 * @return {Collection}
	 */
	factory.getSortedFilteredActivityList = function(activityList, filterStrategy, orderStrategy){

	}

	return factory;
});

/*
angular.module('filters', []).
	filter('indate', function () {
		return function (obj, currentdate) {
	  	var date = window.moment(obj.startdate).format('dddd, MMM Do');
	    if (date == currentdate){
	    	return obj;
	    }
	  };
	});*/

var controllers = {};

controllers.strategyController = function($scope, cardSortFactory, strategyService) {
	$scope.strategies = [];
	init();
	function init() {
		// $scope.strategies = strategyFactory.getStrategies();
		$scope.strategies = cardSortFactory.getStrategies();
		$scope.currentstrategy = $scope.strategies[0].displayAsc.string;
		strategyService.setSortStrategy($scope.currentstrategy);
	};
	
	$scope.setValue = function(attributeName, strategy){
		$scope.currentstrategy = strategy;
		// Broadcast to cardcontroller.
		strategyService.setSortStrategy(attributeName);
		
	};
};

controllers.sportController = function($scope, sportFactory) {
	$scope.sports = {};
	init();
	function init() {
		$scope.sports = sportFactory.getSports();
	};
	$scope.setValue = function(sport){
		$scope.currentsport = sport;
	}
};

/*controllers.dateController = function($scope, cardFactory) {
	init();
	function init() {
		$scope.dateFormatedCards = cardFactory.getDateCards();
	};

};*/

controllers.cardsController = function($scope, cardFactory, strategyService) {
	// Base Set of Activities
	var baseActivities;
	$scope.test = 'activity';
	init();
	function init() {
		$scope.dates = cardFactory.getCards();
		$scope.strategyServ = strategyService; // Save the instance of strategyService
		$scope.sortStrategy = $scope.strategyServ.getSortStrategy();
		$scope.$watch('strategyServ.getSortStrategy()', function (newVal, oldVal){
			//console.log("pop");
			$scope.sortStrategy = strategyService.getSortStrategy();
		});
	};
	// Watch for changes in sorting requested.

};

controllers.cardController = function($scope) {
	$scope.totalparticipants;

	$scope.progressbar;
	$scope.peopleneeded;
	$scope.neededorfree;
	$scope.stars = [];
	$scope.skillDescription;
	init();
	function init() {
		$scope.totalparticipants = $scope.card.friends+$scope.card.nonfriends;
		// Determine People needed, description to show and color of progress bar
		if ($scope.totalparticipants >= $scope.card.minimumrequired) {
			$scope.progressbar = 'success';
			$scope.neededorfree = 'SLOTS FREE';
			$scope.peopleneeded = $scope.card.capacity - $scope.totalparticipants;
		} else {
			$scope.progressbar = 'warning';
			$scope.neededorfree = 'NEEDED';
			$scope.peopleneeded = $scope.card.minimumrequired - $scope.totalparticipants;
		}
		// Determine Skill Description
		if ($scope.card.skill == 1) {
			$scope.skillDescription = "Beginner";
		} else if ($scope.card.skill == 2) {
			$scope.skillDescription = "Intermediate";
		} else if ($scope.card.skill == 3) {
			$scope.skillDescription = "Advanced";
		}
		// Determine how many stars to dish out
		for (var i = 0; i < $scope.card.skill; i++) {
			$scope.stars.push(i);
		}
	};


}

project.controller(controllers);

