/*
 * Diccionario EN/ES de emurv.html.
 * El HTML se escribe en inglés (fallback); acá vive la versión española.
 * Toda clave usada en el HTML tiene que existir acá y viceversa.
 */
window.SiteI18n = window.SiteI18n || {};
window.SiteI18n.dict = {

  /* ---------- meta ---------- */
  "meta.title": {
    en: "EmuRV — RISC-V Emulator (Thesis) · Enrique Chyrnia",
    es: "EmuRV — Emulador RISC-V (tesis) · Enrique Chyrnia"
  },
  "meta.description": {
    en: "EmuRV: a RISC-V assembly teaching environment built in Rust + Tauri on Unicorn Engine. Own assembler, MMIO devices, GDB stub — and 78/78 official riscv-tests plus 72/72 results identical to RISC-V’s official reference model.",
    es: "EmuRV: entorno educativo de ensamblador RISC-V hecho en Rust + Tauri sobre Unicorn Engine. Ensamblador propio, dispositivos MMIO, servidor GDB — y 78/78 riscv-tests oficiales más 72/72 resultados idénticos al modelo de referencia oficial de RISC-V."
  },
  "meta.ogTitle": {
    en: "EmuRV — RISC-V Emulator (Thesis) · Enrique Chyrnia",
    es: "EmuRV — Emulador RISC-V (tesis) · Enrique Chyrnia"
  },
  "meta.ogDescription": {
    en: "A RISC-V teaching emulator held to a production correctness standard: 78/78 official riscv-tests, 72/72 results identical to RISC-V’s official model, 28–120× RARS. Rust, Tauri, Unicorn Engine. Runnable demo in the browser.",
    es: "Un emulador educativo RISC-V medido con la vara de corrección de uno de producción: 78/78 riscv-tests oficiales, 72/72 resultados idénticos al modelo oficial de RISC-V, 28–120× RARS. Rust, Tauri, Unicorn Engine. Demo ejecutable en el navegador."
  },
  "meta.ogImageAlt": {
    en: "Enrique Chyrnia — Backend · APIs & Integration · Cloud systems",
    es: "Enrique Chyrnia — Backend · APIs e integración · Sistemas en la nube"
  },
  "meta.ogLocale": { en: "en_US", es: "es_AR" },
  "meta.twitterTitle": {
    en: "EmuRV — RISC-V Emulator (Thesis) · Enrique Chyrnia",
    es: "EmuRV — Emulador RISC-V (tesis) · Enrique Chyrnia"
  },
  "meta.twitterDescription": {
    en: "A RISC-V teaching emulator held to a production correctness standard: 78/78 official riscv-tests, 72/72 results identical to RISC-V’s official model, 28–120× RARS. Rust, Tauri, Unicorn Engine. Runnable demo in the browser.",
    es: "Un emulador educativo RISC-V medido con la vara de corrección de uno de producción: 78/78 riscv-tests oficiales, 72/72 resultados idénticos al modelo oficial de RISC-V, 28–120× RARS. Rust, Tauri, Unicorn Engine. Demo ejecutable en el navegador."
  },

  /* ---------- topbar / nav ---------- */
  "topbar.tid": {
    en: 'EC · ENRIQUE CHYRNIA <i>/ EMURV.PRT</i>',
    es: 'EC · ENRIQUE CHYRNIA <i>/ EMURV.PRT</i>'
  },
  "topbar.home": { en: "← Home", es: "← Inicio" },
  "nav.demo": { en: "Demo", es: "Demo" },
  "nav.maquina": { en: "The machine", es: "La máquina" },
  "nav.ensamblador": { en: "Assembler", es: "Ensamblador" },
  "nav.dispositivos": { en: "Devices", es: "Dispositivos" },
  "nav.validacion": { en: "Validation", es: "Validación" },
  "nav.rendimiento": { en: "Performance", es: "Rendimiento" },
  "nav.interfaz": { en: "Interface", es: "Interfaz" },
  "nav.estado": { en: "Status", es: "Estado" },

  /* ---------- hero ---------- */
  "hero.type": {
    en: '<b>TYPE</b> THESIS PROTOTYPE · RISC-V EMULATOR',
    es: '<b>TIPO</b> PROTOTIPO DE TESIS · EMULADOR RISC-V'
  },
  "hero.dateLabel": { en: "DATE", es: "FECHA" },
  "hero.brole": {
    en: "Rust · Tauri 2 · Unicorn Engine · RV32IMAFDC / RV64IM",
    es: "Rust · Tauri 2 · Unicorn Engine · RV32IMAFDC / RV64IM"
  },
  "hero.blead": {
    en: 'EmuRV is a desktop environment for learning <b>RISC-V assembly</b>: write, assemble, run or step, and watch the registers and memory change. It exists to replace emu8086 in a computer engineering degree, and its error messages are written in the student\'s own language. The interesting part isn\'t the interface — it\'s that a teaching tool was held to <b class="hl">the correctness standard of a production emulator</b>: the official RISC-V suites and the formal golden model of the specification.',
    es: 'EmuRV es un entorno de escritorio para aprender <b>ensamblador RISC-V</b>: escribís, ensamblás, ejecutás o vas paso a paso, y mirás cómo cambian los registros y la memoria. Existe para reemplazar a emu8086 en una carrera de Ingeniería en Computación, y sus mensajes de error están escritos en el idioma del estudiante. Lo interesante no es la interfaz: es que a una herramienta educativa se la midió con <b class="hl">la vara de corrección de un emulador de producción</b> — las suites oficiales de RISC-V y el modelo formal dorado de la especificación.'
  },
  "hero.rolLabel": {
    en: "Role · Whole system (undergraduate thesis)",
    es: "Rol · Sistema completo (trabajo final de grado)"
  },
  "hero.rolP": {
    en: "Sole author: the Rust core, the assembler, the emulated devices, the CLI, the GDB stub, the frontend and the test suites. Built with AI assistance under one rule — every decision is recorded with its why, and nothing lands without me reviewing it. FIUNI, Computer Engineering.",
    es: "Autor único: el núcleo en Rust, el ensamblador, los dispositivos emulados, el CLI, el servidor GDB, el frontend y las suites de pruebas. Desarrollado con asistencia de IA bajo una sola regla: cada decisión queda registrada con su porqué, y nada entra sin que yo lo revise. FIUNI, Ingeniería en Computación."
  },
  "hero.stamp": { en: "Verified vs the official model", es: "Verificado contra el modelo oficial" },
  "hero.wmAria": { en: "EmuRV wordmark", es: "Logotipo de EmuRV" },
  "hero.fact1": { en: "official riscv-tests", es: "riscv-tests oficiales" },
  "hero.fact2": { en: "results identical to RISC-V’s official model", es: "resultados idénticos al modelo oficial de RISC-V" },
  "hero.fact3": { en: "automated tests", es: "pruebas automatizadas" },
  "hero.fact4": { en: "faster than RARS", es: "más rápido que RARS" },

  /* ---------- 01 origen ---------- */
  "s01.sheet": { en: "SHEET 01/09 · WHY IT EXISTS", es: "HOJA 01/09 · POR QUÉ EXISTE" },
  "s01.title": { en: "The 8086 in the room", es: "El 8086 en el aula" },
  "s01.p1": {
    en: 'In the Microprocessors course you learn assembly on <b>emu8086</b>: a 16-bit Intel 8086 emulator, Windows-only, from the DOS era. It does the job — until you try to write something that reacts to a keypress while it runs. My own experience with that wall is where this thesis starts.',
    es: 'En la materia Microprocesadores se aprende ensamblador con <b>emu8086</b>: un emulador del Intel 8086 de 16 bits, solo para Windows, de la época del DOS. Cumple — hasta que querés escribir algo que reaccione a una tecla mientras corre. Esa pared, que choqué yo mismo, es donde arranca esta tesis.'
  },
  "s01.p2": {
    en: 'RISC-V is the obvious replacement: an open specification, current, and the one the industry is actually adopting. But the RISC-V tools built for teaching are aging or closed — <b class="ink">RARS</b> is Java, <b class="ink">Ripes</b> is Qt, <b class="ink">CPUlator</b> is a closed web app. None of them is a modern native desktop application with real-time I/O. That gap is the whole reason EmuRV exists.',
    es: 'RISC-V es el reemplazo evidente: una especificación abierta, vigente, y la que la industria está adoptando de verdad. Pero las herramientas RISC-V pensadas para enseñar están envejecidas o cerradas — <b class="ink">RARS</b> es Java, <b class="ink">Ripes</b> es Qt, <b class="ink">CPUlator</b> es una web cerrada. Ninguna es una aplicación de escritorio nativa moderna con E/S en tiempo real. Ese hueco es toda la razón de ser de EmuRV.'
  },
  "s01.box1.bt": { en: "What it does, in one line", es: "Qué hace, en una línea" },
  "s01.box1.span": {
    en: 'Edit → assemble → run or step → watch registers and memory. Errors by <b>line and column</b>, in Spanish. A built-in 10-lesson course, 15 commented examples, and a graphics screen you can actually play a game on.',
    es: 'Editar → ensamblar → ejecutar o paso a paso → mirar registros y memoria. Errores por <b>línea y columna</b>, en español. Un curso de 10 lecciones adentro de la app, 15 ejemplos comentados y una pantalla gráfica donde de verdad se puede jugar.'
  },
  "s01.box2.bt": { en: "Read this page as backend", es: "Leé esta página como backend" },
  "s01.box2.span": {
    en: 'Almost nothing here is about the interface. What follows is an assembler I had to write from scratch, an execution loop that has to stay interruptible, a memory policy — and above all the only question that really matters for an emulator: <b>how do you know it\'s correct?</b>',
    es: 'Casi nada de acá es sobre la interfaz. Lo que sigue es un ensamblador que tuve que escribir desde cero, un lazo de ejecución que tiene que seguir siendo interrumpible, una política de memoria — y sobre todo la única pregunta que de verdad importa en un emulador: <b>¿cómo sabés que es correcto?</b>'
  },
  "s01.stamp": { en: "Thesis prototype · v0.1.0", es: "Prototipo de tesis · v0.1.0" },

  /* ---------- 02 demo ---------- */
  "s02.sheet": { en: "SHEET 02/09 · RUN IT HERE", es: "HOJA 02/09 · PROBALO ACÁ" },
  "s02.title": { en: "Try it right here", es: "Probalo acá mismo" },
  "s02.lede": {
    en: 'Below is a working EmuRV, running in your browser. It is <b>not a video and not a mockup</b>: press <b class="tacc">Ensamblar</b>, then <b class="tacc">Paso</b>, and watch the registers light up as they change. Click the editor\'s left margin to drop a breakpoint. Run «Suma interactiva» and type into the console when it asks, or open the «Sprites» tab to watch the 320×240 screen get drawn. Switch the theme, open the lessons, read the help.',
    es: 'Acá abajo hay un EmuRV funcionando, corriendo en tu navegador. <b>No es un video ni un mockup</b>: apretá <b class="tacc">Ensamblar</b>, después <b class="tacc">Paso</b>, y mirá cómo se encienden los registros al cambiar. Hacé click en el margen izquierdo del editor para poner un breakpoint. Corré «Suma interactiva» y escribí en la consola cuando te lo pida, o abrí la pestaña «Sprites» para ver cómo se dibuja la pantalla de 320×240. Cambiá el tema, abrí las lecciones, leé la ayuda.'
  },
  "s02.note": {
    en: 'Honest about what this is: a faithful in-browser reconstruction of the interface, with a JavaScript interpreter underneath that genuinely assembles and executes <b>the three programs on the tabs</b> — here the editor is read-only, and the rest of the catalogue is labelled «solo en la app». The desktop application runs on <b class="ink">Unicorn Engine</b> with the full RV32IMAFDC repertoire, your own programs, ELF import and export, a GDB stub and detachable windows. Everything on the sheets that follow describes the real one.',
    es: 'Honesto sobre qué es esto: una reconstrucción fiel en el navegador de la interfaz, con un intérprete en JavaScript abajo que de verdad ensambla y ejecuta <b>los tres programas de las pestañas</b> — acá el editor es de solo lectura, y el resto del catálogo aparece marcado «solo en la app». La aplicación de escritorio corre sobre <b class="ink">Unicorn Engine</b> con el repertorio RV32IMAFDC completo, tus propios programas, import y export de ELF, servidor GDB y ventanas desacoplables. Todo lo que viene en las hojas siguientes describe a la de verdad.'
  },
  "s02.barName": {
    en: "EmuRV — interactive demo · in-browser build",
    es: "EmuRV — demo interactiva · versión para navegador"
  },
  "s02.open": { en: "Open full screen ↗", es: "Abrir a pantalla completa ↗" },
  "s02.iframeTitle": { en: "EmuRV interactive demo", es: "Demo interactiva de EmuRV" },
  "s02.width": {
    en: "The demo needs a window at least 1000 px wide to fit the editor and the panels side by side. On a narrow screen it will say so — open it full screen, or come back from a laptop.",
    es: "La demo necesita una ventana de al menos 1000 px de ancho para mostrar el editor y los paneles al mismo tiempo. En una pantalla angosta te lo va a avisar: abrila a pantalla completa, o volvé desde una notebook."
  },

  /* ---------- 03 la máquina ---------- */
  "s03.sheet": { en: "SHEET 03/09 · THE MACHINE", es: "HOJA 03/09 · LA MÁQUINA" },
  "s03.title": { en: "What happens when you press Step", es: "Qué pasa cuando apretás Paso" },
  "s03.lede": {
    en: 'A Tauri 2 shell, a Rust core, and the CPU itself borrowed from <b>Unicorn Engine</b> — the emulation engine carved out of QEMU. The emulation lives in its own thread and never talks to the UI directly: the interface sends commands and receives events (<code>paused</code>, <code>output</code>, <code>registers_update</code>). Between the two sits the piece everything else depends on.',
    es: 'Una cáscara Tauri 2, un núcleo en Rust, y la CPU tomada prestada de <b>Unicorn Engine</b> — el motor de emulación que se recortó de QEMU. La emulación vive en su propio hilo y nunca le habla directo a la interfaz: la UI manda comandos y recibe eventos (<code>paused</code>, <code>output</code>, <code>registers_update</code>). Entre las dos está la pieza de la que depende todo lo demás.'
  },
  "diag1.aria": {
    en: "Architecture diagram: the editor sends the source to the assembler, which produces bytes and a source_map; the machine runs on Unicorn Engine and drives the MMIO devices",
    es: "Diagrama de arquitectura: el editor manda el fuente al ensamblador, que produce bytes y un source_map; la máquina corre sobre Unicorn Engine y maneja los dispositivos MMIO"
  },
  "diag1.lbl1": { en: "Frontend · TypeScript", es: "Frontend · TypeScript" },
  "diag1.lbl2": { en: "Core · Rust · own thread", es: "Núcleo · Rust · hilo propio" },
  "diag1.lbl3": { en: "MMIO devices", es: "Dispositivos MMIO" },
  "diag1.b1a": { en: "Editor", es: "Editor" },
  "diag1.b1b": { en: "CodeMirror 6 · breakpoints", es: "CodeMirror 6 · breakpoints" },
  "diag1.b2a": { en: "Own assembler", es: "Ensamblador propio" },
  "diag1.b2b": { en: "errors at line:column", es: "errores en línea:columna" },
  "diag1.b3a": { en: "Machine · Unicorn", es: "Máquina · Unicorn" },
  "diag1.b3b": { en: "adaptive slice ~40 ms", es: "tramo adaptativo ~40 ms" },
  "diag1.d1": { en: "Screen 320×240 · 0x9000_0000", es: "Pantalla 320×240 · 0x9000_0000" },
  "diag1.d2": { en: "Keyboard · 0xFFFF_0000", es: "Teclado · 0xFFFF_0000" },
  "diag1.d3": { en: "Console · ecall (a7)", es: "Consola · ecall (a7)" },
  "diag1.sm1": { en: "source_map · line ↔ address ↔ pc", es: "source_map · línea ↔ dirección ↔ pc" },
  "diag1.sm2": {
    en: "ties the editor's breakpoint to the program counter",
    es: "une el breakpoint del editor con el contador de programa"
  },
  "diag1.n1": {
    en: "The UI never touches the machine: it sends commands and receives events. That is what keeps «Stop» responsive while a program is running.",
    es: "La interfaz nunca toca la máquina: manda comandos y recibe eventos. Eso es lo que mantiene a «Detener» respondiendo mientras un programa corre."
  },
  "diag1.n2": {
    en: "Conceptual, simplified diagram — the real core also holds the ELF importer, the disassembler, the trap handler and the GDB stub.",
    es: "Diagrama conceptual y simplificado — el núcleo real también tiene el importador de ELF, el desensamblador, el manejo de traps y el servidor GDB."
  },
  "diag1.cap": {
    en: "One step of execution, from the editor line to the emulated device.",
    es: "Un paso de ejecución, de la línea del editor al dispositivo emulado."
  },
  "s03.h3a": { en: "The source_map, first", es: "Primero, el source_map" },
  "s03.p1": {
    en: 'Assembling doesn\'t just produce bytes: it produces a <b class="ink">bidirectional table between source line and address</b>. Every 32-bit word emitted knows which line it came from — including the ones expanded out of a pseudo-instruction — and every line knows its first word. That table is what lets a click on the editor\'s margin become a real breakpoint, and what highlights the line that is about to execute. It had to be designed first, because everything else hangs off it.',
    es: 'Ensamblar no produce solamente bytes: produce una <b class="ink">tabla bidireccional entre línea del fuente y dirección</b>. Cada palabra de 32 bits emitida sabe de qué línea salió — incluidas las que expandió una pseudo-instrucción — y cada línea sabe cuál es su primera palabra. Esa tabla es lo que convierte un click en el margen del editor en un breakpoint de verdad, y lo que resalta la línea por ejecutarse. Había que diseñarla primero, porque de ella cuelga todo lo demás.'
  },
  "s03.lh1": { en: "Address", es: "Dirección" },
  "s03.lh2": { en: "Word", es: "Palabra" },
  "s03.lh3": { en: "Source · hola-mundo.asm", es: "Fuente · hola-mundo.asm" },
  "s03.c1": { en: "← «la a0, saludo» expands into two", es: "← «la a0, saludo» expande en dos" },
  "s03.c2": { en: "← service 4: print string", es: "← servicio 4: imprimir cadena" },
  "s03.c3": { en: "← breakpoint on the editor line", es: "← breakpoint puesto en el editor" },
  "s03.lf1": {
    en: "Assembled: 24 bytes of code · ready to run",
    es: "Programa ensamblado: 24 bytes de código · listo para ejecutar"
  },
  "s03.lf2": { en: ".text base 0x00400000", es: "base de .text 0x00400000" },
  "s03.h3b": { en: "The bug that shaped the execution loop", es: "El bug que le dio forma al lazo de ejecución" },
  "s03.p2": {
    en: 'The first version called Unicorn once and let it run to the end, with a timeout to interrupt it. Then a student program of the form <code>loop: j loop</code> left the «Stop» button dead: <b class="ink">Unicorn\'s timeout does not cut a tight loop with no syscalls in it</b>. The instruction count does cut it, so execution was rewritten into bounded slices, checking for the stop signal between them.',
    es: 'La primera versión llamaba a Unicorn una vez y lo dejaba correr hasta el final, con un timeout para interrumpirlo. Después un programa de alumno del tipo <code>loop: j loop</code> dejó muerto al botón «Detener»: <b class="ink">el timeout de Unicorn no corta un bucle apretado sin syscalls adentro</b>. El límite por cantidad de instrucciones sí lo corta, así que la ejecución se reescribió en tramos acotados, chequeando la señal de detener entre uno y otro.'
  },
  "s03.p3": {
    en: 'A fixed slice of one million instructions cost speed. The current version makes the slice <b class="ink">adaptive</b>: it aims at roughly 40 ms of wall time per check, and drops back to the floor when the graphics screen is on, so frames keep their cadence. That single change moved the engine from 129–309 to <b class="tacc">160–718 M instructions per second</b> without losing any perceptible responsiveness. The register refresh was decoupled too — emitting one event per slice would have been about 500 events a second at the UI.',
    es: 'Un tramo fijo de un millón de instrucciones costaba velocidad. La versión actual hace el tramo <b class="ink">adaptativo</b>: apunta a unos 40 ms de tiempo de pared por chequeo, y vuelve al piso cuando la pantalla gráfica está activa, para que los cuadros mantengan su cadencia. Ese solo cambio llevó al motor de 129–309 a <b class="tacc">160–718 M de instrucciones por segundo</b> sin perder respuesta perceptible. El refresco de registros también quedó desacoplado: emitir un evento por tramo hubieran sido unos 500 eventos por segundo contra la interfaz.'
  },
  "s03.rh1": { en: "Register", es: "Registro" },
  "s03.rh2": { en: "Hexadecimal", es: "Hexadecimal" },
  "s03.rh3": { en: "Decimal", es: "Decimal" },
  "s03.rh4": { en: "Last step", es: "Último paso" },
  "s03.chg": { en: "◀ changed", es: "◀ cambió" },
  "s03.rf1": {
    en: "After two steps: «la a0, saludo» has landed. The changed register is highlighted — that flash is the whole didactic point.",
    es: "Después de dos pasos: «la a0, saludo» ya cayó. El registro que cambió queda resaltado — ese destello es todo el punto didáctico."
  },

  /* ---------- 04 ensamblador ---------- */
  "s04.sheet": { en: "SHEET 04/09 · THE ASSEMBLER", es: "HOJA 04/09 · EL ENSAMBLADOR" },
  "s04.title": {
    en: "The assembler I did not plan to write",
    es: "El ensamblador que no pensaba escribir"
  },
  "s04.lede": {
    en: 'The thesis brief closed the stack up front, and it said <b>Keystone</b> for assembly. Keystone\'s RISC-V support turned out not to be incomplete — it is <b class="tred">nonexistent</b>. I checked the 0.9.2 headers directly: the <code>ks_arch</code> enum has no <code>KS_ARCH_RISCV</code> entry at all, in any official release. That is a risk that fires on day one of a project, and the plan B was to write the assembler myself.',
    es: 'El brief de la tesis cerraba el stack de entrada, y decía <b>Keystone</b> para ensamblar. Resultó que el soporte RISC-V de Keystone no está incompleto: es <b class="tred">inexistente</b>. Lo verifiqué directo en los headers de la 0.9.2: el enum <code>ks_arch</code> no tiene ninguna entrada <code>KS_ARCH_RISCV</code>, en ninguna release oficial. Es el tipo de riesgo que estalla el día uno del proyecto, y el plan B fue escribir el ensamblador yo.'
  },
  "s04.p1": {
    en: 'Which turned out to be the better outcome anyway, for two reasons the brief could not have anticipated: <b class="ink">total control of the source_map</b>, and diagnostics written for a beginner rather than for a toolchain. A third-party assembler would have handed me an English error with a byte offset.',
    es: 'Que igual terminó siendo el mejor desenlace, por dos razones que el brief no podía anticipar: <b class="ink">control total del source_map</b> y diagnósticos escritos para un principiante y no para un toolchain. Un ensamblador de terceros me hubiera devuelto un error en inglés con un offset en bytes.'
  },
  "s04.dcap": { en: "stderr · emurv-cli asm hola.s", es: "stderr · emurv-cli asm hola.s" },
  "s04.dnote": {
    en: "Real output, not an illustration. Every diagnostic carries line, column and — where the mistake has a common cause — the fix. In the app the same errors appear underlined in the editor.",
    es: "Salida real, no una ilustración. Cada diagnóstico lleva línea, columna y —cuando el error tiene una causa habitual— la corrección. En la app esos mismos errores aparecen subrayados en el editor."
  },
  "s04.h3a": { en: "How I know the encodings are right", es: "Cómo sé que los encodings están bien" },
  "s04.p2": {
    en: 'An assembler that emits a wrong word produces a program that runs and gives the wrong answer — the worst possible failure for a teaching tool. So the encodings are not checked by hand: an <b class="ink">oracle test suite assembles the same source with GNU <code>as</code></b> and compares the emitted words one by one. That oracle covers floating point (F and D), the atomics (A), the compressed 2-byte instructions (C) and the RV64IM repertoire against <code>as -march=rv64im</code>.',
    es: 'Un ensamblador que emite una palabra mal produce un programa que corre y da un resultado equivocado — el peor fallo posible en una herramienta educativa. Así que los encodings no se revisan a mano: una <b class="ink">suite de oráculo ensambla el mismo fuente con GNU <code>as</code></b> y compara las palabras emitidas una por una. Ese oráculo cubre coma flotante (F y D), las atómicas (A), las comprimidas de 2 bytes (C) y el repertorio RV64IM contra <code>as -march=rv64im</code>.'
  },
  "s04.li1.b": { en: "Full repertoire, switchable width", es: "Repertorio completo, ancho conmutable" },
  "s04.li1.d": {
    en: 'RV32IMAFDC — integers, multiply/divide, single and double floating point with the <code>f0</code>–<code>f31</code> file, atomics, and hand-written compressed instructions. A selector in the toolbar switches the machine to RV64: <code>ld</code>/<code>sd</code>, <code>lwu</code>, the «W» instructions and 6-bit shift amounts. RV32 stays untouched, and a 64-bit instruction inside an RV32 program produces a teaching error rather than a wrong result.',
    es: 'RV32IMAFDC — enteros, multiplicación y división, coma flotante simple y doble con el banco <code>f0</code>–<code>f31</code>, atómicas y comprimidas escritas a mano. Un selector en la barra cambia la máquina a RV64: <code>ld</code>/<code>sd</code>, <code>lwu</code>, las instrucciones «W» y corrimientos con <code>shamt</code> de 6 bits. RV32 queda intacto, y una instrucción de 64 bits dentro de un programa RV32 da un error didáctico en vez de un resultado equivocado.'
  },
  "s04.li2.b": { en: "Directives a real project needs", es: "Las directivas que pide un proyecto real" },
  "s04.li2.d": {
    en: '<code>.include</code> resolved relative to the including file, <code>.macro</code> with named parameters, <code>.eqv</code>/<code>.equ</code> constants, and <code>%hi()</code>/<code>%lo()</code> so a student can see what <code>la</code> actually expands to. Multi-file programs work in the app and from the CLI.',
    es: '<code>.include</code> resuelto relativo al archivo que lo contiene, <code>.macro</code> con parámetros nombrados, constantes <code>.eqv</code>/<code>.equ</code>, y <code>%hi()</code>/<code>%lo()</code> para que el estudiante vea en qué expande realmente un <code>la</code>. Los programas multi-archivo funcionan en la app y por línea de comandos.'
  },
  "s04.li3.b": { en: "Standard ELF32, in and out", es: "ELF32 estándar, para los dos lados" },
  "s04.li3.d": {
    en: 'Export produces a real ELF32 RISC-V that other tools load — Ripes, <code>objdump</code>. Import is the other direction: open a binary and the editor switches to read-only disassembly mode, with run, step and breakpoints working on the listing. A C program compiled with <code>riscv64-elf-gcc</code> loads too; an ELF with the wrong base address is rejected with a message that names the exact flag that is missing.',
    es: 'La exportación produce un ELF32 RISC-V de verdad que otras herramientas cargan — Ripes, <code>objdump</code>. La importación es el camino inverso: abrís un binario y el editor pasa a modo desensamblado de solo lectura, con ejecutar, paso y breakpoints funcionando sobre el listado. Un programa en C compilado con <code>riscv64-elf-gcc</code> también carga; un ELF con otras direcciones se rechaza con un mensaje que nombra exactamente el flag que falta.'
  },
  "s04.li4.b": {
    en: "A relocatable variant, because someone will ask",
    es: "Una variante reubicable, porque alguien lo va a pedir"
  },
  "s04.li4.d": {
    en: '<code>asm --reubicable</code> emits symbol references PC-relative (<code>auipc</code>) instead of absolute and marks the ELF <code>ET_DYN</code>, for a loader that places it somewhere else. The default stays absolute: that is the one that matches EmuRV\'s memory map when you inspect it elsewhere.',
    es: '<code>asm --reubicable</code> emite las referencias a símbolos en forma PC-relativa (<code>auipc</code>) en vez de absoluta y marca el ELF <code>ET_DYN</code>, para un cargador que lo ubique en otro lado. El default sigue siendo absoluto: es el que coincide con el mapa de memoria de EmuRV cuando lo inspeccionás en otra herramienta.'
  },
  "s04.stamp": { en: "Verified against GNU as", es: "Verificado contra GNU as" },

  /* ---------- 05 dispositivos ---------- */
  "s05.sheet": { en: "SHEET 05/09 · DEVICES &amp; REAL TIME", es: "HOJA 05/09 · DISPOSITIVOS Y TIEMPO REAL" },
  "s05.title": {
    en: "Devices, and the game that justifies them",
    es: "Los dispositivos, y el juego que los justifica"
  },
  "s05.lede": {
    en: 'The whole memory map is <b>compatible with RARS</b> — the same base addresses, the same keyboard semantics. That is not nostalgia: it means the Spanish-language teaching material that already exists for RARS runs on EmuRV unchanged.',
    es: 'Todo el mapa de memoria es <b>compatible con RARS</b> — las mismas direcciones base, la misma semántica de teclado. No es nostalgia: significa que el material didáctico en español que ya existe para RARS corre en EmuRV sin tocarle una línea.'
  },
  "s05.mh1": { en: "Address", es: "Dirección" },
  "s05.mh2": { en: "Region", es: "Región" },
  "s05.mh3": { en: "Notes", es: "Notas" },
  "s05.m1": {
    en: "Code. Mapped R+X — not writable, on purpose.",
    es: "Código. Mapeada R+X — sin escritura, a propósito."
  },
  "s05.m2": { en: "Data. Not executable.", es: "Datos. Sin permiso de ejecución." },
  "s05.m3n": { en: "heap", es: "heap" },
  "s05.m3": {
    en: 'Grows upward from <code>sbrk</code> (syscall 9). No free.',
    es: 'Crece hacia arriba desde <code>sbrk</code> (syscall 9). Sin free.'
  },
  "s05.m4n": { en: "stack (sp)", es: "pila (sp)" },
  "s05.m4": {
    en: "Initial stack pointer, 8 MB mapped below it.",
    es: "Puntero de pila inicial, con 8 MB mapeados debajo."
  },
  "s05.m5n": { en: "framebuffer", es: "framebuffer" },
  "s05.m5": {
    en: "320×240, one byte per pixel — VGA mode 13h.",
    es: "320×240, un byte por píxel — VGA modo 13h."
  },
  "s05.m6n": { en: "palette", es: "paleta" },
  "s05.m6": {
    en: "256 RGB888 colours; the program can rewrite them.",
    es: "256 colores RGB888; el programa puede reescribirlos."
  },
  "s05.m7": { en: "Writing 1 means «frame ready».", es: "Escribir 1 significa «cuadro listo»." },
  "s05.m8n": { en: "keyboard · control", es: "teclado · control" },
  "s05.m8": {
    en: "Bit 0 set means a key is waiting. Same address as RARS/MARS.",
    es: "Bit 0 en 1 significa que hay una tecla esperando. Misma dirección que RARS/MARS."
  },
  "s05.m9n": { en: "keyboard · data", es: "teclado · datos" },
  "s05.m9": {
    en: "The oldest key code — reading it consumes the key. Queue of 64.",
    es: "El código de la tecla más vieja — leerlo la consume. Cola de 64."
  },
  "s05.h3a": { en: "Polling, and why it isn't a shortcut", es: "Polling, y por qué no es un atajo" },
  "s05.p1": {
    en: 'All the I/O is polling, and that is a <b class="ink">documented structural limitation, not a simplification</b>: Unicorn\'s own FAQ states that it does not expose hardware interrupts. Building a CLINT and a PLIC on top of a CPU-only engine that officially does not support them is real architecture work, and it is written down as future work rather than quietly implied. What does exist is a keyboard the program can poll without ever blocking, plus syscalls 30 (system time in ms) and 32 (sleep, interruptible by «Stop»).',
    es: 'Toda la E/S es por polling, y eso es una <b class="ink">limitación estructural documentada, no una simplificación</b>: el propio FAQ de Unicorn declara que no expone interrupciones de hardware. Construir un CLINT y un PLIC encima de un motor CPU-only que oficialmente no las soporta es trabajo de arquitectura de verdad, y quedó escrito como trabajo futuro en vez de insinuado por lo bajo. Lo que sí existe es un teclado que el programa consulta sin bloquearse nunca, más las syscalls 30 (tiempo del sistema en ms) y 32 (dormir, interrumpible con «Detener»).'
  },
  "s05.p2": {
    en: 'The <code>.text</code> region being read-only is a deliberate teaching policy — W^X. Jumping into data or patching your own code stops with a message that explains what happened rather than corrupting silently. Keep that decision in mind: it comes back with a cost on the next sheet.',
    es: 'Que la región <code>.text</code> sea de solo lectura es una política didáctica deliberada — W^X. Saltar a los datos o parchear tu propio código detiene la ejecución con un mensaje que explica qué pasó, en vez de corromper en silencio. Acordate de esa decisión: vuelve, con su costo, en la hoja siguiente.'
  },
  "s05.h3b": { en: "Tetris as an acceptance test", es: "El Tetris como prueba de aceptación" },
  "s05.p2b": {
    en: 'The example that closes the lesson series is a <b class="ink">port to RV32IM of an 8086 Tetris</b> from the same Microprocessors course — the exact program that was painful on emu8086. Board in memory, bitmaps, collisions, line clears, scoring, drawn as coloured blocks on the 320×240 screen and played with the keyboard. Its game logic and the resulting pixels are checked by a test oracle, not by me looking at it.',
    es: 'El ejemplo que cierra la serie de lecciones es un <b class="ink">port a RV32IM de un Tetris de 8086</b> de la misma materia Microprocesadores — justo el programa que dolía en emu8086. Tablero en memoria, bitmaps, colisiones, líneas completas, puntaje, dibujado como bloques de color en la pantalla de 320×240 y jugable con el teclado. Su lógica de juego y los píxeles resultantes los verifica un oráculo de tests, no yo mirándolo.'
  },
  "s05.l1": { en: "Full-repaint frame rate (Rust side)", es: "Cuadros por segundo con repintado completo (lado Rust)" },
  "s05.l2": { en: "What the UI actually consumes", es: "Lo que la interfaz consume de verdad" },
  "s05.l3": { en: "Headroom over what the screen needs", es: "Margen sobre lo que la pantalla necesita" },
  "s05.l4": { en: "Hardware interrupts (CLINT / PLIC)", es: "Interrupciones de hardware (CLINT / PLIC)" },
  "s05.box.bt": { en: "Worst case, on purpose", es: "El peor caso, a propósito" },
  "s05.box.span": {
    en: 'That 811 is the median of five runs (range 799–838), measured on the production path: a <b>complete repaint</b> of the framebuffer every frame plus the frame-close syscall. Nothing is skipped to make the number look better.',
    es: 'Ese 811 es la mediana de cinco corridas (rango 799–838), medido sobre el camino de producción: un <b>repintado completo</b> del framebuffer por cuadro más la syscall de cierre de cuadro. No se saltea nada para que el número quede lindo.'
  },

  /* ---------- 06 validación ---------- */
  "s06.sheet": { en: "SHEET 06/09 · HOW I KNOW IT'S CORRECT", es: "HOJA 06/09 · CÓMO SÉ QUE ES CORRECTO" },
  "s06.title": { en: "Two verdicts I did not write myself", es: "Dos veredictos que no escribí yo" },
  "s06.lede": {
    en: 'My own tests can only tell me the emulator agrees with what I believed when I wrote it. So the correctness argument rests on two suites that come from outside the project: the <b>official riscv-tests</b>, and <b>riscv-arch-test through RISCOF</b>, which compares my machine\'s output against <b class="tacc">Sail — the formal golden model of RISC-V International</b>. Every number below is reproducible from a script in the repository.',
    es: 'Mis propios tests solo pueden decirme que el emulador coincide con lo que yo creía cuando lo escribí. Por eso el argumento de corrección se apoya en dos suites que vienen de afuera del proyecto: los <b>riscv-tests oficiales</b> y <b>riscv-arch-test vía RISCOF</b>, que compara la salida de mi máquina contra <b class="tacc">Sail — el modelo formal dorado de RISC-V International</b>. Cada número de acá abajo se reproduce con un script del repositorio.'
  },
  "s06.v1cap": {
    en: "Verdict A · riscv-tests, official self-checking suites · commit 34e6b6d1 · 2026-07-22",
    es: "Veredicto A · riscv-tests, suites oficiales self-checking · commit 34e6b6d1 · 2026-07-22"
  },
  "s06.v1h1": { en: "Suite · -march", es: "Suite · -march" },
  "s06.vh.tests": { en: "Tests", es: "Tests" },
  "s06.vh.pass": { en: "Pass", es: "Pasan" },
  "s06.vh.excl": { en: "Excluded", es: "Excluidos" },
  "s06.vh.mark": { en: "Result", es: "Resultado" },
  "s06.v1tot": {
    en: "Total — 78/78 of the executable tests",
    es: "Total — 78/78 de los tests ejecutables"
  },
  "s06.v2cap": {
    en: "Verdict B · RISCOF 1.25.3 vs Sail 0.13 · signature compared word for word · 2026-07-22",
    es: "Veredicto B · RISCOF 1.25.3 contra Sail 0.13 · firma comparada palabra por palabra · 2026-07-22"
  },
  "s06.v2h1": { en: "Suite rv32i_m/", es: "Suite rv32i_m/" },
  "s06.vh.match": { en: "Match", es: "Coinciden" },
  "s06.vh.mis": { en: "Mismatch", es: "Difieren" },
  "s06.v2tot": {
    en: "Total — 72/72 of the compatible tests, identical signature",
    es: "Total — 72/72 de los tests compatibles, firma idéntica"
  },
  "s06.h3a": {
    en: "The four exclusions and the two mismatches, named",
    es: "Las cuatro exclusiones y los dos mismatches, con nombre y apellido"
  },
  "s06.p1": {
    en: "A result with an asterisk is worth nothing if the asterisk is not spelled out, so here they are, each traced to root cause rather than waved away.",
    es: "Un resultado con asterisco no vale nada si el asterisco no está explicado, así que acá están, cada uno rastreado hasta la causa raíz en vez de barrido bajo la alfombra."
  },
  "s06.b1.bt": {
    en: "fence_i · rvc · Fencei — my W^X policy",
    es: "fence_i · rvc · Fencei — mi política W^X"
  },
  "s06.b1.span": {
    en: 'These tests <b>write instructions into <code>.text</code> and jump into data</b> — self-modifying code is precisely what they are testing. The official environment links everything into one RWX segment. EmuRV maps <code>.text</code> read-only by the teaching decision on the previous sheet, and stops with «the program tried to write to an address that doesn\'t belong to .data». Incompatible by design; the compressed decoding itself is covered by my own oracle against GNU <code>as</code>.',
    es: 'Estos tests <b>escriben instrucciones en <code>.text</code> y saltan a los datos</b> — el código auto-modificado es exactamente lo que están probando. El entorno oficial enlaza todo en un único segmento RWX. EmuRV mapea <code>.text</code> de solo lectura por la decisión didáctica de la hoja anterior, y se detiene con «el programa intentó escribir en una dirección que no pertenece a .data». Incompatibilidad por diseño; la decodificación de las comprimidas en sí está cubierta por mi propio oráculo contra GNU <code>as</code>.'
  },
  "s06.b2.bt": {
    en: "cebreak-01 — <code>ebreak</code> belongs to the debugger",
    es: "cebreak-01 — <code>ebreak</code> es del depurador"
  },
  "s06.b2.span": {
    en: 'The test expects <code>c.ebreak</code> to be delegated to the guest\'s trap handler. In EmuRV <code>ebreak</code> <b>is</b> the software breakpoint mechanism of the UI, so it never reaches the guest. Same shape of conflict: a deliberate decision, not a semantics defect.',
    es: 'El test espera que <code>c.ebreak</code> se delegue al manejador de traps del programa. En EmuRV <code>ebreak</code> <b>es</b> el mecanismo de breakpoints por software de la interfaz, así que nunca llega al invitado. Mismo tipo de conflicto: una decisión deliberada, no un defecto de semántica.'
  },
  "s06.b3.bt": {
    en: "fmin — a defect in the engine underneath",
    es: "fmin — un defecto del motor de abajo"
  },
  "s06.b3.span": {
    en: 'This one is not mine and it is the finding I am most pleased with. An isolated probe against the machine showed <code>fmax.s(1.0, sNaN)</code> returning a canonical qNaN instead of <code>1.0</code>. That is the IEEE 754-2008 semantics, superseded by the RISC-V F v2.2 spec: <b>QEMU fixed it in 6.0, but Unicorn 2.x is still based on QEMU 5.0.1</b>. Subtest 20 of <code>fmin.S</code> detects exactly that case. Documented as an inherited limitation — with the version chain that explains it.',
    es: 'Este no es mío y es el hallazgo que más me gusta. Una sonda aislada contra la máquina mostró que <code>fmax.s(1.0, sNaN)</code> devuelve un qNaN canónico en vez de <code>1.0</code>. Esa es la semántica IEEE 754-2008, superada por la spec RISC-V F v2.2: <b>QEMU lo corrigió en la 6.0, pero Unicorn 2.x sigue basado en QEMU 5.0.1</b>. El subtest 20 de <code>fmin.S</code> detecta exactamente ese caso. Documentado como limitación heredada — con la cadena de versiones que lo explica.'
  },
  "s06.h3b": { en: "And underneath, the ordinary discipline", es: "Y abajo, la disciplina de todos los días" },
  "s06.l1": {
    en: "Rust core, against the real machine",
    es: "Núcleo Rust, contra la máquina real"
  },
  "s06.l2": { en: "CLI", es: "CLI" },
  "s06.l3": { en: "Interface", es: "Interfaz" },
  "s06.l4": {
    en: "Total, zero failures · clippy with no warnings",
    es: "Total, cero fallos · clippy sin advertencias"
  },
  "s06.l5": {
    en: "CI jobs green (macOS build + bundle weight gate)",
    es: "Jobs de CI en verde (build macOS + compuerta de peso del bundle)"
  },
  "s06.b4.bt": { en: "Counting them properly", es: "Contarlos bien" },
  "s06.b4.span": {
    en: 'That total used to be reported as «271 + 10 + 119». The 10 was wrong: it counted a single test binary and silently dropped three others. I found it doing a documentation reconciliation pass, re-ran the whole suite and corrected every document that carried the figure. A number nobody had questioned was wrong for weeks — which is exactly why the reconciliation pass exists.',
    es: 'Ese total se venía reportando como «271 + 10 + 119». El 10 estaba mal: contaba un solo binario de pruebas y se comía otros tres en silencio. Lo encontré haciendo un barrido de reconciliación documental, volví a correr la suite completa y corregí todos los documentos que arrastraban la cifra. Un número que nadie había cuestionado estuvo mal durante semanas — que es exactamente para lo que existe el barrido.'
  },
  "s06.stamp": { en: "78/78 · 72/72 · 0 fail", es: "78/78 · 72/72 · 0 fallos" },

  /* ---------- 07 rendimiento ---------- */
  "s07.sheet": { en: "SHEET 07/09 · PERFORMANCE", es: "HOJA 07/09 · RENDIMIENTO" },
  "s07.title": {
    en: "Measured against the reference, not against itself",
    es: "Medido contra la referencia, no contra sí mismo"
  },
  "s07.lede": {
    en: 'Four RV32IM kernels, the <b>same algorithm on four emulators</b>, ~500 M instructions per run, median of five, and equivalence verified first — all four produce the same numeric result per kernel. Comparing an emulator only against its own previous version proves nothing.',
    es: 'Cuatro kernels RV32IM, el <b>mismo algoritmo en cuatro emuladores</b>, ~500 M de instrucciones por corrida, mediana de cinco, y equivalencia verificada primero: los cuatro producen el mismo resultado numérico por kernel. Comparar un emulador solo contra su propia versión anterior no prueba nada.'
  },
  "chart.aria": {
    en: "Logarithmic chart of throughput in millions of instructions per second: QEMU 1090 to 4806, Spike 882 to 992, EmuRV 160 to 718, RARS 5.6 to 6.0",
    es: "Gráfico logarítmico de rendimiento en millones de instrucciones por segundo: QEMU de 1090 a 4806, Spike de 882 a 992, EmuRV de 160 a 718, RARS de 5,6 a 6,0"
  },
  "chart.title": {
    en: "Band across the four kernels · median of 5 runs each · Apple M4 Pro",
    es: "Banda sobre los cuatro kernels · mediana de 5 corridas cada uno · Apple M4 Pro"
  },
  "chart.qemu": { en: "system-mode, TCG", es: "system-mode, TCG" },
  "chart.spike": { en: "the ecosystem's reference ISS", es: "el ISS de referencia del ecosistema" },
  "chart.emurv": { en: "with the didactic hooks on", es: "con los hooks didácticos activos" },
  "chart.rars": { en: "its own category: teaching", es: "su categoría: educativo" },
  "chart.axis": {
    en: "Millions of instructions per second — LOGARITHMIC SCALE",
    es: "Millones de instrucciones por segundo — ESCALA LOGARÍTMICA"
  },
  "chart.cap": {
    en: "Each bar spans the slowest and fastest of the four kernels for that emulator. A logarithmic axis is the only honest way to hold 5.6 and 4 806 in the same picture — the exact numbers are in the table below.",
    es: "Cada barra va del kernel más lento al más rápido de ese emulador. Un eje logarítmico es la única forma honesta de meter 5,6 y 4 806 en la misma imagen — los números exactos están en la tabla de abajo."
  },
  "s07.bh1": { en: "Kernel · RV32IM", es: "Kernel · RV32IM" },
  "s07.k1": { en: "arithmetic — pure ALU", es: "aritmética — ALU pura" },
  "s07.k2": { en: "memory — lw/sw over 4 KiB", es: "memoria — lw/sw sobre 4 KiB" },
  "s07.k3": { en: "calls — call/ret + stack", es: "llamadas — call/ret + pila" },
  "s07.k4": { en: "mixed — LCG + memory + mul", es: "mixto — LCG + memoria + mul" },
  "s07.tabnote": {
    en: "Millions of instructions per second, median of 5. EmuRV 0.1.0 (Unicorn 2.1.5) · QEMU 11.0.2 · Spike 1.1.1-dev · RARS 1.6 on OpenJDK 25, with its 0.133 s JVM startup discounted.",
    es: "Millones de instrucciones por segundo, mediana de 5. EmuRV 0.1.0 (Unicorn 2.1.5) · QEMU 11.0.2 · Spike 1.1.1-dev · RARS 1.6 sobre OpenJDK 25, con su arranque de JVM de 0,133 s descontado."
  },
  "s07.h3a": { en: "Reading it honestly", es: "Cómo leerlo con honestidad" },
  "s07.p1": {
    en: 'Against <b class="ink">RARS</b> — its actual category, the same didactic job — EmuRV is <b class="tacc">28 to 120× faster</b>. Against <b class="ink">Spike</b>, the reference instruction-set simulator of the ecosystem, it lands in the same order of magnitude: 81 % of Spike on pure ALU. Against plain QEMU it is 0.7 to 1.5 orders behind.',
    es: 'Contra <b class="ink">RARS</b> —su categoría real, la misma función didáctica— EmuRV es <b class="tacc">28 a 120× más rápido</b>. Contra <b class="ink">Spike</b>, el simulador de referencia del ecosistema, queda en el mismo orden de magnitud: 81 % de Spike en ALU pura. Contra QEMU puro está 0,7 a 1,5 órdenes por debajo.'
  },
  "s07.p2": {
    en: 'That remaining gap is <b>bought, not lost</b>: an interruptibility check every ~40 ms, the observation hooks that make the keyboard, the screen and the syscalls visible, and a wall time that includes process start and assembling the source. The engine\'s own ceiling with no slicing, on the same machine, was 1 293 M instr/s when it was last remeasured. The requirement in the spec was 10 — it clears it by 16 to 72× in the worst kernel, and the author\'s decision was to stop chasing speed there.',
    es: 'Esa diferencia que queda está <b>comprada, no perdida</b>: un chequeo de interrumpibilidad cada ~40 ms, los hooks de observación que hacen visibles el teclado, la pantalla y las syscalls, y un tiempo de pared que incluye el arranque del proceso y el ensamblado del fuente. El techo del motor sin tramos, en la misma máquina, dio 1 293 M instr/s en la última remedición. El requisito de la especificación era 10: lo supera por 16 a 72× en el peor kernel, y la decisión del autor fue dejar de perseguir velocidad ahí.'
  },
  "s07.b1.bt": { en: "Three numbers for one metric", es: "Tres números para una sola métrica" },
  "s07.b1.span": {
    en: 'My own documentation carried three different frame rates for the same benchmark — 835, 797 and 832 — and I spent a while looking for the regression between them. There wasn\'t one. All three were <b>single runs</b> of a bench with ±2.5 % spread. Five control runs gave 799, 804, 811, 814, 838: the three historical figures all sit inside the normal band. The fix wasn\'t to the code, it was to the method — every figure now ships with its median, its range and its <i>n</i>.',
    es: 'Mi propia documentación arrastraba tres cuadros por segundo distintos para el mismo banco —835, 797 y 832— y estuve un rato buscando la regresión entre ellos. No había ninguna. Los tres eran <b>corridas únicas</b> de un banco con ±2,5 % de dispersión. Cinco corridas de control dieron 799, 804, 811, 814, 838: las tres cifras históricas caen dentro de la banda normal. La corrección no fue al código, fue al método — ahora toda cifra sale con su mediana, su rango y su <i>n</i>.'
  },
  "s07.h3b": {
    en: "Limitations I am declaring before you find them",
    es: "Limitaciones que declaro antes de que las encuentres"
  },
  "s07.li1.b": { en: "Nominal instruction count", es: "Cuenta nominal de instrucciones" },
  "s07.li1.d": {
    en: "Deterministic loops counted over the listing, not retired by a hardware counter. The same criterion is applied to all four emulators, so the ratios hold even if an absolute is off.",
    es: "Bucles deterministas contados sobre el listado, no retiradas por un contador de hardware. El criterio es el mismo para los cuatro emuladores, así que los cocientes se sostienen aunque un absoluto esté corrido."
  },
  "s07.li2.b": { en: "Synthetic microkernels, not CoreMark", es: "Microkernels sintéticos, no CoreMark" },
  "s07.li2.d": {
    en: "The bare-metal CoreMark port per target was deferred by an explicit effort gate. It does not change the order-of-magnitude conclusion, and the harness is ready for it.",
    es: "El port bare-metal de CoreMark por target quedó diferido por una compuerta de esfuerzo explícita. No cambia la conclusión de orden de magnitud, y el banco ya está listo para agregarlo."
  },
  "s07.li3.b": { en: "One machine, and QEMU in system mode", es: "Una sola máquina, y QEMU en system mode" },
  "s07.li3.d": {
    en: 'Everything ran on a single Apple M4 Pro, so the <b>ratios between emulators are the citable part, not the absolutes</b>. QEMU had to run in system mode because macOS Homebrew ships no user-mode build; Spike and QEMU execute bare-metal ELF while EmuRV and RARS execute the same assembly source.',
    es: 'Todo corrió en una sola Apple M4 Pro, así que <b>lo citable son los cocientes entre emuladores, no los absolutos</b>. QEMU tuvo que correr en system mode porque el brew de macOS no trae la versión user-mode; Spike y QEMU ejecutan ELF bare-metal mientras que EmuRV y RARS ejecutan el mismo fuente en ensamblador.'
  },
  "s07.li4.b": { en: "emu8086 is a documentary comparison", es: "Con emu8086 la comparación es documental" },
  "s07.li4.d": {
    en: "The emulator EmuRV replaces is a step-by-step interpreter that redraws its UI per instruction, publishes no performance figures, and needs a Windows machine to run. I am not going to invent a number for it.",
    es: "El emulador al que EmuRV reemplaza es un intérprete paso a paso que redibuja su interfaz por instrucción, no publica cifras de rendimiento y necesita una máquina Windows para correr. No le voy a inventar un número."
  },

  /* ---------- 08 interfaz ---------- */
  "s08.sheet": { en: "SHEET 08/09 · THE INTERFACE", es: "HOJA 08/09 · LA INTERFAZ" },
  "s08.title": {
    en: "The part the student actually touches",
    es: "La parte que el estudiante toca de verdad"
  },
  "s08.lede": {
    en: 'Everything themeable lives in CSS design tokens, so a theme is one block of variable overrides and no duplicated CSS. Five themes ship with the app plus one the user builds, and <b>the contrast of all five is verified by an automated test</b> — body text and editor syntax both, against WCAG AA. A theme that fails the test does not ship.',
    es: 'Todo lo temable vive en design tokens CSS, así que un tema es un bloque de variables sobrescritas y cero CSS duplicado. La app trae cinco temas más el que arma el usuario, y <b>el contraste de los cinco lo verifica un test automatizado</b> — texto y sintaxis del editor, contra WCAG AA. Un tema que no pasa el test no entra.'
  },
  "s08.f1alt": {
    en: "EmuRV main window: toolbar, file tabs, editor with the executing line highlighted and a breakpoint, and the Screen, Registers, Memory and Debug panels, console and status bar",
    es: "Ventana principal de EmuRV: barra de herramientas, pestañas de archivos, editor con la línea en ejecución resaltada y un breakpoint, y los paneles de Pantalla, Registros, Memoria y Depuración, consola y barra de estado"
  },
  "s08.f1b": { en: "Main view.", es: "Vista principal." },
  "s08.f1cap": {
    en: "Editor on the left, machine on the right. Registers are always visible and come first; Memory folds; Debug starts collapsed and reveals itself the moment you set your first breakpoint. Each of those panels can be torn off into its own OS window with the ⧉ button, and stays synchronised with the running program.",
    es: "Editor a la izquierda, máquina a la derecha. Registros está siempre a la vista y va primero; Memoria se pliega; Depuración arranca plegada y se revela sola apenas ponés el primer breakpoint. Cada uno de esos paneles se puede sacar a su propia ventana del sistema con el botón ⧉, y se mantiene sincronizado con el programa que corre."
  },
  "s08.f2alt": {
    en: "EmuRV with the Retro-CRT theme: amber phosphor on black with scanlines",
    es: "EmuRV con el tema Retro-CRT: fósforo ámbar sobre negro con líneas de barrido"
  },
  "s08.f2b": { en: "Retro-CRT.", es: "Retro-CRT." },
  "s08.f2cap": {
    en: "Amber phosphor and scanlines. The editor's syntax colours follow the theme tokens too — CodeMirror reads the same variables.",
    es: "Fósforo ámbar y líneas de barrido. Los colores de sintaxis del editor también siguen los tokens del tema — CodeMirror lee las mismas variables."
  },
  "s08.f3alt": {
    en: "EmuRV with the Pergamino theme: warm light paper",
    es: "EmuRV con el tema Pergamino: papel cálido y claro"
  },
  "s08.f3b": { en: "Pergamino.", es: "Pergamino." },
  "s08.f3cap": {
    en: "The light theme, for a projector in a lit classroom — the case where a dark IDE stops being readable from the back row.",
    es: "El tema claro, para un proyector en un aula con luz — el caso donde un IDE oscuro deja de leerse desde el fondo."
  },
  "s08.f4alt": {
    en: "EmuRV with the Retro Kawaii theme: pastel vaporwave palette",
    es: "EmuRV con el tema Retro Kawaii: paleta pastel vaporwave"
  },
  "s08.f4b": { en: "Retro Kawaii.", es: "Retro Kawaii." },
  "s08.f4cap": {
    en: "Pastel vaporwave. It passes the same AA test as the rest — that constraint is what kept the pastels from going unreadable.",
    es: "Pastel vaporwave. Pasa el mismo test AA que los demás — esa restricción es lo que evitó que los pasteles se volvieran ilegibles."
  },
  "s08.f5alt": {
    en: "EmuRV with the Disquete 90s theme: nineties desktop beige with coloured title bars",
    es: "EmuRV con el tema Disquete 90s: beige de escritorio noventero con barras de título de color"
  },
  "s08.f5b": { en: "Disquete 90s.", es: "Disquete 90s." },
  "s08.f5cap": {
    en: "Nineties desktop beige, coloured title bars. Same tokens, a different decade.",
    es: "Beige de escritorio noventero, barras de título de color. Los mismos tokens, otra década."
  },
  "s08.f6alt": {
    en: "EmuRV theme editor: a colour control per design token, with a live preview and a WCAG AA contrast warning",
    es: "Editor de temas de EmuRV: un control de color por design token, con preview en vivo y un aviso de contraste WCAG AA"
  },
  "s08.f6b": { en: "Build your own.", es: "Armá el tuyo." },
  "s08.f6cap": {
    en: 'One colour control per token — surfaces, text, accent, states and editor syntax — with live preview, export/import as JSON, and a contrast warning that <b>informs without blocking</b>: it is your theme.',
    es: 'Un control de color por token — superficies, texto, acento, estados y sintaxis del editor — con preview en vivo, exportar e importar como JSON, y un aviso de contraste que <b>informa sin bloquear</b>: es tu tema.'
  },
  "s08.f7alt": {
    en: "EmuRV lessons modal: two-column curriculum with the lesson list and progress bar on the left and the selected lesson's objectives on the right",
    es: "Modal de lecciones de EmuRV: currículo a dos columnas con la lista y la barra de progreso a la izquierda y los objetivos de la lección elegida a la derecha"
  },
  "s08.f7b": { en: "Ten lessons.", es: "Diez lecciones." },
  "s08.f7cap": {
    en: "Registers → arithmetic → memory (endianness in front of you) → conditionals → loops → functions and the stack → syscalls → multi-file → MMIO and real time → traps, your first mini-kernel. Opening one loads its code into the editor. All ten also run from the terminal, and the CI keeps watch on them.",
    es: "Registros → aritmética → memoria (el endianness ante tus ojos) → condicionales → bucles → funciones y pila → syscalls → multi-archivo → MMIO y tiempo real → traps, tu primer mini-kernel. Abrir una carga su código en el editor. Las diez corren también por terminal, y la CI las vigila."
  },
  "s08.f8alt": {
    en: "EmuRV help modal: two-column reference with a scroll-spy index covering syscalls, memory map, MMIO keyboard, directives and debugging",
    es: "Modal de ayuda de EmuRV: referencia a dos columnas con índice scroll-spy sobre syscalls, mapa de memoria, teclado MMIO, directivas y depuración"
  },
  "s08.f8b": { en: "The reference, inside the app.", es: "La referencia, adentro de la app." },
  "s08.f8cap": {
    en: 'Syscalls, memory map, MMIO keyboard, directives, debugging — with a scroll-spy index, so nobody has to leave the tool to look up an <code>a7</code> value.',
    es: 'Syscalls, mapa de memoria, teclado MMIO, directivas, depuración — con índice scroll-spy, para que nadie tenga que salir de la herramienta a buscar un valor de <code>a7</code>.'
  },
  "s08.f9alt": {
    en: "EmuRV in a narrow window: toolbar buttons collapse to icon-only and the controls rewrap",
    es: "EmuRV en una ventana angosta: los botones de la barra pasan a solo-ícono y los controles se reacomodan"
  },
  "s08.f9b": { en: "Any window width.", es: "Cualquier ancho de ventana." },
  "s08.f9cap": {
    en: "The toolbar buttons drop to icon-only and the controls rewrap instead of being cut off — a laptop in a classroom is not a 27-inch display.",
    es: "Los botones de la barra pasan a solo-ícono y los controles bajan de fila en vez de cortarse — una notebook en un aula no es un monitor de 27 pulgadas."
  },
  "s08.f10alt": {
    en: "EmuRV showing a user-built custom theme",
    es: "EmuRV mostrando un tema personalizado armado por el usuario"
  },
  "s08.f10b": { en: "A user's theme.", es: "El tema de un usuario." },
  "s08.f10cap": {
    en: 'Unlike the built-ins, its values never enter <code>tokens.css</code>: they are CSS variables applied live on <code>:root</code> and saved on the machine.',
    es: 'A diferencia de los que vienen de fábrica, sus valores nunca entran a <code>tokens.css</code>: son variables CSS aplicadas en vivo sobre <code>:root</code> y guardadas en el equipo.'
  },
  "s08.h3a": {
    en: "One language decision, stated rather than hidden",
    es: "Una decisión de idioma, declarada en vez de escondida"
  },
  "s08.p1": {
    en: 'The interface has an ES/EN selector. The <b>assembler and runtime diagnostics, and the lesson content, stay in Spanish even in English mode</b>. That is a declared scope decision — the Spanish material is the didactic contribution of the thesis, and translating it would have meant maintaining two versions of the thing being evaluated. It is written down as a decision, not left as an oversight for someone to discover.',
    es: 'La interfaz tiene selector ES/EN. Los <b>diagnósticos del ensamblador y del runtime, y el contenido de las lecciones, siguen en español también en modo inglés</b>. Es una decisión de alcance declarada: el material en español es el aporte didáctico de la tesis, y traducirlo hubiera significado mantener dos versiones de justo aquello que se evalúa. Está escrita como decisión, no dejada como olvido para que alguien la descubra.'
  },

  /* ---------- 09 estado y stack ---------- */
  "s09.sheet": { en: "SHEET 09/09 · STACK &amp; HONEST STATUS", es: "HOJA 09/09 · STACK Y ESTADO HONESTO" },
  "s09.title": {
    en: "Inventory, and what is still missing",
    es: "Inventario, y lo que todavía falta"
  },
  "s09.h1": { en: "Core", es: "Núcleo" },
  "s09.h1.li3": { en: "Own RV32IMAFDC / RV64IM assembler", es: "Ensamblador propio RV32IMAFDC / RV64IM" },
  "s09.h1.li4": { en: "Own disassembler", es: "Desensamblador propio" },
  "s09.h1.li5": {
    en: 'ELF32 export and import (crate <code>object</code>)',
    es: 'Export e import de ELF32 (crate <code>object</code>)'
  },
  "s09.h1.li6": { en: "Emulation on a dedicated thread", es: "Emulación en un hilo dedicado" },
  "s09.h2": { en: "Devices", es: "Dispositivos" },
  "s09.h2.li1": { en: "Framebuffer VGA 13h · 320×240", es: "Framebuffer VGA 13h · 320×240" },
  "s09.h2.li2": { en: "MMIO keyboard, RARS-compatible", es: "Teclado MMIO compatible con RARS" },
  "s09.h2.li3": { en: "Tone generator (off by default)", es: "Generador de tono (apagado por defecto)" },
  "s09.h2.li4": { en: "Syscalls in the RARS convention", es: "Syscalls con la convención de RARS" },
  "s09.h2.li5": { en: "Zicsr · user trap handler", es: "Zicsr · manejador de traps del usuario" },
  "s09.h3": { en: "Interface", es: "Interfaz" },
  "s09.h3.li2": { en: "(own RISC-V mode)", es: "(modo RISC-V propio)" },
  "s09.h3.li3": {
    en: "CSS design tokens · 5 themes + user theme",
    es: "Design tokens CSS · 5 temas + tema del usuario"
  },
  "s09.h3.li4": { en: "(self-hosted, OFL)", es: "(self-hosted, OFL)" },
  "s09.h3.li5": { en: "Detachable panel windows", es: "Ventanas de paneles desacoplables" },
  "s09.h3.li6": { en: "ES / EN with persistence", es: "ES / EN con persistencia" },
  "s09.h4": { en: "Tooling", es: "Herramientas" },
  "s09.h4.li1": {
    en: '<code>emurv-cli</code> — headless assemble / run / disasm / debug',
    es: '<code>emurv-cli</code> — ensamblar / ejecutar / desensamblar / depurar sin interfaz'
  },
  "s09.h4.li2": { en: "GDB remote stub (gdbserver protocol)", es: "Servidor GDB remoto (protocolo gdbserver)" },
  "s09.h4.li3": {
    en: "Semantic exit codes, for automatic grading",
    es: "Códigos de salida semánticos, para corrección automática"
  },
  "s09.h4.li4": {
    en: "GitHub Actions · 4 jobs · bundle weight gate",
    es: "GitHub Actions · 4 jobs · compuerta de peso del bundle"
  },
  "s09.h5": { en: "Verification", es: "Verificación" },
  "s09.h5.li1": { en: "440 automated tests, zero failures", es: "440 pruebas automatizadas, cero fallos" },
  "s09.h5.li2": {
    en: 'Encoding oracle against GNU <code>as</code>',
    es: 'Oráculo de encodings contra GNU <code>as</code>'
  },
  "s09.h5.li3": { en: "riscv-tests · 78/78 executable", es: "riscv-tests · 78/78 ejecutables" },
  "s09.h5.li4": { en: "RISCOF vs Sail · 72/72 signatures", es: "RISCOF contra Sail · 72/72 firmas" },
  "s09.h5.li5": { en: "Automated WCAG AA contrast test", es: "Test automatizado de contraste WCAG AA" },
  "s09.h5.li6": {
    en: "Reproducible benchmark (script + CSV)",
    es: "Benchmark reproducible (script + CSV)"
  },
  "s09.h6": { en: "Written record", es: "Registro escrito" },
  "s09.h6.li1": { en: "32 roadmap points, each with its plan", es: "32 puntos de roadmap, cada uno con su plan" },
  "s09.h6.li2": {
    en: "Engineering log with the decisions and their why",
    es: "Bitácora de ingeniería con las decisiones y su porqué"
  },
  "s09.h6.li3": {
    en: "Documentary reconciliation against evidence",
    es: "Reconciliación documental contra la evidencia"
  },
  "s09.h3a": { en: "Where it really stands", es: "En qué punto está de verdad" },
  "s09.p1": {
    en: "The thesis is in progress. Separating what is verified from what is merely built is the whole point of the exercise.",
    es: "La tesis está en curso. Separar lo verificado de lo meramente construido es todo el sentido del ejercicio."
  },
  "s09.c1h": { en: "[x] Built and verified", es: "[x] Construido y verificado" },
  "s09.c1.li1": { en: "· RV32IMAFDC + switchable RV64IM", es: "· RV32IMAFDC + RV64IM conmutable" },
  "s09.c1.li2": { en: "· Official compliance, twice over", es: "· Compliance oficial, por dos caminos" },
  "s09.c1.li3": {
    en: "· Screen, keyboard, sound, sprites, traps",
    es: "· Pantalla, teclado, sonido, sprites, traps"
  },
  "s09.c1.li4": { en: "· CLI, GDB stub, CI in green", es: "· CLI, servidor GDB, CI en verde" },
  "s09.c1.li5": {
    en: "· Benchmark against QEMU, Spike and RARS",
    es: "· Benchmark contra QEMU, Spike y RARS"
  },
  "s09.c1.li6": {
    en: "· 10 lessons and 15 examples, watched by tests",
    es: "· 10 lecciones y 15 ejemplos, vigilados por tests"
  },
  "s09.c2h": { en: "[~] Built, not verified", es: "[~] Construido, sin verificar" },
  "s09.c2.li1": {
    en: '· <b>Windows:</b> the NSIS installer cross-compiles and runs in CI, but it has never been opened on a real Windows machine — so I do not claim it works',
    es: '· <b>Windows:</b> el instalador NSIS se compila cruzado y pasa por la CI, pero nunca se abrió en una máquina Windows real — así que no afirmo que funcione'
  },
  "s09.c2.li2": {
    en: "· <b>Linux:</b> the code is portable and the build leg exists, marked experimental; not validated",
    es: "· <b>Linux:</b> el código es portable y la pierna de build existe, marcada como experimental; sin validar"
  },
  "s09.c2.li3": {
    en: "· macOS on Apple Silicon is the only platform I have actually tested",
    es: "· macOS en Apple Silicon es la única plataforma que realmente probé"
  },
  "s09.c3h": { en: "[ ] Missing, and named", es: "[ ] Falta, y lo nombro" },
  "s09.c3.li1": {
    en: "· <b>The usability study with students</b> — protocol and questionnaires ready; it needs the supervisor's sign-off and participants. It is what the committee actually grades",
    es: "· <b>El estudio de usabilidad con estudiantes</b> — protocolo y cuestionarios listos; falta el aval del tutor y los participantes. Es lo que la comisión realmente califica"
  },
  "s09.c3.li2": {
    en: "· Hardware interrupts: CLINT and PLIC over an engine that does not expose them",
    es: "· Interrupciones de hardware: CLINT y PLIC sobre un motor que no las expone"
  },
  "s09.c3.li3": {
    en: "· CoreMark, code signing and notarisation, versioned releases",
    es: "· CoreMark, firma y notarización, releases versionados"
  },
  "s09.stamp": { en: "Thesis in progress", es: "Tesis en curso" },

  /* ---------- footer ---------- */
  "footer.contacto": { en: "Contact", es: "Contacto" },
  "footer.p": {
    en: "Happy to go deeper into any of this — the assembler, the compliance run, or the benchmark method.",
    es: "Con gusto profundizo en cualquiera de estas cosas: el ensamblador, la corrida de compliance o el método del benchmark."
  },
  "footer.small": {
    en: "EmuRV is an undergraduate thesis prototype at FIUNI, Computer Engineering. The repository is private while the thesis is under evaluation; this page describes the engineering and reproduces published figures without exposing source code. Every number here comes from a result document in the repository, with its date and its measurement conditions.",
    es: "EmuRV es un prototipo de trabajo final de grado en la FIUNI, Ingeniería en Computación. El repositorio es privado mientras la tesis está en evaluación; esta página describe la ingeniería y reproduce cifras publicadas sin exponer código fuente. Cada número de acá sale de un documento de resultados del repositorio, con su fecha y su condición de medición."
  },
  "footer.row1": {
    en: "Enrique Chyrnia · Backend &amp; Infrastructure",
    es: "Enrique Chyrnia · Backend e infraestructura"
  },
  "footer.back": { en: "← Back to home", es: "← Volver al inicio" }
};
