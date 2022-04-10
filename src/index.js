import './scss/main.scss';

console.log('hello from webpack!');

const slider = document.querySelector('.slider__content');
const slides = document.querySelectorAll('.slider__slide');
const sliderTabs = document.querySelectorAll('.slider__tab-item');
const prevButton = document.querySelector('.slider__button-prev');
const nextButton = document.querySelector('.slider__button-next');

let slideNumber = 3;

const manualNav = (index) => {
  slides.forEach((slide) => {
    slide.classList.remove('slider__slide_active');
  });

  sliderTabs.forEach((btn) => {
    btn.classList.remove('slider__tab-item_active');
  });

  slides[index].classList.add('slider__slide_active');
  sliderTabs[index].classList.add('slider__tab-item_active');
};

sliderTabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    manualNav(i);
  });
});

nextButton.addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.classList.remove('slider__slide_active');
  });

  slideNumber++;

  if (slideNumber > slides.length - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add('slider__slide_active');
});

prevButton.addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.classList.remove('slider__slide_active');
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = slides.length - 1;
  }

  slides[slideNumber].classList.add('slider__slide_active');
});

const activeSlide = document.getElementsByClassName('slider__slide_active');
const activeTab = document.getElementsByClassName('slider__tab-item_active');

let play;

const repeater = () => {
  let i = 0;

  play = setInterval(() => {
    [...activeSlide].forEach((activeSlide) => {
      activeSlide.classList.remove('slider__slide_active');
    });
    [...activeTab].forEach((activeTab) => {
      activeTab.classList.remove('slider__tab-item_active');
    });

    slides[i].classList.add('slider__slide_active');
    sliderTabs[i].classList.add('slider__tab-item_active');
    i++;

    if (slides.length === i) {
      i = 0;
    }

    if (i >= slides.length) {
      return;
    }
  }, 1000);
};
repeater();

slider.addEventListener('mouseover', () => {
  clearInterval(play);
});

slider.addEventListener('mouseout', () => {
  repeater();
});
