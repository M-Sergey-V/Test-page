// Меню бургер ------------------------------------------------
let header__burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.header__menu');
header__burger.addEventListener('click', function() {
    header__burger.classList.toggle('active');
    header__menu.classList.toggle('active');
    document.body.classList.toggle('lock');// Убираем прокрутку при открытом меню бургер
});

// Закрытие меню при клике на ссылку --------------------------
let header__list = document.querySelector('.header__list');
header__list.addEventListener('click', function() {
    header__menu.classList.toggle('active');
    header__burger.classList.toggle('active');
});

// Плавная прокрутка к нужному разделу -----------------------------
let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchors of anchors) {
  if (anchors) {
    anchors.addEventListener('click', function(e) {
      e.preventDefault();
      anchors = this.getAttribute('href');
      document.querySelector(anchors).scrollIntoView({
        behavior: 'smooth', block: 'start'
      });
    });
  }
}

// Плавная прокрутка вверх страницы ---------------------------
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});