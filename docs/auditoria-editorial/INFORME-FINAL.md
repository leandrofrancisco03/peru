# Diferenciación editorial de ConnectologyIA Perú

Revisión: 12 de octubre de 2026. Dominio: https://peru.connectologyia.workers.dev/. Cambios realizados en el proyecto local, sin desplegar ni modificar el sitio general.

## Resultado y validación solicitada

| Punto | Resultado |
|---|---|
| 1. Páginas revisadas | 40 HTML: 39 indexables y 404 excluida. |
| 2. Posts revisados | 13. |
| 3. Posts profundamente reescritos | 13: introducción, desarrollo, índice, ejemplos, cierre y CTA nuevos. |
| 4. Páginas distintas de artículos modificadas | 26 URLs indexables: 10 páginas/hubs y 16 páginas de servicios, sectores y regiones generadas desde datos. Todas conservan ruta. |
| 5. Coincidencias anteriores | 20 rutas con párrafos compartidos; ocho artículos tenían title, H1 y desarrollo ampliamente coincidentes. Tabla debajo. |
| 6. Diferenciación | 20 rutas comparables con metadata y contenido revisados; las otras 19 indexables también mejoradas. |
| 7. Titles modificados | 39; valores completos antes/después en CAMBIOS-POR-URL.json. |
| 8. H1 modificados | 39. |
| 9. Estructuras H2/H3 modificadas | 39; se conserva un H1 por documento. |
| 10. Metadescriptions modificadas | 39; únicas. OG y Twitter toman esos metadatos. |
| 11. Enlazado | 35 relaciones origen→destino nuevas en el contenido principal; 277 enlaces con destino o texto nuevos frente al inventario anterior. No incluye navegación/footer. |
| 12. Canonicals | 40 autorreferenciales revisados, incluido 404 noindex; dominio oficial. Sin hreflang. |
| 13. Schemas | 40 grafos: Organization, WebSite, WebPage y tipos específicos. 13 BlogPosting, BreadcrumbList y 17 FAQ contrastadas con contenido visible. Autor/publisher referencian la organización. |
| 14. Fechas | 13 datePublished conservados y comparados con Git. 13 dateModified = 2026-10-12 por reescritura sustancial. |
| 15. Sitemap | sitemap.xml único con 39 URLs; sin índices divididos, errores ni endpoints técnicos. |
| 16. Robots | Rastreo general permitido y sitemap del dominio oficial. |
| 17. Build y controles | Build correcto; astro check sin errores, advertencias ni hints de código; 10 tests correctos. Auditoría SEO: 2063 referencias internas. HTTP local: 39 páginas 200, ocho variantes redirigidas, 404 real, XML/RSS/robots y cabeceras correctas. |
| 18. Eliminar/fusionar/noindex | Ninguna URL se elimina ni se cambia a noindex. Mantener y medir antes de decidir nuevas fusiones. |

Los avisos de deprecación de Vite/@astrojs/react ya presentes no impiden compilar. El aislamiento de Windows bloqueó inicialmente resolución de módulos y consultas HTTP locales; las mismas comprobaciones terminaron correctamente con ejecución local autorizada, sin reinstalar ni actualizar dependencias.

## Comparación comprobada con el sitio general

Lectura HTTP de ambas webs antes de editar. Se cuenta igualdad literal de párrafos de más de 80 caracteres dentro de main; no es una métrica de Google ni una garantía de posicionamiento. La revisión del cuerpo confirmó la coincidencia editorial de los ocho artículos. Las notas funcionales compartidas se separan de su desarrollo.

| URL | Párrafos compartidos antes | Después |
|---|---:|---:|
| /blog | 8 | 0 |
| /contacto | 1 | 1 |
| / | 10 | 0 |
| /privacidad | 6 | 0 |
| /recursos | 6 | 0 |
| /servicios | 6 | 0 |
| /sobre-nosotros | 6 | 0 |
| /servicios/agentes-de-inteligencia-artificial | 9 | 0 |
| /servicios/automatizacion-con-n8n | 9 | 0 |
| /servicios/integraciones-y-apis | 9 | 0 |
| /servicios/whatsapp-api-oficial | 9 | 0 |
| /recursos/calculadora-ahorro-automatizacion | 6 | 1 |
| /blog/agente-ia-telegram-n8n | 22 | 1 |
| /blog/agentes-ia-atencion-cliente | 24 | 1 |
| /blog/automatizar-leads-n8n-crm | 19 | 1 |
| /blog/cuanto-cuesta-automatizar-procesos-peru | 21 | 1 |
| /blog/desarrollo-web-moderno-nextjs | 24 | 1 |
| /blog/impacto-ia-pymes-2026 | 24 | 1 |
| /blog/orquestacion-n8n-vs-zapier | 22 | 1 |
| /blog/whatsapp-api-oficial-coexistencia-peru | 21 | 1 |

Los párrafos restantes corresponden a la nota editorial común de los artículos, texto funcional del contacto y enlace auxiliar de la calculadora. Se mantienen por su función. El cuerpo de los ocho artículos, sus índices y CTAs fueron sustituidos por desarrollos propios.

