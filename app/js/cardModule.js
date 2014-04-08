var project = angular.module('cardModule', [])
.factory('cardFactory', function() {
	var factory = {};
	// Sports should be arranged in 5s
	var cards = 
	[
		{
			date: window.moment().add({months: 1}), 
			obj: 
			[		
				{
					id: 1,
					startdate: window.moment().add({months: 1}), 
					enddate: window.moment().add({months: 1, hours: 2}), 
					skill: 3,
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
						totalComments: 5,
						unreadComments: true,

					}	
				},
				{
					id: 2,
					startdate: window.moment().add({months: 1}), 
					enddate: window.moment().add({months: 1, hours: 2}), 
					skill: 3,
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
						totalComments: 5,
						unreadComments: true,
					}	
				}
			]
		},
		{
			date: window.moment().add({months: 0}),
			obj:
			[
				{
					id: 3,
					startdate: window.moment().add({months: 0, minutes: 2}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: 2,
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
						totalComments: 5,
						unreadComments: true,

					}	
				}, 
				{
					id: 4,
					startdate: window.moment().add({days:0, hours:1}),
					enddate: window.moment().add({days: 0, hours: 4}), 
					skill: 1,
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
						totalComments: 5,
						unreadComments: true,

					}	
				},
				{
					id: 5,
					startdate: window.moment().add({months: 0, hours:2}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: 2,
					activity: 'Basketball',
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
					minimumrequired: 3,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 5,
						unreadComments: true,

					}	
				},
				{
					id: 6,
					startdate: window.moment().add({months: 0, hours: 3}),
					enddate: window.moment().add({months: 0, hours: 4}), 
					skill: 3,
					activity: 'Table Tennis',
					location: 'The Attic',
					participants: {
							totalParticipants: 5,
							totalFriends: 3,
							totalnonFriends: 2,
							list: [
								{name: 'Jack Yiu', id: 2, isFriends:true},
								{name: 'Yi Chen Zhu', id: 3, isFriends:false},
								{name: 'Jason Zheng', id: 4, isFriends:false},
								{name: 'Roger Ganesh', id: 5, isFriends: true},
								{name: 'Suzanne Lim', id: 6, isFriends: true},															
							]
					},
					capacity: 6,
					minimumrequired: 3,
					description: "Sample Description, get here on time!",
					fee: 4,
					comments: {
						totalComments: 5,
						unreadComments: true,

					}	
				}
			]
		},
		{
			date: window.moment().add({days: 1}),
			obj:
			[
				{
					id: 7,
					startdate: window.moment().add({days:1, hours:2}),
					enddate: window.moment().add({days: 1, hours: 4}), 
					skill: 1,
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
						totalComments: 5,
						unreadComments: true,

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
	/*factory.getDateCards = function(){
		return formatToDate(cards);
	}*/
	return factory;
})
.factory('cardsFactory', function(){
	var factory = {};
	/**
	 * Queries DB and returns activities between startDate and endDate
	 * in JSON Format.
	 * @param  {Epoch} startDate
	 * @param  {Epoch} endDate
	 * @return {Epoch} JSON activities between specified Dates.
	 */
	function getActivitiesFromDB(startDate, endDate){

	}

	/**
	 * Gets an unordered, unfiltered list of activities where Date is 
	 * between specified time period.	
	 * @param  {Epoch} startDate
	 * @param  {Epoch} endDate
	 * @return {Collection}
	 */
	factory.getUnorderedActivityList = function(startDate, endDate) {
		return getActivitiesFromDB(startDate, endDate);
	}

	/**
	 * Gets an empty unordered, unfiltered list of activities grouped by
	 * date.
	 * @return {Collection}
	 */
	function getEmptyActivityList(){

	}
	
	/**
	 * Gets an unordred, unfiltered list of activities grouped by Date
	 * @param  {Collection} unorderedList
	 * @return {Collection}
	 */
	factory.getActivtyList = function(unorderedList){

	}

	/**
	 * Orders a list of activity according to a set of strategies.
	 * These include filtering and ordering.
	 * @param  {Collection} filterStrategy
	 * @param  {String} orderStrategy
	 * @return {Array}
	 */
	factory.sortListOfActivity = function(filterStrategy, orderStrategy){

	}

	/**
	 * Gets an ordered and filtered list of activities grouped by date
	 * @param  {collection} activityList
	 * @param  {Collection} filterStrategy
	 * @param  {String} orderStrategy
	 * @return {Collection}
	 */
	factory.getSortedFilteredActivityList = function(activityList, filterStrategy, orderStrategy){

	}

	return factory;
});