import $ from 'jquery';

$(document).ready(function () {

    $("[data-tab-type]").click(function () {
        var tabType = $(this).attr("data-tab-type");
        var tabId = $(this).attr("data-tab-id");

        //activate tab item
        $(`[data-tab-type="${tabType}"]`).removeClass("active");
        $(`[data-tab-type="${tabType}"][data-tab-id="${tabId}"]`).addClass("active");


        // display tab content
        $(`[data-content-type="${tabType}"]`).hide();
        $(`[data-content-type="${tabType}"][data-content-id="${tabId}"]`).show();
    });


    // default active tab
    $(`[data-tab-type]:first-child`).addClass("active");
    $(`[data-content-type]:first-child`).show();
});