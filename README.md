# Saisrijith Reddy — Portfolio

A premium, production-ready personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Auto-syncs with GitHub repos every hour via ISR.

---

## How Auto-Update Works

The portfolio fetches your public GitHub repos at build time and revalidates every **60 minutes** using Next.js [Incremental Static Regeneration (ISR)](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration).

- **New repo added?** It appears on the site within 60 minutes of being pushed to GitHub.
- **No manual deploys needed.** Vercel handles revalidation automatically.
- **No webhooks required.** ISR triggers on the next request after the cache expires.

To reduce the lag, change `revalidate` in `app/page.tsx`:
```ts
export const revalidate = 1800; // 30 minutes instead of 60
```

---

## Running Locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Building for Production

```bash
npm run build
npm start
```

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add the optional env var (see below)
4. Deploy — done

Vercel automatically respects `revalidate: 3600` for ISR. No extra config needed.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | Optional | GitHub PAT — increases rate limit from 60 to 5000 req/hr |

Copy `.env.example` → `.env.local` and fill in values.

---

## Where to Customize

### Identity / Copy
Edit `config/site.ts`:
- `siteConfig.name` — your name
- `siteConfig.tagline` — hero one-liner
- `siteConfig.description` — supporting copy
- `siteConfig.about` — about section paragraphs (array)
- `siteConfig.github` / `linkedin` / `email` — social links
- `siteConfig.avatarUrl` — profile photo (defaults to GitHub avatar)

### Featured Projects
In `config/site.ts`, edit `FEATURED_REPOS`:
```ts
export const FEATURED_REPOS = [
  "M.I.R.A",
  "mira-stylist",
  "Pulse_hackathon",
  // add or remove repo names here
];
```

### Override Repo Metadata
In `config/site.ts`, edit `REPO_OVERRIDES` to customize any repo's display name, description, stack, category, or live URL:
```ts
export const REPO_OVERRIDES = {
  "my-new-repo": {
    displayName: "My New Project",
    description: "A better description than the GitHub one.",
    category: "AI Systems",
    stack: ["Python", "OpenAI"],
    liveUrl: "https://myproject.com",
  },
};
```

### Hidden Repos
Add repo names to `HIDDEN_REPOS` in `config/site.ts` to prevent them from appearing on the site:
```ts
export const HIDDEN_REPOS = [
  "my-private-experiment",
  // ...
];
```

### Skills / Stack
Edit the `STACK_GROUPS` array in `components/sections/Stack.tsx`.

### Colors / Typography
Edit `tailwind.config.ts` — all colors, font sizes, and animations are defined there.

---

## Project Structure

```
app/
  layout.tsx          Root layout, metadata, fonts
  page.tsx            Main page — fetches GitHub repos, renders all sections
  globals.css         Base styles, CSS variables

components/
  Navigation.tsx      Sticky nav with scroll-aware background
  Footer.tsx          Footer with social links
  AnimatedSection.tsx Scroll-triggered fade-up animation wrapper
  sections/
    Hero.tsx          Full-viewport hero with photo, name, CTAs
    FeaturedWork.tsx  Editorial cards for pinned projects
    ProjectArchive.tsx Filterable grid of all other projects
    About.tsx         About section with photo treatment
    Stack.tsx         Skills & capabilities grid
    Contact.tsx       Contact links

lib/
  types.ts            TypeScript interfaces
  utils.ts            cn(), formatDate(), truncate()
  github.ts           GitHub API fetch (with ISR revalidation)
  repos.ts            Repo processing pipeline: filter → score → rank → override

config/
  site.ts             All site config, overrides, featured/hidden lists
```

---

## Tech Stack

- **Next.js 14** (App Router, ISR)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Geist** (font)
- **Lucide React** (icons)
- **GitHub REST API v3**
