'use strict';
import fullPage from './modules/full-page';
import previewScreen from './modules/preview-screen';
import toggleAbout from './modules/toggle-about';

// On document ready
$(function () {
  fullPage();
  previewScreen();
  toggleAbout();
});

// On window load
$(window).on('load', function () { });
