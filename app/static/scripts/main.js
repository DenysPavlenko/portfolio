'use strict';

var fullPage = function fullPage() {
  var $spaceBackground = $('.js-space-background');
  var $homeScreenTitles = $('.js-home-screen-text');
  var $homeScreenImage = $('.js-home-screen-image');
  var $footerScreenLinks = $('.js-footer-screen-links');
  new fullpage('.portfolio', {
    sectionSelector: '.js-portfolio-screen',
    scrollOverflow: true,
    afterLoad: function afterLoad(origin, destination) {
      if (destination.index === 0) {
        $homeScreenTitles.addClass('is-active');
        $homeScreenImage.addClass('is-active');
      }

      if (destination.index === 2) {
        $footerScreenLinks.addClass('is-active');
      }
    },
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

var about = function about() {
  var $about = $('.about');
  var $headerMenuLinks = $('.js-header-menu-links');
  var $headerMenuLink = $('.js-header-menu-link');
  var $aboutLinks = $('.js-about-links');
  var $aboutText = $('.js-about-text');
  var isOpen = false;
  var inTransition;

  var handleAnimation = function handleAnimation() {
    inTransition = false;

    if (isOpen) {
      $aboutLinks.addClass('fadeInDown');
      $aboutText.addClass('fadeInDown');
    } else {
      $aboutLinks.removeClass('fadeInDown');
      $aboutText.removeClass('fadeInDown');
    }
  };

  $headerMenuLink.on('click', function () {
    if (inTransition) return;
    inTransition = true;
    $about.toggleClass('is-active');
    $headerMenuLinks.toggleClass('is-active');
    $about.off('transitionend', handleAnimation); // Lock/unlock fullpage scroll

    if ($about.hasClass('is-active')) {
      fullpage_api.setAllowScrolling(false);
      isOpen = true;
    } else {
      fullpage_api.setAllowScrolling(true);
      isOpen = false;
    }

    $about.on('transitionend', handleAnimation);
  });
};

var spaceBackground = function spaceBackground() {
  var spaceBackground = $('.js-space-background').get(0);
  new Parallax(spaceBackground);
};

$(function () {
  fullPage();
  previewScreen();
  about();
  spaceBackground();
}); // On window load

$(window).on('load', function () {});
