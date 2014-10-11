var mod = angular.module('participantModule', ['validator']);

var factories = {};

factories.Participant = ['Validator', function(Validator){

	/**
	 * Corresponds to a Participant Object
	 * @constructor
	 * @param {int} user_id    User Id
	 * @param {boolean} areFriends Indication of whether this participant is a user's friend
	 * @param {string} username   Username
	 * @param {string} name       Name
	 * @param {string} dp         Url of person's display picture
	 */
	function Participant(obj) {
		if (Specification.check(obj)===true)
		{
			// Initialize Values
			this.user_id = obj.user_id;
			this.areFriends = obj.areFriends;
			this.username = obj.username;
			this.name = obj.name;
			this.profile_picture = obj.dp;
		}
		else
		{
			console.log(Specification.check(obj));
		}
	}

	var Assert = Validator.Assert;
	var Constraint = Validator.Constraint;

	/**
	 * Participant Specification
	 * @type {Constraint}
	 */
	var Specification = new Constraint( 
		{
			user_id: [ new Assert().NotBlank(), new Assert().GreaterThan(0) ],
			areFriends: [ new Assert().InstanceOf(Boolean) ],
			username: [ new Assert().NotBlank() ],
			name: [ new Assert().NotBlank() ],
			profile_picture: [ new Assert().NotBlank() ]
		},
		{
			strict: true
		});

	function ParticipantConstructorException(undefinedList) {
		this.message = undefinedList.toString() + ' is undefined.';
		this.name = 'ParticipantConstructorException';
	}

	Participant.build = function(data) {
		return new Participant(data);
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
	function ParticipantCollection(participants)
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
