(($, Drupal) => {
  "use strict";
  Drupal.behaviors.Slider = {
    attach() {
      var selector = ".view-test1 .view-content ";
      jQuery(selector).owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        center: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            },
            1024:{
                items:7,
            }
        }
      });
      jQuery(selector).addClass("owl-carousel");
      
      var selector1 = ".view-news-and-event .view-content ";
      jQuery(selector1).owlCarousel({
        loop:true,
        autoplay: true,
        nav: true,
        margin: 40,
        width: 335,
        responsive:{
            0: {
                items: 1,
                nav: true,
              },
              320: {
                items: 1,
                nav: true,
              },
              480: {
                items: 1,
                nav: true,
              },
              768: {
                items: 2,
                nav: true,
              },
              1024: {
                items: 3,
                nav: true,
              },
        }
      });
      jQuery(selector1).addClass("owl-carousel");
      jQuery('#edit-keys').attr('placeholder', 'KEYWORD');
      
      var selector2 = ".view-image-slideshow .view-content ";
      jQuery(selector2).owlCarousel({
        loop:true,
      autoplay: true,
      dots: true,
      items:1
      });
      jQuery(selector2).addClass("owl-carousel");
      
      var selector3 = ".view-testimonials-carousel .view-content ";
      jQuery(selector3).owlCarousel({
        loop:true,
        autoplay: true,
        dots: true,
        items:1
      });
      jQuery(selector3).addClass("owl-carousel");
    },
  };
})(jQuery, Drupal);