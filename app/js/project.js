var project = angular.module('project', ['angularMoment', 'ui.unique', 'sortModule', 'ui.bootstrap'])
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
					id: 1,
					startdate: window.moment().add({months: 1}), 
					enddate: window.moment().add({months: 1, hours: 2}), 
					skill: 3,
					activity: 'Basketball',
					location: 'UTSC Front Gym',
					participants: {
							totalParticipants: 6,
							totalFriends: 3,
							totalNonFriends: 3,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:false},
								{name: 'Jason Zheng', id: 4, isFriends:false},
								{name: 'Roger Ganesh', id: 5, isFriends: true},
								{name: 'Suzanne Lim', id: 6, isFriends: true},
								{name: 'Someoneelse', id: 7, isFriends: false},																
							]
					},
					capacity: 6,
					minimumrequired: 2,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 5,
						unreadComments: true,

					}	
				},
				{
					id: 2,
					startdate: window.moment().add({months: 1}), 
					enddate: window.moment().add({months: 1, hours: 2}), 
					skill: 3,
					activity: 'Volleyball',
					location: 'UTSC Front Gym',
					participants: {
							totalParticipants: 6,
							totalFriends: 3,
							totalnonFriends: 3,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:false},
								{name: 'Jason Zheng', id: 4, isFriends:false},
								{name: 'Roger Ganesh', id: 5, isFriends: true},
								{name: 'Suzanne Lim', id: 6, isFriends: true},
								{name: 'Someoneelse', id: 7, isFriends: false},																
							]
					},
					capacity: 6,
					minimumrequired: 2,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 5,
						unreadComments: true,
					}	
				}
			]
		},
		{
			date: window.moment().add({months: 0}),
			obj:
			[
				{
					id: 3,
					startdate: window.moment().add({months: 0, minutes: 2}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: 2,
					activity: 'Tennis',
					location: 'The Valley',
					participants: {
							totalParticipants: 4,
							totalFriends: 1,
							totalnonFriends: 3,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:false},
								{name: 'Jason Zheng', id: 4, isFriends:false},
								{name: 'Someoneelse', id: 7, isFriends: false},																
							]
					},
					capacity: 6,
					minimumrequired: 3,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 5,
						unreadComments: true,

					}	
				}, 
				{
					id: 4,
					startdate: window.moment().add({days:0, hours:1}),
					enddate: window.moment().add({days: 0, hours: 4}), 
					skill: 1,
					activity: 'Badminton',
					location: 'UTSC Front Gym',
					participants: {
							totalParticipants: 6,
							totalFriends: 3,
							totalnonFriends: 3,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:false},
								{name: 'Jason Zheng', id: 4, isFriends:false},
								{name: 'Roger Ganesh', id: 5, isFriends: true},
								{name: 'Suzanne Lim', id: 6, isFriends: true},
								{name: 'Someoneelse', id: 7, isFriends: false},																
							]
					},
					capacity: 6,
					minimumrequired: 4,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 5,
						unreadComments: true,

					}	
				},
				{
					id: 5,
					startdate: window.moment().add({months: 0, hours:2}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: 2,
					activity: 'Basketball',
					location: 'UTSC Front Gym',
					participants: {
							totalParticipants: 6,
							totalFriends: 3,
							totalnonFriends: 3,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:false},
								{name: 'Jason Zheng', id: 4, isFriends:false},
								{name: 'Roger Ganesh', id: 5, isFriends: true},
								{name: 'Suzanne Lim', id: 6, isFriends: true},
								{name: 'Someoneelse', id: 7, isFriends: false},																
							]
					},
					capacity: 6,
					minimumrequired: 3,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 5,
						unreadComments: true,

					}	
				},
				{
					id: 6,
					startdate: window.moment().add({months: 0, hours: 3}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: 3,
					activity: 'Table Tennis',
					location: 'The Attic',
					participants: {
							totalParticipants: 5,
							totalFriends: 3,
							totalnonFriends: 2,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:false},
								{name: 'Jason Zheng', id: 4, isFriends:false},
								{name: 'Roger Ganesh', id: 5, isFriends: true},
								{name: 'Suzanne Lim', id: 6, isFriends: true},															
							]
					},
					capacity: 6,
					minimumrequired: 3,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 5,
						unreadComments: true,

					}	
				}
			]
		},
		{
			date: window.moment().add({days: 1}),
			obj:
			[
				{
					id: 7,
					startdate: window.moment().add({days:1, hours:2}),
					enddate: window.moment().add({days: 1, hours: 4}), 
					skill: 1,
					activity: 'Squash',
					location: 'Squash Courts',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalnonFriends: 0,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},															
							]
					},
					capacity: 6,
					minimumrequired: 4,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 5,
						unreadComments: true,

					}	
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

