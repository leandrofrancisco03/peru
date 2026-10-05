# Validación de la mejora

## Migración a sitemap único — 5 de octubre de 2026

- Build correcto con la integración local de Astro; `dist/sitemap.xml` contiene 39 URLs y un único `urlset`.
- XML analizado con System.Xml; URLs HTTPS absolutas del dominio oficial, únicas y sin `.html` ni barra final excepto en la home.
- Solo se genera `sitemap.xml`; los archivos divididos no existen en `dist`.
- `/404` excluida. RSS, endpoints y archivos públicos no son páginas del manifiesto y no se incluyen. Se prueban también exclusiones por noindex, rutas privadas/previews y canonical alternativo.
- Diez pruebas pasan (cuatro de calculadora y seis de sitemap); la prueba del hook verifica que una salida dinámica nueva aparece en el siguiente build sin editar una lista.
- Astro check: 0 errores, 0 warnings y 0 hints. Persisten avisos de obsolescencia de Vite durante el build, ajenos a esta migración.
- Wrangler local: `/sitemap.xml` devuelve 200 directo, `application/xml; charset=utf-8` y el XML exacto del build. Las antiguas rutas divididas responden 404.
- robots y link rel=sitemap apuntan al archivo único. Canonical, contenido y diseño no se modificaron. Los nombres antiguos solo quedan como controles negativos de auditoría.
- No se desplegó esta migración. Tras publicar, actualizar el sitemap enviado en Search Console.

## Comprobaciones realizadas

- Compilación Astro estática: 40 páginas HTML y RSS; 39 URLs indexables en el sitemap y una página 404 con noindex.
- Astro check: 0 errores, 0 warnings, 0 hints en el último control de tipos.
- Cuatro pruebas de la calculadora: ejemplo, retorno negativo, ceros y valores inválidos.
- Auditoría de HTML: 40 páginas, 13 artículos, 40 grafos JSON-LD, 17 bloques FAQ y 2061 referencias internas verificadas (incluye enlaces repetidos y assets).
- Canonicals, Open Graph, títulos/descripciones únicos, H1, main, imágenes locales, anclas, sitemap, RSS y páginas huérfanas comprobados.
- Portada renderizada sin islas React hidratadas.
- Contacto sin hidratación de React cuando no hay webhook configurado.
- Marcado Service, CollectionPage/ItemList, BlogPosting, BreadcrumbList, WebApplication y FAQ contrastado con las páginas correspondientes. Preguntas/respuestas del schema contrastadas con el HTML visible.
- 154 redirecciones canónicas 301 generadas desde el sitemap, sin redirigir `/sitemap.xml`.
- Wrangler local: 39 páginas responden 200 sin redirección, ocho variantes probadas redirigen permanentemente a su canonical, una URL inexistente devuelve 404 y robots/sitemap/RSS están accesibles.
- La regla noindex de previews usa el formato de Workers `:preview-peru.connectologyia.workers.dev`, sin coincidir con producción. Su aplicación al host público requiere verificación después del despliegue.
- Favicon/marca de navegación optimizada por Astro: de aproximadamente 195 KiB a 5 KiB, conservando los originales.
- Cinco imágenes sociales nuevas de 1200 × 630 para las guías añadidas.
- Revisión visual en navegador a tamaño de escritorio y viewport de 390 × 844.
- Menú móvil abierto; navegación desde portada a Perú y a Lima comprobada. Guía de Lima y artículo de ventas por WhatsApp revisados en móvil.
- Artículo con tabla e índice probado en móvil; sin desbordamiento horizontal del documento. La tabla mantiene desplazamiento interno cuando es necesario.
- El cálculo de ejemplo (32 h, S/ 800 brutos, S/ 600 netos y 4 meses) permanece cubierto por las pruebas unitarias existentes.

La auditoría detectó que `build.format: file` expone `.html` en `Astro.url` durante la compilación. Se corrigió normalizando la URL canónica al formato público sin extensión.

## Límites de la verificación

No se desplegó a Cloudflare ni se consultó Search Console. Las cabeceras y redirecciones se probaron con Wrangler local y deben comprobarse también en el dominio público tras publicar. El servidor de Astro por sí solo no reproduce esas reglas.

No se enviaron contactos reales ni se verificó un webhook de producción. En este entorno no hay endpoint configurado y el contacto muestra correo/WhatsApp.

No se verificó elegibilidad de ninguna cuenta para coexistencia de WhatsApp. La documentación técnica de Meta limitó algunas consultas; los textos no incluyen una lista cerrada de requisitos ni garantizan disponibilidad.

No se midieron Core Web Vitals de usuarios reales ni se atribuye una puntuación Lighthouse. La comprobación estructural local no garantiza resultados enriquecidos ni posicionamiento.

La integración React instalada emite avisos de obsolescencia de opciones internas de Vite/esbuild; no impiden compilar. No se cambió de versión mayor de Astro o React para silenciarlos.
