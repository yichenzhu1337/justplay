var mod = angular.module('jp.social', ['jp.authentication', 'userModule','ui.bootstrap', 'jp.friend','jp.friend.status.config']);

var controllers = {};
var directives = {};


controllers.socialController = function($scope, peopleusers){
	init();

	function init() {
		$scope.users = peopleusers;
	}
};

directives.jpuserlist = function($filter, UserSvc, authenticationService, FriendService, friend_statuses, $state) {
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
			$scope.AuthSvc = authenticationService;
			$scope.friend_statuses = friend_statuses;

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
			init();

			var refreshPage = function()
			{
				$state.go($state.$current, null, { reload: true });
			}

			/// USER-RELATIONSHIP FUNCTIONS
			/// ---------------------------
			$scope.checkFriendStatus = function(id) {
				$scope.FriendSvc.getFriendStatus(id).then(function(data)
				{
					console.log(data);
				});
			};

			$scope.sendFriendRequest = function(toId) {
				$scope.FriendSvc.sendFriendRequest($scope.AuthSvc.getUser().numeric_id, toId);
				refreshPage();
			}

			$scope.acceptFriendRequest = function(toId) {
				$scope.FriendSvc.acceptFriendRequest($scope.AuthSvc.getUser().numeric_id, toId);
				refreshPage();
			}

			$scope.rejectFriendRequest = function(toId) {
				$scope.FriendSvc.rejectFriendRequest($scope.AuthSvc.getUser().numeric_id, toId);
				refreshPage();
			}

			$scope.unFriend = function(toId) {
				$scope.FriendSvc.unFriend(toId);
				refreshPage();
			}

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
		}
	}
};

mod.controller(controllers);
mod.directive(directives);