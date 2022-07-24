var mobileNavButton = document.querySelector('.mobile-nav-btn');
var navigation = document.querySelector('.Navigation');
var navWrapper = document.querySelector('.nav-wrapper');
var navigationItems = document.querySelectorAll('.Navigation > ul > li');
var navigationItemsLinks = document.querySelectorAll('.Navigation > ul > li > a');

mobileNavButton.addEventListener('click', function () {
  navigation.classList.toggle('active');
  navWrapper.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener('click', function () {
    navigationItem.classList.toggle('active');
  });
});

navigationItemsLinks.forEach((navigationItemsLink) => {
  navigationItemsLink.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
