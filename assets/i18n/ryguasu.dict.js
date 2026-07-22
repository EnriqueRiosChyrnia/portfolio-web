/*
 * Diccionario EN/ES de ryguasu.html (rediseño "fichas amenaza→defensa").
 * El copy ES es definitivo (handoff/VOZ.md): no reescribir.
 */
window.SiteI18n = window.SiteI18n || {};
window.SiteI18n.dict = {

  /* ===== meta ===== */
  "meta.title": { en: "Ryguasu — Backend Case Study · Enrique Chyrnia", es: "Ryguasu — Caso de estudio backend · Enrique Chyrnia" },
  "meta.description": { en: "Ryguasu: a multi-tenant SaaS backend for inventory, sales, and POS in Paraguay. Seven threat cards — isolation, concurrency, offline, backups — each with its defense and how it was verified.", es: "Ryguasu: backend SaaS multi-tenant de inventario, ventas y POS para el comercio chico de Paraguay. Siete fichas de amenaza — aislamiento, concurrencia, offline, backups — cada una con su defensa y cómo se probó." },
  "meta.ogTitle": { en: "Ryguasu — Backend Case Study · Enrique Chyrnia", es: "Ryguasu — Caso de estudio backend · Enrique Chyrnia" },
  "meta.ogDescription": { en: "Multi-tenant SaaS backend for inventory, sales, and POS: seven threat→defense cards, each with how it was verified. Java, Spring Boot, PostgreSQL Row Level Security, encrypted backups.", es: "Backend SaaS multi-tenant de inventario, ventas y POS: siete fichas amenaza→defensa, cada una con cómo se verificó. Java, Spring Boot, Row Level Security en PostgreSQL, backups cifrados." },
  "meta.ogImageAlt": { en: "Enrique Chyrnia — Backend · APIs & Integration · Cloud systems", es: "Enrique Chyrnia — Backend · APIs e integraciones · Sistemas cloud" },
  "meta.ogLocale": { en: "en_US", es: "es_AR" },
  "meta.twitterTitle": { en: "Ryguasu — Backend Case Study · Enrique Chyrnia", es: "Ryguasu — Caso de estudio backend · Enrique Chyrnia" },
  "meta.twitterDescription": { en: "Multi-tenant SaaS backend for inventory, sales, and POS: seven threat→defense cards, each with how it was verified. Java, Spring Boot, PostgreSQL Row Level Security, encrypted backups.", es: "Backend SaaS multi-tenant de inventario, ventas y POS: siete fichas amenaza→defensa, cada una con cómo se verificó. Java, Spring Boot, Row Level Security en PostgreSQL, backups cifrados." },

  /* ===== topbar / nav ===== */
  "topbar.tid": { en: 'EC · ENRIQUE CHYRNIA <i>/ RYGUASU.PRT</i>', es: 'EC · ENRIQUE CHYRNIA <i>/ RYGUASU.PRT</i>' },
  "topbar.home": { en: "← Home", es: "← Inicio" },
  "nav.producto": { en: "Product", es: "Producto" },
  "nav.preguntas": { en: "The questions", es: "Las preguntas" },
  "nav.construccion": { en: "How it's built", es: "Cómo se construye" },
  "nav.estado": { en: "Status", es: "Estado" },
  "nav.stack": { en: "Stack", es: "Stack" },

  /* ===== hero ===== */
  "hero.type": { en: "<b>TYPE</b> PERSONAL PROJECT · MULTI-TENANT SAAS", es: "<b>TIPO</b> PROYECTO PERSONAL · SAAS MULTI-TENANT" },
  "hero.dateLabel": { en: "DATE", es: "FECHA" },
  "hero.sealAria": { en: "Ryguasu stamp: a hen", es: "Sello de Ryguasu: una gallina" },
  "hero.stamp": { en: "Backend in production", es: "Backend en producción" },
  "hero.blead": {
    en: 'Ryguasu ("hen" in Guaraní) is an inventory, sales, and cash register system for the small retail of Paraguay: the minimarket, the corner store, the neighborhood butcher shop. Every business shares one backend and one database, and that forces you to take isolation seriously. On this page I don\'t list features: <b>I answer the questions I\'d ask a system that keeps other people\'s money</b>.',
    es: 'Ryguasu ("gallina" en Guaraní) es un sistema de inventario, ventas y caja para el comercio chico de Paraguay: el minimercado, la despensa, la carnicería del barrio. Todos los negocios comparten un backend y una base de datos, y eso obliga a tomarse el aislamiento en serio. En esta página no listo features: <b>respondo las preguntas que yo le haría a un sistema que guarda la plata de otra gente</b>.'
  },
  "hero.rolLabel": { en: "Role · Backend &amp; infrastructure", es: "Rol · Backend e infraestructura" },
  "hero.rolP": {
    en: "I designed the data model and the architecture, wrote the backend, the isolation between businesses and the encrypted backups, and I take care of the deploys and of checking that production stays healthy. The frontend and the visual design are my teammates' work, built on my API contracts.",
    es: "Diseñé el modelo de datos y la arquitectura, escribí el backend, el aislamiento entre negocios y los backups cifrados, y me encargo de los deploys y de verificar que producción siga sana. El frontend y el diseño visual son de mis compañeros, construidos sobre mis contratos de API."
  },
  "hero.fact1": { en: "endpoints", es: "endpoints" },
  "hero.fact2": { en: "tables · 25 under RLS", es: "tablas · 25 bajo RLS" },
  "hero.fact3": { en: "backend tests", es: "tests de backend" },
  "hero.fact4": { en: "decisions documented", es: "decisiones documentadas" },

  /* ===== 00 producto ===== */
  "s00.sheet": { en: "SHEET 00 · THE PRODUCT", es: "HOJA 00 · EL PRODUCTO" },
  "s00.title": { en: "First, the product", es: "Primero, el producto" },
  "s00.p1": {
    en: "A minimarket here keeps its inventory on paper or in a spreadsheet: nobody knows what the goods on the shelf really cost, prices move with the dollar, and the till leaves no history anyone can check. Ryguasu is a <b>subscription per branch</b> with a 14-day trial: the business loads its products — factory barcodes, internal codes or scale PLUs — and sells from a web POS that can take losing the internet.",
    es: "Un minimercado acá lleva el inventario en papel o en una planilla: nadie sabe cuánto costó de verdad lo que está en góndola, los precios se mueven con el dólar y la caja no deja historia que se pueda revisar. Ryguasu es una <b>suscripción por sucursal</b> con 14 días de prueba: el negocio carga sus productos — códigos de fábrica, códigos internos o PLU de balanza — y vende desde un POS web que aguanta quedarse sin internet."
  },
  "s00.p2": {
    en: "The backend does the boring, hard part: it recalculates the weighted average cost on every purchase, freezes price, cost and name into every sale line, and handles Guaraní as base with ARS/USD/BRL at each business's own rate. The demo tenant carries <b>4,551 sales over 183 days</b>, squared against its own reports.",
    es: "El backend hace la parte aburrida y difícil: recalcula el costo promedio ponderado en cada compra, congela precio, costo y nombre en cada línea de venta, y maneja Guaraní como base con ARS/USD/BRL a la tasa de cada negocio. El tenant de demostración lleva <b>4.551 ventas en 183 días</b>, cuadradas contra sus propios reportes."
  },
  "s00.figAria": { en: "Enlarge the POS photo", es: "Ampliar la foto del POS" },
  "s00.figAlt": {
    en: "Ryguasu POS: quick-sale screen with a ticket loaded, total in Guaraníes and an offline indicator with queued sales",
    es: "POS de Ryguasu: pantalla de venta rápida con un ticket cargado, total en Guaraníes e indicador de sin conexión con ventas en cola"
  },
  "s00.figTag": { en: "EXHIBIT A · POS in use, sale in progress", es: "ADJUNTO A · POS en uso, venta en curso" },
  "s00.figZoom": { en: "click to enlarge", es: "click para ampliar" },
  "s00.figCap": {
    en: 'A ticket with products by code and by weight (scale), total in Gs. — and top right, <b class="soft">"Offline — 3 sales queued"</b>: the till keeps selling without internet.',
    es: 'Ticket con productos por código y por peso (balanza), total en Gs. — y arriba a la derecha, <b class="soft">"Sin conexión — 3 ventas en cola"</b>: la caja sigue vendiendo sin internet.'
  },

  /* ===== lightbox ===== */
  "lb.aria": { en: "Close the enlarged photo", es: "Cerrar la foto ampliada" },
  "lb.alt": { en: "Ryguasu POS, enlarged", es: "POS de Ryguasu ampliado" },
  "lb.tag": { en: "EXHIBIT A · RYGUASU.PRT · Quick-sale POS, Almacén San Roque", es: "ADJUNTO A · RYGUASU.PRT · POS venta rápida, Almacén San Roque" },
  "lb.close": { en: "click to close", es: "click para cerrar" },

  /* ===== intro fichas ===== */
  "intro.sheet": { en: "CARDS 01–07 · THREAT / DEFENSE", es: "FICHAS 01–07 · AMENAZA / DEFENSA" },
  "intro.title": { en: "Seven ways to break it", es: "Siete maneras de romperlo" },
  "intro.lede": {
    en: 'A system like this isn\'t judged by the days when everything runs fine. I built these cards around the uncomfortable questions — the ones an interviewer would ask me, or reality would — and each one answers with the <b class="tred">threat</b>, the <b class="tok">defense that exists today</b> and how it was tested. The mistakes along the way are told too, <b>exactly as they happened</b>.',
    es: 'A un sistema así no se lo juzga por los días en que todo anda bien. Armé estas fichas con las preguntas incómodas — las que me haría un entrevistador, o la realidad — y cada una responde con la <b class="tred">amenaza</b>, la <b class="tok">defensa que existe hoy</b> y cómo se probó. Los errores del camino también están contados, <b>tal cual pasaron</b>.'
  },

  /* etiquetas compartidas de las fichas */
  "ficha.threat": { en: "Threat", es: "Amenaza" },
  "ficha.defense": { en: "Proven defense", es: "Defensa probada" },

  /* ===== ficha 01 — aislamiento ===== */
  "f01.num": { en: "CARD 01/07", es: "FICHA 01/07" },
  "f01.q": { en: "What if one business queries another's data?", es: "¿Y si un negocio consulta los datos de otro?" },
  "f01.threat": {
    en: "A bug in a query, or a nightly job that forgot its tenant, returns the inventory and sales of <b>every business</b>. With a shared schema this accident gives no warning: everything works, until a customer sees data that isn't theirs.",
    es: "Un bug en una query, o un job nocturno que olvidó su tenant, devuelve el inventario y las ventas de <b>todos los negocios</b>. Con esquema compartido este accidente no avisa: todo funciona, hasta que un cliente ve datos que no son suyos."
  },
  "f01.defense": {
    en: 'Two independent layers: the application resolves the tenant on every request, and underneath, <b class="ink">PostgreSQL Row Level Security</b> with <code>FORCE</code> policies and a role without <code>BYPASSRLS</code>. Without context, the database returns <b class="ink">zero rows</b> — never someone else\'s.',
    es: 'Dos capas independientes: la aplicación resuelve el tenant en cada request, y debajo <b class="ink">Row Level Security de PostgreSQL</b> con políticas <code>FORCE</code> y un rol sin <code>BYPASSRLS</code>. Sin contexto, la base devuelve <b class="ink">cero filas</b> — nunca las de otro.'
  },
  "f01.demoCap": { en: "SELECT * FROM products — «Almacén San Roque» tenant session", es: "SELECT * FROM products — sesión del tenant «Almacén San Roque»" },
  "f01.btnRemove": { en: "Remove tenant context", es: "Quitar contexto de tenant" },
  "f01.btnRestore": { en: "Restore context", es: "Restaurar contexto" },
  "f01.col1": { en: "code", es: "código" },
  "f01.col2": { en: "product", es: "producto" },
  "f01.col3": { en: "stock", es: "stock" },
  "f01.col4": { en: "price Gs.", es: "precio Gs." },
  "f01.row3": { en: "PLU 15 · Milanesa (scale)", es: "PLU 15 · Milanesa (balanza)" },
  "f01.rows": { en: "154 rows · only their business, always", es: "154 filas · solo su negocio, siempre" },
  "f01.zero": { en: "0 rows", es: "0 filas" },
  "f01.zeroSub": { en: "A visible failure — never a silent leak", es: "Falla visible — nunca una fuga silenciosa" },
  "f01.zeroWhy": { en: "Background jobs must set an explicit sentinel context, or they read nothing.", es: "Los jobs de fondo deben fijar un contexto centinela explícito, o no leen nada." },
  "f01.stamp": { en: "Verified · 42/42 in 403", es: "Verificado · 42/42 en 403" },
  "f01.verif": {
    en: '<b class="vt">Verification</b> — a suite authenticates as business A and hits all 42 endpoints with business B\'s identifiers. <b>My part:</b> both layers. I enabled RLS when the schema had 6 tables; bolting it on later, with 25, would have been much worse.',
    es: '<b class="vt">Verificación</b> — una suite se autentica como el negocio A y pega a los 42 endpoints con identificadores del negocio B. <b>Mi parte:</b> las dos capas. Activé RLS cuando el esquema tenía 6 tablas; meterlo después, con 25, hubiera sido mucho peor.'
  },

  /* ===== ficha 02 — concurrencia ===== */
  "f02.num": { en: "CARD 02/07", es: "FICHA 02/07" },
  "f02.q": { en: "What if two tills sell the last unit at the same time?", es: "¿Y si dos cajas venden la última unidad al mismo tiempo?" },
  "f02.threat": {
    en: "Two sales read <code>stock = 1</code> at the same time, both go through, stock lands at −1 and afterwards nobody knows the true average cost.",
    es: "Dos ventas leen <code>stock = 1</code> al mismo tiempo, las dos pasan, el stock queda en −1 y después nadie sabe cuál es el costo promedio verdadero."
  },
  "f02.defense": {
    en: '<code>SELECT … FOR UPDATE</code> on product and balance, <b class="ink">always in the same order</b> — concurrent sales serialize without deadlocks. Every money or stock mutation demands an <code>Idempotency-Key</code>.',
    es: '<code>SELECT … FOR UPDATE</code> sobre producto y saldo, <b class="ink">siempre en el mismo orden</b> — las ventas concurrentes serializan sin deadlocks. Toda mutación de dinero o stock exige un <code>Idempotency-Key</code>.'
  },
  "f02.term1": {
    en: '<span class="k">v1 · check-then-insert</span> ……… real 2-thread race → 500s <span class="fail">[FAIL]</span>',
    es: '<span class="k">v1 · check-then-insert</span> ……… carrera real de 2 hilos → 500s <span class="fail">[FAIL]</span>'
  },
  "f02.term2": {
    en: '<span class="k">v2 · INSERT … ON CONFLICT DO NOTHING</span> … same race test → 1 sale, 0 errors <span class="ok">[ OK ]</span>',
    es: '<span class="k">v2 · INSERT … ON CONFLICT DO NOTHING</span> … mismo test de carrera → 1 venta, 0 errores <span class="ok">[ OK ]</span>'
  },
  "f02.stamp": { en: "1 sale · 0 errors", es: "1 venta · 0 errores" },
  "f02.verif": {
    en: '<b class="vt">Verification</b> — a race test with two threads against a real Postgres (Testcontainers). <b>My part:</b> the first version returned 500s under the race; I rewrote it and kept that same test as a permanent regression.',
    es: '<b class="vt">Verificación</b> — test de carrera con dos hilos contra un Postgres real (Testcontainers). <b>Mi parte:</b> la primera versión devolvía 500 bajo carrera; la reescribí y dejé ese mismo test como regresión permanente.'
  },

  /* ===== ficha 03 — offline ===== */
  "f03.num": { en: "CARD 03/07", es: "FICHA 03/07" },
  "f03.q": { en: "What if the internet drops mid-shift?", es: "¿Y si se corta internet a mitad del turno?" },
  "f03.threat": {
    en: "The till stops selling — or worse: it sells, and those sales get lost before reaching the server. And here internet and power cuts just happen; they're not a textbook scenario.",
    es: "La caja deja de vender — o peor: vende, y esas ventas se pierden antes de llegar al servidor. Y acá los cortes de internet o de luz pasan nomás; no son un escenario de libro."
  },
  "f03.defense": {
    en: 'Offline-first POS with a <b class="ink">local outbox</b>: sales queue up and sync when the connection comes back. Each device carries a <b class="ink">JWT license signed by the backend</b> with its tenant and a grace window based on subscription state — identity comes from the signature, never from client input.',
    es: 'POS offline-first con <b class="ink">outbox local</b>: las ventas se encolan y sincronizan al volver la conexión. Cada dispositivo porta una <b class="ink">licencia JWT firmada por el backend</b> con su tenant y una ventana de gracia según el estado de la suscripción — la identidad sale de la firma, jamás del input del cliente.'
  },
  "f03.chip1": { en: "local sale", es: "venta local" },
  "f03.chip3": { en: "signed sync", es: "sync firmado" },
  "f03.chipNote": {
    en: "A stock conflict never produces negative stock: it gets flagged and waits for manual resolution through a dedicated endpoint. A queued sale is never lost to an expired window.",
    es: "Un conflicto de stock jamás produce stock negativo: queda marcado y espera resolución manual por endpoint dedicado. Una venta encolada nunca se pierde por ventana vencida."
  },
  "f03.stamp": { en: "No sale lost", es: "Ninguna venta perdida" },
  "f03.verif": {
    en: '<b class="vt">Verification</b> — the sync suite: idempotent replay, injected conflicts, expired licenses inside and outside the grace window. <b>My part:</b> the sync protocol, the signed licenses and the conflict policy.',
    es: '<b class="vt">Verificación</b> — suite de sincronización: replay idempotente, conflictos inyectados, licencias vencidas dentro y fuera de gracia. <b>Mi parte:</b> el protocolo de sync, las licencias firmadas y la política de conflictos.'
  },

  /* ===== ficha 04 — moneda / historia ===== */
  "f04.num": { en: "CARD 04/07", es: "FICHA 04/07" },
  "f04.q": { en: "What if the dollar moves after the sale?", es: "¿Y si el dólar cambia después de la venta?" },
  "f04.threat": {
    en: "If history gets recalculated with the new rate or the new price, old margins and reports stop adding up. And a client with bad intentions could send its own total.",
    es: "Si la historia se recalcula con la tasa o el precio nuevo, los márgenes y reportes viejos dejan de cerrar. Y un cliente con malas intenciones podría mandar su propio total."
  },
  "f04.defense": {
    en: 'The client sends only <code>productId</code> and <code>quantity</code>. The server computes and <b class="ink">freezes per line</b> the price, cost, name and exchange rate at the instant of the sale, in <code>numeric(19,4)</code> — never floating point. Changing a price today never rewrites the past.',
    es: 'El cliente envía solo <code>productId</code> y <code>quantity</code>. El servidor calcula y <b class="ink">congela por línea</b> precio, costo, nombre y tasa de cambio al instante de la venta, en <code>numeric(19,4)</code> — nunca punto flotante. Cambiar un precio hoy jamás reescribe el pasado.'
  },
  "f04.stamp": { en: "Immutable history", es: "Historia inmutable" },
  "f04.verif": {
    en: '<b class="vt">Verification</b> — the demo tenant\'s reports (183 days, 4,551 sales) close against the frozen lines. <b>My part:</b> all the money is computed on the server; the client never sends amounts.',
    es: '<b class="vt">Verificación</b> — los reportes del tenant demo (183 días, 4.551 ventas) cierran contra las líneas congeladas. <b>Mi parte:</b> toda la plata se calcula en el servidor; el cliente nunca manda montos.'
  },

  /* ===== ficha 05 — arranque ===== */
  "f05.num": { en: "CARD 05/07", es: "FICHA 05/07" },
  "f05.q": { en: "What if it boots with default secrets?", es: "¿Y si arranca con secrets por defecto?" },
  "f05.threat": {
    en: "A rushed deploy with example credentials: the system starts, works, and sits open to anyone who has read the repository.",
    es: "Un deploy apurado con credenciales de ejemplo: el sistema levanta, funciona, y queda abierto a cualquiera que haya leído el repositorio."
  },
  "f05.defense": {
    en: 'A startup guard <b class="ink">aborts the boot</b> on default or missing secrets — before the migrations can run. It came out of an independent security audit: 7 findings, each proven by <b class="ink">executing the attack</b>, each closed. On top of that: gitleaks over the full history on every push.',
    es: 'Un guard de arranque <b class="ink">aborta el boot</b> ante secrets default o ausentes — antes de que corran las migraciones. Nació de una auditoría de seguridad independiente: 7 hallazgos, cada uno probado <b class="ink">ejecutando el ataque</b>, cada uno cerrado. Además: gitleaks sobre el historial completo en cada push.'
  },
  "f05.stamp": { en: "7/7 findings closed", es: "7/7 hallazgos cerrados" },
  "f05.verif": {
    en: '<b class="vt">Verification</b> — each finding was closed by running the attack again, not by ticking a spreadsheet. <b>My part:</b> the startup guard and closing all 7.',
    es: '<b class="vt">Verificación</b> — cada hallazgo se cerró ejecutando de nuevo el ataque, no marcando una planilla. <b>Mi parte:</b> el guard de arranque y el cierre de los 7.'
  },

  /* ===== ficha 06 — backup ===== */
  "f06.num": { en: "CARD 06/07", es: "FICHA 06/07" },
  "f06.q": { en: "What if the server dies tonight?", es: "¿Y si el servidor muere esta noche?" },
  "f06.threat": {
    en: 'Losing days of sales from dozens of businesses. I work with an old rule of the trade: <b class="ink">a backup that wasn\'t tested is not a backup</b>. Getting to a real one took me four iterations, and they\'re documented.',
    es: 'Perder días de ventas de decenas de negocios. Trabajo con una regla vieja del oficio: <b class="ink">un backup que no se probó no es un backup</b>. Llegar a uno de verdad me tomó cuatro iteraciones, y están documentadas.'
  },
  "f06.defense": {
    en: 'Nightly job: dump → compression → <b class="ink">age</b> encryption with a public key (the private one never touches the server) → R2, with checksums recorded in the database. The dump <b class="ink">completes or screams</b>: it never ends up silently filtered.',
    es: 'Job nocturno: volcado → compresión → cifrado <b class="ink">age</b> con clave pública (la privada nunca toca el servidor) → R2, con checksums registrados en base. El dump <b class="ink">se completa o grita</b>: nunca queda filtrado en silencio.'
  },
  "f06.term1": {
    en: '<span class="k">v1 · pg_dump vs forced RLS</span> …… production rejected it (local passed: it was superuser) <span class="fail">[FAIL]</span>',
    es: '<span class="k">v1 · pg_dump vs RLS forzado</span> …… producción lo rechazó (local pasó: era superuser) <span class="fail">[FAIL]</span>'
  },
  "f06.term2": {
    en: '<span class="k">v2 · toggle + guaranteed trap</span> … re-forces RLS even on failure · tested with kill −9 <span class="ok">[ OK ]</span>',
    es: '<span class="k">v2 · toggle + trap garantizado</span> … re-fuerza RLS incluso ante fallo · probado con kill −9 <span class="ok">[ OK ]</span>'
  },
  "f06.term3": {
    en: '<span class="k">local subsystem harness</span> …… 37/37 scenarios, with injected failures and restore to a local S3 <span class="ok">[ OK ]</span>',
    es: '<span class="k">harness local del subsistema</span> …… 37/37 escenarios, con fallos inyectados y restore a S3 local <span class="ok">[ OK ]</span>'
  },
  "f06.stamp": { en: "Completes or screams", es: "Se completa o grita" },
  "f06.verif": {
    en: '<b class="vt">Verification</b> — the v1 [FAIL] left me a lesson in writing: test with production privileges, not with my developer ones. <b>My part:</b> the whole pipeline, from the cron to the encryption.',
    es: '<b class="vt">Verificación</b> — el [FAIL] de la v1 me dejó una lección anotada: probar con los privilegios de producción, no con los míos de desarrollador. <b>Mi parte:</b> todo el pipeline, del cron al cifrado.'
  },

  /* ===== ficha 07 — silencio / restore ===== */
  "f07.num": { en: "CARD 07/07", es: "FICHA 07/07" },
  "f07.q": { en: "What if the backup never ran — and nobody noticed?", es: "¿Y si el backup nunca corrió — y nadie lo notó?" },
  "f07.threat": {
    en: 'The scariest case isn\'t the backup failing: it\'s the backup quietly not running and nobody finding out. The machine died before reporting, and the "daily backup" hasn\'t existed for three weeks.',
    es: 'Lo que más miedo da no es que el backup falle: es que deje de correr y nadie se entere. La máquina murió antes de avisar, y el "backup diario" lleva tres semanas sin existir.'
  },
  "f07.defense": {
    en: '<b class="ink">Dead man\'s switch</b> (Healthchecks.io): the job pings when it ends well and when it ends badly — and the <b class="ink">absence of a ping is the alarm</b>. The "died before reporting" case is covered by design.',
    es: '<b class="ink">Dead man\'s switch</b> (Healthchecks.io): el job hace ping al terminar bien y al terminar mal — y la <b class="ink">ausencia de ping es la alarma</b>. El caso "murió antes de avisar" está cubierto por diseño.'
  },
  "f07.drillH": { en: "Restore drill · 2026-07-17 · from R2, cold", es: "Simulacro de restore · 2026-07-17 · desde R2, en frío" },
  "f07.drill1": { en: "<b>4,553</b> sales", es: "<b>4.553</b> ventas" },
  "f07.drill2": { en: "<b>154</b> products", es: "<b>154</b> productos" },
  "f07.drill3": { en: "<b>3</b> tenants", es: "<b>3</b> tenants" },
  "f07.drill4": { en: "<b>25/25</b> RLS tables enabled and forced", es: "<b>25/25</b> tablas RLS activas y forzadas" },
  "f07.drill5": { en: "0 manual fixes", es: "0 fixes manuales" },
  "f07.drillNote": {
    en: "The drill also exposed that the dumps weren't including their FORCE statements — now every dump appends them itself: the restore is self-contained by construction.",
    es: "El simulacro además expuso que los dumps no incluían sus FORCE — ahora cada dump se los agrega solo: el restore es autocontenido por construcción."
  },
  "f07.stamp": { en: "Restore tested · 25/25", es: "Restore probado · 25/25" },
  "f07.verif": {
    en: '<b class="vt">Verification</b> — downloaded, checksum verified, decrypted and restored onto a clean Postgres. <b>My part:</b> the switch, the drill and the fix it left behind.',
    es: '<b class="vt">Verificación</b> — descargado, checksum verificado, descifrado y restaurado sobre un Postgres limpio. <b>Mi parte:</b> el switch, el drill y la corrección que dejó.'
  },

  /* ===== cómo se construye ===== */
  "build.sheet": { en: "SHEET · HOW IT'S BUILT", es: "HOJA · CÓMO SE CONSTRUYE" },
  "build.title": { en: "Why those defenses exist", es: "Por qué esas defensas existen" },
  "build.lede": {
    en: "None of the above came out of one inspired night. It came out of working with written specs, decisions recorded with their why, and one fixed rule: nothing reaches production without a human approving it.",
    es: "Nada de lo de arriba salió de una noche inspirada. Salió de trabajar con specs escritas, decisiones anotadas con su porqué, y una regla fija: nada llega a producción sin que un humano lo apruebe."
  },
  "build.li1.b": { en: "Spec-driven development · 35 specs", es: "Spec-driven development · 35 specs" },
  "build.li1.span": {
    en: "I work with SDD: every part of the system is specified before it's coded, and those 35 specs are the source of truth. The written API rules — an endpoint that deviates updates the contract in the same commit. If two specs contradict each other, I escalate it; I don't resolve it silently on my own.",
    es: "Trabajo con SDD: cada parte del sistema se especifica antes de codearse, y esas 35 specs son la fuente de verdad. La API escrita manda — un endpoint que se desvía actualiza el contrato en el mismo commit. Si dos specs se contradicen, lo escalo; no lo resuelvo por mi cuenta en silencio."
  },
  "build.li2.b": { en: "49 decisions with their why", es: "49 decisiones con su porqué" },
  "build.li2.span": {
    en: 'ADR-style records: date, status, reasoning, and what supersedes them if they change. Research before code: bonus units ("12+1") were settled by reading IAS 2 — zero code changed, one document written.',
    es: 'Registros estilo ADR: fecha, estado, razonamiento, y quién las supera si cambian. Investigar antes de codear: las unidades bonificadas ("12+1") se resolvieron leyendo IAS 2 — cero código cambiado, un documento escrito.'
  },
  "build.li3.b": { en: "CI saw what my machine didn't", es: "El CI vio lo que mi máquina no" },
  "build.li3.span": {
    en: "GitHub Actions runs the tests with Testcontainers against a real Postgres. The Linux runners caught a timestamp-precision bug that never reproduced on macOS — it would have blown up only in production. Going over the rest of the code turned up 4 more cases of the same problem.",
    es: "GitHub Actions corre los tests con Testcontainers contra un Postgres real. Los runners de Linux agarraron un bug de precisión de timestamps que en macOS no se reproducía nunca — habría explotado recién en producción. Revisando el resto del código aparecieron 4 casos más del mismo problema."
  },
  "build.li4.b": { en: "Human in the loop", es: "Humano en el loop" },
  "build.li4.span": {
    en: "The project is developed with AI assistance, under one condition that isn't negotiable: no push, merge or deploy goes out without my confirmation. The whole infrastructure costs about 50 dollars a month.",
    es: "El proyecto se desarrolla con asistencia de IA, con una condición que no se negocia: ningún push, merge ni deploy sale sin mi confirmación. Toda la infraestructura cuesta unos 50 dólares al mes."
  },

  /* ===== estado ===== */
  "estado.sheet": { en: "SHEET · PROJECT STATUS", es: "HOJA · ESTADO DEL PROYECTO" },
  "estado.title": { en: "What's done, what's written, what's missing", es: "Qué está hecho, qué está escrito, qué falta" },
  "estado.lede": {
    en: "I prefer to separate what already runs in production from what's specified and not yet migrated. Mixing the two would be selling you something that doesn't exist.",
    es: "Prefiero separar lo que ya corre en producción de lo que está escrito y todavía no migré. Mezclar las dos cosas sería venderte algo que no existe."
  },
  "estado.col1.h": { en: "[x] Implemented and verified", es: "[x] Implementado y verificado" },
  "estado.col1.li1": { en: "· RLS on 25 tables · 42/42 adversarial", es: "· RLS en 25 tablas · 42/42 adversarial" },
  "estado.col1.li2": { en: "· Idempotency and locks under a real race", es: "· Idempotencia y locks bajo carrera real" },
  "estado.col1.li3": { en: "· Encrypted backups + restore drill 25/25", es: "· Backups cifrados + restore drill 25/25" },
  "estado.col1.li4": { en: "· Offline sync with signed licenses", es: "· Offline sync con licencias firmadas" },
  "estado.col1.li5": { en: "· Multi-currency with frozen rates", es: "· Multi-moneda con tasas congeladas" },
  "estado.col1.li6": { en: "· Manual subscription payments (Phase 9)", es: "· Pago manual de suscripciones (Fase 9)" },
  "estado.col1.li7": { en: "· Open-registration defense: per-IP rate limit, 30-day trial purge", es: "· Defensa del registro abierto: rate-limit por IP, purga de trials a 30 días" },
  "estado.col2.h": { en: "[~] Specified, migrations pending", es: "[~] Especificado, migraciones pendientes" },
  "estado.col2.li1": { en: "· Billing with versioned prices and payment snapshots (DEC-032/033/035/037)", es: "· Billing con precios versionados y snapshots de pago (DEC-032/033/035/037)" },
  "estado.col2.li2": { en: "· Zero Trust over the staff panel — the separate app exists; the deploy behind Access is pending verification", es: "· Zero Trust sobre el panel staff — la app separada existe; el deploy tras Access está pendiente de verificación" },
  "estado.col2.li3": { en: "· Full sale by weight: PLU and scale barcodes (spec 15)", es: "· Venta por peso completa: PLU y códigos de balanza (spec 15)" },
  "estado.col3.h": { en: "[ ] Future, written as a rule", es: "[ ] Futuro, escrito como regla" },
  "estado.col3.li1": { en: "· A separate staging before touching production with the first paying customer — hard rule, not good intention", es: "· Staging separado antes de tocar producción con el primer cliente pago — regla dura, no buena intención" },
  "estado.col3.li2": { en: "· Public demo with a seeded tenant", es: "· Demo pública con tenant sembrado" },
  "estado.col3.li3": { en: "· Access for AI agents via MCP (spec 19)", es: "· Acceso para agentes IA vía MCP (spec 19)" },

  /* ===== stack ===== */
  "stack.sheet": { en: "SHEET · TECHNICAL INVENTORY", es: "HOJA · INVENTARIO TÉCNICO" },
  "stack.title": { en: "Technical inventory", es: "Inventario técnico" },
  "stack.i4": { en: "Server-side sessions · CSRF · RBAC", es: "Sesiones server-side · CSRF · RBAC" },

  /* ===== footer ===== */
  "footer.contacto": { en: "Contact", es: "Contacto" },
  "footer.p": { en: "If you're left with a question the cards don't answer, write me.", es: "Si te quedó una pregunta que las fichas no responden, escribime." },
  "footer.small": { en: "Ryguasu is a proprietary product in active development. This page describes the engineering without exposing source code, credentials, internal URLs, schemas, or customer data.", es: "Ryguasu es un producto propietario en desarrollo activo. Esta página describe la ingeniería sin exponer código fuente, credenciales, URLs internas, esquemas ni datos de clientes." },
  "footer.row1": { en: "Enrique Chyrnia · Backend &amp; Infrastructure", es: "Enrique Chyrnia · Backend e infraestructura" },
  "footer.back": { en: "← Back to home", es: "← Volver al inicio" }
};
