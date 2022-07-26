function Toast(options) {

  var { text, theme } = options;

  var toast = document.createElement('div');
  toast.classList.add("Toast");
  if (theme) toast.classList.add("theme-" + theme);
  toast.innerText = text;

  var closeButton = document.createElement('div');
  closeButton.classList.add('close');
  closeButton.addEventListener('click', close);

  toast.appendChild(closeButton);


  function close() {
    toast.style.transform = 'translateY(calc(100% + 10px))';
    toast.style.opacity = '0';
    setTimeout(function () {
      toast.remove();
    }, 100);
  }


  // auto close
  setTimeout(close, 5000);

  document.body.appendChild(toast);
}

export default Toast;
