import Swiper from 'swiper';
import $ from 'jquery';

var managersSwiper = new Swiper(".managers", {
  slidesPerView: 5,
  spaceBetween: 25,
  scrollbar: {
    el: '.manager-scrollbar',
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

/*
managersSwiper.on('reachBeginning', function(){
    $(".managers").addClass("no-before");
});
*/

managersSwiper.on('reachEnd', function () {
  $(".managers").addClass("no-after");
});

$(".next-manager").click(function () {
  managersSwiper.slideNext();
}); 
