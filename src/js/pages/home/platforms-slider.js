import Swiper, { Autoplay } from 'swiper';
Swiper.use([Autoplay]);

new Swiper(".easytrader-screenshots-wrapper", {
  centeredSlides: true,
  slidesPerView: 1.25,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  draggable: false,
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 4,
    }
  }
});

console.log("v-1");
