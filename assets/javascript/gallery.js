function toggleExpand(element) {
    if(!element.className.includes('gallery-expanded')) {
        element.className = 'gallery-expanded';
    } else {
        var expandedElements = document.getElementsByClassName('gallery-expanded');
        if(expandedElements.length > 0) {

            for(var i = 0; i < expandedElements.length; i++) {
                expandedElements[i].className = 'gallery-thumbnail';
            }
        }
    }
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if(key == 27) {
        var expandedElements = document.getElementsByClassName('gallery-expanded');
        if(expandedElements.length > 0) {
            for(var i = 0; i < expandedElements.length; i++) {
                expandedElements[i].className = 'gallery-thumbnail';
            }
        }
    } else if(key == 39) {
        var expandedElements = document.getElementsByClassName('gallery-expanded');
        var expandedElement = expandedElements[0];

        if(expandedElements.length > 0) {
            for(var i = 0; i < expandedElements.length; i++) {
                expandedElements[i].className = 'gallery-thumbnail';
            }
        }

        expandedElement.nextElementSibling.className = 'gallery-expanded';

    } else if (key == 37) {
        var expandedElements = document.getElementsByClassName('gallery-expanded');
        var expandedElement = expandedElements[0];

        if(expandedElements.length > 0) {
            for(var i = 0; i < expandedElements.length; i++) {
                expandedElements[i].className = 'gallery-thumbnail';
            }
        }

        expandedElement.previousElementSibling.className = 'gallery-expanded';


    }
}
