const fullPage = () => {
  const $spaceBackground = $('.js-space-background');
  const $homeScreenTitles = $('.js-home-screen-text');
  const $homeScreenImage = $('.js-home-screen-image');

  new fullpage('.portfolio', {
    sectionSelector: '.js-portfolio-screen',
    scrollOverflow: true,
    afterLoad: (origin, destination) => {
      if (destination.index === 0) {
        $homeScreenTitles.addClass('is-active');
        $homeScreenImage.addClass('is-active');
      }
    },
    onLeave: (origin, destination) => {
      if (destination.index === 1) {
        $spaceBackground.css('opacity', 1)
      } else if (destination.index === 0 || destination.index === 2) {
        $spaceBackground.css('opacity', 0)
      }
    },
  });
};

export default fullPage;
