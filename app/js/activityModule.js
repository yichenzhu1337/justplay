var mod = angular.module('activityModule', ['sportModule'])
.service('activityService', function(){
	var activity;
	/**
	 * Sets current activity
	 * @param {string} act activity
	 */
	this.setActivity = function(act) {
		//currentSortStrategy.pop();
		activity = act;
	};

	/**
	 * Gets current activity
	 * @return {string} activity
	 */
	this.getActivity = function() {
		return activity;
	};
})
.controller('activityController', function($scope, sportFactory){
	$scope.activities = sportFactory.getSportInList();
	$scope.activitySelected;
});