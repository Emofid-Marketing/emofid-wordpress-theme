import $ from "jquery";

$(document).ready(function () {
    var tabButtons = $(".HomeOtherPlatforms .tab-view .tabs button");
    tabButtons.click(function () {
        tabButtons.removeClass("active");
        $(this).addClass("active");
        var activeId = $(this).attr("data-tab-id");

        var tabViews = $(".HomeOtherPlatforms .tab-view .content .tab-view-item");
        tabViews.removeClass("active");
        $(`.HomeOtherPlatforms .tab-view .content .tab-view-item[data-tab-id="${activeId}"]`).addClass("active");
    });
});