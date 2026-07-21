# portfolio-web — Documentación completa del proyecto

> Este archivo es la fuente de contexto para cualquier sesión de Claude (Code o Design) que trabaje
> sobre este repositorio. Léelo entero antes de tocar nada. Cubre arquitectura, sistema visual,
> sistema de idiomas, convenciones, el contenido de cada página y las recetas para crear o
> modificar páginas y diagramas sin romper la coherencia del sitio.

---

## 1. Qué es este proyecto

Portfolio profesional de **Enrique Chyrnia**, desarrollador backend. Sitio publicado en
`https://portfolio.fil-grama.com/`. La estética simula **papel continuo de impresora de línea
(greenbar)**: hojas de papel crema con bandas verdes alternadas, tiras tractoras perforadas a los
costados, perforaciones de corte entre hojas, sellos de goma, tipografía monoespaciada. Todo el
sitio se lee como un "listado impreso" de un trabajo de impresión (`JOB`, `SHEET NN/NN`,
`END OF JOB`).

**Datos clave:**

| Cosa | Valor |
|---|---|
| Stack | HTML + CSS + JS puros. **Sin framework, sin build, sin package.json, sin dependencias npm** |
| Única dependencia externa | Google Fonts (IBM Plex Mono 400/500/600/700) |
| Deploy | Archivos estáticos tal cual (rama `main`) |
| URL canónica | `https://portfolio.fil-grama.com/` |
| Idiomas | Inglés (default, autoría del HTML) + Español (vía diccionarios JS) |
| Email de contacto | `www.enririos@gmail.com` |

**Implicación central:** no hay componentes compartidos. El CSS está **duplicado inline en cada
página** (bloque `<style>` de ~200 líneas). La consistencia se mantiene **copiando de una página
existente**, nunca escribiendo estilos desde cero. Si cambiás un estilo "global", tenés que
replicarlo a mano en todas las páginas.

---

## 2. Estructura del repositorio

```
portfolio-web/
├── CLAUDE.md                           ← este archivo
├── index.html                          Home / carátula (~400 líneas)
├── fil-grama-report.html               Caso de estudio Fil-Grama (~760 líneas, la página más completa)
├── experiencia-backend-plataforma.html Experiencia laboral anonimizada (~450 líneas)
├── ryguasu.html                        Caso de estudio backend Ryguasu (~560 líneas)
├── assets/
│   ├── og-card.jpg                     Imagen OG compartida por todas las páginas (1200×630)
│   ├── i18n/
│   │   ├── core.js                     Motor i18n compartido (82 líneas) — ver §5
│   │   ├── index.dict.js               Diccionario de index.html
│   │   ├── experiencia.dict.js         Diccionario de experiencia-backend-plataforma.html
│   │   ├── fil-grama-report.dict.js    Diccionario de fil-grama-report.html (incluye SITE_SCREENS_I18N)
│   │   └── ryguasu.dict.js             Diccionario de ryguasu.html (188 claves)
│   └── filgrama/                       Capturas reales de Fil-Grama (jpg)
│       └── diseno/                     Capturas de la fase de diseño (wireframes, hi-fi)
├── uploads/Foto_1.JPG                  Retrato del hero en index
└── Diseño Fil-Grama/                   Mocks interactivos .dc.html (se abren en el modal del tour)
    ├── 1 Acceso/ … 6 Autogestionado/   Carpetas numeradas por área con pantallas .dc.html
    └── (screenshots/, uploads/*.png, *.md → gitignorados)
```

`.gitignore` relevante: `.DS_Store`, `.thumbnail`, y dentro de `Diseño Fil-Grama/`: `screenshots/`,
`handoff-frontend/`, `**/*.md`, `uploads/*.png`, `Portafolio Fil-Grama.dc.html`.

**Routing:** file-based puro. Cada página es un HTML independiente en la raíz. Links relativos
(`<a href="ryguasu.html">`). Navegación interna por anchors a `id` de secciones.

---

## 3. Sistema visual (el corazón del proyecto)

### 3.1 Paleta de colores exacta

Variables `:root` (idénticas en todas las páginas):

