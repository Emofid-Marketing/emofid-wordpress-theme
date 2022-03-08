var content = document.getElementById("content");
var button = document.querySelector("[data-module-id='second-menu-button']");
var secondMenu = document.querySelector(".StickyHeader");
var headerHeight = document.getElementById("header").offsetHeight;
var secondMenuItem = document.querySelectorAll(".StickyHeader .wrapper .navigation a");

button.addEventListener("click", function () {
  content.classList.toggle("overaly");
  secondMenu.classList.toggle("active");
});

for (var i = 0; i < secondMenuItem.length; i++) {
  secondMenuItem[i].addEventListener('click', function() {
    content.classList.remove("overaly");
    secondMenu.classList.remove("active");
  });
}

window.addEventListener('scroll', function () {
  if (window.pageYOffset > headerHeight) {
    secondMenu.classList.add("sticked");
  } else {
    secondMenu.classList.remove("sticked");
  }
});
