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
	'jp.authentication']);

var controllers = {};
var factories = {};
var directives = {};

factories.cardFactory = function() {
	var factory = {};
	var base_date = new Date();

	// Sports should be arranged in 5s
	var cards = 
	[
		{
			date: angular.copy(base_date).setMonth(base_date.getMonth() +1), 
			obj: 
			[		
				{
					id: 1,
					starttime: window.moment().add({months: 1}), 
					endtime: window.moment().add({months: 1, hours: 2}), 
					skill: [3],
					competition: ['Competition'],
					sport: 'Basketball',
					location: 'UTSC Front Gym',
					participants: {
							totalParticipants: 6,
							totalFriends: 3,
							totalNonFriends: 3,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:false},
								{name: 'Jason Zheng', id: 4, isFriends:false},
								{name: 'Roger Ganesh', id: 5, isFriends: true},
								{name: 'Suzanne Lim', id: 6, isFriends: true},
								{name: 'Someoneelse', id: 7, isFriends: false},																
							]
					},
					capacity: 6,
					minimumrequired: 2,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 4,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}, 
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "We should bring our own racquets too..."
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Yi Chen Zhu",
								message: "Sure but I just started playing this not too long ago. I'll see you in a bit"
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: 'Roger Ganesh',
								message: 'Yeah definately'
							}
						]
					}
				},
				{
					id: 2,
					starttime: window.moment().add({months: 1}), 
					endtime: window.moment().add({months: 1, hours: 2}), 
					skill: [3],
					competition: ['Recreational'],
					sport: 'Volleyball',
					location: 'UTSC Front Gym',
					participants: {
							totalParticipants: 6,
							totalFriends: 3,
							totalNonFriends: 3,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:false},
								{name: 'Jason Zheng', id: 4, isFriends:false},
								{name: 'Roger Ganesh', id: 5, isFriends: true},
								{name: 'Suzanne Lim', id: 6, isFriends: true},
								{name: 'Someoneelse', id: 7, isFriends: false},																
							]
					},
					capacity: 6,
					minimumrequired: 2,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 4,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}, 
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "We should bring our own racquets too..."
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Yi Chen Zhu",
								message: "Sure but I just started playing this not too long ago. I'll see you in a bit"
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: 'Roger Ganesh',
								message: 'Yeah definately'
							}
						]
					}
				}
			]
		},
		{
			date: angular.copy(base_date).setMonth(base_date.getMonth()),
			obj:
			[
				{
					id: 3,
					starttime: window.moment().add({months: 0, minutes: 2}),
					endtime: window.moment().add({months: 0, hours: 4}), 
					skill: [2],
					competition: ['Practice'],
					typeOfMatch: ['Doubles','Singles'],
					sport: 'Tennis',
					location: 'The Valley',
					participants: {
							totalParticipants: 4,
							totalFriends: 1,
							totalNonFriends: 3,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:false},
								{name: 'Jason Zheng', id: 4, isFriends:false},
								{name: 'Someoneelse', id: 7, isFriends: false},																
							]
					},
					capacity: 6,
					minimumrequired: 3,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 4,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}, 
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "We should bring our own racquets too..."
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Yi Chen Zhu",
								message: "Sure but I just started playing this not too long ago. I'll see you in a bit"
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: 'Roger Ganesh',
								message: 'Yeah definitely'
							}
						]
					}
				}, 
				{
					id: 4,
					starttime: window.moment().add({days:0, hours:1}),
					endtime: window.moment().add({days: 0, hours: 4}), 
					skill: [1],
					competition: ['Recreational'],
					typeOfMatch: ['Singles'],
					sport: 'Badminton',
					location: 'UTSC Front Gym',
					participants: {
							totalParticipants: 6,
							totalFriends: 3,
							totalNonFriends: 3,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:false},
								{name: 'Jason Zheng', id: 4, isFriends:false},
								{name: 'Roger Ganesh', id: 5, isFriends: true},
								{name: 'Suzanne Lim', id: 6, isFriends: true},
								{name: 'Someoneelse', id: 7, isFriends: false},																
							]
					},
					capacity: 6,
					minimumrequired: 4,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 4,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}, 
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "We should bring our own racquets too..."
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Yi Chen Zhu",
								message: "Sure but I just started playing this not too long ago. I'll see you in a bit"
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: 'Roger Ganesh',
								message: 'Yeah definately'
							}
						]
					}
				},
				{
					id: 5,
					starttime: window.moment().add({months: 0, hours:2}),
					endtime: window.moment().add({months: 0, hours: 4}), 
					skill: [2],
					competition: ['Recreational'],
					sport: 'Basketball',
					location: 'UTSC Front Gym',
					participants: {
							totalParticipants: 4,
							totalFriends: 4,
							totalNonFriends: 3,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:true},
								{name: 'Jason Zheng', id: 4, isFriends:true},
								{name: 'Roger Ganesh', id: 5, isFriends: true},															
							]
					},
					capacity: 5,
					minimumrequired: 5,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 4,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}, 
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "We should bring our own racquets too..."
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Yi Chen Zhu",
								message: "Sure but I just started playing this not too long ago. I'll see you in a bit"
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: 'Roger Ganesh',
								message: 'Yeah definately'
							}
						]
					}
				},
				{
					id: 6,
					starttime: window.moment().add({months: 0, hours: 3}),
					endtime: window.moment().add({months: 0, hours: 4}), 
					skill: [3],
					competition: 'Practice',
					typeOfMatch: ['Singles'],
					sport: 'Table Tennis',
					location: 'The Attic',
					participants: {
							totalParticipants: 2,
							totalFriends: 2,
							totalNonFriends: 0,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:true},										
							]
					},
					capacity: 4,
					minimumrequired: 3,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 1,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}
						]
					}
				}
			]
		},
		{
			date: angular.copy(base_date).setDate(base_date.getDate() +1),
			obj:
			[
				{
					id: 7,
					starttime: window.moment().add({days:1, hours:2}),
					endtime: window.moment().add({days: 1, hours: 4}), 
					skill: [1],
					competition: ['Practice'],
					typeOfMatch: ['Singles'],
					sport: 'Squash',
					location: 'Squash Courts',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalNonFriends: 0,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},															
							]
					},
					capacity: 6,
					minimumrequired: 4,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 4,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}, 
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "We should bring our own racquets too..."
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Yi Chen Zhu",
								message: "Sure but I just started playing this not too long ago. I'll see you in a bit"
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: 'Roger Ganesh',
								message: 'Yeah definately'
							}
						]
					}
				},
				{
					id: 8,
					starttime: window.moment().add({days:1, hours:2}),
					endtime: window.moment().add({days: 1, hours: 4}), 
					skill: [1],
					competition: ['Recreational'],
					sport: 'Basketball',
					location: 'Utsc Front Gym',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalNonFriends: 0,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},															
							]
					},
					capacity: 6,
					minimumrequired: 4,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 4,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}, 
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "We should bring our own racquets too..."
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Yi Chen Zhu",
								message: "Sure but I just started playing this not too long ago. I'll see you in a bit"
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: 'Roger Ganesh',
								message: 'Yeah definately'
							}
						]
					}
				}
			]
		},
		{
			date: angular.copy(base_date).setDate(base_date.getDate() +2),
			obj:
			[
				{
					id: 8,
					starttime: window.moment().add({days:2, hours:2}),
					endtime: window.moment().add({days: 2, hours: 4}), 
					skill: [1],
					competition: ['Practice'],
					typeOfMatch: ['Singles'],
					sport: 'Squash',
					location: 'Squash Courts',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalNonFriends: 0,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},															
							]
					},
					capacity: 6,
					minimumrequired: 4,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 4,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}, 
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "We should bring our own racquets too..."
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Yi Chen Zhu",
								message: "Sure but I just started playing this not too long ago. I'll see you in a bit"
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: 'Roger Ganesh',
								message: 'Yeah definately'
							}
						]
					}
				},
				{
					id: 9,
					starttime: window.moment().add({days:1, hours:2}),
					endtime: window.moment().add({days: 1, hours: 4}), 
					skill: [1],
					competition: ['Recreational'],
					sport: 'Basketball',
					location: 'Utsc Front Gym',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalNonFriends: 0,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},															
							]
					},
					capacity: 6,
					minimumrequired: 4,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 4,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}, 
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "We should bring our own racquets too..."
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Yi Chen Zhu",
								message: "Sure but I just started playing this not too long ago. I'll see you in a bit"
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: 'Roger Ganesh',
								message: 'Yeah definately'
							}
						]
					}
				}
			]
		},
		{
			date: angular.copy(base_date).setDate(base_date.getDate() +3),
			obj:
			[
				{
					id: 10,
					starttime: window.moment().add({days:3, hours:2}),
					endtime: window.moment().add({days: 3, hours: 4}), 
					skill: [1],
					competition: ['Practice'],
					typeOfMatch: ['Singles'],
					sport: 'Squash',
					location: 'Squash Courts',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalNonFriends: 0,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},															
							]
					},
					capacity: 6,
					minimumrequired: 4,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 4,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}, 
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "We should bring our own racquets too..."
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Yi Chen Zhu",
								message: "Sure but I just started playing this not too long ago. I'll see you in a bit"
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: 'Roger Ganesh',
								message: 'Yeah definately'
							}
						]
					}
				},
				{
					id: 11,
					starttime: window.moment().add({days:3, hours:2}),
					endtime: window.moment().add({days: 3, hours: 4}), 
					skill: [1],
					competition: ['Recreational'],
					sport: 'Basketball',
					location: 'Utsc Front Gym',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalNonFriends: 0,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},															
							]
					},
					capacity: 6,
					minimumrequired: 4,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 4,
						unreadComments: true,
						list: [
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "Hey anyone want to play?"
							}, 
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Jack Yiu",
								message: "We should bring our own racquets too..."
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: "Yi Chen Zhu",
								message: "Sure but I just started playing this not too long ago. I'll see you in a bit"
							},
							{
								activityId: 1,
								messageId: 1,
								date: 1,
								senderId: 1,
								senderName: 'Roger Ganesh',
								message: 'Yeah definately'
							}
						]
					}
				}
			]
		}						
	];
	/*function formatToDate(array){
		var copy = angular.copy(array);
		for (var i = 0; i < array.length; i++){
			copy[i].startdate = window.moment(copy[i].startdate).format('dddd, MMM Do');
		}
		return copy;
	}*/
	factory.getCards = function () {
		return cards;
	};

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
controllers.cardsController = ['$scope', 'watching', 'filterService', 'activityList',
function($scope, watching, filterService, activityList) {
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

controllers.detailedCardController = function($scope, activity, API, authenticationService, Comment){
	var IsParticipant;
	var IsOwner;

	$scope.currentUserIsParticipant = function(participants) {
		if (angular.isUndefined(IsParticipant)){
			for (var i = 0; i < participants.length; i++) {
				if (participants[i].user_id == $scope.AuthSvc.getUser().id) {
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
			if (activity.owner_id == $scope.AuthSvc.getUser().id) {
				IsOwner = true;
				return IsOwner;
			} else {
				IsOwner = false;
			}
		}
		return IsOwner;
	}

	function init() {
		$scope.activity = activity;
		var commentData = {
			activity_id: 1, 
			user_id: 2,
			username: 'jack',
			description: 'testgzxcxzc',
			date: moment.tz(new Date(), 'America/Detroit')
		}
/*		API.post('api/v1/comments', commentData).then(
			function(d) {
					console.log(d);
			});*/
		//$scope.activity.comments.data.getList();
		$scope.activity.comments.data.post({activity_id: 1, user_id: 2, username: 'jack', description: 'testinghaha', date: moment.tz(new Date(), 'America/Detroit')});
		$scope.AuthSvc = authenticationService;
		$scope.isParticipant = $scope.currentUserIsParticipant(activity.participants.list);
		$scope.isOwner = $scope.currentUserIsOwner(activity);
		$scope.isFriendsCollapsed = true;
		$scope.isPeopleCollapsed = true;
	};
	init();

	$scope.join = function() {
		API.post('api/v1/activity-join', { activity_id: $scope.activity.activity_id });
	}

	$scope.postComment = function(comment) {
		var commentData = {
			activity_id: $scope.activity.activity_id, 
			user_id: $scope.AuthSvc.getUser().id,
			username: $scope.AuthSvc.getUser().username,
			description: comment,
			date: moment.tz(new Date(), 'America/Detroit')
		}
		API.post('api/v1/comments', commentData);
		$scope.activity.comments.list.push(Comment.build(commentData));
		$scope.newcomment = "";
	}
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