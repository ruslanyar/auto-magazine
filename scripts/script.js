const header = document.querySelector('.header');
const menuBtn = header.querySelector('.header__menu-button');
const menu = header.querySelector('.header__menu');
const closeBtn = header.querySelector('.header__close-btn');

menuBtn.addEventListener('click', () => menu.classList.add('header__menu_is-active'));
closeBtn.addEventListener('click', () => menu.classList.remove('header__menu_is-active'));

let prevScroll = window.scrollY;
let currentScroll;

window.addEventListener('scroll', () => {
  currentScroll = window.scrollY;

  const headerHidden = header.classList.contains('header_hidden');

  if (currentScroll > prevScroll && !headerHidden) {
    header.classList.add('header_hidden');
  } else if (currentScroll < prevScroll && headerHidden) {
    header.classList.remove('header_hidden');
  }

  prevScroll = currentScroll;
});
