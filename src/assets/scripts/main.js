import headerMenu from "./modules/headerMenu";
import headerShrinkLogo from "./modules/headerShrinkLogo";
import heroSlider from "./modules/heroSlider";

headerMenu();
headerShrinkLogo();

if (document.querySelector('.hero')) {
  heroSlider();
}
