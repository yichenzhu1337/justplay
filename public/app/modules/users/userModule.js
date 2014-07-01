var mod = angular.module('userModule', []);

var factories = {};

factories.User = ['', function() {
	function User(id, name, email) {
		this.id = id;
		this.name = name;
		this.email = email;
	}

	return User;
}];

factories.UserSvc = ['$q', function($q){

	var APIInterceptor = function (data) {

	}

	var API = {
		get: function(name) {

		}
	}

	var search = function(name) {
		if (angular.isUndefined(name)) {
			var deferred = $q.defer();

			var res = API.get("");
			res.then(
				function(data){
					// Process the API results with the APIInterceptor

					deferred.resolve();
				});

			return deferred.promise;
		} else {
			return API.get(name);
		}
	}

	return {
		ListAll: function() {
			var deferred = $q.defer();

			var searchRes = search("");
			searchRes.then(
				function() {

				})

			return deferred.promise;
		}
	}
}]

mod.factory(factories);
