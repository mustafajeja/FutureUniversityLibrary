// Initializes Side Navigation Bar
$(document).ready(function () {
    $('.sidenav').sidenav();
});

//   Jquery Initialization
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    duration: 200,
    indicators: true
});

// Autoplay for the carousel
setTimeout(autoplay, 3000);

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}