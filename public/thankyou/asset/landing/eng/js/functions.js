jQuery(function ($) {
   "use strict";
   var $window = $(window);
   var windowsize = $(window).width();
   var $root = $("html, body");
   var $this = $(this);


   /* ----- Back to Top ----- */
   $("body").append('<a href="#" class="back-top"><i class="fa fa-angle-up"></i></a>');
   var amountScrolled = 700;
   var backBtn = $("a.back-top");
   $window.on("scroll", function () {
      if ($window.scrollTop() > amountScrolled) {
         backBtn.addClass("back-top-visible");
      } else {
         backBtn.removeClass("back-top-visible");
      }
   });
   backBtn.on("click", function () {
      $root.animate({
         scrollTop: 0
      }, 700);
      return false;
   });
   
   
   if($(".just-sidemenu").length){
      var anchor_point = $(".rotating-words").height();
      var side_toggle = $(".just-sidemenu #sidemenu_toggle");
      side_toggle.addClass("toggle_white");
      $window.on("scroll", function () {
      if ($window.scrollTop() >= anchor_point) {
         side_toggle.removeClass("toggle_white");
      } else {
         side_toggle.addClass("toggle_white");
      }
   });
   }
   


   /*----- Menu On click -----*/
    if ($("#sidemenu_toggle").length) {
       $("body").addClass("pushwrap");
       $("#sidemenu_toggle").on("click", function () {
          $(".pushwrap").toggleClass("active");
          $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
       }), $("#close_side_menu").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
       }), $("#btn_sideNavClose").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
       });
    }
   
   /*------ MENU Fixed ------*/
   if ($("nav.navbar").hasClass("static-nav")) {
      $window.scroll(function () {
         var $scroll = $window.scrollTop();
         var $navbar = $(".static-nav");
         if ($scroll > 100) {
            $navbar.addClass("fixedmenu");
         } else {
            $navbar.removeClass("fixedmenu");
         }
      });
   }
   
   /*bottom menu fix*/
   if ($("nav.navbar").hasClass("fixed-bottom")) {
      var navHeight = $(".fixed-bottom").offset().top;
      $window.scroll(function () {
         if ($window.scrollTop() > navHeight) {
            $('.fixed-bottom').addClass('fixedmenu');
         } else {
            $('.fixed-bottom').removeClass('fixedmenu');
         }
      });
   }

   /* --------Equal Heights -------- */
   checheight();
   $window.on("resize", function () {
      checheight();
   });

   function checheight() {
      var $smae_height = $(".equalheight");
      if ($smae_height.length) {
         if (windowsize > 767) {
            $smae_height.matchHeight({
               property: "height",
            });
         }
      }
   }
   

   /* -------BG Video banner -------*/
   $(function () {
      if ($(".my-background-video").length) {
         $('.my-background-video').bgVideo();
      }
   });
   

       //Carousel home 1
            $("#journey-slider").owlCarousel({
                dots:true, 
                loop:true, 
                margin:10,  
                nav:false, 
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true, 
                autoHeight:false,
                responsive:{
                    0:{
                        items:2
                    },
                    1000:{
                        items:4
                    }
                }
            }); //carousel1
			
			 //Carousel home 1
            $("#video-slider").owlCarousel({
                dots:false, 
                loop:true, 
                margin:10,  
                nav:true, 
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true, 
                autoHeight:false,
                responsive:{
                    0:{
                        items:1,
						dots:true,
						nav:false,  
						
					},
                    1000:{
                        items:1
                    }
                }
            }); //carousel1


   
 
   /*Simple text fadng banner*/
   $("#features-expertise-slider").owlCarousel({
      items: 4,
      autoplay: true,
      autoplayHoverPause: true,
      loop: true,
      mouseDrag: true,
	  margin:20,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: false,
      nav: true,
	  navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
      responsive: {
              1200: {
                  items: 4,
				  nav:true, 
				  dots:false, 
               },
               900: {
                  items: 3,
				  nav:true, 
				  dots:false, 
               },
               768: {
                  items: 2,
				  nav:true, 
				  dots:false, 
               },
               480: {
                  items: 2,
				  nav:false, 
				  dots:true, 
               },
               320: {
                  items: 1,
					dots:true,
					nav:false,  
				 
               },
            }
   });
   
   
    /*Simple text fadng banner*/
   $("#testimonials-slider").owlCarousel({
      items: 2,
      autoplay: true,
      autoplayHoverPause: true,
      loop: true,
      mouseDrag: true,
	  margin:20,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: false,
      nav: true,
	  navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
      responsive: {
              1200: {
                  items: 2,
				  nav:true, 
				  dots:false, 
               },
               900: {
                  items: 2,
				  nav:true, 
				  dots:false, 
               },
               768: {
                  items: 2,
				  nav:true, 
				  dots:false, 
               },
               480: {
                  items: 1,
				  nav:false, 
				  dots:true, 
               },
               320: {
                  items: 1,
					dots:true,
					nav:false,  
				 
               },
            }
   });
   
     /*Simple text fadng banner*/
   $("#client-slider").owlCarousel({
      items: 5,
      autoplay: true,
      autoplayHoverPause: true,
      loop: true,
      mouseDrag: true,
	  margin:20,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: true,
      nav: false,
      responsive: {
              1200: {
                  items: 5,
               },
               900: {
                  items: 4,
               },
               768: {
                  items: 3,
               },
               480: {
                  items: 2,
               },
               320: {
                  items: 2,
               },
            }
   });
   
    /*Simple text fadng banner*/
   $("#project-slider").owlCarousel({
      items: 2,
      autoplay: true,
      autoplayHoverPause: true,
      loop: true,
      mouseDrag: true,
	  margin:40,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: false,
      nav: true,
      responsive: {
              1200: {
                  items: 2,
               },
               900: {
                  items: 2,
               },
               768: {
                  items: 2,
               },
               480: {
                  items: 2,
				  dots:true,
					nav:false, 
               },
               320: {
                  items: 2,
				  dots:true,
					nav:false, 
               },
            }
   });
   
  

  
 
});

