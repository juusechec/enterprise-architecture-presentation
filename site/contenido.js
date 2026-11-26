"use strict";

const metric = (value, label, detail = "") =>
  `<div class="metric"><strong>${value}</strong><span>${label}</span>${detail ? `<small>${detail}</small>` : ""}</div>`;

const row = (code, title, body) =>
  `<div class="ledger-row"><span class="row-code">${code}</span><div><h3>${title}</h3><p>${body}</p></div></div>`;

const figure = (file, alt, caption) =>
  `<figure class="architecture"><div class="drawing"><img src="diagramas/${file}.svg" alt="${alt}"></div><figcaption>${caption}</figcaption></figure>`;

const callout = (label, text) => `<p class="callout"><strong>${label}</strong><span>${text}</span></p>`;

const projectNames = {
  p01: "Datos y gobierno",
  p02: "Originación y riesgo",
  p03: "Vinculación accesible",
  p04: "Infraestructura híbrida"
};

const projectLink = id => `<a href="#proyecto-${id}"><span>${id.toUpperCase()}</span> ${projectNames[id]}</a>`;

const projectCards = (className = "") =>
  `<div class="project-index ${className}">${Object.keys(projectNames).map(projectLink).join("")}</div>`;

const sources = {
  deck: "Presentación ejecutiva Grupo 04.",
  report: "Informe Taller 3 · The Bank, Grupo 04.",
  case: "Business Case V3, Grupo 04.",
  qa: "Preguntas de jurados · The Bank, Grupo 04."
};

