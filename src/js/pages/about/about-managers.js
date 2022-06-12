import Swiper, { Scrollbar } from 'swiper';
import $ from 'jquery';

var managersSwiper = new Swiper(".managers", {
  centeredSlides: false,
  loop: false,
  slidesPerView: 1.6,
  spaceBetween: 25,
  scrollbar: {
    el: '.manager-scrollbar',
    hide: false,
    draggable: true,
    dragSize: 100,
  },
  modules: [Scrollbar],
  breakpoints: {
    576: {
      slidesPerView: 5,
      spaceBetween: 25
    }
  }
});

managersSwiper.on('slideChange', function () {
  var currentManager = managersSwiper.activeIndex;
  if (currentManager == 0) {
    $(".managers").addClass("no-before");
  } else {
    $(".managers").removeClass("no-before");
  }
});

managersSwiper.on('reachEnd', function () {
  $(".managers").addClass("no-after");
});

$(".next-manager").click(function () {
  managersSwiper.slideNext();
}); 
