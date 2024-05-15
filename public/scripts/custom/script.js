var $ = jQuery;
$(window).load(function () {
    onCollegeLayout.init();
  });
  
  //var onScriptsLoad = onScriptsLoad || {};
  var onCollegeLayout = onCollegeLayout || {};
  onCollegeLayout = {
    init: function () {
      
        $(".l-styled").each(function () {
          var wrapDiv = $('<div/>', {
            class: 'l-select'
          }),
            holderDiv = $('<span/>', {
              class: 'l-select__holder',
            }),
            selectedvalue = $(this).find('option:selected').text();
          $(this).wrap(wrapDiv).before(holderDiv);
          $(holderDiv).text(selectedvalue);
          $('html').on('click', holderDiv, function () {
            $(this).next('select.l-styled').trigger('click');
          });
          $('html').on('change', 'select.l-styled', function () {
            var $this = $(this),
              selectedvalue = $this.find('option:selected').text(),
              span = $this.prev('span.l-select__holder');
            $(span).text(selectedvalue);
          });
        });
    
        $('body').on('click', 'span.l-select__txt', function () {
          $(this).next('select.l-styled').trigger('click');
        });
    
        $('body').on('change', 'select.l-styled', function () {
          var $this = $(this),
            selectedvalue = $this.find('option:selected').val(),
            span = $this.prev('span.l-select__txt');
          $(span).text(selectedvalue);
        });


        /* main menu js start here */
        if ($(".navigation-top-nav").length > 0) {
            $('.navigation-top-nav .btn.d-inline-block').click(function(){
                $('.navigation-top-nav .right-sidebar').removeClass('closed');
            });
            $('.navigation-top-nav .btn-close').click(function(){
                $('.navigation-top-nav .right-sidebar').addClass('closed');
            });
        }
        
        /* main menu js end here */
        /* secondary menu js start here */
        if ($(".navigation-top-application").length > 0) {
            $('.navigation-top-application .ntaToggle').click(function(){
                $('.navigation-top-application .nta-right-sidebar').removeClass('closed');
            });
            $('.navigation-top-application .btn-close').click(function(){
                $('.navigation-top-application .nta-right-sidebar').addClass('closed');
            });
        }
        
        /* secondary menu js end here */
        
      if ($(".search-icon").length > 0) {
            $("body").on('click', '.search-icon', function (e) {
                $('.modal-search').fadeIn("slow");
                e.preventDefault();
            });

            $("body").on('click', '.modal-search .modal__close', function (e) {
                $(this).parents('.modal-search').fadeOut("slow");
                e.preventDefault();
            });
        }

      /* Back to top button  js start here */
      if ($("#backtopbtn").length > 0) {
        let btn = $('#backtopbtn');
      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });
      
      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });
      }
    
    /* Back to top button  js end here */
    /* center slider js start here */
    if ($("#btnBoxSlide .btnBox-list").length > 0) {
      $("#btnBoxSlide .btnBox-list").slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow:5,
        arrows: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            }
          }
        ]

      });
    }
     /* center slider js end here */
    /* cl2019testimonial2 slider js start here */
    if ($(".cl2019testimonial2 .cl2019testimonial2__slide").length > 0) {
      $(".cl2019testimonial2 .cl2019testimonial2__slide").slick({
        slidesToShow: 1,
        dotsClass: "slider__dots",
        dots: false,
        arrows: true,
      });
    };

    /* cl2019testimonial2 slider js end here */

     /* cl2019testimonial2new slider js start here */
     if ($(".cl2019testimonial2new .cl2019testimonial2new__slide").length > 0) {
      $(".cl2019testimonial2new .cl2019testimonial2new__slide").slick({
        slidesToShow: 1,
        dotsClass: "slider__dots",
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
      });
    };
    /* cl2019testimonial2 slider js end here */
    /* cl2019testimonial2new slider js start here */
  /*  if ($(".ep_testimonial .ep_testimonial__slide").length > 0) {
      $(".ep_testimonial .ep_testimonial__slide").slick({
        slidesToShow: 1,
        dotsClass: "slider__dots",
        dots: true,
        arrows: false,
        autoplay: true
      });
    };*/
    /* cl2019testimonial2 slider js end here */

    /* kp slider js start here */
    if ($(".kp-cont__slide").length > 0) {
      $(".kp-cont__slide").slick({
        slidesToShow: 1,
        dotsClass: "slider__dots",
        dots: true,
        arrows: false,
        autoplay: true
      });
    };

    /* kp slider js end here */

    /* cl2019partners slider js start here */
    if ($(".cl2019partners_slide ul").length > 0) {
      $(".cl2019partners_slide ul").slick({
        dotsClass: "slider__dots",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
    /* cl2019partners slider js end here */
   /* /!* load more sub them list js start here *!/
      $(".subtheme__cat li").click(function(){
        $(this).toggleClass("active");
      });
      $(".subtheme__cat li").slice(0, 177).css('display','inline-block');
      $(".subtheme--loadmore").on("click", function(e){
        console.log('click');
        e.preventDefault();
        $(".subtheme__cat li:hidden").slice(0, 4).css('display','inline-block');
        if($(".subtheme__cat li:hidden").length == 0) {
          $(".subtheme--loadmore").text("No Content").addClass("noContent");
        }
      });
    /!* load more sub them list js start here *!/*/


    }
};


