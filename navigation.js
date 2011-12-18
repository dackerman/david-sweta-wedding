var navigation = {}

navigation.elements = []; // elements that can be navigated to

navigation.initialize = function(element) {
    navigation.collectIds(element, navigation.elements);
}

navigation.collectIds = function(element, elementList) {
    var children = element.childNodes[1].childNodes

    for (i = 0; i < children.length; i++) {
        if (children[i].id != "" && children[i].id != undefined) {
            elementList.push(children[i]);
            navigation.setOnClick(children[i].id);
        }
    }
};

navigation.setOnClick = function(elementId) {
    document.getElementById(elementId).onclick = function() {
        navigation.navigate(elementId);
    }
}

navigation.navigate = function(elementId) {
    var elements = navigation.elements;
    for (i = 0; i < elements.length; i++) {
        navigation.setContentHidden(elements[i]);
        if (elements[i].id == elementId) {
            navigation.setContentVisible(elements[i]);
        }
    }
}

navigation.setContentVisible = function(navElement) {
    var content = navigation.getContent(navElement.id);
    if (content != undefined) {
        content.style.display = "block";
    }
}

navigation.setContentHidden = function(navElement) {
    var content = navigation.getContent(navElement.id);
    if (content != undefined) {
        content.style.display = "none";
    }
}

navigation.getContent = function(navElementId) {
    return document.getElementById("content_" + navElementId);
}
