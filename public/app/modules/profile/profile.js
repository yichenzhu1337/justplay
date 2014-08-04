var mod = angular.module('jp.profile', ['userModule','jp.authentication']);

var controllers = {};
var directives = {};


controllers.profileController = function($scope, $stateParams, UserSvc, authenticationService){
	init();

	var username;

	function init() {
		// Services
		$scope.UserSvc = UserSvc;
		$scope.AuthSvc = authenticationService;
		username = $stateParams.username;
		$scope.UserSvc.get($stateParams.username).then(
			function(userObj) {
				$scope.user = userObj;
			});
	}

	$scope.IsCurrentUser = function()
	{
		if ($scope.isLoggedIn && $scope.AuthSvc.getUser().username == username)
		{
			return true;
		} 
		else
		{
			return false;
		}
	}
};

mod.controller(controllers);
mod.directive(directives);