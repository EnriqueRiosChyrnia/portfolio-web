# Animación de inicio de EmuRV

Hecho verificado · confianza alta: Enrique eligió la opción A / Paso y pidió una animación del isotipo o imagotipo con el crédito «Creado por Enrique Emmanuel Rios Chyrnia». Esta entrega está en la misma rama del portafolio, `codex/portfolio-trabajo-20261109`.

Inferencia · confianza moderada: se interpretó «cuando se ejecuta el programa» como abrir EmuRV. La propuesta no interrumpe cada ejecución de un programa en ensamblador. Esta interpretación se comunicó al comenzar el trabajo.

## Verla

`http://127.0.0.1:8088/handoff/emurv-marca-20261112/inicio/`

El reproductor permite repetir, pausar, recorrer cuatro momentos y elegir fondo oscuro o papel. «Simular apertura» abre una pantalla de inicio sin controles de edición y la cierra al terminar. Se puede omitir con el botón o Escape; el foco vuelve al control que abrió la simulación.

## Tres alternativas · 13/11/2026

Hecho verificado · confianza alta: a pedido de Enrique se sumaron dos alternativas sobre el mismo logo A y crédito. Las tres se eligen directamente sobre el reproductor; la variante, el fondo y el momento de revisión quedan en la URL.

| Alternativa | Movimiento de entrada | Enlace |
|---|---|---|
| 1 · Trazo | Contornos, relleno y unión de las letras; primera propuesta | `?variant=trazo` |
| 2 · Ensamble | Tres secciones de la R y la V llegan de distintas direcciones, con un pequeño asentamiento; las letras del nombre se reúnen | `?variant=ensamble` |
| 3 · Cursor | Un cursor revela el monograma de izquierda a derecha y otro barrido descubre el nombre | `?variant=cursor` |

Las tres duran 5,4 s, conservan fondo oscuro/papel, composición móvil, omisión y movimiento reducido. Su estado final oscuro coincide píxel por píxel. La primera animación se comparó antes/después en 0, 600, 1950, 2900 y 5400 ms: los cinco renders coinciden. No se sustituyeron sus archivos GIF/MP4.

Los nuevos archivos son `animacion-ensamble.gif/.mp4`, `animacion-cursor.gif/.mp4`, `secuencia-ensamble.png` y `secuencia-cursor.png`. Los cuadros de revisión se guardan en `pruebas/ensamble/` y `pruebas/cursor/`.

Hecho verificado · confianza alta: se probaron selección, fases, enlaces de descarga, persistencia de Cursor al recargar, fondo papel, omisión y movimiento reducido. La simulación recibió las cuatro piezas de Ensamble y no produjo IDs duplicados. El comparador se revisó a 390 y 1200 px CSS, sin desbordes horizontales y sin errores de consola en los recorridos probados. Capturas: `pruebas/comparador-movil-20261113.jpg` y `pruebas/comparador-escritorio-20261113.jpg`.

La guía [sonido-elevenlabs.md](sonido-elevenlabs.md) contiene un prompt por variante, tres efectos separados opcionales y parámetros de SFX v3 verificados contra documentación oficial el 13/11/2026. Cada prompt incluye su duración y cumple el límite de 450 caracteres indicado por la guía de producto. Se preparó antes de recibir los audios; su incorporación se registra a continuación.

## Audios incorporados y Ensamble preferida ·13/11/2026

Hecho verificado · confianza alta: Enrique indicó que los audios estaban en Descargas y que, por el momento, prefería Ensamble. Confirmó expresamente este orden de archivos:

| Variante | MP3 recibido | Copia local |
|---|---|---|
| Trazo | `Duration_5.4_seconds_#1-1794567189225.mp3` | `audio/trazo.mp3` |
| Ensamble | `Duration_5.4_seconds_#4-1794567225251.mp3` | `audio/ensamble.mp3` |
| Cursor | `Duration_5.4_seconds_#3-1794567256312.mp3` | `audio/cursor.mp3` |

Se copiaron los tres archivos sin modificar sus bytes ni mover los originales. Son MP3 estéreo a 48 kHz, de 5,4 segundos. Los nombres de origen y hashes SHA-256 están en `audio/origen.json`. Los metadatos no identifican el modelo usado para generarlos; la guía de SFX v3 es la recomendación previa, no una verificación del modelo efectivo de los MP3.

Ensamble es la selección predeterminada cuando la URL no indica otra variante y se marca «Preferida por ahora». Las otras opciones siguen disponibles. El reproductor incorpora sonido, volumen regulable y enlaces al MP3 original y al MP4 con audio de cada opción.

La revisión comienza detenida con el logo y el crédito visibles. Repetir, Reproducir y Simular apertura inician el audio mediante una acción del usuario. La animación usa el tiempo del audio mientras este está activo. Pausar, buscar un punto, omitir, cambiar de variante, reducir movimiento o salir de la simulación coordina la pista correspondiente. La simulación pausa el reproductor de fondo para evitar superposición. Si el navegador bloquea o falla el audio, se informa en el estado y la animación puede continuar.

