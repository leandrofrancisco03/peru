# Diagnóstico de indexación — 31 de octubre de 2026

Search Console, según el propietario: «Descubierta: actualmente sin indexar».

## Comprobación publicada

39 páginas responden HTTP 200. Ocho variantes redirigen correctamente. 404 real, robots, sitemap, RSS y cabeceras pasan scripts/check-routes.mjs contra producción. Robots permite rastreo y anuncia el sitemap oficial. /peru muestra el contenido editorial nuevo. Esta prueba no acredita cómo responde Cloudflare a Googlebot real ni permite ver sus registros.

## Cambio local

El sitemap incorpora lastmod de los artículos desde dateModified del BlogPosting publicado en el HTML. No cambia datePublished, no usa la fecha de build y no inventa fechas para páginas estáticas. Conserva 39 URLs y un solo sitemap. Debe desplegarse para que llegue a producción.

## Acción en Search Console

1. Seleccionar la propiedad https://peru.connectologyia.workers.dev/.
2. En Sitemaps, enviar https://peru.connectologyia.workers.dev/sitemap.xml y comprobar estado Correcto y última lectura.
3. Inspeccionar /peru, /servicios/automatizacion-con-n8n y una guía relevante para el negocio. Ejecutar Probar URL publicada; revisar acceso, canonical y recursos.
4. Si la prueba confirma elegibilidad, solicitar indexación para esas páginas prioritarias. No repetir solicitudes diariamente.
5. Revisar evolución de última lectura, páginas rastreadas e impresiones. Si persiste, consultar registros de Cloudflare para Googlebot verificado y posibles errores o desafíos; no desactivar protecciones indiscriminadamente.

No se accedió a Search Console ni se enviaron solicitudes de indexación. El sitemap ayuda al descubrimiento; no obliga a Google a rastrear o indexar. No crear más páginas geográficas para intentar resolver este estado.

Fuente: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
