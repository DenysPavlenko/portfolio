const fullPage = () => {
  const scrollBar = SimpleBar.instances.get($('.js-preview-screen-scroll')[0]).getScrollElement();
  const $psWrap = $('.js-preview-screen-wrap');
  const $psItems = $('.js-preview-screen-item');
  const $psFirstItem = $psItems.eq(0);
  const $spaceBackground = $('.js-space-background');

  new fullpage('.portfolio', {
    sectionSelector: '.js-portfolio-screen',
    normalScrollElements: '.js-preview-screen',
    onLeave: function (origin, destination) {
      if (destination.index === 1) {
        $spaceBackground.css('opacity', 1)
      } else if (destination.index === 0 || destination.index === 2) {
        $spaceBackground.css('opacity', 0)
      }
    },
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
