var mod = angular.module('jp.login', []);

var controllers = {};
var directives = {};

controllers.loginCtrl = function($scope, $state){
	var masterLoginCredentials = {};
	$scope.registeredEmail = true;
	$scope.submittedLoginForm = {};

	$scope.submit = function(isValid) {
		$scope.submittedLoginForm = angular.copy($scope.loginForm);
		masterLoginCredentials = angular.copy($scope.login);
		// console.log(masterLoginCredentials);
		// $state.go('mainpage.activities');
		if (isValid) {
			$scope.registeredEmail = true;
			//$state.go('activitylist');
		} else {
			//$scope.registeredEmail = false;
		}
	};
};

directives.loginform = function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'modules/login/partials/form.html',
	};
};

mod.controller(controllers);
mod.directive(directives);