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
├── ryguasu.html                        Caso de estudio backend Ryguasu (fichas amenaza→defensa, ver §6.4)
├── emurv.html                          Caso de estudio EmuRV — emulador RISC-V de tesis (~700 líneas, ver §6.5)
├── assets/
│   ├── og-card.jpg                     Imagen OG compartida por todas las páginas (1200×630)
│   ├── i18n/
│   │   ├── core.js                     Motor i18n compartido (82 líneas) — ver §5
│   │   ├── index.dict.js               Diccionario de index.html
│   │   ├── experiencia.dict.js         Diccionario de experiencia-backend-plataforma.html
│   │   ├── fil-grama-report.dict.js    Diccionario de fil-grama-report.html (incluye SITE_SCREENS_I18N)
│   │   ├── ryguasu.dict.js             Diccionario de ryguasu.html
│   │   └── emurv.dict.js               Diccionario de emurv.html (292 claves)
│   ├── filgrama/                       Capturas reales de Fil-Grama (jpg)
│   │   └── diseno/                     Capturas de la fase de diseño (wireframes, hi-fi)
│   ├── ryguasu/
│   │   └── pos-almacen-san-roque-2x.png  Captura del POS (foto "adjunta con cinta" + lightbox)
│   └── emurv/
│       ├── emurv-demo.html             Demo interactiva embebida en iframe (~500 KB, bundle autocontenido)
│       └── *.jpg                       10 capturas de la app (temas y modales), montadas como "pantallas"
├── handoff/                            Handoff del rediseño de ryguasu.html (referencia visual + VOZ.md)
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

**Cada página puede tener su propia paleta dentro del mismo chasis.** `index.html` y
`ryguasu.html` usan la paleta base de abajo; `fil-grama-report.html` tiene la suya (papel frío
`#F4F7FB`, escritorio `#16222F`, acento azul `#1E66BC`, más Palatino y Gill Sans);
`emurv.html` mantiene el papel crema pero cambia el escritorio a `#2b2733`, la topbar a `#1c1926`
y suma el acento violeta `--acc:oklch(0.44 0.18 292)` con su banda `--acc-bar:rgba(96,64,196,.115)`.
Lo que **no** cambia nunca: la grilla de 26px, las tiras tractoras, las perforaciones, el
`jobhead`, los `.pgh`, el footer `END OF JOB`, la topbar y el i18n.

Variables `:root` de la paleta base (index, ryguasu):

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
  negativos `-54px` para sangrar a todo el ancho. En `emurv.html` la variante se llama
  **`section.alt-violet`** y usa `--acc-bar` (violeta): mismo mecanismo, otro color.
  **Convención: las secciones alternan — impares normales (verde), pares `alt-blue`/`alt-violet`.**
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

Componentes **exclusivos de `emurv.html`** (el "lenguaje de listado de máquina", ver §6.5):

| Clase | Qué es |
|---|---|
| `.listing` | Listado de ensamblado: grid `104px 104px 1fr` (dirección · palabra · fuente), `white-space:nowrap` y `min-width:680px` con `overflow-x:auto` — un listado no reacomoda líneas, scrollea. `.lrow.pc` = línea por ejecutarse (fondo violeta + barra izquierda); `.lrow.bp` = breakpoint (punto rojo con `::before`); `.lfoot` = pie con el resumen del ensamblado |
| `.regdump` | Volcado de registros: grid `120px 132px 132px 1fr`, `.rrow.on` + `.chg` para el que cambió en el último paso. Comparte `.lfoot` |
| `.mmap` | Mapa de memoria: grid `132px 148px 1fr`, direcciones en `--acc` |
| `.verd` | Tabla de veredicto de compliance: grid `1fr 84px 84px 92px 120px`, `.vr.tot` con doble regla arriba, marcas `.mk.ok` `[ PASS ]`/`[ MATCH ]` y `.mk.ex` `[ EXCL ]` |
| `.btab` | Tabla de benchmark: grid `1fr 108px×4`, `.me` resalta la columna de EmuRV |
| `.chart` | Marco del gráfico SVG de rendimiento (barras de rango en escala logarítmica) |
| `.diagbox` | Diagnóstico del ensamblador tal cual sale por stderr: marco rojo, `<pre>` preformateado |
| `.screen` + `.shot` + `.screens` | Captura montada como "pantalla oscura" sobre el papel: marco `#1e2227` con barra de título (`.sbar`, `.sdot`, `.sname`) y caption en papel debajo. `.shot.wide` ocupa las dos columnas |
| `.demowrap` + `.demobar` + `.dbtn` | Marco a sangre (`margin:0 -54px`) para el iframe de la demo interactiva, con barra oscura y botón "abrir a pantalla completa" |

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
**tres cards `.job`**: Fil-Grama [claves `s04.*`, stamp ámbar "In development"], Ryguasu
[claves `s04b.*`, stamp verde "Backend in production"] y EmuRV [claves `s04c.*`, stamp verde
"Compliance verified"]) → footer.

