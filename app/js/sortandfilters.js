var module = angular.module('sortModule', [])
.factory('baseSortFactory', function(){
	var factory = {};
	var strategies = 
	{
		time : 
		{
			attributeName: 'startdate',
			displayAsc: {string: 'Earliest', display: true},
			displayDesc: {string: 'Latest', display: true}
		},
		friends : 
		{
			attributeName: 'friends',
			displayAsc: {string: 'Most Friends', display: true},
			displayDesc: {string: '', display: false}
		},
		participants : 
		{
			attributeName: 'participants',
			displayAsc: {string: 'Most Participants', display: true},
			displayDesc: {string: '', display: false}
		},
		skill : 
		{
			attributeName: 'skill',
			displayAsc: {string: 'Very Skilled', display:true},
			displayDesc: {string: 'Not Skilled', display:true}
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
		strategies = baseSortFactory.getStrategies(["time", "friends","participants","skill"]);
	}
	factory.getStrategies = function(){
		return strategies;
	};
	return factory;
})
.service('strategyService', function(){
	var currentSortStrategy = new Array();
	this.setSortStrategy = function(strat) {
			currentSortStrategy.pop();
			currentSortStrategy.push(strat);
		//currentSortStrategy = strat;
	};
	this.getSortStrategy = function() {
		return currentSortStrategy[0];
	}
});