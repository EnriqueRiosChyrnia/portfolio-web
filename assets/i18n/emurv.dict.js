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
  "meta.description": {"en": "EmuRV: a RISC-V assembly teaching environment built with Rust, Tauri and Unicorn Engine. Includes a custom assembler, MMIO devices and a GDB stub. Results: 78/78 official riscv-tests and 72/72 matches with the official RISC-V reference model.", "es": "EmuRV: entorno educativo de ensamblador RISC-V desarrollado con Rust, Tauri y Unicorn Engine. Incluye ensamblador propio, dispositivos MMIO y servidor GDB. Resultados: 78/78 riscv-tests oficiales y 72/72 coincidencias con el modelo de referencia oficial de RISC-V."},
  "meta.ogTitle": {
    en: "EmuRV — RISC-V Emulator (Thesis) · Enrique Chyrnia",
    es: "EmuRV — Emulador RISC-V (tesis) · Enrique Chyrnia"
  },
  "meta.ogDescription": {"en": "RISC-V teaching emulator: 78/78 official riscv-tests, 72/72 matches with the official RISC-V model and benchmark results of 28–120× RARS. Built with Rust, Tauri and Unicorn Engine. Includes a browser demo.", "es": "Emulador educativo RISC-V: 78/78 riscv-tests oficiales, 72/72 coincidencias con el modelo oficial de RISC-V y resultados de benchmark de 28–120× RARS. Desarrollado con Rust, Tauri y Unicorn Engine. Incluye una demo para navegador."},
  "meta.ogImageAlt": {
    en: "Enrique Chyrnia — Backend · APIs & Integration · Cloud systems",
    es: "Enrique Chyrnia — Backend · APIs e integración · Sistemas en la nube"
  },
  "meta.ogLocale": { en: "en_US", es: "es_AR" },
  "meta.twitterTitle": {
    en: "EmuRV — RISC-V Emulator (Thesis) · Enrique Chyrnia",
    es: "EmuRV — Emulador RISC-V (tesis) · Enrique Chyrnia"
  },
  "meta.twitterDescription": {"en": "RISC-V teaching emulator: 78/78 official riscv-tests, 72/72 matches with the official RISC-V model and benchmark results of 28–120× RARS. Built with Rust, Tauri and Unicorn Engine. Includes a browser demo.", "es": "Emulador educativo RISC-V: 78/78 riscv-tests oficiales, 72/72 coincidencias con el modelo oficial de RISC-V y resultados de benchmark de 28–120× RARS. Desarrollado con Rust, Tauri y Unicorn Engine. Incluye una demo para navegador."},

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
  "hero.blead": {"en": "EmuRV is a desktop environment for learning <b>RISC-V assembly</b>. Students can write, assemble and run programs, step through instructions and inspect registers and memory. I built it as an alternative to emu8086 for the Microprocessors course, with error messages in Spanish. I checked execution against the official RISC-V suites and reference model.", "es": "EmuRV es un entorno de escritorio para aprender <b>ensamblador RISC-V</b>. Permite escribir, ensamblar y ejecutar programas, avanzar por instrucciones e inspeccionar los registros y la memoria. Lo desarrollé como alternativa a emu8086 para la materia Microprocesadores, con mensajes de error en español. Contrasté la ejecución con las suites oficiales y el modelo de referencia de RISC-V."},
  "hero.rolLabel": {
    en: "Role · Whole system (undergraduate thesis)",
    es: "Rol · Sistema completo (trabajo final de grado)"
  },
  "hero.rolP": {"en": "I built the Rust core, assembler, emulated devices, CLI, GDB stub, frontend and test suites. I used AI assistance, recorded the technical decisions and reviewed changes before integrating them. Undergraduate thesis at FIUNI, Ingeniería Informática.", "es": "Desarrollé el núcleo en Rust, el ensamblador, los dispositivos emulados, el CLI, el servidor GDB, el frontend y las suites de pruebas. Usé asistencia de IA, registré las decisiones técnicas y revisé los cambios antes de integrarlos. Trabajo final de grado de Ingeniería Informática en la FIUNI."},
  "hero.stamp": { en: "RISC-V learning environment", es: "Entorno educativo RISC-V" },
  "hero.introAria": { en: "EmuRV mechanical assembly startup animation", es: "Animación de inicio de EmuRV con ensamble mecánico" },
  "hero.fact1": { en: "official riscv-tests", es: "riscv-tests oficiales" },
  "hero.fact2": { en: "results identical to RISC-V’s official model", es: "resultados idénticos al modelo oficial de RISC-V" },
  "hero.fact3": { en: "automated tests", es: "pruebas automatizadas" },
  "hero.fact4": { en: "faster than RARS", es: "más rápido que RARS" },

  /* ---------- 01 origen ---------- */
  "s01.sheet": { en: "SHEET 01/09 · WHY IT EXISTS", es: "HOJA 01/09 · POR QUÉ EXISTE" },
  "s01.title": {"en": "Why I built EmuRV", "es": "Por qué desarrollé EmuRV"},
  "s01.p1": {"en": "The Microprocessors course uses <b>emu8086</b>, a Windows-only emulator for the 16-bit Intel 8086 from the DOS era. While working with it, I had difficulty running a program that could respond to keyboard input during execution. That experience led to this thesis.", "es": "En Microprocesadores se usa <b>emu8086</b>, un emulador del Intel 8086 de 16 bits para Windows, de la época del DOS. Al trabajar con él, encontré dificultades para ejecutar un programa que respondiera al teclado mientras corría. Esa experiencia dio origen a esta tesis."},
  "s01.p2": {"en": "I chose RISC-V because its instruction-set specification is open. I reviewed <b>RARS</b> (Java), <b>Ripes</b> (Qt) and <b>CPUlator</b> (a closed web application). With EmuRV I wanted a desktop application with interactive I/O and teaching material in Spanish.", "es": "Elegí RISC-V porque su especificación de instrucciones es abierta. Revisé <b>RARS</b> (Java), <b>Ripes</b> (Qt) y <b>CPUlator</b> (una aplicación web cerrada). Con EmuRV busqué desarrollar una aplicación de escritorio con entrada y salida interactivas y material didáctico en español."},
  "s01.box1.bt": {"en": "Programming and debugging", "es": "Programación y depuración"},
  "s01.box1.span": {
    en: 'Edit → assemble → run or step → watch registers and memory. Errors by <b>line and column</b>, in Spanish. A built-in 10-lesson course, 15 commented examples, and a graphics screen you can actually play a game on.',
    es: 'Editar → ensamblar → ejecutar o paso a paso → mirar registros y memoria. Errores por <b>línea y columna</b>, en español. Un curso de 10 lecciones adentro de la app, 15 ejemplos comentados y una pantalla gráfica donde de verdad se puede jugar.'
  },
  "s01.box2.bt": {"en": "Implementation details", "es": "Detalles de implementación"},
  "s01.box2.span": {"en": "I wrote the assembler, kept the execution loop interruptible and defined the memory policy. The following sections explain those decisions and how I tested the emulator’s results.", "es": "Escribí el ensamblador, mantuve interrumpible el bucle de ejecución y definí la política de memoria. Las siguientes secciones explican esas decisiones y cómo comprobé los resultados del emulador."},
  "s01.stamp": { en: "Thesis prototype · v0.1.0", es: "Prototipo de tesis · v0.1.0" },

  /* ---------- 02 demo ---------- */
  "s02.sheet": { en: "SHEET 02/09 · RUN IT HERE", es: "HOJA 02/09 · PROBALO ACÁ" },
  "s02.title": {"en": "Interactive browser demo", "es": "Demo interactiva en el navegador"},
  "s02.lede": {"en": "Press <b class=\"tacc\">Ensamblar</b>, then <b class=\"tacc\">Paso</b>, to see the registers change. Click the editor’s left margin to add a breakpoint. In «Suma interactiva», enter a value in the console when prompted; «Sprites» draws on the 320×240 screen. You can also change the theme and open the lessons and help.", "es": "Presioná <b class=\"tacc\">Ensamblar</b> y después <b class=\"tacc\">Paso</b> para ver cómo cambian los registros. Hacé clic en el margen izquierdo del editor para agregar un breakpoint. En «Suma interactiva», ingresá un valor en la consola cuando lo pida; «Sprites» dibuja en la pantalla de 320×240. También podés cambiar el tema y abrir las lecciones y la ayuda."},
  "s02.note": {"en": "This browser version recreates the interface and uses a JavaScript interpreter for <b>the three programs on the tabs</b>. The editor is read-only; other examples are marked «solo en la app». The desktop application uses <b>Unicorn Engine</b>, supports RV32IMAFDC, runs your own programs and includes ELF import/export, a GDB stub and detachable windows. The engineering sections describe that desktop application.", "es": "Esta versión para navegador reproduce la interfaz y usa un intérprete JavaScript para <b>los tres programas de las pestañas</b>. El editor es de solo lectura; los demás ejemplos están marcados «solo en la app». La aplicación de escritorio usa <b>Unicorn Engine</b>, soporta RV32IMAFDC, ejecuta tus propios programas e incluye importación y exportación ELF, servidor GDB y ventanas desacoplables. Las secciones técnicas describen esa aplicación de escritorio."},
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
  "s03.lede": {"en": "The application uses Tauri 2, a Rust core and <b>Unicorn Engine</b>, the CPU emulation engine derived from QEMU. Emulation runs on a separate thread. The interface sends commands and receives events such as <code>paused</code>, <code>output</code> and <code>registers_update</code>.", "es": "La aplicación usa Tauri 2, un núcleo en Rust y <b>Unicorn Engine</b>, el motor de emulación de CPU derivado de QEMU. La emulación corre en un hilo separado. La interfaz envía comandos y recibe eventos como <code>paused</code>, <code>output</code> y <code>registers_update</code>."},
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
  "s03.p1": {"en": "The assembler produces bytes and a <b>bidirectional mapping between source lines and addresses</b>. It records the source line of each emitted 32-bit word, including pseudo-instruction expansions, and the first word of each line. The debugger uses that mapping to set breakpoints from the editor margin and highlight the next instruction.", "es": "El ensamblador produce bytes y una <b>tabla bidireccional entre líneas del fuente y direcciones</b>. Registra la línea de cada palabra de 32 bits emitida, incluidas las expansiones de pseudoinstrucciones, y la primera palabra de cada línea. El depurador usa esa tabla para fijar breakpoints desde el margen del editor y resaltar la próxima instrucción."},
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
  "s03.h3b": {"en": "Keeping the Stop button responsive", "es": "Cómo mantuve la respuesta de Detener"},
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
  "s03.rf1": {"en": "After two steps, «la a0, saludo» has executed. The changed register is highlighted so the student can follow the effect of the instruction.", "es": "Después de dos pasos se ejecutó «la a0, saludo». El registro modificado queda resaltado para que el estudiante pueda seguir el efecto de la instrucción."},

  /* ---------- 04 ensamblador ---------- */
  "s04.sheet": { en: "SHEET 04/09 · THE ASSEMBLER", es: "HOJA 04/09 · EL ENSAMBLADOR" },
  "s04.title": {"en": "Writing the assembler", "es": "El desarrollo del ensamblador"},
  "s04.lede": {"en": "The thesis plan specified <b>Keystone</b> for assembly. I checked the 0.9.2 headers and found no <code>KS_ARCH_RISCV</code> entry in <code>ks_arch</code>. Without official RISC-V support, I wrote the assembler myself.", "es": "El plan de tesis proponía <b>Keystone</b> para ensamblar. Revisé los headers de la versión 0.9.2 y no encontré una entrada <code>KS_ARCH_RISCV</code> en <code>ks_arch</code>. Al no contar con soporte oficial para RISC-V, escribí el ensamblador."},
  "s04.p1": {"en": "That let me control the <b>source_map</b> and write beginner-oriented diagnostics with line and column positions in Spanish, instead of relying on English errors reported as byte offsets.", "es": "Eso me permitió controlar el <b>source_map</b> y escribir diagnósticos para principiantes, con línea y columna en español, sin depender de errores en inglés indicados como desplazamientos en bytes."},
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
  "s04.li1.b": {"en": "Instruction support and RV32/RV64 selection", "es": "Instrucciones y selección RV32/RV64"},
  "s04.li1.d": {
    en: 'RV32IMAFDC — integers, multiply/divide, single and double floating point with the <code>f0</code>–<code>f31</code> file, atomics, and hand-written compressed instructions. A selector in the toolbar switches the machine to RV64: <code>ld</code>/<code>sd</code>, <code>lwu</code>, the «W» instructions and 6-bit shift amounts. RV32 stays untouched, and a 64-bit instruction inside an RV32 program produces a teaching error rather than a wrong result.',
    es: 'RV32IMAFDC — enteros, multiplicación y división, coma flotante simple y doble con el banco <code>f0</code>–<code>f31</code>, atómicas y comprimidas escritas a mano. Un selector en la barra cambia la máquina a RV64: <code>ld</code>/<code>sd</code>, <code>lwu</code>, las instrucciones «W» y corrimientos con <code>shamt</code> de 6 bits. RV32 queda intacto, y una instrucción de 64 bits dentro de un programa RV32 da un error didáctico en vez de un resultado equivocado.'
  },
  "s04.li2.b": { en: "Directives a real project needs", es: "Las directivas que pide un proyecto real" },
  "s04.li2.d": {
    en: '<code>.include</code> resolved relative to the including file, <code>.macro</code> with named parameters, <code>.eqv</code>/<code>.equ</code> constants, and <code>%hi()</code>/<code>%lo()</code> so a student can see what <code>la</code> actually expands to. Multi-file programs work in the app and from the CLI.',
    es: '<code>.include</code> resuelto relativo al archivo que lo contiene, <code>.macro</code> con parámetros nombrados, constantes <code>.eqv</code>/<code>.equ</code>, y <code>%hi()</code>/<code>%lo()</code> para que el estudiante vea en qué expande realmente un <code>la</code>. Los programas multi-archivo funcionan en la app y por línea de comandos.'
  },
  "s04.li3.b": {"en": "ELF32 import and export", "es": "Importación y exportación ELF32"},
  "s04.li3.d": {
    en: 'Export produces a real ELF32 RISC-V that other tools load — Ripes, <code>objdump</code>. Import is the other direction: open a binary and the editor switches to read-only disassembly mode, with run, step and breakpoints working on the listing. A C program compiled with <code>riscv64-elf-gcc</code> loads too; an ELF with the wrong base address is rejected with a message that names the exact flag that is missing.',
    es: 'La exportación produce un ELF32 RISC-V de verdad que otras herramientas cargan — Ripes, <code>objdump</code>. La importación es el camino inverso: abrís un binario y el editor pasa a modo desensamblado de solo lectura, con ejecutar, paso y breakpoints funcionando sobre el listado. Un programa en C compilado con <code>riscv64-elf-gcc</code> también carga; un ELF con otras direcciones se rechaza con un mensaje que nombra exactamente el flag que falta.'
  },
  "s04.li4.b": {"en": "Relocatable ELF output", "es": "Exportación ELF reubicable"},
  "s04.li4.d": {
    en: '<code>asm --reubicable</code> emits symbol references PC-relative (<code>auipc</code>) instead of absolute and marks the ELF <code>ET_DYN</code>, for a loader that places it somewhere else. The default stays absolute: that is the one that matches EmuRV\'s memory map when you inspect it elsewhere.',
    es: '<code>asm --reubicable</code> emite las referencias a símbolos en forma PC-relativa (<code>auipc</code>) en vez de absoluta y marca el ELF <code>ET_DYN</code>, para un cargador que lo ubique en otro lado. El default sigue siendo absoluto: es el que coincide con el mapa de memoria de EmuRV cuando lo inspeccionás en otra herramienta.'
  },
  "s04.stamp": { en: "Verified against GNU as", es: "Verificado contra GNU as" },

  /* ---------- 05 dispositivos ---------- */
  "s05.sheet": { en: "SHEET 05/09 · DEVICES &amp; REAL TIME", es: "HOJA 05/09 · DISPOSITIVOS Y TIEMPO REAL" },
  "s05.title": {"en": "Emulated devices and Tetris", "es": "Dispositivos emulados y Tetris"},
  "s05.lede": {"en": "The memory map uses <b>RARS-compatible</b> base addresses and keyboard behavior. This lets existing Spanish-language teaching material use those same addresses in EmuRV.", "es": "El mapa de memoria usa direcciones base y comportamiento de teclado <b>compatibles con RARS</b>. Esto permite reutilizar en EmuRV esas mismas direcciones del material didáctico en español."},
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
  "s05.h3a": {"en": "Polling and hardware interrupt limitations", "es": "Polling y límites de las interrupciones de hardware"},
  "s05.p1": {"en": "I/O uses polling because Unicorn does not expose hardware interrupts. CLINT and PLIC support remains future work. The program can poll the keyboard without blocking, use syscall 30 for system time in milliseconds and syscall 32 to sleep; «Stop» can interrupt that sleep.", "es": "La entrada y salida usan polling porque Unicorn no expone interrupciones de hardware. El soporte de CLINT y PLIC queda como trabajo futuro. El programa puede consultar el teclado sin bloquearse, usar la syscall 30 para obtener el tiempo en milisegundos y la 32 para dormir; «Detener» puede interrumpir esa espera."},
  "s05.p2": {"en": "I made <code>.text</code> read-only as part of the W^X teaching policy. Jumping into data or modifying code stops execution with an explanatory message. This policy also causes incompatibilities with some official tests, detailed in the validation section.", "es": "Definí <code>.text</code> como solo lectura dentro de la política didáctica W^X. Saltar a los datos o modificar el código detiene la ejecución con un mensaje explicativo. Esta política también genera incompatibilidades con algunos tests oficiales, detalladas en la sección de validación."},
  "s05.h3b": { en: "Tetris as an acceptance test", es: "El Tetris como prueba de aceptación" },
  "s05.p2b": {"en": "The final lesson example is a <b>RV32IM port of an 8086 Tetris</b> from the Microprocessors course. It includes the in-memory board, bitmaps, collision detection, line clears and scoring, draws colored blocks on the 320×240 screen and accepts keyboard input. Automated test oracles check the game logic and resulting pixels.", "es": "El ejemplo final de las lecciones es un <b>port a RV32IM de un Tetris de 8086</b> de Microprocesadores. Incluye el tablero en memoria, bitmaps, detección de colisiones, líneas completas y puntaje; dibuja bloques de color en la pantalla de 320×240 y recibe entrada del teclado. Oráculos de pruebas automatizadas verifican la lógica del juego y los píxeles resultantes."},
  "s05.l1": { en: "Full-repaint frame rate (Rust side)", es: "Cuadros por segundo con repintado completo (lado Rust)" },
  "s05.l2": { en: "What the UI actually consumes", es: "Lo que la interfaz consume de verdad" },
  "s05.l3": { en: "Headroom over what the screen needs", es: "Margen sobre lo que la pantalla necesita" },
  "s05.l4": { en: "Hardware interrupts (CLINT / PLIC)", es: "Interrupciones de hardware (CLINT / PLIC)" },
  "s05.box.bt": {"en": "Full-frame repaint measurement", "es": "Medición con repintado completo"},
  "s05.box.span": {"en": "The 811 FPS figure is the median of five runs, ranging from 799–838. Each frame uses the production path: a <b>complete framebuffer repaint</b> followed by the frame-close syscall.", "es": "Los 811 FPS son la mediana de cinco corridas, con un rango de 799–838. Cada cuadro usa el camino de producción: <b>repintado completo del framebuffer</b> seguido de la syscall de cierre de cuadro."},

  /* ---------- 06 validación ---------- */
  "s06.sheet": { en: "SHEET 06/09 · HOW I KNOW IT'S CORRECT", es: "HOJA 06/09 · CÓMO SÉ QUE ES CORRECTO" },
  "s06.title": {"en": "Testing against the official RISC-V suites", "es": "Pruebas con las suites oficiales de RISC-V"},
  "s06.lede": {"en": "Alongside my own tests, I ran the <b>official riscv-tests</b> and <b>riscv-arch-test through RISCOF</b>. RISCOF compares the emulator’s output with <b>Sail, the formal reference model from RISC-V International</b>. Repository scripts reproduce the results below.", "es": "Además de mis propios tests, ejecuté los <b>riscv-tests oficiales</b> y <b>riscv-arch-test mediante RISCOF</b>. RISCOF compara la salida del emulador con <b>Sail, el modelo formal de referencia de RISC-V International</b>. Los scripts del repositorio permiten reproducir estos resultados."},
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
  "s06.h3a": {"en": "Four exclusions and two mismatches", "es": "Cuatro exclusiones y dos resultados distintos"},
  "s06.p1": {"en": "I traced each exclusion and mismatch to its cause. Some come from EmuRV’s memory and debugging policies; another comes from the underlying engine.", "es": "Rastreé la causa de cada exclusión y resultado distinto. Algunos provienen de las políticas de memoria y depuración de EmuRV; otro, del motor de emulación."},
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
  "s06.b2.span": {"en": "The test expects <code>c.ebreak</code> to reach the guest program’s trap handler. EmuRV uses <code>ebreak</code> for the interface’s software breakpoints, so it intercepts the instruction before the guest handler. That debugging policy causes the mismatch.", "es": "El test espera que <code>c.ebreak</code> llegue al manejador de traps del programa. EmuRV usa <code>ebreak</code> para los breakpoints por software de la interfaz e intercepta la instrucción antes del manejador del programa. Esa política de depuración provoca la diferencia."},
  "s06.b3.bt": {"en": "fmin: an inherited Unicorn limitation", "es": "fmin: una limitación heredada de Unicorn"},
  "s06.b3.span": {"en": "An isolated probe showed <code>fmax.s(1.0, sNaN)</code> returning a canonical qNaN instead of <code>1.0</code>. This follows IEEE 754-2008 semantics, superseded by RISC-V F v2.2. <b>QEMU fixed the behavior in 6.0, while Unicorn 2.x remains based on QEMU 5.0.1</b>. Subtest 20 of <code>fmin.S</code> detects the case; I documented it as an inherited engine limitation.", "es": "Una prueba aislada mostró que <code>fmax.s(1.0, sNaN)</code> devuelve un qNaN canónico en lugar de <code>1.0</code>. Ese comportamiento sigue IEEE 754-2008, superado por RISC-V F v2.2. <b>QEMU lo corrigió en la versión 6.0, mientras Unicorn 2.x sigue basado en QEMU 5.0.1</b>. El subtest 20 de <code>fmin.S</code> detecta el caso; lo documenté como una limitación heredada del motor."},
  "s06.h3b": {"en": "Automated tests and CI", "es": "Pruebas automatizadas e integración continua"},
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
  "s06.b4.span": {"en": "The documentation reported «271 + 10 + 119» tests. The 10 counted one test binary and omitted three others. During a documentation review, I found the error, reran the full suite and corrected the affected reports.", "es": "La documentación informaba «271 + 10 + 119» pruebas. El 10 contaba un solo binario de tests y omitía otros tres. Encontré el error al revisar la documentación, volví a ejecutar la suite completa y corregí los informes afectados."},
  "s06.stamp": { en: "78/78 · 72/72 · 0 fail", es: "78/78 · 72/72 · 0 fallos" },

  /* ---------- 07 rendimiento ---------- */
  "s07.sheet": { en: "SHEET 07/09 · PERFORMANCE", es: "HOJA 07/09 · RENDIMIENTO" },
  "s07.title": {"en": "Performance against QEMU, Spike and RARS", "es": "Rendimiento frente a QEMU, Spike y RARS"},
  "s07.lede": {"en": "I ran four RV32IM kernels using the <b>same algorithm on four emulators</b>, with roughly 500 M instructions per run and the median of five runs. Before timing them, I checked that all four produced the same numerical result for each kernel.", "es": "Ejecuté cuatro kernels RV32IM con el <b>mismo algoritmo en cuatro emuladores</b>, unas 500 M de instrucciones por corrida y la mediana de cinco corridas. Antes de medirlos, comprobé que los cuatro produjeran el mismo resultado numérico por kernel."},
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
  "chart.cap": {"en": "Each bar spans the slowest and fastest kernel for that emulator. The logarithmic scale fits values from 5.6 to 4 806 on the same chart; the table gives the exact measurements.", "es": "Cada barra va del kernel más lento al más rápido de ese emulador. La escala logarítmica permite representar valores de 5,6 a 4 806 en el mismo gráfico; la tabla muestra las mediciones exactas."},
  "s07.bh1": { en: "Kernel · RV32IM", es: "Kernel · RV32IM" },
  "s07.k1": { en: "arithmetic — pure ALU", es: "aritmética — ALU pura" },
  "s07.k2": { en: "memory — lw/sw over 4 KiB", es: "memoria — lw/sw sobre 4 KiB" },
  "s07.k3": { en: "calls — call/ret + stack", es: "llamadas — call/ret + pila" },
  "s07.k4": { en: "mixed — LCG + memory + mul", es: "mixto — LCG + memoria + mul" },
  "s07.tabnote": {
    en: "Millions of instructions per second, median of 5. EmuRV 0.1.0 (Unicorn 2.1.5) · QEMU 11.0.2 · Spike 1.1.1-dev · RARS 1.6 on OpenJDK 25, with its 0.133 s JVM startup discounted.",
    es: "Millones de instrucciones por segundo, mediana de 5. EmuRV 0.1.0 (Unicorn 2.1.5) · QEMU 11.0.2 · Spike 1.1.1-dev · RARS 1.6 sobre OpenJDK 25, con su arranque de JVM de 0,133 s descontado."
  },
  "s07.h3a": {"en": "What the measurements show", "es": "Qué muestran las mediciones"},
  "s07.p1": {"en": "EmuRV ran <b>28 to 120× faster than RARS</b>, which serves the same teaching purpose. It reached 81 % of Spike’s throughput on pure ALU work. Compared with plain QEMU, it was 0.7 to 1.5 orders of magnitude slower.", "es": "EmuRV fue <b>28 a 120× más rápido que RARS</b>, que cumple la misma función didáctica. Alcanzó el 81 % de la velocidad de Spike en ALU pura. Frente a QEMU puro quedó entre 0,7 y 1,5 órdenes de magnitud por debajo."},
  "s07.p2": {"en": "The measurements include an interruptibility check roughly every 40 ms, observation hooks for the keyboard, screen and syscalls, process startup and source assembly. Without execution slices, the engine reached 1 293 M instr/s on the same machine. The specification required 10 M instr/s; measured performance was 16 to 72× that target. I kept the responsiveness checks instead of pursuing more throughput.", "es": "Las mediciones incluyen una comprobación de interrupción cada 40 ms aproximadamente, los hooks de teclado, pantalla y syscalls, el arranque del proceso y el ensamblado. Sin tramos de ejecución, el motor alcanzó 1 293 M instr/s en la misma máquina. La especificación pedía 10 M instr/s; el rendimiento medido fue de 16 a 72× ese objetivo. Conservé los controles de respuesta en lugar de seguir buscando más velocidad."},
  "s07.b1.bt": { en: "Three numbers for one metric", es: "Tres números para una sola métrica" },
  "s07.b1.span": {"en": "My documentation had three frame rates for the same benchmark: 835, 797 and 832. Each came from a single run, with ±2.5 % variation. Five control runs returned 799, 804, 811, 814 and 838, placing those earlier figures within normal variation. I corrected the reporting method to include the median, range and <i>n</i>.", "es": "Mi documentación tenía tres cifras de cuadros por segundo para el mismo benchmark: 835, 797 y 832. Cada una provenía de una corrida única, con ±2,5 % de dispersión. Cinco corridas de control dieron 799, 804, 811, 814 y 838; las cifras anteriores estaban dentro de la variación normal. Corregí el método de reporte para incluir la mediana, el rango y el <i>n</i>."},
  "s07.h3b": {"en": "Benchmark limitations", "es": "Limitaciones del benchmark"},
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
  "s07.li4.d": {"en": "emu8086 is a step-by-step interpreter that redraws its interface per instruction, needs Windows and publishes no performance figures. I did not assign it a throughput value in this comparison.", "es": "emu8086 es un intérprete paso a paso que redibuja su interfaz por instrucción, requiere Windows y no publica cifras de rendimiento. No le asigné un valor de velocidad en esta comparación."},

  /* ---------- 08 interfaz ---------- */
  "s08.sheet": { en: "SHEET 08/09 · THE INTERFACE", es: "HOJA 08/09 · LA INTERFAZ" },
  "s08.title": {"en": "Editor, panels and themes", "es": "Editor, paneles y temas"},
  "s08.lede": {"en": "Themes use CSS design tokens, with one set of variable overrides per theme and no duplicated CSS. The app includes five themes and a user theme. <b>Automated tests check WCAG AA contrast</b> for text and editor syntax in all five built-in themes; a failing theme is not included in a release.", "es": "Los temas usan design tokens CSS, con un bloque de variables por tema y sin duplicar CSS. La app incluye cinco temas y uno personalizable. <b>Pruebas automatizadas comprueban el contraste WCAG AA</b> del texto y la sintaxis del editor en los cinco temas incluidos; un tema que falla no se incorpora a una entrega."},
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
  "s08.f4cap": {"en": "Pastel vaporwave colors, checked with the same WCAG AA contrast tests as the other themes.", "es": "Colores pastel vaporwave, comprobados con los mismos tests de contraste WCAG AA de los demás temas."},
  "s08.f5alt": {
    en: "EmuRV with the Disquete 90s theme: nineties desktop beige with coloured title bars",
    es: "EmuRV con el tema Disquete 90s: beige de escritorio noventero con barras de título de color"
  },
  "s08.f5b": { en: "Disquete 90s.", es: "Disquete 90s." },
  "s08.f5cap": {"en": "Nineties desktop beige and colored title bars, using the same theme tokens.", "es": "Beige de escritorio de los noventa y barras de título de color, usando los mismos tokens de tema."},
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
  "s08.f9cap": {"en": "In narrow windows, toolbar buttons become icon-only and controls wrap onto another row.", "es": "En ventanas angostas, los botones de la barra pasan a mostrar solo el ícono y los controles se distribuyen en otra fila."},
  "s08.f10alt": {
    en: "EmuRV showing a user-built custom theme",
    es: "EmuRV mostrando un tema personalizado armado por el usuario"
  },
  "s08.f10b": { en: "A user's theme.", es: "El tema de un usuario." },
  "s08.f10cap": {
    en: 'Unlike the built-ins, its values never enter <code>tokens.css</code>: they are CSS variables applied live on <code>:root</code> and saved on the machine.',
    es: 'A diferencia de los que vienen de fábrica, sus valores nunca entran a <code>tokens.css</code>: son variables CSS aplicadas en vivo sobre <code>:root</code> y guardadas en el equipo.'
  },
  "s08.h3a": {"en": "Interface and teaching-material languages", "es": "Idioma de la interfaz y del material didáctico"},
  "s08.p1": {"en": "The interface has an ES/EN selector. <b>Assembler and runtime diagnostics, and the lessons, remain in Spanish in both modes</b>. I kept the thesis teaching material in one language to avoid maintaining two versions during its evaluation.", "es": "La interfaz tiene selector ES/EN. <b>Los diagnósticos del ensamblador y del runtime, y las lecciones, siguen en español en ambos modos</b>. Conservé el material didáctico de la tesis en un solo idioma para evitar mantener dos versiones durante su evaluación."},

  /* ---------- 09 estado y stack ---------- */
  "s09.sheet": {"en": "SHEET 09/09 · STACK AND STATUS", "es": "HOJA 09/09 · STACK Y ESTADO"},
  "s09.title": {"en": "Technologies and pending work", "es": "Tecnologías y trabajo pendiente"},
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
  "s09.h3a": {"en": "Project status", "es": "Estado del proyecto"},
  "s09.p1": {"en": "The thesis is in progress. The list separates tested features, builds awaiting validation and pending work.", "es": "La tesis sigue en curso. La lista separa las funciones probadas, las builds pendientes de validación y el trabajo que falta completar."},
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
  "s09.c3h": {"en": "[ ] Pending work", "es": "[ ] Trabajo pendiente"},
  "s09.c3.li1": {"en": "· <b>Student usability study:</b> protocol and questionnaires ready; awaiting the supervisor’s approval and participants for the thesis evaluation.", "es": "· <b>Estudio de usabilidad con estudiantes:</b> protocolo y cuestionarios listos; faltan el aval del tutor y los participantes para la evaluación de la tesis."},
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
  "footer.small": {"en": "EmuRV is an undergraduate thesis prototype in Ingeniería Informática at FIUNI. The repository remains private during evaluation. Results come from repository reports with their measurement dates and conditions; this page does not publish the source code.", "es": "EmuRV es un prototipo de trabajo final de grado de Ingeniería Informática en la FIUNI. El repositorio sigue privado durante la evaluación. Los resultados provienen de informes del repositorio con sus fechas y condiciones de medición; esta página no publica el código fuente."},
  "footer.row1": {
    en: "Enrique Chyrnia · Backend &amp; Infrastructure",
    es: "Enrique Chyrnia · Backend e infraestructura"
  },
  "footer.back": { en: "← Back to home", es: "← Volver al inicio" }
};
