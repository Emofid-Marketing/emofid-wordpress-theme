const nextButton = document.querySelector("#next-scroller");
const prevButton = document.querySelector("#prev-scroller");
const scroller = document.querySelector(".scroller");
const scrollerInner = document.querySelector(".scroller .inner");
const item = document.querySelector(".scroller .inner .item");
const totalWidth = scrollerInner.offsetWidth;
const itemWidth = item.offsetWidth;
const itemsCount = scrollerInner.childElementCount;
const margin = 32;

const scrollValue = (itemWidth + margin);

nextButton.addEventListener('click', function () {
  scroller.scrollBy(scrollValue, 0);
});

prevButton.addEventListener('click', function () {
  scroller.scrollBy(-scrollValue, 0);
});
