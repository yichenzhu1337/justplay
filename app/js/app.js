var app = angular.module('app', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
	.otherwise('/');

	$stateProvider
	.state("login", {
		url: "/",
		templateUrl: "login.html"
	})
	.state('signup',{
		url: "/signup",
		templateUrl: "signup.html"	
	})
	.state('activitylist', {
		url: "/activitylist",
		templateUrl: "activity-list.html"
	})
}]);

var controllers = {};

controllers.loginCtrl = function($scope, $state){
	$scope.registeredEmail = true;

	$scope.submit = function(isValid) {
		if (isValid) {
			alert('Valid Login');
			$state.go('activitylist');
		} else {
			alert('invalid Login');
		}
	};
};

controllers.signupCtrl = function($scope) {
	$scope.submit = function(isValid){
		if (isValid) {
			alert('amazing form yo');
		} else {
			alert('invalid form yo');
		}
	}
}

var directives = {};


app.controller(controllers);