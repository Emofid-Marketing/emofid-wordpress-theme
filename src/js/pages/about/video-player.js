var button = document.getElementById("play-about-video-btn");
var video = document.getElementById("about-video-intro");
var fullScreenBtn = document.getElementById("full-screen-btn");

button.addEventListener("click", function () {
  var videoState = video.paused;

  if (videoState) {
    video.play();
    button.classList.add("paused");
    fullScreenBtn.style.display = "block";
  } else {
    video.pause();
    button.classList.remove("paused");
    fullScreenBtn.style.display = "none";
  }
});

fullScreenBtn.addEventListener("click", function () {
  if (video.requestFullscreen) 
  video.requestFullscreen();
  else if (video.webkitRequestFullscreen) 
  video.webkitRequestFullscreen();
  else if (video.msRequestFullScreen) 
  video.msRequestFullScreen();
});