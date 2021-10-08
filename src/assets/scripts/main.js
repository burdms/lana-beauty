import headerMenu from "./modules/headerMenu";
import headerShrinkLogo from "./modules/headerShrinkLogo";
import heroSlider from "./modules/heroSlider";
import testimonialsSlider from "./modules/testimonialsSlider";

headerMenu();
headerShrinkLogo();

if (document.querySelector('.hero')) {
  heroSlider();
}

if (document.querySelector('.testimonials')) {
  testimonialsSlider();
}
