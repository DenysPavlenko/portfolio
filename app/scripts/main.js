'use strict';
import preloader from './modules/preloader';
import fullPage from './modules/full-page';
import previewScreen from './modules/preview-screen';
import about from './modules/about';
import spaceBackground from './modules/space-background';

// On document ready
$(function () {
  fullPage();
  previewScreen();
  about();
  spaceBackground();
});

// On window load
$(window).on('load', function () {
  preloader();
});
