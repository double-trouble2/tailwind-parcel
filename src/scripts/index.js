import '../styles/styles.css';
import Glide from './glide.min.js';

// Our Partners or clients slider
new Glide('.partners', {
  type: 'carousel',
  startAt: 0,
  autoplay: 3000,
  hoverpause: true,
  width: 380,
  gap: 50,
  // animationTimingFunc: ease,
  perView: 6,
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
new Glide('.news', {
  type: 'carousel',
  startAt: 0,
  autoplay: 3000,
  hoverpause: true,
  animationDuration: 600,
  animationTimingFunc: 'linear',
  focusAt: 0,
  width: 280,
  gap: 33,
  // animationTimingFunc: ease,
  perView: 3,
  breakpoints: {
    800: {
      perView: 3
    },
    600: {
      perView: 2
    }
  }
}).mount();