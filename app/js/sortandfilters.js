var module = angular.module('sortModule', [])
.factory('baseSortFactory', function(){
	var factory = {};
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
			attributeName: 'friends',
			displayName: 'Friends',
			defaultOrder: '-'	
		},
		participants : 
		{
			attributeName: 'participants',
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
	factory.getStrategy = function(key){
		return strategies.key;
	};
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
.factory('cardSortFactory', function(baseSortFactory){
	var factory = {};
	var strategies = [];
	init();
	function init(){
		strategies = baseSortFactory.getStrategies(["time", "friends","participants","skill","activity"]);
	}
	factory.getStrategies = function(){
		return strategies;
	};
	return factory;
})
.service('strategyService', function(){
	var attributeName;
	var attributeOrder;
	this.setSortStrategy = function(strat) {
		//currentSortStrategy.pop();
		attributeName = strat;
	};
	this.getSortStrategy = function() {
		return attributeOrder+attributeName;
	}
	this.getOrder = function(){
		return attributeOrder;
	}
	this.setOrder = function(order) {
		attributeOrder = order;
	}
	this.reverseOrder = function(order){
		if (attributeOrder == '+') {
			attributeOrder = '-';
		} else if (attributeOrder =='-') {
			attributeOrder = '+';
		}
		return attributeOrder;
	}
});