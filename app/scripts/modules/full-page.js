const fullPage = () => {
  const scrollBar = SimpleBar.instances.get($('.js-preview-screen-scroll')[0]).getScrollElement();
  const $psWrap = $('.js-preview-screen-wrap');
  const $psItems = $('.js-preview-screen-item');
  const $psFirstItem = $psItems.eq(0);

  new fullpage('.portfolio', {
    sectionSelector: '.js-portfolio-screen',
    normalScrollElements: '.js-preview-screen',
    afterLoad: function (origin, destination, direction) {
      // Add or remove 1px to (from) scrollBar. It helps to trigger scrollBar's 'scroll' event.
      if (destination.index === 1 && direction === 'down') {
        scrollBar.scrollTop = 1;
      }
      if (destination.index === 1 && direction === 'up') {
        const psWrapHeight = $psWrap.height();
        const psFirstItemHeight = $psFirstItem.height();
        scrollBar.scrollTop = psWrapHeight - psFirstItemHeight - 1;
      }
    },
  });
};

export default fullPage;
