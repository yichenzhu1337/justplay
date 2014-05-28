var project = angular.module('cardModule', 
	[
	'sortModule',
	'filterModule',
	'friendModule',
	'skillModule', 
	'searchbar',
	'ui.bootstrap'])
.factory('cardFactory', function() {
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
					startdate: window.moment().add({months: 1}), 
					enddate: window.moment().add({months: 1, hours: 2}), 
					skill: [3],
					competition: ['Competition'],
					activity: 'Basketball',
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
					startdate: window.moment().add({months: 1}), 
					enddate: window.moment().add({months: 1, hours: 2}), 
					skill: [3],
					competition: ['Recreational'],
					activity: 'Volleyball',
					location: 'UTSC Front Gym',
					participants: {
							totalParticipants: 6,
							totalFriends: 3,
							totalnonFriends: 3,
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
					startdate: window.moment().add({months: 0, minutes: 2}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: [2],
					competition: ['Practice'],
					typeOfMatch: ['Doubles','Singles'],
					activity: 'Tennis',
					location: 'The Valley',
					participants: {
							totalParticipants: 4,
							totalFriends: 1,
							totalnonFriends: 3,
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
					startdate: window.moment().add({days:0, hours:1}),
					enddate: window.moment().add({days: 0, hours: 4}), 
					skill: [1],
					competition: ['Recreational'],
					typeOfMatch: ['Singles'],
					activity: 'Badminton',
					location: 'UTSC Front Gym',
					participants: {
							totalParticipants: 6,
							totalFriends: 3,
							totalnonFriends: 3,
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
					startdate: window.moment().add({months: 0, hours:2}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: [2],
					competition: ['Recreational'],
					activity: 'Basketball',
					location: 'UTSC Front Gym',
					participants: {
							totalParticipants: 4,
							totalFriends: 4,
							totalnonFriends: 3,
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
					startdate: window.moment().add({months: 0, hours: 3}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: [3],
					competition: 'Practice',
					typeOfMatch: ['Singles'],
					activity: 'Table Tennis',
					location: 'The Attic',
					participants: {
							totalParticipants: 2,
							totalFriends: 2,
							totalnonFriends: 0,
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
					startdate: window.moment().add({days:1, hours:2}),
					enddate: window.moment().add({days: 1, hours: 4}), 
					skill: [1],
					competition: ['Practice'],
					typeOfMatch: ['Singles'],
					activity: 'Squash',
					location: 'Squash Courts',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalnonFriends: 0,
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
					startdate: window.moment().add({days:1, hours:2}),
					enddate: window.moment().add({days: 1, hours: 4}), 
					skill: [1],
					competition: ['Recreational'],
					activity: 'Basketball',
					location: 'Utsc Front Gym',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalnonFriends: 0,
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
					startdate: window.moment().add({days:2, hours:2}),
					enddate: window.moment().add({days: 2, hours: 4}), 
					skill: [1],
					competition: ['Practice'],
					typeOfMatch: ['Singles'],
					activity: 'Squash',
					location: 'Squash Courts',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalnonFriends: 0,
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
					startdate: window.moment().add({days:1, hours:2}),
					enddate: window.moment().add({days: 1, hours: 4}), 
					skill: [1],
					competition: ['Recreational'],
					activity: 'Basketball',
					location: 'Utsc Front Gym',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalnonFriends: 0,
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
					startdate: window.moment().add({days:3, hours:2}),
					enddate: window.moment().add({days: 3, hours: 4}), 
					skill: [1],
					competition: ['Practice'],
					typeOfMatch: ['Singles'],
					activity: 'Squash',
					location: 'Squash Courts',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalnonFriends: 0,
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
					startdate: window.moment().add({days:3, hours:2}),
					enddate: window.moment().add({days: 3, hours: 4}), 
					skill: [1],
					competition: ['Recreational'],
					activity: 'Basketball',
					location: 'Utsc Front Gym',
					participants: {
							totalParticipants: 1,
							totalFriends: 1,
							totalnonFriends: 0,
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
})
var controllers = {};
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
controllers.cardsController = function($scope, cardFactory, strategyData, searchbarData, filterService) {
	// Base Set of Activities
	var baseActivities;
	init();

	function init() {
		$scope.dates = cardFactory.getCards(); 


		$scope.strategyData = strategyData; // Bind instance of strategyData to scope
		$scope.searchbarData = searchbarData;
		$scope.filterServ = filterService;

		/* Initialize Items we're watching */
		$scope.sortStrategy = $scope.strategyData.getSortStrategy(); 
		$scope.activityFilter = $scope.searchbarData.getData();
		$scope.filterFlag = $scope.filterServ.getFilterFlag();

		$scope.searchFilter = [];

		/* WATCH FOR ANY CHANGES IN DATA FOR FILTERING */
		$scope.$watch('strategyData.getSortStrategy()', function (newVal, oldVal){
			if (newVal === oldVal){
				return
			};
				console.log("newVal:" + newVal +" oldVal:"+oldVal);
				$scope.sortStrategy = strategyData.getSortStrategy();
		});

		$scope.$watch('searchbarData.getData()', function (newVal, oldVal){
			if (newVal === oldVal){
				return
			}
			console.log("activity newVal:" + newVal +" oldVal:"+oldVal);
			$scope.activityFilter = searchbarData.getData();
			setFilterFlag(false);
		});

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

		$scope.$watch('filterServ.getFilterFlag()', function(newVal, oldVal){
			console.log("outer FilterFlag New Val: " + newVal + " Old:" + oldVal);
			if (newVal === oldVal) {
				return;
			}
			$scope.filterFlag = newVal;
		});

	};

	function setFilterFlag(val) {
		$scope.filterServ.setFilterFlag(val);
		$scope.filterFlag = val;
	};
};

/**
 * Displays the view according to details passed in
 * @param  {scope} $scope               scope
 * @param  {service} $modal               modal to expand card
 * @param  {service} friendService        retrieves friend list
 * @param  {factory} activitySkillFactory returns key values of skill descriptions
 * @return {none}                      none
 */
controllers.cardController = function($scope, $modal, friendService, activitySkillFactory) {
	$scope.peopleneeded;
	$scope.neededorfree;
	$scope.stars = [];
	$scope.skillDescription;
	$scope.friendList = [];
	init();
	function init() {
		// Determine People needed, description to show and color of progress bar
		if ($scope.card.participants.totalParticipants >= $scope.card.minimumrequired) {
			$scope.neededorfree = 'SLOTS';
			$scope.peopleneeded = $scope.card.capacity - $scope.card.participants.totalParticipants;
		} else {
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
	/**
	 * Expands the small card to the popover card.
	 * @return {none} none
	 */
	$scope.open = function(){

	};
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

project.controller(controllers);