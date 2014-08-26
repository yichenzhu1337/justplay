var mod = angular.module('jp.friend', ['jp.friend.status.config','jp.api.config','jp.http']);
var services= {};

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

mod.service(services);
