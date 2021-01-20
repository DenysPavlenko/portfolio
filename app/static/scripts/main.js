'use strict';

var fullPage = function fullPage() {
  $('.portfolio').fullpage({
    sectionSelector: $('.portfolio__screen'),
    scrollOverflow: true
  });
};

var previewScreen = function previewScreen() {
  var $previewScreen = $('.js-preview-screen');
  var $items = $('.js-preview-screen-item');
  var $firstItem = $items.eq(0);
  var $window = $(window);

  var handlePadding = function handlePadding() {
    // Get window height and first item height
    var windowHeight = $window.height();
    var firstItemHeight = $firstItem.height(); // Calc and set padding-top and padding-bottom

    var py = (windowHeight - firstItemHeight) / 2;
    $previewScreen.css('padding', "".concat(py, "px 0"));
  }; // Set padding to $previewScreen.


  handlePadding(); // Set padding on resize to $previewScreen with a small dealy

  var timeOut;
  $window.on('resize', function () {
    clearTimeout(timeOut);
    timeOut = setTimeout(function () {
      handlePadding();
    }, 500);
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
  previewScreen();
  toggleAbout();
}); // On window load

$(window).on('load', function () {});
