# 06 — Build Tasks (Agent Checklist)

Ordered, dependency-aware task list. A build agent executes top to bottom. Check the box and
keep going. Do not skip the quality gates at the end.

## Phase 1 — Scaffold & config
- [ ] Initialize Next.js (App Router, TS, Tailwind, ESLint) **inside this repo root** —
      keep existing `README.md`, `LICENSE`, `docs/`, `.git`, the logo PNG, `.github/`.
- [ ] `package.json` scripts: `dev`, `build`, `start`, `lint`. Pin Next 14+, React 18.
- [ ] Add deps: `lucide-react`, `clsx`, `tailwind-merge`.
- [ ] `next.config.mjs` with `output: 'standalone'` (see `05-DEPLOYMENT.md`).
- [ ] `tailwind.config.ts`: map brand tokens (navy/green/bg/surface/border/muted), radius,
      shadow, Inter font family — per `01-DESIGN-SYSTEM.md`.
- [ ] `src/app/globals.css`: `:root` CSS variables, base styles, smooth scroll, focus ring,
      reduced-motion guard.
- [ ] Copy repo-root `Gemini_Generated_Image_5elp0k5elp0k5elp.png` → `public/logo.png`.
      Add a favicon/icon (can derive a simple SVG mark) and an `og-image` (reuse logo).

## Phase 2 — i18n infrastructure
- [ ] `src/i18n/config.ts` (`locales`, `defaultLocale='fr'`).
- [ ] `src/i18n/dictionaries/fr.json` + `en.json` — full copy from `03-CONTENT-AND-I18N.md`.
- [ ] `src/i18n/getDictionary.ts`.
- [ ] `src/middleware.ts`: redirect `/` → `/fr`, locale-less paths → default/detected locale.
- [ ] `src/lib/cn.ts`, `src/lib/nav.ts`.

## Phase 3 — Layout shell
- [ ] `src/app/layout.tsx`: html shell, Inter via `next/font`, global metadata base.
- [ ] `src/app/page.tsx`: redirect to `/fr` (belt-and-suspenders with middleware).
- [ ] `src/app/[locale]/layout.tsx`: `<html lang>`, `generateMetadata` (title/desc/hreflang/OG),
      compose `<Header/> {children} <Footer/>`. `generateStaticParams` for both locales.
- [ ] UI primitives: `Button`, `Card`, `SectionHeading`, `StepItem`, `PhoneMockup`.
- [ ] Layout: `Header`, `MobileMenu`, `LanguageSwitcher`, `Footer` — per `04-COMPONENTS.md`.

## Phase 4 — Sections
- [ ] `Hero`, `About`, `HowToUse`, `Team`, `Download`, `Support`, `Partner`.
- [ ] `src/app/[locale]/page.tsx` composes all sections in order, passing `dict` + `locale`.

## Phase 5 — Container & CI
- [ ] `Containerfile` + `.containerignore` (see `05-DEPLOYMENT.md`).
- [ ] Optional `.github/workflows/ci.yml` (lint + build).
- [ ] Update `README.md` with a "Development" + "Run with Podman" section (append, don't delete
      the existing description).

## Phase 6 — Quality gates (must pass)
- [ ] `npm run lint` → clean.
- [ ] `npm run build` → succeeds, standalone output present.
- [ ] Manual/preview check: `/` redirects to `/fr`; `/en` works; language switcher preserves hash;
      all 6 nav anchors scroll to their sections; mobile menu opens/closes; no console errors.
- [ ] (If podman available) `podman build` + `podman run -p 3000:3000` serves the site.
- [ ] Report what passed/failed honestly in the final summary.

## Definition of done
All Phase 6 boxes checked, the 6 content sections present and localized, design matches
`01-DESIGN-SYSTEM.md`, and the container builds. Summarize results and list any TODOs
(e.g. real App Store / Google Play URLs).
