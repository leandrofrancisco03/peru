# Pendientes legales internos de Mavetio

Actualizado: 12 de noviembre de 2026. Documento de trabajo en la raíz del repositorio: no debe copiarse a `public`, importarse desde páginas ni distribuirse dentro de `dist`.

Retirar los avisos públicos de revisión no resuelve los asuntos siguientes ni acredita cumplimiento o aprobación de las plataformas. No desplegado en esta tarea. Este archivo sustituye como lista vigente de pendientes a la del informe histórico `docs/LEGALES-SOCIAL-PUBLISHER.md`.

## Obligatorios antes de publicar estas páginas como información legal completa

El [artículo 18 de la Ley N.º 29733](https://www3.congreso.gob.pe/Docs/DGP/DIDP/files/ley_29733.pdf) exige información previa sobre identidad y domicilio del titular, destinatarios/encargados, banco de datos, transferencias, finalidad, conservación, consecuencias de entregar o negar datos y ejercicio de derechos. Aplicar también el [Reglamento, DS N.º 016-2024-JUS](https://busquedas.elperuano.pe/dispositivo/SE/2349653-1).

1. **Identificación legal y domicilio empresarial:** confirmar quién presta el servicio y es titular/responsable del tratamiento. Incorporar la identificación y domicilio que correspondan legalmente a la información pública. El correo y nombre comercial no sustituyen esos datos. No inventar razón social ni RUC. Resolver con asesoría peruana una identificación/domicilio empresarial válidos que eviten exponer datos privados innecesarios; no publicar un domicilio particular por defecto.
2. **Tratamiento efectivo:** confirmar banco de datos, datos recogidos, finalidades, destinatarios y encargados. Identificar proveedor del VPS, ubicaciones y transferencias internacionales aplicables. Contrastar lo declarado con Postiz, n8n, Drive, Sheets, Zernio y las APIs efectivamente utilizadas; completar la política con hechos comprobados.
3. **Conservación:** definir e informar los tiempos reales aplicables a cada categoría, incluidas copias de procesamiento, tokens, registros y respaldos. No inventar un plazo estándar. El texto general actual no sustituye la información concreta que corresponda.
4. **Derechos y eliminación:** asegurar que el correo empresarial se atiende y que existe un proceso real de verificación de identidad proporcional, acceso/rectificación/supresión/oposición, revocación, cancelación de programaciones y respuesta en plazos aplicables. Definir cómo se borran datos de proveedores y backups y cómo se documentan excepciones justificadas.

Estos puntos son condiciones para presentar la información como completa y utilizarla antes de recabar datos; no significan que una simple página informativa tenga prohibida su publicación por motivos técnicos. La revisión jurídica debe validar la suficiencia del aviso y la operación real, sin confundir la publicación del texto con habilitación para tratar datos.

## Obligaciones según el servicio o tratamiento, antes de activarlo o contratarlo

- Determinar inscripción/actualización de bancos de datos, contratos de encargo, garantías de transferencias y obligaciones de seguridad/incidentes que correspondan. Verificar controles reales sin atribuir cifrado, certificaciones o auditorías no comprobadas.
- Precisar prestador, alcance, precio/impuestos, soporte, cancelación, renovaciones y entrega de código/licencias en cada propuesta. Verificar identificación fiscal y mecanismos de reclamación exigibles, incluido Libro de Reclamaciones cuando corresponda. No convertir condiciones aún no pactadas en promesas públicas.
- Inventariar permisos OAuth por plataforma, nombre de aplicación mostrado y datos recibidos; distinguir permisos propios e intermediarios. Comprobar los permisos aprobados frente a los realmente solicitados. No hay acceso verificado al VPS o a los paneles de desarrolladores en esta tarea.
- Validar el recorrido de archivos y credenciales: Drive → herramientas del flujo → plataforma, copias temporales, permisos de enlaces y registros. Comprobar también cookies o seguimiento realmente habilitados antes de describirlos.

## Antes de enviar a revisión de TikTok, Meta o Google

- Completar los puntos anteriores y validar el servicio funcional, su identidad, sus permisos y sus mecanismos de revocación/borrado. Las páginas por sí solas no prueban aprobación ni cumplimiento.
- TikTok: configurar URLs públicas HTTPS, redirect URI y scopes necesarios, y aportar demostración del flujo real conforme a su [guía de revisión](https://developers.tiktok.com/docs/en/app-review-guidelines).
- Meta: verificar en el panel el mecanismo de eliminación/desautorización requerido. `/politica-de-privacidad#eliminacion-de-datos` contiene instrucciones por correo, no implementa un callback. La documentación automática consultada anteriormente devolvió 429; confirmar directamente requisitos vigentes del producto antes de presentar.
- Google/YouTube: validar consentimiento, permisos mínimos y eliminación/revocación conforme a las [políticas de YouTube](https://developers.google.com/youtube/terms/developer-policies). Los plazos que exige la plataforma son obligaciones a implementar, no evidencia de que Mavetio ya los cumpla.

## Información confirmada que se conserva públicamente

Nombre comercial Mavetio, operación en Perú y `contacto@mavetio.com`; Postiz/n8n autoalojados en VPS administrado con EasyPanel; Drive para vídeos; Sheets para contenidos/programaciones; Zernio para TikTok; integraciones previstas con APIs de TikTok, Google/YouTube y Meta. Cloudflare aloja la web. No se presupone que Cloudflare aloje el VPS.

## Verificación editorial y de publicación

- Eliminados los avisos públicos de revisión y los apartados internos de pendientes; conservados derechos, contacto, revocación, eliminación, limitaciones de publicación y responsabilidades.
- No añadir identidad privada, domicilio particular, teléfono personal, plazos ficticios ni certificaciones.
- Los enlaces internos del sitio deben ser relativos a raíz y los canonicals HTTPS de `mavetio.com`; localhost solo es válido para herramientas locales, nunca para enlaces públicos.
- Confirmar que este archivo y los informes internos no se incluyan en `dist`. La raíz del repositorio no es un sistema de control de acceso: si el repositorio fuera público, este Markdown también sería visible allí. No contiene datos personales ni secretos.
