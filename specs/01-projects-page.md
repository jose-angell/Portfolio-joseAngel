# SPEC 01 — Pantalla de proyectos con filtros y modal de detalle

> **Estado:** aprobado
> **Depende de:** —
> **Fecha:** 2026-10-20
> **Objetivo:** Agregar una vista `#/projects` que muestre todos los proyectos del portafolio en un layout bento con filtros por categoría y un modal de detalle por proyecto, siguiendo `design/moreProyects.html`.

## Por qué existe este spec

La app hoy es una sola página con anclas (`#home`, `#about`…) y sin router.
Esta es la primera vista adicional, así que define cómo se navega entre vistas sin romper las anclas ni el despliegue en GitHub Pages.
El enlace `VIEW_ALL_REPOS` de `ProjectGrid` tiene un TODO pendiente que este spec resuelve.

## Alcance

**Entra:**

- Navegación por hash: `#/projects` muestra la pantalla de proyectos; cualquier otro hash (o ninguno) muestra el home actual.
- Nuevo hook `src/hooks/useHashRoute.ts` que devuelve la vista actual (`'home' | 'projects'`) escuchando `hashchange`.
- `App.tsx` renderiza `TopNavBar` + (home actual | `ProjectsPage`) + `Footer`.
- Nueva pantalla `src/components/ProjectsPage.tsx` con:
  - Header tipo terminal: ruta `/root/portfolio/projects`, título grande e intro.
  - Barra de filtros `$ filter_by:` con `ALL / .NET / FRONTEND / SQL / ARCHITECTURE`.
  - Grid bento con tres variantes de tarjeta: `featured` (2 columnas, imagen + texto), `standard` (1 columna con imagen), `horizontal` (2 columnas, sin imagen, ícono grande).
  - Sección CTA final: "Let's Connect" → `#footer` del home; "Ver CV" → abre `src/assets/joseGallardo.pdf` en pestaña nueva.
- Modal de detalle (`src/components/ProjectDetailDialog.tsx`) abierto al hacer click en una tarjeta, con: título, rol, contexto, descripción extendida, highlights, tecnologías, galería de imágenes y enlaces (código / demo) cuando existan.
- Componente `src/components/ui/dialog.tsx` generado con `npx shadcn add dialog` (estilo `base-nova`).
- Data en una nueva clave `projectsPage` de `src/i18n/translations.tsx`, en `es` y `en`, con 4 proyectos: Event Resource Reservation App, WorkshopAdmin, Sistema Vigencia, Proyecto Reintegro.
- Copia de Sistema Vigencia y Proyecto Reintegro redactada a partir de los bullets de NTT DATA en `experience.experiencesItems`; el usuario la revisa en el PR.
- `ProjectGrid`: `VIEW_ALL_REPOS` pasa a ser un `<a href="#/projects">` y se elimina el TODO.
- `TopNavBar`: en la vista `projects` el link "Proyectos" queda activo; los demás links llevan al home en su sección.

**Fuera de alcance (specs futuros):**

- Página individual por proyecto (`#/projects/:slug`).
- Librería de routing (react-router u otra).
- Persistir el filtro seleccionado entre sesiones o en la URL.
- Capturas nuevas para los proyectos laborales; la galería usa solo las imágenes existentes.
- Cambios a la sección Proyectos del home más allá del enlace `VIEW_ALL_REPOS`.
- Animaciones de transición entre vistas.

## Modelo de datos

