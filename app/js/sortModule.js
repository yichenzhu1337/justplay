var module = angular.module('sortModule', [])
.factory('baseSortFactory', function(){
	var factory = {};

	/* Master list of strategies
		Organized in terms of:
		StrategyKey:
		{
			attributeName: 'attributeToSortCardBy'
			displayName: 'Display Of Name on UI'
			defaultOrder: '+ (Asc) or - (Desc)'
		}
	*/ 
	var strategies = 
	{
		time : 
		{
			attributeName: 'startdate',
			displayName: 'Time',
			defaultOrder: '+'	
		},
		friends : 
		{
			attributeName: 'participants.totalFriends',
			displayName: 'Friends',
			defaultOrder: '-'	
		},
		participants : 
		{
			attributeName: 'participants.totalParticipants',
			displayName: 'Participants',
			defaultOrder: '-'
		},
		skill : 
		{
			attributeName: 'skill',
			displayName: 'Skill',
			defaultOrder: '+'	
		},
		activity : 
		{
			attributeName: 'activity',
			displayName: 'Activity',
			defaultOrder: '+'	
		}		
	};

	/**
	 * Retrieves strategy object based on key
	 * @param  {string} keys key for strategy
	 * @return {Array}       Array of strategies (Each strategy is
	 * wrapped in a collection)
	 */
	factory.getStrategies = function(keys){
		var strats = [];
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			strats.push(strategies[key]);
		};
		return strats;
	};

	return factory;
})
/**
 * Factory that provides strategies for activityCards
 * @param  {factory} baseSortFactory Master Factory that holds all strategies
 * @return {factory}                 Main uses: getStrategies()
 */
.factory('cardSortFactory', function(baseSortFactory){
	var factory = {};
	var strategies = []; // List of strategies
	init();

	/**
	 * Retrieves strategies for activityCards.
	 * @return {none} none
	 */
	function init(){
		strategies = baseSortFactory.getStrategies(["time", "friends","participants","skill","activity"]);
	}

	/**
	 * Gets a list of strategy.
	 * @return {[type]} [description]
	 */
	factory.getStrategies = function(){
		return strategies.splice(0);
	};
	return factory;
})
/**
 * Intermediate strategyService to relay attributeName
 * and attributeOrder between strategyController and cardsControllers
 * @return {[type]} [description]
 */
.service('strategyService', function(){
	var attributeName;
	var attributeOrder;
	/**
	 * Sets current sort strategy
	 * @param {string} strat attributeName
	 */
	this.setSortStrategy = function(strat) {
		//currentSortStrategy.pop();
		attributeName = strat;
	};

	/**
	 * Gets current sort strategy with the order
	 * @return {string} '+Attributename' or '-AttributeName'
	 */
	this.getSortStrategy = function() {
		return attributeOrder+attributeName;
	}

	/**
	 * Gets current order of strategy
	 * @return {string} order
	 */
	this.getOrder = function(){
		return attributeOrder;
	}

	/**
	 * Sets current order of strategy
	 * @param {string} order order of strategy
	 */
	this.setOrder = function(order) {
		attributeOrder = order;
	}

	/**
	 * Reverses the attributeOrder (+/-) based on input and returns
	 * the new attributeOrder
	 * @param  {string} order order of strategy
	 * @return {string}       current order of strategy
	 */
	this.reverseOrder = function(order){
		if (attributeOrder == '+') {
			attributeOrder = '-';
		} else if (attributeOrder =='-') {
			attributeOrder = '+';
		}
		return attributeOrder;
	}
})
/**
 * Displays sorting strategies provided by factory and sends selected 
 * strategies to strategyService
 * @param  {scope} 	 $scope          scope
 * @param  {factory} cardSortFactory Factory containing the strategies we want
 * @param  {service} strategyService Service that sends selected strategies to cardController
 * @return {none}                    none
 */
.controller('sortController', function($scope, cardSortFactory, strategyService) {
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
});