```css
--desk:#43463e;                 /* escritorio oscuro detrás del papel */
--paper:#f7f4e6;                /* papel crema */
--strip:#f2efdf;                /* tiras tractoras laterales */
--ink:#262a20;                  /* tinta (texto), verde casi negro */
--faint:#6b6e5f;                /* etiquetas atenuadas */
--rule:rgba(38,42,32,.28);      /* reglas/bordes */
--rule-soft:rgba(38,42,32,.16);
--bar:rgba(96,138,89,.075);     /* banda verde del papel greenbar */
--ok:oklch(0.5 0.11 150);       /* verde estado OK */
--warn:oklch(0.55 0.12 65);     /* ámbar */
--red:oklch(0.52 0.13 28);      /* rojo */
--blue:oklch(0.45 0.08 250);    /* azul (definido, casi sin uso) */
--stripw:48px;                  /* ancho tira tractora (30px bajo 860px) */
```

Colores adicionales usados directo en reglas: topbar `#1d201a`, textos de topbar `#cfd3c2` /
`#a9ad9b` / `#9fae8d`, fondo de cards `#faf8ee`, relleno de paneles/diagramas `#eceadb`, texto
secundario `#3c4033`, resaltador amarillo `rgba(232,198,86,.5)`, acentos rojos `#9a4030`, banda
azul de secciones alternas `rgba(90,115,150,.11)`, fondo rojo suave de cajas de error en SVG
`#f2e4de`.

### 3.2 Cómo se simula el papel continuo (100% CSS, sin imágenes)

- **`body`** = escritorio: `background:var(--desk)` + un `radial-gradient` sutil de luz arriba.
- **`.feed`** = la hoja continua: `max-width:1220px; margin:0 auto; background:var(--paper)` con
  sombras que la "despegan" del escritorio.
- **`.strip.l` / `.strip.r`** = tiras tractoras: columnas absolutas de ancho `--stripw`, con los
  agujeros dibujados por un `radial-gradient` repetido (`background-size:var(--stripw) 56px`),
  separadas del papel por `border dashed`.
- **`.sheet`** = área imprimible: `margin:0 var(--stripw); padding:0 54px 8px` y las **bandas
  greenbar**: `repeating-linear-gradient(180deg, transparent 0 78px, var(--bar) 78px 156px)`.
  Las bandas miden **78px = 3 líneas de 26px**.
- **`.tear`** = perforación entre hojas (`height:52px`), colocada entre **cada** sección: línea
  punteada horizontal que se extiende hasta dentro de las tiras
  (`left:calc(-1 * var(--stripw))`) + sombra tenue debajo.
- **`section.alt-blue`** = hoja alternativa con bandas azules en vez de verdes. Usa márgenes
  negativos `-54px` para sangrar a todo el ancho.
  **Convención: las secciones alternan — impares normales (verde), pares `alt-blue`.**
- **`.stamp`** = sello de goma: `border:3px double currentColor`, mayúsculas con tracking amplio,
  `transform:rotate(-5deg)`, variantes `.red/.amber/.green`. En el hero se posiciona absoluto
  (`.banner .stamp.hero`, rotado +7°, oculto bajo 760px). Dentro de secciones va en un
  `.stamprow` alineado a la derecha.
- **`.hl`** = resaltador amarillo tipo marcador fluorescente (gradiente con bordes desvanecidos).

### 3.3 La grilla de 26px (SAGRADA)

Tipografía base: `"IBM Plex Mono","Courier New",monospace; font-size:14.5px; line-height:26px`.
**Todo el ritmo vertical es múltiplo de 26**: `p{margin:26px 0}`, secciones `padding-bottom:52px`,
gaps de 26/44/52px, paddings ajustados a 12/13/25px para cerrar en 26. Así el texto queda
**encuadrado con las bandas impresas** (3 líneas por banda).

Además, cada página lleva al final el **script de snap a la grilla** (IIFE idéntico en las 4
páginas): mide cada hijo directo de `.sheet > section/header/footer` y le agrega
`padding-bottom` para que cada bloque termine en un múltiplo de 26px. Corre en `load`, `resize`,
`fonts.ready`, carga de imágenes, y con dos `setTimeout` de respaldo. **Copiarlo textual; no
modificarlo.** Este script es lo que produce el "encuadre perfecto del texto" con el fondo.

### 3.4 Tipografía y jerarquía

