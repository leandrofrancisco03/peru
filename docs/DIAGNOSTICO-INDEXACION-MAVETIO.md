# Diagnóstico de indexación de Mavetio

Auditoría del 9–10 de noviembre de 2026 (America/Lima). Cambios preparados localmente, **sin despliegue**, sin cambios en DNS, reglas de Cloudflare ni seguridad.

## Conclusión

La inconsistencia técnica comprobada es que el dominio principal en HTTP sirve contenido con estado 200, aunque declara canonical HTTPS. Se preparó una redirección 301 en el Worker. Esto consolida las variantes; **no demuestra que sea la causa de la falta de indexación de las páginas HTTPS**.

Las dos variantes WWW funcionan correctamente: 301 en un único salto a https://mavetio.com/, seguido de 200. No hay bucles ni cadenas innecesarias en esas solicitudes. Se conserva su comportamiento. Search Console las clasifica correctamente como «Página con redirección» según la información aportada por el usuario, con último rastreo el 7 de noviembre de 2026 y canonical declarada y elegida HTTPS sin WWW.

No se encontraron bloqueos de indexabilidad en las 40 páginas HTML del sitemap. Se mejoró de forma puntual el contenido comercial de software y el H1 del blog. No se eliminaron páginas regionales ni se generó contenido masivo.

## Evidencia y límites

- Skill utilizada: `seo-audit`, instalada en `C:/Users/LENOVO/.codex/skills/seo-audit`. Se revisaron sus criterios técnicos y editoriales; se utilizó su validador de sitemap y las comprobaciones propias del proyecto.
- Evidencia HTTP: [antes](indexacion-2026-11-09/antes/evidence.json) y [después de los cambios locales](indexacion-2026-11-09/despues/evidence.json). Son solicitudes GET públicas, con seguimiento manual de redirecciones, no solicitudes realizadas por Googlebot.
- Se comprobaron las 40 URLs del sitemap y 12 variantes/documentos adicionales. La captura final corresponde a `2026-11-10T05:03:19.536Z` (00:03 de Lima). Las dos URLs WWW exactas se volvieron a comprobar después de recibir la identificación del usuario: 301 → 200.
- Se verificó el DOM renderizado público de portada, software, cuatro regiones y blog: [evidencia](indexacion-2026-11-09/renderizado-produccion.json). El contenido principal y sus enlaces aparecen también en el HTML inicial.
- Al inicio, los 40 HTML publicados coincidían byte a byte con la compilación local previa. Por tanto, no se asumió que las mejoras anteriores siguieran pendientes de publicación. Tras esta tarea, 38 de 40 coinciden: software y blog tienen nuevos cambios locales.
- No hay acceso directo al informe privado de Search Console. Sus estados y fechas se atribuyen al usuario. La prueba pública no permite conocer la canonical elegida por Google para las páginas comerciales, ni confirmar su indexación actual.
- Las palabras contadas por el extractor no son una métrica de calidad: puede unir textos de elementos adyacentes. No se utilizaron umbrales de palabras ni puntuaciones de similitud para decidir cambios.

## Resultado por URL

| URL | Estado observado en producción | Problema comprobado / clasificación | Cambio realizado localmente | Acción pendiente |
| --- | --- | --- | --- | --- |
| http://www.mavetio.com/ | 301 → https://mavetio.com/ → 200, un salto | Exclusión normal; coincide con GSC | Ninguno en su comportamiento | No solicitar indexación de esta variante |
| https://www.mavetio.com/ | 301 → https://mavetio.com/ → 200, un salto | Exclusión normal; coincide con GSC | Ninguno en su comportamiento | No solicitar indexación de esta variante |
| http://mavetio.com/peru/ica | 200, canonical HTTPS; versión HTTPS 200 e indexable | Problema técnico: falta redirección de protocolo; indexación de HTTPS requiere GSC | 301 HTTP → HTTPS en Worker; enlace contextual desde software hacia Ica | Desplegar y verificar 301; inspeccionar la URL HTTPS |
| https://mavetio.com/servicios/desarrollo-de-software | 200, canonical propia, index/follow, presente en sitemap | Oportunidad editorial; ningún bloqueo técnico demostrado | Criterios para elegir software/integración, piloto demostrativo, pruebas de aceptación, alcance y mantenimiento; enlaces contextuales | Publicar mejora; inspeccionar canonical elegida y último rastreo en GSC |
| https://mavetio.com/peru/la-libertad | 200, canonical propia, index/follow, presente en sitemap | Requiere información de GSC; no hay fallo técnico probado | Sin cambios | Revisar último rastreo y canonical elegida; reforzar en el futuro con evidencia empresarial real |
| https://mavetio.com/peru/piura | 200, canonical propia, index/follow, presente en sitemap | Requiere información de GSC; no hay fallo técnico probado | Sin cambios | Revisar último rastreo y canonical elegida |
| https://mavetio.com/blog | 200, canonical propia, index/follow; 13 artículos enlazados en HTML inicial | Oportunidad editorial: H1 poco explícito sobre la temática | H1: «Guías de automatización, n8n e IA para empresas de Perú.» | Publicar; comprobar nuevo HTML e inspeccionar GSC |
| http://mavetio.com/peru/lambayeque | 200, canonical HTTPS; versión HTTPS 200 e indexable | Problema técnico: falta redirección de protocolo; indexación de HTTPS requiere GSC | 301 HTTP → HTTPS en Worker | Desplegar y verificar 301; inspeccionar URL HTTPS |
| https://mavetio.com/rss.xml | 200, XML RSS 2.0 válido, 13 entradas únicas | Exclusión sin problema comercial: es un feed, no una página HTML que deba posicionar | Ninguno; continúa fuera del sitemap HTML | Conservar feed; no solicitar indexación como página comercial |
| http://mavetio.com/ | 200, canonical https://mavetio.com/ | Exclusión por canonical reportada normal; existe además inconsistencia de transporte HTTP | 301 HTTP → HTTPS en Worker | Desplegar y comprobar; no indexar HTTP |

