import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function heroSlider() {
  if (document.querySelectorAll('.swiper-slide').length > 1) {
    const heroSlider = new Swiper('.hero-slider', {
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });
  }
}
