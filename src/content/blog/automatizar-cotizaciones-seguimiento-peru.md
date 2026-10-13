---
title: "Cotizaciones B2B: de la solicitud a una versión aprobada"
seoTitle: "Automatizar cotizaciones B2B y versiones en Perú"
description: "Automatiza cotizaciones en Perú con n8n y CRM: requisitos completos, versiones, moneda, aprobación y seguimiento de la propuesta vigente."
category: "Operación comercial"
tags: ["cotizaciones","n8n","CRM","aprobaciones"]
datePublished: "2026-10-02"
image: "/og/cotizaciones-peru.png"
imageAlt: "Tarjeta sobre propuestas claras y seguimiento de cotizaciones B2B."
relatedServices: ["automatizacion-con-n8n", "integraciones-y-apis"]
relatedPosts: ["automatizar-leads-n8n-crm","automatizar-ventas-whatsapp-peru","cuanto-cuesta-automatizar-procesos-peru"]
excerpt: "Automatiza cotizaciones en Perú con n8n y CRM: requisitos completos, versiones, moneda, aprobación y seguimiento de la propuesta vigente."
dateModified: "2026-10-12"
ctaTitle: "Ordenemos la preparación de tus propuestas"
ctaText: "Trae una plantilla sin datos de clientes y explica quién aprueba alcance, importes y condiciones antes del envío."
ctaLabel: "Revisar mi circuito de cotización"
---

Un cliente pide ampliar cantidades mientras el asesor prepara la propuesta. Operaciones consulta el primer archivo y ventas envía el segundo. El problema no es producir el PDF: es saber qué versión tiene autorización y qué aceptó el cliente.

Para un proveedor de servicios o suministros en Perú, automatizar cotizaciones implica organizar esa cadena. El siguiente diseño conserva revisión comercial y técnica, y utiliza n8n para mover información entre el formulario, CRM, catálogo y documentos.

## La ficha de entrada debe permitir decidir qué falta

Recoge objeto del pedido, cantidad o alcance, plazo solicitado y contacto. Si hay una especificación adjunta, registra su versión. No obligues al cliente a completar campos que tu equipo puede consultar de una fuente autorizada, pero identifica los datos sin los que no es posible cotizar.

Una empresa de mantenimiento puede necesitar ubicación del trabajo y descripción del equipo. Un distribuidor necesita referencia y unidad de venta. Son requisitos diferentes: una plantilla universal termina acumulando casillas irrelevantes.

## Modela la propuesta como una secuencia de estados

| Estado | Qué permite |
| --- | --- |
| Incompleta | Solicitar datos faltantes |
| En preparación | Consultar catálogo y redactar alcance |
| En revisión | Validar precio, plazo y condiciones |
| Aprobada | Generar documento para envío |
| Enviada | Programar seguimiento de esa versión |
| Aceptada o descartada | Detener recordatorios y coordinar el cierre |

Una modificación material después de aprobar debe abrir otra revisión. Guarda quién aprobó y qué versión revisó. «Último archivo modificado» no es una regla fiable para decidir cuál enviar.

## Separa cálculos, redacción y autorización

Las reglas del negocio calculan cantidades e importes; el catálogo proporciona valores autorizados. La IA puede ordenar una solicitud o preparar un borrador de descripción, pero no debe inventar descuentos, equivalencias técnicas o plazos.

Si cotizas en soles y dólares, cada importe necesita moneda. Cualquier conversión debe identificar tasa, fuente y fecha aprobadas por el negocio. El tratamiento de impuestos y condiciones contractuales lo define el responsable competente; no debe inferirse del texto de un correo.

## El seguimiento consulta el estado antes de escribir

Un recordatorio preparado ayer puede resultar incorrecto hoy porque el cliente ya respondió. Antes de enviarlo, comprueba que la versión siga vigente, no exista una respuesta posterior y el canal esté autorizado. Si hubo cambio de asesor, actualiza la tarea.

Para [WhatsApp API oficial](/servicios/whatsapp-api-oficial), las reglas del canal también forman parte del diseño. No traslades sin revisión una secuencia de correo a otro medio. Distingue recordatorios internos al asesor de comunicaciones externas al cliente.

## Prueba una aceptación tardía de una versión antigua

Supón que el cliente acepta la propuesta anterior mientras ya se preparó una revisión. El flujo debe detener la conversión automática a pedido y mostrar ambas versiones al responsable. También prueba un precio faltante, un adjunto ilegible y dos envíos del mismo formulario.

La [arquitectura de leads e idempotencia](/blog/automatizar-leads-n8n-crm) ayuda a conservar una sola solicitud por evento. El control de versión resuelve otro problema: conservar cambios legítimos sin confundirlos con duplicados.

## Mide el cuello de botella que quieres retirar

Separa tiempo esperando datos, tiempo preparando y tiempo aprobando. Un generador de documentos no resolverá una demora originada en autorización comercial. Revisa propuestas corregidas y oportunidades sin próxima acción, además del tiempo total.

Si tu operación encaja en [servicios profesionales B2B](/sectores/servicios-profesionales), empieza por una familia de solicitudes y una ruta de aprobación. Una cotización que se puede rastrear hasta sus datos y aprobaciones vale más que muchos documentos producidos sin control.
