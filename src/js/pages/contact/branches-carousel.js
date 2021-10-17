import Swiper from 'swiper';

new Swiper(".gallery", {
  loop: true,
  slidesPerView: 2.5,
  spaceBetween: 26,
  centeredSlides: true,
  mousewheel: true,

  breakpoints: {
    576: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
});
