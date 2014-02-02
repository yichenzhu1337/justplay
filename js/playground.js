$(document).ready(function(){
	$(function(){
		$('#side-menu').metisMenu();
	});

	$("#Sidebar-menu-button").click(function(){
		
		$(".sidebar-right-content").toggle();
		var width=$(".navbar-fixed-side").width();
		var shrink=(width>50)?true:false;
		//alert(width);
		if (shrink){
			//alert("Shrinkit!");	
			$(".navbar-fixed-side").css({"width":"50px"});
		} else {
			//alert("Expandit!");	
			$(".navbar-fixed-side").css({"width":"200px"});
		}
		
	})	
});
