$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    margin:10,
  });
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(function () {
    $('.scrollup').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
    })
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });


  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

});