# SPEC 02 — Rediseño del modal de detalle de proyectos

> **Estado:** implementado
> **Depende de:** SPEC 01
> **Fecha:** 2026-11-10
> **Objetivo:** Rediseñar `ProjectDetailDialog` con el estilo terminal de `design/modalProjects.html` y abrirlo también desde las tarjetas de la sección Proyectos del home.

## Por qué existe este spec

SPEC 01 dejó un modal funcional pero con un diseño simple.
`design/modalProjects.html` define una versión tipo "caso de estudio" con cabecera de terminal, marco de ventana para la imagen, grilla de métricas y footer de acciones.
El diseño trae datos de ejemplo (latencia, cobertura, telemetría) que no existen en el portafolio.
Este spec decide qué partes se implementan con datos reales, cuáles se derivan y cuáles se descartan.

## Alcance

**Entra:**

- Reestilizar `src/components/ProjectDetailDialog.tsx` según el diseño:
  - Contenedor `max-w-4xl`, `max-h-[90vh]`, fondo `surface-container-low`, borde `white/10`, sombra profunda.
  - Cabecera de terminal: punto verde pulsante + `[PROJECT_ID: PRJ-00N] // {statusLabel}`.
  - Badges sobre el título: `context` (estilo terciario) y `role` (estilo primario).
  - Título (`DialogTitle`) y `longDescription` (`DialogDescription`).
  - Marco de ventana para la imagen: barra con ícono `terminal` + `{id}.app` a la izquierda y las `categories` unidas con ` · ` a la derecha; imagen con degradado inferior.
  - Grilla de métricas `stats` (2 columnas en móvil, 4 en `sm`), solo si el proyecto tiene `stats`.
  - Highlights como tarjetas con `>` en terciario, a partir del `string[]` actual.
  - Sección "// Stack técnico" con las `technologies` como badges.
  - Footer: a la izquierda ícono `verified` + `context`; a la derecha botón Cerrar, enlace de código (o `privateLabel`) y enlace de demo si existe.
- Se quita la X de la esquina; el modal se cierra con el botón Cerrar, Esc y overlay.
- Se quita el bloque Rol/Contexto (`<dl>`), porque pasa a los badges.
- Se mantienen las miniaturas: si hay más de 1 imagen, aparecen debajo del marco de ventana.
- Sin imágenes, el marco de ventana muestra el `icon` del proyecto en grande.
- Nuevo campo opcional `stats` en `ProjectDetail`, con valores para los 3 proyectos personales.
- Nuevo campo `detailId` en `projects.projectItems` (home) para enlazar con `projectsPage.items`.
- Las tarjetas del home (`ProjectCard`) se vuelven clickeables y abren el mismo modal.

**Fuera de alcance (specs futuros):**

- Métricas de rendimiento o cobertura (latencia, % de tests); solo se publican datos sostenibles.
- Chips de telemetría sobre la imagen ("Cluster Health", "Connection Pool").
- Highlights con título + detalle (`{title, detail}`).
- Unificar `projects.projectItems` con `projectsPage.items`.
- Página individual por proyecto (`#/projects/:slug`) o abrir el modal desde la URL.
- Animaciones de entrada propias (se usan las del Dialog de shadcn).

## Modelo de datos

```ts
// src/i18n/translations.tsx
export interface ProjectStat {
  label: string;   // 'Arquitectura' / 'Architecture'
  value: string;   // 'Clean Architecture'
}

export interface ProjectDetail {
  // ...campos actuales sin cambios
  stats?: ProjectStat[]; // 0–4 elementos; ausente o vacío = no se muestra la grilla
}

// projects.projectItems (home), en es y en
{
  detailId: string; // 'event-reservation' | 'workshop-admin' | 'procureflow'
  // ...campos actuales sin cambios
}

// projectsPage — cambios de etiquetas, en es y en
modalTechStack: string; // '// Stack técnico' / '// Tech stack'
// se eliminan: modalRole, modalContext
// se mantienen: modalHighlights, viewCode, viewDemo, privateLabel, modalClose
```

