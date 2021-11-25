const menuBtn = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu');
const closeBtn = document.querySelector('.header__close-btn');

menuBtn.addEventListener('click', () => menu.classList.add('header__menu_is-active'));
closeBtn.addEventListener('click', () => menu.classList.remove('header__menu_is-active'));
