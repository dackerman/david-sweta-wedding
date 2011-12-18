var nav = {}

nav.navHighlightColor = "#533";

nav.elements = []; // elements that can be navigated to

nav.initialize = function(element) {
    nav.collectIds(element, nav.elements);
}

nav.collectIds = function(element, elementList) {
    var children = element.childNodes[1].childNodes

    for (i = 0; i < children.length; i++) {
        if (children[i].id != "" && children[i].id != undefined) {
            elementList.push(children[i]);
            nav.setOnClick(children[i].id);
        }
    }
};

nav.setOnClick = function(elementId) {
    document.getElementById(elementId).onclick = function() {
        nav.navigate(elementId);
    }
}

nav.navigate = function(elementId) {
    var elements = nav.elements;
    nav.highlight(nav.elements, elementId,
                  nav.setContentHidden, nav.setContentVisible);
    nav.highlight(nav.elements, elementId,
                  nav.setNavNormal, nav.setNavHighlight);

}

nav.highlight = function(elements, elementId, callback, highlightCallback) {
    for (i = 0; i < elements.length; i++) {
        callback(elements[i]);
        if (elements[i].id == elementId) {
            highlightCallback(elements[i]);
        }
    }
}

nav.setContentVisible = function(navElement) {
    var content = nav.getContent(navElement.id);
    if (content != undefined) {
        content.style.display = "block";
    }
}

nav.setContentHidden = function(navElement) {
    var content = nav.getContent(navElement.id);
    if (content != undefined) {
        content.style.display = "none";
    }
}

nav.setNavNormal = function(element) {
    element.style.removeProperty("background-color");
}

nav.setNavHighlight = function(element) {
    element.style.backgroundColor = nav.navHighlightColor;
}

nav.getContent = function(navElementId) {
    return document.getElementById("content_" + navElementId);
}
