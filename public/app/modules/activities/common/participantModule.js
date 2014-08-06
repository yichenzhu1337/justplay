var mod = angular.module('participantModule', []);

var factories = {};

factories.Participant = function(){

	function Participant(user_id, areFriends, username) {
		// Initialize Values
		this.user_id = user_id;
		this.areFriends = areFriends;
		this.username = username;
		this.first_name = username;
	}

	function isValidParticipant(participant) {
		if (
			angular.isUndefined(participant.user_id) ||
			(participant.areFriends != true && participant.areFriends != false) ||
			angular.isUndefined(participant.username)
			)
		{
			return false;
		} else {
			return true;
		}
	}

	Participant.build = function(data) {
		// Check if each one is defined
		if (isValidParticipant(data)) {
			return new Participant(data.user_id, data.areFriends, data.username);
		} else {
			return false;
		}
	}

	return Participant;
}

factories.ParticipantSvc = ['Participant', function(Participant) {
	var createCollection = function(participants) {
		var array = [];
		for (var i = 0; i < participants.length; i++)
		{
			array.push(Participant.build(participants[i]));
		}
		return array;		
	}

	var countFriends = function(participants) {
		var count = 0;
		for (var i = 0; i < participants.length; i++)
		{
			if (participants[i].areFriends)
			{
				count++;
			}
		}
		return count;
	}

	var countNonFriends = function(participants) {
		var count = 0;
		for (var i = 0; i < participants.length; i++)
		{
			if (!participants[i].areFriends)
			{
				count++;
			}
		}
		return count;
	}

	return {
		createObj: function(participants) {
			var obj = {};
			obj.list = createCollection(participants);
			obj.totalFriends = countFriends(obj.list);
			obj.totalNonFriends = countNonFriends(obj.list);
			obj.totalParticipants = obj.totalFriends + obj.totalNonFriends;

			return obj;
		}
	}
}]

mod.factory(factories);
