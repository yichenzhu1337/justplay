var mod = angular.module('jp.login', ['jp.authentication', 'jp.flash']);

var controllers = {};
var services = {};
var factories = {};
var directives = {};

controllers.loginCtrl = function($scope, $state, authenticationService, FlashService){
	var masterLoginCredentials = {};
	$scope.registeredEmail = true;
	$scope.submittedLoginForm = {};

	$scope.submit = function(isValid) {
		$scope.submittedLoginForm = angular.copy($scope.loginForm);
		masterLoginCredentials = angular.copy($scope.login);

		if (isValid) {
			authenticationService.login(masterLoginCredentials)
			.then(function() {
				// Move states
				$state.go('main.activities.list');
				FlashService.show('Successful login.', 'success');
			},function() {
				FlashService.show('Incorrect Email/Password', 'error');
			});
		}
	};
};

directives.loginform = function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'app/modules/login/partials/form.html',
	};
};

mod.controller(controllers);
mod.service(services);
mod.factory(factories);
mod.directive(directives);