const previewScreen = () => {
  const $list = $('.js-preview-screen-list');
  const $image = $('.js-preview-screen-image');
  const $listItems = $list.find('.preview-list__item');
  const $imageItems = $image.find('.preview-image__item');
  const $listItemsInfo = $list.find('.preview-list__item-info');

  $listItemsInfo.on('click', ({ currentTarget }) => {
    const $currentItem = $(currentTarget);
    const $listItem = $currentItem.parent();
    // Get active image
    const activeName = $currentItem.parent().attr('data-name');
    const $activeImage = $image.find(`[data-image="${activeName}"]`);
    $imageItems.removeClass('is-active');
    $activeImage.addClass('is-active');
    $listItems.removeClass('is-active');
    $listItem.addClass('is-active');
  });
};

export default previewScreen;
