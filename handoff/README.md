# Handoff — Página Ryguasu (rediseño "greenbar")

Fuente de verdad visual: `ryguasu-1d.html` (abrir en un navegador; autocontenido salvo la fuente de Google y la captura PNG en esta carpeta).

## Qué es
Rediseño completo de `ryguasu.html` del portafolio, estética "informe de impresora greenbar":
papel continuo perforado sobre fondo oscuro, IBM Plex Mono, grilla de 26px alineada a las bandas verdes,
7 fichas amenaza→defensa→verificación, sello con la gallina, sección estado (hecho/especificado/futuro), stack y contacto.

## Interacciones (implementadas en el script al pie de ryguasu-1d.html)
1. Ficha 01: botón "Quitar contexto de tenant" — la tabla pasa a "0 filas" en rojo; togglea de vuelta.
2. Foto del POS anexada con cinta adhesiva; click abre lightbox oscuro; click cierra.
3. Snap: cada bloque recibe padding-bottom para que su borde inferior caiga en múltiplos de 26px (la grilla del papel). Recalcular en resize y tras cargar fuentes.

## Reglas
- El copy ES es definitivo — NO reescribir (ver VOZ.md; aplica también a la traducción EN).
- Integrar al sistema i18n del repo (EN/ES) como las demás páginas; este HTML es la versión ES.
- Trasladar los estilos inline a las convenciones del repo si aplica, sin cambiar el resultado visual.
- No tocar index.html, experiencia-backend-plataforma.html ni fil-grama-report.html.
- El "🌐 ES" y "← Home" del topbar son placeholders: conectarlos al switcher i18n y al home reales.
