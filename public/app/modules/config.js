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
				participants: 'activity-join'
			};
		});