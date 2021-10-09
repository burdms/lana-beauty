import headerMenu from "./modules/headerMenu";
import headerShrinkLogo from "./modules/headerShrinkLogo";
import heroSlider from "./modules/heroSlider";
import smoothScroll from "./modules/smoothScrollToAcnhor";
import testimonialsSlider from "./modules/testimonialsSlider";

headerMenu();
headerShrinkLogo();
smoothScroll();

if (document.querySelector('.hero')) {
  heroSlider();
}

if (document.querySelector('.testimonials')) {
  testimonialsSlider();
}
