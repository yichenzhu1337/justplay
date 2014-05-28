var jpactivitiespage = angular.module('jp.activitiespage', 
	[
	'sortModule',
	'filterModule', 
  'searchbar',
  'cardModule',  
	'ngRoute',
  'dateModule'
	]);
/*
jpactivitiespage.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
	.otherwise('/');

	$stateProvider
	.state("login", {
		url: "/login",
		templateUrl: "modules/login/login.html"
	})
	.state('signup',{
		url: "/signup",
		templateUrl: "modules/signup/signup.html"	
	})
	.state('activitylist', {
		url: "/activitylist",
		templateUrl: "modules/activities/activities_navbar.tmpl.html"
	});
}]);
*/