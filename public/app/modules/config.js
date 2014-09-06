angular.module('jp.config', [])
    .constant('BASE_URL','http://localhost/justplay/public/')
    .constant('BASE_API_ROUTE', 'api/v1')
    .constant('APP_VERSION','0.3');

angular.module('jp.api.config', [])
		.factory('api_const', function(){
			return {
				base_url: 'http://localhost/justplay/public/',
				base_api_route: 'api/v1',
				activities: 'activities',
				profiles: 'profiles',
				comments: 'comments',
				participants: 'activity-join',
				friends: 'friends',
				notifications: 'notifications'
			};
		});

angular.module('jp.route.config', [])
		.factory('access', function(){
			return {
					auth: 'auth',
					anon: 'anon'
			}
		});

angular.module('jp.friend.status.config', [])
		.factory('friend_statuses', function(){
			return {
				friends: 'friends',
				friend_request_sent: 'notification_sent',
				friend_request_received: 'notification_received',
				not_friends: 'not_friends'
			}
		});

angular.module('jp.notifications.config', [])
		.factory('notification_routes', function(){
			return {
					friends: {
						request: 'friend_request/null'
					},
					activity: {
						invite: 'activity_invite_request'
					}
			}
		});