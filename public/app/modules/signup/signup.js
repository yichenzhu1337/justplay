var mod = angular.module('jp.signup', ['jp.http','jp.flash']);

var controllers = {};
var factories = {};
var services = {};
var directives = {};

controllers.signupCtrl = function($scope, $state, registerSvc, FlashService) {
	$scope.submit = function(isValid){
		var copyObj = angular.copy($scope.signup);

		if (isValid) {
			registerSvc.register(copyObj)
				.then(function(resp){
					FlashService.show('Successful Registration', 'success');
					$state.go('login');
				},
				function(resp) {
					FlashService.show('Incorrect', 'error');		
				});
		} else {
			$scope.registeredEmail = false;
		}
	}
}

factories.registerSvc = function(API) {
	return {
		register: function(data) {
			var reg = API.post("api/register", data);
			return reg;
		}
	}
}

directives.signupform = function() {
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'app/modules/signup/partials/form.html',
	};
}

mod.controller(controllers);
mod.factory(factories);
mod.service(services);
mod.directive(directives);