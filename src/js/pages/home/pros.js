function prosSlider() {

  var activeIndex = 1;
  var items = document.querySelectorAll('.pros-wrapper > .item');
  var itemsCount = items.length;

  if (!itemsCount) return;

  function setAutoInterval() {
    return setInterval(function () {

      var j = (activeIndex % itemsCount) + 1;

      items.forEach((item) => {
        item.classList.remove('active');
      });

      document.querySelector(`.pros-wrapper > .item:nth-child(${j})`).classList.add('active');

      activeIndex++;

    }, window.EMOFID.home_pros_delay);
  }

  var autoInterval = setAutoInterval();


  // click events
  items.forEach((item, index) => {
    item.addEventListener('click', function () {
      clearInterval(autoInterval);
      activeIndex = index;
      items.forEach((thisItem) => {
        thisItem.classList.remove('active');
      });
      items[index].classList.add('active');
      autoInterval = setAutoInterval();
    });
  });

}

prosSlider();
