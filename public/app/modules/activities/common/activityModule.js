var mod = angular.module('activityModule', []);

var factories = {};

factories.Activity = ['SanitizeService', function(SanitizeService){
	/**
	 * Constructor
	 * @param {[type]} id       [description]
	 * @param {[type]} sport       [description]
	 * @param {[type]} date        [description]
	 * @param {[type]} starttime   [description]
	 * @param {[type]} endtime     [description]
	 * @param {[type]} peoplegoing [description]
	 * @param {[type]} location    [description]
	 * @param {[type]} description [description]
	 */
	function Activity(id, sport, date, starttime, endtime, participants, location, description) {
		// Initialize Values
		this.id = id;
		this.sport = sport;
		this.date = date;
		this.starttime = starttime;
		this.endtime = endtime;
		this.participants = participants;
		this.location = location;
		this.description = description;
	}

	// Private Methods
	
	/**
	 * Validate Data
	 * @param  {data} data data
	 * @return {bool}      true/false
	 */
	function validateData(data) {
		if (
			angular.isUndefined(data.id) ||
			angular.isUndefined(data.sport) ||
			angular.isUndefined(data.date) ||
			angular.isUndefined(data.starttime) ||
			angular.isUndefined(data.endtime) ||
			angular.isUndefined(data.participants) ||
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
		if (!validateData(data)) {
			return false;
		} else {
			return new Activity(
				data.id,
				data.sport,
				data.date,
				data.starttime,
				data.endtime,
				data.participants,
				data.location,
				data.description
			);
			
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
		this.date = date;
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

factories.ActivitySvc = function($q, $timeout, $http, cardFactory, Activity, ActivityCollection) {

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
		params.date = objJSON.date;
		params.obj = createActivities(objJSON.obj, objJSON.date);
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
		var d = $q.defer();
		// Uncomment this when integrating with YiChen
		// $http.get('sampledata/activitylist.json')
		// .then(
		// 	function(data) {
		// 		console.log(data);
		// 		d.resolve();
		// 	})
		var packagedObj = getAllSports(angular.copy(cardFactory.getCards()));
		// Process the packagedObj.
		$timeout(
			d.resolve(packagedObj),
			2000		
			);
		return d.promise;
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
			var d = getAll();
			d.then(function(data) {

			},
			function(data) {

			});
			return d;
		},
		get: function(id) {
			var deferred = $q.defer();
			getAll().then(
				function(list){
					var g = getActivity(list, id);
					console.log(g);
					deferred.resolve(g);
				},
				function(){
					return false;
				});
			return deferred.promise;
		}
	}
}

mod.factory(factories);
