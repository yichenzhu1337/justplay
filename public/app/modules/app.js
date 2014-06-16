var app = angular.module('app', 
	[
		'ui.router',
		'jp.login',
		'jp.signup',
		'jp.activitiespage'
	]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
	.otherwise('/login');

	$stateProvider
	.state("login", {
		url: "/login",
		templateUrl: "app/modules/login/login.html"
	})
	.state('signup',{
		url: "/signup",
		templateUrl: "app/modules/signup/signup.html"	
	})
	.state('mainpage', {
		url: "/mainpage",
		templateUrl: "app/modules/activities/mainpage.tmpl.html"
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

