// Выпадающее меню

const toogleButtonElement = document.querySelector('.header__toggle');
const menuElement = document.querySelector('.header__nav');

toogleButtonElement.addEventListener('click', function () {
  toogleButtonElement.classList.toggle('header__toggle--closed');
  menuElement.classList.toggle('header__nav--open');

  if (menuElement.classList.contains('header__nav--open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

