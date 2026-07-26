/* Diccionario EN/ES — Legajo de experiencia (backend e infraestructura). */
(function () {
  "use strict";
  window.SiteI18n = window.SiteI18n || {};
  var d = (window.SiteI18n.dict = window.SiteI18n.dict || {});

  function add(map) { Object.keys(map).forEach(function (k) { d[k] = map[k]; }); }

  add({
    /* ── meta ── */
    "meta.title": {
      en: "Work Experience — Backend & Infrastructure · Enrique Chyrnia",
      es: "Experiencia laboral — Backend e infraestructura · Enrique Chyrnia"
    },
    "meta.description": {
      en: "Enrique Chyrnia's work experience: backend and technical infrastructure on a production platform.",
      es: "La experiencia laboral de Enrique Chyrnia: backend e infraestructura técnica en una plataforma en producción."
    },
    "meta.ogTitle": {
      en: "Work Experience — Backend & Infrastructure · Enrique Chyrnia",
      es: "Experiencia laboral — Backend e infraestructura · Enrique Chyrnia"
    },
    "meta.ogDescription": {
      en: "Backend and technical infrastructure on a production platform: APIs, persistence, deployment, and observability.",
      es: "Backend e infraestructura técnica en una plataforma en producción: APIs, persistencia, deploy y observabilidad."
    },
    "meta.ogImageAlt": {
      en: "Enrique Chyrnia — Backend · APIs & Integration · Cloud systems",
      es: "Enrique Chyrnia — Backend · APIs e integraciones · Sistemas en la nube"
    },
    "meta.ogLocale": { en: "en_US", es: "es_PY" },
    "meta.twitterTitle": {
      en: "Work Experience — Backend & Infrastructure · Enrique Chyrnia",
      es: "Experiencia laboral — Backend e infraestructura · Enrique Chyrnia"
    },
    "meta.twitterDescription": {
      en: "Backend and technical infrastructure on a production platform: APIs, persistence, deployment, and observability.",
      es: "Backend e infraestructura técnica en una plataforma en producción: APIs, persistencia, deploy y observabilidad."
    },

    /* ── topbar ── */
    "topbar.tid": { en: "EC · Enrique Chyrnia <i>/ File</i>", es: "EC · Enrique Chyrnia <i>/ Legajo</i>" },
    "topbar.home": { en: "← Home", es: "← Inicio" },
    "nav.contexto": { en: "Context", es: "Contexto" },
    "nav.m1": { en: "Cloud backend", es: "Backend y nube" },
    "nav.m2": { en: "Onboarding", es: "Registro" },
    "nav.m3": { en: "Backoffice", es: "Panel interno" },
    "nav.stack": { en: "Stack", es: "Inventario" },
    "nav.preparado": { en: "Next step", es: "Siguiente paso" },
    "tab": { en: "Backend · Infra", es: "Backend · Infra" },
    "pgh.file": { en: "Experience file", es: "Legajo de experiencia" },

    /* ── portada ── */
    "hero.piece": { en: "cover", es: "portada" },
    "hero.exp": { en: "File 001/EC", es: "Exp. 001/EC" },
    "hero.h1": {
      en: "Backend and infrastructure for a platform in production",
      es: "Backend e infraestructura de una plataforma en producción"
    },
    "hero.stamp": { en: "Anonymized", es: "Anonimizado" },
    "hero.f1": { en: "Role", es: "Rol" },
    "hero.f2": { en: "Engagement", es: "Contrato" },
    "hero.f3": { en: "Fronts", es: "Frentes" },
    "hero.f4": { en: "Stack", es: "Stack" },
    "hero.v1": { en: "Backend developer", es: "Backend developer" },
    "hero.v2": { en: "employee, under contract", es: "empleado, no freelance" },
    "hero.v3": { en: "3 (backend · registration · panel)", es: "3 (backend · registro · panel)" },
    "hero.lede": {
      en: "I was the person responsible for the backend and the infrastructure of a platform in production: a user app, a professional app, and a panel for the internal team. It's anonymized because it's work under contract — no names, no code, no screens, no real topology. What's left is how I solved each thing.",
      es: "Fui el responsable del backend y de la infraestructura de una plataforma en producción: app de usuarios, app de profesionales y un panel para el equipo interno. Va anonimizado porque es trabajo bajo contrato — no hay nombres, ni código, ni pantallas, ni la topología de verdad. Lo que sí queda es cómo resolví cada cosa."
    },
    "hero.cl": { en: "What I actually did", es: "Lo que hice en concreto" },
    "hero.cp": {
      en: "I designed and built the backend architecture: separation by context, a database per module, the API entry layer, file storage, caching, external integrations behind abstractions, the technical documentation, infrastructure as code, and the cloud deployment.",
      es: "Diseñé y armé la arquitectura del backend: separación por contexto, una base por módulo, la capa de entrada de la API, el almacenamiento de archivos, caché, integraciones externas detrás de abstracciones, la documentación técnica, la infraestructura como código y el deploy en la nube."
    },

    /* ── 01 ── */
    "s01.piece": { en: "piece 01 of 06", es: "pieza 01 de 06" },
    "s01.sheet": { en: "Context", es: "Contexto" },
    "s01.title": { en: "What an operational platform needs", es: "Lo que necesita una plataforma operativa" },
    "s01.lede": {
      en: "A platform with three faces — users, professionals, an internal team — needs a lot of pieces underneath: a modular backend, clear APIs, external integrations, files, business rules, an admin panel. And each piece has to change without breaking the rest.",
      es: "Una plataforma con tres caras — usuarios, profesionales, equipo interno — necesita un montón de piezas abajo: backend modular, APIs claras, integraciones externas, archivos, reglas de negocio, un panel de administración. Y cada pieza tiene que poder cambiar sin romper al resto."
    },
    "s01.note": {
      en: "My work covered the three fronts that hold that up: the backend and its infrastructure, provider registration, and the internal panel. In all three I worked the same way — <span class=\"hl\">the API contract first</span>, validation on the server, and every decision written down with its reason.",
      es: "Mi trabajo cubrió los tres frentes que sostienen eso: el backend y su infraestructura, el registro de prestadores y el panel interno. En los tres trabajé igual — <span class=\"hl\">primero el contrato de la API</span>, validación en el servidor, y cada decisión escrita con su porqué."
    },
    "s01.b1t": { en: "Backend & infrastructure", es: "Backend e infraestructura" },
    "s01.b1s": {
      en: "Separation by context, a database per module, API entry layer, caching, and file storage.",
      es: "Separación por contexto, una base por módulo, capa de entrada de la API, caché y almacenamiento de archivos."
    },
    "s01.b2t": { en: "Rules & integrations", es: "Reglas e integraciones" },
    "s01.b2s": {
      en: "Business logic validated on the server, and external providers behind abstraction layers.",
      es: "Lógica de negocio validada en el servidor y proveedores externos detrás de capas de abstracción."
    },
    "s01.b3t": { en: "Documentation & deployment", es: "Documentación y deploy" },
    "s01.b3s": {
      en: "OpenAPI contracts, decisions written down, Terraform, Docker, tests, and deployment on AWS.",
      es: "Contratos OpenAPI, decisiones escritas, Terraform, Docker, pruebas y deploy en AWS."
    },

    /* ── 02 ── */
    "s02.piece": { en: "piece 02 of 06", es: "pieza 02 de 06" },
    "s02.sheet": { en: "Front 1 · backend & cloud", es: "Frente 1 · backend y nube" },
    "s02.title": { en: "Modular backend and cloud infrastructure", es: "Backend modular e infraestructura en la nube" },
    "s02.mrole": { en: "Design and implementation", es: "Diseño e implementación" },
    "s02.lede": {
      en: "<b>The problem.</b> The platform had to split responsibilities, make deploys cheap, organise data by domain, and take on external providers without welding the core logic to any of them.",
      es: "<b>El problema.</b> La plataforma tenía que separar responsabilidades, abaratar los deploys, ordenar los datos por dominio y sumar proveedores externos sin soldarles la lógica del core."
    },
    "s02.note": {
      en: "<b>What I did.</b> A modular backend with services separated by responsibility, a database per module, an API entry layer, caching, file storage, technical docs, and the infrastructure written as code.",
      es: "<b>Lo que hice.</b> Un backend modular con servicios separados por responsabilidad, una base por módulo, capa de entrada de la API, caché, almacenamiento de archivos, documentación técnica y la infraestructura escrita como código."
    },
    "s02.h3a": { en: "How the backend is split", es: "Cómo está partido el backend" },
    "s02.p1": {
      en: "I split it by context, not by technical layer. Every context carries the same three folders: <span class=\"mono\">web</span> with controllers and DTOs, which doesn't know the database exists; <span class=\"mono\">application</span> with the use cases and the rules; <span class=\"mono\">infrastructure</span> with JPA, storage and config. I copied the shape of the microservices we'd migrate to later, so the move would be mechanical.",
      es: "Lo partí por contexto y no por capa técnica. Cada contexto tiene sus tres carpetas: <span class=\"mono\">web</span> con controllers y DTOs, que no sabe que existe la base; <span class=\"mono\">application</span> con los casos de uso y las reglas; <span class=\"mono\">infrastructure</span> con JPA, storage y config. Le copié la forma a los microservicios a los que después había que migrar, así el pase era mecánico."
    },
    "s02.p2": {
      en: "File storage goes in through one interface. In production the files live in <b>Amazon S3</b>; on my machine I run <b>MinIO</b> in Docker against that same interface. Three config properties change and the code stays put. In the database I keep the file's key, never the bytes.",
      es: "El almacenamiento de archivos entra por una sola interfaz. En producción los archivos viven en <b>Amazon S3</b>; en mi máquina levanto <b>MinIO</b> en Docker contra esa misma interfaz. Cambian tres propiedades de configuración y el código queda igual. En la base guardo la clave del archivo, nunca el binario."
    },
    "s02.h3b": { en: "The sheet I fill in before deploying", es: "La planilla que lleno antes de subir" },
    "s02.p3": {
      en: "I don't call a deploy good until every box says where it comes from. The right-hand column is the one that costs work and the one that's worth it.",
      es: "No doy un deploy por bueno hasta que cada casilla tiene de dónde. La columna de la derecha es la que me cuesta y la que sirve."
    },
    "s02.t1": { en: "Modular design", es: "Diseño modular" },
    "s02.t2": { en: "REST APIs", es: "APIs REST" },
    "s02.t3": { en: "Ports and adapters", es: "Puertos y adaptadores" },
    "s02.t4": { en: "Per-module persistence", es: "Persistencia por módulo" },
    "s02.t5": { en: "Migrations", es: "Migraciones" },
    "s02.t6": { en: "Config per environment", es: "Configuración por entorno" },
    "s02.t7": { en: "Infrastructure as code", es: "Infraestructura como código" },
    "s02.t8": { en: "Cloud deployment", es: "Deploy en la nube" },
    "s02.small": {
      en: "Java · Spring Boot — PostgreSQL · Flyway — Redis — object storage — Docker · Terraform · AWS — OpenAPI",
      es: "Java · Spring Boot — PostgreSQL · Flyway — Redis — object storage — Docker · Terraform · AWS — OpenAPI"
    },

    /* ── anexo A ── */
    "diag1.aria": {
      en: "Conceptual diagram of the backend",
      es: "Diagrama conceptual del backend"
    },
    "diag1.interfaces": { en: "Client interfaces", es: "Interfaces cliente" },
    "diag1.appusuarios": { en: "User app", es: "App de usuarios" },
    "diag1.appprofesionales": { en: "Professional app", es: "App de profesionales" },
    "diag1.equipointerno": { en: "Internal team", es: "Equipo interno" },
    "diag1.capaapi": { en: "API layer", es: "Capa de API" },
    "diag1.identidadruteo": { en: "identity + routing", es: "identidad + ruteo" },
    "diag1.serviciosbackend": { en: "Backend services", es: "Servicios del backend" },
    "diag1.servicioa": { en: "Service A", es: "Servicio A" },
    "diag1.serviciob": { en: "Service B", es: "Servicio B" },
    "diag1.servicioc": { en: "Service C", es: "Servicio C" },
    "diag1.respsep": {
      en: "separate responsibilities · one database per module",
      es: "responsabilidades separadas · una base por módulo"
    },
    "diag1.datosarchivos": { en: "Data and files", es: "Datos y archivos" },
    "diag1.datos": { en: "Data", es: "Datos" },
    "diag1.cache": { en: "Cache", es: "Caché" },
    "diag1.archivos": { en: "Files", es: "Archivos" },
    "diag1.objectstorage": { en: "object storage", es: "object storage" },
    "diag1.exterioroperacion": { en: "Outside and operations", es: "Exterior y operación" },
    "diag1.apisexternas": { en: "External APIs", es: "APIs externas" },
    "diag1.observabilidad": { en: "Observability", es: "Observabilidad" },
    "diag1.yconfiguracion": { en: "and configuration", es: "y configuración" },
    "diag1.footer1": {
      en: "Infrastructure as code (Terraform) · container deployment (Docker) · configuration per environment",
      es: "Infraestructura como código (Terraform) · deploy en contenedores (Docker) · configuración por entorno"
    },
    "diag1.footer2": {
      en: "Redrawn and simplified. It does not represent the real topology of anyone's system.",
      es: "Redibujado y simplificado. No representa la topología real de ningún sistema de terceros."
    },
    "diag1.cap": {
      en: "Annex A · the platform, seen from far away.",
      es: "Anexo A · la plataforma, mirada de lejos."
    },

    /* ── anexo B ── */
    "diag2.aria": {
      en: "Contexts and the storage port with its two adapters",
      es: "Los contextos y el puerto de almacenamiento con sus dos adaptadores"
    },
    "diag2.contexto": { en: "Context", es: "Contexto" },
    "diag2.puerto": { en: "Port and adapters", es: "Puerto y adaptadores" },
    "diag2.web": {
      en: "controllers · DTOs · errors. no database here",
      es: "controllers · DTOs · errores. no toca la base"
    },
    "diag2.app": { en: "use cases · business rules", es: "casos de uso · reglas de negocio" },
    "diag2.infra": { en: "persistence · adapters · configuration", es: "persistencia · adaptadores · configuración" },
    "diag2.adentro": { en: "Depends inward", es: "Depende hacia adentro" },
    "diag2.interfaz": { en: "storage interface", es: "interfaz de almacenamiento" },
    "diag2.unasola": { en: "one only, the implementation changes", es: "una sola, la implementación cambia" },
    "diag2.local": { en: "on my machine", es: "en mi máquina" },
    "diag2.nube": { en: "in production", es: "en producción" },
    "diag2.real": { en: "Amazon S3", es: "Amazon S3" },
    "diag2.tres": { en: "3 config properties", es: "3 propiedades de config" },
    "diag2.nocambia": { en: "the code doesn't change between them", es: "el código no cambia entre una y otra" },
    "diag2.cap": {
      en: "Annex B · one context up close, and the seam where the provider gets swapped.",
      es: "Anexo B · un contexto de cerca, y la costura por donde se cambia el proveedor."
    },

    /* ── planilla ── */
    "tbl.h1": { en: "Check", es: "Control" },
    "tbl.h2": { en: "Evidence", es: "Evidencia" },
    "tbl.r1a": { en: "The image doesn't force the local profile", es: "La imagen no fuerza el perfil local" },
    "tbl.r1b": { en: "no environment variables in the Dockerfile", es: "sin variables de entorno en el Dockerfile" },
    "tbl.r2a": { en: "The port comes from the environment", es: "El puerto lo pone el entorno" },
    "tbl.r2b": { en: "one config line, with a default for development", es: "una línea de config, con default para desarrollo" },
    "tbl.r3a": { en: "Credentials and endpoints by variable", es: "Credenciales y endpoints por variable" },
    "tbl.r3b": {
      en: "database, storage, integrations and admin — nothing in the repo",
      es: "base, storage, integraciones y admin — nada en el repo"
    },
    "tbl.r4a": { en: "Health check stays public with the lock on", es: "El chequeo de salud sigue público con el candado puesto" },
    "tbl.r4b": { en: "integration test: 200 with no credentials", es: "test de integración: 200 sin credenciales" },
    "tbl.r5a": { en: "The signed webhook gets in without a login", es: "El webhook firmado entra sin login" },
    "tbl.r5b": { en: "valid signature 200, anything else doesn't pass", es: "firma válida 200, lo demás no pasa" },
    "tbl.r6a": { en: "The internal panel, closed", es: "El panel interno, cerrado" },
    "tbl.r6b": {
      en: "401 with no credentials · 200 with the right ones · 401 with the wrong ones",
      es: "401 sin credenciales · 200 con las buenas · 401 con las malas"
    },
    "slip.label": { en: "Pasted from the terminal", es: "Pegado del terminal" },
    "slip.body": {
      en: "86 unit tests · 18 integration tests · 0 failures<br><span class=\"ox\">three branches in parallel, merged in one go</span> — the conflict I expected in the config never happened, and I still checked it by hand",
      es: "86 pruebas unitarias · 18 de integración · 0 fallos<br><span class=\"ox\">tres ramas en paralelo, mergeadas de una</span> — el conflicto que yo esperaba en la config no pasó nomás, igual lo revisé a mano"
    },

    /* ── 03 ── */
    "s03.piece": { en: "piece 03 of 06", es: "pieza 03 de 06" },
    "s03.sheet": { en: "Front 2 · registration", es: "Frente 2 · registro" },
    "s03.title": { en: "Registration, documents and identity checks", es: "Registro, documentos y verificación de identidad" },
    "s03.mrole": { en: "APIs, states and files", es: "APIs, estados y archivos" },
    "s03.lede": {
      en: "<b>The problem.</b> A guided sign-up has to save progress, validate on the server, take files, and expose a contract clear enough for the frontend to move without asking.",
      es: "<b>El problema.</b> Un registro guiado tiene que guardar el avance, validar en el servidor, recibir archivos y exponer un contrato lo bastante claro para que el frontend avance sin preguntar."
    },
    "s03.note": {
      en: "<b>What I did.</b> The endpoints and the rules behind them: a draft that survives a closed tab, the required documents worked out from the professions the person picks, states with their history, uploads with type and size limits, and errors with stable codes instead of a generic 500. The screens were built by someone else on the team; <span class=\"hl\">the shared contract let us work in parallel</span>.",
      es: "<b>Lo que hice.</b> Los endpoints y las reglas de atrás: un borrador que sobrevive a que cierres la pestaña, los documentos exigidos calculados según las profesiones que elige la persona, los estados con su historial, subida de archivos con límites de tipo y tamaño, y errores con códigos estables en vez de un 500 genérico. Las pantallas las hizo otra persona del equipo; <span class=\"hl\">el contrato compartido nos dejó avanzar en paralelo</span>."
    },
    "st.1": { en: "Draft", es: "Borrador" },
    "st.2": { en: "Submitted", es: "Enviado" },
    "st.3": { en: "Verifying", es: "En verificación" },
    "st.4": { en: "Approved", es: "Aprobado" },
    "st.5": { en: "Sent back", es: "Devuelto" },
    "st.cap": {
      en: "Every jump is written down with who caused it and when. Nothing changes state without leaving a trace.",
      es: "Cada salto queda escrito con quién lo provocó y cuándo. Nada cambia de estado sin dejar rastro."
    },
    "s03.h3": { en: "Identity, on the other side of a wall", es: "La identidad, del otro lado de una pared" },
    "s03.p1": {
      en: "Identity verification runs with an external provider, and the platform talks to it through one interface. The provider's answer comes in by webhook, signed; if the signature doesn't check out, the request doesn't get in. What the provider returns is copied into our own storage in two steps, so a half-finished copy rolls back instead of leaving a record pointing at nothing.",
      es: "La verificación de identidad corre con un proveedor externo, y la plataforma le habla por una sola interfaz. La respuesta del proveedor llega por webhook, firmada; si la firma no cierra, el pedido no entra. Lo que devuelve el proveedor se copia a nuestro propio storage en dos pasos, así una copia a medias se revierte en vez de dejar un registro apuntando a nada."
    },
    "s03.p2": {
      en: "Phone numbers are normalised before they're stored, ages are validated on the server, and duplicate emails come back as a business error with its own code — not as a crash.",
      es: "Los teléfonos se normalizan antes de guardarse, la edad se valida en el servidor, y un email repetido vuelve como error de negocio con su propio código — no como una caída."
    },
    "s03.t1": { en: "State modelling", es: "Modelado de estados" },
    "s03.t2": { en: "Server-side validation", es: "Validación en el servidor" },
    "s03.t3": { en: "Upload and validation", es: "Subida y validación" },
    "s03.t4": { en: "Drafts with expiry", es: "Borradores con vencimiento" },
    "s03.t5": { en: "OpenAPI contracts", es: "Contratos OpenAPI" },
    "s03.t6": { en: "Signed webhooks", es: "Webhooks firmados" },
    "s03.t7": { en: "Two-phase copy with rollback", es: "Copia en dos fases con rollback" },
    "s03.t8": { en: "Error catalogue", es: "Catálogo de errores" },
    "s03.small": {
      en: "Java · Spring Boot — PostgreSQL — object storage — OpenAPI — Testcontainers",
      es: "Java · Spring Boot — PostgreSQL — object storage — OpenAPI — Testcontainers"
    },

    /* ── 04 ── */
    "s04.piece": { en: "piece 04 of 06", es: "pieza 04 de 06" },
    "s04.sheet": { en: "Front 3 · internal panel", es: "Frente 3 · panel interno" },
    "s04.title": { en: "The panel the internal team works in", es: "El panel donde trabaja el equipo interno" },
    "s04.mrole": { en: "Queues, roles and auditing", es: "Colas, roles y auditoría" },
    "s04.lede": {
      en: "<b>The problem.</b> A platform with users and professionals generates internal work: records and documents somebody has to review, a catalogue to keep up to date, and settings that shouldn't need a deploy to change.",
      es: "<b>El problema.</b> Una plataforma con usuarios y profesionales genera trabajo interno: registros y documentos que alguien tiene que revisar, un catálogo que mantener al día y parámetros que no deberían necesitar un deploy para cambiar."
    },
    "s04.note": {
      en: "<b>What I did.</b> The backend under that work. A review queue with temporary leases, so several reviewers can pull from it at once <span class=\"hl\">without stepping on each other</span>: each one claims a batch, and whatever isn't finished in time goes back to the queue instead of getting lost. Role-based access with an identity plane separate from end users, a catalogue and settings the admin edits from the panel, and an audit trail with before and after values.",
      es: "<b>Lo que hice.</b> El backend abajo de ese trabajo. Una cola de revisión con reservas temporales, para que varias personas saquen de ahí al mismo tiempo <span class=\"hl\">sin pisarse</span>: cada una toma un lote, y lo que no se termina a tiempo vuelve a la cola en vez de perderse. Acceso por roles con una identidad separada de la de los usuarios finales, catálogo y parámetros que el admin edita desde el panel, y auditoría de cambios con el antes y el después."
    },
    "s04.h3": { en: "Documents never leave through the front door", es: "Los documentos nunca salen por la puerta de adelante" },
    "s04.p1": {
      en: "The panel doesn't reach storage directly. It asks the backend, the backend checks who's asking and serves the file itself. The store is never exposed to the browser — one less door, and every download passes through the same check as everything else.",
      es: "El panel no llega al storage directo. Le pide al backend, el backend mira quién pregunta y sirve el archivo él mismo. El almacenamiento nunca queda expuesto al navegador — una puerta menos, y cada descarga pasa por el mismo control que todo lo demás."
    },
    "s04.t1": { en: "Review queue", es: "Cola de revisión" },
    "s04.t2": { en: "Temporary leases", es: "Reservas temporales" },
    "s04.t3": { en: "Access by role", es: "Acceso por roles" },
    "s04.t4": { en: "Separate staff identity", es: "Identidad de staff separada" },
    "s04.t5": { en: "Editable catalogue", es: "Catálogo editable" },
    "s04.t6": { en: "Operational settings", es: "Parámetros de operación" },
    "s04.t7": { en: "Change auditing", es: "Auditoría de cambios" },
    "s04.t8": { en: "Document proxy", es: "Proxy de documentos" },
    "s04.small": {
      en: "Java · Spring Boot — PostgreSQL — queues · asynchronous work — roles · auditing",
      es: "Java · Spring Boot — PostgreSQL — colas · trabajo asincrónico — roles · auditoría"
    },

    /* ── anexo C ── */
    "diag3.aria": {
      en: "Review queue with temporary leases",
      es: "Cola de revisión con reservas temporales"
    },
    "diag3.pendientes": { en: "Waiting", es: "Pendientes" },
    "diag3.cola": { en: "review queue", es: "cola de revisión" },
    "diag3.toma": { en: "claims a batch", es: "toma un lote" },
    "diag3.reserva": { en: "temporary lease", es: "reserva temporal" },
    "diag3.revisora": { en: "Reviewer A", es: "Revisora A" },
    "diag3.revisorb": { en: "Reviewer B", es: "Revisor B" },
    "diag3.completa": { en: "finishes in time", es: "completa a tiempo" },
    "diag3.procesado": { en: "Done", es: "Procesado" },
    "diag3.vence": {
      en: "the lease runs out → back to the queue, nothing lost",
      es: "vence la reserva → vuelve a la cola, no se pierde nada"
    },
    "diag3.auditoria": { en: "Audit trail", es: "Auditoría de cambios" },
    "diag3.quien": { en: "who · what · before / after", es: "quién · qué · antes / después" },
    "diag3.acceso": { en: "Access by role", es: "Acceso por roles" },
    "diag3.identidad": { en: "staff identity, separate", es: "identidad de staff, aparte" },
    "diag3.footer": {
      en: "Redrawn and simplified. It does not represent the real topology of anyone's system.",
      es: "Redibujado y simplificado. No representa la topología real de ningún sistema de terceros."
    },
    "diag3.cap": {
      en: "Annex C · reviewers pull in parallel, and nothing falls off the list.",
      es: "Anexo C · varias personas revisan en paralelo y no se cae nada de la lista."
    },

    /* ── 05 ── */
    "s05.piece": { en: "piece 05 of 06", es: "pieza 05 de 06" },
    "s05.sheet": { en: "Inventory", es: "Inventario" },
    "s05.title": { en: "What I used, and what for", es: "Qué usé, y para qué" },
    "s05.h1": { en: "Backend", es: "Backend" },
    "s05.h1l2": { en: "REST APIs · OpenAPI", es: "APIs REST · OpenAPI" },
    "s05.h1l3": { en: "Validation · DTO mapping", es: "Validación · mapeo de DTOs" },
    "s05.h2": { en: "Data", es: "Datos" },
    "s05.h2l2": { en: "A database per module", es: "Una base por módulo" },
    "s05.h2l3": { en: "Modelling · versioned migrations", es: "Modelado · migraciones versionadas" },
    "s05.h3": { en: "Cloud & infrastructure", es: "Nube e infraestructura" },
    "s05.h3l3": { en: "Config per environment", es: "Configuración por entorno" },
    "s05.h4": { en: "Integrations", es: "Integraciones" },
    "s05.h4l1": { en: "External APIs · signed webhooks", es: "APIs externas · webhooks firmados" },
    "s05.h4l2": { en: "Object storage", es: "Object storage" },
    "s05.h4l3": { en: "Providers behind an interface", es: "Proveedores detrás de una interfaz" },
    "s05.h5": { en: "Testing", es: "Pruebas" },
    "s05.h5l1": { en: "Unit · controller slices", es: "Unitarias · slices de controllers" },
    "s05.h5l2": { en: "Integration with real containers", es: "Integración con contenedores reales" },
    "s05.h5l3": { en: "Full flow, end to end", es: "Flujo completo, de punta a punta" },
    "s05.h6": { en: "Operations", es: "Operación" },
    "s05.h6l1": { en: "Message queues · asynchronous work", es: "Colas de mensajes · trabajo asincrónico" },
    "s05.h6l2": { en: "Roles · auditing", es: "Roles · auditoría" },
    "s05.h6l3": { en: "Decisions written down", es: "Decisiones escritas" },

    /* ── 06 ── */
    "s06.piece": { en: "piece 06 of 06", es: "pieza 06 de 06" },
    "s06.sheet": { en: "Next step", es: "Siguiente paso" },
    "s06.title": { en: "The kind of work I'm ready for", es: "Para qué tipo de trabajo estoy listo" },
    "s06.lede": {
      en: "This job taught me to build the backend of something real: APIs another team consumes, rules that hold on the server, integrations that fail without taking the rest down, deploys, and the internal tools that keep the operation running.",
      es: "Este trabajo me enseñó a construir el backend de algo real: APIs que consume otro equipo, reglas que aguantan en el servidor, integraciones que fallan sin llevarse puesto al resto, deploys, y las herramientas internas que mantienen viva la operación."
    },
    "s06.b1t": { en: "APIs and contracts", es: "APIs y contratos" },
    "s06.b1s": {
      en: "REST APIs and OpenAPI contracts a frontend can consume without asking.",
      es: "APIs REST y contratos OpenAPI que un frontend puede consumir sin preguntar."
    },
    "s06.b2t": { en: "Modules with rules", es: "Módulos con reglas" },
    "s06.b2s": {
      en: "Business logic validated on the server, with states modelled properly.",
      es: "Lógica de negocio validada en el servidor, con los estados bien modelados."
    },
    "s06.b3t": { en: "Integrations", es: "Integraciones" },
    "s06.b3s": {
      en: "External services behind an interface, so swapping one isn't a rewrite.",
      es: "Servicios externos detrás de una interfaz, para que cambiar uno no sea reescribir."
    },
    "s06.b4t": { en: "Data and files", es: "Datos y archivos" },
    "s06.b4s": {
      en: "Relational databases, versioned migrations, and object storage.",
      es: "Bases relacionales, migraciones versionadas y object storage."
    },
    "s06.b5t": { en: "Deployment", es: "Deploy" },
    "s06.b5s": {
      en: "Docker, infrastructure as code, and configuration that lives in the environment.",
      es: "Docker, infraestructura como código y configuración que vive en el entorno."
    },
    "s06.b6t": { en: "Writing it down", es: "Dejarlo escrito" },
    "s06.b6s": {
      en: "Technical decisions documented, and work shared with frontend and product.",
      es: "Decisiones técnicas documentadas y trabajo compartido con frontend y producto."
    },

    /* ── cierre ── */
    "footer.close": { en: "End of file", es: "Cierre del legajo" },
    "footer.contacto": { en: "Contact", es: "Contacto" },
    "footer.p": {
      en: "Write me about backend, API or cloud infrastructure work.",
      es: "Escribime por trabajo de backend, APIs o infraestructura en la nube."
    },
    "footer.disc": {
      en: "Real work experience, presented anonymized. Names, diagrams, screens, data and technical detail were simplified or redrawn so nothing private belonging to third parties is exposed.",
      es: "Experiencia laboral real, presentada anonimizada. Nombres, diagramas, pantallas, datos y detalles técnicos fueron simplificados o redibujados para no exponer información privada de terceros."
    },
    "footer.row1": {
      en: "Enrique Chyrnia · Backend · APIs · Infrastructure",
      es: "Enrique Chyrnia · Backend · APIs · Infraestructura"
    },
    "footer.back": { en: "← Back to home", es: "← Volver al inicio" }
    ,
    /* ── arquitectura distribuida (frente 1) ── */
    "s02.h3c": { en: "How the services are laid out", es: "Cómo están repartidos los servicios" },
    "s02.b1t": { en: "Seven services, one door", es: "Siete servicios, una sola puerta" },
    "s02.b1s": { en: "Seven backend services, each running as its own container task and owning its database — all on a single managed instance, so the isolation doesn't multiply the bill. Client, provider and staff apps come in through one gateway that checks the token and routes.", es: "Siete servicios de backend, cada uno corriendo como su propia tarea de contenedor y dueño de su base — todas sobre una sola instancia administrada, así el aislamiento no multiplica la factura. Las apps de cliente, prestador y staff entran por una única puerta que verifica el token y reparte." },
    "s02.b2t": { en: "One role per service", es: "Un rol por servicio" },
    "s02.b2s": { en: "Every service assumes its own cloud role with only the permissions it needs: most touch nothing outside their own data, and only the one that runs document checks reaches the vision and OCR services. If one is compromised, the blast radius stays inside it.", es: "Cada servicio asume su propio rol en la nube con los permisos justos: la mayoría no toca nada fuera de sus datos, y solo el que corre las verificaciones de documentos llega a los servicios de visión y OCR. Si uno se compromete, el daño queda adentro de ese." },
    "s02.b3t": { en: "No keys in the repository", es: "Ninguna clave en el repositorio" },
    "s02.b3s": { en: "Secrets live in a managed secrets store and each task gets temporary credentials at runtime. Configuration comes from the environment, so the same image runs in every environment without a rebuild.", es: "Los secretos viven en un gestor administrado y cada tarea recibe credenciales temporales en tiempo de ejecución. La configuración entra por el entorno, así la misma imagen corre en todos lados sin reconstruirse." },
    "s02.b4t": { en: "Two regions, on purpose", es: "Dos regiones, a propósito" },
    "s02.b4s": { en: "The system runs in the cloud region closest to its users. Only the document-and-face checks cross to a second region, because the managed services they need aren't offered in the first one — about 150 ms round trip, paid by that call alone and not by the rest of the platform.", es: "El sistema corre en la región de nube más cercana a sus usuarios. Solo las verificaciones de documento y rostro cruzan a una segunda región, porque los servicios administrados que necesitan no existen en la primera — unos 150 ms de ida y vuelta, que paga esa llamada sola y no el resto de la plataforma." },
    "s02.co2l": { en: "Matching by distance, and a price that stops moving", es: "Emparejar por distancia, y un precio que deja de moverse" },
    "s02.co2p": { en: "One of the services matches requests to nearby providers using geospatial queries in the database, and offers the job in waves: small batches, ordered by a scoring rule, each with a deadline to accept. When a request is confirmed the price, tax and commission are frozen into an immutable snapshot — a rate change tomorrow never rewrites what was already agreed. I took part in defining that structure and its flow.", es: "Uno de los servicios empareja los pedidos con prestadores cercanos usando consultas geoespaciales en la base, y ofrece el trabajo por oleadas: grupos chicos, ordenados por una regla de puntaje, cada uno con un plazo para aceptar. Cuando el pedido se confirma, el precio, el impuesto y la comisión quedan congelados en una copia inmutable — que mañana cambie una tarifa nunca reescribe lo ya acordado. Participé en la definición de esa estructura y de su flujo." },
    "s05.h2l4": { en: "Geospatial queries", es: "Consultas geoespaciales" },
    "s05.h3l4": { en: "Container tasks · one role each", es: "Tareas de contenedor · un rol cada una" },
    "s05.h3l5": { en: "Managed secrets · temporary credentials", es: "Secretos administrados · credenciales temporales" },
    "s05.h4l4": { en: "Federated identity · staff tokens", es: "Identidad federada · tokens de staff" },
    "s05.h4l5": { en: "Payments behind swappable adapters", es: "Pagos detrás de adaptadores intercambiables" }

  });
})();
