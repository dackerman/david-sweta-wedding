var carousel =  {}

carousel.position = 0;
carousel.direction = -1;
carousel.speed = 1;

carousel.minx = -200;
carousel.maxx = 0;

carousel.images = [];

carousel.addImage = function(url_string, name) {
    var element = document.createElement("img");
    element.src = url_string;
    element.onclick = carousel.goToPicture(name);

    carousel.images.push(element);
}

carousel.start = function(element) {
    for (var i = 0; i < carousel.images.length; i++) {
        element.appendChild(carousel.images[i]);
    }

    window.setInterval(function() {
        carousel.position = carousel.position + carousel.direction * carousel.speed;
        element.style.left = carousel.position + "px";
        if (carousel.position < carousel.minx || carousel.position > carousel.maxx) {
            carousel.direction *= -1;
        }
    }, 100);
}

carousel.goToPicture = function(img_href) {
    return function() {
        window.location.hash = "#photos/" + img_href;
    };
}
