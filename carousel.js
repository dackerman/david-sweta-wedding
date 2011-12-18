var carousel =  {}

carousel.position = 0;
carousel.direction = -1;
carousel.speed = 1;

carousel.minx = -200;
carousel.maxx = 0;

carousel.start = function(element) {
    window.setInterval(function() {
        carousel.position = carousel.position + carousel.direction * carousel.speed;
        element.style.left = carousel.position + "px";
        if (carousel.position < carousel.minx || carousel.position > carousel.maxx) {
            carousel.direction *= -1;
        }
    }, 100);
}
