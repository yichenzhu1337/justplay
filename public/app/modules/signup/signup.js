var mod = angular.module('jp.signup', []);

var controllers = {};
var services = {};
var directives = {};

controllers.signupCtrl = function($scope, $state, registerSvc) {
	$scope.submit = function(isValid){
		if (isValid) {
			$scope.registeredEmail = true;
			registerSvc.register($scope.signup.name,"",$scope.signup.email,$scope.signup.password);
		} else {
			$scope.registeredEmail = false;
		}
	}
}

services.registerSvc = function($http, $state) {
	var base_url = "http://localhost/justplay/public/api/";

	this.register = function(first_name, last_name, email, password) {
		var data = {
			'first_name': first_name,
			'last_name': last_name,
			'email': email,
			'password': password
		};
		var resp = {};
		$http.post(base_url+"register", data)
		.success(function(obj, status, headers, config) {
			alert('Successful Registration');
			$state.go('login');
			res.success = true;
			res.obj = {};
		})
		.error(function(obj, status, headers, config) {
			alert('Bad Registration');
			res.success = false;
			res.obj = {};
			res.obj.errorMessage = "Name is registered already.";
		});
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