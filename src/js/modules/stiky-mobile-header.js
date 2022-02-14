var header = document.getElementById("header");
var sticky = 150;
var lastScrollTop = 0;

function stickyHeader() {

  if (window.pageYOffset >= sticky) {

    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {

      if (header.classList.contains("sticked")) {
        header.classList.add("unsticked");
        header.classList.remove("sticked");
      }

    } else {
      header.classList.remove("unsticked");
      header.classList.add("sticked");
    }

    lastScrollTop = st <= 0 ? 0 : st;

  } else {
    header.classList.remove("sticked");
  }


}

if (!window.EMOFID.sticky_header) {
  window.onscroll = function () {
    stickyHeader()
  };
}

