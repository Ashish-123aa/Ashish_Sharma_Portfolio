# Ashish Sharma — Portfolio

A modern, responsive developer portfolio built with React, TypeScript, Tailwind CSS
and Vite. All content is sourced directly from Ashish Sharma's resume
(`public/Ashish_Sharma_Resume.pdf`) — see `src/data/resume.ts` for the single
source-of-truth data model that drives every section.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

## Building for production

```bash
npm run build
npm run preview   # serve the production build locally to check it
```

The production build is written to `dist/`. Deploy that folder to any static
host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

## Project structure

```
src/
  components/     UI components (Navbar, Hero, ProjectCard, etc.)
  data/resume.ts  All resume content — edit this file to update the site
  hooks/          Theme, active-section, and scroll-reveal hooks
  types.ts        TypeScript interfaces for the resume data shape
public/
  Ashish_Sharma_Resume.pdf   Powers the "View Resume" / "Download Resume" buttons
  favicon.svg
```

## Updating content

Everything the site displays — name, experience, projects, skills, education,
certifications, contact links — lives in `src/data/resume.ts`. Edit that file
and the whole site updates; no other file needs to change for a content edit.

To swap in a new resume PDF, replace `public/Ashish_Sharma_Resume.pdf` and
keep the same filename (or update `resumeFile` in `src/data/resume.ts`).

## Design notes

- Dark mode is the default; light mode is available via the toggle in the
  navbar (persisted to `localStorage`).
- Color system: deep navy base with a dual teal/amber accent (see
  `tailwind.config.js`).
- Type system: Sora (display), Inter (body), JetBrains Mono (technical labels
  and code-style accents), loaded from Google Fonts in `index.html`.
- The hero's animated diagram (`src/components/StackDiagram.tsx`) visualizes
  the actual stack used across the projects below it — frontend, backend,
  database — with a subtle traveling-pulse animation.
- All scroll/hover animations respect `prefers-reduced-motion`.
