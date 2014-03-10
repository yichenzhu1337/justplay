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
});