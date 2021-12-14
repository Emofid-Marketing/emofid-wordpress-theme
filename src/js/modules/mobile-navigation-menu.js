import $ from 'jquery';

$(document).ready(function () {

  $('.mobile-nav-btn').click(function () {
    $('.Navigation').toggleClass('active');
    $('.nav-wrapper').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });

  $('.Navigation > ul > li').click(function (e) {
    console.log("actived");
    $(this).toggleClass('active');
  });

  $('.Navigation > ul > li > a').click(function (e) {
    e.stopPropagation();
  });

});
