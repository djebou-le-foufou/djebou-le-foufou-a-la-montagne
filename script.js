function checkViewportSize() {

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    var minWidthThreshold = 800;
    var minHeightThreshold = 400;

    if (viewportWidth < minWidthThreshold || viewportHeight < minHeightThreshold) {
        alert('Your viewport is too small. Please resize your window for a better experience.');
    }
}

window.addEventListener('resize', checkViewportSize);

checkViewportSize();