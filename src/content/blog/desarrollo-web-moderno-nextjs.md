---
title: "Web y CRM: comprobar que cada solicitud llega a ventas"
seoTitle: "Web y CRM: solicitudes que llegan a ventas"
description: "Diseña la captación web de una pyme de Perú: formulario, recepción persistente, asignación comercial y recuperación cuando falla el CRM."
category: "n8n e integraciones"
tags: ["web","CRM","formularios","integraciones"]
datePublished: "2026-05-10"
dateModified: "2026-10-12"
image: "/og/web.png"
imageAlt: "Tarjeta sobre el recorrido desde una consulta web a una oportunidad."
relatedServices: ["integraciones-y-apis"]
excerpt: "Diseña la captación web de una pyme de Perú: formulario, recepción persistente, asignación comercial y recuperación cuando falla el CRM."
ctaTitle: "Comprobemos el recorrido de una consulta web"
ctaText: "Revisaremos qué ve el visitante, dónde queda su solicitud y quién recibe la próxima acción."
ctaLabel: "Conectar mi web con ventas"
relatedPosts: ["automatizar-leads-n8n-crm","automatizar-cotizaciones-seguimiento-peru","impacto-ia-pymes-2026"]
---

La página carga bien y el formulario muestra un agradecimiento. Sin embargo, ventas nunca recibió la consulta. El éxito visual y el éxito comercial son dos verificaciones distintas que una web conectada debe resolver.

Esta guía se centra en captación para empresas de servicios en Perú. Explica cómo repartir responsabilidades entre web, automatización y CRM. La elección de framework depende de ese recorrido y del mantenimiento disponible.

## Define lo que promete el botón de envío

«Solicitud recibida» debería corresponder a un registro recuperable. «Cita confirmada» requiere guardar el turno y verificar disponibilidad. No uses una confirmación más fuerte que la operación realizada.

El visitante necesita saber qué sigue y disponer de un medio alternativo si falla el envío. Conserva sus campos para evitar que repita el formulario completo. Etiquetas visibles, mensajes junto al campo y foco comprensible ayudan a terminar la tarea desde móvil.

## La página pública y el sistema comercial tienen límites distintos

La web explica servicio, alcance y siguiente paso. El servidor valida y registra la solicitud. n8n coordina la entrega al CRM y la asignación. Las credenciales de escritura no deben viajar al navegador.

Un sitio informativo puede servir contenido HTML con poco JavaScript. Un panel privado con datos cambiantes necesita controles de sesión y acceso propios. No añadas una aplicación compleja a una página comercial si no resuelve una necesidad del usuario.

## Conserva el origen sin acumular datos innecesarios

Registra la página de servicio, el motivo indicado y los datos de contacto necesarios. Si usas parámetros de campaña, limita los campos permitidos y documenta para qué sirven. La consulta enviada debe poder relacionarse con una oportunidad sin tratar cada recarga como un lead nuevo.

Para una empresa con sedes, pregunta la ubicación solo si cambia asignación o cobertura. No conviertas el formulario en una investigación comercial extensa antes de permitir el contacto.

## Diseña la ruta cuando el CRM no está disponible

Una recepción persistente permite confirmar entrada y procesar después. El estado debe mostrar si la solicitud está pendiente, entregada o necesita corrección. La persona que opera el sistema necesita identificar los pendientes sin consultar manualmente cada ejecución.

Si la arquitectura envía directamente al CRM y este falla, explica el fallo de forma honesta. No muestres éxito únicamente porque el navegador terminó una animación. El [diseño de idempotencia y recuperación](/blog/automatizar-leads-n8n-crm) cubre reenvíos y escrituras inciertas.

## Haz una prueba que llegue hasta el responsable comercial

| Comprobación | Evidencia esperada |
| --- | --- |
| Envío desde móvil | Campos legibles y respuesta comprensible |
| Reintento de la misma solicitud | Un único evento comercial |
| API temporalmente caída | Registro pendiente o error visible |
| Asignación sin responsable disponible | Cola atendible y aviso definido |
| Consulta desde otra página de servicio | Origen correcto en el CRM |

Prueba con datos ficticios identificados como tales y elimina esas operaciones según el procedimiento del equipo. Verifica también la respuesta por correo o teléfono si esa es la siguiente etapa prometida.

## Mide solicitudes entregadas, no solo conversiones visuales

Compara formularios recibidos, oportunidades guardadas y primeras acciones del asesor. Si el registro llega pero nadie actúa, el cuello de botella está después de la integración.

La [solución de APIs y sistemas](/servicios/integraciones-y-apis) puede incorporar un panel pequeño para excepciones. Antes de desarrollarlo, comprueba si tu CRM ya permite revisar esa cola. La mejor conexión es la que el equipo puede operar sin otro trabajo manual oculto.
