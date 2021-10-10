import $ from 'jquery';

$(document).ready(function () {
  $("#play-investment-video-intro-btn").click(function () {
    var video = $('#investment-video-intro');
    var videoState = video.get(0).paused;

    if (videoState) {
      video.trigger('play');
    } else {
      video.trigger('pause');
    }

  });
});
