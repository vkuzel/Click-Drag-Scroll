var lastY, totalYMovement;
var significantMoveThreshold;
var showLogMessages;

function loadOptions() {
    browser.storage.local.get(function (options) {
        console.log('options', options);
        significantMoveThreshold = options.significantMoveThreshold || 5;
        showLogMessages = !!options.showLogMessages;
    });
}

function hasMovedSignificantly() {
    return totalYMovement > significantMoveThreshold;
}

function isOverField(event) {
    try {
        var target = event.explicitOriginalTarget;
        return target instanceof HTMLSelectElement || target instanceof HTMLOptionElement
            || target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
    } catch (ignore) {
    }
    return false;
}

function mouseDownListener(event) {
    // Don't consume mouse down event overt the input fields it's possible to
    // focus into it.
    if (!isOverField(event)) {
        // This will prevent user from dragging a elements around the page on
        // dynamic pages and selecting a text as well.
        event.preventDefault();
        event.stopImmediatePropagation();
        if (showLogMessages) {
            console.log('mousedown consumed');
        }
    }

    totalYMovement = 0;
    lastY = event.screenY;

    window.addEventListener("mouseup", mouseUpListener, true);
    window.addEventListener("mousemove", mouseMoveListener, true);
}

function mouseUpListener(event) {
    window.removeEventListener("mouseup", mouseUpListener, true);
    window.removeEventListener("mousemove", mouseMoveListener, true);

    if (hasMovedSignificantly()) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (showLogMessages) {
            console.log('mouseup consumed, total Y axis movement:', totalYMovement);
        }
    }
}

function mouseMoveListener(event) {
    var deltaY = lastY - event.screenY;

    totalYMovement += Math.abs(deltaY);
    window.scrollBy(0, deltaY);
    lastY = event.screenY;
}

function mouseClickListener(event) {
    if (hasMovedSignificantly()) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (showLogMessages) {
            console.log('click consumed, total Y axis movement:', totalYMovement);
        }
    }
}

window.addEventListener("mousedown", mouseDownListener, true);
window.addEventListener("click", mouseClickListener, true);
browser.storage.onChanged.addListener(loadOptions);
loadOptions();
