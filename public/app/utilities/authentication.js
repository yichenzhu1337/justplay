var mod = angular.module('jp.authentication', ['jp.http', 'jp.errorHandling','userModule']);

var factories = {};

factories.authenticationService = function($http, PostSvc, SessionService, errorSvc, User) {
	var cacheSession = function() {
		SessionService.set("authenticated", true);
	}

	var uncacheSession = function(){
		SessionService.unset("authenticated");
	}

	var isLoggedIn = function() {
		return SessionService.get('authenticated');
	}

	var currentUser;

	var setUser = function(userJSON) {
		currentUser = User.build(userJSON);
	}

	var getUser = function() {
		if (isLoggedIn() && userIsSet()) {
			return currentUser;
		} else {
			return false;
		}
	}

	var userIsSet = function() {
		if (angular.isUndefined(currentUser)) {
			return false;
		} else {
			return true;
		}
	}

	return {
		login: function(credentials) {
			var login = $http.post("api/login", PostSvc.obj(credentials));
			errorSvc.hasNoErrors(login)
			.then(
				function(obj){
					// Handle errors here
					cacheSession();
					setUser(obj);
					var obj = getUser(obj);
				},
				function(){
					uncacheSession();
				});
			
			return login;
		},
		logout: function() {
			var logout = $http.get("api/logout");
			logout.then(
				function(){
					uncacheSession();
					FlashService.show('Successfully logged out!', 'success');
				},
				function(){

				});

			return logout;
		},
		isLoggedIn: function() {
			return isLoggedIn();
		},
		getUser: function() {
			return getUser();
		}
	}
}

factories.SessionService = function() {
  return {
    get: function(key) {
      return sessionStorage.getItem(key);
    },
    set: function(key, val) {
      return sessionStorage.setItem(key, val);
    },
    unset: function(key) {
      return sessionStorage.removeItem(key);
    }
  }
};

mod.factory(factories);