export default function headerShrinkLogo() {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      header.classList.add('shrink-logo');
    } else {
      header.classList.remove('shrink-logo');
    }
  });
}