La URL de referencia externa `http://maveti.com.qanator.com/` aportada por el usuario no es una URL propia ni una causa demostrada del problema. No se alteran redirecciones ni se propone una desautorización de enlaces basándose solo en esa referencia.

## Redirecciones, canonical y rastreo

- WWW HTTP y HTTPS: 301 directo al dominio principal. En variantes regionales comprobadas también se conservan ruta y consulta.
- Software con barra final y con extensión `.html`: 301 hacia su URL limpia, seguido de 200. Son pruebas adicionales, no los dos casos de GSC.
- No se cambiaron canonicals. Todas las 40 URLs de sitemap responden 200 y tienen canonical HTTPS propia. No se encontraron enlaces internos absolutos al dominio alternativo en esas páginas.
- Meta robots: `index, follow, max-image-preview:large`; sin `X-Robots-Tag` que impida indexar en las respuestas HTML auditadas.
- Robots.txt: 200, permite rastreo y declara `https://mavetio.com/sitemap.xml`.
- Sitemap: XML válido, 40 URLs HTTPS únicas, sin redirecciones ni páginas inexistentes; 13 fechas lastmod de artículos. Se conservó sin cambios, incluidas las fechas.
- RSS: 200, XML válido, 13 enlaces/GUID únicos y enlace propio del feed; no necesita H1 ni etiquetas meta HTML.
- URL inexistente de prueba: 404 real y noindex. No se convierte en una portada con estado 200.

