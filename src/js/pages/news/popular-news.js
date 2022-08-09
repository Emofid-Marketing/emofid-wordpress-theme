import Swiper from 'swiper';

new Swiper(".popular-news", {
  loop: false,
  slidesPerView: 1.2,
  spaceBetween: 26,
  centeredSlides: false,
  mousewheel: true,

  breakpoints: {
    768: {
      slidesPerView: 3.2,
      spaceBetween: 30
    }
  }
});
