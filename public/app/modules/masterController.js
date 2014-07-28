var mod = angular.module('jp.masterCtrl', ['jp.authentication']);

var controllers = {};
var services = {};
var factories = {};
var directives = {};

controllers.masterCtrl = function($scope, $state, authenticationService){
	init();

	function init()
	{
		authenticationService.determineAuthState();
		$scope.isLoggedIn = false;
		$scope.authSvc = authenticationService;
		$scope.$watch('authSvc.isLoggedIn()', function(newVal, oldVal)
		{
			if (newVal)
			{
				// Setup User name
				$scope.isLoggedIn = true;
			} 
			else 
			{
				$scope.isLoggedIn = false;
			}
		});
	}

	$scope.getUser = function()
	{
		var user = $scope.authSvc.getUser();
		if (user)
		{
			$scope.user = user;
			return true;
		} else {
			return false;
		}
	}

	$scope.logout = function()
	{
		$scope.authSvc.logout();
	}
};

mod.controller(controllers);
mod.service(services);
mod.factory(factories);
mod.directive(directives);