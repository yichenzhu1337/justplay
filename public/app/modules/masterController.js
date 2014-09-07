var mod = angular.module('jp.masterCtrl', ['jp.authentication', 'xeditable', 'restangular','jp.notifications']);

var controllers = {};
var services = {};
var factories = {};
var directives = {};

controllers.masterCtrl = function($scope, $state, authenticationService, loggedIn, Restangular, $http, notificationService){
	init();

	function init()
	{
		$scope.isLoggedIn = loggedIn;
		$scope.authSvc = authenticationService;
		$scope.notifSvc = notificationService;
		$scope.notifCount = 0;
		$scope.notifSvc.activateNotifPoll($scope);

	}

	$scope.IsCurrentUser = function(username) {
		return $scope.authSvc.isCurrentUser(username);
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

mod.run(function(editableOptions, editableThemes) {
  editableThemes.bs3.inputClass = 'input-sm';
  editableThemes.bs3.buttonsClass = 'btn-sm';
  editableOptions.theme = 'bs3';
});

mod.controller(controllers);
mod.service(services);
mod.factory(factories);
mod.directive(directives);