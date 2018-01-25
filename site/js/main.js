
$(document).ready(function(){
  $("#modal-bg, .close-window").click(function(e) {
    e.preventDefault();
    $("#modal-bg").fadeOut(500);
    $("#modal-window").fadeOut(500);
  });
});

$(document).ready(function(){
  $(".products .order-btn").click(function(e) {
    e.preventDefault();
    var name = $(this).closest('li').find('.title').text();
    $('#order h4').text('Заказать '+name);
    $('#order input[name="cases"]').val('Заказ '+name);
  });
});



//Учись студент пока я жив
$(document).ready(function(){
 $('form.action-form').submit(function(e){
  e.preventDefault();
  var id = $(this).attr('id');
      reuireds = $('#'+id+' .required');
      verification = 'true';
      name = $('#'+id+' input[name="name"]').val();
      phone = $('#'+id+' input[name="phone"]').val();
      mail = $('#'+id+' input[name="mail"]').val();
      cases = $('#'+id+' input[name="cases"]').val();
  $('#'+id+' .error-box').html('');
  $(reuireds).each(function(){
   var val = $(this).val();
       text = $(this).attr('placeholder');
       desription = $(this).attr('data-desription');
   if(!$(this).val().length) {
    $(this).removeClass('not_error').addClass('error');
    $(this).next('.error-box').html('поле "'+text+'" обязательно для заполнения,<br> и не может быть пустым<br>')
                                    .css('color','#000000')
                                    .animate({'paddingLeft':'10px'},400)
                                    .animate({'paddingLeft':'5px'},400);
    verification = 'false';
	 }
  });
  if(verification === 'true'){
   $.ajax({
    type: "POST",
    url: "send.php",
    data: {"name": name, "phone": phone, "mail": mail, "cases": cases},
		success: function(data){
     $.magnificPopup.open({
       items: {
           src: '#thanks',
           type: 'inline'
       },
       callbacks: {
           close: function() {
                setTimeout('window.location.reload()', 10);
           }
       }
     });
     ga('send', 'event', 'button', 'sign in');
     yaCounter33607929.reachGoal('goal');
     goog_report_conversion();
     window['optimizely'] = window['optimizely'] || [];
     window['optimizely'].push(["trackEvent", "form_success"]);
		}
	 });
  }
 });
});


jQuery(function ($) {
    /*slider*/
	$(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000
    });

    /*popups*/
    $('.prod, .certificate').magnificPopup({
        type: 'image'
    });

    var clock = $('#countdown').FlipClock(36000, {
        language: 'ru-ru',
        countdown: true
    });

    $('.open-popup').magnificPopup({
        type: 'inline',
        midClick: true
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

    /*no placeholder on inputs*/
    $('input,textarea').focus(function(){
     $(this).data('placeholder',$(this).attr('placeholder'))
     $(this).attr('placeholder','');
   });
    $('input,textarea').blur(function(){
     $(this).attr('placeholder',$(this).data('placeholder'));
   });
});
