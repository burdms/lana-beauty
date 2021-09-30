import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function heroSlider() {
  if (document.querySelectorAll('.swiper-slide').length > 1) {
    const heroSlider = new Swiper('.hero-slider', {
      effect: 'fade',
      loop: true,
      speed: 400,

      autoplay: {
        delay: 5000,
      },

      pagination: {
        el: '.hero-slider__pagination',
        clickable: true,
      },
    });
  }
}
