var mod = angular.module('activityModule', 
	['jp.errorHandling','jp.http','participantModule','commentModule','restangular','jp.api.config']);

var factories = {};

factories.Activity = ['ParticipantSvc', 'CommentSvc', function(ParticipantSvc, CommentSvc){

	function Activity(activity_id, owner_id, sport, startingtime, endingtime, location, description) {
		// Initialize Values
		this.activity_id = activity_id;
		this.owner_id = owner_id;
		this.sport = sport;
		this.date = new Date(startingtime);
		this.starttime = new Date(startingtime);
		this.endtime = new Date(endingtime);
		this.location = location;
		this.description = description;
	}

	// Private Methods
	
	/**
	 * Validate Data
	 * @param  {data} data data
	 * @return {bool}      true/false
	 */
	function validateActivity(data) {
		if (
			angular.isUndefined(data.id) ||
			angular.isUndefined(data.owner_id) ||
			angular.isUndefined(data.sport) ||
			angular.isUndefined(data.startingtime) ||
			angular.isUndefined(data.endingtime) ||
			angular.isUndefined(data.location) ||
			angular.isUndefined(data.description)
			)
		{
			return false;
		} else {
			return true;
		}
	}

	// Static Methods
	/**
	 * Alternate Activity Constructor that takes in JSON as input
	 * @param  {JSON} data data containing all of the above.
	 * @return {Activity}      activity
	 */
	Activity.build = function(data) {
		// Check if each one is defined
		if (!validateActivity(data)) {
			return false;
		} else {
			var activity = new Activity(
				data.id,
				data.owner_id,
				data.sport,
				data.startingtime,
				data.endingtime,
				data.location,
				data.description
			);
			if (angular.isArray(data.activityJoined.data)) {
				activity.participants = ParticipantSvc.createObj(data.activityJoined.data);
			}
			if (angular.isArray(data.comments.data)) {
				activity.comments = CommentSvc.createObj(data.comments.data);
			}
			return activity;
		}
	}

	return Activity;
}]

factories.ActivityCollection = function(){
	/**
	 * Constructor for ActivityCollection
	 * @param {date} date date
	 * @param {Object} obj  Array of objects its holding
	 */
	function ActivityCollection(date, obj) {
		this.date = new Date(date);
		this.obj = obj;
	}

	ActivityCollection.prototype.setObject = function(obj) {
		// Check if the object is an array first
		if (angular.isArray(obj)) {
			this.obj = obj;
		}
	}

	ActivityCollection.prototype.getActivity = function(id) {
		var activity = false;
		angular.forEach(this.obj, function(curActivity) {
			if (!activity) {
				if (curActivity.id == id) {
					activity = curActivity;
				}
			}
		});
		return activity;
	}

	ActivityCollection.build = function(objJSON) {
		if (angular.isDefined(objJSON.date) && angular.isArray(objJSON.obj)) {
			return new ActivityCollection(objJSON.date, objJSON.obj);
		}
	}

	return ActivityCollection;
};

factories.ActivitySvc = ['$q', '$timeout', '$http', 'cardFactory', 'Activity', 'ActivityCollection', 'API', 'Restangular', 'api_const',
function($q, $timeout, $http, cardFactory, Activity, ActivityCollection, API, Restangular, api_const) {

	/**
	 * Creates an array of Activity Objects
	 * @param  {[type]} array Array of Activities
	 * @param  {[type]} date  [description]
	 * @return {[type]}       [description]
	 */
	var createActivities = function(array, date) {
		var activityArray = [];
		angular.forEach(array, function(val, key) {
			// Create Activity Obj for each obj.
			val.date = date;
			activityArray.push(Activity.build(val));
		});
		return activityArray;
	}

	var createDateObj = function(objJSON) {
		var params = {};
		params.date = objJSON[0];
		params.obj = createActivities(objJSON[1].obj.data, params.date);
		var activityCollection = ActivityCollection.build(params);

		return activityCollection;
	}

	var getAllSports = function(objJSON) {
		var activityCollectionList = [];
		angular.forEach(objJSON, function(val, key) {
			activityCollectionList.push(createDateObj(val));
		})
		return activityCollectionList;
	}

	var getAll = function() {
		return API.get('api/v1/activities/activities-all-this-week?include=comments,activityJoined').then(
			function(data) {
				var packagedobj = getAllSports(data);
				return packagedobj;
			});
	}

	/**
	 * Gets an Activity from a List of date Groups
	 * @param  {array} list List of Date Groups
	 * @param  {int} id   id of activity
	 * @return {activity}      activity or false
	 */
	var getActivity = function(list, id) {
		var activity = false;
		angular.forEach(list, function(val) {
			if (!activity) {
				activity = val.getActivity(id);
			}
		});
		return activity;
	}

	return {
		getList: function() {
			return getAll();
		},
		get: function(id) {
			return Restangular.one(api_const.activities, id).get({include: 'comments,activityJoined'});
		},
		submitActivity: function(activityJSON) {
/*			var copiedActivity = angular.copy(activityJSON);
			var submission = $http.post('api/activitycreate', PostSvc.obj(copiedActivity));
			errorSvc.hasNoErrors(submission).then(
				function(obj) {
					return Activity.build(activityJSON);
				},
				function() {
					return 
				});

			return submission.promise;*/
		}
	}
}]

mod.factory(factories);
