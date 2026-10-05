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

I contenuti (testi, immagini, orari, contatti) vengono **dal database Neon** (tabella `site_content`) e si modificano da `/backoffice`. `lib/site-content.ts` contiene i contenuti di **partenza e di riserva**: li usa il sito se `DATABASE_URL` manca, il DB è vuoto o non risponde. Attenzione: una volta che Cecilia ha salvato dal backoffice, modificare `site-content.ts` NON cambia più il sito, vince il DB.

- `app/page.tsx` (server) legge i contenuti con `lib/content.ts` e li passa a `components/site-app.tsx` (client), che li distribuisce con `ContentProvider`. I componenti li leggono con `useContent()`, non importano `siteContent`. Il menu (`nav`) resta statico.
- `lib/content-schema.ts` valida tutto ciò che si salva/legge: la forma è quella di `siteContent`. **Se aggiungi un campo a una voce di una lista, aggiungilo anche in `ARRAY_ITEM_TEMPLATES`**, altrimenti viene scartato al salvataggio.
- Il backoffice (`components/backoffice/editor.tsx`) genera i form dalla struttura dei contenuti: nuovi campi compaiono da soli; le etichette italiane sono in `LABELS`.

### Backoffice

- `/backoffice` (protetto da `proxy.ts` + controllo in ogni azione/route): login con `ADMIN_USERNAME` + `ADMIN_PASSWORD_HASH`, sessione JWT in cookie (`SESSION_SECRET`), tentativi limitati per IP (`login_attempts`).
- Foto: caricate dal browser su Vercel Blob (`/api/backoffice/upload`), ridimensionate lato client (`lib/upload-image.ts`). Le foto eliminate dal sito restano nello store Blob.
- Setup: variabili in `.env.example`; `pnpm db:setup` crea le tabelle; `pnpm admin:password` imposta la password su Vercel.
- Salvare da `/backoffice` chiama `revalidatePath('/')`, quindi la home statica si rigenera.

### Images

Le foto di partenza sono in `public/images/` (quelle caricate dal backoffice stanno su Vercel Blob). Real photos are in `public/images/` as `.jpg`, `.jpeg`, or `.webp`. The `welcome-detail` image is still the AI-generated placeholder (`.png`).

Large images (`hero-yoga-nature.jpg`, `instructor-portrait.jpg`) should be optimised with squoosh.app before deploying — they were reduced from ~14 MB and ~10 MB originals.

### Forms

The contact form in `components/pages/contatti-page.tsx` submits to Formspree (`https://formspree.io/f/mvznqper`). The form endpoint is hardcoded in the component.

## Deployment

The project is linked to Vercel (`.vercel/project.json`). Pushes to `main` trigger automatic deploys.

**Important:** the git commit email must match the GitHub account email (`teresa.tanzi@yahoo.it`). If it doesn't, Vercel blocks the deploy with "commit email could not be matched to a Git account". Set it with:

```bash
git config user.email "teresa.tanzi@yahoo.it"
```
