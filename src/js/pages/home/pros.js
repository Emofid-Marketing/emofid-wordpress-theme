import $ from 'jquery';

$(document).ready(function () {

    var i = 1;
    var items = $(`.pros-wrapper > .item`).length;

    if (!$('.pros-wrapper > .item').length) return;

    setInterval(function () {

        var j = (i % items) + 1;

        $(`.pros-wrapper > .item`).removeClass("active");
        $(`.pros-wrapper > .item:nth-child(${j})`).addClass("active");

        i++;

    }, window.EMOFID.home_pros_delay);

});