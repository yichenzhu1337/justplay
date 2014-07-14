var mod = angular.module('jp.social', ['jp.authentication', 'userModule','ui.bootstrap']);

var controllers = {};
var directives = {};


controllers.socialController = function($scope, $filter, UserSvc, authenticationService,$q, $timeout){

	// Services
	$scope.UserSvc = UserSvc;

	$scope.getUsers = function() {
		return $scope.UserSvc.ListAll().then(
			function(data){
				return data;
			});
	}
};

directives.testdirective = function() {
	return {
		restrict: "E",
		scope: {
			done: "&"
		},
		template: '<input type="text" ng-model="chore">'+
		' {{chore}} ' +
		' <div class="btn btn-default" ng-click="done({chore:chore})">I\'m done!</div>' +
		' 	<div ng-repeat="peepz in people">' +
		'{{peepz.name}}' +
		'</div>',
		link: function(scope, element, attr) {
			scope.done().then(
				function(users) {
					console.log('post:' + users);
					scope.people = users;
				});
		}
	}
}

directives.jpuserlist = function($filter, UserSvc, authenticationService) {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/modules/social/user-list.tmpl.html',
		scope: {
			pageLength: "@",
			getusers: "&"
			//userlist: "&userList"
		},
		link: function($scope, element, attrs) {
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
				$scope.getusers().then(
					function(users) {
						console.log('post:' + users);
						// Init variables when all values arrive
						$scope.currentPage = 1; // Pagination
						$scope.pageLength = attrs.pagelength;

						//var allUsers = users;
						$scope.users = users;
						$scope.totalItems = users.length;
					});
			};
			init();

			/**
			 * Updates pagination variables
			 */
			$scope.updateUsers = function(selectedUser) {
				// Filter out the users
				var filteredUsers = $filter("filter")($scope.users, {name:selectedUser});

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
		}
	}
};

mod.controller(controllers);
mod.directive(directives);