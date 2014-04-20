var mod = angular.module('filterModule', [])
.filter('property', function(){
	return function(cards, bundle, flag) {
		var filtered = [];
		var isInserted = false;
		if (!flag){
			return cards;
		} else {
			angular.forEach(cards, function(card){
				isInserted = false;
				for (var i = 0; i < bundle.length; i++) {
					for (var j = 0; j < bundle[i].selected.length ; j++) {
						attr = bundle[i].attribute;
						for (var k = 0; k < card[attr].length ; k++) {
							if (card[attr][k].toString().indexOf(bundle[i].selected[j].value) > -1) {
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
			attribute: "skill",
			options: [
				{value: "1", label: "Beginner"},
				{value: "2", label: "Intermediate"},
				{value: "3", label: "Advanced"}
			],
			selected: [],
			placeholder: "Skill",
			maxString: "skills"
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
			maxString: "levels of competition"
		},
		Racquet: {
			attribute: "typeOfMatch",
			options: [
				{value: "Singles", label: "Singles"},
				{value: "Doubles", label: "Doubles"}
			],
			selected: [],
			placeholder: "Singles or Doubles",
			maxString: "types of match"
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