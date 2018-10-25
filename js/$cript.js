// Initializes Side Navigation Bar
$(document).ready(function () {
    $('.sidenav').sidenav();
});

//   Carousel Initialization
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

// Material Box initialization (Overview.html image box)
$(document).ready(function () {
    $('.materialboxed').materialbox();
});

// Initializes Tooltips
$(document).ready(function () {
    $('.tooltipped').tooltip();
});



// CountDown Script 
(function ($) {
    var date = new Date(),
        month = date.getMonth();
    day = date.getDate(),
        weekDay = date.getDay(),
        hours = {
            start: new Date(date.getFullYear(), month, day),
            end: new Date(date.getFullYear(), month, day)
        };

    // var weekDay = [0 = fri, 1 = sat, 2 = sun, 3 = mon, 4 = tues, 5 = wed, 6 = thur]

    // If it's Friday 
    if (weekDay == 5) {

        $('.countdown').hide(),
            document.getElementById('head').innerHTML = "The Library is closed";
            
    } else {

        // Start at 9am, end at 6pm
        hours.start.setHours(6);
        hours.end.setHours(16);
    }

    function countDown() {
        var date = new Date(),
            countHours = ('0' + (hours.end.getHours() - date.getHours())).substr(-2),
            countMinutes = ('0' + (59 - date.getMinutes())).substr(-2),
            countSeconds = ('0' + (59 - date.getSeconds())).substr(-2);

        // If it's currently not within the hours, don't show the countdown
        if (date.getHours() < hours.start.getHours() || date.getHours() > hours.end.getHours()) {
            $('.countdown').hide(),
                document.getElementById('head').innerHTML = "The Library is closed";
        } else if ($('.countdown').not(':visible')) {
            $('.countdown').show();
        }

        $('.countdown #hours').text(countHours);
        $('.countdown #minutes').text(countMinutes);
        $('.countdown #seconds').html(countSeconds);

    }

    $(function () {
        setInterval(function () {
            countDown();
        }, 1000);
    });
})(jQuery);