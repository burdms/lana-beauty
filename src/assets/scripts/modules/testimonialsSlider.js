import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function testimonialsSlider() {
  const testimonialsSlider = new Swiper('.testimonials-slider', {
    effect: 'fade',
    loop: true,
    speed: 400,

    autoplay: {
      delay: 5000,
    },

    navigation: {
      prevEl: '.testimonials-slider__button--prev',
      nextEl: '.testimonials-slider__button--next',
    },
  });
}
