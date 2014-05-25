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
	var masterLoginCredentials = {};
	$scope.registeredEmail = true;

	$scope.submit = function(isValid) {
		$scope.submitted = true;
		if (isValid) {
			masterLoginCredentials = angular.copy($scope.login);
			console.log(masterLoginCredentials);
			alert('Valid Login');
			$scope.registeredEmail = true;
			//$state.go('activitylist');
		} else {
			console.log(masterLoginCredentials);
			alert('invalid Login');
			$scope.registeredEmail = false;
		}
	};
};

controllers.signupCtrl = function($scope) {
	$scope.submit = function(isValid){
		
		if (isValid) {
			alert('amazing form yo');
			$scope.registeredEmail = true;
		} else {
			alert('invalid form yo');
			$scope.registeredEmail = false;
		}
	}
}

app.controller(controllers);

app.directive("loginform", function(){
	// Runs during compile
	return {
		// {} = isolate, true = child, false/undefined = no change
		controller: controllers.loginCtrl,
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: 'hi',
		templateUrl: 'views/login/form.html',
		// replace: true,
		// transclude: true
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
/*		link: function($scope, iElm, iAttrs, controller) {
			
		}*/
	};
});

app.directive("signupform", function(){
	// Runs during compile
	return {
		// {} = isolate, true = child, false/undefined = no change
		controller: controllers.signupCtrl,
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: 'hi',
		templateUrl: 'views/signup/form.html',
		// replace: true,
		//transclude: true
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
/*		link: function($scope, iElm, iAttrs, controller) {
			
		}*/
	};
});