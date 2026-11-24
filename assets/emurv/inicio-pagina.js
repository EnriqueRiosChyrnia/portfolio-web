const root = document.documentElement;
const overlay = document.getElementById('emurv-inicio');
const content = [...document.querySelectorAll('body > .topbar, body > .feed')];
const previousFocus = document.activeElement;
let intro;
let timer;
let closed = false;

function close() {
  if (closed) return;
  closed = true;
  clearTimeout(timer);
  intro?.destroy();
  content.forEach(element => { element.inert = false; });
  root.classList.remove('emurv-arranque');
  overlay?.remove();
  document.removeEventListener('keydown', onKey, true);
  window.removeEventListener('emurv:intro-timeout', close);
  if (previousFocus && previousFocus !== document.body && previousFocus.isConnected) previousFocus.focus();
  window.dispatchEvent(new Event('resize'));
}

function onKey(event) {
  if (event.key === 'Escape') { event.preventDefault(); close(); }
  if (event.key === 'Tab') { event.preventDefault(); overlay?.focus(); }
}

if (root.classList.contains('emurv-arranque') && overlay) {
  window.addEventListener('emurv:intro-timeout', close);
  timer = setTimeout(close, 6500);
  try {
    const { EmuRVIntro } = await import('../../handoff/emurv-marca-20261112/inicio/player.js?v=inicio-pagina-20261113');
    if (!closed && root.classList.contains('emurv-arranque')) {
      content.forEach(element => { element.inert = true; });
      document.addEventListener('keydown', onKey, true);
      overlay.focus({preventScroll: true});
      intro = new EmuRVIntro(overlay.querySelector('.inicio-escena'), {
        theme: 'dark', variant: 'ensamble', soundEnabled: true, onComplete: close,
      });
      void intro.play().catch(close);
    } else close();
  } catch (error) {
    console.warn('No se pudo reproducir la presentación de EmuRV', error);
    close();
  }
} else close();
