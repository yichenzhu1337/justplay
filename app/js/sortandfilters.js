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
});