Opinión · confianza moderada: se dejó un volumen inicial de 65 %, ajustable. No se normalizó ni se cambió la velocidad de los MP3 originales. Los nuevos MP4 usan el mismo nivel, con video H.264 conservado y audio AAC estéreo; los 40 ms adicionales del contenedor visual quedan al final, sin acelerar la pista.

Archivos nuevos: `audio.js`, `audio/`, `animacion-emurv-con-sonido.mp4`, `animacion-ensamble-con-sonido.mp4` y `animacion-cursor-con-sonido.mp4`. Las exportaciones sin sonido siguen conservadas. Los GIF no admiten audio. Para reconstruir los videos con sonido después de exportar las animaciones, ejecutar `python3 handoff/emurv-marca-20261112/fuentes/mezclar-inicio.py` desde la raíz del portafolio.

La integración continúa dentro de la propuesta local. La aplicación de escritorio y el portafolio publicado no se modificaron.

Hecho verificado · confianza alta: se probaron reproducción, pausa conjunta, búsqueda a 3,05 s, silencio, volumen, cambio a la pista de Cursor y detención por movimiento reducido. En una muestra de reproducción se observaron 1,533 s de audio frente a 1,530 s en el deslizador; es una comprobación puntual, no una garantía para todas las plataformas. La simulación mantuvo una sola pista activa; Escape retiró su elemento de audio, detuvo el sonido y devolvió el foco. Al completar la secuencia quedaron 5,4 s en la vista y el audio detenido.

La entrada sin variante selecciona Ensamble y no reproduce sonido automáticamente. Se revisó a 390 y 1200 px CSS, sin desborde horizontal ni errores de consola en los recorridos probados. Capturas: `pruebas/audio-movil-20261113.jpg` y `pruebas/audio-escritorio-20261113.jpg`. Se versionaron las referencias JS/CSS de esta entrega para que la caché del navegador no mezcle el reproductor anterior con la interfaz de audio.

El SVG y su secuencia son funcionales en el navegador. Todavía no están conectados al arranque de Tauri ni se modificó la aplicación de escritorio. No se publicó la propuesta ni se cambió el CV aprobado.

## Movimiento de la primera propuesta

Opinión · confianza alta: conviene construir la entrada desde los contornos del monograma elegido y permitir omitirla desde el comienzo. La duración propuesta es 5,4 segundos. Una versión más breve para aperturas posteriores puede conservar la resolución del logo sin repetir todo el trazado; todavía no se implementó esa política.

| Tiempo aproximado | Movimiento |
|---|---|
| 0–0,85 s | Aparecen referencias de alineación y comienza el contorno de la R |
| 0,85–1,9 s | El relleno de la R se revela desde abajo |
| 1,04–2,22 s | Se traza la diagonal de la V y se une al monograma |
| 1,95–2,9 s | El símbolo reduce su tamaño y se acomoda arriba; una luz breve recorre el contorno |
| 2,2–3,27 s | Entran las cinco letras de EmuRV, escalonadas |
| 3,3–4,15 s | Aparecen «Creado por» y el nombre completo |
| 4,15–5,4 s | Se mantiene el estado final para leerlo |

Los trazos de construcción desaparecen al asentarse el logo. Se conservan las proporciones de A; en fondo oscuro el negro del monograma se sustituye por el crema para mantenerlo visible. El púrpura se conserva en ambas superficies. La pista se incorporó en la etapa de audio documentada arriba.

La variante móvil usa una composición vertical y amplía el crédito. La preferencia `prefers-reduced-motion` muestra directamente el estado final, sin reproducir la secuencia. La revisión tiene además un control manual para probarlo. No hay porcentajes de carga ni estados de inicio inventados: es una animación de marca, independiente de la disponibilidad real del backend.

## Archivos

- `scene.js`: tiempo, composición y renderizado SVG. Es la fuente común del reproductor y los archivos exportados.
- `assets.js`: contornos de A y del crédito, generados desde los SVG aprobados y la fuente Instrument Sans con licencia OFL.
- `player.js`: reproducción con `requestAnimationFrame`, pausa, salto de tiempo, omisión, cambio de tema y liberación de listeners/observadores.
- `index.html`, `inicio.css`, `review.js`: interfaz de revisión y simulación de apertura.
- `animacion-emurv.mp4`: exportación 960 × 608, 25 cuadros por segundo. Incluye ambos extremos del intervalo y dura 5,44 segundos.
- `animacion-emurv.gif`: vista animada 720 × 456, en bucle para comparación. La pantalla de inicio interactiva se reproduce una vez.
- `secuencia.png`: seis momentos de la animación.
- `pruebas/`: cuadros SVG/PNG y capturas de la revisión en navegador.

La escena no importa código del repositorio privado de la aplicación. El reproductor no necesita librerías, fuentes de red, servicios externos ni un video para mostrar la animación. Los créditos también se dibujan como contornos y el SVG expone el texto completo mediante su nombre accesible.

## Comprobaciones

Hecho verificado · confianza alta:

