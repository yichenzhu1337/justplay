var mod = angular.module('filterModule', [])
.filter('property', function(){
	return function(cards, prop, values) {
		var filtered = [];
		angular.forEach(cards, function(card){
			for (var i = 0; i < values.length ; i++) {
				if (card[prop].indexOf(values[i]) > -1) {
					filtered.push(card);
				}
			}
		});
		return filtered;
	};
})
.service('filterService', function(){
	
});