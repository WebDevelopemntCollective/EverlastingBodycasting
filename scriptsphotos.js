const sliderContainer = document.querySelector('.slider-container');
const images = sliderContainer.querySelectorAll('img');
const dotsContainer = document.querySelector('.dots-container');
const dots = dotsContainer.querySelectorAll('.dot');
let slideIndex = 0;



function showSlide(n) {
  images.forEach((image) => {
    image.style.display = 'none';
  });
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  slideIndex = (n + images.length) % images.length;
  images[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active');
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Automatic slideshow
setInterval(nextSlide, 5000);

// Manual control
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

