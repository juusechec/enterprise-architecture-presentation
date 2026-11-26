"use strict";

const stage = document.querySelector("#stage");
const chapters = document.querySelector("#chapters");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const slideCount = document.querySelector("#slide-count");
const notesDialog = document.querySelector("#notes-dialog");
const notesContent = document.querySelector("#notes-content");
const notesButton = document.querySelector("#notes-button");
const fullscreenButton = document.querySelector("#fullscreen-button");
const presentButton = document.querySelector("#present-button");
const deckClock = document.querySelector("#deck-clock");
const deckElapsed = document.querySelector("#deck-elapsed");
const deckRemaining = document.querySelector("#deck-remaining");
const deckRemainingLabel = document.querySelector("#deck-remaining-label");
const deckProgress = document.querySelector("#deck-progress");
const questionLink = document.querySelector(".question-link");
const mainSequence = { items: mainSlides, prefix: "", index: "respaldo" };
const questionSequence = { items: backups, prefix: "pregunta-", index: "respaldo" };
const projectSequence = { items: projectRoadmaps, prefix: "proyecto-", index: "respaldo" };
const figureSequence = { items: reportFigures, prefix: "figura-", index: "figuras" };
const slideByRoute = new Map([mainSequence, questionSequence, projectSequence, figureSequence].flatMap(sequence =>
  sequence.items.map(item => [sequence.prefix + item.id, {item, sequence}])
));

let current = mainSlides[0];
let lastMain = mainSlides[0];
let currentSequence = mainSequence;
let clockId;

function formatTime(seconds) {
  return Math.floor(seconds / 60) + ":" + String(seconds % 60).padStart(2, "0");
}

function slideTemplate(item, isBackup, backLabel) {
  const metadata = item.kicker || item.team + " · " + item.person;
  const style = isBackup ? "backup" : `board ${item.surface}`;
  return `<article class="slide ${style}" aria-labelledby="slide-title"><div class="slide-inner">
    <p class="kicker">${metadata}</p><h1 id="slide-title">${item.title}</h1>
    ${item.answer ? `<p class="answer">${item.answer}</p>` : ""}
    ${item.body}
    ${isBackup ? `<a class="return-link" href="#respaldo">← ${backLabel}</a>` : ""}
  </div></article>`;
}

function questionIndex() {
  const groups = [...new Set(backups.map(item => item.team))];
  return `<article class="slide index" aria-labelledby="slide-title"><div class="slide-inner">
    <div class="index-heading"><h1 id="slide-title">Preguntas de la Junta</h1><a href="#figuras">Figuras del informe ↗</a></div>
    <section class="index-roadmaps" aria-labelledby="roadmaps-title">
      <h2 id="roadmaps-title">Hojas de ruta por proyecto</h2>
      ${projectCards()}
    </section>
    <div class="question-grid">${groups.map(team => `<section class="question-group">
      <h2>${team}</h2>
      <ol>${backups.filter(item => item.team === team).map(item =>
        `<li><a href="#pregunta-${item.id}"><span>${String(backups.indexOf(item) + 1).padStart(2, "0")}</span><span>${item.title}</span></a></li>`
      ).join("")}</ol>
    </section>`).join("")}</div>
    <a class="return-link" href="#${lastMain.id}">← Volver a ${lastMain.label.toLowerCase()}</a>
  </div></article>`;
}

const escapeHtml = text => text.replace(/[&<>"']/g, char => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"})[char]);

function figureIndex() {
  const groups = [...new Set(reportFigures.map(figure => figure.group))];
  return `<article class="slide index" aria-labelledby="slide-title"><div class="slide-inner">
    <div class="index-heading"><h1 id="slide-title">Figuras del informe</h1><a href="#respaldo">← Preguntas y proyectos</a></div>
    <label class="figure-search" for="filtrar-figuras">Buscar figura <input id="filtrar-figuras" type="search" placeholder="Ej. Gantt, modo sombra, A3"></label>
    <div class="figure-groups">${groups.map((group, i) => {
      const figures = reportFigures.filter(figure => figure.group === group);
      return `<details class="figure-group"${i < 2 ? ' open data-default-open' : ""}>
        <summary>${escapeHtml(group)} <span>${figures.length}</span></summary>
        <ul>${figures.map(figure => `<li><a href="#figura-${figure.id}">
          <span class="figure-id">${escapeHtml(figure.label)}</span><span>${escapeHtml(figure.name)}</span><small>p. ${figure.page}</small>
        </a></li>`).join("")}</ul>
      </details>`;
    }).join("")}</div>
    <p id="sin-figuras" role="status" hidden>No hay figuras con ese texto.</p>
  </div></article>`;
}

