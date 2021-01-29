'use strict';

var fullPage = function fullPage() {
  var $spaceBackground = $('.js-space-background');
  new fullpage('.portfolio', {
    sectionSelector: '.js-portfolio-screen',
    scrollOverflow: true,
    onLeave: function onLeave(origin, destination) {
      if (destination.index === 1) {
        $spaceBackground.css('opacity', 1);
      } else if (destination.index === 0 || destination.index === 2) {
        $spaceBackground.css('opacity', 0);
      }
    }
  });
};

var previewScreen = function previewScreen() {
  var $ps = $('.js-preview-screen');
  var $psItems = $('.js-preview-screen-item');
  var $psFirstItem = $psItems.eq(0);
  var $window = $(window);
  var psFirstItemHeight, windowHeight;

  var handlePadding = function handlePadding() {
    // Get window height and first item height
    windowHeight = $window.height();
    psFirstItemHeight = $psFirstItem.height(); // Calc and set padding-top and padding-bottom

    var py = (windowHeight - psFirstItemHeight) / 2;
    $ps.css('padding', "".concat(py, "px 0"));
  }; // Set padding to $ps.


  handlePadding(); // Set padding on resize to $ps with a small dealy

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

var spaceBackground = function spaceBackground() {
  var spaceBackground = $('.js-space-background').get(0);
  new Parallax(spaceBackground);
};

$(function () {
  fullPage();
  previewScreen();
  toggleAbout();
  spaceBackground();
}); // On window load

$(window).on('load', function () {});
