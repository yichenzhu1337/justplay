var mod = angular.module('jp.social', ['jp.authentication', 'userModule','ui.bootstrap']);

var controllers = {};
var directives = {};


controllers.socialController = function($scope, $filter, UserSvc, authenticationService){

	// Services
	$scope.UserSvc = UserSvc;

	// Variables
	var allUsers;
	// Search models
	$scope.asyncSelectedUser;
	// Pagination models
	$scope.pageLength;
	$scope.currentPage;
	$scope.totalItems;
	

	function init() {
		// variables
		$scope.pageLength = 7; // Pagination
		$scope.currentPage = 1; // Pagination
		$scope.UserSvc = UserSvc;

		$scope.UserSvc.ListAll().then(
			function(data){
				allUsers = data;
				$scope.users = allUsers; 
				$scope.totalItems = $scope.users.length;
			});
	};
	init();

	/**
	 * Updates pagination variables
	 */
	$scope.updateUsers = function(selectedUser) {
		// Filter out the users
		var filteredUsers = $filter("filter")(allUsers, {name:selectedUser});

		// Update Pagination Variables
		resetPagination(filteredUsers.length);
	}

	$scope.clear = function(selectedUser) {
		if (selectedUser) {
			$scope.asyncSelectedUser = "";
			$scope.updateUsers($scope.asyncSelectedUser);
		}
	}

	/**
	 * Reset Pagination to page 1 & reset number of pages based on the
	 * number of items
	 */
	var resetPagination = function(numberOfItems) {
		$scope.currentPage = 1;
		$scope.totalItems = numberOfItems;
	}
};

directives.jpuserlist = function() {
	return {
		restrict: 'E',
		templateUrl: 'app/modules/social/user-list.tmpl.html'
	}
};

mod.controller(controllers);
mod.directive(directives);