**Para registrar un proyecto nuevo:** agregar otra `.job` en `#proyectos-propios` (se apilan con
`margin-top:26px`) + claves `s04d.*` en `index.dict.js`, siguiendo el patrón de `s04c.*`, y sumar
el proyecto a `meta.ogDescription`/`meta.twitterDescription`, que enumeran los productos propios.

> Nota: `index.dict.js` arrastra una clave huérfana `s04.note` que el HTML ya no usa (viene de
> antes). Si aparece como "unused" en la validación de §5.2, es esperado.

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
decisiones técnicas**.

Rol declarado: backend e infraestructura de Enrique; frontend y diseño visual son de compañeros
de equipo sobre sus contratos de API. **No inventar autoría más allá de esto.**

**Rediseño 2026-07 (origen: `handoff/ryguasu-1d.html`, diseñado en Claude Design).** El formato
es "informe de amenazas": en vez de hojas temáticas, **7 fichas amenaza→defensa→verificación**
(`.ficha`, sin `.tear` entre ellas), cada una con la pregunta incómoda como `h3`, dos columnas
`.fcols` (amenaza/defensa), un anexo opcional (terminal `.term`, demo SQL `.demo`, chips
`.chips`, simulacro `.drill`) y un pie `.ffoot` con sello `.fstamp` + texto de verificación
`.fverif` (siempre con "**Mi parte:**"). **El copy es definitivo y sigue `handoff/VOZ.md`**
(primera persona real, sin patrones de escritura-IA): no reescribirlo; texto nuevo debe seguir
esas reglas.

Estructura (`RYGUASU.PRT`):

| id / bloque | alt-blue | Contenido |
|---|---|---|
| banner | — | JOB RYGUASU · gallina SVG + stamp verde "Backend en producción" · factline: 62 endpoints, 36 tablas (25 RLS), 170+ tests, 49 decisiones |
| `#producto` (HOJA 00) | no | Qué es el producto; foto del POS "adjunta con cinta" (`assets/ryguasu/pos-almacen-san-roque-2x.png`) que abre **lightbox** al click |
| `#preguntas` (intro) | no | "Siete maneras de romperlo" — presenta las fichas |
| Fichas 01–07 | no | 01 aislamiento (demo SQL **interactiva**: botón quita/restaura contexto de tenant → "0 filas") · 02 concurrencia (term v1 FAIL/v2 OK) · 03 offline (chips outbox→sync_conflict) · 04 moneda/historia · 05 secrets de arranque · 06 backup (term v1/v2/harness) · 07 dead man's switch + drill de restore |
| `#construccion` | sí | Por qué existen las defensas: SDD 35 specs, 49 DECs, CI, humano en el loop (`.build` 2 col) |
| `#estado` | no | 3 columnas `.status`: [x] implementado / [~] especificado / [ ] futuro — honestidad sobre qué corre de verdad |
| `#stack` | no | `.stackline` (una fila tipo factline) |

Nav de la topbar: 5 links (producto, preguntas, construccion, estado, stack). Interacciones en
el script al pie: snap a grilla (variante con `[data-snap]` para bloques anidados del hero y la
foto), toggle de contexto (usa `SiteI18n.t("f01.btnRemove"/"f01.btnRestore")` — clave
`f01.btnRestore` solo se usa desde JS, el validador de §5.2 la lista como "unused": es esperado),
lightbox (click/Enter abre, click/Escape cierra) y hook `SiteI18nRender` que re-etiqueta el botón
y re-encaja la grilla al cambiar idioma. Esta página ya no tiene diagramas SVG ni usa
`.ls/.box/.chk/.logrow/.inv`.

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

