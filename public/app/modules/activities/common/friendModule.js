var module = angular.module('friendModule', [])
.service('friendService', [function(){
	this.getFriendList = function(list) {
		var retList = [];
		for (var i = 0; i < list.length; i ++){
			if (list[i].isFriends == true) {
				retList.push(list[i].name);
			}
		}
		return retList;
	};
}]);