export default function headerMenu() {
  const header = document.querySelector('.header');

  const toggleMenu = () => {
    header.classList.toggle('menu-active');

    document.body.classList.toggle('no-scroll');
  };

  header.addEventListener('click', e => {
    if (e.target.classList.contains('header-burger') || e.target.classList.contains('header-overlay')) {
      toggleMenu();
    }
  });
}
