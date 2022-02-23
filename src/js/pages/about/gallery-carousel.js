import Swiper, { Scrollbar } from 'swiper';

var galleryCarousel = new Swiper(".about-gallery-carousel", {
  slidesPerView: 1.25,
  spaceBetween: 20,
  scrollbar: {
    el: '.gallery-scrollbar',
    draggable: true,
  },
  modules: [Scrollbar],
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

var nextButton = document.querySelector('.next-gallery');
nextButton.addEventListener("click", function () {
  galleryCarousel.slideNext();
})
