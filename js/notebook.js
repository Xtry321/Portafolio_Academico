let semanaActiva = 0;

function renderCuaderno() {
  renderListaSemanas();
  if (semanas && semanas.length > 0) {
    seleccionarSemana(semanaActiva);
  } else {
    document.getElementById('notebook-content').innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📓</div>
        <p>Agrega tus semanas en <code>data/semanas.js</code> para empezar.</p>
      </div>`;
  }
}

function renderListaSemanas() {
  const list = document.getElementById('weeks-list');
  if (!list) return;

  list.innerHTML = '';

  if (!semanas || !semanas.length) {
    list.innerHTML = `
      <li style="padding:1rem 1.25rem;font-size:.8rem;color:var(--outline)">
        Sin semanas. Edita <code>data/semanas.js</code>.
      </li>`;
    return;
  }

  semanas.forEach((s, i) => {
    const li = document.createElement('li');
    li.className = 'week-item' + (i === semanaActiva ? ' active' : '');
    li.innerHTML = `
      <div>${s.titulo}</div>
      <div class="week-date">${s.fecha || ''}</div>
    `;
    li.addEventListener('click', () => seleccionarSemana(i));
    list.appendChild(li);
  });
}

function seleccionarSemana(idx) {
  semanaActiva = idx;
  document.querySelectorAll('.week-item').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
  renderContenidoSemana(semanas[idx]);
}

/* ─── Render de una semana ─────────────────────────────────── */
function renderContenidoSemana(semana) {
  const area = document.getElementById('notebook-content');
  if (!area || !semana) return;

  // Cabecera
  let html = `
    <div style="margin-bottom:.25rem">
      <div class="notebook-week-title">${semana.titulo}</div>
      <div class="notebook-week-meta">${semana.fecha || 'Sin fecha'}</div>
    </div>
  `;

  // Apuntes
  html += `
    <div class="notebook-panel">
      <div class="panel-header">
        <h3>📝 Apuntes</h3>
      </div>
      <div class="panel-body">
        <div class="note-content">${renderNotas(semana.notas || '')}</div>
      </div>
    </div>
  `;

  // Reflexión
  html += `
    <div class="notebook-panel">
      <div class="panel-header">
        <h3>💭 Reflexión semanal</h3>
      </div>
      <div class="panel-body">
        <div class="reflection-text">${escapeHtml(semana.reflexion || 'Sin reflexión registrada.')}</div>
      </div>
    </div>
  `;

  // Bibliografía
  const refs = semana.bibliografia || [];
  const refsHtml = refs.length
    ? refs.map((r, i) => {
        const isUrl = r.startsWith('http');
        const texto = isUrl
          ? `<a class="bib-link" href="${r}" target="_blank" rel="noopener">${escapeHtml(r)}</a>`
          : escapeHtml(r);
        return `
          <div class="bib-entry">
            <span class="bib-num">${i + 1}</span>
            <span class="bib-text">${texto}</span>
          </div>`;
      }).join('')
    : '<p style="font-size:.85rem;color:var(--outline)">Sin bibliografía registrada.</p>';

  html += `
    <div class="notebook-panel">
      <div class="panel-header">
        <h3>📚 Bibliografía</h3>
      </div>
      <div class="panel-body">${refsHtml}</div>
    </div>
  `;

  area.innerHTML = html;
}

/* ─── Render de notas: divide en segmentos texto / img / código ─── */
function renderNotas(text) {
  if (!text) return '';

  const IMG_RE  = /^\[img:\s*([^\]|]+?)(?:\|\s*([^\]]*))?\]\s*$/;
  const CODE_START = /^~~~\s*(\w*)$/;  // ~~~  o  ~~~sql  ~~~php  etc.
  const CODE_END   = /^~~~\s*$/;

  const lines    = text.split('\n');
  const segments = [];
  let textBuf    = [];
  let codeBuf    = null;  // null = no estamos en bloque de código
  let codeLang   = '';

  lines.forEach(line => {
    if (codeBuf !== null) {
      if (CODE_END.test(line)) {
        if (textBuf.length) {
          segments.push({ type: 'text', content: textBuf.join('\n') });
          textBuf = [];
        }
        segments.push({ type: 'code', content: codeBuf.join('\n'), lang: codeLang });
        codeBuf = null;
        codeLang = '';
      } else {
        codeBuf.push(line);
      }
      return;
    }

    // ── Abrir bloque de código
    const codeMatch = line.match(CODE_START);
    if (codeMatch) {
      if (textBuf.length) {
        segments.push({ type: 'text', content: textBuf.join('\n') });
        textBuf = [];
      }
      codeBuf  = [];
      codeLang = codeMatch[1] || '';
      return;
    }

    // ── Imagen intercalada [img: ruta]
    const imgMatch = line.match(IMG_RE);
    if (imgMatch) {
      if (textBuf.length) {
        segments.push({ type: 'text', content: textBuf.join('\n') });
        textBuf = [];
      }
      segments.push({
        type:    'img',
        content: imgMatch[1].trim(),
        caption: imgMatch[2] ? imgMatch[2].trim() : imgMatch[1].trim().split('/').pop()
      });
      return;
    }

    textBuf.push(line);
  });

  // Volcar lo que quede
  if (textBuf.length) segments.push({ type: 'text', content: textBuf.join('\n') });

  // ── Renderizar cada segmento
  return segments.map(seg => {
    if (seg.type === 'img') {
      return `
        <figure class="note-figure">
          <img src="${seg.content}" alt="${escapeHtml(seg.caption)}" loading="lazy" />
          <figcaption>${escapeHtml(seg.caption)}</figcaption>
        </figure>`;
    }

    if (seg.type === 'code') {
      const label = seg.lang
        ? `<span class="code-lang">${escapeHtml(seg.lang)}</span>`
        : '';
      return `<div class="code-block">${label}<pre><code>${escapeHtml(seg.content)}</code></pre></div>`;
    }

    let html = escapeHtml(seg.content);
    html = html.replace(/\*\*(.+?)\*\*/g,  '<strong>$1</strong>');
    html = html.replace(/`([^`]+)`/g,       '<code>$1</code>');
    html = html.replace(/^#### (.+)$/gm,    '<h4>$1</h4>');
    html = html.replace(/^### (.+)$/gm,     '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm,      '<h2>$1</h2>');
    html = html.replace(/^[-•]\s+(.+)$/gm,  '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m.replace(/\n/g, '')}</ul>`);
    html = html.replace(/(<\/h2>|<\/h3>|<\/h4>)\n/g, '$1');
    html = html.replace(/\n(<h2>|<h3>|<h4>)/g,       '$1');
    html = html.replace(/(<\/ul>)\n/g,         '$1');
    html = html.replace(/\n(<ul>)/g,           '$1');
    html = html.replace(/\n/g, '<br>');
    return html;

  }).join('');
}

/* ─── Helpers ─────────────────────────────────────────────── */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;');
}
