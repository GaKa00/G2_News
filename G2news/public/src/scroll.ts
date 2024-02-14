let hasScrolledUp: boolean = false;

window.addEventListener('scroll', function() : void {
    if (window.scrollY === 0 && !hasScrolledUp) {
        hasScrolledUp = true;
    } else if (hasScrolledUp && window.scrollY === 0) {
        location.reload(); // Reload the page
    }
});
