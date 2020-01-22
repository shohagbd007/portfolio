(function ($) {
	"use strict";

  jQuery(document).ready(function($){

    //jQuery Owl Carousel for Service Carousel
    $('#service-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
				480:{
            items:2,
            nav:false
        },
        768:{
            items:3,
            nav:false
        },
        992:{
            items:4,
            nav:false,
            loop:true
        	}
    		}
			});

			//jQuery Owl Carousel for Course Carousel
	    $('#course-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
					480:{
	            items: 2,
	            nav:false
	        },
	        768:{
	            items:3,
	            nav:false
	        },
	        992:{
	            items:3,
	            nav:false,
	            loop:true
	        	}
	    		}
				});

				//jQuery Owl Carousel for Review Carousel
		    $('#review-carousel').owlCarousel({
		    loop:true,
		    margin:0,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:false
		        },
		        600:{
		            items:1,
		            nav:false
		        },
		        1000:{
		            items:1,
		            nav:false,
		            loop:true
		        	}
		    		}
					});

					//jQuery Owl Carousel for Client Carousel
			    $('#client-carousel').owlCarousel({
			    loop:true,
			    margin:0,
			    responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			            nav:false
			        },
							320:{
			            items: 2,
			            nav:false
			        },
							480:{
			            items: 3,
			            nav:false
			        },
			        768:{
			            items:4,
			            nav:false
			        },
			        992:{
			            items:6,
			            nav:false,
			            loop:true
			        	}
			    		}

						});
						// Navbar Sticky JS
						$(".header-nav-area").sticky({topSpacing: 0});

		        //jQuery Smooth Scroll
		      	$('li.smooth-menu a').bind('click',function(event){
		        var $anchor = $(this);
		        var headerH = '70';
		        $('html,body').stop().animate({
		        scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"}, 1200, 'easeInOutExpo');
		        event.preventDefault();
						});
						//jQuery Scroll Spy
		        $('body').scrollspy({
		        target: '.navbar-collapse',
		        offset: 95
		        });

						// Navbar Mobile Menu
						$(".navbar-toggler").click(function(){
		        $("body").addClass("mobile-menu-activated");
		        });

		        $("ul.nav.navbar-nav li a").click(function(){
		        $(".navbar-collapse").removeClass("in");
		        });



  });


  jQuery(window).load(function(){


  });


}(jQuery));