Valores propuestos de `stats` (el usuario los revisa en el PR):

| Proyecto | es | en |
| --- | --- | --- |
| Event Resource Reservation App | Backend: .NET 8 · Persistencia: PostgreSQL · Testing: xUnit · Deploy: Docker | Backend: .NET 8 · Persistence: PostgreSQL · Testing: xUnit · Deploy: Docker |
| WorkshopAdmin | Frontend: Blazor WASM · Backend: .NET 10 · Persistencia: PostgreSQL · Arquitectura: Modular por capas | Frontend: Blazor WASM · Backend: .NET 10 · Persistence: PostgreSQL · Architecture: Modular layered |
| ProcureFlow | Arquitectura: Clean Architecture · Frontend: React + TS · Persistencia: PostgreSQL · Testing: xUnit | Architecture: Clean Architecture · Frontend: React + TS · Persistence: PostgreSQL · Testing: xUnit |

Sistema Vigencia y Proyecto Reintegro no llevan `stats`.

Convenciones:

- `PRJ-00N` es la posición del proyecto en `projectsPage.items` + 1, con 3 dígitos (`PRJ-001`…`PRJ-005`).
- `ProjectDetailDialog` recibe `projectIndex: number` además de `project`; quien lo usa calcula el índice sobre `projectsPage.items`.
- `labels` del dialog queda como `{ highlights, techStack, viewCode, viewDemo, privateLabel, close }`.
- `ProjectStat` se exporta desde `translations.tsx` junto a `ProjectDetail`.
- Los colores se toman de los tokens existentes (`primary`, `tertiary`, `outline`, `surface-*`); no se usan hex sueltos del diseño.

## Plan de implementación

1. Agregar `ProjectStat` y `stats?` a `ProjectDetail`, los `stats` de los 3 proyectos personales y `modalTechStack` en `es` y `en`. Verificación: `npm run build` pasa y el modal actual no cambia.
2. Reestilizar el contenedor del dialog: ancho, cabecera de terminal con `PRJ-00N`, footer con `context`, Cerrar, código/`privateLabel` y demo. Quitar la X. Cambiar `labels` (quitar `role`/`context`, agregar `techStack`) y agregar `projectIndex`; actualizar `ProjectsPage`. Quitar `modalRole`/`modalContext` de las traducciones. Verificación: `npm run build`; el modal abre y cierra desde `#/projects`.
3. Reestilizar el cuerpo: badges `context`/`role`, título, descripción y marco de ventana con imagen, ícono de respaldo y miniaturas. Quitar el `<dl>` Rol/Contexto.
4. Agregar la grilla de `stats`, los highlights como tarjetas y la sección "Stack técnico".
5. Agregar `detailId` a `projects.projectItems` en `es` y `en`. `ProjectCard` recibe `onSelect?`; con él, la tarjeta tiene `role="button"`, `tabIndex={0}`, abre con click/Enter/Espacio y muestra `cursor-pointer` + anillo de foco. Los enlaces internos hacen `stopPropagation` en click y keydown. Cambiar el `Button` que envuelve el `<a>` de "Source Code" a `Button render={<a … />}` para no anidar un `<button>`.
6. En `ProjectGrid`, guardar `selectedId` en estado, buscar el detalle en `translations[language].projectsPage.items` y renderizar `ProjectDetailDialog`. Si `detailId` no existe en los items, la tarjeta no recibe `onSelect`.

## Criterios de aceptación

