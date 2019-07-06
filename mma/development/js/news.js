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
