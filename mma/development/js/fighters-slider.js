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