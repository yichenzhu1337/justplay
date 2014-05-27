var mod = angular.module('jp.activities', 
	[
		"jp.sortModules"
	]);

var controllers = {};
var directives = {};

controllers.signupCtrl = function($scope) {
	$scope.submit = function(isValid){
		console.log('hi');
		if (isValid) {
			$scope.registeredEmail = true;
		} else {
			$scope.registeredEmail = false;
		}
	}
}

directives.signupform = function() {
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'modules/signup/partials/form.html',
	};
}

mod.controller(controllers);
mod.directive(directives);