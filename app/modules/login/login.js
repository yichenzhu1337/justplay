var mod = angular.module('jp.login', []);

var controllers = {};
var directives = {};

controllers.loginCtrl = function($scope, $state){
	var masterLoginCredentials = {};
	$scope.registeredEmail = true;
	
	$scope.submit = function(isValid) {
		$scope.submitted = true;
		$state.go('activitylist');
		if (isValid) {
			masterLoginCredentials = angular.copy($scope.login);
			console.log(masterLoginCredentials);
			$scope.registeredEmail = true;
			//$state.go('activitylist');
		} else {
			console.log(masterLoginCredentials);
			$scope.registeredEmail = false;
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