"use strict";

const reportFigures = [
  {
    "id": "gantt-t3",
    "label": "GANTT-T3",
    "name": "Gantt de transformación 2027–2030",
    "group": "Cronogramas",
    "page": 42,
    "caption": "Cronograma vigente del Taller 3, con las siete iniciativas y los hitos de aprobación.",
    "file": "gantt-t3.webp"
  },
  {
    "id": "d1",
    "label": "D1",
    "name": "Gantt histórico del Taller 2",
    "group": "Cronogramas",
    "page": 110,
    "caption": "Cronograma histórico del Taller 2.",
    "file": "d1.webp"
  },
  {
    "id": "e01",
    "label": "E01",
    "name": "Aplicaciones AS-IS",
    "group": "Arquitectura del Taller 3",
    "page": 111,
    "caption": "Aplicaciones que apoyan la validación de riesgo, el estudio y la apertura.",
    "file": "e01.webp"
  },
  {
    "id": "e02",
    "label": "E02",
    "name": "Aplicaciones TO-BE",
    "group": "Arquitectura del Taller 3",
    "page": 112,
    "caption": "Componentes lógicos propuestos para validación, estudio y apertura.",
    "file": "e02.webp"
  },
  {
    "id": "e03",
    "label": "E03",
    "name": "Datos maestros AS-IS",
    "group": "Arquitectura del Taller 3",
    "page": 113,
    "caption": "Información y sistemas descritos en el caso.",
    "file": "e03.webp"
  },
  {
    "id": "e04",
    "label": "E04",
    "name": "Datos maestros TO-BE",
    "group": "Arquitectura del Taller 3",
    "page": 114,
    "caption": "Autoridades de referencia para Cliente y Servicio.",
    "file": "e04.webp"
  },
  {
    "id": "e05",
    "label": "E05",
    "name": "Infraestructura AS-IS",
    "group": "Arquitectura del Taller 3",
    "page": 115,
    "caption": "Bogotá principal y Medellín como sede secundaria.",
    "file": "e05.webp"
  },
  {
    "id": "e06",
    "label": "E06",
    "name": "Infraestructura 2027",
    "group": "Arquitectura del Taller 3",
    "page": 116,
    "caption": "Ola 1: ocho migraciones y tres bajas.",
    "file": "e06.webp"
  },
  {
    "id": "e07",
    "label": "E07",
    "name": "Infraestructura 2028",
    "group": "Arquitectura del Taller 3",
    "page": 117,
    "caption": "Ola 2: tres migraciones y diez bajas.",
    "file": "e07.webp"
  },
  {
    "id": "e08",
    "label": "E08",
    "name": "Infraestructura 2029",
    "group": "Arquitectura del Taller 3",
    "page": 118,
    "caption": "Ola 3: una migración y cuatro bajas.",
    "file": "e08.webp"
  },
  {
    "id": "e09",
    "label": "E09",
    "name": "BPMN objetivo para economía plateada",
    "group": "Arquitectura del Taller 3",
    "page": 119,
    "caption": "La ruta asistida y la digital convergen antes de formalizar.",
    "file": "e09.webp"
  },
  {
    "id": "e10",
    "label": "E10",
    "name": "BPMN de riesgo en modo sombra",
    "group": "Arquitectura del Taller 3",
    "page": 120,
    "caption": "El dictamen humano se conserva y puede contrastarse con el resultado de la IA.",
    "file": "e10.webp"
  },
  {
    "id": "1",
    "label": "1",
    "name": "Red de valor del modelo de negocio TO-BE",
    "group": "Estrategia y negocio",
    "page": 19,
    "caption": "Socios, segmentos de clientes y competencia del modelo de negocio objetivo.",
    "file": "1.webp"
  },
  {
    "id": "p25",
    "label": "O02",
    "name": "Los cuatro proyectos en los segmentos juvenil y plateado",
    "group": "Estrategia y negocio",
    "page": 25,
    "caption": "Relaciona el objetivo de originación digital y asistida con los aportes de P01 a P04 y los indicadores de comprensión, terminación y abandono.",
    "file": "p25.webp"
  },
  {
    "id": "c1",
    "label": "C1",
    "name": "Deloitte Value Map: mapa de valor",
    "group": "Estrategia y negocio",
    "page": 103,
    "caption": "",
    "file": "c1.webp"
  },
  {
    "id": "c2",
    "label": "C2",
    "name": "Deloitte Value Map: árbol de estrategia",
    "group": "Estrategia y negocio",
    "page": 104,
    "caption": "",
    "file": "c2.webp"
  },
  {
    "id": "c3",
    "label": "C3",
    "name": "Capacidades de negocio y de TI",
    "group": "Estrategia y negocio",
    "page": 105,
    "caption": "",
    "file": "c3.webp"
  },
  {
    "id": "c4",
    "label": "C4",
    "name": "Vista ArchiMate de estrategia y capacidades",
    "group": "Estrategia y negocio",
    "page": 106,
    "caption": "",
    "file": "c4.webp"
  },
  {
    "id": "c5",
    "label": "C5",
    "name": "GQM+Strategies de The Bank (vista ArchiMate)",
    "group": "Estrategia y negocio",
    "page": 107,
    "caption": "",
    "file": "c5.webp"
  },
  {
    "id": "c6",
    "label": "C6",
    "name": "Business Model Canvas TO-BE",
    "group": "Estrategia y negocio",
    "page": 108,
    "caption": "",
    "file": "c6.webp"
  },
  {
    "id": "c7",
    "label": "C7",
    "name": "Business Motivation Model TO-BE (vista ArchiMate)",
    "group": "Estrategia y negocio",
    "page": 109,
    "caption": "",
    "file": "c7.webp"
  },
  {
    "id": "a1",
    "label": "A1",
    "name": "M01 Originar clientes y productos de crédito masivo",
    "group": "Procesos AS-IS",
    "page": 48,
    "caption": "Pool The Bank. Inicio por mensaje (llegada del listado de prospectos), subproceso M01 y tres resultados: producto aceptado y activado, débito de estudio adicional entregada en oficina, negación, rechazo o ausencia de interés.",
    "file": "a1.webp"
  },
  {
    "id": "a2",
    "label": "A2",
    "name": "M01 Cadena de procesos de originación (vista resumida)",
    "group": "Procesos AS-IS",
    "page": 49,
    "caption": "Secuencia P01-P06 con salidas de negación (Riesgo), sin interés o LI negada (la TC sigue), débito de estudio adicional y oferta rechazada por el cliente.",
    "file": "a2.webp"
  },
  {
    "id": "a3",
    "label": "A3",
    "name": "M01 Colaboración de la originación entre participantes (vista detallada)",
    "group": "Procesos AS-IS",
    "page": 50,
    "caption": "Colaboración con siete participantes: tres aliados (The Supermarkets, The Car Dealers, The Property Dealers), The Bank (Riesgo, Estudio de Crédito, Comercial, Call center), Empresa de realce, Transportadora de valores y Cliente. Muestra flujos de mensaje de archivos, listados, tarjetas, formularios y llamada de activación.",
    "file": "a3.webp"
  },
  {
    "id": "a4",
    "label": "A4",
    "name": "P01 Recibir y preparar prospectos",
    "group": "Procesos AS-IS",
    "page": 51,
    "caption": "Cada aliado selecciona y remite su archivo semanal, Riesgo recibe los cuatro archivos (~250.000 prospectos) y depura. Dato del caso: 4 archivos semanales de 3 tipos de aliados.",
    "file": "a4.webp"
  },
  {
    "id": "a5",
    "label": "A5",
    "name": "P02 Validar riesgo y registrar aceptados en CRM",
    "group": "Procesos AS-IS",
    "page": 52,
    "caption": "Reglas de gasto/ingreso, consulta a Datacrédito (nueva o reutilizada hasta 90 días), listas negras si gasto < $600.000, registro en CRM y listados de aceptados y negados. Datos del caso, S1, S2, S4, S9 son supuestos del grupo.",
    "file": "a5.webp"
  },
  {
    "id": "a6",
    "label": "A6",
    "name": "P03 Estudiar crédito (preaprobar TC y evaluar LI)",
    "group": "Procesos AS-IS",
    "page": 53,
    "caption": "TC y LI se evalúan en paralelo e independientes: TC 3× gasto o 2× salario, LI 6× gasto (> $3M) o 3× salario (> $5M), en otro caso contacto, información adicional y estudio multidimensional.",
    "file": "a6.webp"
  },
  {
    "id": "a7",
    "label": "A7",
    "name": "P04 Registrar productos y solicitar realce",
    "group": "Procesos AS-IS",
    "page": 54,
    "caption": "Estudio de Crédito crea el cliente en el sistema de tarjetas (TC) o en crédito y cuentas de ahorro (LI) y envía los listados a la empresa de realce. La tarjeta se emite antes de la aceptación del cliente (dolor del caso).",
    "file": "a7.webp"
  },
  {
    "id": "a8",
    "label": "A8",
    "name": "P05 Realzar, entregar y gestionar la respuesta a la oferta",
    "group": "Procesos AS-IS",
    "page": 55,
    "caption": "Realce, contratación de la transportadora, presentación de la oferta, aceptación o rechazo, listado de rechazos (transportadora a realce a Comercial) y retorno de la débito de estudio adicional a Comercial.",
    "file": "a8.webp"
  },
  {
    "id": "a9",
    "label": "A9",
    "name": "P06 Vincular al cliente y activar el producto",
    "group": "Procesos AS-IS",
    "page": 56,
    "caption": "El cliente diligencia formulario, anexa soportes y llama al call center, la transportadora lleva los documentos a Comercial, que completa datos y digitaliza. La activación no espera la digitalización.",
    "file": "a9.webp"
  },
  {
    "id": "a10",
    "label": "A10",
    "name": "S01.1 Seleccionar y remitir prospectos [P01]",
    "group": "Procesos AS-IS",
    "page": 57,
    "caption": "Selección por aliado: The Supermarkets (programa «Tu carrera», gasto > $800.000), The Car Dealers y The Property Dealers (datos básicos e ingreso promedio). Envío del archivo a Riesgo.",
    "file": "a10.webp"
  },
  {
    "id": "a11",
    "label": "A11",
    "name": "S01.2 Recibir los archivos y depurar prospectos [P01]",
    "group": "Procesos AS-IS",
    "page": 58,
    "caption": "Recepción de los cuatro archivos, preparación del lote y depuración (supuesto S7: retirar registros incompletos o mal formados).",
    "file": "a11.webp"
  },
  {
    "id": "a12",
    "label": "A12",
    "name": "S02.1 Aplicar reglas de riesgo al prospecto [P02]",
    "group": "Procesos AS-IS",
    "page": 59,
    "caption": "Regla por origen: gasto > $1M acepta, $600k-$1M Datacrédito, < $600k Datacrédito y listas, ingreso > $2M (concesionario/constructora) acepta. Supuestos S1 y S9.",
    "file": "a12.webp"
  },
  {
    "id": "a13",
    "label": "A13",
    "name": "S02.2 Obtener calificación de Datacrédito (nueva o reutilizada) [P02]",
    "group": "Procesos AS-IS",
    "page": 60,
    "caption": "Búsqueda de resultado previo, si tiene 90 días o menos se reutiliza, si no, consulta nueva a Datacrédito y almacenamiento con fecha. Dato del caso: reutilización por costo por transacción.",
    "file": "a13.webp"
  },
  {
    "id": "a14",
    "label": "A14",
    "name": "S02.3 Calificar al prospecto (listas negras si gasto < $600k) [P02]",
    "group": "Procesos AS-IS",
    "page": 61,
    "caption": "Validación contra listas negras internas solo si gasto < $600.000 y resolución de la calificación final (supuesto S8: correcta = sin reportes negativos).",
    "file": "a14.webp"
  },
  {
    "id": "a15",
    "label": "A15",
    "name": "S02.4 Registrar resultado, crear aceptados en CRM y generar listados [P02]",
    "group": "Procesos AS-IS",
    "page": 62,
    "caption": "Registro de la clasificación, creación de aceptados en CRM y generación de listados de aceptados y negados por lote (supuesto S4: los negados se archivan en Riesgo).",
    "file": "a15.webp"
  },
  {
    "id": "a16",
    "label": "A16",
    "name": "S03.1 Preaprobar TC (3× gasto o 2× salario) [P03]",
    "group": "Procesos AS-IS",
    "page": 63,
    "caption": "Base de cálculo según origen: Supermarkets 3× gasto mensual en mercado, concesionario o constructora 2× salario reportado. Registro de la preaprobación de TC.",
    "file": "a16.webp"
  },
  {
    "id": "a17",
    "label": "A17",
    "name": "S03.2 Evaluar preaprobación de LI [P03]",
    "group": "Procesos AS-IS",
    "page": 64,
    "caption": "Umbrales estrictos: gasto > $3M a 6× gasto, salario > $5M a 3× salario, en otro caso pasa a S03.3.",
    "file": "a17.webp"
  },
  {
    "id": "a18",
    "label": "A18",
    "name": "S03.3 Contactar al cliente y solicitar información adicional [P03]",
    "group": "Procesos AS-IS",
    "page": 65,
    "caption": "Contacto al cliente, interés, solicitud de certificado de ingresos y formulario laboral, y recepción de la información para el estudio.",
    "file": "a18.webp"
  },
  {
    "id": "a19",
    "label": "A19",
    "name": "S03.4 Realizar estudio multidimensional y decidir [P03]",
    "group": "Procesos AS-IS",
    "page": 66,
    "caption": "Estudio multidimensional (ingresos, edad, residencia, estado civil, propiedades), decisión, monto aprobado o notificación de decisión negativa.",
    "file": "a19.webp"
  },
  {
    "id": "a20",
    "label": "A20",
    "name": "S04.1 Crear cliente en el sistema de tarjetas y solicitar realce [P04]",
    "group": "Procesos AS-IS",
    "page": 67,
    "caption": "Creación del cliente en el sistema de tarjetas, listado de TC preaprobadas y envío a la empresa de realce.",
    "file": "a20.webp"
  },
  {
    "id": "a21",
    "label": "A21",
    "name": "S04.2 Crear cliente en crédito y cuenta de ahorros y solicitar realce de la débito [P04]",
    "group": "Procesos AS-IS",
    "page": 68,
    "caption": "Creación del cliente en crédito y cuenta de ahorros, listado de débitos con su origen (preaprobación o estudio adicional) y envío a realce.",
    "file": "a21.webp"
  },
  {
    "id": "a22",
    "label": "A22",
    "name": "S05.1 Realzar tarjetas [P05]",
    "group": "Procesos AS-IS",
    "page": 69,
    "caption": "Emisión e impresión, según el origen, contratación de la transportadora (preaprobación) o retorno de la débito a Comercial (estudio adicional).",
    "file": "a22.webp"
  },
  {
    "id": "a23",
    "label": "A23",
    "name": "S05.2 Contactar al cliente y gestionar la aceptación [P05]",
    "group": "Procesos AS-IS",
    "page": 70,
    "caption": "La transportadora contacta al cliente y presenta el producto, el cliente acepta (entrega de la tarjeta física) o rechaza (pasa a S05.3).",
    "file": "a23.webp"
  },
  {
    "id": "a24",
    "label": "A24",
    "name": "S05.3 Gestionar rechazos de la oferta [P05]",
    "group": "Procesos AS-IS",
    "page": 71,
    "caption": "Listado de rechazos: transportadora a empresa de realce a Comercial, que marca las ofertas rechazadas para trazabilidad.",
    "file": "a24.webp"
  },
  {
    "id": "a25",
    "label": "A25",
    "name": "S05.4 Retornar la débito, avisar al cliente y entregarla en oficina [P05]",
    "group": "Procesos AS-IS",
    "page": 72,
    "caption": "Realce retorna la débito de estudio adicional a Comercial, que avisa al cliente, el cliente la recoge en oficina (supuesto S5: se activa al recogerla).",
    "file": "a25.webp"
  },
  {
    "id": "a26",
    "label": "A26",
    "name": "S06.1 Diligenciar y entregar la vinculación [P06]",
    "group": "Procesos AS-IS",
    "page": 73,
    "caption": "Cliente diligencia formulario de vinculación, anexa soportes y los entrega a la transportadora, que los envía directamente a Comercial.",
    "file": "a26.webp"
  },
  {
    "id": "a27",
    "label": "A27",
    "name": "S06.2 Completar datos del cliente y digitalizar soportes [P06]",
    "group": "Procesos AS-IS",
    "page": 74,
    "caption": "Comercial recibe formulario y soportes, completa datos del cliente, digitaliza y guarda en la plataforma de gestión documental.",
    "file": "a27.webp"
  },
  {
    "id": "a28",
    "label": "A28",
    "name": "S06.3 Llamar y activar la tarjeta y el producto [P06]",
    "group": "Procesos AS-IS",
    "page": 75,
    "caption": "El cliente llama al call center para solicitar la activación, el call center activa la tarjeta y el producto.",
    "file": "a28.webp"
  },
  {
    "id": "b1",
    "label": "B1",
    "name": "TO_M01 Originar clientes y productos de crédito masivo",
    "group": "Procesos TO-BE del Taller 2",
    "page": 76,
    "caption": "Pool The Bank, carril Gestión de originación. Inicia con la necesidad de crédito masivo y termina con el resultado de originación por producto.",
    "file": "b1.webp"
  },
  {
    "id": "b2",
    "label": "B2",
    "name": "TO_M01 Cadena de procesos de originación digital",
    "group": "Procesos TO-BE del Taller 2",
    "page": 77,
    "caption": "Secuencia TO_P01-TO_P06 con decisiones de identidad verificada, riesgo habilitado, productos aceptados y apertura consistente, todo recorrido cierra con estado por producto y pendientes (TO_S06.3).",
    "file": "b2.webp"
  },
  {
    "id": "b3",
    "label": "B3",
    "name": "TO_P01 Captar solicitud y verificar identidad",
    "group": "Procesos TO-BE del Taller 2",
    "page": 78,
    "caption": "TO_S01.1 captar solicitud y segmentar, decisión de solicitud habilitada, TO_S01.2 verificar datos e identidad.",
    "file": "b3.webp"
  },
  {
    "id": "b4",
    "label": "B4",
    "name": "TO_P02 Evaluar riesgo integral",
    "group": "Procesos TO-BE del Taller 2",
    "page": 79,
    "caption": "TO_S02.1 información crediticia vigente y TO_S02.2 screening LA/FT, si están habilitados, TO_S02.3 scoring, TO_S02.4 consolida y publica la decisión.",
    "file": "b4.webp"
  },
  {
    "id": "b5",
    "label": "B5",
    "name": "TO_P03 Estudiar crédito y gestionar oferta",
    "group": "Procesos TO-BE del Taller 2",
    "page": 80,
    "caption": "Estudio de capacidad de pago de TC y LI, resolución de información adicional y excepciones, y oferta digital con aceptación o rechazo por producto.",
    "file": "b5.webp"
  },
  {
    "id": "b6",
    "label": "B6",
    "name": "TO_P04 Formalizar vinculación y abrir productos",
    "group": "Procesos TO-BE del Taller 2",
    "page": 81,
    "caption": "Formalizar vinculación electrónica, si está formalizada, abrir cuenta y solo los productos aceptados, si no, formalización pendiente.",
    "file": "b6.webp"
  },
  {
    "id": "b7",
    "label": "B7",
    "name": "TO_P05 Emitir y disponer instrumentos",
    "group": "Procesos TO-BE del Taller 2",
    "page": 82,
    "caption": "Tarjeta virtual, instrumentos físicos necesarios, entrega física con excepciones y conciliación de disponibilidad por producto.",
    "file": "b7.webp"
  },
  {
    "id": "b8",
    "label": "B8",
    "name": "TO_P06 Activar, desembolsar y cerrar originación",
    "group": "Procesos TO-BE del Taller 2",
    "page": 83,
    "caption": "TO_S06.1 activar TC y TO_S06.2 habilitar LI y desembolsar, independientes, el cierre TO_S06.3 se representa en el N2.",
    "file": "b8.webp"
  },
  {
    "id": "b9",
    "label": "B9",
    "name": "TO_S01.1 Captar solicitud digital y segmentar [TO_P01]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 84,
    "caption": "Cliente (solicitud digital) y aliados (referencia autorizada) a recibir, crear solicitud y correlacionar identidad, autorización y datos, ¿origen y autorización válidos?, segmento y campaña juvenil habilitada o no aplica. Soporta PL05/R04/R10.",
    "file": "b9.webp"
  },
  {
    "id": "b10",
    "label": "B10",
    "name": "TO_S01.2 Verificar datos e identidad [TO_P01]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 85,
    "caption": "Captura en origen, validación de integridad y duplicados, biometría y OTP con el cliente (timer de plazo), verificación asistida y evidencia de verificación. Soporta MN01, R05 y R07.",
    "file": "b10.webp"
  },
  {
    "id": "b11",
    "label": "B11",
    "name": "TO_S02.1 Obtener información crediticia vigente [TO_P02]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 86,
    "caption": "Reutilización solo si la política lo permite, consulta por API a Datacrédito (propuesta), timer, vía asistida y registro de fecha y procedencia. Sustituye la reutilización fija de 90 días (R02).",
    "file": "b11.webp"
  },
  {
    "id": "b12",
    "label": "B12",
    "name": "TO_S02.2 Realizar screening LA/FT en línea [TO_P02]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 87,
    "caption": "Screening LA/FT en línea contra listas internas y fuentes aprobadas, análisis de alertas y registro de bloqueo o pendiente. Soporta MN03.",
    "file": "b12.webp"
  },
  {
    "id": "b13",
    "label": "B13",
    "name": "TO_S02.3 Evaluar riesgo integrado con scoring [TO_P02]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 88,
    "caption": "Datos mínimos, scoring ML validado o reglas aprobadas, integración de calificación y controles, dictamen automático o evaluación especializada. Soporta MN02, PL01 y R01.",
    "file": "b13.webp"
  },
  {
    "id": "b14",
    "label": "B14",
    "name": "TO_S02.4 Consolidar y publicar decisión de riesgo [TO_P02]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 89,
    "caption": "Consolidación de evidencias, estado habilitado/negado/pendiente, actualización en CRM y publicación correlacionada a Crédito (R03).",
    "file": "b14.webp"
  },
  {
    "id": "b15",
    "label": "B15",
    "name": "TO_S03.1 Estudiar capacidad de pago para TC [TO_P03]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 90,
    "caption": "Ingresos, obligaciones y soportes, capacidad de pago y riesgo, monto y condiciones, resolución automática o estudio especializado de TC.",
    "file": "b15.webp"
  },
  {
    "id": "b16",
    "label": "B16",
    "name": "TO_S03.2 Estudiar capacidad de pago para LI [TO_P03]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 91,
    "caption": "Misma lógica para LI, independiente de la TC, reemplaza los multiplicadores 6× gasto y 3× salario del AS-IS.",
    "file": "b16.webp"
  },
  {
    "id": "b17",
    "label": "B17",
    "name": "TO_S03.3 Resolver información adicional y excepciones [TO_P03]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 92,
    "caption": "Solicitud y recepción de soportes por canal digital (timer), validación de autenticidad, estudio multidimensional o excepción. Elimina el traslado físico.",
    "file": "b17.webp"
  },
  {
    "id": "b18",
    "label": "B18",
    "name": "TO_S03.4 Presentar oferta digital y registrar aceptación [TO_P03]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 93,
    "caption": "Oferta y condiciones por producto, gateway de eventos (respuesta o vencimiento), registro de aceptación y evidencia, ofertas vencidas o rechazadas.",
    "file": "b18.webp"
  },
  {
    "id": "b19",
    "label": "B19",
    "name": "TO_S04.1 Formalizar vinculación electrónica [TO_P04]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 94,
    "caption": "Prellenado con datos verificados, presentación de términos, aceptación electrónica (timer), validación y conservación digital, resolución asistida.",
    "file": "b19.webp"
  },
  {
    "id": "b20",
    "label": "B20",
    "name": "TO_S04.2 Abrir cuenta y productos aceptados [TO_P04]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 95,
    "caption": "Verificación de prerrequisitos, clave idempotente, cliente en CRM, cuenta requerida, registro solo de productos aceptados y conciliación de apertura parcial.",
    "file": "b20.webp"
  },
  {
    "id": "b21",
    "label": "B21",
    "name": "TO_S05.1 Emitir y disponer tarjeta virtual [TO_P05]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 96,
    "caption": "TC aceptada y abierta a emisión virtual inactiva y disposición en app con acceso protegido, o alternativa física/pendiente.",
    "file": "b21.webp"
  },
  {
    "id": "b22",
    "label": "B22",
    "name": "TO_S05.2 Solicitar instrumentos físicos necesarios [TO_P05]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 97,
    "caption": "Determinar instrumentos y preferencia, pedido único a realce, confirmación (timer) y gestión de orden fallida.",
    "file": "b22.webp"
  },
  {
    "id": "b23",
    "label": "B23",
    "name": "TO_S05.3 Gestionar entrega física y excepciones [TO_P05]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 98,
    "caption": "Seguimiento asíncrono de eventos de emisión y entrega de realce y transportadora, un rechazo de entrega no cancela el producto.",
    "file": "b23.webp"
  },
  {
    "id": "b24",
    "label": "B24",
    "name": "TO_S05.4 Conciliar disponibilidad por producto [TO_P05]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 99,
    "caption": "Consolidar estados por producto e instrumento, conciliar, determinar disponibilidad y publicar en app/CRM.",
    "file": "b24.webp"
  },
  {
    "id": "b25",
    "label": "B25",
    "name": "TO_S06.1 Activar TC desde app o vía asistida [TO_P06]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 100,
    "caption": "Activación de la TC desde la app con biometría/OTP o vía asistida, activación idempotente y conciliación de activación fallida.",
    "file": "b25.webp"
  },
  {
    "id": "b26",
    "label": "B26",
    "name": "TO_S06.2 Habilitar LI y gestionar desembolso [TO_P06]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 101,
    "caption": "Confirmación de monto y cuenta con el cliente, validación de autorización y destino, desembolso idempotente y conciliación sin duplicar.",
    "file": "b26.webp"
  },
  {
    "id": "b27",
    "label": "B27",
    "name": "TO_S06.3 Cerrar originación, notificar y medir [TO_P06]",
    "group": "Procesos TO-BE del Taller 2",
    "page": 102,
    "caption": "Consolidar resultado, asignar responsable y siguiente acción si hay pendientes, registrar tiempos, costo y trabajo humano (MN01, MN05) y notificar al cliente.",
    "file": "b27.webp"
  }
];
