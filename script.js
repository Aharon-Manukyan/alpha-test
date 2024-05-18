const slides = document.querySelectorAll('#carouselProducts .slide'); 
const prevBtn = document.querySelector('.button-arrow-left');
const nextBtn = document.querySelector('.button-arrow-right');
const slideCount = slides.length;
let slideIndex = 1;
const carouselIndicators = document.querySelectorAll('#carousel-indicators .indicator')
nextBtn.addEventListener('click', function() { 
  slideIndex = (slideIndex + 1) % slideCount; 
  updateSlider();
});

prevBtn.addEventListener('click', function() { 
  slideIndex = (slideIndex - 1 + slideCount) % slideCount; 
  updateSlider();
});

function updateSlider() { 
  const nextSlide = (slideIndex + 1) % slideCount;
  const prevSlide = (slideIndex - 1 + slideCount) % slideCount;
  
  document.querySelector('.slide-active').classList.remove("slide-active");
  slides[slideIndex].classList.add("slide-active");
  document.querySelector('.slide-next').classList.remove("slide-next");
  slides[nextSlide].classList.add("slide-next");
  document.querySelector('.slide-prev').classList.remove("slide-prev");
  slides[prevSlide].classList.add("slide-prev");
  document.querySelector('.activeIndicator').classList.remove("activeIndicator");
  carouselIndicators[slideIndex].classList.add("activeIndicator")

}