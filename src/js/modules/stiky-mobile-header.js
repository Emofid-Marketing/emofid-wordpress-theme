window.onscroll = function () {
  stickyHeader()
};

var header = document.getElementById("header");
var sticky = 68;
function stickyHeader() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticked");
  } else {
    header.classList.remove("sticked");
  }
}
