import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function initHeroSlider() {
  new Swiper('.hero-slider', {
    modules: [Pagination, Autoplay],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    on: {
    slideChangeTransitionEnd: () => {
      console.log('Slide transition completed');
    },
    resize: () => {
      console.log('Swiper resized');
    },
  });
}

