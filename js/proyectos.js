function renderProyectos() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  // Limpiar si ya estaba renderizado
  grid.innerHTML = '';

  if (!proyectos || !proyectos.length) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">🚀</div>
        <p>Aún no hay proyectos. Agrégalos en <code>data/proyectos.js</code>.</p>
      </div>`;
    return;
  }

  proyectos.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    if (p.destacado) card.style.borderColor = 'rgba(164,201,255,0.45)';

    const techTags = (p.tecnologias || [])
      .map(t => `<span class="tech-tag">${t}</span>`)
      .join('');

    const linkAttr = p.github && p.github !== '#'
      ? `href="${p.github}" target="_blank" rel="noopener"`
      : `href="#"`;

    card.innerHTML = `
      <div class="project-card-top">
        <div class="project-icon">${p.icono || '💻'}</div>
        <a class="project-link-btn" ${linkAttr}>
          ${p.github && p.github !== '#' ? 'GitHub ↗' : 'Próximamente'}
        </a>
      </div>
      <h3>${p.titulo}</h3>
      <p>${p.descripcion}</p>
      <div class="project-tech">${techTags}</div>
    `;

    grid.appendChild(card);
  });
}
