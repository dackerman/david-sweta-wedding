var carousel =  {}

carousel.position = 0;
carousel.direction = -1;
carousel.speed = 1;
carousel.updateSpeed = 50;
carousel.pictureWidth = 160;

// Size of content div
carousel.contentWidth = 850;

// set dynamically
carousel.width = 0;
carousel.minx = 0;
carousel.maxx = 0;

carousel.images = [];

carousel.addImage = function(url_string) {
    var element = document.createElement("img");
    element.src = url_string;
    element.onclick = carousel.showLightbox(
        carousel.getFullSizeUrl(url_string));
    element.title = "Click to see full size";

    carousel.images.push(element);
    carousel.width += carousel.pictureWidth;
}

carousel.start = function(element) {
    for (var i = 0; i < carousel.images.length; i++) {
        element.appendChild(carousel.images[i]);
    }

    element.style.width = (carousel.width / 2) + "px";
    carousel.minx = -((carousel.width / 2) - carousel.contentWidth);

    window.setInterval(function() {
        carousel.position += carousel.direction * carousel.speed;
        element.style.left = carousel.position + "px";
        if (carousel.position < carousel.minx || carousel.position > carousel.maxx) {
            carousel.direction *= -1;
        }
    }, carousel.updateSpeed);
}

carousel.showLightbox = function(img_href) {
    return function() {
        var lightbox = document.getElementById("lightbox");
        lightbox.style.display = "block";
        lightbox.onclick = function() {lightbox.style.display = "none"};

        var lbimg = document.getElementById("lightbox_img");
        lbimg.src = img_href;
    }
}

carousel.getFullSizeUrl = function(thumbUrl) {
    var splitUrl = thumbUrl.split("/");
    return splitUrl[0] + "/" + splitUrl[2];
}
