var mod = angular.module('commentModule', []);

var factories = {};

factories.Comment = function($filter){

	function Comment(senderName, description, username, date) {
		// Initialize Values
		this.senderName = senderName;
		this.message = description;
		this.username = username;
		this.first_name = username; 
		this.date = moment.tz(date, 'Etc/UTC').tz('America/Detroit');
	}

	function isValidComment(comment) {
		if (
			angular.isUndefined(comment.username) ||
			angular.isUndefined(comment.description) ||
			angular.isUndefined(comment.date)
			)
		{
			return false;
		} else {
			return true;
		}
	}

	Comment.build = function(data) {
		if (isValidComment(data)) {
			return new Comment(data.username, data.description, data.username, data.date);
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

mod.directive('jpcomment', [function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/modules/activities/components/comment/comment.tmpl.html',
		scope: {
			commentobj: '='
		},
		replace: true,
		link: function($scope, element, attrs) {
			console.log($scope.commentobj);
		}
	}
}]);

mod.directive('jpcommentlist', [function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/modules/activities/components/comment/commentlist.tmpl.html',
	}
}]);

mod.factory(factories);
