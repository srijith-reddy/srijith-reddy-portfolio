# Saisrijith Reddy — Portfolio

Personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Auto-syncs with GitHub repos every hour via ISR.

**Live:** https://srijith-reddy.vercel.app

---

## Running Locally

```bash
npm install
npm run dev
```

## Customization

Everything lives in `config/site.ts` — identity copy, featured repos, repo overrides, and hidden repos. Stack pills are in `components/sections/Stack.tsx`.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | Optional | GitHub PAT — raises rate limit from 60 to 5000 req/hr |

## Deploy

Push to GitHub, import at [vercel.com/new](https://vercel.com/new). ISR handles the rest — no webhooks needed.