```ts
// src/i18n/translations.tsx — dentro de translations.es y translations.en
type ProjectCategory = '.NET' | 'FRONTEND' | 'SQL' | 'ARCHITECTURE';
type ProjectVariant = 'featured' | 'standard' | 'horizontal';

interface ProjectDetail {
  id: string;                  // slug estable, igual en es/en: 'event-reservation', 'workshop-admin', 'vigencia', 'reintegro'
  title: string;
  statusLabel: string;         // etiqueta tipo terminal, p.ej. 'SYSTEM_DEPLOYED_V8'
  icon: string;                // nombre de Material Symbols, p.ej. 'terminal', 'build', 'migration', 'data_object'
  variant: ProjectVariant;
  categories: ProjectCategory[];
  summary: string;             // texto corto de la tarjeta
  longDescription: string;     // texto del modal
  highlights: string[];        // 3–5 bullets
  role: string;                // p.ej. 'Backend Developer'
  context: string;             // p.ej. 'Proyecto personal' / 'NTT DATA'
  technologies: string[];
  images: { src: string; alt: string }[]; // [] para los laborales
  sourceCodeUrl?: string;      // ausente en los laborales
  projectUrl?: string;         // ausente o '#' = no se muestra
}

projectsPage: {
  path: '/root/portfolio/projects',
  title: string,               // 'Proyectos' / 'Projects'
  intro: string,
  filterLabel: '$ filter_by:',
  filterAll: string,           // 'TODOS' / 'ALL'
  ctaTitle: string,
  ctaText: string,
  ctaConnect: string,
  ctaCV: string,
  modalHighlights: string,     // encabezados del modal
  modalRole: string,
  modalContext: string,
  viewCode: string,
  viewDemo: string,
  privateLabel: string,        // 'Código privado' / 'Private code'
  items: ProjectDetail[],
}
```

Convenciones:

- Los tipos `ProjectCategory`, `ProjectVariant` y `ProjectDetail` se exportan desde `translations.tsx`, junto a `Language`.
- `items` se lee directamente de `translations[language].projectsPage.items`, como el resto de arrays del proyecto.
- El `id` y el orden de `items` son idénticos en `es` y `en`.
- Asignación inicial: Event Resource Reservation App = `featured`; WorkshopAdmin y Sistema Vigencia = `standard`; Proyecto Reintegro = `horizontal`.
- Una tarjeta `standard` sin imágenes muestra el ícono en lugar de la imagen.
- Categorías: Event Reservation = `.NET, SQL, ARCHITECTURE`; WorkshopAdmin = `.NET, FRONTEND, SQL, ARCHITECTURE`; Vigencia = `.NET, SQL`; Reintegro = `.NET`.
- El filtro es estado local (`useState<ProjectCategory | 'ALL'>`) en `ProjectsPage`; no se persiste.

## Plan de implementación

