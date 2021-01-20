const previewScreen = () => {
  const scrollBar = SimpleBar.instances.get($('.js-preview-screen-scroll')[0]).getScrollElement();
  const $psWrap = $('.js-preview-screen-wrap');
  const $psItems = $('.js-preview-screen-item');
  const $psFirstItem = $psItems.eq(0);
  const $window = $(window);
  let psFirstItemHeight, windowHeight;

  // Listen scrollBar scroll event
  $(scrollBar).on('scroll', () => {
    const psWrapTopOffset = Math.round($psWrap.offset().top);
    const psWrapHeight = $psWrap.height();
    const bottomLine = Math.round(psFirstItemHeight - psWrapHeight);
    // If scroll position >= 0 - move to the prev slide
    if (psWrapTopOffset >= 0) {
      fullpage_api.moveSectionUp();
    }
    // If scroll at the bottom - move to the next slide
    else if (psWrapTopOffset <= bottomLine) {
      fullpage_api.moveSectionDown();
    }
  });

  const handlePadding = () => {
    // Get window height and first item height
    windowHeight = $window.height();
    psFirstItemHeight = $psFirstItem.height();
    // Calc and set padding-top and padding-bottom
    let py = (windowHeight - psFirstItemHeight) / 2;
    $psWrap.css('padding', `${py}px 0`);
  };

  // Set padding to $psWrap.
  handlePadding();
  // Set padding on resize to $psWrap with a small dealy
  let timeOut;
  $window.on('resize', () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      handlePadding();
    }, 500);
  });
};

export default previewScreen;
