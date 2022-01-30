import Pjax from "pjax";
import topbar from 'topbar';

var pjax = new Pjax({
  elements: "a:not([target='_blank'])",
  selectors: ["body"],
  cacheBust: false,
});

document.addEventListener('pjax:send', topbar.show);
document.addEventListener('pjax:complete', function () {
  topbar.hide();
});
