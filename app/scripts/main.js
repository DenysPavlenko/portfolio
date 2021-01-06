'use strict';
import fullPage from './modules/full-page';
import previewScreen from './modules/preview-screen';

// On document ready
$(function () {
  fullPage();
  previewScreen();
});

// On window load
$(window).on('load', function () { });
