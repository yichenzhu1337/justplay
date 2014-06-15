var mod = angular.module('jp.login', ['ngSanitize', 'jp.flash']);

var controllers = {};
var services = {};
var factories = {};
var directives = {};

controllers.loginCtrl = function($scope, $state, authenticationService, FlashService){
	var masterLoginCredentials = {};
	$scope.registeredEmail = true;
	$scope.submittedLoginForm = {};

	$scope.submit = function(isValid) {
		$scope.submittedLoginForm = angular.copy($scope.loginForm);
		masterLoginCredentials = angular.copy($scope.login);

		if (isValid) {
			authenticationService.login(masterLoginCredentials)
			.success(function(){
				// Move states
				// $state.go('login');
			})
			.error(function(){

			})
		}

	};
};

factories.authenticationService = function($http, $sanitize, SessionService, FlashService) {

	var cacheSession = function() {
		SessionService.set("authenticated", true);
	}

	var uncacheSession = function(){
		SessionService.unset("authenticated");
	}

	var loginError = function(response){
		/*FlashService.show(response.flash);*/
	}

	var sanitizeCredentials = function(credentials) {
		return {
			email: $sanitize(credentials.email),
			password: $sanitize(credentials.password)
		}
	}

	return {
		login: function(credentials) {
			var login = $http.post("api/login", sanitizeCredentials(credentials));
			login.then(
				function(){
					cacheSession();
					FlashService.show('Successful login!', 'success');
				},
				function(){
					uncacheSession();
					FlashService.show('Incorrect Email/Password', 'error');
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

directives.loginform = function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'app/modules/login/partials/form.html',
	};
};

mod.controller(controllers);
mod.service(services);
mod.factory(factories);
mod.directive(directives);