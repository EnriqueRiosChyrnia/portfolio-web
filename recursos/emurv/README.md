# EmuRV · Animaciones, marca y sonido

Hecho verificado · confianza alta: paquete guardado en el proyecto del CV el 13/11/2026. La versión elegida es **Ensamble mecánico con encastre de la V**, aprobada por Enrique. El crédito es «Creado por Enrique Emmanuel Rios Chyrnia».

- `animacion-elegida/`: MP4 con sonido, MP4 sin sonido y GIF. El GIF es solo una vista previa y no contiene audio.
- `alternativas/`: Trazo, Cursor y Ensamble previo, cada uno con y sin sonido. Se conservaron como antecedentes.
- `sonidos/efectos/`: los cuatro efectos individuales con nombres descriptivos y duración en milisegundos.
- `sonidos/mezclas/`: montaje mecánico final en WAV.
- `sonidos/alternativas/`: pistas completas de las propuestas anteriores.
- `marca/`: isotipo, imagotipo y logotipo SVG de la opción A.
- `manifest.json`: origen de cada archivo y hash para comprobar integridad.

Los archivos se copiaron sin alterar sus bytes; el renombrado no reencodifica los efectos. Los duplicados exactos de Descargas se movieron a la Papelera recuperable tras verificar sus hashes. Los MP4 duran 5,44 s y la mezcla 5,4 s.

Las fuentes editables, el reproductor y los scripts de reconstrucción permanecen en `../../handoff/emurv-marca-20261112/`. Esta carpeta reúne las exportaciones para reutilizarlas. El portafolio usa estos recursos en `emurv.html` y en la demo de navegador, en la rama de revisión `codex/portfolio-trabajo-20261109`. La aplicación de tesis incorpora una copia completa en su rama `dev`, dentro de `marca/emurv/`, y reproduce Ensamble mecánico al iniciar. La rama `dev` del CV espera la aprobación de Enrique.

El icono de escritorio nuevo está en `marca/emurv-icono-app.svg`. El script `mezclar-inicio.py` selecciona el WAV industrial vigente para Ensamble; las pistas previas se conservan como alternativas.
