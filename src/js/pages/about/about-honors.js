import Swiper, { Scrollbar } from 'swiper';
import $ from 'jquery';

var honorsSwiper = new Swiper(".honors", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false,
  },
  modules: [Scrollbar],
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 25
    }
  }
});

$(".next-honor").click(function () {
  honorsSwiper.slideNext();
});
