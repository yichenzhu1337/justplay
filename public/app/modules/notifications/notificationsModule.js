var mod = angular.module('jp.notifications', ['jp.api.config','jp.notifications.config', 'jp.http']);

var factories = {};
var controllers = {};
var directives = {};
var services = {};

mod.constant('angularMomentConfig', {
	timezone: 'America/Detroit'
});

controllers.notificationsController = ['$scope', 'friendNotifications', 'activityNotifications', function($scope, friendNotifications, activityNotifications)
{
	function init()
	{
		$scope.friendNotifications = friendNotifications;
		$scope.activityNotifications = activityNotifications;
	}

	init();
}];

factories.notificationsFactory = function(notification_routes, notification_categories, api_const, API, $filter, $state) {
	var base_route = api_const.base_url+api_const.base_api_route+'/'+api_const.notifications;

	/// HELPER FUNCTIONS
	// Parses and formats the activityName
	var activityName = function(obj)
	{
		return moment.tz(obj.startingtime, 'Etc/UTC').tz('America/Detroit').format('dddd') +' '+ obj.sport;
	}

	// Parses 1, 0 into true, false
	var parseIsRead = function(obj)
	{
		return obj.is_read === 1;
	}

	// Iterates through a list of notifications and stores all their ids
	// into one array
	var createNotifIdList = function(list)
	{
		var idList = [];
		for (var i = 0; i < list.length; i++)
		{
			idList.push(list[i].id);
		}
		return idList;
	}

	// Translates Mysql time format into America/Detroit format
	var createMoment = function(stamp)
	{
		return moment.tz(stamp, 'Etc/UTC').tz('America/Detroit');
	}

	// Retrieves the latest created_at timestamp from a list
	var retrieveLatestDate = function(list)
	{
		var latestTime;

		latestTime = createMoment(list[0].created_at);
		for (var i = 1; i < list.length; i++)
		{
			if (createMoment(list[i].created_at).isAfter(latestTime))
			{
				latestTime = createMoment(list[i].created_at);
			}
		}

		return latestTime;
	}

	// Takes a list of notifications and aggregates all the names
	// and returns an appropriate string to represent all these people.
	var condensePeopleNames = function(list, maxToDisplay)
	{
		var peopleNames = list[0].profile.data[0].name;
		var remainder = list.length - maxToDisplay;

		for (var i = 1; i < list.length; i++)
		{
			if (i < maxToDisplay)
			{
				peopleNames += ', '+ list[i].profile.data[0].name;
			}
			else
			{
				break;
			}
		}
		
		if (list.length > maxToDisplay && remainder > 0)
		{
			peopleNames += ' and ' + remainder + ' others';		
		}

		return peopleNames;
	}

	// Mark a list of Notification Ids as Read
	var markAsRead = function(list, type)
	{
		for (var i = 0; i < list.length; i++)
		{
			API.put(base_route+'/'+type+'/'+list[i]+'/1');		
		}
	}

	// Prepares notifications by configuring their body, action and timestamp
	var notification = {
		activity: {
			join: function(list) {
				var body = condensePeopleNames(list, 2) + ' has joined ' + activityName(list[0].activity.data[0]);

				return {
					body: body,
					time_stamp: retrieveLatestDate(list),
					action: function() { 
						markAsRead(createNotifIdList(list), notification_routes.get.activity);
						$state.go('main.activities.detail', {id: list[0].activity.data[0].id});
					},
					readIt: function(){
					  markAsRead(createNotifIdList(list), notification_routes.get.activity)
					},
					is_read: false,

				}
			},
			comment: function(list) {
				var body = condensePeopleNames(list, 2) + ' has commented in ' + activityName(list[0].activity.data[0]);

				return {
					body: body,
					time_stamp: retrieveLatestDate(list),
					action: function() { 
						markAsRead(createNotifIdList(list), notification_routes.get.activity)
						$state.go('main.activities.detail', {id: list[0].activity.data[0].id});
					},
					readIt: function(){
					  markAsRead(createNotifIdList(list), notification_routes.get.activity)
					},
					is_read: false,

				}
			},
			delete: function(obj) {
				var body = obj.description + ' has been cancelled';

				return {
					body: body,
					time_stamp: createMoment(obj.created_at),
					action: function() {
						markAsRead([obj.id], notification_routes.get.activity);
					},
					readIt: function(){
					  markAsRead([obj.id], notification_routes.get.activity)
					},
					is_read: parseIsRead(obj),

				}
			},
			invite: function(obj) {
				var body = obj.from_user + 'has invited you to join ' + activityName(obj.activity.data[0]);

				return {
					body: body,
					time_stamp: createMoment(obj.created_at),
					action: function() {
						markAsRead([obj.id], notification_routes.get.activity);
						$state.go('main.activities.detail', {id: obj.activity.data[0].id});
					},
					readIt: function(){
					  markAsRead([obj.id], notification_routes.get.activity)
					},
					is_read: parseIsRead(obj),

				}
			},
			update: function(list) {
				var body = activityName(list[0].activity.data[0]) + ' has been updated';

				return {
					body: body,
					time_stamp: retrieveLatestDate(list),
					action: function() {
						markAsRead(createNotifIdList(list), notification_routes.get.activity);
						$state.go('main.activities.detail', {id: list[0].activity.data[0].id});
					},
					readIt: function(){
					  markAsRead(createNotifIdList(list), notification_routes.get.activity)
					},
					is_read: false,

				}
			}
		},
		friend: {
			request: function(obj) {
				var body = obj.from_user + ' wants to be friends with you';

				return {
					body: body,
					time_stamp: createMoment(obj.created_at),
					action: function() {
						markAsRead([obj.id], notification_routes.get.friends);
						$state.go('main.profile', {username: obj.from_user});
					},
					readIt: function() {
					  markAsRead([obj.id], notification_routes.get.friends)
					},
					is_read: parseIsRead(obj),

				}
			},
			accepted: function(obj) {
				var body = obj.from_user + ' has accepted your friend request';

				return {
					body: body,
					time_stamp: createMoment(obj.created_at),
					action: function() {
						markAsRead([obj.id], notification_routes.get.friends);
						$state.go('main.profile', {username: obj.from_user});
					},
					readIt: function() {
					 	markAsRead([obj.id], notification_routes.get.friends)
					},
					is_read: parseIsRead(obj),

				}
			} 
		}
	};

	// Groups and formats notifications according to their activity id
	var groupNotificationsByActId = function(list)
	{
		var finalList = {};

		for (var i = 0; i < list.length; i++)
		{
			var curNotificationActivityId = list[i].activity.data[0].id;
			// Initialize new activityID and its arrays
			if (angular.isUndefined(finalList[curNotificationActivityId]))
			{
				finalList[list[i].activity.data[0].id] = 
				{
					join: [],
					comment: [],
					invite: [],
					delete: [],
					update: []
				}
			}
			switch (list[i].sub_type)
			{
				case notification_categories.activity.join:
					finalList[curNotificationActivityId].join.push(list[i]);
					break;
				case notification_categories.activity.comment:
					finalList[curNotificationActivityId].comment.push(list[i]);
					break;
				case notification_categories.activity.invite:
					finalList[curNotificationActivityId].invite.push(list[i]);
					break;
				case notification_categories.activity.delete:
					finalList[curNotificationActivityId].delete.push(list[i]);
					break;
				case notification_categories.activity.update:
					finalList[curNotificationActivityId].update.push(list[i]);
					break;
			}
		}

		return finalList;
	}

	// Iterates through a list of activity notifications grouped by activity id
	// and constructs a list of notifications without any grouping
	var constructActivityNotificationList = function(list)
	{
		var notifList = [];
		// Replace all comments & joined with just one notif for each activity
		for (var activity in list)
		{
			for (var notif_types in list[activity])
			{
				var curNotifList = list[activity][notif_types];
				
				if (curNotifList.length > 0)
				{
					switch (notif_types)
					{
						case 'join':
							notifList.push(notification.activity.join(curNotifList));
							break;
						case 'comment':
							notifList.push(notification.activity.comment(curNotifList));
							break;
						case 'invite':
							for (var i = 0; i < curNotifList.length; i++)
							{
								notifList.push(notification.activity.invite(curNotifList[i]));
							}
							break;
						case 'delete':
							for (var i = 0; i < curNotifList.length; i++)
							{
								notifList.push(notification.activity.delete(curNotifList[i]));
							}
							break;
						case 'update':
							notifList.push(notification.activity.update(curNotifList));
							break;
					}
				}

			}
		}

		return notifList;
	}

	var constructFriendNotificationList = function(list)
	{
		var modList = [];
		for (var i = 0; i < list.length; i++)
		{
			switch(list[i].sub_type) {
				case notification_categories.friend.request:
					modList.push(notification.friend.request(list[i]));
					break;
				case notification_categories.friend.accepted:
					modList.push(notification.friend.accepted(list[i]));
			}
		}
		return modList;
	}

	var getFriendNotifs = function()
	{
		return API.get(base_route+'/'+notification_routes.get.friends).then(
			function(data) {
				return $filter('filter')(constructFriendNotificationList(data.friends), {is_read: false}, true);
			});
	}

	var getActivityNotifs = function()
	{
		return API.get(base_route+'/'+notification_routes.get.activity).then(
			function(data) {
				var filteredList = $filter('filter')(data.notifications, {is_read: 0}, true);
				//var filteredList = data.notifications;		
				var notifListGroupByActId = groupNotificationsByActId(filteredList);
				var masterNotifList = constructActivityNotificationList(notifListGroupByActId);
				return masterNotifList;
			});
	}
	return {
		getFriendNotifications: function() {
			return getFriendNotifs();
		},
		getActivityNotifications: function() {
			return getActivityNotifs();
		}
	}
}

