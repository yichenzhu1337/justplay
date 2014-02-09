/* Constants */
var ICON_SIDE_BAR_WIDTH= 45;
var SIDE_BAR_WIDTH=200;
var MAIN_CONTENT_WRAPPER_PADDING=15;
var SIDE_BAR_LIST_ITEM_HEIGHT = 40;
var ON_MOUSE_OVER_COLOR = "#232323";

$(document).ready(function(){
	//alert("begin");

	/* Side Bar */
	// Setup Vertical Distribution
	var sideMenuChildren = $('#side-menu').children().length-1; // If there's a menu icon do -1.

	window.onresize = function(){
		// Center Side-bar
		if (sideMenuChildren>0)
		{
			var halfWindowHeight = $(window).height()/2;
			var amount = 0;
			if (sideMenuChildren%2 == 0)
			{
				amount = parseInt(halfWindowHeight)-parseInt(sideMenuChildren/2*SIDE_BAR_LIST_ITEM_HEIGHT)-SIDE_BAR_LIST_ITEM_HEIGHT;
			} else {
				amount = parseInt(halfWindowHeight)-parseInt((sideMenuChildren-1)/2*SIDE_BAR_LIST_ITEM_HEIGHT)-parseInt(SIDE_BAR_LIST_ITEM_HEIGHT/2)-SIDE_BAR_LIST_ITEM_HEIGHT;
			}
			//alert(amount);
			$('#first-item').css({"margin-top":amount+"px"});
		}

		// Adjust main-content-wrapper margin
		//$('.main-content-wrapper').css({"margin-top":$('#navbar-top').height()+"px"});
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


});
