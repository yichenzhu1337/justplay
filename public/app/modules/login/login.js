var mod = angular.module('jp.login', []);

var controllers = {};
var directives = {};

controllers.loginCtrl = function($scope, $state, $http){
	var masterLoginCredentials = {};
	$scope.registeredEmail = true;
	$scope.submittedLoginForm = {};

	$scope.submit = function(isValid) {
		var url = "http://localhost/laravel_project/public/justplay/test";

		$http.get(url).
		success(function(data, status, headers, config) {
      console.log("SuccessData: " + data);
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log("Fail Data: " + data);

    });
	};
};

directives.loginform = function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'app/modules/login/partials/form.html',
	};
};

mod.controller(controllers);
mod.directive(directives);