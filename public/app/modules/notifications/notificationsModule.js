var mod = angular.module('jp.notifications', ['jp.api.config','jp.notifications.config', 'jp.http']);

var factories = {};
var controllers = {};
var directives = {};

controllers.notificationsController = ['$scope', 'friendNotifications', 'activityNotifications', function($scope, friendNotifications, activityNotifications)
{
	function init()
	{
		$scope.friendNotifications = friendNotifications;
		$scope.activityNotifications = activityNotifications;
	}

	$scope.sample = function()
	{
		console.log('goodshit');
	}

	init();
}];

factories.notificationsFactory = function(notification_routes, notification_categories, api_const, API, $state) {
	var base_route = api_const.base_url+api_const.base_api_route+'/'+api_const.notifications;

	var activityName = function(obj)
	{
		return moment(new Date()).tz('America/Detroit').format('dddd') +' '+ obj.activity.sport;//obj.activity_date.toDate() + ' ' + obj.activity_sport;
	}

	// Prepares notifications by configuring their body, action and timestamp
	var notification = {
		activity: {
			join: function(obj) {
				var body = obj.from_user + ' has joined ' + activityName(obj);
				obj.notification_sent_date = moment(new Date());

				return {
					body: body,
					time_stamp: obj.notification_sent_date,
					action: function() { 

						$state.go('main.activities.detail', {id: obj.activity.id});
					}
				}
			},
			comment: function(obj) {
				var body = obj.from_user + ' has commented in ' + activityName(obj);
				obj.notification_sent_date = moment(new Date());

				return {
					body: body,
					time_stamp: obj.notification_sent_date,
					action: function() { 
						$state.go('main.activities.detail', {id: obj.activity.id});
					}
				}
			},
			delete: function(obj) {
				var body = activityName(obj) + ' has been cancelled';
				obj.notification_sent_date = moment(new Date());

				return {
					body: body,
					time_stamp: obj.notification_sent_date,
					action: function() {

					}
				}
			},
			invite: function(obj) {
				var body = obj.from_user + 'has invited you to join ' + activityName(obj);
				obj.notification_sent_date = moment(new Date());

				return {
					body: body,
					time_stamp: obj.notification_sent_date,
					action: function() {
						$state.go('main.activities.detail', {id: obj.activity.id});
					}
				}
			},
			update: function(obj) {
				var body = obj.from_user + ' has updated ' + activityName(obj);
				obj.notification_sent_date = moment(new Date());

				return {
					body: body,
					time_stamp: obj.notification_sent_date,
					action: function() {
						$state.go('main.activities.detail', {id: obj.activity.id});
					}
				}
			}
		},
		friend: {
			request: function(obj) {
				var body = obj.from_user + ' wants to be friends with you';
				obj.notification_sent_date = moment(new Date());

				return {
					body: body,
					time_stamp: obj.notification_sent_date,
					action: function() {
						$state.go('main.profile', {username: obj.from_user});
					}
				}
			},
			accepted: function(obj) {
				var body = obj.from_user + ' has accepted your friend request';
				obj.notification_sent_date = moment(new Date());

				return {
					body: body,
					time_stamp: obj.notification_sent_date,
					action: function() {
						$state.go('main.profile', {username: obj.from_user});
					}
				}
			} 
		}
	};

	var listForDisplay = function(list)
	{
		var modList = [];
		for (var i = 0; i < list.length; i++)
		{
			switch(list[i].sub_type) {
				case notification_categories.activity.join:
					modList.push(notification.activity.join(list[i]));
					break;
				case notification_categories.activity.comment:
					modList.push(notification.activity.comment(list[i]));
					break;
				case notification_categories.activity.delete:
					modList.push(notification.activity.delete(list[i]));
					break;
				case notification_categories.activity.invite:
					modList.push(notification.activity.invite(list[i]));
					break;
				case notification_categories.activity.update:
					modList.push(notification.activity.update(list[i]));
					break;	
				case notification_categories.friend.request:
					modList.push(notification.friend.request(list[i]));
					break;
			}
		}
		return modList;
	}

	return {
		getFriendNotifications: function() {
			return API.get(base_route+'/'+notification_routes.get.friends).then(
				function(data) {
					return listForDisplay(data.friends);
				});
		},
		getActivityNotifications: function() {
			return API.get(base_route+'/'+notification_routes.get.activity).then(
				function(data) {
					return listForDisplay(data.notifications);
				});
		}
	}
}

directives.jpnotification = function()
{
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/modules/notifications/notification.tmpl.html',
		scope: {
			body: '=',
			timestamp: '=',
			action: '&'
		},
		link: function($scope, $element, $attrs)
		{
			$scope.doshit = function()
			{
				$scope.action();
			}
		}
	}
}

mod.factory(factories);
mod.controller(controllers);
mod.directive(directives);