### 6.5 `emurv.html` — Caso de estudio EmuRV (trabajo final de grado)

Proyecto propio de tesis (repo del producto: `~/Documents/UNI/Tesis/EmuRV-TFG`, **privado** mientras
la tesis está en evaluación). **Entorno educativo de escritorio para ensamblador RISC-V**
(RV32IMAFDC, conmutable a RV64IM), hecho para reemplazar a emu8086 en Microprocesadores de la FIUNI.
Rust + Tauri 2 sobre Unicorn Engine, frontend TypeScript + CodeMirror 6. Autoría **completa** de
Enrique (núcleo, ensamblador, dispositivos, CLI, servidor GDB, frontend y suites de pruebas).

**Identidad propia (decisión del autor, julio 2026):** "papel + lenguaje de listado de máquina" en
dosis alta. Mantiene el chasis del sitio y le suma: bandas **violeta** en las hojas pares
(`.alt-violet`), escritorio y topbar violáceos, el **wordmark real bi-tono** en el hero (SVG inline,
"Emu" en `--acc` y "RV" en `--ink`), los componentes de salida de máquina de §3.5 y las capturas
montadas como **pantallas oscuras** sobre el papel. El encaje conceptual: los listados de
ensamblador se imprimían literalmente en este papel.

Estructura (`EMURV.PRT`, 9 hojas):

| id / bloque | alt-violet | Contenido |
|---|---|---|
| banner | — | JOB EMURV · wordmark + sello violeta "Verificado contra el modelo oficial" · factline: 78/78, 72/72, 440 tests, 28–120× RARS |

> **Regla de jerga (decisión del autor):** arriba de la hoja 06 no se nombra a **Sail** ni se habla
> de *firmas*: el hero, la factline, la tarjeta del home y los metas dicen "modelo (de referencia)
> oficial de RISC-V" y "resultados idénticos". El término exacto aparece recién en `s06.lede`, donde
> se explica qué es, y de ahí en adelante (`s06.v2cap`, `s09.h5.li4`). Si agregás contenido nuevo,
> respetá esa frontera.
| `#origen` (01) | no | emu8086 vs RISC-V; el hueco de mercado (RARS/Ripes/CPUlator); "leé esta página como backend" |
| `#demo` (02) | sí | **Demo interactiva** en iframe a sangre (`assets/emurv/emurv-demo.html`) |
| `#maquina` (03) | no | Tauri/Rust/Unicorn, diagrama SVG, `source_map`, el bug del `loop: j loop` y el tramo adaptativo · `.listing` + `.regdump` |
| `#ensamblador` (04) | sí | Keystone no tiene RISC-V → ensamblador propio · `.diagbox` con errores reales · oráculo contra GNU `as` · ELF in/out |
| `#dispositivos` (05) | no | `.mmap` (mapa de memoria RARS-compatible) · polling y el límite de Unicorn · W^X · Tetris como prueba de aceptación |
| `#validacion` (06) | sí | **La hoja principal:** dos `.verd` (riscv-tests 78/78 · RISCOF vs Sail 72/72), exclusiones con causa raíz, el hallazgo `fmin` de Unicorn, y el error de conteo de tests que yo mismo arrastraba |
| `#rendimiento` (07) | no | `.chart` (barras de rango, escala log) + `.btab` · lectura honesta · el episodio de las tres cifras con n=1 · limitaciones declaradas |
| `#interfaz` (08) | sí | 10 capturas en `.screens` · temas y contraste AA por test · la decisión de idioma declarada |
| `#estado` (09) | no | `.inv` (stack) + `.status` de 3 columnas: hecho / construido-sin-verificar / falta |

Nav de la topbar: 8 links (demo, maquina, ensamblador, dispositivos, validacion, rendimiento,
interfaz, estado). El script al pie es sólo el snap a grilla 26px + el hook `SiteI18nRender` que lo
vuelve a correr al cambiar de idioma. **Un solo SVG con markers** (`fl`), más el SVG del gráfico
(sin markers).

