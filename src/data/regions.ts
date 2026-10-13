export interface Region {
  slug: string; name: string; title: string; description: string; intro: string;
  focus: string; context: string; cases: { title: string; text: string }[];
  pilotTitle: string; steps: string[]; measure: string; preparation: string;
  zones: { name: string; text: string }[]; faq: [string, string][];
  sector: string; article: string; scenarioTitle: string; scenario: string; cta: string; record: string;
}

// Escenarios seleccionados; no combinaciones automáticas de ciudad y servicio.
export const regions: Region[] = [
  {
    "slug": "lima",
    "name": "Lima",
    "title": "Automatización en Lima: asignación por sede y cobertura",
    "description": "Organiza consultas y entregas entre distritos de Lima con CRM y n8n. Define cobertura, responsables y excepciones para una implementación remota.",
    "intro": "Si una consulta cambia de sede, también debe cambiar su responsable sin perder lo acordado. Esta guía trabaja la asignación por cobertura y disponibilidad para negocios que atienden distintos distritos de Lima.",
    "focus": "Coordinar consultas, sedes y entregas",
    "context": "Para una empresa que atiende varios distritos de Lima, la ubicación puede cambiar el asesor asignado, el horario disponible o la cobertura de entrega. Conviene convertir esas condiciones en reglas explícitas, antes de incorporar un chatbot. El distrito ayuda a decidir una ruta operativa; no reemplaza la dirección ni confirma que un pedido pueda entregarse.",
    "cases": [
      {
        "title": "Ventas con asignación por zona",
        "text": "Unifica consultas de web y canales conectados en el CRM. Conserva distrito, producto y origen de la consulta; asigna al asesor por especialidad o disponibilidad. Una segunda consulta del mismo contacto puede ser una oportunidad distinta y debe conservarse."
      },
      {
        "title": "Pedidos con cobertura verificable",
        "text": "Consulta una tabla de zonas, horarios de corte y tarifas aprobadas. Si la dirección queda fuera de cobertura o falta una referencia, solicita revisión. El flujo solo confirma el despacho cuando el sistema de pedidos registra su aceptación."
      },
      {
        "title": "Agenda entre varias sedes",
        "text": "Separa la disponibilidad por sede y servicio. Presenta horarios del calendario real, registra una reserva provisional y confirma después de guardar el turno. Un cambio de sede debe liberar el horario anterior para evitar dobles reservas."
      }
    ],
    "pilotTitle": "Piloto: de consulta a asesor, sin oportunidades olvidadas",
    "steps": [
      "Selecciona un canal y dos zonas de atención para probar la asignación.",
      "Define distrito, motivo y medio de contacto como datos de entrada; pide solo lo necesario.",
      "Registra cada solicitud con un identificador y una regla de deduplicación.",
      "Asigna responsable y crea una alerta si la oportunidad queda pendiente más allá del plazo acordado.",
      "Prueba una zona no cubierta, un reintento y una consulta fuera del horario del equipo."
    ],
    "measure": "Compara el tiempo hasta la primera respuesta humana, solicitudes sin responsable y errores de asignación. Separa los resultados por canal y zona para detectar dónde se acumulan los pendientes.",
    "preparation": "Trae tu lista de distritos atendidos, horarios, reglas de reparto y una muestra anonimizada de consultas. Si trabajas con varias sedes, identifica quién mantiene cada agenda y dónde se registra la venta final.",
    "zones": [
      {
        "name": "Miraflores, San Isidro y San Borja",
        "text": "Si atiendes estos distritos, registra las sedes y servicios que realmente cubres. Usa la zona para enrutar una consulta solo después de comprobar la regla acordada por tu empresa."
      },
      {
        "name": "Santiago de Surco y La Molina",
        "text": "Una dirección precisa puede cambiar la cobertura dentro de un mismo distrito. Relaciona el domicilio validado con la franja disponible antes de ofrecer una visita o entrega."
      },
      {
        "name": "Los Olivos, Independencia y Comas",
        "text": "Cuando tu operación cubre varios distritos, define si un asesor atiende por sede, servicio o disponibilidad. Deja registrada cualquier transferencia para que la consulta conserve un responsable."
      },
      {
        "name": "San Juan de Lurigancho, Ate y Santa Anita",
        "text": "Si recibes pedidos desde estas zonas, separa el origen de la consulta del lugar de entrega. El catálogo y el stock se verifican en sus sistemas, sin deducirlos del distrito."
      },
      {
        "name": "Cercado de Lima, La Victoria y otros distritos",
        "text": "Incluye únicamente la cobertura confirmada por tu negocio. Una zona fuera de la tabla debe generar revisión; ampliar la lista exige validar responsable, horario y condiciones."
      }
    ],
    "faq": [
      [
        "¿Cómo se realiza la atención en los distritos de Lima?",
        "La evaluación y la implementación se coordinan de forma remota. Revisamos tus herramientas y las reglas de cada zona por canales digitales; no es necesario visitar una oficina."
      ],
      [
        "¿También puedo automatizar una operación que atiende Callao?",
        "Sí, se puede evaluar dentro del mismo proyecto. Callao debe tener sus propias zonas y reglas de atención; no debe confundirse administrativamente con un distrito de Lima."
      ]
    ],
    "sector": "comercio-y-distribucion",
    "article": "automatizar-ventas-whatsapp-peru",
    "scenarioTitle": "Cuando una dirección no coincide con la zona asignada",
    "scenario": "Ejemplo propuesto: una solicitud indica Surco, pero al validar la dirección la zona requiere otro equipo. El flujo conserva la consulta, retira la asignación pendiente y pide revisión antes de confirmar entrega. Ningún nombre de distrito sustituye la cobertura real del negocio.",
    "cta": "Revisar mis reglas de cobertura",
    "record": "Distrito confirmado, sede asignada y motivo de cualquier transferencia."
  },
  {
    "slug": "arequipa",
    "name": "Arequipa",
    "title": "Cotizaciones y seguimiento con n8n en Arequipa",
    "description": "Automatiza solicitudes B2B en Arequipa: requisitos técnicos, propuestas con versiones y aceptación comprobable. Evaluación e implementación remotas.",
    "intro": "Una solicitud técnica puede pasar por varias revisiones antes de cotizar. Para una empresa en Arequipa, proponemos ordenar ese recorrido por especificación, versión y aprobación, hasta entregarlo a operaciones.",
    "focus": "Cotizaciones técnicas y seguimiento B2B",
    "context": "Si tu empresa en Arequipa vende suministros o servicios a otras empresas, una cotización suele necesitar más que nombre y teléfono: especificaciones, cantidades, plazo y revisión técnica. Automatizar la recepción sirve cuando también se identifica lo que falta y se asigna quién debe resolverlo. El sistema debe conservar cada versión aprobada.",
    "cases": [
      {
        "title": "Solicitudes con información completa",
        "text": "Organiza los requerimientos de un formulario o correo autorizado. Extrae referencias para revisión y señala campos incompletos. Una descripción ambigua no debe convertirse automáticamente en un producto del catálogo: el asesor valida la equivalencia."
      },
      {
        "title": "Versiones de cotización trazables",
        "text": "Relaciona solicitud, documento y revisión. Conserva precio, moneda, vigencia y responsable de aprobación. Si el cliente cambia cantidades, genera una nueva versión y marca cuál está vigente sin borrar la conversación anterior."
      },
      {
        "title": "Seguimiento de órdenes y servicio",
        "text": "Tras la aceptación, crea tareas para compras u operaciones. Envía avisos de hitos desde estados confirmados y prepara una lista de órdenes demoradas. El aviso de finalización requiere la validación del responsable del servicio."
      }
    ],
    "pilotTitle": "Piloto: una familia de productos, una ruta de aprobación",
    "steps": [
      "Selecciona solicitudes de un mismo tipo de suministro o servicio.",
      "Define una ficha con especificación, cantidad, fecha requerida y adjuntos permitidos.",
      "Asigna revisión técnica cuando falte información o se solicite una sustitución.",
      "Crea el borrador de cotización desde el catálogo autorizado; una persona aprueba precio y condiciones.",
      "Programa seguimiento según vigencia y estado, deteniéndolo al recibir respuesta o cerrar la oportunidad."
    ],
    "measure": "Mide solicitudes completas al primer intento, tiempo desde recepción hasta cotización aprobada y oportunidades sin seguimiento. No confundas velocidad de preparación con ventas cerradas: registra ambas por separado.",
    "preparation": "Prepara ejemplos sin datos personales de solicitudes, cotizaciones y órdenes. Indica cuál es el catálogo vigente, quién aprueba descuentos y si el sistema de gestión dispone de API o exportaciones autorizadas.",
    "zones": [],
    "faq": [
      [
        "¿La IA puede aprobar una especificación técnica?",
        "El flujo puede organizar documentos o proponer campos, pero la aceptación de especificaciones y equivalencias debe quedar en manos del responsable técnico."
      ],
      [
        "¿Funciona si todavía cotizo en hojas de cálculo?",
        "Podemos evaluar una plantilla controlada como punto de partida. Se deben definir identificadores, permisos y versiones antes de conectar varios usuarios o automatizar la emisión."
      ]
    ],
    "sector": "servicios-profesionales",
    "article": "automatizar-cotizaciones-seguimiento-peru",
    "scenarioTitle": "Cuando se solicita una referencia alternativa",
    "scenario": "Ejemplo propuesto: el producto solicitado no está disponible y ventas propone una alternativa. La IA puede ordenar las diferencias, pero el responsable técnico confirma compatibilidad. El borrador conserva ambas referencias y no cambia la especificación aceptada sin aprobación.",
    "cta": "Revisar mi circuito B2B",
    "record": "Referencia solicitada, alternativa propuesta y aprobación técnica asociada."
  },
  {
    "slug": "la-libertad",
    "name": "La Libertad · Trujillo",
    "title": "Pedidos y distribución con n8n en Trujillo y La Libertad",
    "description": "Conecta pedidos, unidades y entregas parciales en Trujillo y La Libertad. Define validaciones de almacén y seguimiento de incidencias con n8n.",
    "intro": "Un pedido mayorista debe conservar unidad, cantidad y compromiso de entrega. Esta guía para operaciones en La Libertad separa recepción, preparación y saldo pendiente para que ventas y almacén no trabajen con cifras diferentes.",
    "focus": "Pedidos mayoristas y distribución",
    "context": "Para una empresa de Trujillo que atiende distintos puntos de La Libertad, recibir pedidos por varios canales puede fragmentar el control. Una automatización útil consolida solicitudes y permite revisar disponibilidad, condiciones comerciales y ruta antes de confirmar. Los plazos de entrega deben salir de la operación real, no de una respuesta generada por IA.",
    "cases": [
      {
        "title": "Pedidos con unidades consistentes",
        "text": "Distingue unidad, caja y paquete para evitar que dos sistemas interpreten cantidades diferentes. Valida códigos del catálogo, registra la conversión autorizada y envía productos no reconocidos a revisión comercial."
      },
      {
        "title": "Preparación sin confirmar stock inexistente",
        "text": "Consulta existencias en la fuente acordada y separa disponible de reservado. Si el sistema no permite reservar de forma segura, el flujo crea una solicitud pendiente; la confirmación se emite después de la validación de almacén."
      },
      {
        "title": "Incidencias de entrega con responsable",
        "text": "Registra faltantes, dirección incompleta o intento fallido como estados específicos. Asigna la incidencia al equipo correspondiente y conserva el historial para que ventas no vuelva a prometer una entrega ya observada."
      }
    ],
    "pilotTitle": "Piloto: pedidos de una ruta comercial",
    "steps": [
      "Elige una ruta y un catálogo limitado con códigos únicos.",
      "Documenta unidades, cantidades mínimas y fecha de corte de pedidos.",
      "Conecta recepción, validación comercial y aprobación de almacén.",
      "Genera una lista de preparación con identificadores de pedido, sin duplicarla por reintentos.",
      "Ensaya un faltante, un pedido cancelado y un cambio de dirección antes del despacho."
    ],
    "measure": "Revisa pedidos corregidos por unidad equivocada, tiempo de preparación y entregas con incidencia. Compara también los pedidos recibidos con los confirmados para detectar solicitudes que quedaron entre sistemas.",
    "preparation": "Necesitamos catálogo, reglas de reserva, estados del pedido y responsables de ruta. Identifica el sistema que manda sobre el stock y cada punto en que una persona debe aprobar una modificación.",
    "zones": [],
    "faq": [
      [
        "¿El flujo puede organizar pedidos de otras provincias de La Libertad?",
        "Sí, si la empresa proporciona cobertura, rutas y reglas operativas verificables. Cada destino puede tener plazos o restricciones diferentes."
      ],
      [
        "¿Se puede integrar el seguimiento del transportista?",
        "Depende de los accesos que ofrezca: API, webhooks o archivos autorizados. Si no existe una conexión fiable, se conserva un paso de actualización manual en lugar de inventar un estado."
      ]
    ],
    "sector": "comercio-y-distribucion",
    "article": "automatizar-reportes-ventas-peru",
    "scenarioTitle": "Cuando una entrega sale incompleta",
    "scenario": "Ejemplo propuesto: almacén aprueba una parte del pedido y deja un saldo pendiente. El sistema identifica líneas y cantidades, ventas valida el cambio y la siguiente entrega se relaciona con el pedido original. Así no se contabiliza una segunda venta al reprogramar el faltante.",
    "cta": "Revisar mis pedidos y saldos",
    "record": "Cantidad solicitada, preparada, entregada y pendiente por referencia."
  },
  {
    "slug": "piura",
    "name": "Piura",
    "title": "Reportes entre sedes con automatización en Piura",
    "description": "Coordina cierres comerciales de sedes en Piura: origen de datos, cobertura del reporte y correcciones tardías con n8n y sistemas existentes.",
    "intro": "Un total consolidado necesita indicar qué sedes enviaron datos y hasta qué momento. Para una operación en Piura, esta guía propone coordinar cierres y correcciones sin depender del último archivo recibido.",
    "focus": "Reportes de sedes y coordinación operativa",
    "context": "Si coordinas equipos entre Piura, Sullana, Talara u otras localidades, cada sede puede registrar operaciones de manera diferente. Antes de automatizar un reporte conviene acordar identificadores, hora de corte y estados. Que una sede no haya enviado información no significa que haya vendido cero: esa diferencia debe ser visible en el resumen.",
    "cases": [
      {
        "title": "Cierre diario con fuentes identificadas",
        "text": "Recoge ventas o solicitudes de fuentes autorizadas y etiqueta cada registro por sede y fecha operativa. Comprueba que todas las sedes reportaron antes de publicar un total definitivo. Los datos faltantes aparecen como pendientes, sin sustituirlos por cero."
      },
      {
        "title": "Sincronización después de una interrupción",
        "text": "Conserva identificadores estables para reintentar la recepción cuando una conexión falla. Registra fecha del evento y de sincronización por separado. Así un registro recibido al día siguiente se asigna a su jornada correcta y no se cuenta dos veces."
      },
      {
        "title": "Alertas que llevan a una acción",
        "text": "Una diferencia en el cierre genera una tarea para un responsable, con enlace a los registros observados. Separa alertas de datos incompletos, valores fuera de rango y fallos técnicos para que cada equipo reciba lo que puede resolver."
      }
    ],
    "pilotTitle": "Piloto: cierre operativo de dos sedes",
    "steps": [
      "Acuerda un formato de entrada y códigos únicos de sede y operación.",
      "Define la hora de corte en America/Lima y el tratamiento de correcciones posteriores.",
      "Consolida una muestra y concilia los totales con los archivos originales.",
      "Marca el reporte como parcial cuando falte una fuente y avisa al responsable.",
      "Simula un envío atrasado, una corrección y un archivo cargado dos veces."
    ],
    "measure": "Compara tiempo dedicado al cierre, sedes que reportan completas y diferencias pendientes de conciliación. Un reporte más rápido solo es útil si permite explicar de dónde sale cada total.",
    "preparation": "Comparte formatos anonimizados de las sedes, definición de cada indicador y reglas de corrección. Aclara qué sistemas pueden exportar datos y cuáles requieren un formulario sencillo de captura.",
    "zones": [],
    "faq": [
      [
        "¿Necesito cambiar todos los sistemas de mis sedes?",
        "No necesariamente. Primero evaluamos exportaciones o accesos disponibles. Puede ser suficiente normalizar entradas y conectar un reporte común antes de reemplazar herramientas."
      ],
      [
        "¿La automatización resuelve la falta de conexión?",
        "No restaura la conectividad. Puede diseñarse para detectar retrasos y recuperar envíos cuando la conexión vuelve, siempre que el sistema de origen conserve los registros."
      ]
    ],
    "sector": "comercio-y-distribucion",
    "article": "automatizar-reportes-ventas-peru",
    "scenarioTitle": "Cuando una sede entrega datos después del cierre",
    "scenario": "Ejemplo propuesto: se publica un cierre preliminar y una sede comunica una corrección. El flujo guarda la versión recibida, valida el período y publica una revisión identificada. El reporte anterior sigue siendo rastreable y la ausencia inicial no se convierte en una venta igual a cero.",
    "cta": "Revisar mi cierre entre sedes",
    "record": "Período, sede, versión, registros recibidos y motivo de corrección."
  },
  {
    "slug": "cusco",
    "name": "Cusco",
    "title": "Reservas y proveedores conectados con n8n en Cusco",
    "description": "Organiza reservas turísticas en Cusco con disponibilidad por proveedor, cambios de fecha y tareas actualizadas. Implementación de flujos e IA a distancia.",
    "intro": "Coordinar una reserva exige saber qué proveedor confirmó y qué falta por resolver. Esta guía para una operación turística en Cusco se concentra en opciones, cambios y entrega de información vigente al equipo.",
    "focus": "Consultas de viajeros y reservas verificadas",
    "context": "En una operación turística en Cusco, una consulta puede incluir varias fechas, pasajeros e idiomas. Un asistente puede ordenar la solicitud, pero confirmar un servicio exige revisar disponibilidad, condiciones y proveedores. La automatización debe distinguir una consulta, una cotización y una reserva confirmada para no prometer plazas que aún no están aseguradas.",
    "cases": [
      {
        "title": "Consultas completas desde el primer contacto",
        "text": "Recopila fechas, número de viajeros, idioma y servicio solicitado. Ofrece respuestas desde un catálogo aprobado y conserva el mensaje original cuando se traduzca. Una petición especial debe llegar al asesor con su contexto."
      },
      {
        "title": "Disponibilidad con fuente y vigencia",
        "text": "Consulta el sistema de reservas cuando exista acceso autorizado. Si depende de confirmación de un proveedor, muestra el estado pendiente y crea una tarea. No reutilices disponibilidad antigua como si fuera una plaza garantizada."
      },
      {
        "title": "Información previa al servicio",
        "text": "Prepara indicaciones desde la reserva confirmada: horario, punto de encuentro y contacto operativo. Los cambios de itinerario se validan antes del envío y quedan registrados para que el asesor pueda ver qué versión recibió el viajero."
      }
    ],
    "pilotTitle": "Piloto: consultas de un solo servicio turístico",
    "steps": [
      "Selecciona un servicio con condiciones y material informativo actualizados.",
      "Define los datos mínimos para cotizar y una ruta de atención por idioma.",
      "Conecta el registro comercial y la consulta de disponibilidad, o la tarea de validación manual.",
      "Exige aprobación para cambios de precio, excepciones y confirmación final.",
      "Prueba una fecha sin cupos, una reprogramación y una consulta que el asistente no pueda responder."
    ],
    "measure": "Mide solicitudes con datos completos, tiempo de cotización y reservas que requirieron corrección. Revisa por separado las respuestas automáticas útiles y las derivaciones, sin evaluar al agente solo por cuántos mensajes envía.",
    "preparation": "Prepara catálogo, condiciones vigentes, procedimiento de confirmación y contactos operativos. Define quién mantiene la información y qué consultas deben ir directamente a una persona.",
    "zones": [],
    "faq": [
      [
        "¿El agente puede atender en otros idiomas?",
        "Se puede evaluar con preguntas representativas y material aprobado en los idiomas necesarios. Las traducciones de condiciones importantes necesitan revisión y el viajero debe poder pedir ayuda humana."
      ],
      [
        "¿Puede vender entradas o garantizar disponibilidad de terceros?",
        "Solo se integran operaciones que el proveedor permita y con los accesos correspondientes. No se garantiza disponibilidad externa ni se confirma una reserva sin la validación definida."
      ]
    ],
    "sector": "turismo-y-reservas",
    "article": "automatizar-reservas-turismo-peru",
    "scenarioTitle": "Cuando solo parte del itinerario está confirmada",
    "scenario": "Ejemplo propuesto: una solicitud combina dos servicios y solo uno acepta la fecha. El flujo mantiene la segunda confirmación pendiente y deriva la alternativa al asesor. Las indicaciones definitivas se preparan cuando el conjunto está validado, sin confundir respuesta comercial con disponibilidad.",
    "cta": "Revisar la coordinación de mis reservas",
    "record": "Confirmación por componente, responsable y versión del itinerario."
  },
  {
    "slug": "lambayeque",
    "name": "Lambayeque · Chiclayo",
    "title": "Seguimiento posventa automatizado en Lambayeque",
    "description": "Organiza incidencias posventa en Chiclayo y Lambayeque: pedido de origen, responsable, evidencia y cierre verificado con CRM y n8n.",
    "intro": "Una incidencia necesita mantener el vínculo con lo entregado y el compromiso de respuesta. Para una empresa en Lambayeque, el flujo propuesto ordena recepción, revisión y cierre sin abrir varios casos por la misma conversación.",
    "focus": "Atención posventa y seguimiento de incidencias",
    "context": "Si tu negocio en Chiclayo atiende clientes de distintos puntos de Lambayeque, una consulta posterior a la venta puede llegar a un asesor diferente del que tomó el pedido. Vincular el caso con la operación original evita volver a pedir información y facilita decidir quién debe resolverlo. El sistema organiza la atención; las excepciones comerciales las evalúa tu equipo.",
    "cases": [
      {
        "title": "Consultas vinculadas a la compra",
        "text": "Busca la operación por un identificador y valida que corresponda al solicitante antes de mostrar información. Registra motivo, producto y estado. Si la compra no aparece, crea una tarea de búsqueda en lugar de descartar el caso."
      },
      {
        "title": "Derivación según el problema",
        "text": "Separa dudas de uso, seguimiento de entrega, cambios solicitados e incidencias del producto. Cada categoría tiene responsable y datos mínimos. Una clasificación incierta pasa a revisión; la IA no debe rechazar una solicitud automáticamente."
      },
      {
        "title": "Seguimiento sin respuestas contradictorias",
        "text": "Conserva el último estado confirmado y la solución propuesta. Si el cliente vuelve a escribir, vincula el mensaje al caso abierto. Un caso resuelto puede reabrirse con historial si el problema continúa, sin perder la respuesta anterior."
      }
    ],
    "pilotTitle": "Piloto: una cola de atención posventa con estados claros",
    "steps": [
      "Selecciona una línea de productos y un canal de consultas.",
      "Define qué dato permite encontrar la compra y cómo verificar al solicitante.",
      "Crea categorías y asigna un responsable por tipo de incidencia.",
      "Registra próxima acción y fecha de revisión para cada caso pendiente.",
      "Prueba un pedido no encontrado, una consulta repetida y un caso reabierto."
    ],
    "measure": "Mide tiempo hasta asignar responsable, casos sin próxima acción y consultas reabiertas. Revisa también cuántas veces el cliente tiene que repetir información; cerrar rápidamente un caso no demuestra que su problema se haya resuelto.",
    "preparation": "Prepara estados del sistema de pedidos, criterios internos de atención y ejemplos anonimizados de consultas. Define quién puede autorizar una solución comercial y qué información de la compra puede mostrarse en cada canal.",
    "zones": [],
    "faq": [
      [
        "¿Se pueden unificar consultas de Chiclayo y otras localidades de Lambayeque?",
        "Sí. El caso puede conservar localidad y punto de compra para asignar al equipo correcto, sin crear historiales separados para una misma incidencia."
      ],
      [
        "¿El agente decide si acepta un cambio o una devolución?",
        "No debe resolver una excepción por su cuenta. Puede recoger información y consultar reglas aprobadas; la decisión y las acciones comerciales quedan sujetas al procedimiento y los permisos del negocio."
      ]
    ],
    "sector": "comercio-y-distribucion",
    "article": "agentes-ia-atencion-cliente",
    "scenarioTitle": "Cuando el cliente vuelve a escribir por un caso abierto",
    "scenario": "Ejemplo propuesto: llega otra foto o mensaje sobre la misma incidencia. La integración lo adjunta al caso vigente y conserva una próxima acción. Si se refiere a otra entrega, crea un caso relacionado distinto. La persona responsable decide la solución y valida el cierre.",
    "cta": "Revisar mi seguimiento posventa",
    "record": "Pedido de origen, caso, evidencia recibida y decisión del responsable."
  },
  {
    "slug": "junin",
    "name": "Junín · Huancayo",
    "title": "Inscripciones y convocatorias con n8n en Junín",
    "description": "Coordina interesados, programas y cambios de grupo para formación en Junín. Automatización administrativa con cupos y confirmaciones verificadas.",
    "intro": "Una consulta sobre horarios no es todavía una inscripción. Esta guía para formación en Junín relaciona interesado, convocatoria y grupo para que cada seguimiento refleje la elección vigente.",
    "focus": "Consultas de formación e inscripciones",
    "context": "Una academia o centro de formación que atiende en Huancayo y otras localidades de Junín puede ofrecer grupos presenciales, remotos o combinados. El flujo necesita distinguir programa, modalidad, sede y horario antes de proponer una inscripción. La atención de ConnectologyIA es remota; las modalidades del curso corresponden al centro y se consultan en su catálogo.",
    "cases": [
      {
        "title": "Información por programa y convocatoria",
        "text": "Consulta una ficha vigente de duración, modalidad, horarios y requisitos. Si un programa aún no tiene convocatoria confirmada, registra el interés sin inventar fecha de inicio. Mantén separadas las condiciones de cada periodo."
      },
      {
        "title": "Seguimiento de interesados",
        "text": "Vincula contacto, programa y grupo de interés. Asigna asesor y próxima acción. Si alguien pregunta por dos cursos, conserva ambas solicitudes; si reenvía el mismo formulario, evita duplicar el seguimiento."
      },
      {
        "title": "Inscripción con validación de cupos",
        "text": "Consulta disponibilidad y distingue preinscripción de matrícula confirmada. Los pagos y documentos pasan por el procedimiento de verificación del centro. Cuando cambia un horario, identifica a los interesados afectados antes de comunicarlo."
      }
    ],
    "pilotTitle": "Piloto: una convocatoria con seguimiento visible",
    "steps": [
      "Elige un programa y una convocatoria con información revisada.",
      "Define datos mínimos de consulta: programa, modalidad, horario preferido y contacto.",
      "Conecta formulario, ficha del curso y registro comercial.",
      "Asigna revisión para cupos, pagos y requisitos antes de confirmar una inscripción.",
      "Prueba un grupo lleno, un cambio de horario y una consulta repetida del mismo interesado."
    ],
    "measure": "Compara consultas con información completa, tiempo hasta atención del asesor y preinscripciones pendientes de validación. Separa interés, inscripción y asistencia; son etapas distintas y no deben contarse como el mismo resultado.",
    "preparation": "Trae catálogo por convocatoria, grupos, horarios y estados de inscripción. Define quién mantiene los cupos y quién puede confirmar una matrícula. Para las pruebas, utiliza registros ficticios sin datos de estudiantes.",
    "zones": [],
    "faq": [
      [
        "¿Sirve para cursos virtuales y presenciales?",
        "Sí, el catálogo puede distinguir modalidad y sede. El flujo consulta las condiciones reales de cada grupo para no ofrecer un horario o formato que no está disponible."
      ],
      [
        "¿La IA puede decidir quién ingresa al programa?",
        "Este diseño organiza consultas y tareas administrativas. Las decisiones de admisión, evaluación académica o elegibilidad quedan a cargo del centro y de sus responsables."
      ]
    ],
    "sector": "academias-y-formacion",
    "article": "automatizar-inscripciones-academias-peru",
    "scenarioTitle": "Cuando cambia el horario de una convocatoria",
    "scenario": "Ejemplo propuesto: el centro modifica un grupo y necesita revisar solicitudes afectadas. El flujo localiza a los interesados relacionados, prepara tareas de contacto y detiene indicaciones antiguas. La nueva elección se guarda antes de confirmar el grupo, conservando quién la validó.",
    "cta": "Revisar mi convocatoria y grupos",
    "record": "Programa, edición, grupo elegido y estado de validación administrativa."
  },
  {
    "slug": "ica",
    "name": "Ica",
    "title": "Órdenes de servicio y agenda automatizadas en Ica",
    "description": "Conecta solicitudes, visitas y cierre de órdenes en Ica con n8n. Revisa asignación, evidencias y cambios de agenda para servicios técnicos.",
    "intro": "Una visita puede completarse sin que la orden esté lista para cerrar. Para empresas de servicios en Ica, el diseño propuesto distingue asignación, ejecución, revisión de evidencia y comunicación al cliente.",
    "focus": "Visitas técnicas y órdenes de servicio",
    "context": "Para un negocio que coordina servicios entre Ica, Chincha o Pisco, la disponibilidad no depende solo de un espacio en el calendario. También importan zona, duración, especialidad y materiales necesarios. Una automatización debe recoger esos requisitos antes de proponer la visita y conservar el estado real del trabajo después de asignarlo.",
    "cases": [
      {
        "title": "Solicitudes listas para evaluar",
        "text": "Registra tipo de servicio, zona, descripción y disponibilidad del cliente. Clasifica las consultas con reglas acordadas y solicita revisión cuando la descripción no permita estimar el trabajo. No conviertas una consulta en una visita confirmada sin validación."
      },
      {
        "title": "Agenda con capacidad operativa",
        "text": "Relaciona técnico, especialidad y tiempo reservado. Incluye márgenes de traslado definidos por el coordinador y consulta materiales antes de confirmar. Si dos solicitudes compiten por un horario, la reserva debe resolverse en el sistema fuente."
      },
      {
        "title": "Cierre con trabajo realizado y pendientes",
        "text": "Recoge un parte estructurado con tareas realizadas, observaciones y próxima acción. Un servicio que necesita repuesto queda pendiente, no finalizado. Los documentos o imágenes se asocian a la orden con acceso limitado."
      }
    ],
    "pilotTitle": "Piloto: una especialidad y una zona de servicio",
    "steps": [
      "Selecciona una categoría de trabajo con duración y requisitos conocidos.",
      "Define cobertura, disponibilidad y quién aprueba visitas fuera de la regla normal.",
      "Conecta recepción, evaluación y agenda con un identificador de orden.",
      "Registra el resultado de la visita y crea tareas para pendientes.",
      "Prueba una reprogramación, una visita sin acceso al lugar y falta de material."
    ],
    "measure": "Mide órdenes completas antes de asignar, reprogramaciones por datos faltantes y trabajos pendientes de segunda visita. Separa demora de agenda, traslado y ejecución para elegir qué parte del proceso conviene mejorar.",
    "preparation": "Prepara zonas de cobertura, tipos de servicio, responsables y estados de una orden. Aclara cómo se confirma la visita y cómo se registra el cierre. Si el técnico usa un formulario móvil, define qué ocurre cuando envía datos con retraso.",
    "zones": [],
    "faq": [
      [
        "¿Pueden coordinar servicios entre Ica, Chincha y Pisco?",
        "El flujo puede contemplar varias zonas si la empresa proporciona sus reglas de cobertura, agenda y asignación. La automatización no sustituye la validación de rutas ni de capacidad del equipo."
      ],
      [
        "¿ConnectologyIA debe visitar nuestras instalaciones?",
        "La evaluación y la implementación se realizan de forma remota. Las visitas de esta guía corresponden al servicio que tu empresa presta a sus clientes."
      ]
    ],
    "sector": "servicios-profesionales",
    "article": "automatizar-reportes-ventas-peru",
    "scenarioTitle": "Cuando la visita requiere un segundo trabajo",
    "scenario": "Ejemplo propuesto: el técnico registra una observación que exige otra intervención. El flujo conserva la visita realizada, abre una tarea de revisión y evita marcar toda la orden como terminada. Si cambia el alcance, solicita autorización antes de ocupar otra franja de agenda.",
    "cta": "Revisar mis órdenes y visitas",
    "record": "Orden, visita, evidencia, revisión y próxima acción autorizada."
  }
];
