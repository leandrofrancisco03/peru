# Migración a Mavetio Systems — 4 de noviembre de 2026

## Auditoría y alcance
Astro estático, React selectivo, Tailwind y Worker peru existente. Se conservan artículos, recursos, calculadora, contacto y rutas. Sitemap único desde las salidas reales del build, con fechas editoriales reales. Sin /pe, nuevas versiones internacionales ni hreflang. La migración no garantiza indexación ni posiciones.

## Implementación
Marca, tipografía, icono SVG, favicon PNG, logo de organización, manifest y tarjetas sociales actualizados. Canonicals, OG, RSS, sitemap, robots y JSON-LD apuntan a https://mavetio.com. Contacto confirmado conservado: +51 970 430 127 y connectologyaia@gmail.com. Ese correo permanece intencionadamente, no se inventa uno corporativo. Metadato de verificación de Google conservado, pero debe comprobarse en la nueva propiedad.

Worker existente: name peru. Se añade worker/index.mjs y binding ASSETS, ejecutado antes de assets para que el hostname antiguo redirija 301 conservando pathname y query. www.mavetio.com también redirige si se conecta al mismo Worker. El hostname oficial sirve los assets y los errores reales. Previews workers.dev noindex. Sin cambios DNS ni despliegue realizados.

## Conectar dominio en Cloudflare
1. Confirmar que mavetio.com está activo como zona en la misma cuenta. Si usa otros nameservers, revisar primero registros de correo y servicios antes de cambiar delegación.
2. En Workers & Pages > peru > Settings > Domains & Routes > Add > Custom Domain, añadir mavetio.com. Revisar cualquier conflicto con DNS existente antes de aceptar cambios. Cloudflare gestiona el DNS y certificado del Custom Domain.
3. Opcional: añadir www.mavetio.com al mismo Worker para activar su redirección. No crear otro Worker.
4. Verificar configuración de Builds: npm run build y despliegue con npx wrangler deploy usando este wrangler.jsonc. Si el despliegue es automático al subir main, coordinar dominio y lanzamiento antes del push.
5. Publicar solo cuando el dominio esté preparado. Comprobar HTTPS, home, servicio, blog y 404 en mavetio.com, y redirección de esas mismas rutas desde workers.dev. Mantener workers.dev habilitado para las redirecciones.
6. Verificar propiedad de mavetio.com en Search Console; enviar https://mavetio.com/sitemap.xml y comprobar las URLs prioritarias. Conservar la propiedad antigua para seguimiento.

Fuente oficial: https://developers.cloudflare.com/workers/configuration/routing/custom-domains/

## Antes de lanzar
Revisar la disponibilidad del correo corporativo; mientras tanto el contacto anterior sigue operativo. No se han borrado secretos, variables ni credenciales externas. Los documentos de auditoría anteriores son históricos y pueden conservar nombres anteriores. No se cambian slugs; todas las correspondencias son la misma ruta bajo el nuevo dominio. Core Web Vitals requieren medición real después del lanzamiento; no se declara una puntuación inventada.

## Validación local
Build: 41 páginas HTML, 40 URLs indexables, 13 artículos, 41 grafos JSON-LD y 18 FAQ. Auditoría SEO correcta; Astro check: cero errores, advertencias e hints de código. 13 pruebas correctas, incluidas redirección por host, ausencia de bucle, 404 y noindex de preview. Dependencias existentes verificadas con npm ls; sin nuevas dependencias. Persisten avisos de deprecación de Vite y paquetes extraneous preexistentes.
