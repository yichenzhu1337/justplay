$(document).ready(function(){

	$('#suggest-activity').popover({
		html: 'true',
		placement: 'bottom',
		title: function(){
			return $("#activity-form-title").html();
		},
		content: function(){
			return $("#activity-create-form").html();
		}
	});

	$('#get-notified').popover({
		html: 'true',
		placement: 'bottom',
		title: function(){
			return $("#notification-form-title").html();
		},
		content: function(){
			return $("#notification-form").html();
		}
	});
});