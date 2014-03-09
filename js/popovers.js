$(document).ready(function(){
	$('#suggest-activity').popover({
		html: 'true',
		placement: 'bottom',
		title: 'Suggest an activity',
		content: function(){
			return $("#activity-create-form").html();
		}
	});
});