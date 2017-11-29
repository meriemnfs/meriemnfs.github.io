var currentExpandedElement;

function toggleExpand(element) {
	var clonedElement = element.cloneNode(true);
	currentExpandedElement = element;

	var expandedElements = document.getElementsByClassName('gallery-expanded');
	if (expandedElements.length > 0) {
		for (var i = 0; i < expandedElements.length; i++) {
			expandedElements[i].remove();
		}
	}

	if (!clonedElement.className.includes('gallery-expanded')) {
		clonedElement.className = 'gallery-expanded';
		document.body.appendChild(clonedElement);
	}
}

window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;

	if (key == 27) {
		var expandedElements = document.getElementsByClassName('gallery-expanded');
		if (expandedElements.length > 0) {
			for (var i = 0; i < expandedElements.length; i++) {
				expandedElements[i].remove();
			}
		}
	} else if (key == 39) {
		if (currentExpandedElement.nextElementSibling) {
			toggleExpand(currentExpandedElement.nextElementSibling);
		}
	} else if (key == 37) {
		if (currentExpandedElement.previousElementSibling) {
			toggleExpand(currentExpandedElement.previousElementSibling);
		}
	}
};
