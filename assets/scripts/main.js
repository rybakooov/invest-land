$(document).ready(function(){
  //! MOBILE FIX 100VH

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  //ACCORDEON

  $(document).on('click', '.accordeon_item', function() {
    $(this).find('.accordeon_item__body').slideToggle()
    $(this).find('.accordeon_item__img').toggleClass('active')
  })

  //HEADER-MENU

  let isMenuOpen = false

  function openMenu() {
    $('.header-wrap__burger').addClass('open')
    $('.header-menu').addClass('active')
    $('.header__overlay').addClass('active')
    $('.header-wrap').addClass('active')
    isMenuOpen = true
    compensateBody()
  }

  function closeMenu() {
    $('.header-wrap__burger').removeClass('open')
    $('.header-menu').removeClass('active')
    $('.header__overlay').removeClass('active')
    isMenuOpen = false
    unCompensateBody()
  }

  $(document).on('click', '.header-wrap__burger', function() {
    isMenuOpen ? closeMenu() : openMenu() ;
  })

  $(document).on('click', '.header__overlay', function() {
    closeMenu()
  })
  
  $(window).on('resize', function() {
    closeMenu()
  })

});