var tabs = document.querySelectorAll('[data-tab-type]');

tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    var tabType = this.getAttribute("data-tab-type");
    var tabId = this.getAttribute("data-tab-id");

    //activate tab item
    var thisTypeTabs = document.querySelectorAll(`[data-tab-type="${tabType}"]`);
    thisTypeTabs.forEach((thisTab) => {
      thisTab.classList.remove('active');
    });
    document.querySelector(`[data-tab-type="${tabType}"][data-tab-id="${tabId}"]`).classList.add('active');

    // display tab content
    var thisTypeContents = document.querySelectorAll(`[data-content-type="${tabType}"]`);
    thisTypeContents.forEach((thisContent) => {
      thisContent.style.display = "none";
    });

    var activeContents = document.querySelectorAll(`[data-content-type="${tabType}"][data-content-id="${tabId}"]`);
    activeContents.forEach((activeContent) => {
      activeContent.style.display = "block";
    });

  });

  // default active tab
  var firstTabs = document.querySelectorAll(`[data-tab-type]:first-child`);
  firstTabs.forEach((firstTab) => {
    firstTab.classList.add('active');
  });

  var activeContentsFirstChilds = document.querySelectorAll(`[data-content-type]:first-child`);
  activeContentsFirstChilds.forEach((activeContentsFirstChild) => {
    activeContentsFirstChild.style.display = "block";
  });
});
