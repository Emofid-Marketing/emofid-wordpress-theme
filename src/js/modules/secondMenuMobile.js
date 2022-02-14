var content = document.getElementById("content");
var button = document.querySelector("[data-module-id='second-menu-button']");
var secondMenu = document.querySelector(".StickyHeader");

button.addEventListener("click", function () {
  content.classList.toggle("overaly");
  secondMenu.classList.toggle("active");
});

