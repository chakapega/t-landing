import '../scss/style.scss';

const headerHamburgerMenuButton = document.querySelector('.header__hamburger-menu-button');
const headerHamburgerMenuIcon = document.querySelector('.header__hamburger-menu-icon');
const headerHamburgerMenuCloseIcon = document.querySelector('.header__hamburger-menu-close-icon');
const headerMobileMenuWrapper = document.querySelector('.header__mobile-menu-wrapper');
const main = document.querySelector('.main');

headerHamburgerMenuButton.addEventListener('click', () => {
  headerHamburgerMenuIcon.classList.toggle('header__hamburger-menu-icon_hidden');
  headerHamburgerMenuCloseIcon.classList.toggle('header__hamburger-menu-close-icon_hidden');
  headerMobileMenuWrapper.classList.toggle('header__mobile-menu-wrapper_hidden');
  main.classList.toggle('main_hidden');
})