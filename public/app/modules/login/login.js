var mod = angular.module('jp.login', []);

var controllers = {};
var services = {};
var directives = {};

controllers.loginCtrl = function($scope, $state, loginSvc){
	var masterLoginCredentials = {};
	$scope.registeredEmail = true;
	$scope.submittedLoginForm = {};

	$scope.submit = function(isValid) {
		$scope.submittedLoginForm = angular.copy($scope.loginForm);
		masterLoginCredentials = angular.copy($scope.login);

		if (isValid) {
			loginSvc.login($scope.login.email,$scope.login.password)
			.then(function(obj){
				alert(obj.message);
			},
			function(obj){
				alert(obj.message);
			});
		} else {

		}
	};
};


services.loginSvc = function($http, $q) {
	var base_url = "http://localhost/justplay/public/api";

	this.login = function(email, password) {
		var d = $q.defer();
		var resp = {};

		d.obj = {};

		var data = {
			'email': email,
			'password': password
		};

		$http.post(base_url+"/login", data)
		.success(function(obj, status, headers, config) {
			resp.message = 'success';
			d.resolve(resp);
		})
		.error(function(obj, status, headers, config) {
			resp.message = 'failure';
			resp.errors = ['noob','haha'];
			d.reject(resp);
		});

		return d.promise;
	}
}

directives.loginform = function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'app/modules/login/partials/form.html',
	};
};

mod.controller(controllers);
mod.service(services);
mod.directive(directives);