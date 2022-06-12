import Swiper, { Scrollbar } from 'swiper';

function makeGalleryScrollbar(id) {
  var galleryCarousel = new Swiper(`.about-gallery-carousel-${id}`, {
    centeredSlides: false,
    loop: false,
    slidesPerView: 1.25,
    spaceBetween: 20,
    scrollbar: {
      el: `.gallery-scrollbar-${id}`,
      hide: false,
      draggable: true,
      dragSize: 100,
    },
    modules: [Scrollbar],
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  var nextButton = document.querySelector(`.next-gallery-${id}`);
  nextButton.addEventListener("click", function () {
    galleryCarousel.slideNext();
  });
}


[1, 2, 3].forEach(item => {
  makeGalleryScrollbar(item);
})
