import $ from 'jquery';

$(document).ready(function () {

  var allItemsCount = $("#investment-trust-list > li").length;
  var activeIndex = 1;

  var sliderInrterval = setInterval(function () {
    $(`#investment-trust-list > li:nth-child(${activeIndex})`).addClass("active");
    if (++activeIndex === allItemsCount + 1) {
      window.clearInterval(sliderInrterval);
    }
  }, 3000);

});