function figureSlide(figure) {
  const url = `figuras/${figure.file}`;
  return `<article class="slide backup report-figure" aria-labelledby="slide-title"><div class="slide-inner">
    <p class="kicker">${escapeHtml(figure.group)} · Informe p. ${figure.page}</p>
    <h1 id="slide-title">${escapeHtml(figure.name)}</h1>
    <figure class="architecture">
      <div class="drawing"><a href="${url}" target="_blank" rel="noopener" aria-label="Ampliar ${escapeHtml(figure.name)}">
        <img src="${url}" alt="${escapeHtml(figure.name)}"></a></div>
      ${figure.caption ? `<figcaption>${escapeHtml(figure.caption)}</figcaption>` : ""}
    </figure>
    <nav class="backup-links" aria-label="Navegación de la figura">
      <a href="#figuras">← Figuras del informe</a>
      <a href="${url}" target="_blank" rel="noopener">Ampliar imagen ↗</a>
    </nav>
  </div></article>`;
}

function filterFigures(query) {
  const fold = text => text.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
  const term = fold(query.trim());
  let hasResults = false;
  for (const group of stage.querySelectorAll(".figure-group")) {
    let hasMatches = false;
    for (const item of group.querySelectorAll("li")) {
      item.hidden = !fold(item.textContent).includes(term);
      hasMatches ||= !item.hidden;
    }
    group.hidden = !hasMatches;
    group.open = term ? hasMatches : group.hasAttribute("data-default-open");
    hasResults ||= hasMatches;
  }
  stage.querySelector("#sin-figuras").hidden = hasResults;
}

function updateNotes() {
  if (!current) {
    notesContent.innerHTML = "<p>Elija una pregunta para ver la respuesta y su fuente. Las cifras son estimaciones del modelo académico.</p>";
    return;
  }

  const viewpoint = current.viewpoint ? `<h3>Punto de vista</h3><p>${current.viewpoint}</p>` : "";
  const time = current.duration ? `<p><strong>Tiempo sugerido</strong> ${formatTime(current.duration)}</p>` : "";
  const rules = current.rules ? `<h3>Reglas del metamodelo</h3><ul>${current.rules.map(rule => `<li>${rule}</li>`).join("")}</ul>` : "";
  const citations = (current.refs || [`${sources.report} Página ${current.page}.`]).map(ref => `<li>${ref}</li>`).join("");
  notesContent.innerHTML = `${time}${current.notes ? `<p>${current.notes}</p>` : ""}${viewpoint}${rules}
    <h3>Fuentes</h3><ul>${citations}</ul>`;
}

function render({ focus = false } = {}) {
  const route = location.hash.slice(1);
  const indexSequence = route === "respaldo" ? questionSequence : route === "figuras" ? figureSequence : null;
  const selected = slideByRoute.get(route) || {item: mainSlides[0], sequence: mainSequence};
  current = indexSequence ? null : selected.item;
  currentSequence = indexSequence || selected.sequence;
  const isBackup = currentSequence !== mainSequence;
  const isFigure = currentSequence === figureSequence;

  if (!isBackup) lastMain = current;
  if (indexSequence) stage.innerHTML = isFigure ? figureIndex() : questionIndex();
  else if (isFigure) stage.innerHTML = figureSlide(current);
  else stage.innerHTML = slideTemplate(current, isBackup, currentSequence === projectSequence ? "Preguntas y proyectos" : "Todas las preguntas");
  document.title = (current === mainSlides[0] ? "Transformación digital" : current?.name || current?.label || (isFigure ? "Figuras del informe" : "Preguntas")) + " | The Bank";
  chapters.innerHTML = mainSlides.map(item =>
    `<a href="#${item.id}"${current === item ? ' aria-current="step"' : ""}>${item.label}</a>`
  ).join("");
  if (isBackup) questionLink.setAttribute("aria-current", "page");
  else questionLink.removeAttribute("aria-current");

  const position = currentSequence.items.indexOf(current);
  slideCount.textContent = indexSequence
    ? `${currentSequence.items.length} ${isFigure ? "figuras" : "preguntas"}`
    : `${position + 1} / ${currentSequence.items.length}`;
  previous.disabled = Boolean(indexSequence) || (!isBackup && position === 0);
  next.disabled = false;
  updateNotes();
  const scene = stage.querySelector("[data-sequence]");
  if (scene) scene.classList.add("reveal");
  stage.scrollTop = 0;
  window.scrollTo(0, 0);
  if (focus) stage.focus({ preventScroll: true });
}

function goTo(item, sequence) {
  location.hash = sequence.prefix + item.id;
}

function step(delta) {
  if (current === null) {
    if (delta > 0) goTo(currentSequence.items[0], currentSequence);
    return;
  }

  const index = currentSequence.items.indexOf(current) + delta;
  const target = currentSequence.items[index];
  if (target) goTo(target, currentSequence);
  else if (delta > 0 || currentSequence !== mainSequence) location.hash = currentSequence.index;
}

