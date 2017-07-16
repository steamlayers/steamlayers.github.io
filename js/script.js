(function($) {

  'use strict';

  var Conversi = {

    // Initialization the functions
    init: function() {
      Conversi.AffixMenu();
      Conversi.MobileMenu();
      Conversi.ScrollSpy();
      Conversi.SmoothScroll();
      Conversi.FitVids();
      Conversi.PlaceHolder();
      Conversi.Carousel();
      Conversi.Lightbox();
      Conversi.CounterUp();
      Conversi.Button();
    },

    // Navigation menu affix
    AffixMenu: function() {
      var navMenu  = '<nav id="navigation_affix">';
      navMenu    += '<div class="container">';

      navMenu    += '<ul class="nav navbar-nav">';
      navMenu    += $('#navigation .nav.navbar-nav').html();
      navMenu    += '</ul>';

      navMenu    += '<ul class="nav nav-right navbar-nav">';
      navMenu    += $('#navigation .nav.navbar-nav.nav-right').html();
      navMenu    += '</ul>';

      navMenu    += '</div>';
      navMenu    += '</nav>';

      $('#header').before(navMenu);

      if ($('#navigation').hasClass('scrollspy')) {
        $('#navigation_affix').addClass('scrollspy');
      }

      $('#navigation').waypoint(function() {
        $('#navigation_affix').removeClass('show');
      }, {
        offset: -60
      });

      $('#navigation').waypoint(function() {
        $('#navigation_affix').addClass('show');
      }, {
        offset: -61
      });
    },

    // Add mobile navigation
    MobileMenu: function() {
      var navMenu  = '<nav id="navigation_mobile">';
      navMenu    += '<div class="nav-menu-links">';
      navMenu    += '<ul>';
      navMenu    += $('#navigation .nav').html();
      navMenu    += '</ul>';
      navMenu    += '</div>';
      navMenu    += '<div class="nav-menu-button">';
      navMenu    += '<button class="nav-menu-toggle"><i class="fa fa-navicon"></i></button>';
      navMenu    += '</div>';
      navMenu    += '</nav>';

      $('#header').before(navMenu);

      $('.nav-menu-toggle').on('click', function() {
        $(this).parent('.nav-menu-button').prev('.nav-menu-links').slideToggle(300, function() {
          $(window).trigger('resize.px.parallax');
        });
      });
    },

    // Navigation menu scrollspy to anchor section
    ScrollSpy: function() {
      $('body').scrollspy({
        target: '#navigation_affix.scrollspy',
        offset: parseInt($('#navigation_affix.scrollspy').height(), 0)
      });
    },

    // Smooth scrolling to anchor section
    SmoothScroll: function() {
      $('a.smooth-scroll').on('click', function(event) {
        var $anchor    = $(this);
        var offsetTop  = '';
        var elemHeight  = parseInt($('#navigation_affix').height() - 1, 0);

        if (window.Response.band(768)) {
          offsetTop = parseInt($($anchor.attr('href')).offset().top - elemHeight, 0);
        } else {
          offsetTop = parseInt($($anchor.attr('href')).offset().top, 0);
        }

        $('html, body').stop().animate({
          scrollTop: offsetTop
        }, 1500,'easeInOutExpo');

        event.preventDefault();
      });
    },

    // Responsive video size
    FitVids: function() {
      $('body').fitVids();
    },

    // Placeholder compatibility for IE8
    PlaceHolder: function() {
      $('input, textarea').placeholder();
    },

    // Slider with SliderPro & Slick carousel
    Carousel: function() {
      // Testimonials carousel
      $('.carousel-slider.affa-testimonials-carousel').slick({
        arrows: false,
        dots: true,
        speed: 300,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true
      });

      // General slider
      $('.carousel-slider.general-slider').slick({
        dots: true,
        speed: 300,
        adaptiveHeight: true,
        draggable: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            draggable: true
          }
        }]
      });

      $('.carousel-slider.general-slider').on('afterChange', function() {
        $(window).trigger('resize.px.parallax');
      });
    },

    // Preview images popup gallery with Fancybox
    Lightbox: function() {
      $('.fancybox').fancybox({
        loop: false
      });

      $('.fancybox-media').attr('rel', 'media-gallery').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        prevEffect: 'none',
        nextEffect: 'none',
        arrows: false,
        helpers: {
          media: {},
          buttons : {}
        }
      });
    },

    // Number counter ticker animation
    CounterUp: function() {
      $('.affa-counter-txt > h4').counterUp({
        delay: 10,
        time: 3000
      });
    },

    // Button click function
    Button: function() {
      $('.affa-map .btn-collapse').on('click', function(e) {
        if ($(this).hasClass('in')) {
          $(this).removeClass('in').siblings('.map-overlay').fadeIn(100);
        } else {
          $(this).addClass('in').siblings('.map-overlay').fadeOut(100);
        }

        return false;
      });
    }

  };

  // Run the main function
  $(function() {
    Conversi.init();
  });

})(window.jQuery);
