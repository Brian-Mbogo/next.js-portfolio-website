# Next.js Portfolio Website

My personal portfolio site built with Next.js (App Router), React 19, TypeScript, and Tailwind CSS v4. It’s fast, responsive, and easy to customize.

## What’s inside

- Pages: Home, About, Projects (with dynamic `[slug]` pages), Contact
- Server-rendered home page (uses `connection()` for request-time rendering)
- Contact form powered by a Server Action (`app/contact/actions.ts`)
- Optimized images via `next/image` (assets in `public/`)

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

Note: `next.config.ts` enables `experimental.workerThreads` to avoid `child_process` workers on some Windows environments, and it skips Next.js’ built-in type-check step during `next build`. Run `npm.cmd run typecheck` in CI.

## Deploy

Deploy on Vercel:

1. Push this repo to GitHub
2. Import the project in Vercel
3. Build command: `npm run build`
4. Output: handled automatically by Next.js
