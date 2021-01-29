const previewScreen = () => {
  const $ps = $('.js-preview-screen');
  const $psItems = $('.js-preview-screen-item');
  const $psFirstItem = $psItems.eq(0);
  const $window = $(window);
  let psFirstItemHeight, windowHeight;

  const handlePadding = () => {
    // Get window height and first item height
    windowHeight = $window.height();
    psFirstItemHeight = $psFirstItem.height();
    // Calc and set padding-top and padding-bottom
    let py = (windowHeight - psFirstItemHeight) / 2;
    $ps.css('padding', `${py}px 0`);
  };

  // Set padding to $ps.
  handlePadding();
  // Set padding on resize to $ps with a small dealy
  let timeOut;
  $window.on('resize', () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      handlePadding();
    }, 500);
  });
};

export default previewScreen;
