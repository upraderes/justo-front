# Justo front
This repository hosts the front-end for Justo app. This is a one page react application that only display information related to the mobile app.

The website is hosted on [https://justodot.com](https://justodot.com) and [https://justodot.fr](https://justodot.fr). the main frontend language is french but the website is also available in english. The website is built using React and Next.js.

The website is container ready and can be deployed using podman.

# Design :
The web site design pattern should match the mobile app design pattern. 

![Logo](Gemini_Generated_Image_5elp0k5elp0k5elp.png)

# Content 
The website needs to display the following information:
- About the app
- How to use the app
- About the team
- How to download the app
- How to contact Justo support
- How to become a Justo partner/founder

# Development

The site is a Next.js 14 (App Router) + TypeScript + Tailwind CSS application. All copy is
localized (French default, English) under `src/i18n/dictionaries/`. The full build
specification lives in [`docs/`](docs/).

```bash
npm install      # install dependencies
npm run dev      # start the dev server on http://localhost:3000 (redirects to /fr)
npm run lint     # ESLint
npm run build    # production build (standalone output)
npm run start    # serve the production build
```

Project layout (see [`docs/02-ARCHITECTURE.md`](docs/02-ARCHITECTURE.md) for the full tree):

- `src/app/[locale]/` — localized route (`/fr`, `/en`); `page.tsx` composes the sections.
- `src/components/sections/` — the seven page sections (Hero, About, HowToUse, Team, Download, Support, Partner).
- `src/components/layout/` — Header, Footer, LanguageSwitcher, MobileMenu.
- `src/components/ui/` — Button, Card, SectionHeading, StepItem, PhoneMockup.
- `src/i18n/` — locale config, dictionaries, and dictionary loader.
- `src/middleware.ts` — redirects `/` and locale-less paths to the default/detected locale.

# Run with Podman

The site is container-ready. The image uses Next.js `standalone` output for a slim runtime.

```bash
podman build -t justo-front:latest -f Containerfile .
podman run --rm -p 3000:3000 justo-front:latest
# → http://localhost:3000
```

See [`docs/05-DEPLOYMENT.md`](docs/05-DEPLOYMENT.md) for details.