- Falso-bold con sangrado de tinta: `text-shadow:.5px 0 0 currentColor` (títulos) /
  `1.5px 0 0` (h1 del hero).
- `h1.bname`: `clamp(44px,8.5vw,96px)` en páginas de proyecto; `clamp(40px,7.5vw,88px)` en index;
  la página de experiencia usa una variante chica `clamp(30px,4.6vw,54px)` con `max-width:20ch`.
- `h2.title`: bloque invertido (`background:var(--ink); color:var(--paper); padding:0 14px`,
  `display:inline-block`), con número `<span class="tn">NN</span>` en gris.
- `.lede` 14.5px `max-width:72ch` · `.note` 13.5px color `#3c4033` `max-width:70ch` ·
  `.small` 12.5px `--faint`.
- Etiquetas y microtexto: 11–12.5px, `letter-spacing:.08em–.22em`, MAYÚSCULAS en casi todo lo
  que sea rótulo.
- El encuadre de texto sale de los `max-width` en `ch` (60/62/70/72/74/76ch), **no** de centrar.

### 3.5 Componentes recurrentes (todos definidos en el CSS inline de cada página)

| Clase | Qué es |
|---|---|
| `.topbar` + `.twrap` | Barra sticky oscura: `.tid` (identidad `EC · ENRIQUE CHYRNIA / ARCHIVO.PRT`), `nav.links` (anchors a secciones, se oculta bajo 1040px), botones `.tbtn`: ← Home, `🌐 ES` (`.lang-toggle`), PDF (`window.print()`) |
| `.jobhead` | Cabecera de trabajo de impresión con doble regla: `JOB / USER / TYPE / DATE` (la fecha la llena `<span id="today">`) |
| `.pgh` | Cabecera de cada hoja: `ARCHIVO.PRT · SHEET NN/NN · TEMA · GREENBAR · 132 COL` |
| `.banner` | Hero: jobhead + stamp hero + `h1.bname` + `.brole` + `.blead` + `.rol` (bloque de rol con borde izquierdo) + `.factline` (métricas separadas por `<i>\|</i>`) |
| `.two` | Grid 2 columnas `1.05fr .95fr` gap 44px → 1 col bajo 820px |
| `.box` | Caja con borde 1.5px de tinta: `b.bt` (título) + `span` (texto). Se apilan con `margin-top:26px` |
| `.panel` + `.diagram` | Marco para diagramas SVG inline (ver §7) |
| `.ls` | Lista impresa numerada `001/002/...`: grid `52px 1fr`, borde punteado inferior, `b` mayúsculas + `span` |
| `.logrow` | Fila de estado con leader dots: `.lbl` + `.dots` (punteado que llena) + `.st` con `[ OK ]`(.ok verde) `[PEND]`(.pend ámbar) `[FAIL]`(.fail rojo, solo en ryguasu) `.no`(gris) |
| `.chk` | Checklist `[x]/[~]/[ ]` con marcas `.m.ok/.mid/.no` |
| `.tags` | Etiquetas `[ tag ]` (los corchetes salen de `::before/::after`) — usada en index |
| `.h3` | Subtítulo con prefijo `— ` (via `::before`) |
| `.inv` | Inventario/stack: grid 3 col → 2 (820px) → 1 (540px); `h4` subrayado, `li` con `· ` |
| `.shots` + `.fig` | Grid de capturas con caption — solo fil-grama |
| `.eras` + `.era` | Par wireframe vs hi-fi — solo fil-grama |
| `.tour-grid` + `.tcard` + modal | Recorrido interactivo de pantallas — solo fil-grama (ver §6.3) |
| `.job` + `.jhead/.jco/.jrole/.jstamp` + `.jgo` | Card de proyecto/trabajo — solo index |
| `.eoj` | Footer `*** END OF JOB ***`: `.stars`, h3 Contact, `.mail`, nota `.small`, `.foot-row` con `© <span id="yr">` |

### 3.6 Responsive y print

Breakpoints: **1040px** (se oculta nav), **860px** (tira tractora a 30px, sheet padding 22px),
**820px** (grids a 1–2 col), **760px** (stamp hero oculto, eras 1 col), **640px** (topbar
compacta), **540px** (inv 1 col).

`@media print`: fondo blanco, sin topbar, `.feed` sin sombra ni max-width, `break-inside:avoid`
en cards/paneles. fil-grama además oculta `#recorrido`. El botón PDF de la topbar es
`window.print()`.

