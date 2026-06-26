# 02 — Architecture

## Stack decisions
- **Next.js 14+ App Router**, React 18, **TypeScript**.
- **Tailwind CSS** for styling, with brand tokens mapped from `01-DESIGN-SYSTEM.md`.
- **i18n via App Router `[locale]` segment** (no extra runtime dependency). A small
  dictionary loader serves FR/EN JSON. `fr` is the default locale.
- **`lucide-react`** for icons. **`next/font`** for Inter.
- **Static-first**: the whole site is statically renderable. Use Server Components by default;
  only the header (mobile menu, scroll state) and language switcher are Client Components.
- **Output:** `output: 'standalone'` in `next.config` for a slim container image.

## i18n strategy
- Routes: `/fr` and `/en`. Root `/` redirects to `/fr` (default).
- Locale data: `src/i18n/dictionaries/fr.json` and `en.json` (full copy in `03-CONTENT-AND-I18N.md`).
- `src/i18n/config.ts` exports `locales = ['fr','en']`, `defaultLocale = 'fr'`.
- `src/i18n/getDictionary.ts` async-loads the right JSON.
- `middleware.ts` redirects `/` and locale-less paths to the default or detected locale
  (use `Accept-Language`, fall back to `fr`).
- Language switcher swaps the locale segment while preserving the hash.
- Emit `hreflang` alternates and per-locale metadata via `generateMetadata`.

## File tree (target)
```
justo-front/
├─ Containerfile
├─ .containerignore
├─ next.config.mjs
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
├─ package.json
├─ .eslintrc.json
├─ public/
│  ├─ logo.png                # copied from repo-root Gemini_Generated_Image_*.png
│  ├─ favicon.ico / icon.svg
│  └─ og-image.png            # optional, can reuse logo
├─ src/
│  ├─ middleware.ts
│  ├─ i18n/
│  │  ├─ config.ts
│  │  ├─ getDictionary.ts
│  │  └─ dictionaries/{fr,en}.json
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx           # html shell, fonts
│  │  ├─ page.tsx             # redirects to /fr (or rely on middleware)
│  │  └─ [locale]/
│  │     ├─ layout.tsx        # sets <html lang>, metadata, header/footer
│  │     └─ page.tsx          # composes all sections
│  ├─ components/
│  │  ├─ layout/{Header,Footer,LanguageSwitcher,MobileMenu}.tsx
│  │  ├─ ui/{Button,Card,SectionHeading,StepItem,PhoneMockup}.tsx
│  │  └─ sections/{Hero,About,HowToUse,Team,Download,Support,Partner}.tsx
│  └─ lib/{cn.ts,nav.ts}
└─ docs/ (these specs)
```

## Conventions
- TypeScript strict. Props typed. No `any` unless justified.
- Each section component receives the resolved `dict` (dictionary) + `locale` as props —
  no hard-coded user-facing strings inside components.
- Anchors: section ids are stable and locale-independent: `#about`, `#how`, `#team`,
  `#download`, `#support`, `#partner`. Add `scroll-mt-24` to each section.
- Keep the page a single route; sections are components composed in `[locale]/page.tsx`.
- Shell commands during the build may be prefixed with the repo's snip proxy per
  `.github/copilot-instructions.md` (optional, output-token optimization only).

## Quality gates the build must satisfy
- `npm run lint` clean.
- `npm run build` succeeds with `output: standalone`.
- No console errors at runtime; Lighthouse-friendly (semantic HTML, alt text, meta).
