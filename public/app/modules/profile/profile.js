var mod = angular.module('jp.profile', ['userModule','jp.authentication']);

var controllers = {};
var directives = {};


controllers.profileController = function($scope, authenticationService, user){
	init();

	var username;

	function init() {
		// Services
		$scope.AuthSvc = authenticationService;
		username = user.username;
		$scope.user = user;

		// Watch for puts
		$scope.$watch(function() { return $scope.user }, function(newVal, oldVal) {
			if (newVal != oldVal) {
				$scope.user.save();
			}
		}, true);
	}
};

mod.controller(controllers);
mod.directive(directives);