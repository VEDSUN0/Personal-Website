# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal site for Vedant Sundar, built with **Vite + React 19 + TypeScript**. It is a React rebuild of an earlier hand-authored `Vedant Sundar Site.dc.html` (a custom "DC" component format). The design is neo-brutalist: hard box-shadows, thick borders, and three Google fonts (Archivo / JetBrains Mono / Newsreader).

## Commands

```bash
npm install       # first-time setup (Node 18+ required)
npm run dev       # start Vite dev server with HMR (http://localhost:5173)
npm run build     # type-check (tsc -b) then production build to dist/
npm run preview   # serve the production build locally
npm run typecheck # type-check only, no emit
```

There is no test suite or linter configured yet.

## Architecture

The whole site is one scrolling page. Data and behavior are deliberately separated from markup:

- **`src/theme.ts`** — the heart of the theming system. Defines the `night` and `day` themes as maps of CSS custom properties, and the `useTheme(accent?)` hook that applies those properties to `<html>` at runtime, persists the choice to `localStorage` under `vs-theme`, and re-applies on mount. A custom `accent` only overrides night mode (matching the original). Also exports `scrollToId(id)` for the smooth-scroll nav. **Theme colors live here, not in CSS** — `styles.css` only holds night-mode fallbacks for first paint.

- **`src/content.ts`** — all editable copy: social `links`, `navItems`, `projects`, `posts`. Edit text and add projects/blog entries here; components map over these arrays. No hardcoded content strings in components.

- **`src/App.tsx`** — composes the sections and holds site-level `config` (`accent`, `showVisitor`) that were editable props in the original `.dc.html`. Owns the `useTheme` call and passes `theme`/`toggle` down to the footer.

- **`src/components/`** — one component per section (`Hero`, `Now`, `Projects`, `Blog`, `About`, `Footer`). Presentational; they pull from `content.ts` and use CSS classes only.

- **`src/styles.css`** — all styling via semantic class names (`.hero`, `.section`, `.card`, `.btn`, ...) driven by the theme CSS variables. Responsive breakpoints at 860px (hero + projects grid collapse to one column) and 560px (footer stacks).

### Data flow for theming

`App` calls `useTheme(config.accent)` → hook writes CSS vars onto `<html>` and returns `{ theme, toggle }` → every component reads colors purely through `var(--*)`, so a theme switch needs no re-render of section components; only the footer toggle button re-renders to swap its label.

## Conventions

- To add a nav section: add an entry to `navItems` in `content.ts`, then add a matching `<section id="...">` component. The nav's alternating panel background and accent labels come from the item's index/`accent` flag.
- When adding colors, add the variable to **both** themes in `theme.ts` and reference it as `var(--name)` — never hardcode hex values in components or CSS rules.
- The original source of truth for design/copy is `../Vedant Sundar Site.dc.html` (one directory up).