- [x] `npm run build` y `npm run lint` terminan sin errores.
- [x] El modal abierto desde `#/projects` muestra la cabecera `[PROJECT_ID: PRJ-00N] // {statusLabel}` con el número correcto para cada proyecto.
- [x] El modal muestra los badges `context` y `role`, el título y la descripción extendida.
- [x] La barra del marco de ventana muestra `{id}.app` y las categorías del proyecto.
- [x] Event Reservation, WorkshopAdmin y ProcureFlow muestran la grilla de 4 métricas; Vigencia y Reintegro no la muestran.
- [x] Vigencia y Reintegro muestran el ícono en el marco de ventana, sin imagen rota, y `privateLabel` en el footer.
- [x] Los highlights se ven como tarjetas con `>` y el stack técnico como badges.
- [x] No hay X en la esquina; el modal se cierra con Cerrar, Esc y click en el overlay.
- [x] Al cerrar, el foco vuelve a la tarjeta que lo abrió (en `#/projects` y en el home).
- [x] "Ver código" abre el repositorio en una pestaña nueva; "Ver demo" solo aparece si `projectUrl` existe y no es `#`.
- [x] En el home, click o Enter sobre una tarjeta abre el modal del proyecto correspondiente.
- [x] En el home, click en "Source Code" o en `open_in_new` abre el enlace y **no** abre el modal.
- [x] Con el modal abierto, cambiar ES/EN traduce todo su contenido, incluidas las métricas.
- [x] A 375px de ancho el modal no tiene scroll horizontal, la grilla de métricas queda en 2 columnas y el footer apila sus elementos.
- [x] Con contenido largo (ProcureFlow) el cuerpo hace scroll y la cabecera y el footer quedan fijos.
- [x] No aparecen las claves `modalRole` ni `modalContext` en `translations.tsx`.

## Decisiones

- **Sí:** campo opcional `stats` con datos reales. Mantiene la grilla del diseño sin publicar métricas inventadas.
- **No:** latencia, cobertura y telemetría del diseño. Son valores de ejemplo que no se pueden sostener en una entrevista.
- **No:** derivar la grilla de Rol/Contexto. Repetiría lo que ya está en los badges.
- **Sí:** mantener `highlights: string[]`. Se usa el estilo de tarjeta sin reescribir la copia en dos idiomas.
- **No:** highlights `{title, detail}`. Obligaría a reescribir los 5 proyectos en `es` y `en`.
- **Sí:** adornos de terminal derivados de `id`, `statusLabel`, `categories`, `context` y `role`. Cero copia nueva por proyecto.
- **No:** campos nuevos para título de ventana, badges o chips. Más copia que mantener por un adorno.
- **Sí:** footer como el diseño, sin X. Cerrar queda junto a las acciones; Esc y overlay siguen funcionando.
- **Sí:** quitar el bloque Rol/Contexto y sus etiquetas. Esa información ya está en los badges y en el footer.
- **Sí:** mantener las miniaturas. La galería de SPEC 01 sigue sirviendo si un proyecto suma imágenes.
- **Sí:** abrir el modal desde el home con toda la tarjeta clickeable, igual que en `#/projects`.
- **No:** botón "Ver detalles" separado. Se prefirió la consistencia con `#/projects`.
- **Sí:** `detailId` en `projects.projectItems`. Enlaza el home con el detalle sin tocar el resto de la data.
- **No:** unificar las dos listas de proyectos. Cambia el home más de lo necesario; queda para otro spec.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Enlaces dentro de una tarjeta con `role="button"` (interactivos anidados) | `stopPropagation` en click y keydown de los enlaces; el `Button` de "Source Code" se renderiza como `<a>` y no como `<button>`. |
| `detailId` del home sin item correspondiente en `projectsPage.items` | La tarjeta no recibe `onSelect` y se comporta como hoy. |
| Divergencia de `stats` entre `es` y `en` | Mismo número de elementos y mismo orden; el criterio de cambio de idioma lo valida. |
| El modal `max-w-4xl` desborda en pantallas bajas | `max-h-[90vh]` con cabecera y footer fijos y cuerpo con `overflow-y-auto`. |
| El dialog de shadcn trae transform/posición propios que chocan con el layout | Se conservan las clases de posicionamiento que ya funcionan en el `DialogContent` actual. |

## Lo que **no** está en este spec

- Métricas inventadas de rendimiento o cobertura.
- Chips de telemetría sobre la imagen.
- Highlights con título y detalle.
- Unificación de la data del home y de `#/projects`.
- Página por proyecto o modal abierto desde la URL.
- Animaciones de entrada propias.

Cada uno de esos, si llega, va en su propio spec.
