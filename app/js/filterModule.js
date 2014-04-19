var mod = angular.module('filterModule', [])
.filter('property', function(){
	return function(cards, bundle) {
		var filtered = [];
		var isInserted = false;
		if (bundle === null){
			return cards;
		} else {
			angular.forEach(cards, function(card){
				isInserted = false;
				// Loop through list of attributes to filter
				for (var i = 0; i < bundle.length; i++) { 
					// Loop through selected items
					for (var j = 0; j < bundle[i].selected.length; j++) { 
						attr = bundle[i].attribute;
						// Loop through all of the card's current values for a specific attribute
						for (var k = 0; k < card[attr].length ; k++) { 
							if (card[attr][k].toString().indexOf(bundle[i].selected[j]) > -1) {
								filtered.push(card);
								isInserted = true;
								break;
							}
						}
					}
					if (isInserted) {
						break;
					}
				}
			});
			return filtered;
		}
	};
})
.service('filterService', function(filterFactory){
	var resetBundle = [];
	var filterBundle = [];
	var resetFilterFlag = false;
	var filter = [];

	this.setFilter = function(f){
		filter = f;
	}

	this.getFilter = function() {
		return filter;
	}

	/*
	Getters and setters for variables
	 */
	this.getResetBundle = function() {
		return resetBundle;
	};

	function setResetBundle(bundle) {
		resetBundle = bundle;
	};

	this.getFilterBundle = function() {
		return filterBundle;
	};

	function setFilterBundle(bundle){
		filterBundle = bundle;
	};

	function getResetFilterFlag(){
		return resetFilterFlag;
	};

	function setResetFilterFlag(filterFlag) {
		resetFilterFlag = filterFlag;
	};

	// Resets the display of filters to default
	// Resets the actual display of activities to show all
	this.resetFilters = function(sport) {
		setResetFilterFlag(true);
		setResetBundle(getFiltersForSport(sport));
	};

	// Interface for Controllers to push a filter to cardsController
	// Responsible for enabling filter.
	this.pushFilter = function(bundle) {
		setFilterBundle(bundle);
	};

	function getFiltersForSport(sport) {
		return filterFactory.presetFilters(sport);
	};
})
.factory('filterFactory', function(){
	factory = {};
	var bundles = {
		Skill: {
			attribute: "skill",
			options: [
				{value: "1", label: "Beginner"},
				{value: "2", label: "Intermediate"},
				{value: "3", label: "Advanced"}
			],
			selected: [],
			placeholder: "Skill",
			maxString: "Any Skill Level"
		},
		Competition: {
			attribute: "Competition",
			options: [
				{value: "Recreational", label: "Recreational"}, 
				{value: "Practice", label: "Practice"},
				{value: "Competition", label: "Friendly Competition"}
			],
			selected: [],
			placeholder: "Competitiveness",
			maxString: "Any level of competition"
		},
		Racquet: {
			attribute: "typeOfMatch",
			options: [
				{value: "Singles", label: "Singles"},
				{value: "Doubles", label: "Doubles"}
			],
			selected: [],
			placeholder: "Singles or Doubles",
			maxString: "Any type of match"
		}
	};


	factory.insertDefaults = function(bundle){
		// Push in the all options as defaults
		for (var i = 0; i < bundle.options.length; i++){
			bundle.selected.push(bundle.options[i]);
		}
		return bundle;
	}

	factory.getFilters = function(keys){
		var filters = [];
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			bundles[key].id = i;
			var bun = angular.copy(bundles[key]);
			filters.push(factory.insertDefaults(bun));
		};
		return filters;
	};

	factory.presetFilters = function(sport) {
		return factory.getFilters(['Skill']);
	}

	return factory;
});