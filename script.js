// Resalta el enlace de navegación de la sección visible actualmente
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.topbar nav a');

const setActive = () => {
  let current = '';
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--deep)' : '';
  });
};

window.addEventListener('scroll', setActive, { passive: true });
setActive();
