let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

const showImage = (index) => {
    const newTransformValue = -index * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
};

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
});

// Funcionalidad para el menú responsivo
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');  // Cambia la clase 'active' para mostrar u ocultar el menú
});
