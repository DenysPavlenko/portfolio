'use strict';

var fullPage = function fullPage() {
  var scrollBar = SimpleBar.instances.get($('.js-preview-screen-scroll')[0]).getScrollElement();
  var $psWrap = $('.js-preview-screen-wrap');
  var $psItems = $('.js-preview-screen-item');
  var $psFirstItem = $psItems.eq(0);
  var $spaceBackground = $('.js-space-background');
  new fullpage('.portfolio', {
    sectionSelector: '.js-portfolio-screen',
    normalScrollElements: '.js-preview-screen',
    onLeave: function onLeave(origin, destination) {
      if (destination.index === 1) {
        $spaceBackground.css('opacity', 1);
      } else if (destination.index === 0 || destination.index === 2) {
        $spaceBackground.css('opacity', 0);
      }
    },
    afterLoad: function afterLoad(origin, destination, direction) {
      // Add or remove 1px to (from) scrollBar. It helps to trigger scrollBar's 'scroll' event.
      if (destination.index === 1 && direction === 'down') {
        scrollBar.scrollTop = 1;
      }

      if (destination.index === 1 && direction === 'up') {
        var psWrapHeight = $psWrap.height();
        var psFirstItemHeight = $psFirstItem.height();
        scrollBar.scrollTop = psWrapHeight - psFirstItemHeight - 1;
      }
    }
  });
};

var previewScreen = function previewScreen() {
  var scrollBar = SimpleBar.instances.get($('.js-preview-screen-scroll')[0]).getScrollElement();
  var $psWrap = $('.js-preview-screen-wrap');
  var $psItems = $('.js-preview-screen-item');
  var $psFirstItem = $psItems.eq(0);
  var $window = $(window);
  var psFirstItemHeight, windowHeight; // Listen scrollBar scroll event

  $(scrollBar).on('scroll', function () {
    var psWrapTopOffset = Math.round($psWrap.offset().top);
    var psWrapHeight = $psWrap.height();
    var bottomLine = Math.round(psFirstItemHeight - psWrapHeight); // If scroll position >= 0 - move to the prev slide

    if (psWrapTopOffset >= 0) {
      fullpage_api.moveSectionUp();
    } // If scroll at the bottom - move to the next slide
    else if (psWrapTopOffset <= bottomLine) {
        fullpage_api.moveSectionDown();
      }
  });

  var handlePadding = function handlePadding() {
    // Get window height and first item height
    windowHeight = $window.height();
    psFirstItemHeight = $psFirstItem.height(); // Calc and set padding-top and padding-bottom

    var py = (windowHeight - psFirstItemHeight) / 2;
    $psWrap.css('padding', "".concat(py, "px 0"));
  }; // Set padding to $psWrap.


  handlePadding(); // Set padding on resize to $psWrap with a small dealy

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
