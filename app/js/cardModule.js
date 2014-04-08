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
});