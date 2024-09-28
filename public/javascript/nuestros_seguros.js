const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let scrollPosition = 0;

nextBtn.addEventListener('click', () => {
    // Desplaza 100% del contenedor (ajustado para ver 5 imágenes)
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    scrollPosition = Math.min(scrollPosition + carousel.clientWidth, maxScroll);
    carousel.style.transform = `translateX(-${scrollPosition}px)`;
});

prevBtn.addEventListener('click', () => {
    scrollPosition = Math.max(scrollPosition - carousel.clientWidth, 0);
    carousel.style.transform = `translateX(-${scrollPosition}px)`;
});
