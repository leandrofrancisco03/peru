---
title: "Telegram y n8n: un asistente interno para pendientes comerciales"
seoTitle: "Telegram y n8n: asistente interno de ventas"
description: "Diseña un asistente de Telegram que consulte cotizaciones y pendientes del CRM, con identidad, permisos y aprobaciones para tu equipo en Perú."
category: "Agentes de IA"
tags: ["Telegram","n8n","CRM","asistente interno"]
datePublished: "2026-09-23"
image: "/og/agentes.png"
imageAlt: "Tarjeta editorial: respuestas útiles y límites claros para agentes de IA."
relatedServices: ["agentes-de-inteligencia-artificial","automatizacion-con-n8n"]
excerpt: "Diseña un asistente de Telegram que consulte cotizaciones y pendientes del CRM, con identidad, permisos y aprobaciones para tu equipo en Perú."
dateModified: "2026-10-12"
ctaTitle: "Un bot conectado a los pendientes de tu equipo"
ctaText: "Indica qué consulta repiten tus asesores y dónde está el dato que necesitan. Revisamos una primera herramienta de solo lectura."
ctaLabel: "Diseñar mi asistente interno"
relatedPosts: ["automatizar-leads-n8n-crm","agentes-ia-atencion-cliente","automatizar-cotizaciones-seguimiento-peru"]
---

El asesor termina una visita y necesita saber qué propuestas esperan respuesta. Hoy pide el reporte por un grupo, alguien abre el CRM y copia una lista. Un asistente interno puede devolver esa información sin convertir el chat en una segunda base de datos.

Esta guía propone un piloto para un equipo comercial que trabaja entre sedes de Perú: consultar pendientes propios desde Telegram y preparar una próxima acción. Es un ejemplo de diseño, no un caso de cliente. El éxito se mide por consultas resueltas con datos vigentes, no por la cantidad de mensajes del bot.

## Empieza por una pregunta que tenga una respuesta verificable

«¿Qué cotizaciones debo revisar hoy?» tiene un alcance comprobable si el CRM registra responsable, vencimiento y estado. «Haz crecer mis ventas» no describe una función que pueda probarse.

Define primero qué significa pendiente: propuesta enviada, sin respuesta registrada y con una próxima acción vencida. Decide si se consideran las oportunidades reasignadas y qué ocurre cuando falta una fecha. Para cortes diarios, configura explícitamente la zona America/Lima en el proceso; no dependas del reloj del servidor.

## Del usuario de Telegram al permiso del CRM

El identificador del chat sirve para localizar una conversación, pero no demuestra por sí solo qué cartera puede consultar alguien. Mantén un registro autorizado que relacione usuario, empleado, estado de acceso y ámbito comercial. Una baja debe revocar el acceso aunque la conversación continúe abierta.

La [API de bots de Telegram](https://core.telegram.org/bots/api) documenta las actualizaciones y los métodos del canal. Esa identidad debe validarse en tu integración antes de buscar información comercial. En un grupo, evita devolver detalles privados de clientes; ofrece un resumen agregado o una ruta privada autorizada.

## Una arquitectura de consulta con salida controlada

1. Telegram entrega la solicitud al flujo de n8n.
2. El flujo identifica al usuario y obtiene su ámbito desde un registro confiable.
3. La IA transforma la pregunta en una intención permitida, por ejemplo listar pendientes o consultar una propuesta.
4. Una herramienta aplica filtros de responsable y estado sin aceptar que el modelo los elimine.
5. El CRM devuelve datos y momento de consulta; una plantilla presenta el resultado.

El prompt puede explicar el vocabulario del negocio, pero los permisos deben vivir en la herramienta. Una instrucción escrita en un adjunto o mensaje nunca debe ampliar el acceso. Consulta también cómo diseñamos [agentes con herramientas limitadas](/servicios/agentes-de-inteligencia-artificial).

## Leer una propuesta y modificarla son operaciones diferentes

Para una segunda fase, el asistente podría preparar una tarea de seguimiento. Antes de guardarla, muestra la oportunidad, responsable y fecha interpretada. La aprobación debe referirse a esa acción concreta, expirar y quedar registrada. Si el usuario cambia el texto, vuelve a pedir aprobación.

No permitas que «recuérdamelo mañana» cierre una venta o modifique un importe. Si el CRM falla después de recibir una escritura, comprueba el resultado antes de repetirla. El artículo sobre [eventos duplicados y CRM](/blog/automatizar-leads-n8n-crm) explica cómo separar recepción y efecto comercial.

## Pruebas de aceptación para el responsable comercial

| Situación de prueba | Resultado esperado |
| --- | --- |
| Asesor solicita cartera ajena | Acceso denegado sin revelar registros |
| Cotización cambió mientras conversaban | Consulta actualizada antes de actuar |
| Pregunta sin cliente identificable | Petición de aclaración |
| API del CRM no responde | Aviso de indisponibilidad, sin datos inventados |
| Aprobación enviada dos veces | Una única tarea guardada |

Guarda una muestra anonimizada de preguntas y revisa si el bot encontró el registro correcto, si utilizó una fuente vigente y si evitó una acción no autorizada. Cuenta también las consultas que terminaron en revisión humana.

## El siguiente paso depende de la operación

Si la mayoría de consultas son botones previsibles, prueba primero un bot de reglas. Si el lenguaje varía pero los datos están ordenados, añade interpretación con IA. El consumo incluye modelo, infraestructura y mantenimiento de las conexiones; registra el costo por consulta útil antes de ampliar usuarios.

Para comunicaciones con clientes, estudia un flujo distinto de [atención con derivación humana](/blog/agentes-ia-atencion-cliente). El asistente interno debe resolver el trabajo de tu equipo sin confundirse con un vendedor autónomo.
