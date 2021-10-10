function horizontalScroller(selector) {
  const slider = document.querySelector(selector);

  if (!slider) return;

  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    slider.classList.add('active');
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  let stopDragging = function (event) {
    slider.classList.remove('active');
    mouseDown = false;
  };

  slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  });

  // Add the event listeners
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
}

export default horizontalScroller;
