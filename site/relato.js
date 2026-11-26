"use strict";

const shapes = {
  file: '<path d="M7 3h7l4 4v14H7zM14 3v5h4M10 12h5m-5 4h5"/>',
  files: '<path d="M5 7H3v14h13v-2M8 3h9l4 4v11H8zM17 3v5h4M11 11h7m-7 3h7"/>',
  shield: '<path d="m12 3 7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="m9 12 2 2 4-5"/>',
  person: '<circle cx="12" cy="7" r="3"/><path d="M5 21v-3a7 7 0 0 1 14 0v3"/>',
  switch: '<path d="M4 7h15l-3-3m3 3-3 3M20 17H5l3-3m-3 3 3 3"/>',
  check: '<path d="M7 3h10l4 4v10l-4 4H7l-4-4V7z"/><path d="m8 12 3 3 5-6"/>',
  card: '<rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M3 10h18M6 15h4"/>',
  bank: '<path d="m3 9 9-5 9 5H3zm1 11h16M6 11v6m6-6v6m6-6v6"/>',
  cloud: '<path d="M6 18h12a4 4 0 0 0 0-8h-1a5 5 0 0 0-9-2 5 5 0 0 0-2 10z"/>',
  server: '<rect x="4" y="4" width="16" height="7" rx="1"/><rect x="4" y="13" width="16" height="7" rx="1"/><path d="M7 7.5h1m-1 9h1"/>',
  database: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v14c0 4 14 4 14 0V5M5 12c0 4 14 4 14 0"/>',
  contacts: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="9" r="2"/><path d="M8 16a4 4 0 0 1 8 0"/>',
  folder: '<path d="M3 8V5h7l2 3h9v12H3zM3 11h18"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3"/>'
};

const glyph = key => `<svg class="glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[key]}</svg>`;
const cardProp = () => `<div class="credit-prop" aria-hidden="true"><span>The Bank</span><i></i><strong>TARJETA DE CRÉDITO</strong><small>•••• &nbsp; •••• &nbsp; ••••</small></div>`;

const businessTraces = {
  emision: {
    label: "Emisión sin aceptación",
    goal: "Reducir el costo de emisión",
    change: "Registrar la aceptación antes de ordenar la apertura y emitir la tarjeta.",
    proposed: "Registro de aceptación en el expediente",
    adapted: "Integración con los sistemas de apertura y emisión",
    retained: "Sistemas existentes de tarjeta y crédito",
    evidence: "Emisiones sin aceptación × costo unitario",
    projects: ["p02","p03"],
    active: ["gate","product","issue"]
  },
  riesgo: {
    label: "Pérdidas crediticias",
    goal: "Reducir las pérdidas crediticias",
    change: "Consultar información vigente y conservar un dictamen que Riesgos pueda reconstruir.",
    proposed: "Orquestación y motor lógico de decisión",
    adapted: "Consulta al buró según la política de vigencia",
    retained: "Datacrédito como fuente externa de calificación",
    evidence: "Pérdida observada por cohorte y producto",
    projects: ["p01","p02"],
    active: ["case","risk","bureau","data"]
  },
  acceso: {
    label: "Barreras de acceso",
    goal: "Ampliar el acceso al crédito",
    change: "Empezar por autoservicio y retomar el mismo expediente con un asesor.",
    proposed: "Canal asistido integrado al expediente",
    adapted: "Intercambio con gestión documental y apertura",
    retained: "Sistemas existentes de producto",
    evidence: "Comprensión y finalización por canal y cohorte",
    projects: ["p03"],
    active: ["customer","channel","case","docs"]
  }
};

function traceDetails(trace) {
  return `<div class="trace-change"><small>Objetivo de negocio</small><strong>${trace.goal}</strong><p>${trace.change}</p></div>
  <div class="trace-system">
    <div><span class="change-badge proposed">Propuesto</span><span>${trace.proposed}</span></div>
    <div><span class="change-badge adapted">A adaptar</span><span>${trace.adapted}</span></div>
    <div><span class="change-badge retained">Se conserva</span><span>${trace.retained}</span></div>
  </div>
  <div class="trace-measure"><small>Cómo se comprueba</small><strong>${trace.evidence}</strong><div class="trace-projects">${trace.projects.map(id => `<a href="#proyecto-${id}" aria-label="Hoja de ruta de ${projectNames[id]}">${id.toUpperCase()} ↗</a>`).join("")}</div></div>`;
}

