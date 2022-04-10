import './scss/main.scss';

console.log('hello from webpack!');

const slides = document.querySelectorAll('.slider__slide');
const btns = document.querySelectorAll('.slider__tab-item');

let currentSlide = 1;

const manualNav = (manual) => {
  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manualNav(i);
    currentSlide = i;
  });
});
