'use strict';

var fullPage = function fullPage() {
  $('.portfolio').fullpage({
    sectionSelector: $('.portfolio__screen'),
    scrollOverflow: true
  });
};

var toggleAbout = function toggleAbout() {
  var $about = $('.about');
  var $aboutLinks = $('.header__menu-links');
  var $aboutLink = $('.header__menu-link');
  $aboutLink.on('click', function () {
    $about.toggleClass('is-active');
    $aboutLinks.toggleClass('is-active');

    if ($about.hasClass('is-active')) {
      $.fn.fullpage.setAllowScrolling(false);
    } else {
      $.fn.fullpage.setAllowScrolling(true);
    }
  });
};

$(function () {
  fullPage();
  toggleAbout();
}); // On window load

$(window).on('load', function () {});
