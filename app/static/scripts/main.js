'use strict';

var fullPage = function fullPage() {
  $('.portfolio').fullpage({
    sectionSelector: $('.portfolio__screen')
  });
};

$(function () {
  fullPage();
}); // On window load

$(window).on('load', function () {});
