import './scss/main.scss';

console.log('hello from webpack!');

const slides = document.querySelectorAll('.slider__slide');
const btns = document.querySelectorAll('.slider__tab-item');

let currentSlide = 1;

const manualNav = (manual) => {
  slides.forEach((slide) => {
    slide.classList.remove('slider__slide_active');
  });

  btns.forEach((btn) => {
    btn.classList.remove('slider__tab-item_active');
  });

  slides[manual].classList.add('slider__slide_active');
  btns[manual].classList.add('slider__tab-item_active');
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manualNav(i);
    currentSlide = i;
  });
});
