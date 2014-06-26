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
	.state('activities', {
		url: "/activities",
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

app.run(['$rootScope', '$state', function($rootScope, $state){
	/*$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if (sessionStorage.restorestate == "true") {
 	    $rootScope.$broadcast('restorestate'); //let everything know we need to restore state
  	  sessionStorage.restorestate = false;
    }
	});

	//let everthing know that we need to save state now.
	window.onbeforeunload = function (event) {
	    $rootScope.$broadcast('savestate');
	};*/
}]);