services.notificationService = function(notificationsFactory, $timeout)
{

	var friendNotifCount;
	var activityNotifCount;

	var scopee;

	var count = function()
	{
		return activityNotifCount + friendNotifCount;
	}

	var pollFriendNotif = function()
	{
		notificationsFactory.getFriendNotifications().then(
			function(data) {
				friendNotifCount = data.length;
				scopee.notifCount = count();
				$timeout(pollFriendNotif, 5000);
			});
	}

	var pollActivityNotif = function()
	{
		notificationsFactory.getActivityNotifications().then(
			function(data) {
				activityNotifCount = data.length;
				scopee.notifCount = count();
				$timeout(pollActivityNotif, 5000);
			});
	}

	return {
		activateNotifPoll: function(scope)
		{
			scopee = scope;
			pollActivityNotif();
			pollFriendNotif();
		},
		count: function()
		{
			return friendNotifCount + activityNotifCount;
		}
	}
}

directives.jpnotification = function(API)
{
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/modules/notifications/notification.tmpl.html',
		scope: {
			body: '=',
			timestamp: '=',
			action: '&',
			notifid: '=',
			isread: '=',
			markAsRead: '&'
		},
		link: function($scope, $element, $attrs)
		{
		}
	}
}

directives.jpnotificationlist = function()
{
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/modules/notifications/notificationlist.tmpl.html',
		scope: {
			pagelength: "=",
			notifications: "="
		},
		link: function($scope, $element, $attrs)
		{
			function init() {
				$scope.currentPage = 1;
				$scope.pl = $scope.pagelength;
				$scope.totalItems = $scope.notifications.length;
			}

			init();
		}
	}
}

mod.factory(factories);
mod.controller(controllers);
mod.service(services);
mod.directive(directives);