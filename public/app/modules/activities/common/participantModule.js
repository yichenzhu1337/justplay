var mod = angular.module('participantModule', []);

var factories = {};

factories.Participant = [function(){

	/**
	 * Corresponds to a Participant Object
	 * @constructor
	 * @param {int} user_id    User Id
	 * @param {boolean} areFriends Indication of whether this participant is a user's friend
	 * @param {string} username   Username
	 * @param {string} name       Name
	 * @param {string} dp         Url of person's display picture
	 */
	function Participant(user_id, areFriends, username, name, dp) {
		// Initialize Values
		this.user_id = user_id;
		this.areFriends = areFriends;
		this.username = username;
		this.name = name;
		this.profile_picture = dp;
	}

	/**
	 * Participant validation test
	 * @param  {object}  participant JSON representation of a participant
	 * @return {Boolean}             Whether the person is a valid participant
	 */
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
			return new Participant(data.user_id, data.areFriends, data.username, data.name, data.profile_picture);
		} else {
			return false;
		}
	}

	return Participant;
}];

factories.ParticipantCollection = ['Participant', function(Participant) {

	/**
	 * Corresponds to a Collection of Participants with metadata about # of participants,
	 * friends & non-friends
	 * @constructor
	 * @param {array} participants array of JSON participants
	 */
	function ParticipantCollection = function(participants)
	{
		this.list = createCollection(participants);
		this.totalFriends = countParticipants(this.list, true);
		this.totalNonFriends = countParticipants(this.list, false);
		this.totalParticipants = this.totalFriends + this.totalNonFriends;
	}

	/**
	 * Creates a collection of participants
	 * @param  {array} participants Array of participants (JSON)
	 * @return {array}              Array of Participants (Objects)
	 */
	function createCollection(participants) {
		var array = [];
		for (var i = 0; i < participants.length; i++)
		{
			array.push(Participant.build(participants[i]));
		}
		return array;
	}

	/**
	 * Counts the number of friends/non-friends in a list of Participants
	 * @param  {Array} participants Array of Participants (Objects)
	 * @return {int}                Count of Friends
	 */
	function countParticipants(participants, areFriends) {
		var count = 0;
		for (var i = 0; i < participants.length; i++)
		{
			if (participants[i].areFriends && areFriends)
			{
				count++;
			}
		}
		return count;
	}

	return ParticipantCollection;
}]

mod.factory(factories);
