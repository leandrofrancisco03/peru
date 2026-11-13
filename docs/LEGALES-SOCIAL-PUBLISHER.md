# Páginas legales de Mavetio — 12 de noviembre de 2026

Implementadas y verificadas localmente. **No desplegadas y no listas para presentarse como documentación legal definitiva ni como una aprobación de TikTok/Meta/Google.**

## Rutas previstas tras publicar

- Política: `https://mavetio.com/politica-de-privacidad`
- Términos: `https://mavetio.com/terminos-y-condiciones`
- Instrucciones de eliminación: `https://mavetio.com/politica-de-privacidad#eliminacion-de-datos`

Ambas páginas son HTML estático, sin autenticación ni dependencia de JavaScript para leer su contenido. Comparten diseño, navegación y estilos actuales; incorporan índice por anclas, idioma es-PE, un H1, metadatos, canonical propia y JSON-LD WebPage/Organization/WebSite/BreadcrumbList. El sitemap existente las incorpora automáticamente. `/privacidad` y sus cuatro variantes antiguas redirigen con 301 hacia la nueva política. Se actualizaron el footer global y el enlace del consentimiento del formulario.

En estas dos páginas el contacto es exclusivamente `contacto@mavetio.com`: no hay teléfono en el footer, botón de WhatsApp ni teléfono en el schema. Los datos de contacto previamente publicados en otras páginas no se han modificado. No se añadió nombre personal, domicilio particular, razón social, RUC ni certificaciones.

## Información confirmada utilizada

- Nombre comercial Mavetio; operación en Perú; correo empresarial indicado.
- Automatización, inteligencia artificial y desarrollo de software.
- Mavetio Social Publisher: administración/programación de contenido social.
- Postiz y n8n autoalojados en VPS; EasyPanel como administración, sin atribuirle el alojamiento.
- Google Drive para vídeos de origen; Google Sheets para contenidos y programación; Zernio para TikTok.
- APIs de TikTok, Google/YouTube y Meta previstas. No se afirma aprobación ni se enumeran scopes que no se han comprobado.
- Cloudflare para esta web, comprobable en el proyecto. No se atribuye a Cloudflare el VPS de Social Publisher.

## Pendientes antes de cerrar la revisión legal y presentar la aplicación

1. Identificar al titular legal y domicilio empresarial adecuado. Determinar con asesoría legal qué información debe hacerse pública, evitando publicar domicilio particular u otros datos privados innecesarios. El nombre comercial y correo no sustituyen los datos legalmente exigibles.
2. Confirmar proveedor/país del VPS y condiciones de tratamiento de Google, Zernio y demás destinatarios efectivos, incluyendo transferencias internacionales y contratos de encargo cuando correspondan.
3. Inventariar por integración: nombre de la aplicación mostrado al autorizar, permisos solicitados/aprobados, finalidad, datos recibidos, dónde se guardan tokens y quién puede acceder. Distinguir permisos de Mavetio de permisos de intermediarios. No se accedió al VPS ni a paneles de desarrolladores.
4. Documentar el recorrido real de vídeos, Sheets, tokens, logs, temporales y respaldos; conservación por categoría; procedimiento de cancelación de trabajos pendientes, revocación y eliminación; verificación de identidad proporcional y evidencia de ejecución del borrado.
5. Verificar los requisitos específicos de cada API. Por ejemplo, YouTube exige eliminar datos autorizados tras la revocación dentro del plazo establecido en su política (la sección III.E.4 consultada indica un máximo de siete días naturales para la revocación por el mecanismo del cliente). Esto es una obligación de la plataforma, **no una práctica de Mavetio comprobada ni un plazo de conservación inventado**. Debe implementarse y validarse antes de afirmar cumplimiento.
6. Confirmar controles de acceso, protección de credenciales, incidentes, tecnologías de seguimiento/cookies realmente habilitadas y obligaciones sobre bancos de datos. No se añadieron trackers ni se inspeccionaron secretos.
7. Precisar contratación, soporte, costos, renovaciones, cancelación, condiciones de entrega y mecanismos de reclamación exigibles, incluido el Libro de Reclamaciones si corresponde.
8. Validar con asesoría legal peruana los textos completos y completar los avisos de pendientes con hechos confirmados. No basta con retirar el aviso sin resolverlos.

