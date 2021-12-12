import Swiper from 'swiper';
import $ from 'jquery';

var honorsSwiper = new Swiper(".honors", {
  slidesPerView: 3,
  spaceBetween: 25,
  scrollbar: {
    el: '.swiper-scrollbar',
  }
});

$(".next-honor").click(function () {
  honorsSwiper.slideNext();
});
