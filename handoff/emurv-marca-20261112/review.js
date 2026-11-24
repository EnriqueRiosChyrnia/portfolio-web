'use strict';
const phrases = ['Ensamblador RISC-V, paso a paso', 'Entorno educativo RISC-V', 'Programá en ensamblador RISC-V', 'Validado con pruebas de referencia'];
const urlState = new URLSearchParams(location.search);
let saved = {};
try { saved = JSON.parse(localStorage.getItem('emurv-brand-review') || '{}'); } catch (_) { /* La selección también vive en la URL. */ }
const state = {
  concept: /^[abcd]$/.test(urlState.get('concepto') || saved.concept || '') ? (urlState.get('concepto') || saved.concept) : 'a',
  phrase: /^[0-3]$/.test(urlState.get('texto') ?? saved.phrase ?? '') ? Number(urlState.get('texto') ?? saved.phrase) : 0,
  mode: ['color', 'mono', 'inverso'].includes(urlState.get('modo') || saved.mode) ? (urlState.get('modo') || saved.mode) : 'color'
};
let concepts = [];
const artwork = new Map();
const frame = document.getElementById('page-preview');

function tint(raw, mode) {
  return mode === 'color' ? raw : raw.replace(/fill="#[0-9a-f]{6}"/gi, `fill="${mode === 'mono' ? '#262A20' : '#F7F4E6'}"`);
}
function imageUrl(raw, mode) {
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(tint(raw, mode));
}
function save() {
  try { localStorage.setItem('emurv-brand-review', JSON.stringify(state)); } catch (_) { /* No impide la comparación. */ }
  const query = new URLSearchParams({ concepto: state.concept, texto: state.phrase, modo: state.mode });
  history.replaceState(null, '', '?' + query);
}
function applyToFrame() {
  const doc = frame.contentDocument;
  const c = concepts.find(item => item.id === state.concept);
  if (!doc || !c || !doc.querySelector('.hero-side .wm')) return;
  const old = doc.querySelector('.hero-side .wm');
  const logo = new DOMParser().parseFromString(artwork.get(c.lockup), 'image/svg+xml').documentElement;
  logo.setAttribute('class', 'wm');
  old.replaceWith(doc.importNode(logo, true));
  const stamp = doc.querySelector('[data-i18n="hero.stamp"]');
  if (stamp) stamp.textContent = phrases[state.phrase];
  if (!doc.getElementById('brand-proposal-style')) {
    const style = doc.createElement('style');
    style.id = 'brand-proposal-style';
    style.textContent = '.hero-side .wm{width:100%;max-width:460px;height:auto;transform:none}.hero-side .stamp.hero{font-size:12px;letter-spacing:.1em;line-height:1.8;max-width:100%;padding:12px 14px;transform:rotate(-3deg)}';
    doc.head.append(style);
  }
}
function render() {
  document.querySelectorAll('.card').forEach(card => {
    const selected = card.dataset.concept === state.concept;
    card.classList.toggle('selected', selected);
    card.classList.toggle('inverse', state.mode === 'inverso');
    card.querySelector('button').setAttribute('aria-pressed', String(selected));
    card.querySelector('button').textContent = selected ? 'En la vista previa' : 'Ver en la página';
    card.querySelector('.art').classList.toggle('inverse', state.mode === 'inverso');
    card.querySelectorAll('img[data-source]').forEach(img => { img.src = imageUrl(artwork.get(img.dataset.source), state.mode); });
  });
  document.querySelector(`input[name="modo"][value="${state.mode}"]`).checked = true;
  document.querySelector(`input[name="frase"][value="${state.phrase}"]`).checked = true;
  const c = concepts.find(item => item.id === state.concept);
  const label = `${c.id.toUpperCase()} / ${c.name}`;
  document.getElementById('selection').textContent = `Seleccionada: ${label}`;
  document.getElementById('preview-label').textContent = label;
  applyToFrame();
  save();
}
async function init() {
  const response = await fetch('propuestas.json');
  if (!response.ok) throw new Error('No se pudieron cargar las propuestas.');
  concepts = await response.json();
  await Promise.all(concepts.flatMap(c => [c.symbol, c.lockup]).map(async path => {
    const res = await fetch(path);
    if (!res.ok) throw new Error('No se pudo cargar ' + path);
    artwork.set(path, await res.text());
  }));
  const cards = document.getElementById('cards');
  concepts.forEach(c => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.concept = c.id;
    // Los datos provienen del manifiesto local de las cuatro propuestas.
    card.innerHTML = `<div class="card-meta"><b>${c.id.toUpperCase()} / ${c.name}</b><span>${c.kind}</span></div><div class="art"><img class="symbol" data-source="${c.symbol}" alt="Símbolo de la propuesta ${c.name}" width="130" height="130"><img class="lockup" data-source="${c.lockup}" alt="EmuRV con la propuesta ${c.name}"></div><div class="card-body"><p>${c.idea}</p><button type="button" aria-pressed="false">Ver en la página</button><div class="small-test" aria-label="Símbolo a 16 y 32 píxeles"><img data-source="${c.symbol}" alt="" width="16" height="16"><img data-source="${c.symbol}" alt="" width="32" height="32"><span>16 / 32 px</span></div></div>`;
    card.querySelector('button').addEventListener('click', () => { state.concept = c.id; render(); });
    cards.append(card);
  });
  document.querySelectorAll('input[name="modo"]').forEach(input => input.addEventListener('change', () => { state.mode = input.value; render(); }));
  document.querySelectorAll('input[name="frase"]').forEach(input => input.addEventListener('change', () => { state.phrase = Number(input.value); render(); }));
  render();
}
frame.addEventListener('load', () => {
  const win = frame.contentWindow;
  if (win.SiteI18n) win.SiteI18n.apply('es');
  const previous = win.SiteI18nRender;
  win.SiteI18nRender = function (lang) {
    if (previous) previous(lang);
    applyToFrame();
  };
  applyToFrame();
});
init().catch(error => {
  const message = document.createElement('p');
  message.textContent = error.message + ' Abrí esta carpeta desde el servidor local; también podés ver comparacion.png.';
  document.getElementById('cards').append(message);
});