## Revisiones de plataformas

- TikTok: los enlaces del footer son visibles sin abrir un menú y las páginas son públicas en la compilación. Faltan publicación en HTTPS, configuración real de URLs/redirect URI, scopes mínimos, comprobación de funcionalidad y material de demostración. Su guía exige una aplicación funcional, no solo páginas legales.
- Meta: el ancla de eliminación ofrece instrucciones por correo, **no es un endpoint de callback**. Debe verificarse en el panel qué mecanismo admite/exige el producto utilizado y probarlo. No se implementó ni configuró un callback de eliminación/desautorización.
- Google/YouTube: se incluyeron enlaces a la privacidad de Google, términos de YouTube y controles de revocación. Deben verificarse la pantalla de consentimiento, scopes y tratamiento real antes de activar o someter la integración a revisión.

No se configuraron credenciales, OAuth, conectores, cuentas o servicios. No se enviaron solicitudes de aprobación ni comunicaciones.

## Fuentes oficiales consultadas

- [Ley N.º 29733](https://www.leyes.congreso.gob.pe/DetLeyNume_1p.aspx?xNorma=6&xNumero=29733&xTipoNorma=0).
- [Decreto Supremo N.º 016-2024-JUS](https://busquedas.elperuano.pe/dispositivo/SE/2349653-1).
- [Código de Protección y Defensa del Consumidor — Indecopi](https://www.gob.pe/institucion/indecopi/normas-legales/1244218-29571).
- [TikTok: App Review Guidelines](https://developers.tiktok.com/docs/en/app-review-guidelines).
- [YouTube: Developer Policies](https://developers.google.com/youtube/terms/developer-policies).
- Referencia pendiente de verificar directamente: [Meta: data deletion callback](https://developers.facebook.com/docs/development/create-an-app/app-dashboard/data-deletion-callback/). La consulta automática devolvió HTTP 429; no se presenta su contenido como verificado ni se garantiza que un enlace por correo baste para una revisión de Meta.

## Validación

- `npm run build`: correcto, 42 páginas generadas y 41 URLs canónicas en sitemap. No se inventaron lastmod.
- `npm run lint`: 41 archivos, cero errores/warnings/hints del diagnóstico Astro. Avisos de deprecación existentes de Vite durante ejecución.
- `npm test`: 16/16 correctos.
- `npm run check:seo`: 42 páginas, 42 grafos JSON-LD, 2273 enlaces/recursos. Se ajustó el chequeo para exigir correo y ausencia de teléfono en las páginas legales, manteniendo la comprobación habitual en el resto del sitio.
- `npm run check:routes` sobre Wrangler local: 41 páginas 200; robots, sitemap, RSS, variantes y 404 correctos.
- Verificación adicional: las cinco variantes antiguas de privacidad devuelven 301 directamente a `/politica-de-privacidad`.
- Navegador: ambas páginas renderizadas sin sesión; a 375 px de viewport, ancho de documento y scrollWidth iguales (360 px útiles, sin desbordamiento horizontal); footer con ambos enlaces. En escritorio, 1265 px útiles sin desbordamiento. Sin enlaces de teléfono o WhatsApp en las páginas legales.
- [Vista de términos en escritorio](legal-2026-11-12/terminos-escritorio.jpg).

Antes de utilizar las URLs en los paneles, completar la revisión pendiente, desplegar mediante el flujo habitual y repetir las comprobaciones HTTP en el dominio público. La implementación local no implica que las páginas estén ya publicadas.
