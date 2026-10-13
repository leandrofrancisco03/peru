export const sectors = [
  {
    "slug": "comercio-y-distribucion",
    "name": "Comercio y distribución",
    "title": "Pedidos y almacén conectados para comercio en Perú",
    "description": "Coordina venta, reserva y despacho sin confundir stock disponible con confirmado. Diseño de integración para comercios y distribuidores en Perú.",
    "intro": "La prioridad es entregar a almacén un pedido que pueda preparar: producto reconocido, unidad correcta y compromiso validado. Diseñamos el traspaso desde ventas para que las incidencias vuelvan al responsable adecuado.",
    "problem": "Una conversación atendida no equivale a un pedido registrado. Cuando catálogo, stock y despacho están separados, el asesor puede ofrecer un producto agotado o duplicar un pedido al reenviar el mensaje. La solución empieza por identificar cuál es el sistema autorizado para cada dato.",
    "workflow": [
      [
        "Recibir y clasificar",
        "Registra canal, producto, cantidad y destino. Si el cliente utiliza un nombre distinto al del catálogo, solicita validación antes de convertirlo en un código de producto."
      ],
      [
        "Consultar y reservar",
        "Lee precio y existencias desde la fuente definida. Reserva solo si el sistema admite esa operación con control de concurrencia; de lo contrario, solicita confirmación al almacén."
      ],
      [
        "Confirmar y seguir",
        "Crea el pedido con un identificador único, registra su aceptación y comunica el estado confirmado. Cancelaciones y devoluciones deben tener una ruta separada."
      ]
    ],
    "inputs": [
      "Catálogo con códigos y unidades de venta.",
      "Sistema fuente de stock, reservas y precios.",
      "Zonas de entrega y responsables de despacho.",
      "Reglas para cambios, anulaciones y revisión de pagos."
    ],
    "exceptions": "Una captura de transferencia no confirma un abono. El flujo puede registrar el comprobante como pendiente, pero el estado pagado debe venir de una fuente autorizada o de conciliación humana. Tampoco se debe descontar stock dos veces por un reintento.",
    "metrics": [
      "Pedidos recibidos frente a pedidos registrados.",
      "Correcciones por producto, cantidad o dirección.",
      "Tiempo desde confirmación hasta preparación."
    ],
    "pilot": "Empieza con un canal, un catálogo pequeño y una zona de entrega. Antes de ampliar, prueba pedidos simultáneos del último producto, cancelaciones y reenvíos del mismo evento.",
    "questions": [
      [
        "¿Puedo empezar con una hoja de cálculo?",
        "Puede servir para un piloto con volumen y concurrencia controlados. Si varios usuarios modifican existencias, revisamos primero los riesgos de conflicto y la necesidad de un sistema con reservas."
      ],
      [
        "¿Necesito IA para gestionar los pedidos?",
        "No para aplicar reglas de precio o stock. La IA puede ayudar a interpretar consultas; los importes y estados deben validarse contra datos del negocio."
      ]
    ],
    "service": "integraciones-y-apis",
    "article": "automatizar-ventas-whatsapp-peru",
    "regions": [
      "lima",
      "la-libertad",
      "piura"
    ],
    "problemHeading": "El pedido cambia mientras almacén lo prepara",
    "flowHeading": "De solicitud comercial a orden verificable",
    "exampleHeading": "Ejemplo: entrega parcial con saldo pendiente",
    "example": "Un distribuidor recibe un pedido de varias referencias y solo puede despachar parte. El diseño conserva cantidades solicitadas, aprobadas y entregadas por línea. Ventas valida la alternativa con el cliente; operaciones registra el saldo sin abrir una segunda venta ficticia. Una devolución debe enlazarse a la entrega correspondiente.",
    "tools": "El CRM conserva la negociación; catálogo y almacén controlan códigos, unidades y disponibilidad; n8n intercambia eventos y concilia referencias. Si el transportista no ofrece API, un registro manual con responsable puede mantener el estado sin simular rastreo automático.",
    "acceptance": [
      "Un pedido repetido conserva una única orden.",
      "Un cambio de cantidad después de preparar genera revisión de almacén.",
      "Una entrega parcial conserva saldo y comunicación aprobada."
    ],
    "cta": "Revisar el traspaso a almacén",
    "ctaText": "Trae un ejemplo de pedido corregido y explica qué sistema confirma existencia, reserva y despacho."
  },
  {
    "slug": "turismo-y-reservas",
    "name": "Turismo y reservas",
    "title": "Consultas y cambios de reserva para turismo en Perú",
    "description": "Conecta asesor, disponibilidad y operación turística. Automatiza el seguimiento de opciones y cambios con confirmaciones rastreables por servicio.",
    "intro": "Una reserva debe mantenerse coherente después de cambiar fecha, viajeros o proveedor. Conectamos atención y coordinación para conservar qué está confirmado, qué falta y qué instrucciones siguen vigentes.",
    "problem": "El viajero puede consultar distintas fechas o servicios antes de decidir. Si cada mensaje se trata como una reserva nueva, se duplican tareas y se pierde el contexto. Conviene separar persona, solicitud de viaje, cotización y reserva para conservar los cambios sin confundirlos.",
    "workflow": [
      [
        "Completar la solicitud",
        "Recoge fechas, viajeros, idioma y servicio. Comprueba ambigüedades de fecha y conserva la consulta original para el asesor."
      ],
      [
        "Validar el servicio",
        "Consulta cupos, condiciones y proveedor. Cuando la respuesta depende de una persona, crea una tarea pendiente y evita presentar el servicio como confirmado."
      ],
      [
        "Acompañar la reserva",
        "Tras la aprobación, registra la confirmación y prepara indicaciones desde los datos vigentes. Las reprogramaciones deben actualizar las tareas y detener recordatorios antiguos."
      ]
    ],
    "inputs": [
      "Catálogo y condiciones aprobadas por servicio.",
      "Fuente de disponibilidad y procedimiento de confirmación.",
      "Calendario operativo y datos de contacto del responsable.",
      "Reglas de cambios y contenido revisado por idioma."
    ],
    "exceptions": "Las preguntas que impliquen condiciones especiales o información no documentada deben pasar al asesor. Un agente no debe inventar cupos, prometer una aprobación de terceros ni improvisar condiciones de cancelación.",
    "metrics": [
      "Solicitudes con datos suficientes para cotizar.",
      "Tiempo hasta una cotización validada.",
      "Confirmaciones corregidas y recordatorios cancelados a tiempo."
    ],
    "pilot": "Elige un servicio y un idioma. Prueba solicitudes sin fecha, cambios de número de viajeros, cupos agotados y una reprogramación después de haber preparado las indicaciones.",
    "questions": [
      [
        "¿Puede integrarse con mi sistema de reservas?",
        "Primero revisamos las operaciones disponibles y sus permisos. Si solo permite lectura, el flujo puede consultar y crear una tarea de confirmación sin escribir reservas."
      ],
      [
        "¿Puede responder fuera del horario de la agencia?",
        "Puede recibir solicitudes y responder con información aprobada. Debe dejar claro cuándo una confirmación está pendiente de revisión del equipo."
      ]
    ],
    "service": "agentes-de-inteligencia-artificial",
    "article": "automatizar-reservas-turismo-peru",
    "regions": [
      "cusco",
      "lima"
    ],
    "problemHeading": "Una opción parcial se comunica como reserva completa",
    "flowHeading": "Confirmaciones que viajan entre asesor y operación",
    "exampleHeading": "Ejemplo: cambio de fecha con dos proveedores",
    "example": "Una agencia coordina dos componentes de un viaje. El primero acepta la nueva fecha y el segundo sigue pendiente. El flujo muestra ambas confirmaciones por separado, conserva la opción anterior según el procedimiento acordado y evita enviar un itinerario definitivo hasta resolver el conjunto.",
    "tools": "La ficha de producto describe condiciones; el sistema de reservas o el proveedor acredita disponibilidad; el CRM conserva la solicitud. n8n coordina pendientes y versiones. Un agente puede orientar desde documentos aprobados, sin sustituir la confirmación del operador.",
    "acceptance": [
      "Una fecha ambigua solicita aclaración.",
      "Un cambio cancela recordatorios de la versión anterior.",
      "Una respuesta tardía de proveedor no sobrescribe una revisión posterior."
    ],
    "cta": "Revisar mis confirmaciones de reserva",
    "ctaText": "Elige un servicio turístico y explica quién confirma disponibilidad y cómo se coordinan modificaciones."
  },
  {
    "slug": "servicios-profesionales",
    "name": "Servicios profesionales y B2B",
    "title": "Propuestas y agenda para servicios profesionales en Perú",
    "description": "Organiza solicitudes B2B, revisión de alcance y entrega de trabajo con CRM y n8n. Conserva propuestas aprobadas y cambios separados por proyecto.",
    "intro": "El especialista necesita recibir una solicitud que pueda evaluar. Automatizamos preparación, asignación y seguimiento para que alcance, aprobación y entrega no dependan de localizar el último mensaje.",
    "problem": "Una empresa de servicios necesita entender el alcance antes de cotizar. Responder rápido con una propuesta equivocada genera retrabajo. Un flujo útil completa la información, ordena los adjuntos y distingue las solicitudes estándar de las que requieren evaluación técnica.",
    "workflow": [
      [
        "Calificar la consulta",
        "Registra necesidad, plazo y datos mínimos de contacto. Clasifica por especialidad y solicita los datos faltantes sin descartar automáticamente una consulta poco clara."
      ],
      [
        "Preparar una propuesta",
        "Genera un borrador desde una plantilla aprobada con alcance, exclusiones y condiciones. Asigna revisión de precios y plazos antes de enviar."
      ],
      [
        "Coordinar el trabajo",
        "Cuando la propuesta se acepta, crea tareas y responsables. Conserva la versión aceptada y registra cambios de alcance como aprobaciones separadas."
      ]
    ],
    "inputs": [
      "Servicios y criterios para evaluar solicitudes.",
      "Plantillas de propuesta con versiones identificadas.",
      "Agenda y responsables por especialidad.",
      "Estados del CRM y reglas de seguimiento comercial."
    ],
    "exceptions": "Los documentos de un cliente no deben mezclarse con los de otro. Limita el acceso por proyecto y evita que un asistente consulte todas las carpetas sin comprobar identidad y permisos. Los cambios comerciales necesitan aprobación.",
    "metrics": [
      "Tiempo hasta asignar un especialista.",
      "Propuestas que requieren corrección de alcance.",
      "Oportunidades abiertas sin próxima acción."
    ],
    "pilot": "Prueba un tipo de solicitud frecuente. Conecta formulario, registro comercial y borrador de propuesta; conserva la aprobación humana. Incluye solicitudes duplicadas y cambios de requerimientos en las pruebas.",
    "questions": [
      [
        "¿La IA puede calcular el precio del servicio?",
        "Puede organizar la información para cotizar, pero el precio debe derivarse de reglas y tarifas aprobadas. Los trabajos fuera de catálogo pasan a evaluación."
      ],
      [
        "¿Se integra con nuestro CRM actual?",
        "Depende de las funciones y permisos de su API. Revisamos creación de oportunidades, campos personalizados y asignación antes de definir el alcance."
      ]
    ],
    "service": "automatizacion-con-n8n",
    "article": "automatizar-cotizaciones-seguimiento-peru",
    "regions": [
      "arequipa",
      "lima"
    ],
    "problemHeading": "El trabajo empieza con un alcance que nadie cerró",
    "flowHeading": "Del requerimiento al proyecto con versión aceptada",
    "exampleHeading": "Ejemplo: ampliación después de aceptar una propuesta",
    "example": "Un cliente acepta el alcance inicial y luego agrega una visita técnica. El flujo registra el cambio como solicitud separada, identifica su efecto en agenda y prepara revisión comercial. La versión aceptada se conserva; el nuevo trabajo no se incorpora silenciosamente a las tareas originales.",
    "tools": "El CRM mantiene la oportunidad; el repositorio autorizado guarda versiones; calendario y gestor de tareas coordinan la entrega. n8n conecta estados y Python puede transformar formatos. Los permisos por proyecto se verifican antes de recuperar documentos.",
    "acceptance": [
      "Un adjunto sin referencia no se asigna al proyecto equivocado.",
      "Un cambio de alcance vuelve a revisión antes de generar compromisos.",
      "El equipo recibe la versión aceptada y sus exclusiones."
    ],
    "cta": "Revisar cómo aprobamos propuestas",
    "ctaText": "Comparte la estructura de una propuesta y el paso donde suelen aparecer cambios o documentos contradictorios."
  },
  {
    "slug": "academias-y-formacion",
    "name": "Academias y formación",
    "title": "Convocatorias e inscripciones conectadas para academias",
    "description": "Relaciona programas, grupos e interesados en tu academia de Perú. Automatiza orientación y pendientes sin anticipar matrículas ni confirmaciones de pago.",
    "intro": "El interés de una persona puede cambiar de programa o grupo antes de inscribirse. Diseñamos un registro que conserve esa decisión y detenga seguimientos antiguos cuando se modifica la solicitud.",
    "problem": "Un interesado puede consultar varios programas, cambiar de horario o esperar una nueva convocatoria. Si solo se conserva su teléfono en una hoja, es difícil saber qué se le ofreció y qué sigue pendiente. La automatización debe relacionar contacto, programa, grupo y estado administrativo.",
    "workflow": [
      [
        "Orientar con información vigente",
        "Consulta la ficha del programa y de su convocatoria. Distingue modalidad, sede, fechas y horarios; los cambios deben actualizar la fuente antes de que el asistente vuelva a responder."
      ],
      [
        "Registrar y dar seguimiento",
        "Crea una solicitud por programa de interés y evita duplicados del mismo evento. Asigna asesor, conserva preferencias de horario y detén seguimientos cuando la persona decline continuar."
      ],
      [
        "Validar la inscripción",
        "Consulta cupos y registra preinscripción, documentación y pago como estados separados. La matrícula solo se confirma cuando el centro valida los requisitos y la operación."
      ]
    ],
    "inputs": [
      "Catálogo de programas y convocatorias con responsables de actualización.",
      "Grupos, horarios, modalidad y cupos autorizados.",
      "Estados administrativos y reglas de confirmación.",
      "Procedimiento para verificar pagos y tratar cambios de grupo."
    ],
    "exceptions": "El agente no decide admisiones ni evaluaciones académicas. Si se requieren datos de menores o documentos personales, define primero un proceso adecuado de recepción y acceso con el responsable del centro; no se necesitan para responder preguntas generales sobre horarios.",
    "metrics": [
      "Consultas con programa y convocatoria identificados.",
      "Tiempo hasta una orientación válida o atención del asesor.",
      "Preinscripciones pendientes y confirmaciones corregidas."
    ],
    "pilot": "Selecciona un programa con una convocatoria abierta. Prueba cupos agotados, horarios modificados, reenvíos y cambios de grupo. Verifica que las comunicaciones antiguas se detengan cuando se actualice la solicitud.",
    "questions": [
      [
        "¿Puede atender consultas sobre distintos programas?",
        "Sí, si cada programa tiene información separada y vigente. Si la pregunta no permite identificar el curso, el asistente debe pedir aclaración antes de responder."
      ],
      [
        "¿Necesito reemplazar mi sistema académico?",
        "No necesariamente. Revisamos los accesos del sistema actual y podemos comenzar con el registro comercial y tareas de validación, sin escribir matrículas automáticamente."
      ]
    ],
    "service": "agentes-de-inteligencia-artificial",
    "article": "automatizar-inscripciones-academias-peru",
    "regions": [
      "junin",
      "lima"
    ],
    "problemHeading": "El catálogo cambia y atención conserva el dato anterior",
    "flowHeading": "De pregunta sobre un programa a validación administrativa",
    "exampleHeading": "Ejemplo: cambio de grupo después de preinscribirse",
    "example": "Una persona elige otro horario cuando ya se prepararon indicaciones. El flujo verifica el grupo solicitado, conserva la solicitud anterior y pide validación del traslado. Solo después actualiza estado, tareas y comunicaciones, sin contabilizar dos matrículas.",
    "tools": "El catálogo mantiene fichas por convocatoria; el CRM registra preferencias; el sistema académico confirma estados administrativos. n8n coordina eventos y un agente consulta contenido vigente. Si no hay acceso de escritura al sistema, la validación queda como tarea humana.",
    "acceptance": [
      "Una convocatoria cerrada deja de ofrecerse.",
      "El último cupo solicitado por dos personas requiere una reserva consistente.",
      "Reenviar un comprobante no confirma pago ni crea otra inscripción."
    ],
    "cta": "Revisar el recorrido de una inscripción",
    "ctaText": "Indica qué sistema controla grupos y cupos y quién valida los requisitos antes de confirmar."
  }
] as const;
