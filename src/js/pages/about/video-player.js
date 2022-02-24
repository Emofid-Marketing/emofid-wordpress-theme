var button = document.getElementById("play-about-video-btn");
var video = document.getElementById("about-video-intro");

button.addEventListener("click", function () {
  var videoState = video.paused;

  if (videoState) {
    video.play();
    button.classList.add("paused");
  } else {
    video.pause();
    button.classList.remove("paused");
  }
});