const waveDetails = {
  2027: {count:"8 migraciones · 3 bajas", workload:"Desarrollo de CRM y Core, más los ambientes de calidad de mayor ahorro.", control:"Medir latencia p95 y probar restauración y reversión.", figure:"e06"},
  2028: {count:"3 migraciones · 10 bajas", workload:"Migrar calidad restante y retirar ocho servidores dedicados de Core.", control:"Verificar licencias, seguridad, capacidad y reducción efectiva del gasto.", figure:"e07"},
  2029: {count:"1 migración · 4 bajas", workload:"Migrar el CRM productivo elegible y consolidar cargas físicas locales.", control:"Conciliar y comprobar capacidad y retorno a local antes del retiro.", figure:"e08"}
};

const waveSummary = wave => `<p><strong>${wave.count}</strong><span>${wave.workload}</span></p><p><strong>Antes de retirar activos</strong><span>${wave.control}</span></p><a href="#figura-${wave.figure}">Vista del informe ↗</a>`;

const alternatives = [
  {id:"phase",label:"Datos + infraestructura", scope:"P01 + P04", years:2.06, show:"2,06", amount:"VPN USD 7,79 M"},
  {id:"preferred",label:"Cartera completa condicionada",scope:"P01–P04 · con los tres acuerdos", years:2.57, show:"2,57", amount:"VPN USD 14,00 M"},
  {id:"unconditioned",label:"Cartera completa sin acuerdos",scope:"P01–P04 · condiciones actuales",years:3.49,show:"3,49",amount:"VPN USD 12,60 M"}
];

const runways = [
  {id:"p01",start:1,end:7,bar:"Pilotos y gobierno", marker:"Maestros aceptados", at:3},
  {id:"p02",start:3,end:7,bar:"Orquestación e IA en sombra", marker:"Decisión de Riesgos", at:5},
  {id:"p03",start:5,end:9,bar:"Oferta y vinculación accesible",marker:"Entrega utilizable", at:7},
  {id:"p04",start:1,end:7,bar:"Ola 1     →     Ola 2     →     Ola 3", marker:"Cierre de migración",at:6}
];

const cashPoints = [
  {year:"2027", x:132,y:218, value:"−0,32"},
  {year:"2028", x:321,y:231, value:"−0,59"},
  {year:"2029", x:510,y:180, value:"+0,45"},
  {year:"2030", x:699,y:34, value:"+3,40"}
];

