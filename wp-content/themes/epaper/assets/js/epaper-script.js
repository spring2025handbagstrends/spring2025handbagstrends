(function ($) {
    "use strict";
    $.fn.epaperAccessibleDropDown = function () {
		var el = $(this);

		$("a", el).focus(function() {
		    $(this).parents("li").addClass("hover");
		}).blur(function() {
		    $(this).parents("li").removeClass("hover");
		});
	}

    $(".menu-close").on('click', function(){
       $("a.slicknav_btn").removeClass("slicknav_open");
       $(".slicknav_nav").css("display", "none");
    });

    jQuery(document).ready(function($){
    	$("#primary-menu").epaperAccessibleDropDown();
        // Mobile Menu
        $("#primary-menu").slicknav({
            'allowParentLinks': true,
            'prependTo': '.epaper-responsive-menu',
            'nestedParentLinks': false,
            'closeOnClick': true,
        });

        $(".masonry-post").masonry({
            horizontalOrder: true,
        });
        
        $(".menu-close").focus(function() {
            $("a.slicknav_open").focus();
        });

        $(".news").easyTicker({
            visible: 1,
            interval: 5000
        });
    });
}(jQuery)); 