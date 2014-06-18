var mod = angular.module('jp.authentication', ['jp.http', 'jp.errorHandling']);

var factories = {};

factories.authenticationService = function($http, PostSvc, SessionService, errorSvc ) {
	var cacheSession = function() {
		SessionService.set("authenticated", true);
	}

	var uncacheSession = function(){
		SessionService.unset("authenticated");
	}

	return {
		login: function(credentials) {
			var login = $http.post("api/login", PostSvc.obj(credentials));
			login.then(
				function(resp){
					// Handle errors here
					errorSvc(resp);
					cacheSession();
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
			return SessionService.get('authenticated');
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