function cashCurve() {
  const path = cashPoints.map((p,i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ");
  return `<svg class="cash-svg" viewBox="0 0 755 275" role="img" aria-labelledby="cash-title cash-desc">
    <title id="cash-title">Flujo de caja acumulado al cierre de cada año</title>
    <desc id="cash-desc">En millones de dólares: 2027 menos 0,32; 2028 menos 0,59; 2029 más 0,45 y 2030 más 3,40.</desc>
    <path class="cash-zero" d="M52 202H724"/><text class="cash-axis" x="38" y="206" text-anchor="end">0</text>
    <path class="cash-area" d="${path} L699 202H132Z"/>
    <path class="cash-line" pathLength="1" d="${path}"/>
    ${cashPoints.map((p,i) => `<g><circle cx="${p.x}" cy="${p.y}" r="${i === 2 ? 7 : 4}"/><text x="${p.x+1}" y="${p.y-14}" class="cash-value" text-anchor="middle">${p.value}</text><text x="${p.x}" y="265" class="cash-axis" text-anchor="middle">${p.year}</text></g>`).join("")}
  </svg>`;
}

const mainSlides = [
  {
    id:"decision", label:"Decisión", kicker:"Junta Directiva · Decisión solicitada", duration:45,
    title:"Transformar digitalmente The Bank", surface:"vote-board",
    body:`<div class="vote-copy">
      <div class="investment"><span>Autorizar una inversión de</span><strong><small>USD</small> 5,77 M</strong><p>Cuatro proyectos entre 2027 y 2030, sujetos a la firma de tres acuerdos comerciales.</p></div>
      <ul class="vote-scope" aria-label="Alcance de la inversión">${Object.keys(projectNames).map(id=>`<li>${projectLink(id)}</li>`).join("")}</ul>
    </div>
    <aside class="vote-terms"><div class="vote-terms-heading"><h2>Tres acuerdos para ejecutar la cartera</h2><svg class="brand-lockup" width="78" height="74" viewBox="69 247 550 522" overflow="hidden" role="img" aria-label="The Bank"><image href="identidad/the-bank.jpg" width="687" height="1024"/></svg></div>
      <dl><div><dt>01</dt><dd><strong>Salida parcial de contratos locales</strong><span>Capturar el 50 % del ahorro en el año de cada oleada.</span></dd></div>
      <div><dt>02</dt><dd><strong>Acuerdo marco con el integrador</strong><span>Tarifa de USD 510 por día frente a USD 600.</span></dd></div>
      <div><dt>03</dt><dd><strong>Pago contra estabilización</strong><span>Retener el 20 % de P02 hasta 2030.</span></dd></div></dl>
      <p class="vote-return"><strong>2,57 años</strong> de recuperación estimada</p>
      <p class="vote-alternative"><strong>Si falta un acuerdo</strong><span>Aprobar Datos (P01) e Infraestructura (P04). Recuperación estimada de 2,06 años.</span></p>
    </aside>`,
    notes:"Abrir con la votación. Solicitamos autorizar USD 5,77 millones, sujetos a tres acuerdos. La originación de crédito es donde convergen los cambios en datos, riesgo, acceso e infraestructura. Si falta un acuerdo, la fase inicial se limita a P01 y P04.",
    refs:[`${sources.report} Introducción y §8.8, pp. 4 y 40–41.`,`${sources.case} Ajustes PBT, D6:F15.`]
  },
  {
    id:"diagnostico",label:"Diagnóstico",kicker:"Diagnóstico · AS-IS",duration:75,
    title:"Hoy fabricamos la tarjeta antes de que el cliente acepte",surface:"diagnosis-board",
    body:`<div class="diagnosis-stage" data-sequence="card">
      <div class="diagnosis-upstream">
        <div class="upstream-step">${glyph("files")}<div><strong>4 archivos semanales</strong><small>≈250.000 prospectos de aliados</small></div></div>
        <div class="upstream-step">${glyph("shield")}<div><strong>Validación y estudio</strong><small>Se puede reutilizar la consulta al buró hasta por 90 días.</small></div></div>
      </div>
      <div class="diagnosis-order">
        <div class="manufacture">${cardProp()}<span class="scene-caption">Tarjeta fabricada</span></div>
        <span class="story-arrow" aria-label="Después">→</span>
        <div class="accept-question">${glyph("person")}<strong>¿Acepta la oferta?</strong><span class="scene-caption">El cliente responde</span></div>
      </div>
    </div>
    <div class="scene-foot"><p>El banco ya incurrió en el costo de emisión cuando el cliente decide.</p><button class="board-button" type="button" data-replay>Repetir secuencia ↻</button></div>`,
    notes:"La escena representa el orden documentado del caso para la tarjeta física. Lea la pregunta de aceptación un instante después de la fabricación. Luego señale cómo llegaron los datos y qué implica reutilizar una consulta al buró. La disponibilidad de referencia fue 96 % frente a una meta de 96,85 %.",
    viewpoint:"Audiencia: Operaciones, Riesgos y Finanzas. Preocupación: identificar el costo previo a la aceptación y la vigencia de la evidencia. La flecha indica precedencia en el proceso. La tarjeta con chip identifica el instrumento físico y acompaña las vistas AS-IS y TO-BE.",
    refs:[`${sources.report} §3 y §5.1–5.4, pp. 4 y 9–11.`,"Informe, Anexo A, figuras A2, A6, A7 y A8."]
  },
  {
    id:"opciones",label:"Opciones",kicker:"Alternativas · Votación de inversión",duration:60,
    title:"La cartera completa cabe en el umbral con los tres acuerdos",surface:"options-board",
    body:`<div class="comparison" role="group" aria-label="Comparación de tiempos de recuperación">
      <header><span>Alcance a aprobar</span><div class="comparison-axis"><span>0</span><span>1</span><span>2</span><strong>Umbral · 3 años</strong><span>4</span></div></header>
      ${alternatives.map(o=>`<div class="comparison-row ${o.id}"><div class="comparison-label"><strong>${o.label}</strong><small>${o.scope} · ${o.amount}</small></div><div class="comparison-track"><div class="comparison-bar" style="--distance:${o.years/4*100}%"><strong>${o.show}</strong></div></div></div>`).join("")}
    </div>
    <p class="comparison-foot">Recuperación nominal estimada. VPN al 12 % nominal en USD, con horizonte hasta 2035.</p>`,
    notes:"La fase P01 + P04 recupera antes y tiene alcance menor. La cartera condicionada incluye además la originación, el riesgo y la vinculación. Con las condiciones actuales, la cartera completa recupera luego del límite de tres años.",
    refs:[`${sources.report} §8.7–8.8, pp. 39–41.`,`${sources.case} Escenario A33:I42 y Ajustes PBT D6:F15.`]
  },
  {
    id:"arquitectura-as-is",label:"AS-IS",kicker:"Arquitectura de aplicaciones · Footprint AS-IS",duration:37,
    title:"Los sistemas abren el producto antes de la aceptación",surface:"architecture-board asis-board",
    body:`${architectureMap("asis")}
    <ol class="architecture-gaps" aria-label="Brechas destacadas">
      <li>${glyph("files")}<span><strong>Intercambio por lotes</strong>Los archivos y listados separan a aliados, Riesgos y Crédito.</span></li>
      <li>${glyph("database")}<span><strong>Vigencia del buró</strong>Una decisión puede reutilizar una calificación de hasta 90 días.</span></li>
      <li>${glyph("card")}<span><strong>Emisión anticipada</strong>El realce ocurre antes de que el cliente acepte.</span></li>
    </ol>
    <div class="architecture-foot"><a href="#arquitectura">Comparar con el TO-BE →</a><a href="diagramas/footprint-junta.svg" target="_blank" rel="noopener">Abrir SVG ↗</a></div>`,
    notes:"Señale primero el perímetro del banco. Distinga las funciones de Riesgos y Crédito de las aplicaciones identificadas. Siga el listado hasta la apertura y el realce. Los elementos en rojo son brechas del ejercicio. El caso no especifica los protocolos técnicos de los intercambios.",
    viewpoint:"Audiencia: Junta, Operaciones y Arquitectura. Tipos: actor externo, servicio externo, función de negocio y aplicación existente. Una flecha vincula dos elementos mediante el intercambio o la precedencia explícita en su etiqueta. Rojo indica una brecha observada en la secuencia ejecutiva. El contorno distingue los elementos del banco de sus dependencias externas.",
    refs:[`${sources.report} §5.1–5.3, pp. 9–11.`,"Informe, Anexo A, figuras A2, A3, A6, A7 y A8. Apéndice E, p. 111."]
  },
  {
    id:"arquitectura",label:"TO-BE",kicker:"Arquitectura de aplicaciones · Blueprint TO-BE",duration:63,
    title:"La aceptación habilita la apertura del producto",surface:"architecture-board trace-board",
    body:`${architectureMap("tobe")}
    <div class="trace-tabs" role="group" aria-label="Motivaciones de negocio">
      <strong class="trace-tab-label">Motivación</strong>
      ${Object.entries(businessTraces).map(([id,t])=>`<button type="button" class="board-button" data-trace="${id}" aria-pressed="${id === "emision"}">${t.label}</button>`).join("")}
    </div>
    <div class="trace-details" id="trace-details" aria-live="polite">${traceDetails(businessTraces.emision)}</div>
    <div class="architecture-foot trace-foot"><a href="#arquitectura-as-is">← Comparar con el AS-IS</a><button class="board-button" type="button" data-view-notes>Metamodelo</button><a href="diagramas/blueprint-junta.svg" target="_blank" rel="noopener">Abrir SVG ↗</a><a href="diagramas/trazabilidad-junta.svg" target="_blank" rel="noopener">Trazabilidad completa ↗</a></div>`,
    notes:"Seleccione una motivación y siga el cambio hasta su indicador. La tarjeta del AS-IS aparece ahora al final. La aceptación condiciona la apertura. En el caso de riesgo, el buró y el motor brindan evidencia al analista. El canal asistido reutiliza el expediente, y los maestros publican Cliente y Servicio a los sistemas participantes.",
    viewpoint:"Audiencia: Junta, Operaciones, Riesgos y Tecnología. Metamodelo: una motivación justifica un objetivo. El objetivo requiere un cambio operativo. Un componente o integración habilita ese cambio, y un indicador mide su efecto. Un actor usa un canal. El canal registra o retoma una solicitud. La aceptación habilita la apertura. En la secuencia, la flecha indica precedencia. La selección destaca los elementos afectados. Propuesto, A adaptar y Se conserva son valores del atributo de cambio.",
    rules:["Una motivación justifica uno o más objetivos. Cada objetivo de esta vista tiene al menos un cambio operativo y un indicador para evaluar su efecto.","Un componente aplicativo o una integración habilita uno o más cambios operativos. Cada elemento técnico mostrado declara su estado de cambio: Propuesto, A adaptar o Se conserva.","Un canal registra o retoma la misma solicitud. El dictamen se asocia al expediente. La aceptación registrada es condición previa para ordenar la apertura y la emisión física, cuando esta aplique.","Los proyectos identifican a quién se asigna la entrega. El resaltado visual señala los elementos implicados en el objetivo seleccionado. La flecha de la secuencia indica precedencia operativa."],
    refs:[`${sources.report} §6.6–6.10, pp. 24–29, y §7.3.`,"Informe, Apéndice E, pp. 112, 114 y 119. EA-Xpress V2, INT-01 a INT-10."]
  },
  {
    id:"riesgos",label:"Riesgos",kicker:"Continuidad · Arquitectura de despliegue",duration:60,
    title:"El core productivo sigue local durante la migración",surface:"deployment-board",
    body:`<div class="topology" role="group" aria-label="Despliegue de infraestructura">
      <div class="deployment-zone local-zone"><div class="zone-name">Infraestructura local</div>
        <div class="site-pair"><div class="site-node">${glyph("bank")}<h2>Bogotá</h2><span>Sede principal</span><strong>${glyph("lock")} Core productivo</strong></div><span class="connect-label">↔<small>Red privada</small></span><div class="site-node">${glyph("bank")}<h2>Medellín</h2><span>Sede secundaria</span><strong>Continuidad</strong></div></div>
      </div>
      <div class="private-link"><span>↔</span><small>Enlace privado redundante</small></div>
      <div class="deployment-zone cloud-zone"><div class="zone-name">Nube</div><div class="site-node">${glyph("cloud")}<h2>OCI Bogotá</h2><span class="cloud-workload">${glyph("server")} Cargas elegibles</span></div></div>
    </div>
    <div class="wave-control" role="group" aria-label="Oleadas de migración">${Object.keys(waveDetails).map((year,i)=>`<button type="button" class="board-button" data-wave="${year}" aria-pressed="${i===0}">Ola ${i+1} · ${year}</button>`).join("")}</div>
    <div id="wave-summary" class="wave-summary" aria-live="polite">${waveSummary(waveDetails[2027])}</div>`,
    notes:"Señale la separación entre emplazamientos locales y la región de nube. Mantenga el core como referencia al cambiar la oleada. Cada baja queda condicionada a la prueba correspondiente y a la validación del gasto que efectivamente cesa. La autorización de IA es una decisión separada de Riesgos.",
    viewpoint:"Audiencia: Tecnología y Junta. Una carga se aloja en un entorno. Un entorno se comunica con otro por un enlace. Una oleada mueve las cargas elegibles y necesita pruebas antes de retirar activos. El contorno delimita el entorno, la flecha de doble punta representa conectividad y el candado identifica la permanencia del core productivo.",
    refs:[`${sources.report} §6.9, p. 27 y Apéndice E, pp. 115–118.`,`${sources.case} Decisión P04, C2 y B6:C7.`]
  },
  {
    id:"hoja-de-ruta",label:"Hoja de ruta",kicker:"Ejecución · Dependencias y entregas",duration:75,
    title:"Datos e infraestructura arrancan en paralelo",surface:"runway-board",
    body:`<div class="runway" role="group" aria-label="Cronograma por proyecto 2027 a 2030">
      <div class="runway-years"><span></span><div>${[2027,2028,2029,2030].map(y=>`<strong>${y}</strong>`).join("")}</div></div>
      ${runways.map(r=>`<div class="runway-row ${r.id}"><div class="runway-label">${projectLink(r.id)}</div><div class="runway-track">
        <div class="runway-bar" style="--start:${r.start};--end:${r.end}">${r.bar}</div>
        <div class="runway-milestone" style="--at:${r.at}"><i aria-hidden="true"></i><small>${r.marker}</small></div>
      </div></div>`).join("")}
    </div>
    <div class="roadmap-foot"><p><span class="milestone-key" aria-hidden="true"></span> Hito sujeto a aceptación</p><p><strong>P01 habilita las pruebas de P02</strong> al aceptar los datos maestros en 2028.</p><a href="#figura-gantt-t3">Gantt consolidado ↗</a></div>`,
    notes:"Muestre los dos arranques en 2027. En 2028 la aceptación de los maestros habilita la prueba en sombra de P02. En 2029 Riesgos decide si autoriza la asistencia y se cierra la migración. P03 entrega una ruta accesible utilizable en el primer semestre de 2030. La posición del rombo corresponde al final del semestre del hito.",
    viewpoint:"Audiencia: Junta y responsables de ejecución. Un proyecto entrega hitos. La aceptación de un hito habilita una entrega posterior, una capacidad o el reconocimiento de beneficios. El carril identifica el proyecto, la longitud de la barra indica el período de trabajo y el rombo señala un hito sujeto a aceptación.",
    refs:[`${sources.report} §9.1–9.2, pp. 42–44.`,"Informe, Gantt consolidado p. 42. EA-Xpress, entregas semestrales S01–S12."]
  },
  {
    id:"finanzas",label:"Finanzas",kicker:"Impacto en costo y valor · Resolución",duration:100,
    title:"La inversión se recupera en 2,57 años con los tres acuerdos",surface:"money-board",
    body:`<div class="money-layout">
      <figure class="money-chart"><figcaption>Flujo acumulado al cierre de cada año <small>USD millones</small></figcaption>${cashCurve()}</figure>
      <aside class="money-facts"><dl><div><dt>Inversión 2027–2030</dt><dd>USD 5,77 M</dd></div><div><dt>VPN al 12 %</dt><dd>USD 14,00 M</dd></div><div><dt>Beneficio / costo</dt><dd>3,25</dd></div></dl></aside>
    </div>
    <ul class="money-drivers" aria-label="Beneficios anuales estimados a plena operación">
      <li><strong>USD 1,00 M</strong><span>Menores pérdidas · medir por cohorte</span></li>
      <li><strong>USD 262.500</strong><span>Menos emisiones · conciliar con aceptación</span></li>
      <li><strong>USD 78.000</strong><span>Menos consultas repetidas · validar facturación</span></li>
    </ul>
    <div class="closing-vote"><strong>Decisión solicitada</strong><p>Aprobar USD 5,77 millones para P01–P04, condicionados a los tres acuerdos. Si falta alguno, aprobar P01 + P04.</p></div>`,
    notes:"El gráfico muestra acumulados de cierre, redondeados a USD millones. El acumulado a diciembre de 2029 es USD 445.113. El modelo estima 2,57 años por interpolación del flujo nominal. Los tres beneficios ilustran estimaciones anuales a plena operación. Reitere la resolución de la portada.",
    refs:[`${sources.report} §8.3–8.8, pp. 35–41.`,`${sources.case} Beneficios, Evidencia de beneficios, Flujo consolidado y Ajustes PBT.`]
  }
];
