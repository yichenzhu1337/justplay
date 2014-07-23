var mod = angular.module('userModule', []);

var factories = {};

factories.User = function() {
	function User(id, first_name, email) {
		this.id = id;
		this.first_name = first_name;
		this.email = email;
	}

	User.build = function(userJSON) {
		if (angular.isDefined(userJSON.first_name),angular.isDefined(userJSON.email),angular.isDefined(userJSON.id)) {
			return new User(userJSON.id, userJSON.first_name, userJSON.email);
		}
	}

	return User;
};

factories.UserSvc = ['$q', '$timeout', 'User', function($q, $timeout, User){

	var MockUserData = 
	[
		{name: 'Jack Yiu', id: 2, isFriends:true, email: 'sampleEmail@email.com'},
		{name: 'Yi Chen Zhu', id: 3, isFriends:false, email: 'sampleEmail@email.com'},
		{name: 'Jason Zheng', id: 4, isFriends:false, email: 'sampleEmail@email.com'},
		{name: 'Roger Ganesh', id: 5, isFriends: true, email: 'sampleEmail@email.com'},
		{name: 'Suzanne Lim', id: 6, isFriends: true, email: 'sampleEmail@email.com'},
		{name: 'Someoneelse', id: 7, isFriends: false, email: 'sampleEmail@email.com'},
		{name: 'Jack Yiu', id: 2, isFriends:true, email: 'sampleEmail@email.com'},
		{name: 'Yi Chen Zhu', id: 3, isFriends:false, email: 'sampleEmail@email.com'},
		{name: 'Jason Zheng', id: 4, isFriends:false, email: 'sampleEmail@email.com'},
		{name: 'Roger Ganesh', id: 5, isFriends: true, email: 'sampleEmail@email.com'},
		{name: 'Suzanne Lim', id: 6, isFriends: true, email: 'sampleEmail@email.com'},
		{name: 'Someoneelse', id: 7, isFriends: false, email: 'sampleEmail@email.com'},												
	];

	var APIInterceptor = function (data) {

	}

	var API = {
		get: function(name) {

		}
	}

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
			var data = MockUserData;
/*			var res = API.get("");
			res.then(
				function(data){
					// Process the API results with the APIInterceptor

					deferred.resolve();
				});*/

			$timeout(deferred.resolve(data),2000);			

			return deferred.promise;
		} else {
			return API.get(name);
		}
	}

	return {
		ListAll: function() {
			

			var searchRes = search("").then(
				function(data) {
					var buildData = buildUserCollection(data);
					console.log(buildData);
					return buildData;
				});

			return searchRes;
		}
	}
}]



mod.factory(factories);
