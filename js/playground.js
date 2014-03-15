/* Constants */
var ICON_SIDE_BAR_WIDTH= 45;
var SIDE_BAR_WIDTH=200;
var MAIN_CONTENT_WRAPPER_PADDING=15;
var SIDE_BAR_LIST_ITEM_HEIGHT = 40;
var ON_MOUSE_OVER_COLOR = "#232323";
var HEADER_WIDTH = 980;
var CONTENT_WIDTH = 1060;
var CONTENT_MARGIN = 20;

$(document).ready(function(){
	//alert("begin");

	/* Resizing header and content-wrapper to center */
	window.onresize = function(){
        var windowWidth = $(window).width();
        var halfWindowHeight = $(window).height()/2;
        var amount = 0;

        // Center content-width
        amount = ((parseInt(windowWidth)-parseInt(CONTENT_WIDTH))/2)-40;
        $('.content-wrapper').css({"margin-left":amount+"px","margin-right":amount+"px"});

        // Center header-content
        amount = parseInt(parseInt(windowWidth)-parseInt(HEADER_WIDTH))/2;
        $('.header-wrapper').css({"margin-left":amount+"px","margin-right":amount+"px"});
	}
	window.onresize();
	
	/*$('#side-menu > li > .sidebar-right-content').mouseover(function(){
		$('#side-menu > li > .sidebar-right-content').css({"color":ON_MOUSE_OVER_COLOR});
	});*/
	$(function(){
		$('#side-menu').metisMenu();
	});

	// Toggle show and hide side-bar
	$("#Sidebar-menu-button").click(function(){
		
		$(".sidebar-right-content").toggle();
		var width=$(".navbar-fixed-side").width();
		var shrink=(width>50)?true:false;
		//alert(width);
		if (shrink){
			//alert("Shrinkit!");	
			$(".navbar-fixed-side").css({"width":ICON_SIDE_BAR_WIDTH+"px"});
		} else {
			//alert("Expandit!");	
			$(".navbar-fixed-side").css({"width":SIDE_BAR_WIDTH+"px"});
		}
		$('.main-content-wrapper').css({"padding-left":parseInt($(".navbar-fixed-side").width())+parseInt(MAIN_CONTENT_WRAPPER_PADDING)+"px"});
		
	})
    // Tooltip setup
    $(function() {
        $('.friend-mouseover').tooltip({placement: 'right'});
        $('.star-mouseover').tooltip({placement: 'top'});
    });
});
