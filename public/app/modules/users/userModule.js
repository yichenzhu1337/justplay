var mod = angular.module('userModule', ['jp.http','jp.authentication']);

var factories = {};

factories.User = function() {
	function User(id, username, name, email, last_login, created_at, profile) {
		this.id = id;
		this.username = username;
		if (name == null) {
			this.first_name = username;
		} else {
			this.first_name = name;		
		}
		this.email = email;
		if (last_login == null) {
			this.last_login = new Date(created_at);
		} else {
			this.last_login = new Date(last_login);		
		}
		this.profile = profile;
	}

	User.build = function(userJSON) {
		if (angular.isDefined(userJSON.email),angular.isDefined(userJSON.id),angular.isDefined(angular.isObject(userJSON.profile)),angular.isDefined(userJSON.profile.name)) {
			return new User(userJSON.id, userJSON.username, userJSON.profile.name, userJSON.email, userJSON.last_login, userJSON.created_at, userJSON.profile);
		}
	}

	return User;
};

factories.MinimalUser = function()
{
	function MinimalUser(id, name, username, areFriends) {
		this.id = id;
		if (name == null) {
			this.first_name = username;
		} else {
			this.first_name = name;
		}
		this.username = username;
		this.areFriends = areFriends;
	}

	MinimalUser.build = function(userJSON) {
		if (angular.isDefined(userJSON.name) && angular.isDefined(userJSON.username) && angular.isDefined(userJSON.areFriends)) {
			return new MinimalUser(userJSON.id,userJSON.name,userJSON.username,userJSON.areFriends);
		}
	}
	return MinimalUser;
}

factories.UserSvc = ['$q', '$timeout', 'User', 'MinimalUser', 'API', 'authenticationService', 
function($q, $timeout, User, MinimalUser, API, AuthSvc){

	var buildUserCollection = function(JSONObj) {
		var array = [];
		angular.forEach(JSONObj, function(val, key) {
			this.push(User.build(val));
		}, array);
		return array;
	}

	var search = function(name) {
		if (name === "") {
			var deferred = $q.defer();
			var res = API.get('api/v1/profiles').then(
				function(data){
					deferred.resolve(data);
				});
			return deferred.promise;
		} else {
			return API.get('api/v1/profiles');
		}
	}

	var getAllUsers = function() {
		return API.get('api/v1/users').then(
			function(data) {
				var users = [];
				for (var i = 0; i < data.users.length; i++)
				{
					users.push(MinimalUser.build(data.users[i]));
				}
				return users;
			},
			function() {
				return $q.reject();
			});
	}

	return {
		ListAll: function() {
			var searchRes = search("").then(
				function(data) {
					var buildData = buildUserCollection(data);
					return buildData;
				});

			return searchRes;
		},
		getUserIds: function() {
			return getAllUsers().then(
				function(users) {
					return users;
				});
		},
		get: function(user) {
			return API.get('api/v1/profiles/'+user).then(
				function(obj) {
					return User.build(obj);
				});
		},
		removeLoggedInUserFromList: function(list)
		{
			var filteredList = [];
			for (var i = 0; i < list.length; i++)
			{
				if (AuthSvc.getUser().username !== list[i].username)
				{
					filteredList.push(list[i]);
				}
			}
			return filteredList;
		}
	}
}];

mod.factory(factories);
