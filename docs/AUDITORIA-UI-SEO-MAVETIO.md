# Auditoría UI/UX, SEO y conversión de Mavetio

Fecha: 8 de noviembre de 2026. Mercado: empresas de Perú; atención remota.

## Cobertura y evidencia inicial

Revisión de código de portada, navegación, contacto, tarjetas, plantilla de los cinco servicios, plantilla SEO global y página Perú. Inventario obtenido de `src/pages`, datos y sitemap del build existente. Comprobación inicial: `npm run check:seo` pasa sobre 41 HTML, 13 artículos, 41 grafos JSON-LD, 18 FAQ y 2165 enlaces/recursos. Este resultado corresponde al build previo, no demuestra indexación en Google.

## Hallazgos y orden de implementación

| ID | Prioridad | Evidencia comprobada | Acción localizada | Responsable / esfuerzo estimado | Dependencia / verificación |
| --- | --- | --- | --- | --- | --- |
| UX-01 | Alta | `src/index.css`: textos de tarjetas de servicios y blog de 13px; enlaces de servicios de 12px; campos heredan 14px | Aumentar legibilidad, blancos y objetivos táctiles | Frontend / pequeño | Verificar móvil, teclado y ausencia de desbordamiento |
| UX-02 | Media | Cinco servicios en una cuadrícula de cuatro columnas; `ServiceCards.astro` usa la introducción extensa de cada página | Distribuir en 3+2 y escribir resúmenes específicos para comparar soluciones | Frontend + contenido / pequeño | Conservar los cinco enlaces y revisar tablet |
| UX-03 | Media | `Contact.tsx` repite los botones del encabezado y añade un tercer CTA al correo cuando no hay formulario | Sustituir la repetición por instrucciones y próximos pasos; conservar destinos | Frontend + comercial / pequeño | Correo, WhatsApp y formulario condicional siguen disponibles |
| A11Y-01 | Alta | `WhatsAppButton.tsx` usa icono blanco sobre #25D366, combinación de contraste insuficiente para el icono | Fondo verde más oscuro, foco y movimiento discreto | Frontend / pequeño | Contraste calculado y revisión visual |
| IMG-01 | Media | Cuatro PNG adjuntos de aproximadamente 2,2 MB cada uno, aún fuera del repositorio | Importar originales y servir variantes WebP mediante Astro Image | Frontend / medio | Proporción original, dimensiones, srcset, prioridad hero y lazy en imágenes inferiores |
| SEO-01 | Media | Título n8n dice “Flujos n8n y Python”; título WhatsApp no expresa chatbots; enlaces genéricos “Explorar solución” | Alinear títulos y resúmenes con los servicios ofrecidos, enlaces descriptivos | SEO + contenido / pequeño | Titles únicos y schema coherente con contenido visible |
| SEO-02 | Sin defecto detectado | Layout genera canonical, robots, Open Graph, Organization y Service; comprobador local pasa | Conservar controles existentes | SEO / revisión | Repetir build y check:seo después de cambios |
| SEO-03 | Oportunidad | Perú enlaza ocho guías de contexto distinto y explica atención remota; no hay datos actuales de consultas | Mantener arquitectura; contrastar consultas reales antes de ampliar ubicaciones | SEO + propietario / posterior | Exportación Search Console por página, consulta, país y fecha |

Confianza alta en hallazgos de código; impacto sobre conversiones y ranking es una hipótesis que requiere medición. No se crean nuevas páginas ni se proponen cambios estructurales en esta iteración.

## Sistema visual aplicado

Se conserva la identidad oscura, el acento cian y la tipografía del sistema (sin nuevas descargas de fuentes). UI UX Pro Max devolvió inicialmente glassmorphism y una paleta distinta; se descartaron por contradecir el encargo. La búsqueda específica de minimalismo para servicios empresariales respalda superficies sólidas, jerarquía tipográfica, espacio y transiciones discretas. Tarjetas con borde único y radio coherente; cuerpo comercial 15–16px; CTA principal cian y secundario oscuro. Sin nuevas librerías ni animaciones de entrada.

## Límites y fuentes

No se dispone de exportación actual de Search Console, CrUX, GA4 ni medición de conversiones. No se asigna puntuación SEO global ni se atribuye el estado “Descubierta: actualmente sin indexar” a un defecto no probado. Una auditoría local no confirma respuestas de producción, canonical elegida por Google ni entrega real de correo o WhatsApp.

