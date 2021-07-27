'use strict';

var preloader = function preloader() {
  $('.js-preloader').fadeOut();
};

function fullPage () {
  var $spaceBackground = $('.js-space-background');
  var $homeScreenTitles = $('.js-home-screen-text');
  var $homeScreenImage = $('.js-home-screen-image');
  var $footerScreenLinks = $('.js-footer-screen-links');
  $('.js-portfolio').fullpage({
    sectionSelector: '.portfolio__screen',
    scrollOverflow: true,
    afterLoad: function afterLoad(origin, destination) {
      if (destination === 1) {
        $homeScreenTitles.addClass('is-active');
        $homeScreenImage.addClass('is-active');
      }

      if (destination === 3) {
        $footerScreenLinks.addClass('is-active');
      }
    },
    onLeave: function onLeave(origin, destination) {
      if (destination === 2) {
        $spaceBackground.css('opacity', 1);
      } else if (destination === 1 || destination === 3) {
        $spaceBackground.css('opacity', 0);
      }
    }
  });
}

var previewScreen = function previewScreen() {
  var $ps = $('.js-preview-screen');
  var $psItems = $('.js-preview-screen-item');
  var $psFirstItem = $psItems.eq(0);
  var $window = $(window);
  var psFirstItemImage = $psFirstItem.find('img')[0];
  var psFirstItemHeight, windowHeight;

  var handlePadding = function handlePadding() {
    // Get window height and first item height
    windowHeight = $window.height();
    psFirstItemHeight = $psFirstItem.height(); // Calc and set padding-top and padding-bottom

    var py = (windowHeight - psFirstItemHeight) / 2;
    $ps.css('padding', "".concat(py, "px 0"));
  }; // Set padding to $ps when the first image has loaded.


  psFirstItemImage.onload = function () {
    handlePadding();
  };

  psFirstItemImage.src = 'images/previews/celia.png'; // Set padding to $ps on resize

  $window.on('resize', handlePadding);
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
      $.fn.fullpage.setAllowScrolling(false);
      isOpen = true;
    } else {
      $.fn.fullpage.setAllowScrolling(true);
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

$(window).on('load', function () {
  preloader();
});
