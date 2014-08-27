var mod = angular.module('jp.friend', ['jp.friend.status.config','jp.api.config','jp.http','jp.authentication']);
var services= {};
var directives = {};

services.FriendService = function(friend_statuses, api_const, API) {
	var base_friend_url = api_const.base_api_route+'/'+api_const.friends;
	var base_notification_url = api_const.base_api_route+'/'+api_const.notifications;

	this.getFriendStatus = function(targetId) {
		return API.post(base_friend_url+'/check-if-friends', {stranger_id: targetId}).then(
			function(data) {
				return data.status;
			});
	};

	this.sendFriendRequest = function(curId, targetId)
	{
		return API.post(base_notification_url, {from_id: curId, to_id: targetId, request_type: 'friend'})
		.then(function() {
			this.getFriendStatus(targetId).then(
				function(status){
					console.log(status)
				});
		});
	};

	this.acceptFriendRequest = function(curId, targetId)
	{
		API.post(base_friend_url, {user1_id: curId, user2_id: targetId});
	};

	this.deleteFriendRequest = function(curId, targetId)
	{
		// Delete Notification?
	};

	this.unFriend = function(targetId)
	{
		API.delete(base_friend_url+'/'+targetId);
	}
};

directives.friendactions = function(FriendService, authenticationService, friend_statuses)
{
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/utilities/friends/friendactions.tmpl.html',
		scope: {
			userId: "=",
			friendStatus: "="
		},
		link: function($scope, element, attrs)
		{
			function init() {
				$scope.uid = $scope.userId;
				$scope.status = $scope.friendStatus;
				$scope.friend_status_const = friend_statuses;
			}

			/// USER-RELATIONSHIP FUNCTIONS
			/// ---------------------------
			$scope.checkFriendStatus = function(id) {
				$scope.FriendSvc.getFriendStatus(id).then(function(data)
				{
					console.log(data);
				});
			};

			$scope.sendFriendRequest = function(toId) {
				$scope.FriendSvc.sendFriendRequest($scope.AuthSvc.getUser().numeric_id, toId);
				refreshPage();
			}

			$scope.acceptFriendRequest = function(toId) {
				$scope.FriendSvc.acceptFriendRequest($scope.AuthSvc.getUser().numeric_id, toId);
				refreshPage();
			}

			$scope.rejectFriendRequest = function(toId) {
				$scope.FriendSvc.rejectFriendRequest($scope.AuthSvc.getUser().numeric_id, toId);
				refreshPage();
			}

			$scope.unFriend = function(toId) {
				$scope.FriendSvc.unFriend(toId);
				refreshPage();
			}

			init();
		}
	}
}

mod.service(services);
mod.directive(directives);