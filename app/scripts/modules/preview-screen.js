const previewScreen = () => {
  const $ps = $('.js-preview-screen');
  const $psItems = $('.js-preview-screen-item');
  const $psFirstItem = $psItems.eq(0);
  const $window = $(window);
  const psFirstItemImage = $psFirstItem.find('img')[0];
  let psFirstItemHeight, windowHeight;

  const handlePadding = () => {
    // Get window height and first item height
    windowHeight = $window.height();
    psFirstItemHeight = $psFirstItem.height();
    // Calc and set padding-top and padding-bottom
    let py = (windowHeight - psFirstItemHeight) / 2;
    $ps.css('padding', `${py}px 0`);
  };

  // Set padding to $ps when the first image has loaded.
  psFirstItemImage.onload = () => {
    handlePadding();
  };
  psFirstItemImage.src = 'images/previews/celia.png';

  // Set padding to $ps on resize
  $window.on('resize', handlePadding);
};

export default previewScreen;
