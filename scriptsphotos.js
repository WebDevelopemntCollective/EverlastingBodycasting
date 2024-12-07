const sliderContainer = document.querySelector('.slider-container');
const slides = sliderContainer.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');
const dots = dotsContainer.querySelectorAll('.dot');
let slideIndex = 0;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].style.display = 'block';
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