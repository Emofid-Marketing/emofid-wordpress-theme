var collapsePanelHeads = document.querySelectorAll(".collapse-head");

collapsePanelHeads.forEach(function (item) {
  item.addEventListener("click", function () {
    this.closest(".collapse-item").classList.toggle("active");
  });
});
