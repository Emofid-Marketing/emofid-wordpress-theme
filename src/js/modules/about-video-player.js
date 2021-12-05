import $ from 'jquery';

$(document).ready(function () {
  $("#play-about-video-intro-btn").click(function () {
    var video = $('#about-video-intro');
    var videoState = video.get(0).paused;

    if (videoState) {
      video.trigger('play');
    } else {
      video.trigger('pause');
    }

  });
});
