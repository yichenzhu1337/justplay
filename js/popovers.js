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

	$('#activity-search-bar').popover({
		html: 'true',
		placement: 'bottom',
		title: function(){
			return $("#activity-search-title").html();
		},
		content: function(){
			return $("#activity-search").html();
		}
	});

	// Ensures that only one popover is open at a time and also
	// clicking the body will close a popover.
	$(':not(#anything)').on('click', function (e) {
    $('#activity-search-bar, #get-notified, #suggest-activity').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons and other elements within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
            return;
        }
    });
	});
});