var content = document.getElementById("content");
var button = document.querySelector("[data-module-id='second-menu-button']");
var secondMenu = document.querySelector(".StickyHeader");
var headerHeight = document.getElementById("header").offsetHeight;


button.addEventListener("click", function () {
  content.classList.toggle("overaly");
  secondMenu.classList.toggle("active");
});

window.addEventListener('scroll', function () {
  if (window.pageYOffset > headerHeight) {
    secondMenu.classList.add("sticked");
  } else {
    secondMenu.classList.remove("sticked");
  }
});
