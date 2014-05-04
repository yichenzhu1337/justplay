var project = angular.module('project', 
	['angularMoment', 'ui.unique', 'sortModule', 'ui.bootstrap',
	'skillModule', 'cardModule', 'friendModule', 'activityModule', 'mgcrea.ngStrap', 'ngAnimate'
	,'filterModule', 'ui.multiselect'])
.value("filterRegex", 'EEEE, MMM d')
.factory('sportFactory', function() {
	var factory = {};
	// Sports should be arranged in 5s
	var allSports = ['Badminton', 'Tennis', 'Squash', 'Table Tennis','Basketball',
	'Volleyball','Ultimate Frisbee', 'Soccer', 'Football',
	'Ice Hockey', 'Lacrosse', 'Quidditch', 'Rugby'];

	var sports = {
		'RacquetSports':[['Badminton', 'Tennis', 'Squash', 'Table Tennis']],
		'TeamSports':
		[
			['Basketball','Volleyball','Ultimate Frisbee', 'Soccer', 'Football'], 
			['Ice Hockey', 'Lacrosse', 'Quidditch', 'Rugby']
		]
	};
	factory.getSports = function () {
		return sports;
	};
	factory.getSportInList = function(){
		return allSports;
	}
	return factory;
})
.directive('selectOnClick', function () {
  // Linker function
	return function (scope, element, attrs) {
	  element.bind('click', function () {
	    this.select();
	  });
	};
});


/*
angular.module('filters', []).
	filter('indate', function () {
		return function (obj, currentdate) {
	  	var date = window.moment(obj.startdate).format('dddd, MMM Do');
	    if (date == currentdate){
	    	return obj;
	    }
	  };
	});*/

var controllers = {};
controllers.dateController = function($scope, $location, $anchorScroll, $filter, filterRegex) {
	$scope.today = function() {
    $scope.dt = $scope.dateobj.date;
  };
  $scope.filterFormat = filterRegex;
  $scope.today();
  $scope.minDate = new Date();
  $scope.maxDate = new Date();
  $scope.maxDate.setDate($scope.maxDate.getDate()+6); // Show a week extra at max.

  $scope.clear = function () {
    $scope.dt = null;
  };

  function scrollTo(id) {
  	var formatedId = $filter('date')(id, $scope.filterFormat);
  	$location.hash(formatedId);
    console.log($location.hash());
    $anchorScroll();
  };

  $scope.$watch('dt', function(newVal, oldVal) {
  	if (newVal === oldVal) {
  		return
  	};

  	scrollTo(newVal);
  });

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
};

controllers.navbarController = function($scope) {
	$scope.exploreTooltip = {
		"title" : "Explore"
	};
};

