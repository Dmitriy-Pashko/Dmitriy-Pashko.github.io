$(document).ready(function() {
    const fightersSlider = $("#fightersSlider");
  
    fightersSlider.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      smartSpeed: 2000
    });
  
    $(".fightersSliderRight").click(function() {
        fightersSlider.trigger("next.owl.carousel");
    });
  
    $(".fightersSliderLeft").click(function() {
        fightersSlider.trigger("prev.owl.carousel");
    });
  });
$(document).ready(function() {
  const infoSlider = $("#infoSlider");

  infoSlider.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    smartSpeed: 2000
  });

  $("#infoSliderRight").click(function() {
    infoSlider.trigger("next.owl.carousel");
  });

  $("#infoSliderLeft").click(function() {
    infoSlider.trigger("prev.owl.carousel");
  });
});

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

$(document).ready(function() {
  const newsSlider = $("#newsSlider");

  newsSlider.owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    smartSpeed: 2000
  });

  $("#newsSliderRight").click(function() {
    newsSlider.trigger("next.owl.carousel");
  });

  $("#newsSliderLeft").click(function() {
    newsSlider.trigger("prev.owl.carousel");
  });
});

$(document).ready(function() {
  const sponsorsSlider = $("#sponsorsSlider");

  sponsorsSlider.owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    stagePadding: 100,
    smartSpeed: 2000
  });

});
