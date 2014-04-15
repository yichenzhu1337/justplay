var mod = angular.module('filterModule', [])
.filter('property', function(){
	return function(cards, bundle) {
		var filtered = [];
		var isInserted = false;
		angular.forEach(cards, function(card){
			isInserted = false;
			for (var i = 0; i < bundle.length; i++) {
				//for (var j = 0; j < bundle[i].selected.length ; j++) {
					attr = bundle[i].attribute;
					if (card[attr].toString().indexOf(bundle[i].selected) > -1) {
						filtered.push(card);
						isInserted = true;
						//break;
					}
				//}
				if (isInserted) {
					break;
				}
				// This card definately canno
			}
		});
		return filtered;
	};
})
.service('filterService', function(){
	var bundles = [];
	this.getFilters = function(){
		return bundles;
	};
	this.setFilters = function(bundledFilters){
		bundles = bundledFilters;
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
			selected: "3",
			placeholder: "Skill"
		},
		Competition: {
			attribute: "Competition",
			options: [
				{value: "Recreational", label: "Recreational"}, 
				{value: "Practice", label: "Practice"},
				{value: "Competition", label: "Friendly Competition"}
			],
			selected: [],
			placeholder: "Competitiveness"
		},
		Racquet: {
			attribute: "typeOfMatch",
			options: [
				{value: "Singles", label: "Singles"},
				{value: "Doubles", label: "Doubles"}
			],
			selected: [],
			placeholder: "Singles or Doubles"
		}
	};

	factory.getFilters = function(keys){
		var filters = [];
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			bundles[key].id = i;
			filters.push(bundles[key]);
		};
		return filters;
	};

	return factory;
});