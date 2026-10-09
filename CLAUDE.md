# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (output in `dist/`)
- `npm run lint` — ESLint
- `npm run preview` — serve the production build

There is no test runner configured.

## Architecture

Single-page bilingual (es/en) portfolio: React 19 + TypeScript + Vite 8 + Tailwind CSS v4, with the React Compiler enabled through `@rolldown/plugin-babel` (`vite.config.ts`). Don't add manual `useMemo`/`useCallback` for optimization.

- `src/App.tsx` stacks the sections in order: TopNavBar, Hero, About, Skills, Experience, ProjectGrid, Footer (all in `src/components/`). Section `id`s (`home`, `about`, `skills`, `experience`, `projects`) must match the ids in the `topbar.links` translation entry; `src/hooks/useActiveSection.ts` uses them to highlight the nav.
- **i18n is hand-rolled**, with no library. `src/i18n/translations.tsx` holds one big `translations` object keyed by language (`es`, `en`), then by section. It is a `.tsx` file because some values are JSX (e.g. `<strong>` inside `intro`) and it also imports project images from `src/assets`. `LanguageContext` exposes `t(section, key)`, `language` and `toggleLanguage`. `t` returns strings or JSX, and falls back to the key. Array content (nav links, experience items, projects) is read directly from `translations[language]`. When adding or changing copy, update **both** `es` and `en`.
- UI primitives are shadcn (`base-nova` style, built on `@base-ui/react`, lucide icons) in `src/components/ui`. Use `cn` from `@/lib/utils`. Path alias `@` maps to `src`. Tailwind theme/CSS variables live in `src/App.css` (see `components.json`).
- The CV PDF is `src/assets/joseGallardo.pdf`.

## Deployment

Vite `base` is `/Portfolio-joseAngel/` (GitHub Pages subpath), so root-absolute asset URLs break; use imports or `import.meta.env.BASE_URL`. Pushing to `main` triggers `.github/workflows` to run `npm run build` and deploy `dist/` to GitHub Pages.
