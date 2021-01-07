const toggleAbout = () => {
  const $about = $('.about');
  const $aboutLinks = $('.header__menu-links');
  const $aboutLink = $('.header__menu-link');

  $aboutLink.on('click', () => {
    $about.toggleClass('is-active');
    $aboutLinks.toggleClass('is-active');
    if ($about.hasClass('is-active')) {
      $.fn.fullpage.setAllowScrolling(false);
    } else {
      $.fn.fullpage.setAllowScrolling(true);
    }
  });
};

export default toggleAbout;
