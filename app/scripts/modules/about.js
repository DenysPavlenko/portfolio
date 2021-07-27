const about = () => {
  const $about = $('.about');
  const $headerMenuLinks = $('.js-header-menu-links');
  const $headerMenuLink = $('.js-header-menu-link');
  const $aboutLinks = $('.js-about-links');
  const $aboutText = $('.js-about-text');
  let isOpen = false;
  let inTransition;

  const handleAnimation = () => {
    inTransition = false;
    if (isOpen) {
      $aboutLinks.addClass('fadeInDown');
      $aboutText.addClass('fadeInDown');
    } else {
      $aboutLinks.removeClass('fadeInDown');
      $aboutText.removeClass('fadeInDown');
    }
  };

  $headerMenuLink.on('click', () => {
    if (inTransition) return;
    inTransition = true;

    $about.toggleClass('is-active');
    $headerMenuLinks.toggleClass('is-active');
    $about.off('transitionend', handleAnimation);

    // Lock/unlock fullpage scroll
    if ($about.hasClass('is-active')) {
      $.fn.fullpage.setAllowScrolling(false);
      isOpen = true;
    } else {
      $.fn.fullpage.setAllowScrolling(true);
      isOpen = false;
    }

    $about.on('transitionend', handleAnimation);
  });
};

export default about;
