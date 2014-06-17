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
			.success(function(resp){
				FlashService.show('Successful Registration: ' + resp.obj.success, 'success');
				$state.go('login');
			})
			.error(function(resp){
				FlashService.show('Incorrect', 'error');		
			});
		} else {
			$scope.registeredEmail = false;
		}
	}
}

factories.registerSvc = function($http, PostSvc) {
	return {
		register: function(data) {
			var reg = $http.post("api/register", PostSvc.obj(data));
			return reg;
		}
			csrf_token: CSRF_TOKEN
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