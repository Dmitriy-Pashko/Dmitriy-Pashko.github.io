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
