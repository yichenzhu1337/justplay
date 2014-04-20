var mod = angular.module('filterModule', [])
.filter('property', function(){
	return function(cards, bundle, flag) {
		var filtered = [];
		var isInserted = false;
		console.log("Filter Method (Flag):" + flag);

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
.filter('exact', function(){
	return function(card, bundle) {
		console.log('I am passing thropugh exact filtering!');
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
			maxString: "skills"
		},
		Competition: {
			filterType: "exact",
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
			filterType: "exact",
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