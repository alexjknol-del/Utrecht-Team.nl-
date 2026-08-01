# Utrecht-Team.nl

Onafhankelijk inspiratieplatform voor teambuilding en groepsuitjes in Utrecht. Gebouwd met [Astro](https://astro.build), statisch gegenereerd, gehost op Cloudflare Pages.

## Ontwikkelen

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

De output staat in `dist/` en is volledig statisch (geen server nodig).

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node-versie: 18 of hoger

## Content beheren

- Activiteiten en gelegenheden staan in `src/data/site.ts`.
- Nieuwsartikelen zijn Markdown-bestanden in `src/content/nieuws/`. Nieuw artikel toevoegen = nieuw `.md`-bestand met dezelfde frontmatter-velden als de bestaande artikelen.
- Afbeeldingen staan in `public/images/`.

## Structuur

```
src/
  components/     herbruikbare UI-componenten
  content/nieuws/ blogartikelen (content collection)
  data/site.ts    activiteiten, gelegenheden, navigatie
  layouts/        BaseLayout met SEO-meta
  pages/          routes (activiteiten, uitjes-voor, nieuws, over, contact, legal)
public/
  images/         statische afbeeldingen, favicon, robots.txt
```