/**
 * Displays strategies provided by factory and sends selected strategies
 * to strategyService
 * @param  {scope} 	 $scope          scope
 * @param  {factory} cardSortFactory Factory containing the strategies we want
 * @param  {service} strategyService Service that sends selected strategies to cardController
 * @return {none}                    none
 */
controllers.strategyController = function($scope, cardSortFactory, strategyService) {
	$scope.strategies = []; // Array containing all strategies
	init();

	/**
	 * Setups up the current selected strategy and sends the strategy
	 * to the card.
	 * @return {none} none
	 */
	function init() {
		$scope.strategies = cardSortFactory.getStrategies();
		$scope.currentstrategy = $scope.strategies[0].displayName;
		$scope.currentOrder = $scope.strategies[0].defaultOrder;
		setSortIcon($scope.currentOrder);
		strategyService.setOrder($scope.currentOrder);
		strategyService.setSortStrategy($scope.strategies[0].attributeName);
	};
	
	/**
	 * Sets current strategy as well as passing it to the
	 * strategy service.
	 * @param {string} attributeName Actual attribute use to sort.
	 * @param {string} displayName   Description of the strategy
	 */
	$scope.setStrategy = function(attributeName, displayName, defaultOrder){
		$scope.currentstrategy = displayName;
		strategyService.setSortStrategy(attributeName);
		strategyService.setOrder(defaultOrder);
		setSortIcon(defaultOrder);
	};

	/**
	 * Sets which icon to use upon switching order
	 * @param {char} order + or -
	 */
	function setSortIcon(order){
		if (order == '+'){
			$scope.orderIcon = "up";
		} else {
			$scope.orderIcon = "down";
		}
	};

	/**
	 * Reverses order of currentOrder and reflects
	 * this on UI.
	 * @return {none} none
	 */
	$scope.reverseOrder = function(){
		// Update strategyService as well as scope's currentOrder
		$scope.currentOrder = strategyService.reverseOrder($scope.currentOrder); 
		// Update our sort icon
		setSortIcon($scope.currentOrder);
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
	init();
	function init() {
		$scope.dates = cardFactory.getCards(); 
		$scope.strategyServ = strategyService; // Bind instance of strategyService to scope
		$scope.sortStrategy = $scope.strategyServ.getSortStrategy(); 
		$scope.$watch('strategyServ.getSortStrategy()', function (newVal, oldVal){
			console.log("newVal:" + newVal +" oldVal:"+oldVal);
			$scope.sortStrategy = strategyService.getSortStrategy();
		});
	};
	// Watch for changes in sorting requested.

};

controllers.cardController = function($scope) {
	$scope.progressbar;
	$scope.peopleneeded;
	$scope.neededorfree;
	$scope.stars = [];
	$scope.skillDescription;
	init();
	function init() {
		// Determine People needed, description to show and color of progress bar
		if ($scope.card.participants.totalParticipants >= $scope.card.minimumrequired) {
			$scope.progressbar = 'success';
			$scope.neededorfree = 'SLOTS FREE';
			$scope.peopleneeded = $scope.card.capacity - $scope.card.participants.totalParticipants;
		} else {
			$scope.progressbar = 'warning';
			$scope.neededorfree = 'NEEDED';
			$scope.peopleneeded = $scope.card.minimumrequired  - $scope.card.participants.totalParticipants;
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

