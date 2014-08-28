var mod = angular.module('cardModule', 
	[
	'activityModule',
	'angularMoment', 
	'sortModule',
	'filterModule',
	'searchbar',
	'friendModule',
	'skillModule', 
	'ui.bootstrap',
	'jp.utilities',
	'jp.authentication',
	'jp.utilities',
	'jp.flash']);

var controllers = {};
var factories = {};
var directives = {};

/**
 * Deprecated Card Factory
 * @return {[type]} [description]
 */
factories.cardFactory = function() {
	var factory = {};

	return factory;
};

/**
 * Gathers sorts and filters and orchestrates the communication 
 * from sort & filter controllers to card and expandedCard controllers.
 * @param  {scope} $scope          scope
 * @param  {factory} cardFactory     Factory that contains the cards to display
 * @param  {service} strategyData stores and updates the sorting strategy used
 * @param  {service} activityService stores and updates the activity that's filtered
 * @param  {service} filterService   stores and updates additional filters
 * @return {none}                 none
 */
controllers.cardsController = ['$scope', 'watching', 'filterService', 'activityList', '$state',
function($scope, watching, filterService, activityList, $state) {
	// Base Set of Activities

	function init() {
		$scope.dates = activityList;

		$scope.filterServ = filterService;

		/* Initialize & Watch Filter & Sort strategies */
		/*$scope.sortStrategy = watching.sort($scope);*/
		$scope.activityFilter = watching.activity($scope, setFilterFlag);
		$scope.filterFlag = $scope.filterServ.getFilterFlag();

		$scope.searchFilter = [];

		/* WATCH FOR ANY CHANGES IN DATA FOR FILTERING */

		$scope.$watch('filterServ.getResetFilter()', function(newVal, oldVal){
			if (newVal === oldVal){
				return
			}
			setFilterFlag(false);
		});
		
		$scope.$watch('filterServ.getFilters()', function(newVal, oldVal){
			// console.log("outer filter New Val: " + newVal[0].selected.length + " Old:" + oldVal[0].selected.length);
			if (newVal === oldVal){
				return;
			}
			// console.log("inner filter New Val: " + newVal[0].selected.length + " Old:" + oldVal[0].selected.length);
			$scope.searchFilter = $scope.filterServ.getFilters();
		}, true);

		$scope.$watch('filterServ.getFilterFlag()', function(newVal, oldVal) {
			console.log("outer FilterFlag New Val: " + newVal + " Old:" + oldVal);
			if (newVal === oldVal) {
				return;
			}
			$scope.filterFlag = newVal;
		});

	};

	$scope.createActivity = function(date, sport)
	{
		$state.go('main.activities.create', {startingtime: date, sport: sport});
	}

	var setFilterFlag = function(val) {
		$scope.filterServ.setFilterFlag(val);
		$scope.filterFlag = val;
	};
	init();
}];

factories.watching = function(strategyData, searchbarData) {

	/**
	 * Gets the data from a service
	 * @type {Object}
	 */
	var get = {
		sort: function() {
			return strategyData.getSortStrategy()
		},
		activity: function() {
			return searchbarData.getData();
		}
	}

	/**
	 * Watches the service for any changes & updates
	 * scope variable
	 * @type {Object}
	 */
	var watch = {
		sort: function(scope) {
			scope.$watch(get.sort, function(newVal, oldVal){
				if (newVal === oldVal) {
					return;
				} else {
					scope.sortStrategy = strategyData.getSortStrategy();
				}
			});
		},
		activity: function(scope, setFilterFlag) {
			scope.$watch(get.activity, function (newVal, oldVal){
				if (newVal === oldVal){
					return
				}
				console.log("activity newVal:" + newVal +" oldVal:"+oldVal);
				scope.activityFilter = newVal;
				setFilterFlag(false);
			});
		}

	}

	return {
		sort: function(scope) {
			watch.sort(scope);
			return get.sort();
		},
		activity: function(scope, setFilterFlag) {
			watch.activity(scope, setFilterFlag);
			return get.activity();
		}
	}

}


/**
 * Displays the view according to details passed in
 * @param  {scope} $scope               scope
 * @param  {service} $modal               modal to expand card
 * @param  {service} friendService        retrieves friend list
 * @param  {factory} activitySkillFactory returns key values of skill descriptions
 * @return {none}                      none
 */
controllers.cardController = function($scope, $filter, friendService, activitySkillFactory, $state) {
	$scope.peopleneeded;
	$scope.neededorfree;
	$scope.stars = [];
	$scope.skillDescription;
	$scope.friendList = [];

	init();
	function init() {
		$scope.friendList = $filter('arrayContains')($scope.card.participants.list,'areFriends',true);
		$scope.goingList = $filter('arrayContains')($scope.card.participants.list,'areFriends',false);
	}

	$scope.open = function(activityId) {
		$state.go('main.activities.detail', { id: activityId});
	}

	/**
	 * Retrieves the friend list (Static)
	 * @return {none} none
	 */
	$scope.getFriendList = function(){
		var list = [];
		var friendListString = "";
		list = friendService.getFriendList($scope.card.participants.list);
		for (var i = 0; i < list.length; i++) {
			friendListString = friendListString + list[i];
			if (i < list.length-1) {
				friendListString += "<br>"
			}
		}
		return friendListString;
	}
};

