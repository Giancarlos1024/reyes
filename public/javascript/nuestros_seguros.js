const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel img').length;
const visibleImages = 5; // Cantidad de imágenes visibles a la vez
const imageWidth = document.querySelector('.carousel img').offsetWidth; // Ancho de una imagen

// Desplazar el carrusel
function updateCarousel() {
    const translateX = -currentIndex * imageWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}

// Botón "Siguiente"
nextButton.addEventListener('click', () => {
    if (currentIndex < totalImages - visibleImages) {
        currentIndex++;
        updateCarousel();
    }
});

// Botón "Anterior"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});
