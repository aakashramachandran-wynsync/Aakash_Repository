# Aakash R — Portfolio

Plain Vite + React (JavaScript) + Tailwind CSS v4 build of the portfolio.
Converted from the original TypeScript + TanStack Start version — same design,
same content, no TypeScript, no SSR framework, just a client-rendered SPA.

## Stack

- Vite 6
- React 19 (JSX, no TypeScript)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- lucide-react (icons)

## Setup

```bash
npm install
npm run dev       # start dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Structure

```
src/
  assets/                 images
  components/portfolio/   Navigation, sections (Hero/About/Skills/...), Reveal, SectionHeading
  hooks/use-reveal.js      IntersectionObserver-based scroll reveal hook
  lib/utils.js             cn() class-merge helper
  App.jsx                  page layout
  main.jsx                 app entry
  styles.css                Tailwind v4 theme + custom design tokens
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).