Las redirecciones y la etiqueta canonical son señales de consolidación, no garantías de indexación. Fuente: [Google: consolidar URLs duplicadas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). Las exclusiones por redirección no equivalen automáticamente a errores: [informe de indexación de páginas de Search Console](https://support.google.com/webmasters/answer/7440203).

## Revisión editorial e interlinking

Software ya tenía enlaces desde portada y otros servicios: 39 páginas enlazan hacia él contando navegación/pie; 6 lo hacen desde su contenido principal. Se mantiene esa arquitectura. La nueva sección ayuda a decidir cuándo desarrollar, cuándo integrar y cómo aceptar una entrega. Los escenarios se identifican como demostrativos; no se atribuyen resultados a clientes.

El blog ya tiene introducción, rutas de lectura, categorías y 13 artículos rastreables sin depender de JavaScript. Recibe enlaces desde 39 páginas contando navegación/pie y desde 15 contenidos principales. Solo se hizo más claro su H1; no se crearon artículos.

| Región | Utilidad específica existente | Páginas con enlace contextual entrante antes → después |
| --- | --- | --- |
| Ica | Órdenes y visitas, habilidades del técnico, materiales y segunda intervención | 2 → 3; nuevo enlace desde software |
| La Libertad | Pedidos, conversión de unidades, entregas parciales y saldo pendiente | 3 → 3 |
| Piura | Reportes entre sedes, cobertura de datos y correcciones tardías | 4 → 4 |
| Lambayeque | Incidencia posventa ligada al pedido, reaperturas y cierre validado | 2 → 2 |

La comparación con Lima (rutas/distritos), Arequipa (versiones de cotización), Cusco (reservas/proveedores) y Junín (matrículas/cohortes) muestra escenarios diferenciados. Comparten plantilla y algunos mensajes, pero no son únicamente sustituciones de nombres geográficos. Mantienen la atención remota y no afirman oficinas locales inexistentes.

Oportunidad futura: la aplicabilidad de varios procesos es nacional. Evidencia real autorizada, restricciones locales y ejemplos anonimizados mejorarían su especificidad regional. No hay datos de consultas/impresiones por página para demostrar canibalización; no procede consolidar o redirigir automáticamente.

## Archivos modificados y validación

- `worker/index.mjs`: añade únicamente el caso HTTP del dominio principal a la redirección permanente; conserva WWW y dominio antiguo, así como noindex de previews y acceso local.
- `tests/migration.test.mjs`: comprueba HTTP principal, conservación de ruta/consulta y WWW, además de localhost. Las pruebas existentes de dominio antiguo, 404 y preview se mantienen.
- `src/layouts/ServiceLayout.astro`: añade un slot de contenido; solo software lo utiliza.
- `src/pages/servicios/desarrollo-de-software.astro`: sección comercial explicada arriba.
- `src/pages/blog/index.astro`: H1 descriptivo.
- `scripts/audit-indexability.mjs`: auditoría pública de lectura, acotada a 100 URLs del dominio, con capturas comparables de HTML y cadenas de respuesta; no configura servicios ni credenciales.

Validaciones completadas:

- `npm run build`: correcto, 41 HTML generados y 40 URLs de sitemap.
- `npm run lint`: 39 archivos; cero errores, warnings e hints del diagnóstico Astro. Aparecen avisos de deprecación existentes de Vite, no fallos de la comprobación.
- `npm test`: 16/16 correctos.
- `npm run check:seo`: correcto; 41 páginas, 13 artículos, 41 grafos JSON-LD, 18 FAQ y 2172 enlaces/recursos comprobados. No se añadió schema artificial.
- `npm run check:routes`: correcto en Wrangler local. También `node scripts/check-routes.mjs https://mavetio.com`: 40 páginas y ocho variantes comprobadas; robots, RSS, sitemap y 404 correctos. Este comando no cubre HTTP del dominio principal; esa discrepancia se detecta con la auditoría adicional.
- Validador de sitemap de la Skill y parser XML: correctos. Sitemap sin cambios entre capturas.
- DOM local: nueva sección de software presente, blog con nuevo H1, canonical de producción y 13 artículos enlazados. [Captura local de software](indexacion-2026-11-09/software-local.jpg).

Límite de la prueba de redirección preparada: se valida con peticiones Request directas al Worker en pruebas automatizadas. Intentar simular el hostname público enviando Host a Wrangler sobre loopback respondió 200 y no valida el comportamiento del dominio público. La verificación HTTP real de la corrección queda obligatoriamente para después del despliegue. La web pública todavía sirve HTTP con 200 en la captura final.

## Checklist de despliegue pendiente

1. Publicar por el flujo habitual el Worker y los assets compilados de esta misma versión. **Esta tarea no ejecuta el despliegue** ni modifica configuración Cloudflare.
2. Repetir solicitudes sin seguimiento automático: HTTP principal, Ica y Lambayeque deben responder 301 al mismo path en HTTPS; comprobar también conservación de consultas. El destino debe responder 200.
3. Confirmar WWW HTTP y HTTPS → 301 directo a HTTPS sin WWW → 200; verificar que no haya bucles ni saltos añadidos. No intentar indexar estas variantes.
4. Confirmar que software y blog muestran el contenido nuevo, canonical propia y permisos de rastreo. Revisar también las cuatro URLs regionales HTTPS.
5. Comprobar sitemap publicado (40 URLs canónicas, sin fechas artificiales), robots.txt (Allow y sitemap correcto), RSS válido y 404 real. No reenviar ni regenerar un sitemap correcto solo para cambiar su fecha.
6. Comprobar carga de imágenes en portada/servicios y respuestas 200 de sus recursos; revisar enlaces de WhatsApp `https://wa.me/51970430127` y correo `mailto:contacto@mavetio.com`, sin necesidad de enviar mensajes.
7. Ejecutar `node scripts/audit-indexability.mjs docs/indexacion-post-despliegue` y guardar nueva evidencia sin sobrescribir esta auditoría. Comparar los resultados con `dist` de la versión publicada.
8. En Search Console, inspeccionar primero software, blog y las cuatro regiones **en HTTPS sin WWW**: estado, último rastreo, canonical declarada/elegida, HTML rastreado y prueba publicada. Pedir indexación solo de las páginas prioritarias actualizadas cuando haya cuota; no repetir solicitudes para variantes HTTP/WWW ni RSS.
9. Registrar evolución de indexación e impresiones tras nuevos rastreos. «Rastreada: actualmente sin indexar» no identifica por sí sola una causa técnica y no permite prometer un plazo. No se afirma que estas páginas estén ya indexadas.

Prioridad de publicación: corrección HTTP y mejora de software; después, claridad del blog. Las páginas regionales se conservan y requieren seguimiento de sus URLs canónicas en Search Console.
