import headerMenu from "./modules/headerMenu";
import heroSlider from "./modules/heroSlider";

headerMenu();

if (document.querySelector('.hero')) {
  heroSlider();
}
