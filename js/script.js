$(document).ready(function () {
	

	//  <!-- RESPONSIVE

	$(".header .megamenu.nav>li>a.tb_menu_item").hover(function(){
		$(this).parent().css({
			"color":"#fff",
			"background-color": "#b1006b",
			"transition": "all .2s"
		});
	}, function(){
		$(this).parent().css({
			"color":"#fff",
			"background-color": "inherit"
		});
	});

	function moveElem(stand, target, dest){
		var clone = $(target).clone();
		$(target).remove();
		if(stand == "prepend"){
			$(dest).prepend(clone);
		}else if(stand== "append"){
			$(dest).append(clone);
		}
	}

	var check = 0;
	function responsive(){
		if ($(".desktop_check-jquery").is(":hidden")) {
			//SEARCH_TABLET
			moveElem("append", ".header-search", ".header-top");
			//MENU_TABLET
			moveElem("prepend", ".header .megamenu", ".header-top-menu .col-md-12");
			$(".megamenu.nav>li>a").addClass("tb_menu_item");
			check = 1;
		}else{
			//SEARCH_TABLET
			moveElem("prepend", ".header-search", ".header-bot .col-md-12");
			//MENU_TABLET
			moveElem("append", ".header .megamenu", ".header-bot .col-md-12");
			$(".megamenu.nav>li>a").removeClass("tb_menu_item");
			check = 2;		
		}
	}
	function checkMedia(){
		var screen_width_before;
		if ($(".desktop_check-jquery").is(":hidden")) {
			screen_width_before = 1;
		}else{
			screen_width_before = 2;
		}
		return screen_width_before;
	}
	$(window).resize(function(){
		if(check != checkMedia()){
			responsive();
		}
	});
	responsive();
	//  RESPONSIVE-->

	$(".header-search .search-btn").hover(function(){
		$(".header .open .dropdown-menu").first().stop(true, true).slideUp(200);;
		$(".header .open").removeClass("open");
	});
	$(".header-top .menu-toggle").click(function(){
		var menu = $(".header-top-menu");
		if(!menu.is(':visible')){
			menu.slideDown(300);
			$(this).toggleClass("active");
			return;
		}
		menu.slideUp(200);
		$(this).toggleClass("active");
	});

	$('.dropdown, .navbar-right .btn-group').on('show.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});

	$('.dropdown, .navbar-right .btn-group').on('hide.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
	});

	$('.main-slider').slick({
		prevArrow: $('.slide-prev'),
	  	nextArrow: $('.slide-next'),
	});

	$('.index-slider .slide-arrow').click(function() {
    	$('.slide-arrow > span').hide();
    	$(this).find('span').show();
    });

	$('.index-constBlocks .project').hover(function() {
		$(this).toggleClass("project-hover");
		$(this).siblings(".project").toggleClass("project-hover-sibling");
	});
	// $('.index-constBlocks .project').hover(function() {
		
 //    	var thisFunc = this;
 //    	$(this).find('.project-info').stop().slideDown(400);
	// 	if ($(thisFunc).hasClass('project_top')) {
 //    		var bootomId = $(thisFunc).data('bottom');
 //    		$('#p'+bootomId+'').hide();
 //    	}
 //    }, function() {
 //    	var thisFunc = this;
	// 	$(this).find('.project-info').stop().slideUp(400);
	// 	if ($(thisFunc).hasClass('project_top')) {
 //    		$(thisFunc).parent().find('project_bottom').show();
 //    		var bootomId = $(thisFunc).data('bottom');
 //    		$('#p'+bootomId+'').show();
 //    	}
    	
 //    })

    $('.index-readyProjects .project-slider').slick({
    	infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: $('.project-slide-prev'),
	  	nextArrow: $('.project-slide-next')
	});


	$('.design-slider').slick({
    	infinite: false,
    	dots: true,
    	dots: true,
	    customPaging : function(slider, i) {
	        var id = $(slider.$slides[i]).data('id');
	        var text = $(slider.$slides[i]).data('text');
	        return '<span class="dot-id">'+id+'</span><p class="dot-text">'+text+'</p>';
	    },
		prevArrow: $('.design-slide-prev'),
	  	nextArrow: $('.design-slide-next')
	});
	
	$('.index-construction .const-slider').slick({
    	infinite: true,
		slidesToShow: 5,
		slidesToScroll: 4,
		// prevArrow: $('.project-slide-prev'),
	 //  	nextArrow: $('.project-slide-next')
	});
	



});