controllers.filterController = function($scope, filterService, filterFactory) {
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

/**
 * Displays strategies provided by factory and sends selected strategies
 * to strategyService
 * @param  {scope} 	 $scope          scope
 * @param  {factory} cardSortFactory Factory containing the strategies we want
 * @param  {service} strategyService Service that sends selected strategies to cardController
 * @return {none}                    none
 */
controllers.strategyController = function($scope, cardSortFactory, strategyService) {
	$scope.strategies = []; // Array containing all strategies
	init();

	/**
	 * Setups up the current selected strategy and sends the strategy
	 * to the card.
	 * @return {none} none
	 */
	function init() {
		$scope.strategies = cardSortFactory.getStrategies();
		$scope.currentstrategy = $scope.strategies[0].displayName;
		$scope.currentOrder = $scope.strategies[0].defaultOrder;
		setSortIcon($scope.currentOrder);
		strategyService.setOrder($scope.currentOrder);
		strategyService.setSortStrategy($scope.strategies[0].attributeName);
	};
	
	/**
	 * Sets current strategy as well as passing it to the
	 * strategy service.
	 * @param {string} attributeName Actual attribute use to sort.
	 * @param {string} displayName   Description of the strategy
	 */
	$scope.setStrategy = function(attributeName, displayName, defaultOrder){
		$scope.currentstrategy = displayName;
		strategyService.setSortStrategy(attributeName);
		strategyService.setOrder(defaultOrder);
		setSortIcon(defaultOrder);
	};

	/**
	 * Sets which icon to use upon switching order
	 * @param {char} order + or -
	 */
	function setSortIcon(order){
		if (order == '+'){
			$scope.orderIcon = "up";
		} else {
			$scope.orderIcon = "down";
		}
	};

	/**
	 * Reverses order of currentOrder and reflects
	 * this on UI.
	 * @return {none} none
	 */
	$scope.reverseOrder = function(){
		// Update strategyService as well as scope's currentOrder
		$scope.currentOrder = strategyService.reverseOrder($scope.currentOrder); 
		// Update our sort icon
		setSortIcon($scope.currentOrder);
	};
};

controllers.sportController = function($scope, sportFactory, activityService) {
	$scope.sports = {};
	$scope.toggleIcon;
	$scope.savedSport;
	init();
	function init() {
		$scope.sports = sportFactory.getSports();
		activityService.setActivity("");
		$scope.toggleIcon = false;
		$scope.savedSport = "";
	};
	$scope.setValue = function(sport){
		$scope.currentsport = sport;
		activityService.setActivity($scope.currentsport);
		if ($scope.currentsport == ""){
			$scope.toggleIcon = false;
		} else {
			$scope.toggleIcon = true;
		}
	};
	$scope.resetActivity = function(){
		$scope.setValue("");
		$scope.toggleIcon = false;
	};
	$scope.clickSearchBox = function(curSport){
		// Make it seem empty
		$scope.savedSport = curSport;
		$scope.currentsport = "";
	}
	
};

/*controllers.dateController = function($scope, cardFactory) {
	init();
	function init() {
		$scope.dateFormatedCards = cardFactory.getDateCards();
	};
};*/

controllers.cardsController = function($scope, cardFactory, strategyService, activityService, filterService) {
	// Base Set of Activities
	var baseActivities;
	init();
	function init() {
		$scope.dates = cardFactory.getCards(); 
		$scope.strategyServ = strategyService; // Bind instance of strategyService to scope
		$scope.activityServ = activityService;
		$scope.filterServ = filterService;
		$scope.sortStrategy = $scope.strategyServ.getSortStrategy(); 
		$scope.activityFilter = activityService.getActivity();
		$scope.filterFlag = $scope.filterServ.getFilterFlag();
		$scope.searchFilter = [];
		$scope.$watch('strategyServ.getSortStrategy()', function (newVal, oldVal){
			if (newVal === oldVal){
				return
			};
				console.log("newVal:" + newVal +" oldVal:"+oldVal);
				$scope.sortStrategy = strategyService.getSortStrategy();
		});
		$scope.$watch('activityServ.getActivity()', function (newVal, oldVal){
			if (newVal === oldVal){
				return
			}
			console.log("activity newVal:" + newVal +" oldVal:"+oldVal);
			$scope.activityFilter = activityService.getActivity();
			setFilterFlag(false);
		});
		$scope.$watch('filterServ.getResetFilter()', function(newVal, oldVal){
			if (newVal === oldVal){
				return
			}
			setFilterFlag(false);
		});
		
		$scope.$watch('filterServ.getFilters()', function(newVal, oldVal){
			console.log("outer filter New Val: " + newVal[0].selected.length + " Old:" + oldVal[0].selected.length);
			if (newVal === oldVal){
				return;
			}
			console.log("inner filter New Val: " + newVal[0].selected.length + " Old:" + oldVal[0].selected.length);
			$scope.searchFilter = $scope.filterServ.getFilters();
		}, true);

		$scope.$watch('filterServ.getFilterFlag()', function(newVal, oldVal){
			console.log("outer FilterFlag New Val: " + newVal + " Old:" + oldVal);
			if (newVal === oldVal) {
				return;
			}
			$scope.filterFlag = newVal;
		});

		function setFilterFlag(val) {
			$scope.filterServ.setFilterFlag(val);
			$scope.filterFlag = val;
		}
	};
};

controllers.cardController = function($scope, $modal, friendService, activitySkillFactory) {
	$scope.progressbar;
	$scope.peopleneeded;
	$scope.neededorfree;
	$scope.stars = [];
	$scope.skillDescription;
	$scope.friendList = [];
	init();
	function init() {
		// Determine People needed, description to show and color of progress bar
		if ($scope.card.participants.totalParticipants >= $scope.card.minimumrequired) {
			$scope.progressbar = 'success';
			$scope.neededorfree = 'SLOTS';
			$scope.peopleneeded = $scope.card.capacity - $scope.card.participants.totalParticipants;
		} else {
			$scope.progressbar = 'warning';
			$scope.neededorfree = 'NEEDED';
			$scope.peopleneeded = $scope.card.minimumrequired  - $scope.card.participants.totalParticipants;
		}
		// Determine Skill Description
		$scope.skillDescription = activitySkillFactory.getStringValue($scope.card.skill);
		// Determine how many stars to dish out
		for (var i = 0; i < $scope.card.skill; i++) {
			$scope.stars.push(i);
		};
		// Display Friendlist on mouse over
	};
	$scope.open = function(){
		/*var modalInstance = $modal.open({
			templateUrl: 'expandedCard.html',
			controller: controllers.expandedCardController,
			resolve: {
				card: function() {
					return $scope.card;
				}
			}
		});*/
		var mod = $modal({
			template: 'expandedCard.html',
			html: true
		})
	};
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

controllers.expandedCardController = function($scope, $modalInstance, card, activitySkillFactory) {
	init();
	function init(){
		$scope.card = card;
		$scope.stars = [];
		for (var i = 0; i < $scope.card.skill; i++) {
			$scope.stars.push(i);
		}
		$scope.skillDescription = "activitySkillFactory.getStringValue($scope.card.skill)";
	};

	$scope.join = function() {
		$scope.ok();
	}

	$scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
  	console.log('cancel!');
    $modalInstance.dismiss('cancel');
  };
};

controllers.activityController = function($scope, sportFactory) {
	$scope.activities = sportFactory.getSportInList();
};

/*controllers.friendController = function($scope) {
	$scope.show = true;
	$scope.showAll = function(bool) {
		friend = bool;
	};
}*/

project.controller(controllers);

