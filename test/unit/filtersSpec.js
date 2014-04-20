'use strict';

/* jasmine specs for filters go here */

describe('Filter Unit Tests:', function() {

	beforeEach(angular.mock.module('filterModule'));

	describe('ExactFilters:', function(){
		var baseBundles = {
			filterType: "exact",
			attribute: "skill",
			options: [
				{value: "1", label: "Beginner"},
				{value: "2", label: "Intermediate"},
				{value: "3", label: "Advanced"}
			],
			selected: [3],
			placeholder: "Skill",
			maxString: "skills"
		};
		var baseCard = {
			id: 2,
			skill: [3],
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
		};

		describe('Skill-Attribute:', function(){
			var bundles = angular.copy(baseBundles);
			var card = angular.copy(baseCard);
			bundles.attribute = 'skill';

			it('should match exact ints', inject(function(exactFilter){
				bundles.selected = [3];
				card.skill = [3];
				expect(exactFilter(card, bundles)).toBe(true);

				bundles.selected = [2,3];
				card.skill = [3];
				expect(exactFilter(card, bundles)).toBe(true);	

				bundles.selected = [1,2,3];
				card.skill = [3];
				expect(exactFilter(card, bundles)).toBe(true);	

				bundles.selected = [1];
				card.skill = [3];
				expect(exactFilter(card, bundles)).toBe(false);

				bundles.selected = [2,3];
				card.skill = [];
				expect(exactFilter(card, bundles)).toBe(false);	

				bundles.selected = [1,2,3];
				card.skill = [];
				expect(exactFilter(card, bundles)).toBe(false);	

				bundles.selected = [];
				card.skill = [];
				expect(exactFilter(card, bundles)).toBe(false);			
			}));
		});

		describe('Location-Attribute:',function(){
			var bundles = angular.copy(baseBundles);
			var card = angular.copy(baseCard);
			bundles.attribute = 'location';

			it('should match exact strings', inject(function(exactFilter){
				bundles.selected = ['UTSC Athletic Center'];
				card.location = ['UTSC Athletic Center'];
				expect(exactFilter(card, bundles)).toBe(true);

				card.location = ['UTSC Athletic Center2'];
				expect(exactFilter(card, bundles)).toBe(false);

				card.location = [];
				expect(exactFilter(card, bundles)).toBe(false);

				bundles.selected = [];
				card.location = [];
				expect(exactFilter(card, bundles)).toBe(false);

				card.location = ['a'];
				expect(exactFilter(card, bundles)).toBe(false);				
			}));

			it('should match multiple strings', inject(function(exactFilter){
				bundles.selected = ['a','b'];
				card.location = ['a'];
				expect(exactFilter(card, bundles)).toBe(true);

				card.location = ['c'];
				expect(exactFilter(card, bundles)).toBe(false);
				
				bundles.selected = ['a'];
				card.location = ['c','aa'];
				expect(exactFilter(card, bundles)).toBe(false);
			}));
		});
  });
});