const backups = [
  {
    id: "payback", team: "Finanzas", person: "Walther",
    title: "¿Qué sostiene el payback de 2,57 años?",
    answer: "La cifra depende de firmar tres acuerdos. La cartera sin esos acuerdos recupera en 3,49 años.",
    body: `<div class="progression">
      ${metric("3,49", "Cartera sin acuerdos", "Oleadas ordenadas por valor.")}
      ${metric("3,25", "Salida parcial", "Captura anticipada de ahorro local.")}
      ${metric("3,04", "Acuerdo marco", "Tarifa de USD 510 por día.")}
      ${metric("2,57", "Retención de P02", "El 20 % se desembolsa en 2030.")}
    </div>${callout("Qué cambia", "El calendario de ahorros y desembolsos y la tarifa del integrador. El modelo conserva los volúmenes, mejoras y precios unitarios de los beneficios.")}`,
    refs: [`${sources.case} Ajustes PBT, D6:F9; ${sources.report} §8.8, pp. 40–41.`]
  },
  {
    id: "precedentes", team: "Finanzas", person: "Walther",
    title: "¿Qué precedentes respaldan los tres acuerdos?",
    answer: "Hay precedentes para cada mecanismo. Las condiciones y porcentajes de The Bank se determinan al negociar.",
    body: `<div class="evidence-list">
      ${row("01", "Terminación parcial", "Morgan Lewis documenta cláusulas de terminación parcial en contratos tecnológicos. Oracle Support Rewards ilustra un mecanismo distinto para reducir gasto en soporte local.")}
      ${row("02", "Acuerdo marco", "Colombia Compra Eficiente reportó ahorros cercanos a 10,4 % en acuerdos marco de 2020, incluidos acuerdos de software. La meta de The Bank es 15 %.")}
      ${row("03", "Retención por aceptación", "El Banco Mundial y el Fondo OPEP documentan retenciones como garantía. The Bank propone retener 20 % hasta la estabilización de P02.")}
    </div>`,
    refs: ["Referentes de las negociaciones · Grupo 04, pp. 1–4.", `${sources.qa} CFO-2, p. 8.`]
  },
  {
    id: "acuerdos", team: "Finanzas", person: "Walther",
    title: "¿Qué se aprueba si los acuerdos quedan por debajo de lo esperado?",
    answer: "Se reevalúa la cartera con lo que se firme. Si falta un acuerdo o la recuperación supera el umbral, se inicia con P01 y P04.",
    body: `<div class="data-table-wrap"><table><thead><tr><th>Resultado de la negociación</th><th>Recuperación</th></tr></thead><tbody>
      <tr><td>Descuento del integrador de 10 %</td><td>2,75 años</td></tr>
      <tr><td>Retención de P02 de 10 %</td><td>2,82 años</td></tr>
      <tr><td>Se adelanta un cuarto del ahorro local</td><td>2,95 años</td></tr>
      <tr><td>Descuento y retención ambos de 10 %</td><td>3,02 años</td></tr>
      <tr><td>Sin terminación anticipada</td><td>3,12 años</td></tr>
      <tr class="highlight"><td>Fase inicial P01 + P04</td><td>2,06 años</td></tr>
    </tbody></table></div>`,
    refs: ["Referentes de las negociaciones · Grupo 04, p. 3.", `${sources.qa} CFO-3, p. 9; ${sources.case} Escenario B47:I49.`]
  },
  {
    id: "beneficios", team: "Finanzas", person: "Cristian",
    title: "¿Cómo se estiman y validan los beneficios?",
    answer: "Cada estimación combina una base, una mejora esperada y un valor unitario. Después se contrasta con evidencia operativa.",
    body: `<div class="evidence-list">
      ${row("01", "Menores pérdidas · USD 1.000.000 al año", "USD 40 M de pérdidas anuales estimadas × 2,5 % de mejora esperada. Comparar pérdidas de créditos similares al mismo plazo.")}
      ${row("02", "Menos emisiones innecesarias · USD 262.500 al año", "105.000 emisiones × 25 % evitables × USD 10. Medir aceptación antes de emitir y conciliar costos.")}
      ${row("03", "Menos consultas repetidas · USD 78.000 al año", "600.000 consultas × 20 % reutilizables × USD 0,65. Validar vigencia y cargos de consulta.")}
    </div>${callout("Sensibilidad", "Con el 50 % de realización de beneficios y los costos del caso 8, el VPN estimado sigue positivo en USD 3,88 M.")}`,
    refs: [`${sources.case} Beneficios, Evidencia de beneficios y Sensibilidad.`, `${sources.report} §8.3–8.8; ${sources.qa} CFO-4, p. 9.`]
  },
  {
    id: "p02", team: "Finanzas", person: "Walther",
    title: "¿Por qué incluir P02 si recupera en 3,41 años por sí solo?",
    answer: "P02 habilita la vinculación, aporta VPN positivo y se evalúa dentro de una cartera que recupera en 2,57 años bajo las condiciones propuestas.",
    body: `<div class="metrics three">
      ${metric("3,41 años", "Recuperación individual de P02")}
      ${metric("USD 2,94 M", "VPN de P02 en la cartera negociada")}
      ${metric("USD 1,81 M", "Beneficio anual estimado a régimen")}
    </div>${callout("Control de exposición", "Riesgos decide si la IA sale de sombra. El pago retenido se libera en 2030 tras estabilización operativa.")}`,
    refs: [`${sources.report} §8.4, §8.7 y §9.2.`, `${sources.qa} CFO-5, p. 9.`]
  },
  {
    id: "oci", team: "Tecnología", person: "Ricardo",
    title: "¿Por qué OCI frente a AWS y Azure?",
    answer: "OCI Bogotá ofrece el mayor VPN del comparativo y reduce la distancia entre las cargas migradas y el core local.",
    body: `<div class="metrics three">
      ${metric("USD 5,84 M", "OCI · Bogotá")}
      ${metric("USD 5,67 M", "AWS · México Central")}
      ${metric("USD 5,65 M", "Azure · México Central")}
    </div>${callout("Base de comparación", "VPN incremental frente a continuidad local, sin terminación anticipada. Antes de contratar se valida precio efectivo, red, licencias, residencia y latencia p95.")}`,
    refs: [`${sources.report} §8.1, pp. 33–34; ${sources.qa} CTO-1, p. 12.`]
  },
  {
    id: "core", team: "Tecnología", person: "Ricardo",
    title: "¿Por qué conservar el core productivo local?",
    answer: "Moverlo aumenta la exposición por criticidad, latencia, dependencias y licencias. Los ahorros iniciales están en las cargas elegibles.",
    body: `<div class="evidence-list">
      ${row("01", "Conservar y consolidar", "Bogotá mantiene el core productivo y Medellín mantiene la continuidad. Se consolidan los equipos locales seleccionados.")}
      ${row("02", "Exponer servicios", "La orquestación usa interfaces controladas para integrar el core con la originación digital y asistida.")}
      ${row("03", "Mover por oleadas", "Primero desarrollo y calidad. El CRM productivo elegible pasa en 2029 tras validar capacidad y reversión.")}
    </div>`,
    refs: [`${sources.report} §6.9, §7.5 y §8.1; ${sources.qa} CTO-2, p. 12.`]
  },
  {
    id: "hibrida", team: "Tecnología", person: "Ricardo",
    title: "¿Cómo se integra y protege la operación híbrida?",
    answer: "Con enlaces privados redundantes, interfaces autenticadas y pruebas de restauración y reversión antes de dar de baja las cargas.",
    body: `<div class="risk-layout">
      ${figure("infra-hibrida", "Conectividad privada entre Bogotá, Medellín y OCI Bogotá; las APIs externas se autentican cuando el canal autorizado lo permite.", "Topología objetivo · El trazado físico se valida en el diseño de red.")}
      <div class="risk-list">
        ${row("01", "Sede ↔ nube", "Medir latencia p95, resiliencia del enlace y retorno a local.")}
        ${row("02", "Sede ↔ sede", "Probar restauración y continuidad entre Bogotá y Medellín.")}
        ${row("03", "Servicio externo", "Autenticación y aprobación de seguridad. Datos enmascarados o sintéticos en pruebas.")}
      </div>
    </div>`,
    refs: [`${sources.report} §6.9, p. 27; ${sources.qa} CTO-3 y CTO-6, pp. 12–13.`]
  },
  {
    id: "sesgo", team: "Tecnología", person: "Jorge",
    title: "¿Cómo se controla el sesgo de la IA?",
    answer: "Riesgos compara errores y calibración por producto y grupo de edad en modo sombra, y decide si autoriza el uso asistido.",
    body: `<div class="evidence-list">
      ${row("01", "Antes de entrenar", "Validar representatividad y fecha de disponibilidad de los datos. Evitar que la edad sea por sí sola un sustituto del riesgo.")}
      ${row("02", "Durante la sombra", "Comparar recomendaciones con reglas, decisiones humanas y desempeño posterior. Revisar diferencias entre cohortes de edad.")}
      ${row("03", "Durante uso asistido", "Mantener decisión humana y monitoreo. Si el desempeño cae o aparece un sesgo, volver al proceso basado en reglas.")}
    </div>`,
    refs: [`${sources.report} §6.10, pp. 28–29; ${sources.qa} CTO-4 y CTO-5, p. 13.`]
  },
  {
    id: "proyectos", team: "Arquitectura", kicker: "Cartera de transformación",
    title: "¿Cuáles son los proyectos?",
    body: projectCards("project-index-overview"),
    refs: [`${sources.report} §8.3–8.6 y §9.1–9.2.`]
  },
  {
    id: "trazabilidad", team: "Arquitectura", person: "Edda",
    title: "¿Cómo se rastrea una iniciativa hasta la estrategia?",
    answer: "La cadena une el objetivo, su indicador, la brecha que se quiere cerrar, la iniciativa y el resultado medido.",
    body: `${figure("trazabilidad", "Ejemplo de trazabilidad: mejorar evaluación de crédito, medir vigencia del buró, cerrar GP05, ejecutar INI-05 e INI-02 con P01 y P02, y verificar consultas redundantes.", "Vista de motivación y realización · Ejemplo de la vigencia de consultas de buró.")}
    ${callout("Inventario de trabajo", "87 brechas, siete iniciativas y cuatro proyectos. EA-Xpress conserva la relación entre cada brecha y la iniciativa que la cierra.")}
    <nav class="backup-links" aria-label="Vistas estratégicas del informe"><a href="#figura-c5">GQM+Strategies ↗</a><a href="#figura-p25">Los cuatro proyectos por segmento ↗</a></nav>`,
    viewpoint: "Arquitectura empresarial y Junta. Pregunta: ¿cómo aporta una iniciativa a un objetivo medible? Elementos: objetivo, criterio, brecha, iniciativa, proyecto y resultado. La flecha sigue la cadena de trazabilidad y permite recorrerla en ambos sentidos para auditar contribución.",
    refs: [`${sources.report} §6.2–6.3 y §7; ${sources.qa} EA-1, p. 15.`, "EA-Xpress V2, hojas 6.0 y 7.0."]
  },
  {
    id: "orden", team: "Arquitectura", person: "Ricardo",
    title: "¿Por qué P02 comienza en 2028?",
    answer: "P02 necesita datos confiables de Cliente y Servicio. P01 prepara esa base desde 2027 y P04 puede ejecutarse en paralelo.",
    body: `<div class="evidence-list">
      ${row("2027", "P01 empieza por datos", "INI-05 prepara gobierno y calidad. Los maestros quedan integrados y aceptados en H1 de 2028.")}
      ${row("2028", "P02 prepara reglas y prueba la IA", "INI-01 e INI-02 construyen orquestación y decisiones de riesgo. La prueba depende de la aceptación de los datos.")}
      ${row("2029", "P03 aprovecha el expediente y la orquestación", "La vinculación accesible se prueba y entrega una primera versión utilizable en H1 de 2030.")}
    </div>${callout("Criterio", "La priorización ordena por valor. La hoja de ruta ordena la entrega según las dependencias entre capacidades.")}`,
    refs: [`${sources.report} §7.4 y §9.1; ${sources.qa} EA-2, p. 15.`]
  },
  {
    id: "datos-reales", team: "Arquitectura", person: "Edda",
    title: "¿Qué se validó con datos reales del banco?",
    answer: "La evidencia disponible es el caso académico y su anexo de infraestructura. La medición con datos operativos del banco queda para los pilotos.",
    body: `<div class="evidence-list">
      ${row("01", "Datos del caso", "Procesos, reglas, archivos de aliados e inventario del anexo. Los precios públicos son referencias para comparar infraestructura.")}
      ${row("02", "Estimaciones del modelo", "Volúmenes, mejoras y costos unitarios para calcular beneficios. Los porcentajes de los acuerdos son objetivos de negociación.")}
      ${row("03", "Validación antes de ejecutar", "Líneas base operativas, piloto con datos autorizados, medición por cohortes, cotizaciones y condiciones de aceptación.")}
    </div>`,
    refs: [`${sources.report} §5 y §8; ${sources.case} Criterios y evidencia.`, `${sources.qa} T-1, p. 18.`]
  }
];
