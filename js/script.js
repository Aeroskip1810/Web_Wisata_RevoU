const slides = document.querySelectorAll(".slidercard");
const totalSlides = slides.length;
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const prevCard = () => {
  counter--;
  slideCard();
};

const nextCard = () => {
  counter++;
  slideCard();
};

const slideCard = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

  if (counter < 0) {
    counter = totalSlides - 1;
    slideCardInstant();
  }

  if (counter === totalSlides) {
    counter = 0;
    slideCardInstant();
  }
};

const slideCardInstant = () => {
  slides.forEach((slide) => {
    slide.style.transition = "1s";
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// const totalSlide = slides.length;
// let counter = 0;

// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// const prevCard = () => {
//   counter--;
//   slideCard();
// };
// const nextCard = () => {
//   counter++;
//   slideCard();
// };

// const slideCard = () => {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX(-${counter * 100}%)`;
//   });
