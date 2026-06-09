# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install      # install dependencies
pnpm dev          # start dev server at localhost:3000
pnpm build        # production build
pnpm lint         # ESLint
```

No test suite configured.

## Architecture

This is a **single-page Next.js app** (App Router). All navigation is client-side — there are no separate routes. The app renders one page at a time via a `currentPage` state in `app/page.tsx`, which maps a `PageId` to the corresponding page component.

### Content

All copy, image paths, contact details, schedule, and nav labels live in **`lib/site-content.ts`**. This is the only file that needs editing for content changes — page components read from it directly.

### Images

Real photos are in `public/images/` as `.jpg`, `.jpeg`, or `.webp`. The `welcome-detail` image is still the AI-generated placeholder (`.png`).

Large images (`hero-yoga-nature.jpg`, `instructor-portrait.jpg`) should be optimised with squoosh.app before deploying — they were reduced from ~14 MB and ~10 MB originals.

### Forms

The contact form in `components/pages/contatti-page.tsx` submits to Formspree (`https://formspree.io/f/mvznqper`). The form endpoint is hardcoded in the component.

## Deployment

The project is linked to Vercel (`.vercel/project.json`). Pushes to `main` trigger automatic deploys.

**Important:** the git commit email must match the GitHub account email (`teresa.tanzi@yahoo.it`). If it doesn't, Vercel blocks the deploy with "commit email could not be matched to a Git account". Set it with:

```bash
git config user.email "teresa.tanzi@yahoo.it"
```
