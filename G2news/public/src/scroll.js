"use strict";
let hasScrolledUp = false;
window.addEventListener('scroll', function () {
    if (window.scrollY === 0 && !hasScrolledUp) {
        hasScrolledUp = true;
    }
    else if (hasScrolledUp && window.scrollY === 0) {
        location.reload(); // Reload the page
    }
});
