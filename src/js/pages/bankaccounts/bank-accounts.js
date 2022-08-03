const clipbordBtn = document.querySelectorAll('.clipbord-btn');

clipbordBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    var data = this.getAttribute("clipboard-data");
    var input = document.body.appendChild(document.createElement("input"));
    input.value = data;
    input.focus();
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input);
  });
});