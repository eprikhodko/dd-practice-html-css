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

const activeSlide = document.getElementsByClassName('slider__slide_active');
const activeTab = document.getElementsByClassName('slider__tab-item_active');
let i = 0;

const repeater = () => {
  setInterval(() => {
    [...activeSlide].forEach((activeSlide) => {
      activeSlide.classList.remove('slider__slide_active');
    });
    [...activeTab].forEach((activeTab) => {
      activeTab.classList.remove('slider__tab-item_active');
    });

    slides[i].classList.add('slider__slide_active');
    btns[i].classList.add('slider__tab-item_active');
    i++;

    if (slides.length === i) {
      i = 0;
    }

    if (i >= slides.length) {
      return;
    }
  }, 3000);
};
repeater();
