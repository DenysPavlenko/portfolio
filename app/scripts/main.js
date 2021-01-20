'use strict';
import simpleBar from './modules/simple-bar';
import fullPage from './modules/full-page';
import previewScreen from './modules/preview-screen';
import toggleAbout from './modules/toggle-about';

// On document ready
$(function () {
  simpleBar();
  fullPage();
  previewScreen();
  toggleAbout();
});

// On window load
$(window).on('load', function () { });