---

## 4. Esqueleto de una página (patrón obligatorio)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- charset, viewport, favicon data-URI "EC" (cuadrado #262a20, texto #f7f4e8) -->
  <title data-i18n-meta="meta.title">…</title>
  <!-- description, canonical, OG completo (og:type article en páginas de proyecto,
       og:image → https://portfolio.fil-grama.com/assets/og-card.jpg 1200×630),
       twitter card — todos con data-i18n-meta -->
  <!-- preconnects + stylesheet de IBM Plex Mono -->
  <style> /* ~200 líneas copiadas de una página existente */ </style>
</head>
<body>
  <div class="topbar"><div class="twrap">
    <span class="tid" data-i18n="topbar.tid">EC · ENRIQUE CHYRNIA <i>/ ARCHIVO.PRT</i></span>
    <nav class="links"> <!-- hasta 8 anchors --> </nav>
    <a class="tbtn" href="index.html" data-i18n="topbar.home">← Home</a>
    <button class="tbtn lang-toggle" id="langToggle" type="button" onclick="SiteI18n.toggle()"
            title="Cambiar el sitio a español" aria-label="Cambiar el sitio a español">🌐 ES</button>
    <button class="tbtn" onclick="window.print()">PDF</button>
  </div></div>

  <div class="feed">
    <div class="strip l"></div><div class="strip r"></div>
    <div class="sheet">
      <header class="banner" data-screen-label="Banner"> … </header>
      <div class="tear" aria-hidden="true"></div>
      <section id="…" data-screen-label="01 …"> … </section>          <!-- impar: verde -->
      <div class="tear" aria-hidden="true"></div>
      <section id="…" class="alt-blue" data-screen-label="02 …"> … </section> <!-- par: azul -->
      … (alternando, con .tear entre cada una) …
      <div class="tear" aria-hidden="true"></div>
      <footer class="eoj" data-screen-label="Contacto"> … </footer>
    </div>
  </div>

  <script src="assets/i18n/core.js"></script>
  <script src="assets/i18n/PAGINA.dict.js"></script>
  <script>
  document.getElementById('yr').textContent=new Date().getFullYear();
  document.getElementById('today').textContent=new Date().toISOString().slice(0,10);
  </script>
  <script> /* IIFE de snap a grilla 26px — copiar textual de cualquier página */ </script>
</body>
</html>
```

Cada sección arranca con su `.pgh` (`SHEET NN/NN` — el denominador es el total de hojas de ESA
página) y su `h2.title` con `<span class="tn">NN</span>`.

---

## 5. Sistema de idiomas (i18n)

Motor propio, minúsculo, sin librerías: `assets/i18n/core.js` + un diccionario por página.

### 5.1 Cómo funciona

- El HTML se **escribe en inglés** (texto de fallback). Cada nodo traducible lleva
  `data-i18n="clave"` → el motor hace `el.innerHTML = dict[clave][lang]` (se permite HTML en los
  valores).
- Atributos: `data-i18n-attr="alt:s08.fig1.alt"` (pares `attr:clave` separados por `;`).
- Metas y title: `data-i18n-meta="meta.title"` (en `<title>` setea `textContent`; en `<meta>`
  setea `content`).
- Idioma por defecto: **inglés**. Elección persistida en `localStorage["site-lang"]`. Aplica en
  `DOMContentLoaded`; setea `document.documentElement.lang` y `data-lang`.
- El botón `.lang-toggle` llama `SiteI18n.toggle()`; el motor reescribe su etiqueta
  (`🌐 ES` / `🌐 EN`), title y aria-label en cada aplicación.
- API global: `SiteI18n.apply(lang)`, `SiteI18n.toggle()`, `SiteI18n.getLang()`,
  `SiteI18n.t(clave)`.
- Hook opcional: si la página define `window.SiteI18nRender = function(lang){…}` se llama después
  de cada cambio de idioma (fil-grama lo usa para re-renderizar la grilla del tour).

### 5.2 Estructura de un diccionario

```js
window.SiteI18n = window.SiteI18n || {};
window.SiteI18n.dict = {
  "meta.title": { en: "…", es: "…" },
  "hero.blead": { en: '… <b class="hl">…</b> …', es: '…' },  // HTML permitido
  …
};
```

Claves planas, valores `{en, es}`. **Convención de nombres:**

- `meta.*` (title, description, ogTitle, ogDescription, ogImageAlt, ogLocale [`en_US`/`es_AR`],
  twitterTitle, twitterDescription)
- `topbar.tid`, `topbar.home`, `nav.*`
- `hero.*` (type, dateLabel, stamp, brole, blead, rolLabel, rolP, fact1..N)
- `sNN.*` por sección: `sNN.sheet`, `sNN.title`, `sNN.lede`, `sNN.note`, `sNN.stamp`,
  `sNN.boxN.bt/span`, `sNN.liN.b/span`, `sNN.chkN.b/span`, `sNN.logN.lbl/st/note`,
  `sNN.figN.alt/cap`, `sNN.h3.*`, `sNN.hN` y `sNN.hN.liN` (stack), `sNN.small`
- `diagN.*` — **cada `<text>` de cada SVG tiene su clave**, más `diagN.aria` para el
  `aria-label` del SVG
- `modal.*`, `tour.*` (solo fil-grama)
- `footer.*` (contacto, p, small, row1, back)

**Regla dura: HTML y diccionario tienen que estar 1:1.** Toda clave usada en el HTML debe existir
en el dict y viceversa. Validación (correr desde la raíz del repo):

```bash
node --check assets/i18n/PAGINA.dict.js
node -e '
const fs=require("fs");
const html=fs.readFileSync("PAGINA.html","utf8");
global.window={};
require("./assets/i18n/PAGINA.dict.js");
const dict=global.window.SiteI18n.dict;
const used=new Set();
for(const m of html.matchAll(/data-i18n="([^"]+)"/g)) used.add(m[1]);
for(const m of html.matchAll(/data-i18n-attr="([^"]+)"/g)) m[1].split(";").forEach(p=>used.add(p.split(":")[1]));
for(const m of html.matchAll(/data-i18n-meta="([^"]+)"/g)) used.add(m[1]);
console.log("missing:", [...used].filter(k=>!dict[k]));
console.log("unused:", Object.keys(dict).filter(k=>!used.has(k)));
'
```

**Tono del español:** rioplatense/paraguayo neutro, con voseo donde el original lo usa
("Podés escribirme…"). Traducciones naturales, no literales. Términos técnicos quedan en inglés
cuando es lo normal (backend, POS, outbox, spec) y se traducen cuando existe término asentado
(CPP para WAC, NIC 2 para IAS 2).

---

## 6. Las páginas, una por una

### 6.1 `index.html` — Home / carátula

Secciones: Banner (con retrato `uploads/Foto_1.JPG`) → `#perfil` (01 Perfil) → `#stack`
(02 Stack, alt-blue, grid `.inv`) → `#experiencia` (03 Experiencia, card `.job` que linkea a
experiencia-backend-plataforma.html) → `#proyectos-propios` (04 Proyectos propios, alt-blue,
**dos cards `.job`**: Fil-Grama [claves `s04.*`, stamp ámbar "In development"] y Ryguasu
[claves `s04b.*`, stamp verde "Backend in production"]) → footer.

**Para registrar un proyecto nuevo:** agregar otra `.job` en `#proyectos-propios` (se apilan con
`margin-top:26px`) + claves `s04c.*` en `index.dict.js`, siguiendo el patrón de `s04b.*`.

### 6.2 `experiencia-backend-plataforma.html` — Experiencia laboral

La variante más simple (sin tour, sin capturas). Hero con `.bname` chico. Secciones: `#contexto`
→ `#m1` (Backend cloud, alt-blue) → `#m2` (Onboarding) → `#m3` (Backoffice, alt-blue) → `#stack`
→ `#preparado` (alt-blue) → footer. Contenido **anonimizado por confidencialidad** (sin nombres
reales de empresa). Diccionario: `experiencia.dict.js`.

### 6.3 `fil-grama-report.html` — Caso de estudio Fil-Grama (la página más rica)

Proyecto propio: plataforma de analytics de redes sociales para agencias (Instagram, Facebook,
TikTok), con job diario que guarda snapshots de métricas. Backend Java/Spring Boot, frontend
React, integraciones OAuth TikTok/Meta, VPS Vultr + Cloudflare.

Secciones: Banner → `#que-es` (01 Problema) → `#arquitectura` (02, alt-blue, **3 diagramas SVG**:
flujo general, rotación de refresh tokens, ER del core) → `#ingenieria` (03, `.ls`) →
`#integraciones` (04, alt-blue, `.logrow` con estado real: TikTok OK sandbox, Meta pendiente de
App Review) → `#roadmap` (05, `.chk`) → `#infra` (06, alt-blue) → `#recorrido` (07, **tour
interactivo**) → `#pantallas` (08, alt-blue, capturas reales `.shots`) → `#stack` (09, `.inv`)
→ footer.

**El tour (`#recorrido`):** grilla `.tour-grid` renderizada por JS desde
`window.SITE_SCREENS_I18N` (definido en `fil-grama-report.dict.js`: arrays `en`/`es` de objetos
`{areaLabel, title, desc, path, type, shot}`). Cada card abre el mock `.dc.html` correspondiente
(carpeta `Diseño Fil-Grama/`) en un modal accesible con iframe (`#tourBackdrop`): focus trap,
Escape para cerrar, botón "abrir en pestaña", estado de carga. Usa el hook `SiteI18nRender` para
re-renderizar al cambiar idioma. El modal y su JS viven al final de la página.

### 6.4 `ryguasu.html` — Caso de estudio backend Ryguasu

Proyecto propio (repo del producto: `~/Documents/Ryguasu`, privado). **SaaS multi-tenant de
inventario, ventas y punto de venta** para comercio minorista chico de Paraguay (minimarkets,
panaderías, carnicerías). La página está enfocada 100% en **backend, infraestructura y
decisiones técnicas** (todavía no hay diseño de pantallas del producto — cuando exista, se puede
agregar una sección de capturas tipo `#pantallas` de fil-grama).

Rol declarado: backend e infraestructura de Enrique; frontend y diseño visual son de compañeros
de equipo sobre sus contratos de API. **No inventar autoría más allá de esto.**

Secciones (9 hojas, `RYGUASU.PRT`):

| # | id | alt-blue | Contenido |
|---|---|---|---|
| — | banner | — | JOB RYGUASU · stamp verde "Backend in production" · factline: 62 endpoints, 36 tablas (25 RLS), 170+ tests, 49 decisiones, 7 días a producción |
| 01 | `#que-es` | no | El problema; 4 boxes: costo promedio ponderado, ventas inmutables, multi-moneda, POS offline |
| 02 | `#arquitectura` | sí | Monolito modular Java 25/Spring Boot y su porqué; **diag1** (flujo POS→Cloudflare→Fly.io→PostgreSQL/R2); h3 "Server-authoritative money" |
| 03 | `#multitenant` | no | RLS fail-closed; stamp "42/42 isolated"; **diag2** (propagación de contexto de tenant); `.ls` de 3 puntos |
| 04 | `#ingenieria` | sí | `.ls` de 6: idempotencia ON CONFLICT, locking pesimista, permisos por campo, rate limiting sin Redis, licencias JWT offline, sesiones vs tokens |
| 05 | `#decisiones` | no | Los 49 ADRs; 4 boxes de decisiones destacadas con su porqué |
| 06 | `#backups` | sí | La saga del backup en 4 `.logrow` (v1 FAIL → v2 OK → dead man's switch → restore real); stamp "Restore tested" |
| 07 | `#infra` | no | Fly.io + Cloudflare, ~USD 50/mes; 4 boxes: hosting, edge, CI/CD, bug de CI |
| 08 | `#practicas` | sí | `.chk` de 6: tests, auditoría de seguridad, spec-driven, docs vivas, forense de bugs, humano en el circuito |
| 09 | `#stack` | no | `.inv` 6 columnas |

Nav de la topbar: 8 links (que-es, arquitectura, multitenant, ingenieria, decisiones, backups,
infra, stack — `#practicas` queda fuera por límite de espacio).

**Hechos verdaderos de Ryguasu para escribir contenido** (verificados contra el repo del
producto, julio 2026 — no exagerar ni redondear hacia arriba):

- Java 25 + Spring Boot, monolito modular; PostgreSQL + Flyway (23 migraciones, 36 tablas);
  ~62 endpoints REST `/api/v1` en 18 controllers; ~170 tests backend (Testcontainers contra
  Postgres real).
- Multi-tenant: esquema compartido con `business_id`; RLS forzado en 25 tablas, política
  fail-closed con centinela explícito; contexto sellado al tomar la conexión del pool
  (stamp-on-borrow → exige PgBouncer en modo sesión); test adversarial 42/42 endpoints → 403.
- Sesiones server-side en Postgres (cookie HttpOnly, 12h rolling), CSRF, RBAC con permisos con
  puntos, bcrypt; JWT solo para licencias de dispositivos offline (secreto propio, ventana de
  gracia según estado de suscripción).
- Idempotencia con `Idempotency-Key` + `INSERT … ON CONFLICT DO NOTHING` (probado con carrera
  real de 2 hilos); `SELECT … FOR UPDATE` con orden fijo producto→saldo.
- Backups: job nocturno `pg_dump | gzip | age` → Cloudflare R2, checksums en tabla, dead man's
  switch en Healthchecks.io, retención 60 días; harness local 37/37; restore real desde R2
  verificado (4.553 ventas, 154 productos, 3 tenants, RLS 25/25). La saga v1→v2→FORCE en el
  dump está documentada en DEC-044..047 del repo del producto.
- Infra: Fly.io región GRU (São Paulo), 1 máquina 2GB + Postgres administrado; Cloudflare DNS
  TLS Full (Strict), Pages con proxy `/api/*`, R2, Access (Zero Trust) para el panel staff;
  ~USD 51,50/mes; CI GitHub Actions (mvn verify + gitleaks).
- Disciplina: 35 specs (contrato de API vinculante), decision log de 49 DECs, implementation log
  de 44 entradas, 16 known issues, auditoría de seguridad SEC-001..007 verificada dinámicamente,
  timeline: repo 2026-07-03, backend en producción 2026-07-09.

**Qué NO exponer jamás en la página** (producto propietario): código fuente, credenciales, URLs
internas, esquema SQL literal, datos de clientes, nombres del equipo. El footer ya declara esta
política.

---

## 7. Diagramas SVG (receta para agregar más)

Los diagramas son **SVG inline** dentro de `<div class="panel">`, dibujados a mano con cajas y
flechas. Referencias: 3 en fil-grama (`#arquitectura`), 2 en ryguasu (`#arquitectura`,
`#multitenant`).

Reglas:

1. `<svg class="diagram" viewBox="0 0 1080 ALTO" role="img" aria-label="…" data-i18n-attr="aria-label:diagN.aria">`.
   Ancho lógico 1080; alto según contenido (210–340 típico). Escala responsive sola
   (`width:100%; height:auto`).
2. **Markers de flecha con ids ÚNICOS por SVG en la misma página** (los ids viven en el DOM
   global): primer SVG `fl`/`flg`, segundo `fl2`/`flg2`, tercero `fl3`/`flg3`… El CSS de `.flow`
   apunta a `#fl` y `.flow-d` a `#flg`, así que en SVGs posteriores hay que poner el marker
   explícito en el path: `<path class="flow" marker-end="url(#fl2)" …>`.
   ```html
   <defs>
     <marker id="flN" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
       <path d="M0,0 L9,4.5 L0,9 Z" fill="#262a20"/></marker>
     <marker id="flgN" …><path … fill="#9a4030"/></marker>  <!-- rojo, para .flow-d -->
   </defs>
   ```
3. Cajas: `<rect rx="2" fill="#f7f4e6" stroke="#262a20" stroke-width="1.5"/>`. Caja destacada:
   `fill="#eceadb"`. Caja de error/fallo: `fill="#f2e4de" stroke="#9a4030"` con textos
   `fill="#9a4030"`.
4. Textos: clase por defecto 13px; `.t-sm` 11.5px secundario; `.t-w` bold; `.lbl` para rótulos
   de grupo (mayúsculas, gris, arriba de cada columna). Centrar con `text-anchor="middle"` en
   `x` = centro de la caja. Dos líneas = dos `<text>` separados ~16px en `y`.
5. Flechas: `.flow` (sólida, tinta) para flujo normal; `.flow-d` (punteada roja) para el camino
   de error/detección.
6. Notas al pie del diagrama: `<text class="t-sm" fill="#6b6e5f">` — la última suele ser el
   descargo "Conceptual, simplified diagram…".
7. **Cada `<text>` lleva `data-i18n="diagN.clave"`** y su entrada en el diccionario. El motor
   i18n usa `innerHTML`, que funciona en nodos SVG text.
8. Mantener el vocabulario visual: nada de color de relleno fuera de la paleta, nada de
   gradientes, esquinas casi rectas (`rx="2"`), grosor 1.5.

---

## 8. Recetas rápidas

### Crear una página de proyecto nueva

1. Copiar `ryguasu.html` (o `experiencia-backend-plataforma.html` si no lleva diagramas) como
   base — **nunca escribir el CSS desde cero**.
2. Cambiar: `<title>` y todos los metas, canonical y `og:url`
   (`https://portfolio.fil-grama.com/NUEVA.html`), `topbar.tid` (`/ NUEVA.PRT`), rótulo de los
   `.pgh`, ids de secciones y nav, denominador de hojas (`SHEET NN/M`), `src` del dict.
3. Escribir el HTML en inglés con `data-i18n` en todo lo traducible.
4. Crear `assets/i18n/NUEVA.dict.js` con todas las claves `{en, es}`.
5. Validar claves 1:1 con el script de §5.2.
6. Registrar card en `index.html` `#proyectos-propios` + claves en `index.dict.js`.
7. Mantener: alternancia `alt-blue` en secciones pares, `.tear` entre secciones, ritmo 26px,
   scripts `yr/today` y snap al final.
8. Probar en navegador: `python3 -m http.server` desde la raíz (los `file://` no sirven para
   probar el toggle de idioma con localStorage en algunos navegadores) y verificar EN y ES.

### Agregar una sección a una página existente

Insertar `<div class="tear">` + `<section id="…">` en la posición correcta, **renumerar** los
`tn`, `sNN.*` y los `SHEET NN/M` de las secciones posteriores (y sus claves en el dict), revisar
que la alternancia `alt-blue` siga par/impar, y actualizar el nav si corresponde (máx. 8 links).

### Agregar capturas de producto (cuando Ryguasu tenga pantallas)

Crear `assets/ryguasu/` (jpg, kebab-case en español, `loading="lazy"`, `alt` en inglés con
`data-i18n-attr`), y una sección tipo `#pantallas` de fil-grama con `.shots`/`.fig` — el CSS de
`.shots/.fig` hay que copiarlo de fil-grama-report.html porque ryguasu.html no lo incluye.
Lo mismo si se quiere un tour interactivo: copiar `.tour-grid`/`.tcard`/modal + su JS.

---

## 9. Checklist de calidad antes de dar por terminado un cambio

- [ ] `node --check` pasa en todos los dict tocados.
- [ ] Claves HTML ↔ dict 1:1 (script de §5.2): 0 missing, 0 unused.
- [ ] Toggle 🌐 probado en la página tocada: textos, sellos, `<title>`, aria/alt, nav.
- [ ] Secciones alternan verde/`alt-blue`; `.tear` entre todas.
- [ ] `SHEET NN/M` coherentes (numerador y denominador).
- [ ] Ids de markers SVG únicos en la página; flechas con su `marker-end` correcto.
- [ ] Sin rutas absolutas locales, sin secretos, sin URLs internas del producto.
- [ ] Canonical y `og:url` apuntan al archivo correcto.
- [ ] Vista rápida en navegador a ~1200px y angosto (<860px): tiras, bandas, encuadre.
- [ ] Consola limpia (sin errores JS).

---

## 10. Preferencias del dueño del repo

- **No hacer commit/push sin que lo pida explícitamente.**
- Idioma de trabajo en conversación: español. Contenido del sitio: inglés primero, español en el
  dict.
- Los mensajes de commit no llevan `Co-Authored-By`.
- Ante conflicto entre lo que pide y lo que existe en el repo, preguntar antes de resolver.
- El foco del portfolio es **backend**: en contenido nuevo, priorizar arquitectura,
  infraestructura, decisiones y su porqué por sobre lo visual/frontend.
- Honestidad en el contenido: estados reales (sandbox, pendiente, en desarrollo), números
  reales, sin inflar. Es una marca de estas páginas (ver `#integraciones` de fil-grama).
