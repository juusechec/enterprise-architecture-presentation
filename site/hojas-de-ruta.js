"use strict";

const projectRoadmap = ({ milestones, figures, ...project }) => ({
  ...project,
  label: projectNames[project.id],
  kicker: project.id.toUpperCase() + " · " + projectNames[project.id],
  body: `<ol class="roadmap project-roadmap" style="--milestones:${milestones.length}">
    ${milestones.map(m => `<li><article>
      <span class="milestone-date">${m.date}${m.hito ? ` <small>${m.hito}</small>` : ""}</span>
      <h2>${m.title}</h2><p>${m.detail}</p>
      <strong>${m.controlLabel || "Criterio de aceptación"}</strong><small>${m.control}</small>
    </article></li>`).join("")}
  </ol>
  <nav class="backup-links" aria-label="Evidencia del proyecto">
    <a href="#figura-gantt-t3">Gantt consolidado ↗</a>
    ${figures.map(([id, label]) => `<a href="#figura-${id}">${label} ↗</a>`).join("")}
  </nav>`
});

const projectRoadmaps = [
  projectRoadmap({
    id: "p01",
    title: "¿Cuándo quedan disponibles los datos maestros?",
    answer: "La integración de Cliente y Servicio se acepta en el primer semestre de 2028. Con esa base, los proyectos de riesgo y vinculación pueden utilizar datos consistentes.",
    milestones: [
      { date: "1.er sem. 2027", hito: "S01", title: "Definir autoridad e identidad",
        detail: "Acordar el identificador de Cliente, la autoridad de datos y el catálogo mínimo de servicios.",
        control: "Fuentes, permisos y línea base revisados." },
      { date: "2.º sem. 2027", hito: "S02", title: "Probar el gobierno de datos",
        detail: "Pilotear el maestro y el catálogo con consumidores seleccionados.",
        control: "Reintentos y conciliación probados." },
      { date: "1.er sem. 2028", hito: "S04", title: "Integrar consumidores",
        detail: "Cerrar INI-05 con la integración aceptada de Cliente y Servicio.",
        control: "Aceptación antes del segundo semestre para habilitar la rampa de beneficios." },
      { date: "Hasta fin de 2029", title: "Acompañar la adopción",
        detail: "Mantener el gobierno de la transformación y la adopción previstos en INI-06.",
        controlLabel: "Seguimiento", control: "Verificar uso de las fuentes oficiales y gestionar excepciones." }
    ],
    figures: [["e04", "Datos maestros TO-BE"], ["e03", "Datos maestros AS-IS"]],
    refs: [`${sources.report} §8.3, §9.1–9.2, pp. 42–44 y Apéndice E, pp. 113–114.`]
  }),
  projectRoadmap({
    id: "p02",
    title: "¿Cuándo puede la IA asistir al analista de riesgo?",
    answer: "La IA se prueba en sombra en 2028. Riesgos decide en el primer semestre de 2029 si autoriza su uso asistido.",
    milestones: [
      { date: "1.er sem. 2028", title: "Preparar reglas y orquestación",
        detail: "Iniciar INI-01 e INI-02. La integración aceptada de Cliente y Servicio es el insumo de P01.",
        controlLabel: "Dependencia", control: "Datos maestros aceptados al cierre del semestre." },
      { date: "2.º sem. 2028", hito: "S05", title: "Probar la IA en sombra",
        detail: "Contrastar la salida del modelo con las reglas, la decisión humana y los resultados posteriores.",
        control: "Conservar el dictamen humano y registrar errores. En sombra, el ahorro de IA es cero." },
      { date: "1.er sem. 2029", hito: "S07", title: "Resolver el uso asistido",
        detail: "Riesgos revisa el desempeño y las diferencias por cohorte.",
        control: "Autorización explícita de Riesgos antes de pasar a uso asistido." },
      { date: "2.º sem. 2029", hito: "S09", title: "Ampliar la originación",
        detail: "Completar la adopción de la orquestación. Usar la asistencia de IA solo si fue autorizada.",
        control: "Operación aceptada antes de reconocer beneficios." }
    ],
    figures: [["e10", "BPMN de modo sombra"], ["e02", "Aplicaciones TO-BE"]],
    refs: [`${sources.report} §6.10, §9.1–9.2, pp. 42–44 y Apéndice E, p. 120.`]
  }),
  projectRoadmap({
    id: "p03",
    title: "¿Cuándo se puede usar la vinculación accesible?",
    answer: "La primera entrega utilizable está prevista para el primer semestre de 2030, después de probar el diseño accesible.",
    milestones: [
      { date: "1.er sem. 2029", hito: "S08", title: "Probar una oferta accesible",
        detail: "Prototipar la oferta y la continuidad del trámite entre el canal digital y el asesor.",
        control: "Medir comprensión y terminación por producto, canal y cohorte." },
      { date: "1.er sem. 2030", hito: "S11", title: "Entregar formalización utilizable",
        detail: "Habilitar una primera vinculación digital y asistida con instrumentos trazables.",
        control: "Aceptar la entrega antes del segundo semestre para habilitar la rampa de beneficios." },
      { date: "2.º sem. 2030", hito: "S12", title: "Ampliar la cobertura",
        detail: "Expandir el servicio y cerrar INI-03. El modelo contempla beneficio anual pleno desde 2031.",
        control: "Medir adopción, finalización y abandono antes de declarar beneficios realizados." }
    ],
    figures: [["e09", "BPMN de economía plateada"], ["p25", "Vista por segmento"]],
    refs: [`${sources.report} §6.6, §9.1–9.2, pp. 42–44 y Apéndice E, p. 119.`]
  }),
  projectRoadmap({
    id: "p04",
    title: "¿Cómo se ejecuta la migración híbrida?",
    answer: "Tres oleadas entre 2027 y 2029 completan doce migraciones y diecisiete bajas. El core productivo y las dos sedes permanecen en operación.",
    milestones: [
      { date: "2027", hito: "Ola 1", title: "8 migraciones · 3 bajas",
        detail: "Migrar desarrollo de CRM y Core y los ambientes de calidad de mayor ahorro.",
        control: "Probar latencia, restauración y reversión." },
      { date: "2028", hito: "Ola 2", title: "3 migraciones · 10 bajas",
        detail: "Migrar la calidad restante y retirar ocho servidores dedicados de Core.",
        control: "Verificar licencias, seguridad, capacidad de consolidación y cese del costo local." },
      { date: "2029", hito: "Ola 3", title: "1 migración · 4 bajas",
        detail: "Migrar el CRM productivo elegible y consolidar cargas físicas locales.",
        control: "Validar capacidad, conciliación y retorno a local antes de retirar activos." }
    ],
    figures: [["e06","Vista 2027"], ["e07","Vista 2028"], ["e08","Vista 2029"]],
    refs: [`${sources.report} §6.9, p. 27, §9.1–9.2, pp. 42–44 y Apéndice E, pp. 116–118.`]
  })
];
