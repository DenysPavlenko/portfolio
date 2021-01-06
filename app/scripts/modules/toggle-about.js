const toggleAbout = () => {
  const $about = $('.about');
  const $aboutLink = $('.header__menu-link');
  const $showLink = $('.header__menu [data-action="show"]');
  const $hideLink = $('.header__menu [data-action="hide"]');

  $aboutLink.on('click', () => {
    $about.toggleClass('is-active');

    if ($about.hasClass('is-active')) {
      $.fn.fullpage.setAllowScrolling(false);
      $showLink.fadeOut(100, () => {
        $hideLink.fadeIn();
      });
    } else {
      $.fn.fullpage.setAllowScrolling(true);
      $hideLink.fadeOut(100, () => {
        $showLink.fadeIn();
      });
    }

  });
};

export default toggleAbout;
