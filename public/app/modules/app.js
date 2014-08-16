var app = angular.module('app', 
	[
		'ui.router',
		'jp.config',
		'jp.login',
		'jp.signup',
		'jp.activitiespage',
		'jp.social',
		'jp.profile',
		'jp.masterCtrl',
		'angularMoment',
		'restangular',
		'jp.http',
		'jp.utilities',
		'jp.authentication',
		'jp.api.config'
	]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
	.otherwise('/login');

	$stateProvider
	.state("login", {
		url: "/login",
		templateUrl: "app/modules/login/login.html",
    controller: 'loginCtrl'
	})
	.state('signup',{
		url: "/signup",
		templateUrl: "app/modules/signup/signup.html"	
	})
	.state('main', {
		abstract: true,
		templateUrl: "app/modules/activities/mainpage.tmpl.html",
		controller: "masterCtrl",
		resolve: {
			loggedIn: function(authenticationService) {
				return authenticationService.determineAuthState()
					.then(function(){
						return true;
					},
					function(){
						return false;
					})
				}
		}
	})
	.state('main.activities', {
		abstract: true,
		url: "/activities",
		views: {
			"header": {
				template: "<div ui-view='header'/>"
			}, 
			"body": {
				template: "<div ui-view='body'/>"
			}
		}
	})
	.state('main.social', {
		abstract: true,
		url: "/social",
		views: {
			"header": {
				template: "<div ui-view='header'/>"
			}, 
			"body": {
				template: "<div ui-view='body'/>"
			}
		}
	})
	.state('main.social.list', {
		url: "/",
		views: {
			"header": {
				templateUrl: "app/modules/activities/partials/detailedheader.tmpl.html"
			}, 
			"body": {
				templateUrl: "app/modules/social/social.html",
				controller: "socialController"
			}
		},
		resolve: {
			peopleusers: function(UserSvc) {
				return UserSvc.getUserIds().then(
					function(data){
						return data;
					});
			}
		}
	})
	.state('main.profile', {
		url: "/:username",
		views: {
			"header": {
				templateUrl: "app/modules/activities/partials/detailedheader.tmpl.html"
			},
			"body": {
				templateUrl: "app/modules/profile/profilebody.tmpl.html",
				controller: "profileController"
			}
		},
		resolve: {
			user: function($stateParams, Restangular, authenticationService) {
				if (authenticationService.getUser().username == $stateParams.username) {
					return authenticationService.getUser();
				} else {
					return Restangular.one('profiles',$stateParams.username).get();
				}
			}
		}
	});

}]);

app.config(function($httpProvider) {

  var logsOutUserOn401 = function($location, $q, SessionService, FlashService) {
    var success = function(response) {
      return response;
    };

    var error = function(response) {
      if(response.status === 401) {
        SessionService.unset('authenticated');
        $location.path('/login');
        FlashService.show(response.data.flash);
      }
      return $q.reject(response);
    };

    return function(promise) {
      return promise.then(success, error);
    };
  };

  $httpProvider.responseInterceptors.push(logsOutUserOn401);

});

app.constant('angularMomentConfig', {
	timezone: 'America/Detroit'
});

app.run(function(Restangular, API, BASE_URL, BASE_API_ROUTE, Interceptors, api_const) {
	Restangular.setBaseUrl(BASE_URL+BASE_API_ROUTE);
	Restangular.setParentless(false,[api_const.comments]);
	Restangular.addRequestInterceptor(function(element,operation,what,url){
		if (what == 'profiles' && operation == 'put') {
			element = element.profile;
		}
		// Pass element through request transformer
		element = Interceptors.Request(element);
		return element;
	});
	Restangular.addResponseInterceptor(function(data,operation,what,response,deferred){
		if (what == api_const.activities) {
			return data.obj.data;
		}
		return data.obj;
	});
	Restangular.addElementTransformer('profiles',false, function(element) {
		if (element.fromServer)
		{
			// Augment object
			element.numeric_id = element.id;
			element.id = element.username;
			if (element.last_login == null) {
				element.last_active = new Date(element.created_at);
			} else {
				element.last_active = new Date(element.last_login);		
			}
		}
		return element;
	});
	Restangular.addElementTransformer('activities', false, function(element) {
		if (element.fromServer)
		{
			var comment = element.comments.data;

			Restangular.restangularizeCollection(
				element,
				element.comments.data,
				api_const.comments, 
				{include:'comments,activitiesJoined'});
		}
		return element;
	})
})

app.directive('navCollapse', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var visible = false;

            element.on('show.bs.collapse', function () {
                visible = true;
            });

            element.on("hide.bs.collapse", function () {
                visible = false;
            });

            element.on('click', function(event) {
                if (visible && 'auto' == element.css('overflow-y')) {
                    element.collapse('hide');
                }
            });
        }
    };
});