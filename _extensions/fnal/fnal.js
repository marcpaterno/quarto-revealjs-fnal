Reveal.addEventListener( 'ready', function( event ) {
    // Find the title slide
    var titleSlide = document.getElementById('title-slide');

    if (titleSlide) {
        // Set the background image directly on the slide's background element
        // Reveal.js creates a .slide-background div inside the section
        var backgroundDiv = titleSlide.querySelector('.slide-background');
        if (backgroundDiv) {
            backgroundDiv.style.backgroundImage = 'url("https://quarto.org/quarto-logo-lg.png")';
            backgroundDiv.style.backgroundSize = 'cover';
            backgroundDiv.style.backgroundPosition = 'center';
        }
    }
} );