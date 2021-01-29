'use strict';
import fullPage from './modules/full-page';
import previewScreen from './modules/preview-screen';
import toggleAbout from './modules/toggle-about';
import spaceBackground from './modules/space-background';

// On document ready
$(function () {
  fullPage();
  previewScreen();
  toggleAbout();
  spaceBackground();
});

// On window load
$(window).on('load', function () { });
