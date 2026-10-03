---
title: "Cómo automatizar cotizaciones y seguimiento comercial en Perú"
seoTitle: "Automatizar cotizaciones y seguimiento en Perú con n8n"
description: "Ordena solicitudes, prepara cotizaciones y controla versiones con n8n y tu CRM. Guía B2B con aprobación humana, moneda, vigencia y seguimiento."
category: "Ventas y operaciones en Perú"
tags: ["cotizaciones", "n8n", "B2B", "Perú"]
datePublished: "2026-10-02"
image: "/og/cotizaciones-peru.png"
relatedServices: ["automatizacion-con-n8n", "integraciones-y-apis"]
relatedPosts: ["cuanto-cuesta-automatizar-procesos-peru", "automatizar-leads-n8n-crm"]
---

Una cotización suele tardar porque la solicitud llega incompleta, los precios están en varias hojas o nadie sabe quién debe aprobarla. Automatizar el documento sin resolver esos puntos solo produce borradores más rápido.

Para una empresa de servicios o un proveedor B2B en Perú, un flujo útil conecta solicitud, revisión, propuesta y seguimiento. El resultado debe permitir responder qué se ofreció, con qué condiciones y cuál es la versión vigente.

## Define una solicitud que se pueda evaluar

Recoge servicio o producto, cantidad, fecha requerida y los detalles necesarios para estimar el trabajo. Si hay adjuntos, identifica su versión y limita el acceso al equipo autorizado. No conviertas una descripción ambigua en una especificación aprobada.

Un formulario puede detectar campos vacíos. Una IA puede ayudar a resumir un texto libre o proponer una clasificación, pero el especialista debe resolver las equivalencias y requisitos que afectan el alcance. Es especialmente útil separar solicitudes estándar de trabajos a medida.

## Crea un modelo de estados comercial

| Estado | Qué significa | Siguiente acción |
| --- | --- | --- |
| Recibida | La solicitud está registrada. | Comprobar datos mínimos. |
| Falta información | No se puede cotizar todavía. | Pedir aclaración concreta. |
| En evaluación | Un responsable revisa el alcance. | Preparar propuesta. |
| Borrador | Existe un documento sin aprobar. | Revisar precio y condiciones. |
| Enviada | Se entregó una versión aprobada. | Esperar respuesta y programar seguimiento. |
| Aceptada, rechazada o vencida | Hay un resultado comercial registrado. | Detener o adaptar el seguimiento. |

Un cambio de estado debe guardar fecha y responsable. Así se distingue un retraso de evaluación de un problema técnico de envío.

## Separa precio, moneda y condiciones

Usa campos estructurados para moneda, importe y vigencia. Si comparas costos en soles y dólares, registra el tipo de cambio utilizado y la fecha de referencia que tu negocio haya definido. No dejes que un modelo de texto invente importes ni convierta monedas sin una regla comprobable.

La cotización también debe identificar el tratamiento de impuestos y las condiciones comerciales que tu empresa haya aprobado. La automatización reproduce esas reglas; no sustituye la validación contable del documento. Evita mezclar importes con distinto tratamiento en un mismo total.

## Construye el flujo en n8n con aprobación

1. Recibe la solicitud y asigna un identificador único.
2. Valida campos y registra la oportunidad en el CRM.
3. Consulta catálogo o plantilla vigente y prepara un borrador.
4. Solicita aprobación al responsable definido.
5. Genera el documento final desde los datos aprobados.
6. Registra versión, destinatario y resultado del envío.
7. Programa la próxima acción comercial según estado y vigencia.

Los [flujos de trabajo de n8n](https://docs.n8n.io/workflows/) permiten organizar la integración, pero la decisión de qué puede enviarse debe estar definida en el proceso. Conserva un camino para fallos de la API o de la generación del documento.

## No sobrescribas una propuesta que ya se envió

Si el cliente cambia cantidades o plazo, crea otra versión vinculada a la solicitud. Mantén la anterior para explicar el historial y marca cuál está vigente. Cuando una propuesta se acepta, referencia esa versión exacta al crear el proyecto o la orden.

Ejemplo didáctico: una empresa pide diez unidades y después solicita quince. Ambas propuestas pueden pertenecer a la misma oportunidad, pero tienen cantidades y posiblemente plazos distintos. Cambiar silenciosamente el documento original impediría saber qué aceptó el cliente.

## Haz seguimiento sin perseguir a quien ya respondió

Antes de cada aviso, consulta el estado actual. Si la oportunidad fue cerrada o el cliente respondió, cancela el recordatorio antiguo. Los seguimientos por un canal de mensajería deben ajustarse a las condiciones de ese canal y a las preferencias del contacto.

Una tarea interna para el asesor puede ser suficiente: no todo seguimiento necesita un mensaje automático. Si el equipo comercial trabaja en distintas ciudades, asigna por especialidad y disponibilidad antes que por una etiqueta geográfica rígida.

## Comprueba que el proceso mejora

Prueba solicitudes incompletas, aprobación rechazada, cambio de versión, envío fallido y aceptación justo antes de un recordatorio. Mide tiempo hasta cotización aprobada, propuestas corregidas y oportunidades sin próxima acción. Conserva las ventas cerradas como métrica separada.

La [guía de Arequipa](/peru/arequipa) aplica este enfoque a cotizaciones técnicas. Para adaptarlo a consultoría u otros servicios, revisa la solución de [servicios profesionales](/sectores/servicios-profesionales) y utiliza la [ficha de diagnóstico](/recursos) antes de solicitar una implementación.