- [Google: contenido útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [Google: datos estructurados](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data).
- [Astro: optimización de imágenes](https://docs.astro.build/en/guides/images/).

## Mejoras implementadas

- UX-01/02: tarjetas con resúmenes específicos, texto de servicios a 16px y blog a 15px, enlaces descriptivos y objetivos táctiles mayores. Cuadrícula de cinco servicios en 3+2, dos columnas en tablet y una en móvil. Tipografía del sistema y colores de marca conservados.
- UX-03: contacto mantiene el CTA principal de WhatsApp y correo en el encabezado. El bloque inferior explica los tres pasos posteriores, en lugar de repetir los botones. Se conserva el formulario condicional. Se retira la afirmación de gratuidad del texto de contacto porque no se aportó confirmación comercial en este encargo.
- A11Y-01: icono blanco de WhatsApp sobre verde #087f5b, contraste calculado 5,00:1 (antes 1,98:1 sobre #25D366). Texto secundario #a4b1c6 sobre tarjeta #0c1525: 8,42:1; texto del CTA #04151e sobre #67e8f9: 12,81:1. Son combinaciones concretas, no certificación completa WCAG.
- Navegación: cierre con Escape y retorno al summary, cierre al pulsar fuera, altura del desplegable limitada al viewport con scroll. Estados de foco conservados. Inputs de 16px y botón deshabilitado reconocible. Las reglas de reducción de movimiento eliminan también las transformaciones hover; revisadas en CSS, sin simular la preferencia del sistema.
- SEO-01: title/description de portada centrados en automatización para empresas de Perú; títulos comerciales de n8n, WhatsApp y software más directos. La plantilla propaga los títulos y descripciones a Open Graph y Service automáticamente. No se inventan ratings ni datos de Organization.
- El diagrama HTML de cotización se conserva dentro de los ejemplos; las ilustraciones no lo sustituyen como explicación. No se crean páginas, se cambian slugs ni se tocan canonical, robots, sitemap, redirecciones, DNS o despliegue.

## Imágenes integradas

Los cuatro adjuntos se localizaron en Temp y se incorporaron como originales en `src/assets/solutions/`. `SolutionImage.astro` usa `astro:assets` y el Sharp existente, sin dependencias nuevas. Todas mantienen proporción aproximada 5:4, dimensiones explícitas, alt descriptivo y variantes 360/540/720/1080px. Formato WebP; AVIF se omite para mantener un pipeline sencillo con tamaños ya pequeños.

| Original en src/assets/solutions | Ubicación | Carga | PNG original | WebP 1080px |
| --- | --- | --- | ---: | ---: |
| mavetio-automatizacion-empresas.png | Hero de `/` | eager, fetchpriority high | 2.212.157 bytes | 60.218 bytes |
| automatizaciones-n8n.png | Ejemplo de `/servicios/automatizacion-con-n8n` | lazy | 2.220.542 bytes | 67.114 bytes |
| chatbots-whatsapp-ia.png | Ejemplo de `/servicios/whatsapp-api-oficial` | lazy | 2.175.061 bytes | 64.218 bytes |
| integraciones-apis-software.png | Ejemplo de `/servicios/integraciones-y-apis` | lazy | 2.266.634 bytes | 72.628 bytes |

Los archivos públicos finales tienen nombres con hash en `dist/_astro/`. Las 16 variantes pesan entre 14.750 y 72.628 bytes. Esta comparación mide archivos originales contra imágenes optimizadas; la versión anterior no cargaba estas ilustraciones, por lo que no es una mejora medida del peso total previo de la página ni de LCP. El hero añade una descarga optimizada; las otras páginas difieren su ilustración. No se dispone de medición comparable antes/después de CWV.

## Validaciones

- `npm run build`: 41 páginas, 40 URLs en sitemap; 16 variantes WebP.
- `npm run lint`: Astro check sobre 39 archivos, 0 errores, 0 warnings y 0 hints. El proceso muestra advertencias de deprecación de esbuild procedentes del plugin React/Vite; no se cambia el stack para resolverlas en este alcance.
- `npm test`: 13/13 pruebas pasan (redirecciones de dominio, sitemap y calculadora).
- `npm run check:seo`: 41 HTML, 13 artículos, 41 grafos JSON-LD, 18 FAQ y 2169 enlaces/recursos internos; sin enlaces internos rotos ni páginas huérfanas según el comprobador. Schema y FAQ frente a contenido visible, canonical, robots, OG, RSS y sitemap revisados.
- Validador sitemap de seo-audit: 40 entradas, sin duplicados, fechas inválidas ni hallazgos. No consulta Google.
- Revisión adicional de imágenes: 141 elementos img con alt y dimensiones; 16 candidatos srcset presentes en disco. Las 16 variantes responden HTTP 200 y image/webp en Wrangler local.
- `npm run check:routes`: 40 páginas HTTP 200, ocho variantes redirigidas, 404 real, robots, sitemap, RSS y cabeceras correctas en Wrangler local. El primer intento fue bloqueado por EACCES del sandbox; el mismo check pasó con acceso local autorizado.
- Navegador: portada, contacto, n8n, WhatsApp, integraciones y Lima a 375, 768 y 1440px: sin overflow horizontal, un H1 por página, sin imágenes sin atributo alt ni enlaces vacíos en la comprobación básica. Contacto también revisado a 812×375. Menú probado con clic y Escape, foco restaurado a summary.
- Consola del build local: sin warnings ni errores en las páginas revisadas. No se enviaron formularios ni mensajes reales.
- Auditoría de accesibilidad: revisión de DOM, teclado, foco, alt y combinaciones de contraste; no es una evaluación WCAG exhaustiva. No hay axe/Lighthouse instalados. Se intentó abrir Audit de Astro, pero el panel no mostró resultados verificables; no se contabiliza como auditoría automatizada aprobada.
- Evidencia: `docs/evidencia-ui/home-desktop.jpg`, `contacto-mobile.jpg` y `responsive.json`.

## Archivos modificados

- `src/pages/index.astro`: hero, ilustración, ejemplo conservado, metadatos y enlaces.
- `src/pages/contacto.astro` y `src/components/Contact.tsx`: claridad comercial y próximos pasos.
- `src/data/services.ts` y `src/components/ServiceCards.astro`: títulos, resúmenes y enlaces.
- `src/layouts/ServiceLayout.astro` y nuevo `src/components/SolutionImage.astro`: ilustraciones junto a ejemplos.
- `src/index.css`, `src/components/SiteNav.astro` y `src/components/WhatsAppButton.tsx`: legibilidad, cuadrículas, teclado y contraste.
- Cuatro originales en `src/assets/solutions/`; este informe y evidencia visual.

## Próximas oportunidades, pendientes de datos

| Intención comercial | Página existente que debe evaluarse | Evidencia necesaria |
| --- | --- | --- |
| Automatización n8n Perú / procesos para empresas | `/servicios/automatizacion-con-n8n` | Consultas, impresiones, clics y posición por página |
| Chatbots para WhatsApp | `/servicios/whatsapp-api-oficial` | Variantes de consultas y CTR; distinguir integración oficial de bot conversacional |
| Agentes IA para negocios | `/servicios/agentes-de-inteligencia-artificial` | Consultas informativas frente a comerciales |
| Software empresarial | `/servicios/desarrollo-de-software` | Consultas sobre software a medida frente a productos concretos |
| Integraciones API y CRM | `/servicios/integraciones-y-apis` | Sistemas que los potenciales clientes nombran realmente |
| Automatización por región / distritos | `/peru` y sus ocho guías | Impresiones por consulta geográfica, canonical elegida e indexación por URL |

Responsable siguiente: propietario + SEO. Esfuerzo estimado medio, dependiente de exportaciones de Search Console y del volumen de datos. Comparar periodos equivalentes, filtrar Perú y separar marca/no marca. Para páginas no indexadas solicitar datos de última exploración, canonical declarada/elegida y motivo, sin asumir que más páginas resolverán el problema. No se prometen posiciones ni plazos de indexación.

Para aumentar consultas comerciales: registrar manualmente qué servicio solicita cada contacto y de dónde llegó; contrastar clics en WhatsApp/correo con conversaciones cualificadas (un clic no es un cliente). Publicar una demostración real y anonimizada cuando exista autorización, documentando entrada, salida y revisión humana. Priorizar páginas con impresiones y baja respuesta comercial antes de producir nuevas variantes geográficas. La medición y cualquier integración analítica quedan como propuesta, sin configurar servicios externos.

