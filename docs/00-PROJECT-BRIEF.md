# 00 — Project Brief

> Source of truth distilled from `README.md`. Every build agent must read this file first.

## What we are building
A **one-page marketing website** for the **Justo** mobile app. The site only presents
information about the mobile app — it is not the app itself and has no authenticated
features.

- **Hosting domains:** https://justodot.com and https://justodot.fr
- **Primary language:** French (`fr`) — default
- **Secondary language:** English (`en`)
- **Stack:** React + **Next.js** (App Router)
- **Deployment:** container-ready, built & run with **Podman** (Docker-compatible `Containerfile`)
- **Design:** must match the Justo **mobile app design pattern** (see `01-DESIGN-SYSTEM.md`).
  The brand logo is `Gemini_Generated_Image_5elp0k5elp0k5elp.png` at the repo root.

## Required content sections (single page, anchored navigation)
The page is a vertical scroll of sections. Each must exist and be reachable from the header nav:

1. **About the app** — what Justo is and the problem it solves.
2. **How to use the app** — step-by-step usage flow.
3. **About the team** — who builds Justo.
4. **Download the app** — App Store / Google Play call-to-action.
5. **Contact support** — how to reach Justo support.
6. **Become a partner / founder** — how to join Justo as a partner or founding member.

Exact copy (FR + EN) lives in `03-CONTENT-AND-I18N.md`.

## Non-negotiable acceptance criteria
- [ ] Single page, smooth-scroll anchored navigation between the 6 sections.
- [ ] Full FR + EN localization with a visible language switcher; FR is the default.
- [ ] Responsive: mobile-first, works from 320px up to large desktop.
- [ ] Visual identity matches the design system (navy + green, rounded, app-like).
- [ ] Production build passes: `npm run build` with no errors.
- [ ] Lint passes: `npm run lint`.
- [ ] Container builds and serves: `podman build` + `podman run` exposes the site.
- [ ] Accessible: semantic landmarks, alt text, keyboard-navigable nav, color contrast AA.
- [ ] Basic SEO: per-locale `<title>`, meta description, Open Graph, `hreflang` alternates.

## Out of scope (do NOT build)
- User accounts, auth, dashboards, or any backend/API beyond a contact mailto/link.
- A CMS. Content is static, stored in i18n message files.
- Blog, payments, analytics dashboards.

## Document map (read in order)
| File | Purpose |
|------|---------|
| `00-PROJECT-BRIEF.md` | This file — what & why. |
| `01-DESIGN-SYSTEM.md` | Colors, type, spacing, components look & feel. |
| `02-ARCHITECTURE.md` | Next.js structure, i18n strategy, file tree. |
| `03-CONTENT-AND-I18N.md` | All copy in FR + EN, message keys. |
| `04-COMPONENTS.md` | Component-by-component build spec. |
| `05-DEPLOYMENT.md` | Containerfile, podman, CI. |
| `06-BUILD-TASKS.md` | Ordered task checklist for the build agents. |
