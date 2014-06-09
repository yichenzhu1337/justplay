var module = angular.module('skillModule', [])
.factory('baseSkillFactory', function(){
	var factory = {};
	var allSkills = {
		Beginner: {
			stringValue: 'Beginner',
			numericValue: 1
		},
		Intermediate: {
			stringValue: 'Intermediate',
			numericValue: 2
		},
		Advanced: {
			stringValue: 'Advanced',
			numericValue: 3
		}
	};
	
	factory.getSkills = function(keys){
		var skills = [];
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			skills.push(allSkills[key]);
		};
		return skills;
	};

	return factory;
})
.factory('activitySkillFactory', function(baseSkillFactory){
	var factory = {};
	var skills = [];
	init();

	function init() {
		skills = baseSkillFactory.getSkills(["Beginner","Intermediate","Advanced"]);
	};

	factory.getSkills = function(){
		return skills.splice(0);
	};

	factory.getStringValue = function(numericValue){
		for (var i = 0; i < skills.length; i++) {
			if (skills[i].numericValue == numericValue) {
				return skills[i].stringValue;
			}
		};
		return null;
	};

	return factory;
});