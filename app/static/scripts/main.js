'use strict';

var fullPage = function fullPage() {
  $('.portfolio').fullpage({
    sectionSelector: $('.portfolio__screen')
  });
};

var previewScreen = function previewScreen() {
  var $list = $('.js-preview-screen-list');
  var $image = $('.js-preview-screen-image');
  var $listItems = $list.find('.preview-list__item');
  var $imageItems = $image.find('.preview-image__item');
  var $listItemsInfo = $list.find('.preview-list__item-info');
  $listItemsInfo.on('click', function (_ref) {
    var currentTarget = _ref.currentTarget;
    var $currentItem = $(currentTarget);
    var $listItem = $currentItem.parent(); // Get active image

    var activeName = $currentItem.parent().attr('data-name');
    var $activeImage = $image.find("[data-image=\"".concat(activeName, "\"]"));
    $imageItems.removeClass('is-active');
    $activeImage.addClass('is-active');
    $listItems.removeClass('is-active');
    $listItem.addClass('is-active');
  });
};

$(function () {
  fullPage();
  previewScreen();
}); // On window load

$(window).on('load', function () {});
