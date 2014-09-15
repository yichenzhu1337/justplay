var mod = angular.module('commentModule', ['jp.authentication']);

var factories = {};

factories.Comment = function($filter){

	function Comment(senderName, description, username, date, dp) {
		// Initialize Values
		this.senderName = senderName;
		this.message = description;
		this.username = username;
		this.first_name = username; 
		this.date = moment.tz(date, 'Etc/UTC').tz('America/Detroit');
		this.profile_picture = dp;
	}

	function isValidComment(comment) {
		if (
			angular.isUndefined(comment.username) ||
			angular.isUndefined(comment.description) ||
			angular.isUndefined(comment.date) ||
			angular.isUndefined(comment.profile_picture)
			)
		{
			return false;
		} else {
			return true;
		}
	}

	Comment.build = function(data) {
		if (isValidComment(data)) {
			return new Comment(data.username, data.description, data.username, data.date, data.profile_picture);
		} else {
			return false;
		}
	}

	return Comment;
}

factories.CommentSvc = ['Comment', function(Comment) {
	var createCollection = function(comments) {
		var array = [];
		for (var i = 0; i < comments.length; i++)
		{
			array.push(Comment.build(comments[i]));
		}
		return array;		
	}

	return {
		createObj: function(comments) {
			var obj = {};
			obj.list = createCollection(comments);
			obj.totalComments = obj.list.length;

			return obj;
		}
	}
}]

// Single Comment
mod.directive('jpcomment', ['authenticationService', function(AuthSvc){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/modules/activities/components/comment/comment.tmpl.html',
		scope: {
			commentobj: '='
		},
		replace: true,
		link: function($scope, element, attrs) {
			function init() {
				$scope.AuthSvc = AuthSvc;

				$scope.$watchCollection(function () { return $scope.commentobj }, function(newVal,oldVal) {
					if (newVal!=oldVal)
					{
						$scope.commentobj.put();
					}
				});
			}

			$scope.IsCurrentUser = function(username)
			{
				return $scope.AuthSvc.isCurrentUser(username);
			}

			init();
		}
	}
}]);

// List of Paginated Comments 
mod.directive('jpcommentlist', [function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/modules/activities/components/comment/commentlist.tmpl.html',
		scope: {
			list: '=',
			pageLength: '='
		},
		link: function($scope, element, attrs) {
			function init()
			{
				$scope.currentPage = Math.ceil($scope.list.length/$scope.pageLength);
				$scope.totalComments = $scope.list.length;

				$scope.$watch(function() { return $scope.list.length }, function(newVal, oldVal) {
					if (newVal!=oldVal)
					{
						$scope.totalComments = newVal;
					}
				});
			}
			init();
		}
	}
}]);

// Comment Box
mod.directive('jpcommentbox', ['authenticationService', '$state', function(AuthSvc, $state){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/modules/activities/components/comment/commentbox.tmpl.html',
		replace: true,
		scope: {
			list: '=',
			activityId: '=',
			enabled: '='
		},
		link: function($scope, element, attrs) {
			function init() {
				$scope.AuthSvc = AuthSvc;
			}

			$scope.postComment = function(parent, comment) {
				var commentData = {
					activity_id: $scope.activityId, 
					user_id: $scope.AuthSvc.getUser().numeric_id,
					username: $scope.AuthSvc.getUser().username,
					name: $scope.AuthSvc.getUser().profile.name,
					description: comment,
					date: moment.tz(new Date(), 'America/Detroit'),
					profile_picture: $scope.AuthSvc.getUser().profile.image
				}
				parent.post(commentData).then(function() {
					$state.go($state.$current, null, { reload: true });
				});
/*				parent.push(commentData);
				$scope.newcomment = "";*/
			}

			init();
		}
	}
}]);

mod.factory(factories);
