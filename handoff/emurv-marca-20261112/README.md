# Propuestas de marca de EmuRV · 12/11/2026

Hecho verificado · confianza alta: esta entrega vive en la rama local `codex/portfolio-trabajo-20261109`. Incluye cuatro conceptos de marca, un comparador y una portada ilustrada. El CV aprobado, `emurv.html`, sus traducciones y la aplicación no se modificaron.

## Abrir la revisión

Con el servidor estático del portafolio en el puerto 8088, abrir:

`http://127.0.0.1:8088/handoff/emurv-marca-20261112/`

El comparador permite elegir A, B, C o D, cambiar entre color, una tinta y fondo oscuro, y probar cuatro frases. Conserva la selección en la URL y en almacenamiento local. La vista del caso carga el HTML existente en un iframe y sustituye temporalmente su logo y su sello. Las frases de esta revisión están en español; la página pública conserva sus diccionarios EN/ES.

## Archivos

- `comparacion.png`: lámina de las cuatro opciones en púrpura y negro.
- `comparacion-monocromo.png`: las mismas formas en una tinta.
- `simbolos/`: los cuatro símbolos en SVG.
- `logotipos/`: versiones con símbolo y nombre, y versiones con el nombre solo. Las letras son contornos vectoriales.
- `portada-ilustrada.png`: ejemplo de Canvas Design, 1600 × 900. Usa el logotipo anterior mientras se elige la dirección nueva. El registro del dibujo se representa en hexadecimal; el estado ilustrativo parte de a0 = 0.
- `brief.md`: contexto, hipótesis, ideas consideradas y alcance de la ronda.
- `criterio-visual.md`: dirección de composición aplicada con Canvas Design, redactada con la preferencia de Humanizer.
- `pruebas/`: auditorías estructurales, relaciones de contraste, lámina de tamaños y capturas del navegador. `v1/` conserva la primera iteración.
- `fuentes/`: scripts para reconstruir los SVG y las láminas, dos fuentes web locales y licencias tipográficas.

## Skills instaladas y aplicadas

Instaladas en `~/.codex/skills/`. Se verificó que las tres contienen su `SKILL.md`; el contexto automático de Codex podrá descubrirlas desde el siguiente turno. Se leyeron y aplicaron sus instrucciones en esta entrega.

| Skill | Fuente | Aplicación |
|---|---|---|
| Logo Design | https://github.com/kaankiziltug/logo-design-skill/tree/main/skills/logo-design | Brief, exploración, SVG, auditoría, pruebas de reducción y comparación |
| Brand Identity | https://github.com/rampstackco/claude-skills/tree/main/skills/brand-identity | Relación símbolo/nombre, paleta, contraste y prueba en la página |
| Canvas Design | https://github.com/anthropics/skills/tree/main/skills/canvas-design | Composición de la lámina y portada ilustrada |

La biblioteca de Logo Design se consultó para estudiar construcción y convenciones. Los ejemplos de terceros de `pruebas/preview.html` son referencias de comparación y conservan la titularidad de sus marcas; no forman parte de las propuestas de EmuRV.

## Decisiones de diseño

Opinión · confianza moderada: A es la recomendación inicial porque hace visible RV y comparte una diagonal entre ambas letras. B favorece una E simple con una celda activa. C se relaciona con la pantalla gráfica, con un carácter más lúdico. D prioriza la lectura del nombre y emplea letras construidas para esta exploración.

Opinión · confianza alta: «Ensamblador RISC-V, paso a paso» explica mejor el producto en la cabecera. Se ofrecen también «Entorno educativo RISC-V», «Programá en ensamblador RISC-V» y «Validado con pruebas de referencia». Esta ronda no modifica la evidencia técnica ni su alcance.

## Color y tipografía

Hecho verificado · confianza alta: los SVG usan #7A5FD8 y #262A20; la superficie principal es #F7F4E6. El púrpura de texto del comparador es #6041B5, una variante más oscura del mismo tono. Las relaciones calculadas son 4,27:1 para púrpura original sobre crema, 6,52:1 para púrpura de texto sobre crema y 13,27:1 para tinta sobre crema. El púrpura original se conserva en los logos; en texto pequeño sobre crema se utiliza la variante oscura. Cálculos completos en `pruebas/contraste.json`. Esto no equivale a una auditoría completa de accesibilidad del portafolio.

A usa Instrument Sans Bold en el nombre, B Bricolage Grotesque Bold y C Pixelify Sans Medium, convertidas a contornos. D usa letras geométricas propias. La interfaz de revisión y las láminas usan Instrument Sans e IBM Plex Mono. Son fuentes OFL incluidas en Canvas Design; sus licencias están en `fuentes/`. El logotipo actual de la portada ilustrada se reutiliza del propio portafolio.

## Comprobaciones realizadas

Hecho verificado · confianza alta:

- Dos pasadas de revisión de los símbolos: renderizado y observación de la primera iteración; corrección de ángulos y centrado en A/B y redibujo de C; nueva auditoría y revisión de las láminas finales. La auditoría no informa errores de estructura en los cuatro símbolos; C tiene más nodos por su cuadrícula. La puntuación del script es heurística, no una certificación de calidad de diseño.
- Se renderizaron y observaron la comparación en color y la portada. Se generaron además la comparación en una tinta y las pruebas de fondos/tamaños.
- Navegador: selección A/B/C/D actualiza el imagotipo del iframe; las cuatro frases actualizan el sello; los tres modos afectan las tarjetas. Se verificó que A y la primera frase se restauran tras recargar.
- Sin imágenes fallidas ni desborde horizontal en el comparador a 1091 px y 390 px de ancho CSS. Las capturas están en `pruebas/escritorio.jpg`, `pruebas/movil.jpg` y `pruebas/aplicacion.jpg`.
- Sin errores de consola en las interacciones revisadas. `node --check review.js` pasa.
- SVG de las propuestas sin texto vivo, imágenes incrustadas, filtros ni referencias externas. No se ejecutaron las suites del emulador porque su código no cambió.

La auditoría de los logotipos conserva advertencias por los ángulos de los glifos originales de Bricolage Grotesque en B; no se alteraron para ajustarlos a una cuadrícula geométrica. También señala la longitud de A/B y la precisión de las transformaciones tipográficas. Se incluyen símbolos separados; las versiones apiladas se prepararán para la opción elegida. La R dibujada de D recibió un último ajuste de diagonal a 60° y se regeneraron los SVG y las láminas.

Hecho verificado · confianza alta: Enrique eligió A / Paso el 12/11/2026 y pidió una animación de la marca, con «Creado por Enrique Emmanuel Rios Chyrnia» debajo. La animación y el reproductor están en `inicio/`; su alcance y comprobaciones se registran en `inicio/README.md`. Las otras propuestas se conservan como antecedentes. Todavía no se entrega un set definitivo de iconos ni una búsqueda de marcas registradas. La aplicación de escritorio y el caso público conservan su implementación anterior.

## Reconstrucción

Desde esta carpeta:

```sh
python3 fuentes/build.py --skill-root ~/.codex/skills
python3 fuentes/componer.py --skill-root ~/.codex/skills
```

Se necesitan Python, fontTools, Pillow y PyMuPDF. Los SVG se renderizaron con MuPDF, disponible en el entorno. El renderer Chrome del helper de Logo Design no terminó dentro del sandbox; se interrumpió y se usó MuPDF. La comprobación visual de la web se hizo en el navegador integrado.
