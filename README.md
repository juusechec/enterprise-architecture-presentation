# The Bank · Presentación para Junta Directiva

Proyecto del Grupo 04 de Arquitectura Empresarial de la Universidad de los Andes. El equipo representa al área interna de arquitectura y presenta una decisión de inversión ante la Junta.

[Código fuente del sitio](./site/) · [Diagramas editables de draw.io](./drawio/) · [Descargar la versión aprobada](./The-Bank-Junta-web.zip)

## Decisión que defendemos

Autorizar **USD 5,77 millones** para ejecutar cuatro proyectos entre 2027 y 2030, sujetos a tres acuerdos comerciales. El modelo estima una recuperación de **2,57 años** si se concretan los acuerdos. Si falta alguno, la propuesta es iniciar P01 y P04 y reevaluar P02 y P03.

| Proyecto | Alcance |
| --- | --- |
| P01 · Datos y gobierno | Maestro de Cliente, catálogo de Servicio y adopción de fuentes oficiales. |
| P02 · Originación y riesgo | Orquestación, controles de vigencia y evaluación de IA bajo supervisión humana. |
| P03 · Vinculación accesible | Oferta, aceptación y continuidad del trámite entre autoservicio y asesoría. |
| P04 · Infraestructura híbrida | Migrar cargas elegibles por oleadas y mantener el core productivo local. |

Las cifras corresponden al caso académico y al Business Case V3. Los ahorros son estimaciones sujetas a los acuerdos y a la validación de beneficios.

## Criterios del equipo

- La primera pantalla deja lista la votación. El recorrido principal sigue el embudo directivo y el guion dura **8:35**. El cronómetro de **Presentar** mide los **10:00** disponibles.
- El diagnóstico muestra una tarjeta fabricada antes de que el cliente acepte. El footprint AS-IS muestra dónde ocurre en el flujo de sistemas. El blueprint TO-BE pone la aceptación antes de la apertura y permite seguir cada motivación hasta el cambio operativo, los sistemas que habilitan el cambio y el indicador.
- En arquitectura, cada tipo de elemento tiene una representación reconocible. Las flechas llevan verbos que aclaran el intercambio. El rojo marca brechas del AS-IS. En el TO-BE las etiquetas distinguen lo propuesto, lo que se adapta y lo que se conserva. La paleta azul y amarilla suave se eligió para proyectar sobre un fondo claro.
- Cada pantalla de respaldo contesta una pregunta. Desde **Preguntas** se llega a las hojas de ruta por proyecto y a las figuras originales del informe. Los asuntos técnicos pueden defenderse con esas vistas durante las preguntas.
- Las referencias de diseño fueron la [presentación HTML del Grupo 03](https://presentacion-junta.vercel.app/), [Frontend Slides](https://github.com/zarazhangrui/frontend-slides) y [The Physics of Notations, de Daniel Moody](https://doi.org/10.1109/TSE.2009.67).

## Cómo abrirla y editarla

Abre [`site/index.html`](./site/index.html) en el navegador desde una copia local del repositorio. La presentación funciona sin conexión. **Presentar** activa la vista 16:9 y el cronómetro. Las flechas cambian de pantalla, **B** abre Preguntas y **N** abre las notas.

| Archivo dentro de `site/` | Cuándo editarlo |
| --- | --- |
| `index.html` | Encabezado, controles visibles y carga de archivos. |
| `relato.js` | Texto, tiempos y composición de las ocho pantallas principales. |
| `mapa-arquitectura.js` | Nodos, relaciones y etiquetas de los diagramas AS-IS y TO-BE. |
| `contenido.js` | Preguntas y respuestas de respaldo, nombres de proyectos y fuentes. |
| `hojas-de-ruta.js` | Hitos, dependencias y criterios de aceptación por proyecto. |
| `figuras-informe.js` y `figuras/` | Índice, páginas de origen e imágenes del informe. |
| `junta.css` y `estilos.css` | Paleta, presentación, responsividad y estilos del respaldo. |
| `presentacion.js` | Navegación, interacciones y cronómetro. |

Antes de cambiar un dato o diagrama, consulta el informe, EA-Xpress y el Business Case V3 de la entrega del Grupo 04. Las secciones **5.1–5.3** y **6.6–6.10** del informe sustentan las vistas de arquitectura. La **8.8** sustenta los escenarios de inversión y la **9** contiene el cronograma y las entregas semestrales. Los originales editables están en [`drawio/`](./drawio/). Si cambias un diagrama de aplicaciones, revisa su versión interactiva en `site/mapa-arquitectura.js` y actualiza el SVG correspondiente en `site/diagramas/`.

Para actualizar la publicación, revisa la navegación, los dos estados de arquitectura y el modo **Presentar**. Empaqueta el contenido de `site/` con `index.html` en la raíz del ZIP junto con las carpetas de recursos. El ZIP del repositorio corresponde a la versión aprobada del 25 de noviembre de 2026.
