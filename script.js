// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ano dinâmico no footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Animação de entrada no scroll
const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

// Fundo 3D premium no hero com Vanta RINGS
let vantaEffect;

window.addEventListener('DOMContentLoaded', () => {
  if (window.VANTA && !vantaEffect) {
    vantaEffect = window.VANTA.RINGS({
      el: '#hero',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x20b57c,
      color2: 0x38d69e,
      backgroundColor: 0x06110f,
      amplitudeFactor: 0.8,
      ringFactor: 0.85,
      waveHeight: 16,
      spacing: 22,
      maxDistance: 24
    });
  }
});

window.addEventListener('beforeunload', () => {
  if (vantaEffect) {
    vantaEffect.destroy();
  }
});
