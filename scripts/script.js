const header = document.querySelector('.header');
const menuBtn = header.querySelector('.header__menu-button');
const menu = header.querySelector('.header__menu');
const closeBtn = header.querySelector('.header__close-btn');
const paginationBtns = document.querySelectorAll('.press__pagination-item');
const articles = document.querySelectorAll('.press__article');
const galleryBtnLeft = document.querySelector('.gallery__button_type_left');
const galleryBtnRight = document.querySelector('.gallery__button_type_right');
const subscribeForm = document.querySelector('.form');

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

paginationBtns.forEach((item, index) => {
  item.addEventListener('click', (evt) => {
    const activeBtn = document.querySelector('.press__pagination-item_is-active');
    activeBtn.classList.remove('press__pagination-item_is-active');
    evt.target.classList.add('press__pagination-item_is-active');

    articles.forEach((elem, i) => {
      if (index === i) {
        elem.classList.remove('press__article_hidden');
      } else {
        elem.classList.add('press__article_hidden');
      }
    });
  });
});

const scrollContainer = document.querySelector('.gallery__container');
const scrollElement = document.querySelector('.gallery__image');

galleryBtnLeft.addEventListener('click', () => {
  scrollContainer.scrollLeft -= scrollElement.clientWidth;
});

galleryBtnRight.addEventListener('click', () => {
  scrollContainer.scrollLeft += scrollElement.clientWidth;
});

const subscribeFormSubmitBtn = subscribeForm.querySelector('.form__submit-btn');

subscribeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  subscribeFormSubmitBtn.textContent = 'готово!';
  subscribeForm.reset();
});
