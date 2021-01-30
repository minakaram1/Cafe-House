$(document).ready(function () {
  // Mobile Nav-bar
  $(".fa-bars").click(function () {
    $(".collapse").slideToggle();
  });

  $(window).resize(function () {
    if (window.innerWidth > 768) {
      $(".collapse").show();
    } else {
      $(".collapse").hide();
    }
  });

  // Show Go To Top Icon
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".go-to-top").fadeIn();
    } else {
      $(".go-to-top").fadeOut();
    }
  });

  // Preloader
  $("body").addClass("loaded");
})