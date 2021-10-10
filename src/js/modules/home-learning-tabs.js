import $ from "jquery";

$(document).ready(function () {
    var tabButtons = $(".HomeLearning .tab-view .tabs button");
    tabButtons.click(function () {
        tabButtons.removeClass("active");
        $(this).addClass("active");

        var dateId = $(this).attr("data-date-id");

        var classes = $(".HomeLearning .tab-view .class-item");
        classes.removeClass("active");
        $(`.HomeLearning .tab-view .class-item[data-date-id="${dateId}"]`).addClass("active");
    });
});