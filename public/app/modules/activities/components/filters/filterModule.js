var mod = angular.module('filterModule', []);

var services = {};
var filters = {};

filters.arrayContains = function($filter) {
	return function(arrayOfParticipants, key, value) {
		var array = [];
		for (var i = 0; i < arrayOfParticipants.length; i++) {
			if (arrayOfParticipants[i][key] == value) {
				array.push(arrayOfParticipants[i]);
			}
		}
		return array;
	}
};
filters.property = function($filter){
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
};
filters.typeChooser = function($filter){
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
};
filters.exact = function(){
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
};
filters.startFrom = function($filter){
  return function(input, start) {
  	if (angular.isDefined(input)) {
      start = +start; //parse to int
      return input.slice(start);
  	} else {
  		return [];
  	}
  }
};
services.filterService = function(){
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
};

module.service(services);
module.filter(filters);