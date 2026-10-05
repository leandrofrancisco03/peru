# SEO Perú: arquitectura y seguimiento

Actualizado: 2 de octubre de 2026. Dominio: https://peru.connectologyia.workers.dev. Atención remota, teléfono +51 970 430 127 y correo connectologyaia@gmail.com, confirmados por el propietario.

## Arquitectura implementada

| Destino | Intención y contenido propio |
| --- | --- |
| `/` | Automatización e IA para empresas de Perú; servicios, sectores, cobertura y recursos |
| `/servicios` | n8n/Python, agentes de IA, APIs y WhatsApp oficial |
| `/peru/lima` | Asignación por distrito, sedes, agenda y entregas |
| `/peru/arequipa` | Cotizaciones técnicas, versiones y aprobación |
| `/peru/la-libertad` | Distribución en Trujillo/La Libertad: unidades, stock y pedidos |
| `/peru/piura` | Reportes entre sedes, sincronización y cierres incompletos |
| `/peru/cusco` | Consultas de viajeros y reservas verificadas |
| `/peru/lambayeque` | Posventa e incidencias en Chiclayo/Lambayeque |
| `/peru/junin` | Formación, horarios y preinscripciones en Huancayo/Junín |
| `/peru/ica` | Visitas técnicas, agenda y órdenes de servicio |
| `/sectores` | Comercio, turismo, servicios profesionales y academias |
| `/blog` | Trece guías; cinco nuevas y tres anteriores ampliadas |
| `/recursos` | Calculadora en soles y ficha de diagnóstico descargable |

Los directorios `/peru` y `/sectores` enlazan todas sus páginas. La portada, los servicios y el blog también aportan enlaces contextuales. No hay páginas huérfanas en la auditoría local.

Las intenciones son hipótesis de afinidad comercial. No se dispone de volúmenes de búsqueda, dificultad certificada ni datos privados de Search Console; no son predicciones de tráfico.

## Distritos y cobertura remota

Lima reúne Miraflores, San Isidro, San Borja, Surco, La Molina, Los Olivos, Independencia, Comas, San Juan de Lurigancho, Ate, Santa Anita, Cercado y La Victoria. Se explican reglas operativas por zona. Callao se identifica como jurisdicción distinta.

Cada guía regional incluye datos necesarios, piloto, excepciones y métricas. No representa oficinas ni resultados de clientes. No se publican RUC, direcciones, perfiles sociales, responsables individuales o certificaciones no confirmados. Una eventual ficha de Google Business Profile requiere verificar la elegibilidad real del negocio; atender remotamente a una región no implica tener una oficina allí.

Crear una nueva página cuando resuelva una necesidad propia con material útil. Si solo cambia el nombre del distrito, ampliar la guía existente. Referencia: [políticas de páginas puerta y contenido escalado de Google](https://developers.google.com/search/docs/essentials/spam-policies).

## Schema JSON-LD

- Todas las páginas: Organization, WebSite y una entidad WebPage con dominio canónico e idioma es-PE.
- ContactPage y AboutPage en contacto y presentación.
- CollectionPage e ItemList en blog, servicios, Perú y sectores.
- Service en páginas de servicios, regiones y sectores, con proveedor y área atendida.
- BlogPosting en los trece artículos: autor corporativo, fechas, imagen, categoría y relación con la página.
- BreadcrumbList conectado a la página interior.
- FAQPage generado desde las mismas preguntas/respuestas visibles; la auditoría verifica la correspondencia.
- WebApplication en la calculadora gratuita en soles. El precio de uso S/ 0 no representa una tarifa del servicio. Sin valoraciones inventadas.

El marcado describe el contenido; no garantiza resultados enriquecidos. Google retiró la presentación enriquecida de FAQ en mayo de 2026: se conserva su marcado semántico sin prometer visibilidad adicional. Fuentes: [directrices de datos estructurados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) y [actualizaciones de Search Central](https://developers.google.com/search/updates).

## Base técnica

HTML estático, H1 único, metadatos únicos, canonicals, Open Graph, sitemap, RSS y enlaces verificados. Se mantienen las URLs antiguas y la verificación de Google. Los borradores y artículos futuros no se publican.

Workers Static Assets sirve URLs sin barra final y 404 real. El build genera redirecciones 301 de las variantes de páginas publicadas, sin redirigir el archivo de verificación. Se comprueba con Wrangler local y `npm run check:routes`.

La marca de navegación/favicon se optimiza a 96 × 96 con Astro. La portada y el contenido editorial no hidratan React. El contacto solo hidrata cuando el formulario está configurado; de otro modo muestra correo y WhatsApp en HTML. Los cinco artículos nuevos tienen imágenes sociales específicas.

## Publicación y medición

1. Ejecutar lint, pruebas, build y auditoría SEO. Probar rutas con Wrangler local.
2. Publicar en la cuenta que controla `connectologyia.workers.dev`, con el Worker `peru` y `wrangler.jsonc`.
3. Ejecutar `npm run check:routes -- https://peru.connectologyia.workers.dev` para revisar el dominio público.
4. Verificar la propiedad URL-prefix de Search Console si falta y enviar `https://peru.connectologyia.workers.dev/sitemap.xml`.
5. Inspeccionar portada, servicio, Lima, otra región, sector y artículo: rastreo, canonical seleccionado y HTML recibido.
6. Revisar tipos compatibles en Rich Results Test y complementar con Schema.org Validator para los demás.
7. Comparar impresiones/clics por página y consulta con filtro Perú, separando marca y búsquedas de servicio. Relacionar visitas con consultas comerciales útiles.

No se desplegó ni se envió el sitemap a Search Console durante este trabajo. Solicitar indexación tampoco garantiza indexación o posiciones. No se midieron Core Web Vitals de usuarios reales.

## Criterio para seguir creciendo

| Señal observada | Acción |
| --- | --- |
| Consultas recurrentes sobre un departamento | Evaluar una guía propia si existe material diferenciado. |
| Páginas que compiten por la misma intención | Consolidar y redirigir si se retira una URL. |
| Impresiones relevantes con pocos clics | Revisar título y coincidencia con la búsqueda. |
| Visitas sin consultas comerciales | Mejorar alcance, ejemplo y camino de contacto. |
| Página sin indexar | Revisar HTTP, canonical, enlaces y contenido antes de crear otras. |

Priorizar casos reales autorizados, mediciones antes/después y demostraciones reproducibles. Difundir calculadora y plantilla cuando exista una oportunidad editorial pertinente. No comprar enlaces masivos ni fabricar reseñas o directorios. Los contactos y publicaciones externos requieren autorización específica.

Mantener fechas de revisión reales y evitar cuotas de páginas. El siguiente contenido debe responder preguntas de clientes o señales de Search Console, además de comprobar sus fuentes técnicas.
