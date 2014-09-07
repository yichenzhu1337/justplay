var mod = angular.module('jp.social', ['jp.authentication', 'userModule','ui.bootstrap', 'jp.friend']);

var controllers = {};
var directives = {};


controllers.socialController = function($scope, peopleusers, UserSvc){

	function init() {
		$scope.users = angular.copy(UserSvc.removeLoggedInUserFromList(peopleusers));
		$scope.friends = angular.copy(friendsOnly(UserSvc.removeLoggedInUserFromList(peopleusers)));
		$scope.displayedList = 'users';

		$scope.radioModel = 'users';

		$scope.$watch(function() { return $scope.radioModel}, function(newVal, oldVal) {
			if (newVal !== oldVal)
			{
				$scope.displayedList = newVal;
			}
		})
	}

	var friendsOnly = function(list)
	{
		var finalList = [];

		for (var i = 0; i < list.length; i++)
		{
			if (list[i].areFriends === 'friends')
			{
				finalList.push(list[i]);
			}
		}

		return finalList;
	}

	init();
};

directives.jpuserlist = function($filter, UserSvc, FriendService, $state) {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/modules/social/user-list.tmpl.html',
		scope: {
			pageLength: "=",
			getusers: "="
			//userlist: "&userList"
		},
		link: function($scope, element, attrs) {
			// Services
			$scope.UserSvc = UserSvc;
			$scope.FriendSvc = FriendService;

			// Variables
			// Search models
			$scope.asyncSelectedUser;
			// Pagination models
			function init() {
				$scope.currentPage = 1; // Pagination
				$scope.pl = attrs.pagelength;
 
				//var allUsers = users;
				$scope.users = $scope.getusers;
				$scope.totalItems = $scope.users.length;
			};

			/// PAGINATION FUNCTIONS
			/// ---------------------------
			$scope.updateUsers = function(selectedUser) {
				// Filter out the users
				var filteredUsers = $filter("filter")($scope.users, {first_name:selectedUser});

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

			init();
		}
	}
};

mod.controller(controllers);
mod.directive(directives);