## Intención editorial de los 13 artículos

| Ruta | Tipo e intención nueva |
|---|---|
| /blog/agente-ia-telegram-n8n | Arquitectura: asistente interno de pendientes comerciales con identidad y permisos. |
| /blog/agentes-ia-atencion-cliente | Guía: continuidad de conversación y transferencia útil al asesor. |
| /blog/automatizar-leads-n8n-crm | Integración: recepción duradera, Redis, idempotencia y conciliación de escrituras inciertas. |
| /blog/automatizar-cotizaciones-seguimiento-peru | Caso de uso: control de versión aprobada y aceptación tardía. |
| /blog/automatizar-inscripciones-academias-peru | Caso de uso: convocatoria, grupo y cancelación de avisos antiguos. |
| /blog/automatizar-reportes-ventas-peru | Guía operativa: cierres, cobertura y correcciones entre sedes. |
| /blog/automatizar-reservas-turismo-peru | Diseño operativo: reprogramación y confirmaciones parciales. |
| /blog/automatizar-ventas-whatsapp-peru | Caso de uso: evidencia para pasar del mensaje al pedido. |
| /blog/cuanto-cuesta-automatizar-procesos-peru | Comercial: comparar propuestas equivalentes y supuestos en soles. |
| /blog/desarrollo-web-moderno-nextjs | Integración: comprobar recepción y entrega real a ventas; slug histórico preservado. |
| /blog/impacto-ia-pymes-2026 | Guía de decisión: matriz de prioridad y bloqueos antes de invertir. |
| /blog/orquestacion-n8n-vs-zapier | Comparativa: evaluar el mismo circuito comercial y su recuperación. |
| /blog/whatsapp-api-oficial-coexistencia-peru | Guía de incorporación: continuidad del equipo, responsabilidades y contingencia. |

## Cambios de metadata por URL

| Ruta | Title nuevo | H1 nuevo |
|---|---|---|
| /blog | Guías n8n, IA y operación comercial en Perú | Decisiones de implementaciónpara operar en Perú. |
| /contacto | Contacto en Perú: revisa tu proceso con ConnectologyIA | Cuéntanos qué empieza,y qué debería terminar. |
| / | Automatización e IA para pymes en Perú — ConnectologyIA | Automatización e IApara que tu pymeavance en Perú. |
| /peru | Automatización en Perú: ventas, atención y operaciones | Automatización en Perú:de la consulta a la operación. |
| /privacidad | Privacidad de consultas y canales — ConnectologyIA Perú | Privacidad de tus consultas |
| /recursos | Recursos para preparar un proyecto de automatización en Perú | Prepara la decisiónantes de elegir herramientas. |
| /sectores | Automatización por negocio: pedidos, reservas y propuestas | Cada negocio confirmaalgo distinto. |
| /servicios | Servicios n8n, IA y conexiones de sistemas en Perú | Elige qué conectar.Define qué debe pasar. |
| /sobre-nosotros | ConnectologyIA Perú: método de trabajo y criterios editoriales | Una automatización debepoder explicarse y operarse. |
| /servicios/agentes-de-inteligencia-artificial | Agentes de IA para atención y equipos en Perú | Agentes de IA para atención y equipos en Perú |
| /servicios/automatizacion-con-n8n | Flujos n8n y Python para operaciones en Perú | Flujos n8n y Python para operaciones en Perú |
| /servicios/integraciones-y-apis | Integración de CRM, APIs y sistemas de gestión | Integración de CRM, APIs y sistemas de gestión |
| /servicios/whatsapp-api-oficial | WhatsApp oficial conectado a ventas y atención | WhatsApp oficial conectado a ventas y atención |
| /sectores/academias-y-formacion | Convocatorias e inscripciones conectadas para academias | Convocatorias e inscripciones conectadas para academias |
| /sectores/comercio-y-distribucion | Pedidos y almacén conectados para comercio en Perú | Pedidos y almacén conectados para comercio en Perú |
| /sectores/servicios-profesionales | Propuestas y agenda para servicios profesionales en Perú | Propuestas y agenda para servicios profesionales en Perú |
| /sectores/turismo-y-reservas | Consultas y cambios de reserva para turismo en Perú | Consultas y cambios de reserva para turismo en Perú |
| /recursos/calculadora-ahorro-automatizacion | Calculadora de automatización en soles: capacidad y retorno | Pon a prueba el ahorrocon tus propios supuestos. |
| /peru/arequipa | Cotizaciones y seguimiento con n8n en Arequipa | Cotizaciones y seguimiento con n8n en Arequipa |
| /peru/cusco | Reservas y proveedores conectados con n8n en Cusco | Reservas y proveedores conectados con n8n en Cusco |
| /peru/ica | Órdenes de servicio y agenda automatizadas en Ica | Órdenes de servicio y agenda automatizadas en Ica |
| /peru/junin | Inscripciones y convocatorias con n8n en Junín | Inscripciones y convocatorias con n8n en Junín |
| /peru/la-libertad | Pedidos y distribución con n8n en Trujillo y La Libertad | Pedidos y distribución con n8n en Trujillo y La Libertad |
| /peru/lambayeque | Seguimiento posventa automatizado en Lambayeque | Seguimiento posventa automatizado en Lambayeque |
| /peru/lima | Automatización en Lima: asignación por sede y cobertura | Automatización en Lima: asignación por sede y cobertura |
| /peru/piura | Reportes entre sedes con automatización en Piura | Reportes entre sedes con automatización en Piura |
| /blog/agente-ia-telegram-n8n | Telegram y n8n: asistente interno de ventas | Telegram y n8n: un asistente interno para pendientes comerciales |
| /blog/agentes-ia-atencion-cliente | Agentes IA para atención y derivación a asesores | Agentes de IA: del primer mensaje al asesor adecuado |
| /blog/automatizar-cotizaciones-seguimiento-peru | Automatizar cotizaciones B2B y versiones en Perú | Cotizaciones B2B: de la solicitud a una versión aprobada |
| /blog/automatizar-inscripciones-academias-peru | Inscripciones de academias con n8n en Perú | Academias: seguimiento por convocatoria sin confundir matrículas |
| /blog/automatizar-leads-n8n-crm | Leads con n8n y CRM: idempotencia y recuperación | Leads en n8n y CRM: recuperar solicitudes sin duplicar ventas |
| /blog/automatizar-reportes-ventas-peru | Reportes con n8n: cierres y conciliación de ventas | Reportes con n8n: cerrar ventas de varias sedes sin descuadres |
| /blog/automatizar-reservas-turismo-peru | Automatizar reservas y cambios turísticos en Perú | Reservas turísticas: automatizar cambios sin perder confirmaciones |
| /blog/automatizar-ventas-whatsapp-peru | Ventas por WhatsApp: del mensaje al pedido en Perú | WhatsApp a pedido: organizar la venta antes de automatizar mensajes |
| /blog/cuanto-cuesta-automatizar-procesos-peru | Cuánto cuesta automatizar en Perú: comparar propuestas | Presupuesto de automatización en Perú: comparar alcances y costos |
| /blog/desarrollo-web-moderno-nextjs | Web y CRM: solicitudes que llegan a ventas | Web y CRM: comprobar que cada solicitud llega a ventas |
| /blog/impacto-ia-pymes-2026 | Qué automatizar primero en tu pyme de Perú | Qué automatizar primero en una pyme: una matriz de decisión |
| /blog/orquestacion-n8n-vs-zapier | n8n vs. Zapier y Make: prueba comercial comparada | n8n, Zapier o Make: evaluar un flujo comercial completo |
| /blog/whatsapp-api-oficial-coexistencia-peru | WhatsApp API y coexistencia: preparar el alta en Perú | WhatsApp API: preparar el alta sin interrumpir a tus asesores |

