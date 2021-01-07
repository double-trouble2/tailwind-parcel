import '../styles/styles.css';
import Glide from './glide.min.js';

// Our Partners or clients slider
new Glide('.partners-carousel', {
  type: 'carousel',
  startAt: 0,
  autoplay: 3000,
  hoverpause: true,
  gap: 25,
  // animationTimingFunc: ease,
  perView: 5,
  breakpoints: {
    800: {
      perView: 4
    },
    600: {
      perView: 2
    }
  }
}).mount();

// 
new Glide('.news-slider', {
  type: 'slider',
  startAt: 0,
  autoplay: 3000,
  hoverpause: true,
  transitionType: 'slide',
  animationDuration: 500,
  animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
  // animationTimingFunc: linear,
  bound: true,
  rewind: false,
  width: 225,
  gap: 18,
  perView: 3,
  breakpoints: {
    768: {
      peek: 80,
      perView: 1
    },
    568: {
      peek: 50,
      perView: 1
    }
  }
}).mount();

new Glide('.tariffs-slider', {
  type: 'slider',
  startAt: 0,
  autoplay: 3000,
  wrapperWidth: 300,
  hoverpause: true,
  transitionType: 'slide',
  animationDuration: 500,
  animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
  // animationTimingFunc: linear,
  bound: true,
  rewind: false,
  perView: 1
}).mount();

// Slowly scroling
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
