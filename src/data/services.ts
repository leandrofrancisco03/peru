export const services = [
  {
    "slug": "automatizacion-con-n8n",
    "number": "01",
    "label": "Automatización de procesos",
    "title": "Flujos n8n y Python para operaciones en Perú",
    "description": "Automatiza solicitudes, reportes y tareas administrativas con n8n y Python. Diseñamos recepción, validación y recuperación para tu operación en Perú.",
    "intro": "Una solicitud recibida debe convertirse en una tarea terminada. Conectamos formularios, CRM, archivos y sistemas para que el trabajo avance con responsables, estados y una ruta de recuperación cuando algo falla.",
    "cases": [
      [
        "Captación hasta asignación",
        "Una entrada web se valida, se vincula al contacto y deja una oportunidad con responsable. Los reenvíos se reconocen sin borrar consultas legítimas de la misma persona."
      ],
      [
        "Cierre comercial entre sedes",
        "La extracción conserva origen y fecha de corte, comprueba monedas y publica el reporte con cobertura explícita. Una sede ausente genera una revisión en lugar de un total silenciosamente incompleto."
      ],
      [
        "Preparación administrativa",
        "Los datos de solicitudes o archivos se transforman a un formato revisable. Los campos ambiguos quedan marcados antes de escribir en el sistema de gestión."
      ]
    ],
    "deliverables": [
      "Diagrama con entradas, salidas y condiciones de aceptación.",
      "Flujos y transformaciones incluidos en el alcance, con credenciales separadas del contenido.",
      "Registro de estados, reintentos limitados y procedimiento ante resultados inciertos.",
      "Pruebas de operación normal y fallos, más instrucciones para el responsable."
    ],
    "requirements": "Prepara una muestra anonimizada, las herramientas de origen y destino, el volumen habitual y una excepción frecuente. Revisaremos operaciones disponibles en las APIs y quién mantendrá cada fuente.",
    "cost": "Presupuestamos conexiones, transformaciones y recuperación, además del alojamiento y mantenimiento acordados. La cantidad de nodos por sí sola no representa el trabajo: una escritura sensible puede requerir más control que varias consultas.",
    "faq": [
      [
        "¿Qué aporta Python junto a n8n?",
        "Permite resolver transformaciones específicas cuando los pasos disponibles no bastan. Se incluye solo si simplifica el proceso y queda documentado para su mantenimiento."
      ],
      [
        "¿Qué pasa con las solicitudes mientras falla una API?",
        "El diseño debe conservar su estado y definir una recuperación. Según los accesos del destino, se consulta la referencia antes de repetir una escritura o se solicita revisión humana."
      ]
    ],
    "posts": [
      "automatizar-leads-n8n-crm",
      "automatizar-reportes-ventas-peru",
      "automatizar-cotizaciones-seguimiento-peru",
      "orquestacion-n8n-vs-zapier",
      "cuanto-cuesta-automatizar-procesos-peru"
    ],
    "source": "https://docs.n8n.io/",
    "sourceName": "Documentación oficial de n8n",
    "caseHeading": "Tres recorridos que dejan de depender de copiar datos",
    "deliveryHeading": "Del mapa de trabajo al flujo operable",
    "cta": "Diseñar mi primer flujo n8n",
    "ctaTitle": "Empecemos por una entrada y un resultado",
    "ctaText": "Describe qué inicia la tarea, dónde termina y qué excepción obliga hoy a rehacerla. Podemos delimitar un piloto verificable.",
    "fit": "Conviene cuando una tarea se repite, tiene reglas reconocibles y existe una persona que pueda validar el resultado. Si cada solicitud exige negociar condiciones nuevas, automatizamos preparación y registro, conservando la decisión del especialista.",
    "example": "Ejemplo propuesto: un proveedor recibe una solicitud, n8n verifica campos y consulta el catálogo. Python transforma un archivo cuando el formato lo requiere. El CRM guarda una oportunidad y una persona aprueba el borrador de cotización. Si el CRM no confirma, el evento queda pendiente de conciliación.",
    "architecture": "n8n coordina eventos, ramas y llamadas a APIs. Python se reserva para transformaciones que lo justifican. Un registro persistente conserva referencia, etapa y resultado; las alertas identifican lo que debe revisar el responsable. No se incorpora IA para sustituir una regla que ya puede expresarse con claridad."
  },
  {
    "slug": "agentes-de-inteligencia-artificial",
    "number": "02",
    "label": "Agentes de IA",
    "title": "Agentes de IA para atención y equipos en Perú",
    "description": "Implementa agentes que clasifican consultas, buscan información y preparan acciones con n8n, CRM y transferencia al equipo en Perú.",
    "intro": "Convierte preguntas abiertas en consultas y tareas que tu equipo pueda resolver. Diseñamos agentes para orientación al cliente o asistencia interna, con fuentes delimitadas y permisos que se comprueban antes de actuar.",
    "cases": [
      [
        "Recepción que entrega contexto",
        "Clasificar una consulta y reunir lo necesario antes de transferirla. El asesor recibe motivo, información comprobada y pregunta pendiente."
      ],
      [
        "Consulta interna por Telegram",
        "Buscar oportunidades o pendientes del usuario autorizado. El permiso depende de su identidad registrada, no de que el modelo acepte una instrucción."
      ],
      [
        "Preparación de acciones",
        "Redactar una tarea o borrador para aprobación. Modificar importes, condiciones o estados sensibles exige controles específicos fuera del modelo."
      ]
    ],
    "deliverables": [
      "Catálogo de intenciones permitidas y rutas de derivación.",
      "Fuentes de conocimiento con responsables de actualización.",
      "Herramientas con validación de argumentos, identidad y ámbito de acceso.",
      "Conjunto de conversaciones de evaluación, límites de uso y procedimiento de pausa."
    ],
    "requirements": "Necesitamos respuestas correctas de referencia, documentos que puedan usarse y ejemplos de consultas difíciles. Antes de conectar datos de clientes, se definen identidad, permisos y separación entre usuarios.",
    "cost": "Se evalúan preparación de fuentes, integraciones y pruebas, junto con consumo de modelos y supervisión. La medida útil es el costo de un caso resuelto correctamente; contar mensajes sin revisar calidad oculta trabajo de corrección.",
    "faq": [
      [
        "¿Puede aprobar descuentos o comprometer fechas?",
        "Solo podría ejecutar acciones expresamente permitidas y validadas por reglas del negocio. El modelo no tiene autoridad para inventar condiciones o saltarse una aprobación."
      ],
      [
        "¿Cómo sabemos si está respondiendo bien?",
        "Se compara una muestra de conversaciones con respuestas y salidas esperadas. Se revisan exactitud, derivación, acceso y resultado operativo antes de ampliar el uso."
      ]
    ],
    "posts": [
      "agentes-ia-atencion-cliente",
      "automatizar-reservas-turismo-peru",
      "agente-ia-telegram-n8n",
      "whatsapp-api-oficial-coexistencia-peru"
    ],
    "source": "https://docs.n8n.io/advanced-ai/",
    "sourceName": "Documentación de IA en n8n",
    "caseHeading": "Un agente distinto para cada responsabilidad",
    "deliveryHeading": "Lo que debe quedar definido antes de activarlo",
    "cta": "Delimitar mi agente de IA",
    "ctaTitle": "Elige una pregunta que tu equipo responda cada día",
    "ctaText": "Revisaremos la fuente correcta, el usuario autorizado y qué debe suceder si el agente no puede resolverla.",
    "fit": "Es adecuado cuando las personas describen una necesidad con lenguaje variable y existen fuentes mantenidas por el negocio. Si faltan reglas o documentos vigentes, empezamos ordenando esa información. Para menús y estados simples puede bastar un bot sin IA.",
    "example": "Ejemplo propuesto: una empresa de servicios recibe consultas por especialidad. El agente identifica el motivo, pide el dato que falta y consulta la ficha aprobada. Si la persona solicita una excepción de precio, prepara un resumen y asigna al asesor, pausando la respuesta automática.",
    "architecture": "El canal entrega el mensaje; n8n conserva el estado; el modelo interpreta dentro del alcance; una API aplica permisos y devuelve datos autorizados. El CRM guarda la tarea y la persona responsable. El prompt orienta la respuesta, pero no sustituye los controles de acceso en herramientas."
  },
  {
    "slug": "integraciones-y-apis",
    "number": "03",
    "label": "Integraciones y sistemas",
    "title": "Integración de CRM, APIs y sistemas de gestión",
    "description": "Conecta tu web, CRM y sistemas en Perú con contratos de datos, referencias únicas y conciliación. Evalúa APIs antes de comprometer una integración.",
    "intro": "Cuando ventas y operaciones muestran estados diferentes, necesitas decidir qué sistema manda sobre cada dato. Construimos conexiones que conservan esa responsabilidad y permiten investigar qué se recibió y qué se guardó.",
    "cases": [
      [
        "Web hacia CRM",
        "Validación del envío, recepción recuperable y asignación. El mensaje que ve el visitante corresponde al estado realmente alcanzado."
      ],
      [
        "Venta hacia operaciones",
        "Traspaso de una versión aprobada a pedido o tarea, con identificadores relacionados y conciliación de estados."
      ],
      [
        "Panel de excepciones",
        "Una vista acotada para revisar datos ambiguos o aprobar solicitudes cuando el sistema actual no ofrece ese recorrido."
      ]
    ],
    "deliverables": [
      "Mapa de campos, propietario de cada dato y reglas de transformación.",
      "Conectores con permisos mínimos y configuración documentada.",
      "Referencias únicas y tratamiento de errores o resultados inciertos.",
      "Guion de conciliación y revisión de cambios del proveedor."
    ],
    "requirements": "Comparte nombres de aplicaciones, documentación disponible y la operación que debe permitir cada una. No basta saber que una plataforma tiene API: necesitamos comprobar los métodos y permisos concretos.",
    "cost": "El alcance depende de dirección del intercambio, consistencia de datos y posibilidades de recuperación. Las APIs sin referencias externas o con cambios manuales frecuentes requieren evaluar más escenarios que una lectura programada.",
    "faq": [
      [
        "¿Una conexión bidireccional siempre es mejor?",
        "No. Si ambos sistemas modifican el mismo campo, necesitas reglas de conflicto. En muchos procesos conviene asignar un propietario por dato y sincronizar en una sola dirección."
      ],
      [
        "¿Qué pasa si no hay API?",
        "Se revisan archivos o exportaciones autorizadas y un procedimiento de actualización. Si no existe un acceso fiable, se comunica la limitación antes de comprometer el resultado."
      ]
    ],
    "posts": [
      "automatizar-leads-n8n-crm",
      "desarrollo-web-moderno-nextjs"
    ],
    "source": "https://developer.mozilla.org/es/docs/Web/HTTP",
    "sourceName": "Referencia de HTTP de MDN",
    "caseHeading": "Conexiones con una fuente de verdad definida",
    "deliveryHeading": "Una integración que pueda mantenerse",
    "cta": "Revisar compatibilidad de mis sistemas",
    "ctaTitle": "Comprobemos la operación que necesita cada API",
    "ctaText": "Indica las aplicaciones y qué información debe viajar entre ellas. Revisaremos lectura, escritura, identificación y recuperación.",
    "fit": "Conviene si existen fuentes separadas con datos que deben mantenerse coherentes. Antes de prometer sincronización, verificamos autenticación, campos, límites y operaciones disponibles. Si falta una API, evaluamos exportaciones autorizadas o un paso manual controlado.",
    "example": "Ejemplo propuesto: ventas aprueba una oportunidad y solicita crear una orden. El CRM conserva la relación comercial; el sistema de gestión asigna el identificador de orden y controla su estado. La integración devuelve esa referencia al CRM para que el asesor consulte avances sin duplicar registros.",
    "architecture": "Definimos contratos de datos y dirección de actualización por campo. Los webhooks reciben cambios cuando están disponibles; una consulta periódica puede conciliar lo pendiente. Una referencia externa permite localizar el efecto en destino tras una interrupción."
  },
  {
    "slug": "whatsapp-api-oficial",
    "number": "04",
    "label": "WhatsApp para empresas",
    "title": "WhatsApp oficial conectado a ventas y atención",
    "description": "Integra WhatsApp Business Platform con n8n y CRM en Perú. Revisa elegibilidad, asignación de asesores, eventos y una puesta en marcha controlada.",
    "intro": "Haz que las consultas de WhatsApp tengan responsable y próxima acción. Preparamos la integración oficial con tus sistemas y el recorrido del asesor, desde la entrada del mensaje hasta el registro de la oportunidad.",
    "cases": [
      [
        "Responsable desde la primera consulta",
        "Asignar por reglas comerciales y conservar el motivo. Las conversaciones sin aceptar quedan visibles para revisión."
      ],
      [
        "Atención compartida con pausa",
        "Coordinar agente y asesor mediante estados. La intervención humana detiene las respuestas automáticas del caso correspondiente."
      ],
      [
        "Seguimiento según la oportunidad",
        "Preparar tareas y comunicaciones desde el estado vigente, respetando preferencias y las reglas aplicables del canal."
      ]
    ],
    "deliverables": [
      "Inventario del canal y verificación de opciones de alta.",
      "Recepción de eventos y relación con registros comerciales.",
      "Procedimiento de transferencia, pausa y contingencia operativa.",
      "Pruebas de mensajes, estados, duplicados y caída de la conexión al CRM."
    ],
    "requirements": "Necesitamos identificar administradores, herramientas conectadas y recorrido actual de atención. Las autorizaciones se gestionan por mecanismos acordados; no pedimos contraseñas en una consulta inicial.",
    "cost": "Separamos implementación de bandeja o proveedor, mensajería aplicable, infraestructura y consumo de IA si se incorpora. Las condiciones se verifican al cotizar; no se garantiza aprobación de activos ni plantillas.",
    "faq": [
      [
        "¿Pueden conectar el CRM sin añadir IA?",
        "Sí. Registrar, asignar y dar visibilidad a pendientes puede ser el primer alcance. La interpretación con IA se incorpora cuando existe una necesidad y fuentes adecuadas."
      ],
      [
        "¿Qué hay que comprobar sobre coexistencia?",
        "Se revisa si el flujo oficial disponible permite incorporar la cuenta y el número, y qué limitaciones operativas tiene. La evaluación debe realizarse antes de cambiar la atención existente."
      ]
    ],
    "posts": [
      "whatsapp-api-oficial-coexistencia-peru",
      "automatizar-ventas-whatsapp-peru",
      "agentes-ia-atencion-cliente"
    ],
    "source": "https://developers.facebook.com/docs/whatsapp/",
    "sourceName": "Documentación oficial de WhatsApp",
    "caseHeading": "Qué debe continuar después de recibir el mensaje",
    "deliveryHeading": "Preparación del canal y pruebas de atención",
    "cta": "Evaluar mi canal de WhatsApp",
    "ctaTitle": "Antes del bot, revisemos cómo atiende tu equipo",
    "ctaText": "Cuéntanos qué aplicación usas, quién administra el número y dónde deberían registrarse las solicitudes.",
    "fit": "Tiene sentido cuando necesitas relacionar conversaciones con CRM, tareas o pedidos. Revisamos cuenta, número, accesos y modalidad de incorporación. La posible coexistencia con la aplicación Business se comprueba para el caso concreto; no se ofrece como garantía universal.",
    "example": "Ejemplo propuesto: llega una consulta de producto, se identifica el motivo y se crea una oportunidad. Al tomar el caso, el asesor pausa la automatización. El stock se consulta en el sistema autorizado y el pedido solo se confirma cuando operaciones registra su aceptación.",
    "architecture": "La plataforma oficial entrega eventos a una integración validada; n8n relaciona conversación y contacto, evita reenvíos repetidos y actualiza el CRM. La bandeja y el procedimiento de transferencia deben acordarse para que una persona pueda retomar el caso."
  }
] as const;
