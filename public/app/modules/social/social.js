var mod = angular.module('jp.social', ['jp.authentication', 'userModule']);

var controllers = {};

controllers.socialController = function($scope, UserSvc, authenticationService){
	

	function init() {
		$scope.UserSvc = UserSvc;
		$scope.UserSvc.ListAll().then(
			function(data){
				$scope.users = data;
				console.log(data);
			});
		$scope.asyncSelectedUser;
		//var nig = $scope.searchUser("asd");
		console.log();
	}

	$scope.searchUser = function() {
		return $scope.UserSvc.ListAll().then(
			function(data) {
				console.log(data);
				return data;
			});
	}
	init();
};

mod.controller(controllers);
