var mod = angular.module('filterModule', [
	'ui.multiselect'
	])

var factories = {};
var services = {};
var controllers = {};
var directives = {};
var filters = {};

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
}
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

}
factories.filterFactory = function(){
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
}
controllers.filterController = function($scope, filterService, filterFactory){
	init();
	function init(){
		$scope.filterServ = filterService;
		$scope.bundles = angular.copy(filterFactory.getFilters(['Skill','Competition']));
		$scope.filterServ.setFilters(angular.copy($scope.bundles));
		$scope.$watch('bundles', function (newVal, oldVal){
			console.log("outer Bundles New Val: " + newVal[0].selected.length + " Old:" + oldVal[0].selected.length)
			if (newVal === oldVal)
				return;
			console.log("inner Bundles New Val: " + newVal[0].selected.length + " Old:" + oldVal[0].selected.length)
			$scope.filterServ.setFilters(angular.copy($scope.bundles));
		}, true);		
		$scope.$watch('filterServ.getFilterFlag()', function (newVal, oldVal){
			console.log("outer FilterFlag New Val: " + newVal + " Old:" + oldVal);
			if (newVal === oldVal)
				return;
			console.log("inner FilterFlag New Val: " + newVal + " Old:" + oldVal);
			if (newVal == false) {
					$scope.bundles = filterFactory.getFilters(['Skill','Competition']);				
			}
		}, true);	
	};

	$scope.resetFilters = function(){
		$scope.filterServ.setFilterFlag(false);
	}

	$scope.allowFilter = function(){
		$scope.filterServ.setFilterFlag(true);
	}
};

directives.jpactivityfilter = function() {
	return {
		restrict: 'E',
		templateUrl: 'modules/activities/components/filters/filters.tmpl.html'
	}
};

module.factory(factories);
module.controller(controllers);
module.service(services);
module.directive(directives);
module.filter(filters);