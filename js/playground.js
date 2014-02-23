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

	// Knob Bar Setup
    $(function($) {
        $(".knob").knob({
            change : function (value) {
                //console.log("change : " + value);
            },
            release : function (value) {
                //console.log(this.$.attr('value'));
                console.log("release : " + value);
            },
            cancel : function () {
                console.log("cancel : ", this);
            },
            draw : function () {

                // "tron" case
                if(this.$.data('skin') == 'tron') {

                    var a = this.angle(this.cv)  // Angle
                        , sa = this.startAngle          // Previous start angle
                        , sat = this.startAngle         // Start angle
                        , ea                            // Previous end angle
                        , eat = sat + a                 // End angle
                        , r = 1;

                    this.g.lineWidth = this.lineWidth;

                    this.o.cursor
                        && (sat = eat - 0.3)
                        && (eat = eat + 0.3);

                    if (this.o.displayPrevious) {
                        ea = this.startAngle + this.angle(this.v);
                        this.o.cursor
                            && (sa = ea - 0.3)
                            && (ea = ea + 0.3);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                        this.g.stroke();
                    }

                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                    this.g.stroke();

                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();

                    return false;
                }
            }
        });

        // Example of infinite knob, iPod click wheel
        var v, up=0,down=0,i=0
            ,$idir = $("div.idir")
            ,$ival = $("div.ival")
            ,incr = function() { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
            ,decr = function() { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
        $("input.infinite").knob(
                            {
                            min : 0
                            , max : 20
                            , stopper : false
                            , change : function () {
                                            if(v > this.cv){
                                                if(up){
                                                    decr();
                                                    up=0;
                                                }else{up=1;down=0;}
                                            } else {
                                                if(v < this.cv){
                                                    if(down){
                                                        incr();
                                                        down=0;
                                                    }else{down=1;up=0;}
                                                }
                                            }
                                            v = this.cv;
                                        }
                            });
    });
});
