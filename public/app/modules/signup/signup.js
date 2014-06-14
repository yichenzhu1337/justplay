var mod = angular.module('jp.signup', []);

var controllers = {};
var services = {};
var directives = {};

controllers.signupCtrl = function($scope, $state, registerSvc) {
	$scope.submit = function(isValid){
		if (isValid) {
			$scope.registeredEmail = true;
			registerSvc.register($scope.signup.name,"",$scope.signup.email,$scope.signup.password)
			.then(function(obj){
				$state.go('login');
			},
			function(obj){
				alert(obj.message);
			});
		} else {
			$scope.registeredEmail = false;
		}
	}
}

services.registerSvc = function($http, $q) {
	var base_url = "http://localhost/justplay/public/api";

	this.register = function(first_name, last_name, email, password) {
		var d = $q.defer();
		var resp = {};

		d.obj = {};

		var data = {
			'first_name': first_name,
			'last_name': last_name,
			'email': email,
			'password': password
		};

		$http.post(base_url+"/register", data)
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

directives.signupform = function() {
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'app/modules/signup/partials/form.html',
	};
}

mod.controller(controllers);
mod.service(services);
mod.directive(directives);