controllers.detailedCardController = function($scope, $state, DateTimeService, FlashService, $http, activity, API, authenticationService, Comment){
	var IsParticipant;
	var IsOwner;

	var refreshPage = function()
	{
		$state.go($state.$current, null, { reload: true });
	}

	function init() {
		$scope.activity = activity;
		$scope.AuthSvc = authenticationService;
		$scope.DTSvc = DateTimeService;
		$scope.FlashService = FlashService;
		$scope.isOwner = $scope.currentUserIsOwner(activity);
		$scope.isParticipant = $scope.currentUserIsParticipant(activity.activityJoined.data);
		$scope.isEditable = $scope.isBeforeCurrentDate(activity);
		$scope.isFriendsCollapsed = true;
		$scope.isPeopleCollapsed = true;

	  $scope.minDate = moment(new Date());
	  $scope.maxDate = $scope.DTSvc.getDefaultDateRange().endRange;

	  // Watch for changes in Date, Start/End Time, Location and Description
	  // Since we're still on Angular 1.2.x, theres no watchGroup.
	  $scope.$watch(function() { return $scope.activity.description},function(newVal,oldVal){
	  	if (newVal != oldVal) {
	  		//$http.put('api/v1/activities/'+$scope.activity.id, newVal);
	  		$scope.activity.put();
	  		$scope.FlashService.show('You have successfully edited the activity', 'success');
	  	}
	  });
	  $scope.$watch(function() { return $scope.activity.location},function(newVal,oldVal){
	  	if (newVal != oldVal) {
	  		//$http.put('api/v1/activities/'+$scope.activity.id, newVal);
	  		$scope.activity.put();
	  		$scope.FlashService.show('You have successfully edited the activity', 'success');
	  	}
	  });
	  $scope.$watch(function() { return $scope.activity.startingtime},function(newVal,oldVal){
	  	if (newVal != oldVal) {
	  		if ($scope.DTSvc.isValidTimeRange($scope.activity.startingtime,$scope.activity.endingtime)) {
		  		$scope.activity.put();
		  		$scope.FlashService.show('You have successfully edited the activity', 'success');
	  		} else {
	  			$scope.FlashService.show('Your Starting Time must be before the end time to save changes', 'error');
	  		}
	  	}
	  });
	  $scope.$watch(function() { return $scope.activity.endingtime},function(newVal,oldVal){
	  	if (newVal != oldVal) {
	  		if ($scope.DTSvc.isValidTimeRange($scope.activity.startingtime,$scope.activity.endingtime)) {
		  		$scope.activity.put();
		  		$scope.FlashService.show('You have successfully edited the activity', 'success');
	  		} else {
	  			$scope.FlashService.show('Your Starting Time must be before the Ending Time to save changes', 'error');
	  		}
	  	}
	  });
	};

	/// Helper functions
	/// --------------------------------------------------------------------
	$scope.currentUserIsParticipant = function(participants) {
		if (angular.isUndefined(IsParticipant)){
			for (var i = 0; i < participants.length; i++) {
				if (participants[i].user_id == $scope.AuthSvc.getUser().numeric_id) {
					IsParticipant = true;
					return IsParticipant;
				}
			}
			IsParticipant = false;
		}
		return IsParticipant;
	}

	$scope.currentUserIsOwner = function(activity) {
		if (angular.isUndefined(IsOwner)) {
			if (activity.owner_id == $scope.AuthSvc.getUser().numeric_id) {
				IsOwner = true;
				return IsOwner;
			} else {
				IsOwner = false;
			}
		}
		return IsOwner;
	}

	$scope.isBeforeCurrentDate = function(activity) {
		if (activity.startingtime.isBefore(moment(new Date())))
		{
			return false;
		} else {
			return true;
		}
	}

	/// User actions
	/// --------------------------------------------------------------------
	$scope.join = function(actId) {
		$scope.activity.activityJoined.data.post({activity_id: actId }).then(
			function() {
				FlashService.show('You have joined the activity', 'success');
				refreshPage();
			});
	}

  $scope.unjoin = function(actId) {
  	API.delete('api/v1/activity-join/'+actId).then(
  		function() {
  			FlashService.show('You have left the activity', 'success');
  			refreshPage();
  		});
  }

  // Delete an activity as an owner.
  $scope.cancel = function(actId) {
  	FlashService.show('You have successfully deleted the activity', 'success');
  	API.delete('api/v1/activities/'+actId);
  	$state.go('main.activities.list');
  }

	init();
};

directives.jppeoplegoingicon = function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/modules/activities/components/cards/peoplegoingicon.tmpl.html',
		scope: {
			maxitems: "=",
			maxextras: "=",
			users: "="
			//userlist: "&userList"
		},
		link: function($scope, element, attrs) {
			function init(){
				if ($scope.users.length > $scope.maxitems-1) {
					$scope.showExtra = true;
					$scope.extraList = [];
					$scope.maxShownUsers = $scope.maxitems -1; // make space for the +X
					var start = $scope.users.length - ($scope.maxitems - 1) -1;
					for (var i = start; i < $scope.users.length; i++) {
						$scope.extraList.push($scope.users[i]);
					}
					$scope.displayedExtras = "";

					$scope.displayedExtras = $scope.extraList[0].first_name;

					var extraNotListed = $scope.extraList.length - $scope.maxextras
					for (var i = 1; i < $scope.extraList.length; i++) {
						if (i >= $scope.maxextras) {
							$scope.displayedExtras += "</br>" + extraNotListed  + " other";
							if (extraNotListed > 1) {
								$scope.displayedExtras += "s";
							}
							break;
						} else {
							$scope.displayedExtras += "</br>"
							$scope.displayedExtras += $scope.extraList[i].first_name;
						}
					}
				} else {
					$scope.maxShownUsers = $scope.maxitems;
					$scope.showExtra = false;
					$scope.extraList = [];
				}
			}
			init();
		}
	}
}

mod.controller(controllers);
mod.factory(factories);
mod.directive(directives);