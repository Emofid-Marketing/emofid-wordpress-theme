import $ from 'jquery';

$(document).ready(function () {
    $('#calculator-switcher span:first-child').click(function () {
        $('#calculator-switcher').removeClass('changed');
    });
    $('#calculator-switcher span:last-child').click(function () {
        $('#calculator-switcher').addClass('changed');
    });
});