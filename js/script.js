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
			moveElem("prepend", ".header .megamenu", ".header-top-menu .container");
			$(".megamenu.nav>li>a").addClass("tb_menu_item");
			check = 1;
		}else{
			//SEARCH_TABLET
			moveElem("prepend", ".header-search", ".header-bot .container");
			//MENU_TABLET
			moveElem("append", ".header .megamenu", ".header-bot .container");
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

	var isInit = false;

	function initSlide () {

		if($(window).width() < 768) {

			if(isInit) return;

			$('.project').unwrap();
			var $wrapper = $('.project-slide');
			$wrapper.find('.project').sort(function(a, b) {
			    return +a.getAttribute('data-sort') - +b.getAttribute('data-sort');
			}).appendTo($wrapper);
			$('.project').wrap('<div class="project-slide-wrapp"></div>');
			$('.project').wrap('<div></div>');
			$('.project-slide').slick({
		    	infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: $('.constProject-slide-prev'),
	  			nextArrow: $('.constProject-slide-next')
			});

			isInit = true;			
		}
	}

	initSlide();

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

	$(window).resize(function() {
		initSlide();
	})

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
	  	nextArrow: $('.project-slide-next'),
	  	responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		 ]

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
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: "unslick"
		    },
		    {
	    		breakpoint: 768,
			    settings: {
			      slidesToShow: 1,
			      slidesToScroll: 1
			    }
		    }
		 ]
		// prevArrow: $('.project-slide-prev'),
	 //  	nextArrow: $('.project-slide-next')
	});

	$('.index-construction .const-slider-2').slick({
    	infinite: true,
		slidesToShow: 5,
		slidesToScroll: 4,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: "unslick"
		    },
		    {
	    		breakpoint: 768,
			    settings: {
			      slidesToShow: 1,
			      slidesToScroll: 1
			    }
		    }
		 ]
		// prevArrow: $('.project-slide-prev'),
	 //  	nextArrow: $('.project-slide-next')
	});
	



});