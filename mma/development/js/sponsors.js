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
