var mod = angular.module('jp.signup', []);

var controllers = {};
var directives = {};

controllers.signupCtrl = function($scope) {
	$scope.submit = function(isValid){
		if (isValid) {
			$scope.registeredEmail = true;
		} else {
			$scope.registeredEmail = false;
		}
	}
}

directives.signupform = function() {
	return {
		controller: controllers.signupCtrl,
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'modules/signup/partials/form.html',
	};
}

mod.controller(controllers);
mod.directive(directives);