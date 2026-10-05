# Sitemap único

El sitemap público es `https://peru.connectologyia.workers.dev/sitemap.xml`. Contiene directamente un `urlset`, sin índice ni archivos divididos. El cambio está preparado en el proyecto; hay que desplegar el build para actualizar producción.

## Generación automática

`src/integrations/single-sitemap.mjs` implementa los hooks de Astro `astro:routes:resolved` y `astro:build:done`. Usa el manifiesto de rutas y el mapa de archivos de salida que entrega Astro. No recorre una lista editorial, no copia un sitemap anterior ni ejecuta de nuevo los `getStaticPaths()`.

Cuando Astro genera una página estática o una nueva URL dinámica, su HTML entra automáticamente en la revisión. Los borradores y artículos futuros siguen sujetos a `publishedPosts()`: no generan rutas y no aparecen en el sitemap. Añadir un artículo, región, sector o página no exige editar el generador.

Solo se procesan rutas de tipo `page` prerenderizadas. Se excluyen 404/500, namespaces API, privados, administrativos, previews y `_…`; páginas con robots/Googlebot `noindex` o `none`; redirecciones HTML; y páginas cuyo canonical apunta a otra URL. Una página privada con un nombre distinto debe declarar `noindex` además de sus controles de acceso. El sitemap no sustituye la autenticación.

Los endpoints como RSS, archivos públicos de verificación, imágenes y recursos descargables no son páginas del manifiesto. No entran en el sitemap. Las URLs usan `site`, sin `.html` ni barra final salvo la raíz. Se eliminan duplicados, se escapa el XML y se aplican los límites de 50.000 URLs/50 MiB. No se inventan `lastmod`, `priority` ni `changefreq`.

## Servir y comprobar

1. `npm run build`: genera `dist/sitemap.xml` y las redirecciones HTML existentes a partir de él.
2. `npm run check:seo`: contrasta el sitemap con las páginas indexables generadas y revisa sus URLs y enlaces del head.
3. `npm test`: prueba normalización, exclusiones, XML y descubrimiento automático de nuevas salidas dinámicas.
4. `npm run preview:workers`, seguido en otra terminal de `npm run check:routes`: verifica HTTP 200 sin redirección y `Content-Type: application/xml; charset=utf-8`, configurado en `public/_headers`.

Al generarse después del build, el sitemap se verifica en `astro preview`, Wrangler o producción, no como endpoint de `astro dev`. Los headers de Cloudflare se prueban con Wrangler.

`robots.txt` y el `<link rel="sitemap">` apuntan al archivo único. La antigua redirección desde `/sitemap.xml` se ha retirado. Las URLs divididas dejan de generarse y responden 404 en Workers; sus nombres solo permanecen en comprobaciones negativas para detectar regresiones.

Tras publicar, registrar el nuevo sitemap en Search Console y retirar el envío anterior. La propiedad y los canonicals continúan usando el dominio oficial.
