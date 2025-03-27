/** prevent scroll on load */
window.addEventListener('onload', function () {
    if (window.location.hash) {
        window.scrollTo(0, 0);
    }
});