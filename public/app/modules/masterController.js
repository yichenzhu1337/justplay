var mod = angular.module('jp.masterCtrl', ['jp.authentication', 'xeditable', 'restangular']);

var controllers = {};
var services = {};
var factories = {};
var directives = {};

controllers.masterCtrl = function($scope, $state, authenticationService, loggedIn, Restangular, $http){
	init();

	function init()
	{
		$scope.isLoggedIn = loggedIn;
		$scope.authSvc = authenticationService;

		$scope.getNotificationCount = function()
		{
			var count = 5;
			if (count == 0)
			{
				return false;
			} 
			else
			{
				return count;
			}
		}

		var j = $http.get('api/v1/profiles/jack').then(
			function(data) {
				console.log(data);
				var user = $scope.authSvc.getUser();
/*				var copyUser = Restangular.copy(user);
				copyUser.age = 1337;
				copyUser.put();*/
				user.profile.age = 1233333;
				user.save();

/*				$http.put('api/v1/profiles/jack', {age: 123}).then(function(datata) {
					console.log(datata);
				})*/
			});

		/*var p = $http.put('api/v1/profiles/yichen', {'age':45}).then(
			function(data){
				console.log(data);
			});*/
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