**Sobre la demo (`assets/emurv/emurv-demo.html`):** es un bundle autocontenido (~500 KB) hecho en
Claude Design; un intérprete JS reconstruye la interfaz y ejecuta **sólo los tres programas de las
pestañas** (hola-mundo, suma-interactiva, sprites). **El editor es de solo lectura** y el resto del
catálogo aparece marcado «solo en la app»; la demo pide ≥1000 px de ancho. La hoja 02 dice todo eso
explícitamente — **no prometer más que eso** (verificado en el navegador: ensambla y da
`a0=0x10010000`, `a7=4` tras dos pasos, igual que el `.regdump` de la hoja 03).

**Hechos verdaderos de EmuRV** (verificados contra `EmuRV-TFG/docs/`, corte 2026-07-25 — no inflar):

- RV32IMAFDC + RV64IM conmutable; ensamblador propio (Keystone no soporta RISC-V: verificado en los
  headers de 0.9.2, el enum `ks_arch` no tiene `KS_ARCH_RISCV`); desensamblador propio; ELF32
  export/import; variante `--reubicable`.
- **riscv-tests oficiales (RT-2, 2026-07-22): 82 vendorizados, 78 ejecutables, 78 pasan, 0 fallan.**
  4 exclusiones con causa raíz: `fence_i` y `rvc` (W^X), `fmin` ×2 (defecto de Unicorn 2.1.5, que
  sigue sobre QEMU 5.0.1 — semántica IEEE 754-2008; QEMU lo arregló en la 6.0).
- **RISCOF vs Sail 0.13 (RT-3, 2026-07-22): 74 tests, 72 match, 2 mismatch por diseño**
  (`cebreak-01` porque `ebreak` es del depurador, `Fencei` por W^X). I 38/38, M 8/8, C 26/27,
  Zifencei 0/1.
- **Benchmark (RT-4, 2026-07-22, Apple M4 Pro, mediana de 5):** aritmética 718,4 · memoria 257,1 ·
  llamadas 299,4 · mixto 160,2 M instr/s. QEMU 3289,5/4342,1/1090,5/4805,8 · Spike
  881,8/992,0/982,1/992,0 · RARS 6,0/5,6/5,8/5,7. → 28–120× RARS, 81 % de Spike en ALU pura.
- **Tetris:** mediana 811 FPS, rango 799–838, n=5 (remedido 2026-07-25) contra ~30 Hz que consume la
  UI → ~27× de margen. Las tres cifras históricas (835/797/832) eran corridas con n=1: no hubo
  regresión, hubo una métrica mal reportada.
- **Tests: 271 Rust + 50 CLI + 119 UI = 440**, cero fallos, clippy limpio (+8 `#[ignore]`). El «10
  CLI» que circulaba estaba mal: contaba un solo binario.
- Mapa de memoria RARS-compatible: `.text` 0x00400000 (R+X), `.data` 0x10010000, heap 0x10040000,
  sp 0x7FFFFFF0, framebuffer 0x90000000, paleta 0x90020000, vsync 0x90030000, teclado 0xFFFF0000/4.
- CLI headless con exit codes semánticos, servidor GDB (protocolo gdbserver), CI GitHub Actions
  4 jobs en verde con compuerta de peso del bundle, 32 puntos de roadmap, 10 lecciones, 15 ejemplos,
  5 temas + tema del usuario con contraste AA verificado por test.
- **Pendiente de verdad:** el estudio de usabilidad SUS con estudiantes (materiales listos, falta
  aval del tutor y participantes), el instalador Windows en máquina real, Linux, interrupciones de
  hardware (CLINT/PLIC — Unicorn no las expone), CoreMark, firma/notarización.

**Qué NO exponer:** código fuente del repo, y nada que contradiga el estado real. La página declara
que el repo es privado y que cada cifra sale de un documento de resultados con su fecha y condición
de medición.

---

## 7. Diagramas SVG (receta para agregar más)

Los diagramas son **SVG inline** dentro de `<div class="panel">`, dibujados a mano con cajas y
flechas. Referencias: 3 en fil-grama (`#arquitectura`) y 1 en emurv (`#maquina`, markers `fl`).
(ryguasu.html tuvo 2 hasta el rediseño de 2026-07; la versión actual no lleva diagramas.)

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
