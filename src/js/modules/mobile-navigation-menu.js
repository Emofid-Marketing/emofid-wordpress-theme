import $ from 'jquery';

$(document).ready(function () {

  $('.mobile-nav-btn').click(function () {
    $('.Navigation').toggleClass('active');
  });

  $('.Navigation > ul > li').click(function (e) {
    $(this).toggleClass('active');
  });

  $('.Navigation > ul > li > a').click(function (e) {
    e.stopPropagation();
  });

});
