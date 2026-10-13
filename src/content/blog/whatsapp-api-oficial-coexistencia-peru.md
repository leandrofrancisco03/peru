---
title: "WhatsApp API: preparar el alta sin interrumpir a tus asesores"
seoTitle: "WhatsApp API y coexistencia: preparar el alta en Perú"
description: "Planifica API oficial y posible coexistencia de WhatsApp Business: titularidad, atención compartida, prueba de mensajes y reversión operativa."
category: "WhatsApp y CRM"
tags: ["WhatsApp API","coexistencia","CRM","atención"]
datePublished: "2026-09-23"
dateModified: "2026-10-12"
image: "/og/whatsapp.png"
imageAlt: "Tarjeta sobre conversaciones conectadas con WhatsApp API oficial."
relatedServices: ["whatsapp-api-oficial","agentes-de-inteligencia-artificial"]
excerpt: "Planifica API oficial y posible coexistencia de WhatsApp Business: titularidad, atención compartida, prueba de mensajes y reversión operativa."
ctaTitle: "Revisemos la incorporación de tu canal"
ctaText: "Indica si utilizas la aplicación Business, cuántas personas atienden y qué sistema debería recibir las consultas."
ctaLabel: "Evaluar mi integración oficial"
relatedPosts: ["automatizar-ventas-whatsapp-peru","agentes-ia-atencion-cliente","automatizar-leads-n8n-crm"]
---

El número ya recibe consultas y los asesores dependen de él. Antes de añadir un agente o un CRM, necesitas decidir cómo seguirá trabajando el equipo durante el cambio y qué ocurrirá si la integración no responde.

Esta guía aborda la preparación operativa de una empresa de Perú para WhatsApp Business Platform. La coexistencia con la aplicación Business es una opción que debe verificarse en el proceso oficial y para la cuenta concreta; no la damos por disponible para cualquier número.

## Haz un inventario del canal antes de contratar

Identifica quién administra el negocio y el número, qué accesos existen, cuántas personas atienden y dónde se guarda hoy la información comercial. Registra las herramientas que ya están conectadas y las dependencias de cada asesor.

No compartas contraseñas o códigos de verificación para una evaluación inicial. El acceso de implementación debe acordarse con permisos y responsables definidos. Tener control del teléfono no sustituye revisar todos los activos necesarios para el alta.

## Aclara qué cambia para atención y qué cambia para sistemas

La API permite integrar el canal con aplicaciones; no proporciona por sí sola tu procedimiento de atención. Define dónde verá el asesor las conversaciones, cómo aceptará un caso y qué estado pausará la respuesta automática.

La documentación oficial de [WhatsApp Business Platform](https://developers.facebook.com/docs/whatsapp/) y el [flujo de incorporación de usuarios de la aplicación Business](https://developers.facebook.com/docs/whatsapp/embedded-signup/custom-flows/onboarding-business-app-users/) son las referencias para verificar requisitos actuales. Las condiciones deben revisarse durante el alta; no se promete aprobación de cuentas, números o plantillas.

## Prepara una matriz de responsabilidad por conversación

| Situación | Comportamiento diseñado |
| --- | --- |
| Consulta nueva | Registrar y asignar según reglas |
| Agente responde | Mantener contexto y fuente de respuesta |
| Asesor toma el caso | Pausar automatización de esa conversación |
| Integración falla | Cola visible y atención alternativa acordada |
| Cliente pide detener mensajes | Registrar preferencia y cancelar seguimientos aplicables |

Distingue automatización interna de mensajería externa. Crear una tarea al asesor no tiene el mismo propósito que enviar un recordatorio al cliente. Revisa permisos y reglas del canal antes de activar cada tipo de salida.

## Conecta eventos con estados comerciales verificables

n8n recibe eventos, valida su origen según la integración y relaciona mensajes con conversaciones. El CRM conserva contacto, oportunidad y próxima acción. Los eventos repetidos necesitan control de idempotencia.

Un mensaje entregado no acredita una venta aceptada. Tampoco una captura confirma un pago. El artículo [de conversación a pedido](/blog/automatizar-ventas-whatsapp-peru) muestra qué evidencia debe exigir cada transición comercial.

## Ejecuta una prueba operativa con el asesor

Comprueba recepción, respuesta, estados, transferencia y pausa. Reenvía un evento, interrumpe la conexión al CRM y verifica que los pendientes sean recuperables. Prueba el regreso a atención manual según la arquitectura elegida, sin suponer que todas las modalidades permiten el mismo procedimiento.

Define quién decide detener el piloto y qué comunicaciones se cancelan. La puesta en marcha debe conservar trazabilidad suficiente para investigar un caso sin exponer conversaciones completas en alertas innecesarias.

## Presupuesta el canal completo

Separa implementación, proveedor o bandeja de atención, cargos aplicables de mensajería, infraestructura, IA y mantenimiento. Solicita condiciones vigentes y registra los supuestos de volumen; esta guía no fija precios ni elegibilidad.

Puedes empezar registrando y asignando consultas antes de incorporar IA. Cuando ese recorrido funcione, añade [clasificación y derivación con agentes](/blog/agentes-ia-atencion-cliente). El [servicio de WhatsApp oficial](/servicios/whatsapp-api-oficial) debe adaptarse a esa secuencia operativa, no obligarte a cambiar toda la atención de una vez.
