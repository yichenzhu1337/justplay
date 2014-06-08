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
