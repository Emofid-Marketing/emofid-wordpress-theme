import $ from 'jquery';
import horizontalScroller from '../modules/global/horizontalScroller';


horizontalScroller(".scroller");


$(".fund-extend-btn").click(function () {
  $(this).closest(".item").addClass("collapsed");
})
