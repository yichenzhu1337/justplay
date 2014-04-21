var mod = angular.module('filterModule', [])
.filter('property', function($filter){
	return function(cards, bundle, flag) {
		var filtered = [];
		var isInserted = false;
		if (!flag){ 
			return cards;
		} else {
			angular.forEach(cards, function(card){
				isInserted = false;
				for (var i = 0; i < bundle.length; i++) { // For each strategy
					// Only push if we can find the filter to match this + the card matches the filter
					if ($filter('typeChooser')(card,bundle[i])) {
						filtered.push(card);
						break;
					}
				}
			});
			return filtered;
		}
	};
})
.filter('typeChooser', function($filter){
	var allFilters = ['exact'];
	function filterTypeExists(bundle) {
		for (var i = 0; i < allFilters.length; i++) {
			if (bundle.filterType === allFilters[i]) {
				return true;
			}
		}
		return false;
	}
	return function(card, bundle) {
		if (filterTypeExists(bundle)) {
			return $filter(bundle.filterType)(card, bundle);
		} else {
			return null;
		}
	}
})
.filter('exact', function(){
	return function(card, bundle) { 
		for (var j = 0; j < bundle.selected.length ; j++) { // For each filter value selected
			attr = bundle.attribute;
			for (var k = 0; k < card[attr].length ; k++) { // For each card property's values
				if (card[attr][k].toString() === bundle.selected[j].toString()) { // Compare + execute filter
					return true;
				}
			}
		}
		return false;
	};
})
.service('filterService', function(){
	var bundles = [];
	var filterFlag = false;
	this.getFilters = function(){
		return bundles;
	};
	this.setFilters = function(bundledFilters){
		bundles = bundledFilters;
	};

	this.getFilterFlag = function(){
		return filterFlag;
	}
	this.setFilterFlag = function(bool){
		filterFlag = bool;
	}

})
.factory('filterFactory', function(){
	factory = {};
	var bundles = {
		Skill: {
			filterType: "exact",
			attribute: "skill",
			options: [
				{value: "1", label: "Beginner"},
				{value: "2", label: "Intermediate"},
				{value: "3", label: "Advanced"}
			],
			selected: [],
			placeholder: "Skill",
			maxString: "skills",
			maxLength: 3,
			maxLengthString: "Any skill level"
		},
		Competition: {
			filterType: "exact",
			attribute: "competition",
			options: [
				{value: "Recreational", label: "Recreational"}, 
				{value: "Practice", label: "Practice"},
				{value: "Competition", label: "Friendly Competition"}
			],
			selected: [],
			placeholder: "Competitiveness",
			maxString: "levels of competition",
			maxLength: 3,
			maxLengthString: "Any level of competition"
		},
		Racquet: {
			filterType: "exact",
			attribute: "typeOfMatch",
			options: [
				{value: "Singles", label: "Singles"},
				{value: "Doubles", label: "Doubles"}
			],
			selected: [],
			placeholder: "Singles or Doubles",
			maxString: "types of match",
			maxLength: 2,
			maxLengthString: "Singles or doubles"
		}
	};


	factory.getFilters = function(keys){
		var filters = [];
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			bundles[key].id = i;
			filters.push(angular.copy(bundles[key]));
		};
		return filters;
	};


	return factory;
});