- Se revisaron en el navegador las cuatro fases y el cambio a fondo papel; el crédito llega a opacidad completa.
- El control manual de movimiento reducido deja el estado final incluso al intentar repetir la secuencia.
- La simulación cierra al terminar y se comprobó también el cierre con Escape y la devolución de foco.
- El deslizador funciona con teclado: Home vuelve a 0 y End llega a 5,4 segundos.
- La pausa mantuvo el tiempo en 1,5 segundos durante una interacción posterior; la reproducción vuelve a comenzar con Repetir.
- Comparador revisado a 1200 y 390 píxeles CSS, sin desbordes horizontales. El nombre completo queda visible en la composición móvil. Capturas: `pruebas/navegador-oscuro.jpg` y `pruebas/navegador-movil.jpg`.
- Sin errores de consola en las interacciones revisadas; la reproducción normal llegó por sí sola al estado Final. Comprobación sintáctica de los módulos JavaScript y validación de enlaces locales completas.
- Los nodos SVG se actualizan durante la reproducción; no se reconstruye todo el SVG en cada cuadro. El reloj se cancela al pausar o terminar. No se afirma una tasa de cuadros constante ni se ha perfilado en equipos Windows/Linux o en el WebView nativo.
- Se revisó visualmente la composición de escritorio, la variante vertical y una lámina de seis momentos. La exportación final usa CairoSVG para respetar los recortes del relleno; se descartó el primer render con MuPDF porque ignoraba `clipPath`.

La integración real deberá coordinar la salida de esta pantalla con el estado listo de la app y dejar pasar los errores de arranque. El crédito no se debe usar para ocultar un error ni para simular progreso. No se ejecutaron suites de Rust ni se compiló Tauri, ya que su repositorio no cambió.

## Reconstruir las exportaciones

Desde la raíz del portafolio:

```sh
python3 handoff/emurv-marca-20261112/fuentes/preparar-inicio.py
python3 handoff/emurv-marca-20261112/fuentes/exportar-inicio.py
```

La preparación necesita fontTools y la fuente Instrument Sans de Canvas Design. La exportación necesita Node, Python con CairoSVG y Pillow, la biblioteca Cairo y FFmpeg. Para esta entrega se preparó CairoSVG 2.9.1 en un entorno temporal, sin instalarlo globalmente. En esta Mac se ejecutó con:

```sh
DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib /private/tmp/emurv-motion-render/bin/python handoff/emurv-marca-20261112/fuentes/exportar-inicio.py
```

Ese entorno temporal se puede recrear; no es una dependencia del reproductor ni de la aplicación.

Para exportar una alternativa, agregar `--variant ensamble` o `--variant cursor` al comando de exportación. Sin ese argumento se reconstruye Trazo.

## Ensamble mecánico por piezas ·13/11/2026

Hecho verificado · confianza alta: se importaron los cuatro efectos de Descargas, asociados por sus duraciones únicas de 0,7/0,3/0,5/0,9 s a desplazamiento, encaje pequeño, encaje grande y cierre. Los originales se conservaron; copias en `audio/piezas/`. Se construyó una mezcla de 5,4 s con seis contactos en 0,85; 1,18; 1,51; 1,84; 2,17 y 2,50 s. Cada desplazamiento comienza 0,7 s antes del contacto; se reutilizan los encajes y se reserva el cierre para la última pieza. El montaje tiene fundidos cortos y limitación de pico. Los acentos se colocan en los contactos nominales; no se afirma que la percepción auditiva de cada transitorio haya sido validada por escucha.

Ensamble ahora utiliza cinco recortes diagonales de la R y la V, con movimiento recto y frenado sin rebote. Desde 2,6 s se resuelve el símbolo completo para eliminar las juntas de rasterizado. El crédito se conserva. `scene-base.js` mantiene las otras animaciones y la construcción anterior; `scene.js` añade la variante mecánica. Se conservaron los MP4 anteriores con sufijo `-anterior`.

Fuentes reproducibles: `fuentes/montar-industrial.py` prepara la mezcla a partir de las copias, `fuentes/exportar-inicio.py --variant ensamble` exporta los cuadros. La nueva pista es `audio/ensamble-industrial.wav`. Al reconstruir el MP4 con sonido debe utilizarse esta pista, no el antiguo audio completo de Ensamble.

En navegador se comprobaron seis piezas y su contenedor, reproducción de la nueva pista, pausa conjunta y ausencia de errores de consola. La muestra observada fue audio 1,487 s frente a deslizador 1,480 s. Captura: `pruebas/industrial-20261113.jpg`. Sigue como revisión local, sin integración ni instalación en Tauri.

## Encastre de la V ·13/11/2026

Hecho verificado · confianza alta: se agregó acercamiento guiado de la V, alineación detenida entre 2,28 y 2,39 s y presión corta hasta el contacto de 2,50 s. Un perfil dentado transitorio y pequeñas marcas de presión señalan la unión; desaparecen antes del estado final. Se conserva el sonido de cierre ubicado en 2,50 s y el logo completo. Se verificaron por código la posición constante durante la pausa y desplazamiento cero al contacto; en navegador el perfil aparece, la secuencia termina y no registra errores de consola. Captura en `pruebas/encastre-20261113.jpg`. GIF y MP4 regenerados, sin publicar ni modificar Tauri.
