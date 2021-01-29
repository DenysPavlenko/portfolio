const fullPage = () => {
  const $spaceBackground = $('.js-space-background');

  new fullpage('.portfolio', {
    sectionSelector: '.js-portfolio-screen',
    scrollOverflow: true,
    onLeave: function (origin, destination) {
      if (destination.index === 1) {
        $spaceBackground.css('opacity', 1)
      } else if (destination.index === 0 || destination.index === 2) {
        $spaceBackground.css('opacity', 0)
      }
    },
  });
};

export default fullPage;
