const previewScreen = () => {
  const $previewScreen = $('.js-preview-screen');
  const $items = $('.js-preview-screen-item');
  const $firstItem = $items.eq(0);
  const $window = $(window);

  const handlePadding = () => {
    // Get window height and first item height
    const windowHeight = $window.height();
    const firstItemHeight = $firstItem.height();
    // Calc and set padding-top and padding-bottom
    let py = (windowHeight - firstItemHeight) / 2;
    $previewScreen.css('padding', `${py}px 0`);
  };

  // Set padding to $previewScreen.
  handlePadding();
  // Set padding on resize to $previewScreen with a small dealy
  let timeOut;
  $window.on('resize', () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      handlePadding();
    }, 500);
  });
};

export default previewScreen;
