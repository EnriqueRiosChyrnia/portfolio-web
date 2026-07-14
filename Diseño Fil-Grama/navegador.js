/* Fil-Grama · Navegador flotante del prototipo.
   Web component <fg-navegador> montado vía <x-import> en cada pantalla.
   Botones: Índice · anterior/siguiente · lista completa · Mapa. */
(function () {
  if (customElements.get('fg-navegador')) return;

  var SCREENS = [
    { s: 'Sistema', n: 'Índice de pantallas', f: 'Índice de pantallas.dc.html' },
    { s: 'Sistema', n: 'Mapa de navegación', f: 'Mapa de navegación.dc.html' },
    { s: 'Sistema', n: 'Auditoría de diseño', f: 'Auditoría de diseño.dc.html' },
    { s: 'Sistema', n: 'Guía de componentes', f: 'Guía de componentes.dc.html' },
    { s: 'Acceso', n: 'Login', f: '1 Acceso/Login.dc.html' },
    { s: 'Acceso', n: 'Prerrequisitos de Meta', f: '1 Acceso/Prerrequisitos de Meta.dc.html' },
    { s: 'Acceso', n: 'Elegí qué cuentas conectar', f: '1 Acceso/Elegí qué cuentas conectar.dc.html' },
    { s: 'Acceso', n: 'Resultado de conexión', f: '1 Acceso/Resultado de conexión.dc.html' },
    { s: 'Acceso', n: 'Estado de borrado de datos', f: '1 Acceso/Estado de borrado de datos.dc.html' },
    { s: 'Clientes', n: 'Lista de clientes (Home)', f: '2 Clientes/Lista de clientes.dc.html' },
    { s: 'Clientes', n: 'Nuevo cliente', f: '2 Clientes/Nuevo cliente.dc.html' },
    { s: 'Workspace', n: 'Workspace (pestañas)', f: '3 Workspace de cliente/Workspace.dc.html' },
    { s: 'Workspace', n: 'Dashboard', f: '3 Workspace de cliente/Dashboard.dc.html' },
    { s: 'Workspace', n: 'Dashboard sin datos', f: '3 Workspace de cliente/Dashboard sin datos.dc.html' },
    { s: 'Workspace', n: 'Detalle de cuenta', f: '3 Workspace de cliente/Detalle de cuenta.dc.html' },
    { s: 'Workspace', n: 'Publicaciones — elegir cuenta', f: '3 Workspace de cliente/Publicaciones - elegir cuenta.dc.html' },
    { s: 'Workspace', n: 'Todas las publicaciones', f: '3 Workspace de cliente/Todas las publicaciones.dc.html' },
    { s: 'Workspace', n: 'Detalle de publicación', f: '3 Workspace de cliente/Detalle de publicación.dc.html' },
    { s: 'Workspace', n: 'Detalle de story', f: '3 Workspace de cliente/Detalle de story.dc.html' },
    { s: 'Workspace', n: 'Comparar cuentas', f: '3 Workspace de cliente/Comparar cuentas.dc.html' },
    { s: 'Workspace', n: 'Reporte', f: '3 Workspace de cliente/Reporte.dc.html' },
    { s: 'Workspace', n: 'Gestionar redes', f: '3 Workspace de cliente/Gestionar redes.dc.html' },
    { s: 'Workspace', n: 'Reconectar cuentas', f: '3 Workspace de cliente/Reconectar cuentas.dc.html' },
    { s: 'Administración', n: 'Administración (hub)', f: '4 Administración/Administración.dc.html' },
    { s: 'Administración', n: 'Usuarios', f: '4 Administración/Usuarios.dc.html' },
    { s: 'Administración', n: 'Detalle de usuario', f: '4 Administración/Detalle de usuario.dc.html' },
    { s: 'Administración', n: 'Sincronización', f: '4 Administración/Sincronización.dc.html' },
  ];

  function currentIndex() {
    var path = '';
    try { path = decodeURIComponent(window.location.pathname); } catch (e) { path = window.location.pathname; }
    for (var i = 0; i < SCREENS.length; i++) {
      var f = SCREENS[i].f;
      if (path.length >= f.length && path.slice(path.length - f.length) === f) return i;
    }
    return -1;
  }

  function hrefFor(fromIdx, toIdx) {
    var from = SCREENS[fromIdx] || { f: '' };
    var inFolder = from.f.indexOf('/') >= 0;
    return encodeURI((inFolder ? '../' : './') + SCREENS[toIdx].f);
  }

  var CSS = ''
    + ':host{all:initial}'
    + '.wrap{position:fixed;left:16px;bottom:16px;z-index:9999;font-family:\'Public Sans\',ui-sans-serif,system-ui,sans-serif;}'
    + '.bar{display:flex;align-items:center;gap:2px;background:#141921;border-radius:12px;box-shadow:0 8px 28px rgba(20,25,33,.32);padding:5px;}'
    + '.btn{display:flex;align-items:center;gap:7px;height:32px;padding:0 10px;border-radius:8px;border:none;background:transparent;color:#E9EDF2;font-size:12.5px;font-family:inherit;cursor:pointer;white-space:nowrap;}'
    + '.btn:hover{background:rgba(255,255,255,.12)}'
    + '.btn[disabled]{opacity:.35;cursor:default}'
    + '.btn[disabled]:hover{background:transparent}'
    + '.name{max-width:200px;overflow:hidden;text-overflow:ellipsis;font-weight:600}'
    + '.sep{width:1px;height:18px;background:rgba(255,255,255,.16);margin:0 3px}'
    + '.panel{position:absolute;left:0;bottom:48px;width:288px;max-height:min(58vh,460px);overflow:auto;background:#fff;border:1px solid #E5E9EF;border-radius:14px;box-shadow:0 16px 44px rgba(20,25,33,.22);padding:8px;}'
    + '.sec{font-size:10.5px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;color:#9AA4B2;padding:9px 10px 4px;}'
    + '.item{display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;font-size:13px;color:#232A36;cursor:pointer;text-decoration:none;}'
    + '.item:hover{background:#F5F7FA}'
    + '.item.cur{background:#EAF2FB;color:#14529C;font-weight:600}'
    + '.dot{width:5px;height:5px;border-radius:50%;background:#C4CCD6;flex:none}'
    + '.item.cur .dot{background:#1E66BC}';

  var FgNav = function () { return Reflect.construct(HTMLElement, [], FgNav); };
  FgNav.prototype = Object.create(HTMLElement.prototype);
  FgNav.prototype.constructor = FgNav;

  FgNav.prototype.connectedCallback = function () {
    var root = this.attachShadow({ mode: 'open' });
    var idx = currentIndex();
    var open = false;
    var self = this;

    function render() {
      var cur = SCREENS[idx] || { n: 'Prototipo', s: '' };
      var prevOk = idx > 0, nextOk = idx >= 0 && idx < SCREENS.length - 1;
      var html = '<style>' + CSS + '</style><div class="wrap">';
      if (open) {
        html += '<div class="panel">';
        var lastSec = '';
        for (var i = 0; i < SCREENS.length; i++) {
          if (SCREENS[i].s !== lastSec) { lastSec = SCREENS[i].s; html += '<div class="sec">' + lastSec + '</div>'; }
          html += '<a class="item' + (i === idx ? ' cur' : '') + '" href="' + hrefFor(idx, i) + '"><span class="dot"></span>' + SCREENS[i].n + '</a>';
        }
        html += '</div>';
      }
      html += '<div class="bar">'
        + '<button class="btn" data-a="home" title="Volver al índice">⌂ Índice</button>'
        + '<span class="sep"></span>'
        + '<button class="btn" data-a="prev" title="Pantalla anterior"' + (prevOk ? '' : ' disabled') + '>‹</button>'
        + '<button class="btn" data-a="list" title="Todas las pantallas"><span class="name">' + cur.n + '</span> ▾</button>'
        + '<button class="btn" data-a="next" title="Pantalla siguiente"' + (nextOk ? '' : ' disabled') + '>›</button>'
        + '<span class="sep"></span>'
        + '<button class="btn" data-a="map" title="Cómo se conectan las pantallas">Mapa</button>'
        + '</div></div>';
      root.innerHTML = html;
      root.querySelectorAll('.btn').forEach(function (b) {
        b.addEventListener('click', function () {
          var a = b.getAttribute('data-a');
          if (a === 'list') { open = !open; render(); return; }
          if (a === 'home') { window.location.href = hrefFor(idx, 0); return; }
          if (a === 'map') { window.location.href = hrefFor(idx, 1); return; }
          if (a === 'prev' && idx > 0) { window.location.href = hrefFor(idx, idx - 1); return; }
          if (a === 'next' && idx < SCREENS.length - 1) { window.location.href = hrefFor(idx, idx + 1); return; }
        });
      });
    }
    render();
    document.addEventListener('click', function (e) {
      if (open && !e.composedPath().includes(self)) { open = false; render(); }
    });
  };

  customElements.define('fg-navegador', FgNav);
})();
