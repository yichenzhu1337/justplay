var mod = angular.module('commentModule', []);

var factories = {};

factories.Comment = function(){

	function Comment(senderName, description, username) {
		// Initialize Values
		this.senderName = senderName;
		this.message = description;
		this.username = username;
	}

	function isValidComment(comment) {
		if (
			angular.isUndefined(comment.username) ||
			angular.isUndefined(comment.description)
			)
		{
			return false;
		} else {
			return true;
		}
	}

	Comment.build = function(data) {
		if (isValidComment(data)) {
			return new Comment(data.username, data.description, data.username);
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

mod.factory(factories);
