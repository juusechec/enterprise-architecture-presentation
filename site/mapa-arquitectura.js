"use strict";

// Logical application footprint and blueprint. Coordinates stay identical across the two views.
const architectureColumns = [22, 260, 498, 736, 974];
const architectureRows = { context: 11, flow: 134, support: 256 };
const architectureNode = (id, col, lane, type, title, detail, symbol, state = "") =>
  ({id, x: architectureColumns[col], y: architectureRows[lane], w: 206, h: 63, type, title, detail, symbol, state});

const architectureViews = {
  asis: {
    title: "Footprint actual de originación",
    description: "Aliados y Datacrédito alimentan la validación de riesgo. El CRM registra aceptados y el estudio recibe listados. Los sistemas de producto abren y se solicita el realce antes de la aceptación. Los soportes se digitalizan por intermedio de Comercial.",
    bank: "M9 109H727V328H9Z",
    external: {x:728,y:109,w:468,h:100},
    nodes: [
      architectureNode("allies",0,"context","Actor externo","Aliados comerciales","Cuatro archivos cada semana","files"),
      architectureNode("bureau",1,"context","Servicio externo","Datacrédito","Calificación del buró","database"),
      architectureNode("risk",0,"flow","Función de negocio","Validación de riesgo","Segmenta y aplica reglas","shield"),
      architectureNode("credit",1,"flow","Función de negocio","Estudio de crédito","Preaprobación y excepciones","file"),
      architectureNode("product",2,"flow","Aplicación existente","Sistemas de producto","Tarjetas, crédito y ahorros","server"),
      architectureNode("issue",3,"flow","Terceros","Realce y entrega","Fabricación y transporte","card","gap"),
      architectureNode("customer",4,"flow","Actor externo","Cliente","Acepta o rechaza la oferta","person"),
      architectureNode("crm",0,"support","Aplicación existente","CRM","Registra a los aceptados","contacts"),
      architectureNode("docs",2,"support","Aplicación existente","Gestión documental","Custodia soportes digitalizados","folder")
    ],
    edges: [
      {from:"allies",to:"risk",path:"M110 74V134",label:"Archivos por lote",labelAt:[127,94],state:"gap"},
      {from:"bureau",to:"risk",path:"M280 74V101H187V134",label:"Reuso hasta 90 días",labelAt:[302,98],state:"gap"},
      {from:"risk",to:"credit",path:"M228 168H260",label:"Entrega listado",labelAt:[244,127]},
      {from:"credit",to:"product",path:"M466 168H498",label:"Deriva a apertura",labelAt:[482,127]},
      {from:"product",to:"issue",path:"M704 168H736",label:"Solicita realce",labelAt:[720,127],state:"gap"},
      {from:"issue",to:"customer",path:"M942 168H974",label:"Gestiona entrega",labelAt:[958,127],state:"gap"},
      {from:"risk",to:"crm",path:"M115 197V256",label:"Registra aceptados",labelAt:[136,230]},
      {from:"customer",to:"docs",path:"M1053 197V286H704",label:"Soportes vía Comercial",labelAt:[852,274]}
    ]
  },
  tobe: {
    title: "Blueprint objetivo de originación",
    description: "El cliente usa el canal digital o asistido. La orquestación mantiene la solicitud y recibe el dictamen del motor con control humano. El buró se consulta por vigencia. La aceptación habilita la apertura, el sistema solicita el realce físico cuando corresponda y queda evidencia documental.",
    bank: "M9 109H486V3H716V109H956V328H9Z",
    external: {x:958,y:109,w:238,h:100},
    nodes: [
      architectureNode("customer",0,"context","Actor externo","Cliente","Inicia o retoma el trámite","person"),
      architectureNode("bureau",1,"context","Servicio externo","Datacrédito","Fuente vigente del buró","database"),
      architectureNode("risk",2,"context","Propuesto","Motor de decisión","Reglas y revisión humana","shield","new"),
      architectureNode("channel",0,"flow","Propuesto","Digital o asistido","Autoservicio y asesor","switch","new"),
      architectureNode("case",1,"flow","Propuesto","Orquestación","Mismo ID, estado y evidencia","file","new"),
      architectureNode("gate",2,"flow","Control propuesto","Aceptación registrada","Habilita la apertura","check","new"),
      architectureNode("product",3,"flow","Aplicación existente","Sistemas de producto","Tarjetas, crédito y ahorros","server"),
      architectureNode("issue",4,"flow","Terceros","Realce y entrega","Instrumento físico si aplica","card"),
      architectureNode("crm",0,"support","Aplicación existente","CRM","Recibe versión oficial de Cliente","contacts"),
      architectureNode("data",1,"support","Fuentes propuestas","Cliente y Servicio","Maestro y catálogo autorizados","database","new"),
      architectureNode("docs",2,"support","Aplicación existente","Gestión documental","Custodia soporte y aceptación","folder")
    ],
    edges: [
      {from:"customer",to:"channel",path:"M113 74V134",label:"Usa el canal",labelAt:[130,94]},
      {from:"case",to:"bureau",path:"M344 134V74",label:"Consulta por vigencia",labelAt:[360,95],state:"improve",focus:["riesgo"]},
      {from:"risk",to:"case",path:"M516 74V106H435V134",label:"Dictamen",labelAt:[528,97],focus:["riesgo"]},
      {from:"channel",to:"case",path:"M228 168H260",label:"Retoma la solicitud",labelAt:[244,127],state:"improve",focus:["acceso"]},
      {from:"case",to:"gate",path:"M466 168H498",label:"Envía a aceptación",labelAt:[482,127],focus:["emision","acceso"]},
      {from:"gate",to:"product",path:"M704 168H736",label:"Abre tras aceptar",labelAt:[720,127],state:"improve",focus:["emision"]},
      {from:"product",to:"issue",path:"M942 168H974",label:"Solicita si aplica",labelAt:[958,127],state:"improve",focus:["emision"]},
      {from:"data",to:"case",path:"M354 256V197",label:"Publica datos oficiales",labelAt:[371,229],state:"improve",focus:["riesgo","acceso"]},
      {from:"data",to:"crm",path:"M260 290H228",label:"Versión de Cliente",labelAt:[244,247],state:"improve",focus:["acceso"]},
      {from:"gate",to:"docs",path:"M613 197V256",label:"Archiva evidencia",labelAt:[630,229],state:"improve",focus:["emision","acceso"]}
    ]
  }
};

