$(document).ready(function() {
  $('a[href=".about"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      500,
      "linear"
    );
  });

  $(".header-nav__menu").click(function() {
    $(".slide-menu").toggleClass("show-menu");
  });

  $(".slide-menu-exit").click(function() {
    $(".slide-menu").toggleClass("show-menu");
  });

  $('.slide-menu__link').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      1000,
      "linear"
    );
  });

  $(".lang").click(function() {
    $(".lang__arrow").toggleClass("hide");
    $(".lang__other-wrapper").toggleClass("hide");
    $(".lang__other-wrapper--menu").toggleClass("hide");
  });
});
