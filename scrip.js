const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
let index = 0;

function showNextImage() {
    index++;
    if (index >= totalImages) {
        index = 0;
    }
    updateCarousel();
}

function showPrevImage() {
    index--;
    if (index < 0) {
        index = totalImages - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -index * 100; // Move the carousel to the correct position
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Automatically change image every 3 seconds
setInterval(showNextImage, 3000);

// Add event listeners to the buttons
document.querySelector('.prev').addEventListener('click', showPrevImage);
document.querySelector('.next').addEventListener('click', showNextImage);

// Initialize the carousel position
updateCarousel();