function architectureMap(state) {
  const view = architectureViews[state];
  const ns = "arch-" + state;
  const external = view.external;
  return `<figure class="systems-map ${state}-map">
    <div class="systems-scroll" tabindex="0" aria-label="Diagrama desplazable en pantallas estrechas">
      <svg class="systems-svg" viewBox="0 0 1204 333" role="img" aria-labelledby="${ns}-title ${ns}-desc">
        <title id="${ns}-title">${view.title}</title><desc id="${ns}-desc">${view.description}</desc>
        <defs>${["normal","gap","improve"].map(kind=>`<marker id="${ns}-${kind}" orient="auto" markerWidth="7" markerHeight="7" refX="6" refY="3.5" markerUnits="userSpaceOnUse"><path class="map-arrow ${kind}" d="M0 0 7 3.5 0 7Z"/></marker>`).join("")}</defs>
        <path class="map-bank" d="${view.bank}"/>
        <rect class="map-external" x="${external.x}" y="${external.y}" width="${external.w}" height="${external.h}"/>
        <text class="map-region-label" x="20" y="121">THE BANK</text>
        <text class="map-region-label" x="${external.x+external.w-10}" y="121" text-anchor="end">FUERA DEL BANCO</text>
        ${view.edges.map(edge=>{
          const kind = edge.state || "normal";
          const focus = edge.focus || [];
          return `<g class="map-edge ${kind}${focus.includes("emision") ? " highlight" : ""}" data-map-focus="${focus.join(" ")}">
            <path d="${edge.path}" marker-end="url(#${ns}-${kind})"/>
            <text x="${edge.labelAt[0]}" y="${edge.labelAt[1]}" text-anchor="${edge.path.includes("H") && edge.labelAt[1] === 127 ? "middle" : "start"}">${edge.label}</text>
          </g>`;
        }).join("")}
        ${view.nodes.map(node=>`<g class="map-node ${node.state}${state === "tobe" && ["gate","product","issue"].includes(node.id) ? " highlight" : ""}" data-trace-node="${node.id}" transform="translate(${node.x} ${node.y})">
          <rect class="map-node-box" width="${node.w}" height="${node.h}" rx="6"/>
          <circle class="map-icon-disc" cx="23" cy="34" r="15"/>
          <g class="map-icon" transform="translate(13 24) scale(.83)">${shapes[node.symbol]}</g>
          <text class="map-kind" x="45" y="16">${node.type}</text>
          <text class="map-title" x="45" y="36">${node.title}</text>
          <text class="map-note" x="45" y="52">${node.detail}</text>
        </g>`).join("")}
      </svg>
    </div>
  </figure>`;
}
