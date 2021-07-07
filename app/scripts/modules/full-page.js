export default function () {
  const $spaceBackground = $('.js-space-background');
  const $homeScreenTitles = $('.js-home-screen-text');
  const $homeScreenImage = $('.js-home-screen-image');
  const $footerScreenLinks = $('.js-footer-screen-links');

  $('.js-portfolio').fullpage({
    sectionSelector: '.portfolio__screen',
    scrollOverflow: true,
    afterLoad: (origin, destination) => {
      if (destination === 1) {
        $homeScreenTitles.addClass('is-active');
        $homeScreenImage.addClass('is-active');
      }
      if (destination === 3) {
        $footerScreenLinks.addClass('is-active');
      }
    },
    onLeave: (origin, destination) => {
      if (destination === 2) {
        $spaceBackground.css('opacity', 1)
      } else if (destination === 1 || destination === 3) {
        $spaceBackground.css('opacity', 0)
      }
    },
  });
};
