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
	$scope.login = function() {
		$state.go('activitylist');
	};
};

app.controller(controllers);