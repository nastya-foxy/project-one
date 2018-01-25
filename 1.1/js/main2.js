window.lp = {
  // init fancybox images
  fancybox:function() {
    $(".fancybox").fancybox({
      nextEffect:'none',
      prevEffect:'none',
      padding: 0
    });
    $(".fancyvideo").fancybox({
        padding: 0,
        width:  853, // or whatever
        height: 480,
        type: "iframe",
        iframe : {
          preload: false
        }
      });
  },
  // forms
  forms: function() {
    $('.fancyform').click(function (event) {
      event.preventDefault();
      $($(this).attr("href")).find("h4").html($(this).data("title"));
      $($(this).attr("href")).find("input[name=title]").val($(this).data("title"));
      $($(this).attr("href")).find("input[name=price]").val($(this).data("price"));
      $($(this).attr("href")).find("input[name=model]").val($(this).data("model"));
      $($(this).attr("href")).find("input[name=title]").val($(this).data("title"));
      $($(this).attr("href")).find(".top .price").html($(this).data("price")+" ГРИВЕН");
      $($(this).attr("href")).find(".top img").attr('src', ($(this).data("img")));
      $.fancybox($(this).attr("href"),{padding:0});
    });
  },

  run:function() {
    /*
      setup here
    */
    this.fancybox();
    this.forms();
    var site = location.href.toString();
    if(site.indexOf('#onlineok') + 1) {
        $.fancybox.open($("#onlineok"));
        ga('send', 'event', 'button', 'sign in');
        yaCounter33607929.reachGoal('goal');
        goog_report_conversion();
    }
    if(site.indexOf('#sucsess') + 1) {
        $.fancybox.open($("#sucsess"));
        ga('send', 'event', 'button', 'sign in');
        yaCounter33607929.reachGoal('goal');
        goog_report_conversion();
    }

  /**/
  /*form validate*/
  /**/
  $('form').each(function(index, el) {
    $(this).validate({
      errorPlacement: function(error, element) 
        {
            if ( element.is(":radio") ) 
            {
                error.appendTo( element.parents('form') );
            }
            else 
            { // This is the default behavior 
                error.insertAfter( element );
            }
         },
      rules:
    
    {
      name: {required: true},
      phone: {required: true},
      email:{required: false, email: false,},
      pay: {required: true}
    },
    messages:
    {
      name: {required:'Введите ваше имя',},
      phone: {required:'Введите ваш телефон',},
      email: {required: ''},
      pay: {required:'Пожалуйста выберите способ оплаты'}
    }
      });
  });
  /**/
  /*change bg for checked radio*/
  /**/
  $("#makeoffer2 input[type='radio']").change(function(event) {
    $("#makeoffer2 input[type='radio']:checked").parent('.radio-wr').css({
      background: '#f2f2f2'
    });
    $("#makeoffer2 input[type='radio']:not(:checked)").parent('.radio-wr').css({
      background: '#fff'
    });
  });
  /**/
  /* передача параметра online pay*/
  /**/
  $("#makeoffer2 input[type='radio']").change(function(event) {
    var pay = $("#makeoffer2 input[type='radio']:checked").val();
    $('#makeoffer2').find('input[name=online]').val(pay);
  });   
  
    $('a[href=#models]').click(function() {
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $(target).offset().top-20}, 800);
      return false;
    });

  $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000
    });


    var clock = $('#countdown').FlipClock(36000, {
        language: 'ru-ru',
        countdown: true
    });

    /*timer*/
    var deadlineHour = 12, offset = 0;
    // Grab the current date
    var currentDate = new Date();
    if(currentDate.getHours() >= deadlineHour) {
        offset = 1;
    }
    var futureDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + offset,
        deadlineHour
    );
    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    var clock = $('#countdown').FlipClock(diff, {
        language: 'ru-ru',
        countdown: true
    });

    /*fixed nav menu*/
    var $menu = $("#nav");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 125 && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
            $('.section1').css('padding-top', '40px');
        } else if($(this).scrollTop() <= 125 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
            $('.section1').css('padding-top', '0');
        }
    });

    /*scrollTo*/
    $('#nav a').click(function() {
        $.scrollTo($(this).attr('href'), 1200, {offset: {top: -40} });
        return false;
    });

    $('#nav a[href=#block0]').click(function() {
        $.scrollTo($('#block0'), 1200, {offset: {top: -160} });
        return false;
    });
    
  }//end run()
};

(function($, d, w){
  lp.run();
})(jQuery, document, window);