H2/H3 completos, metadescriptions anteriores y nuevas, textos/destinos de cada enlace añadido y fechas preservadas están en CAMBIOS-POR-URL.json. antes.json y despues.json conservan las extracciones, y sitios-publicados.json la comparación original.

## Imágenes, marca y experiencia

- Marca, logo y dominio conservados. No se duplicaron imágenes para crear señales SEO artificiales.
- Se revisaron las tarjetas OG existentes de 1200×630. Se asignaron descripciones de imagen coherentes y twitter:image:alt; los nombres temáticos existentes continúan siendo válidos.
- Navegación: Servicios, Sectores, Perú, Blog, Recursos y Contacto. Guías agrupadas en n8n/integraciones, agentes, WhatsApp/CRM, operación comercial y decisiones de inversión.
- Portada, hub Perú y artículo técnico revisados visualmente en móvil; sin desbordamiento horizontal. Portada revisada también en escritorio.

## Decisiones de conservación

- Mantener /blog/desarrollo-web-moderno-nextjs: la URL histórica permanece, pero la pieza se orienta a captación e integración web/CRM. No cambiar el slug sin datos de tráfico y enlaces.
- Mantener ocho guías regionales: cada una tiene un proceso, escenario de excepción y evidencia operativa propios. Lima conserva distritos dentro de una sola guía; no se generaron landings por distrito.
- Mantener /privacidad indexable en esta entrega. Se reformuló su explicación sin añadir supuestas obligaciones legales, identidad fiscal ni tratamientos no confirmados.
- No recomendar fusiones a partir solo de similitud temática: servicios, sectores y artículos atienden decisiones distintas. Revisar consultas e impresiones reales después de publicar antes de intervenir URLs.

## Fuentes y límites de la comprobación

Se consultaron documentación oficial de n8n (Webhook, gestión de errores y alojamiento), Redis SET y Telegram Bot API. Las referencias de Meta devolvieron limitación 429 en el navegador de investigación; no se afirmaron cambios, tarifas ni elegibilidad actuales. El contenido exige verificarlos durante el alta y enlaza la documentación oficial. Las comparativas no fijan tarifas o prestaciones específicas de planes sin verificación.

La validación es local; no confirma indexación, resultados enriquecidos ni posiciones en Google. El sitio publicado permanece en su versión anterior hasta desplegar estos cambios. No se enviaron solicitudes de indexación ni se modificó Search Console.
