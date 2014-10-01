var mod = angular.module('jp.profile', ['userModule','jp.authentication','jp.friend']);

var controllers = {};
var directives = {};


controllers.profileController = ['$scope', 'authenticationService','FriendService','payload',
	function($scope, authenticationService, FriendService, payload){
		init();

		var username;

		function init() {
			// Services
			$scope.AuthSvc = authenticationService;
			$scope.FriendService = FriendService;
			$scope.user = payload.user;
			username = $scope.user.username;

			// Get the Friend status if this is not our account
			if (angular.isDefined(payload.friendStatus))
			{
				$scope.friendStatus = payload.friendStatus;
			}

			// Watch for puts
			$scope.$watch(function() { return $scope.user }, function(newVal, oldVal) {
				if (newVal != oldVal) {
					$scope.user.save();
				}
			}, true);
		}
	}];

mod.controller(controllers);
mod.directive(directives);