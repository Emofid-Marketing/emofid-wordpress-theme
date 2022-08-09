var collapsePanelHeads = document.querySelectorAll(".collapse-head");

collapsePanelHeads.forEach(function (item) {
  item.addEventListener("click", function () {
    this.closest(".collapse-item").classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
