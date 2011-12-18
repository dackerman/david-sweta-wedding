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
        }
    }
}
