const PAGES = ['home', 'sobre-mi', 'proyectos', 'cuaderno'];

function navigate(id) {
  PAGES.forEach(p => {
    const page    = document.getElementById('page-' + p);
    const navLink = document.getElementById('nav-' + p);
    if (page)    page.classList.remove('visible');
    if (navLink) navLink.classList.remove('active');
  });

  const target  = document.getElementById('page-' + id);
  const navLink = document.getElementById('nav-' + id);
  if (target) {
    target.classList.add('visible');
    window.scrollTo({ top: 0 });
  }
  if (navLink) navLink.classList.add('active');

  history.pushState({}, '', '#' + id);

  if (id === 'proyectos') renderProyectos();
  if (id === 'cuaderno')  renderCuaderno();

  document.querySelector('.nav-links')?.classList.remove('open');
}

window.addEventListener('popstate', () => {
  const hash = location.hash.replace('#', '') || 'home';
  navigate(hash);
});

window.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash.replace('#', '') || 'home';
  navigate(hash);

  document.querySelector('.nav-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('open');
  });
});

/* ─── TYPEWRITER ──────────────────────────────────────────── */
const PHRASES = [
  'Desarrollador de software en formación.',
  'Apasionado por la tecnología y la innovación.',
  'Creando soluciones digitales funcionales.',
  'Desarrollo web con enfoque moderno.'
];

let phraseIdx = 0;
let charIdx   = 0;
let deleting  = false;

function typeLoop() {
  const el      = document.getElementById('typewriter-text');
  if (!el) return;

  const current = PHRASES[phraseIdx];

  if (!deleting) {
    el.textContent = current.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1900);
      return;
    }
    setTimeout(typeLoop, 55);
  } else {
    el.textContent = current.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting  = false;
      phraseIdx = (phraseIdx + 1) % PHRASES.length;
      setTimeout(typeLoop, 420);
      return;
    }
    setTimeout(typeLoop, 30);
  }
}
typeLoop();