async function toggleFullscreen() {
  if (!document.fullscreenEnabled) return;
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch (error) {
    console.info("Pantalla completa no disponible en este contexto.", error.message);
  }
}

function resizeProjection() {
  const scale = Math.min(stage.clientWidth / 1280, stage.clientHeight / 720);
  stage.style.setProperty("--projection-scale", scale);
}

function updateClock(elapsed) {
  const remaining = deckProgress.max - elapsed;
  deckElapsed.textContent = formatTime(elapsed);
  deckRemainingLabel.firstChild.nodeValue = remaining < 0 ? "Excedido " : "Restante ";
  deckRemaining.textContent = formatTime(Math.abs(remaining));
  deckProgress.value = Math.min(elapsed, deckProgress.max);
  deckClock.toggleAttribute("data-over", remaining < 0);
}

function togglePresentation() {
  const isPresenting = document.body.classList.toggle("is-presenting");
  presentButton.setAttribute("aria-pressed", String(isPresenting));
  presentButton.textContent = isPresenting ? "Salir de exposición" : "Presentar";
  clearInterval(clockId);
  if (isPresenting) {
    const start = performance.now();
    const tick = () => updateClock(Math.floor((performance.now() - start) / 1000));
    tick();
    clockId = setInterval(tick, 250);
    resizeProjection();
  }
  stage.focus({ preventScroll: true });
}

function selectBoardButton(button, selector) {
  for (const choice of stage.querySelectorAll(selector)) {
    choice.setAttribute("aria-pressed", String(choice === button));
  }
}

function replayAnimation(element, className) {
  element.classList.remove(className);
  requestAnimationFrame(() => requestAnimationFrame(() => element.classList.add(className)));
}

previous.addEventListener("click", () => step(-1));
next.addEventListener("click", () => step(1));
presentButton.addEventListener("click", togglePresentation);
new ResizeObserver(resizeProjection).observe(stage);
stage.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.hasAttribute("data-view-notes")) {
    notesDialog.showModal();
  } else if (button.hasAttribute("data-replay")) {
    replayAnimation(stage.querySelector("[data-sequence]"), "reveal");
  } else if (button.dataset.trace) {
    const trace = businessTraces[button.dataset.trace];
    selectBoardButton(button, "[data-trace]");
    for (const node of stage.querySelectorAll("[data-trace-node]")) {
      node.classList.toggle("highlight", trace.active.includes(node.dataset.traceNode));
    }
    for (const edge of stage.querySelectorAll("[data-map-focus]")) {
      edge.classList.toggle("highlight", edge.dataset.mapFocus.split(" ").includes(button.dataset.trace));
    }
    stage.querySelector("#trace-details").innerHTML = traceDetails(trace);
  } else if (button.dataset.wave) {
    selectBoardButton(button, "[data-wave]");
    stage.querySelector("#wave-summary").innerHTML = waveSummary(waveDetails[button.dataset.wave]);
    replayAnimation(stage.querySelector(".cloud-workload"), "flash");
  }
});
stage.addEventListener("input", event => {
  if (event.target.id === "filtrar-figuras") filterFigures(event.target.value);
});
notesButton.addEventListener("click", () => notesDialog.showModal());
fullscreenButton.addEventListener("click", toggleFullscreen);
fullscreenButton.hidden = !document.fullscreenEnabled;
document.addEventListener("fullscreenchange", () => {
  const label = document.fullscreenElement ? "Salir de pantalla completa" : "Pantalla completa";
  fullscreenButton.setAttribute("aria-label", label);
  fullscreenButton.setAttribute("title", label + " (F)");
});
window.addEventListener("hashchange", () => render({ focus: true }));
window.addEventListener("keydown", event => {
  if (event.altKey || event.ctrlKey || event.metaKey || notesDialog.open) return;
  if (event.target.closest("button, a, input, textarea")) return;
  switch (event.key.toLowerCase()) {
    case "arrowleft": case "arrowup": case "pageup":
      event.preventDefault();
      step(-1);
      break;
    case "arrowright": case "arrowdown": case "pagedown": case " ":
      event.preventDefault();
      step(1);
      break;
    case "home":
      event.preventDefault();
      location.hash = mainSlides[0].id;
      break;
    case "b":
      event.preventDefault();
      location.hash = current === null && currentSequence === questionSequence ? lastMain.id : "respaldo";
      break;
    case "n":
      event.preventDefault();
      notesDialog.showModal();
      break;
    case "f":
      event.preventDefault();
      toggleFullscreen();
      break;
    case "p":
      event.preventDefault();
      togglePresentation();
      break;
  }
});

render();
