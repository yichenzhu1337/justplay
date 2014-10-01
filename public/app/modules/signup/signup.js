var mod = angular.module('jp.signup', ['jp.http','jp.flash','jp.api.config']);

var controllers = {};
var factories = {};
var services = {};
var directives = {};

controllers.signupCtrl = ['$scope', '$state', 'registerSvc', 'FlashService', 'API', 'api_const',
	function($scope, $state, registerSvc, FlashService, API, api_const) {
		$scope.submit = function(isValid){
			var copyObj = angular.copy($scope.signup);

			if (isValid) {
				registerSvc.register(copyObj)
					.then(function(resp){
						// Edit FirstName
						FlashService.show('Successful Registration', 'success');
						$state.go('login');
					},function(d)
					{
					});
			} else {
				$scope.registeredEmail = false;
			}
		}
	}];

factories.registerSvc = ['API', 'api_const', 'FlashService', '$q',
	function(API, api_const, FlashService, $q) {
		return {
			register: function(regForm) {
				var d = $q.defer();

				var reg = API.post(api_const.base_api_route+"/register", regForm)
				.then(function()
					{
						d.resolve();
					},
					function(data) {
						if (data[0].message === 'email already in use')
						{
							FlashService.show('Email already in use', 'error');
							d.reject();
						}
						else if (data[0].message === 'username already in use')
						{
							FlashService.show('Username already in use', 'error');
							d.reject();
						}
					});
				return d.promise;
			}
		}
	}]

directives.signupform = [function() {
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'app/modules/signup/partials/form.html',
	};
}];

mod.controller(controllers);
mod.factory(factories);
mod.service(services);
mod.directive(directives);