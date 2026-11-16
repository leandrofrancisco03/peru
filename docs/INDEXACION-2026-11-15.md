# Revisión de indexación — 15 de noviembre de 2026

## Ampliación: seis URLs identificadas por el usuario

Se repitió la auditoría pública tras recibir la lista; evidencia en `indexacion-seis-urls-2026-11-15/evidence.json`. Todas las siguientes responden 200, declaran canonical propia HTTPS, meta index/follow y figuran en el sitemap; ninguna está huérfana. No se ha demostrado un bloqueo que explique «Descubierta: actualmente sin indexar».

| URL | Páginas con enlace desde contenido principal antes del cambio | Acción local |
| --- | ---: | --- |
| /contacto | 36 | Conserva acceso desde todos los recorridos; mejora de enlaces legales del paso anterior |
| /peru/arequipa | 3 | Enlace contextual nuevo desde recursos al ejemplo de cotización técnica |
| /peru/lambayeque | 2 | Enlace contextual nuevo desde recursos al ejemplo posventa |
| /recursos | 3 | Sección práctica para aplicar la ficha a servicios y escenarios concretos |
| /sectores/servicios-profesionales | 6 | Enlace nuevo desde recursos para solicitudes y propuestas |
| /servicios/whatsapp-api-oficial | 12 | Enlace nuevo desde recursos para seguimiento y derivación |

La ampliación no cambia canonicals, robots, redirecciones o sitemap ni genera páginas adicionales. Compilación y check:seo correctos tras el cambio. No desplegado. «N/D» se registra como ausencia de fecha en el informe aportado, no como prueba de que la página jamás haya sido visitada. Tras publicar, verificar primero recursos y luego inspeccionar las seis URLs canónicas; esperar nueva evidencia de rastreo antes de atribuir resultados. Los apartados históricos que mencionan una lista no disponible quedan supersedidos por esta ampliación.

## Evidencia

Capturas aportadas: una vista muestra un único documento rastreado sin indexar (RSS, último rastreo 5 de noviembre); otra muestra también las dos páginas legales, rastreadas el 14 de noviembre. Son vistas distintas del informe; no se presupone cuál refleja el último estado consolidado. Las pruebas en tiempo real de contacto, Arequipa e Ica indican disponibilidad, no indexación confirmada. Las seis URLs descubiertas sin indexar no aparecen en las capturas; se solicitó su lista.

Auditoría pública mediante GET de las 41 URLs del sitemap y 12 variantes/documentos: [evidencia JSON](indexacion-2026-11-15/evidence.json). No se accedió a la cuenta de Search Console ni se midieron Core Web Vitals.

## Resultados y acciones

| URL/grupo | Evidencia actual | Acción |
| --- | --- | --- |
| /politica-de-privacidad y /terminos-y-condiciones | 200, canonical propia, sin noindex, schema JSON válido, presentes en sitemap; HTML público coincide con compilación previa | Nuevo enlace contextual desde contacto. Mantener contenido legal fiel; no rellenarlo con palabras clave ni inventar identidad o conservación |
| /rss.xml | 200, feed XML; fuera del sitemap HTML | Conservar. No requiere indexación como página comercial ni solicitudes repetidas de validación |
| HTTP y WWW | Las siete variantes comprobadas devuelven 301 → HTTPS sin WWW → 200; ruta y consulta preservadas | Conservar; exclusiones normales de variantes. La inconsistencia HTTP de la auditoría anterior ya no se reproduce |
| /contacto | 200; 36 páginas lo enlazan desde contenido principal | Añadida explicación y acceso directo a privacidad y condiciones antes de contratar |
| /peru/ica y /peru/arequipa | 200, indexables, canonical propia; tres páginas enlazan cada una desde contenido principal | No hay evidencia para eliminar, redirigir o ampliar texto artificialmente |
| Seis URLs «Descubierta: actualmente sin indexar» | Sin direcciones en las capturas | Pendiente identificar para auditoría individual; no se inventan |

No se encontró un bloqueo técnico de indexabilidad en las 41 páginas del sitemap. No se demuestra que el enlazado sea la causa de la exclusión de las páginas legales; el enlace nuevo mejora navegación y descubrimiento. Los pendientes jurídicos siguen en `PENDIENTES_LEGALES.md`; la indexación no acredita suficiencia legal.

## Validación y publicación

Compilación y check:seo correctos. El cambio de contacto está preparado localmente, sin despliegue. Sitemap, robots, canonicals, RSS y redirecciones se conservan. No se añadieron páginas ni fechas artificiales.

Tras publicar el cambio de contacto, verificar el enlace público y consultar en la pestaña «Índice de Google» de cada URL HTTPS el último rastreo y canonical elegida. Solicitar rastreo de páginas importantes actualizadas cuando proceda; no de variantes HTTP/WWW ni repetidamente del RSS. No iniciar validaciones nuevas para exclusiones normales.

[Google explica](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) que solicitar rastreo no garantiza inclusión y repetir la solicitud no acelera el proceso. No se afirma que las páginas estén indexadas ni se promete un plazo.

## Prioridades

1. Responsable del sitio: publicar el pequeño cambio de contacto por su flujo habitual, verificar contenido y enlaces. Esfuerzo bajo; depende de autorización de despliegue.
2. Propietario de Search Console: aportar las seis URLs y sus estados/fechas. Auditar cada una antes de cambios editoriales; esfuerzo depende de la lista.
3. Seguimiento: comparar estados tras nuevos rastreos; éxito técnico = 200, canonical propia, rastreo permitido y enlaces accesibles. Éxito de indexación solo se acredita con evidencia de Google.
