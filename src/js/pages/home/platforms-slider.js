import $ from "jquery";

function getImagesOuterWidth() {
  var elWidth = $(".HomePlatforms .easytrader .screenshots-wrapper .inner img").width();
  return elWidth;
}

$(document).ready(function () {

  var innerWrapper = $(".HomePlatforms .easytrader .screenshots-wrapper .inner");

  var index = 0;
  var imgIndex = 0;
  var imagesCount = 5;

  getImagesOuterWidth();

  setInterval(function () {
    innerWrapper.css("margin-right", `-${index}px`);
    index++;

    if (index % (getImagesOuterWidth() + 48) === 0) {
      // $(".HomePlatforms .easytrader .screenshots-wrapper .inner img:nth-child(1)").remove();
      let newImage = document.createElement("img");
      let newImageIndex = (imgIndex % imagesCount) + 1;
      newImage.src = `${window.EMOFID.theme_url}/assets/images/trader-shots/shot-${newImageIndex}.jpg`;
      innerWrapper.append(newImage);

      imgIndex++;
    }

  }, window.EMOFID.home_platform_shots_delay);
});
