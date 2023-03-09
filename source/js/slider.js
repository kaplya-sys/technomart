const prevSliderButton = document.querySelector('.slider__button--prev');
const nextSliderButton = document.querySelector('.slider__button--next');
const sliderItems = document.querySelectorAll('.slider__item');
const paginationButtons = document.querySelectorAll('.slider__pagination-button');

let counter = 1;

const showSlider = (position) => {

    if (position > sliderItems.length) {
        counter = 1
    }

   if (position < 1) {
     counter = sliderItems.length
   }

    sliderItems.forEach(element => element.classList.remove('slider__item--current'));
    paginationButtons.forEach(element => element.classList.remove('slider__pagination-button--current'));
    sliderItems[counter - 1].classList.add('slider__item--current');
    paginationButtons[counter - 1].classList.add('slider__pagination-button--current');
};

const nextSlider = () => {
   showSlider(counter += 1);
};

const prevSlider = () => {
   showSlider(counter -= 1);
};

prevSliderButton.addEventListener('click', () => {
    prevSlider();
});

nextSliderButton.addEventListener('click', () => {
    nextSlider();
});

for (let i = 0; i < paginationButtons.length; i++) {
    paginationButtons[i].addEventListener('click', () => {
        i >= counter? nextSlider(): prevSlider()
    });
}