1. Agregar `projectsPage` a `translations.tsx` (es y en) con los textos de la pantalla, los 4 `items` y los tipos exportados. Verificación: `npm run build` pasa.
2. Crear `src/hooks/useHashRoute.ts`: devuelve `'projects'` si `location.hash` empieza con `#/projects`, si no `'home'`; se actualiza con `hashchange`.
3. Crear `ProjectsPage.tsx` con header terminal y grid de tarjetas (las tres variantes) sin filtros ni modal. Conectarlo en `App.tsx` usando `useHashRoute`. Verificación: abrir `#/projects` muestra la pantalla; `#home` vuelve al home.
4. Al entrar a `#/projects`, hacer `window.scrollTo(0, 0)`. Al volver al home con un hash de sección (`#about`…), hacer `scrollIntoView` de esa sección tras montar el home.
5. Agregar la barra de filtros. `ALL` muestra los 4; cada categoría muestra solo los proyectos que la incluyen. Si un filtro deja una tarjeta `featured`/`horizontal` sola, conserva su variante.
6. Ejecutar `npx shadcn add dialog` y crear `ProjectDetailDialog.tsx`. Click (o Enter) en una tarjeta abre el modal del proyecto; Esc, overlay o botón de cierre lo cierran.
7. Galería dentro del modal: si `images.length > 1`, miniaturas seleccionables; si es 1, una sola imagen; si es 0, el ícono del proyecto. Enlaces de código/demo solo si existen; si no hay `sourceCodeUrl`, mostrar `privateLabel`.
8. Agregar la sección CTA final (Let's Connect → `#footer`, Ver CV → PDF importado desde `src/assets`).
9. `TopNavBar` recibe la vista actual; en `projects` fuerza `activeSection = 'projects'`. `ProjectGrid`: `VIEW_ALL_REPOS` → `<a href="#/projects">` y quitar el TODO.

## Criterios de aceptación

- [ ] `npm run build` y `npm run lint` terminan sin errores.
- [ ] Abrir `<base>/#/projects` directamente (recarga incluida) muestra la pantalla de proyectos.
- [ ] Click en `VIEW_ALL_REPOS` del home navega a `#/projects` y la pantalla empieza arriba.
- [ ] El botón Atrás del navegador desde `#/projects` regresa al home.
- [ ] Desde `#/projects`, click en "Sobre mí" muestra el home desplazado a la sección `about`.
- [ ] En `#/projects` el link "Proyectos" del nav aparece activo.
- [ ] Se muestran 4 proyectos con `ALL`; `FRONTEND` muestra solo WorkshopAdmin; `.NET` muestra los 4.
- [ ] El filtro activo tiene el estilo resaltado del diseño y los demás el estilo neutro.
- [ ] Click en cualquier tarjeta abre el modal con rol, contexto, descripción extendida, highlights y tecnologías de ese proyecto.
- [ ] El modal se cierra con Esc, con click en el overlay y con el botón de cierre; el foco vuelve a la tarjeta.
- [ ] Sistema Vigencia y Proyecto Reintegro no muestran imagen rota ni enlace de código; muestran el ícono y `privateLabel`.
- [ ] Cambiar idioma ES/EN en `#/projects` traduce header, filtros, tarjetas, modal abierto y CTA, sin salir de la vista.
- [ ] "Ver CV" abre el PDF en una pestaña nueva en el build de producción (`npm run preview`).
- [ ] La sección Proyectos del home se ve igual que antes, salvo `VIEW_ALL_REPOS`.
- [ ] A 375px de ancho no hay scroll horizontal y el grid queda en una columna.

## Decisiones

- **Sí:** ruteo por hash (`#/projects`) con un hook propio. Funciona en GitHub Pages sin 404 trick y sin dependencias.
- **No:** react-router. Sobra para una sola vista extra; se reconsidera si llegan páginas por proyecto.
- **No:** estado local sin URL. No permitiría compartir el link ni usar Atrás.
- **Sí:** distinguir rutas por el prefijo `#/`. Así las anclas existentes (`#about`, `#footer`) siguen funcionando.
- **Sí:** nueva clave `projectsPage` separada de `projects.projectItems`. El home no cambia; a cambio se duplica la copia de 2 proyectos.
- **No:** unificar la lista con un flag `featured`. Tocaría el home y queda para otro spec si la duplicación molesta.
- **Sí:** categoría `FRONTEND` en lugar de `REACT`. Los proyectos usan Blazor/Angular; `REACT` quedaría vacío.
- **No:** filtros generados desde `technologies`. Serían ~15 botones.
- **Sí:** modal con shadcn Dialog (`base-nova`). Foco, Esc y overlay resueltos por `@base-ui/react`, ya instalado.
- **No:** página individual por proyecto. Merece su propio spec.
- **Sí:** proyectos laborales sin imagen, con ícono. No existen capturas y no se deben publicar pantallas de clientes.
- **Sí:** galería soportada en la data desde ya (`images[]`), aunque hoy cada proyecto tenga 0 o 1 imagen.
- **Sí:** copia de los proyectos laborales redactada desde la sección Experiencia, revisada por el usuario en el PR.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Al volver al home con `#about`, el navegador intenta hacer scroll antes de que la sección exista | Paso 4: `scrollIntoView` explícito después de montar el home. |
| `useActiveSection` observa ids que no existen en `#/projects` | El nav fuerza `activeSection = 'projects'` en esa vista; el observer simplemente no encuentra elementos. |
| La copia de Vigencia/Reintegro expone información confidencial de NTT DATA | Redactarla solo a partir de lo ya publicado en Experiencia; el usuario la valida en el PR. |
| Divergencia entre `es` y `en` (ids u orden distintos) | El `id` es la key de React y el criterio de idioma valida que el modal abierto se traduce. |
| URLs de imágenes rotas por el `base` `/Portfolio-joseAngel/` | Todas las imágenes y el PDF se importan desde `src/assets`, nunca rutas absolutas. |

## Lo que **no** está en este spec

- Página por proyecto (`#/projects/:slug`).
- Librería de routing.
- Filtro persistido o en la URL.
- Capturas nuevas para proyectos laborales.
- Rediseño de la sección Proyectos del home.
- Transiciones animadas entre vistas.

Cada uno de esos, si llega, va en su propio spec.
