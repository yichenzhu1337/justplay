var mod = angular.module('jp.profile', ['userModule','ui.bootstrap']);

var controllers = {};
var directives = {};


controllers.profileController = function($scope, $stateParams, UserSvc){
	init();

	function init() {
		// Services
		$scope.UserSvc = UserSvc;	
		
		$scope.UserSvc.get($stateParams.id).then(
			function(userObj) {
				$scope.user = userObj;
			});
	}
};

mod.controller(controllers);
mod.directive(directives);