---
title: "Datos del CRM: qué limpiar antes de automatizar ventas"
description: "Prepara contactos, pedidos y estados del CRM antes de automatizar: identificadores, duplicados, monedas y reglas para datos incompletos en empresas de Perú."
excerpt: "Prepara contactos, pedidos y estados del CRM antes de automatizar: identificadores, duplicados, monedas y reglas para datos incompletos en empresas de Perú."
category: "Operación y sistemas"
tags: ["automatización", "procesos", "Perú"]
datePublished: "2026-11-25"
image: "/og/reportes-peru.png"
imageAlt: "Tarjeta editorial de Mavetio sobre procesos empresariales y automatización."
relatedPosts: ["automatizar-leads-n8n-crm", "automatizar-reportes-ventas-peru"]
relatedServices: ["integraciones-y-apis", "automatizacion-con-n8n"]
ctaTitle: "Definamos una prueba para tu operación"
ctaText: "Comparte las herramientas y un ejemplo anonimizado para revisar datos, responsables y excepciones."
ctaLabel: "Revisar mi proceso"
---

Dos filas parecen representar al mismo cliente, pero una contiene el correo de compras y otra el de administración. Si la automatización las fusiona por nombre, puede perder una relación necesaria. Limpiar datos no significa borrar todo lo que se parece.

Antes de conectar formularios, CRM y hojas, define qué representa cada registro y quién decide sus cambios. Este diseño orientativo sirve para empresas de Perú que quieren automatizar con sus herramientas existentes.

## Separa persona, empresa y operación

Una empresa puede tener varios contactos; una persona puede intervenir en varias oportunidades. Un pedido no es un contacto nuevo. El modelo necesita conservar esas relaciones para que una actualización no sobrescriba información de otra operación.

Asigna identificadores estables. El número de fila de una hoja cambia al ordenar o insertar datos, por lo que no debería identificar una oportunidad en todos los sistemas. Conserva además el identificador del sistema de origen cuando exista.

## Describe cada campo antes de transformarlo

| Campo | Regla que conviene acordar |
| --- | --- |
| Importe | Valor numérico y moneda por separado |
| Fecha de compromiso | Diferenciar fecha sin hora de cita concreta |
| Responsable | Identificador activo y regla de reasignación |
| Estado | Catálogo común y transiciones permitidas |
| Contacto | Canal autorizado y relación con la operación |
| Fuente | Sistema que tiene autoridad sobre ese dato |

Para una operación que registra importes en soles y dólares, no sumes valores sin conservar su moneda. Una conversión necesita el criterio aprobado por el negocio; el flujo no debe deducirlo de una nota informal.

## Define quién es dueño de cada dato

El CRM puede gestionar al responsable comercial mientras otro sistema conserva el estado del pedido. Si ambos intentan sobrescribir todos los campos, aparecen ciclos y cambios difíciles de explicar.

Documenta qué campos se copian, cuáles solo se consultan y cómo se resuelve una discrepancia. Una [integración de sistemas](/servicios/integraciones-y-apis) empieza por esas reglas, no por conectar credenciales y esperar que los registros coincidan.

## Envía los casos ambiguos a revisión

No fusiones contactos únicamente por un nombre parecido. Utiliza criterios verificables y conserva una cola para los casos sin coincidencia segura. Si se confirma una fusión, registra qué información se conserva y qué relaciones deben trasladarse.

Un correo ausente tampoco debe convertirse en un correo inventado. Distingue desconocido, no aplicable y pendiente de verificar cuando el proceso lo necesite. Cada estado puede impedir una acción diferente.

## Prueba con una muestra anonimizada

Incluye un registro completo, otro con moneda ausente, dos contactos de la misma empresa, un responsable inactivo y un pedido cuyo cliente no se encuentra. La muestra tiene que representar excepciones, no solo filas fáciles.

La [guía de leads e idempotencia](/blog/automatizar-leads-n8n-crm) explica cómo recuperar eventos sin duplicar operaciones. La calidad del dato resuelve otra pregunta: si el registro que se va a actualizar significa realmente lo que el proceso necesita.

## Conserva un registro de lo que cambió

Una limpieza debe poder revisarse: fuente, fecha, regla aplicada y resultado. Evita volcar datos personales completos en registros de errores cuando basta un identificador y el nombre del campo afectado. Limita los accesos y acuerda el tratamiento de la información con el responsable.

Para incidencias vinculadas a pedidos, el escenario de [posventa en Lambayeque](/peru/lambayeque) muestra por qué conservar la operación de origen es más útil que crear otra ficha aislada.

## Decide cuándo está listo el primer conjunto de datos

Empieza por una sola operación, como registrar una oportunidad. Define campos mínimos, tratamiento de vacíos, responsable de excepciones y reglas de duplicado. Mide cuántos registros se procesan y cuántos necesitan revisión, sin ocultar los rechazados.

Utiliza los [recursos de diagnóstico](/recursos) para documentar esas reglas. No es necesario migrar toda la base para probar una integración; sí es necesario reconocer cuándo la información no permite actuar con seguridad.
