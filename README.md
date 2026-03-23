# Next.js Portfolio Website

A multi-page portfolio built with Next.js (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Features

- Page-based routing: Home, About, Projects (with dynamic `[slug]` pages), Contact
- Server-side rendering: Home uses `connection()` (request-time render)
- Server Actions: Contact form submits to a server action (`app/contact/actions.ts`)
- Optimized images: Uses `next/image` with local images in `public/`

## Routes

- `/` — Home (`app/page.tsx`)
- `/about` — About (`app/about/page.tsx`)
- `/projects` — Projects (`app/projects/page.tsx`)
- `/projects/[slug]` — Project details (`app/projects/[slug]/page.tsx`)
- `/contact` — Contact (`app/contact/page.tsx`)

## Project Structure

- `app/` — Pages, layouts, and route files
- `components/` — Shared UI components
- `styles/` — CSS modules used by components/pages
- `lib/` — Data and helpers (`lib/site.ts`, `lib/projects.ts`)
- `public/` — Images and static assets

## Customize Content

- Update name, links, and email in `lib/site.ts`
- Update project list in `lib/projects.ts`
- Replace images in `public/profile.svg` and `public/projects/*.svg`

## Run Locally (Windows PowerShell)

```bash
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

Note: `next.config.ts` enables `experimental.workerThreads` to avoid `child_process` workers on some Windows environments, and skips Next’s built-in type-check step during `next build`. Run `npm.cmd run typecheck` in CI.

## Deploy

Deploy on Vercel:

1. Push this repo to GitHub
2. Import the project in Vercel
3. Build command: `npm run build`
4. Output: handled automatically by Next.js
