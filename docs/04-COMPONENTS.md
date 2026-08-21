# 04 — Component Build Spec

Build order follows dependencies: tokens → ui primitives → layout → sections → page.
Every component is TypeScript. User-facing text comes from the dictionary (`dict`) passed
as props — never hard-coded. Icons from `lucide-react`. Colors via Tailwind tokens mapped to
the CSS variables in `01-DESIGN-SYSTEM.md`.

## UI primitives (`src/components/ui/`)

### `Button.tsx`
- Props: `variant?: 'primary' | 'secondary' | 'ghost'`, `as?: 'a' | 'button'`, `href?`, plus native props.
- Primary: green fill, white text, pill, hover darken + lift. Secondary: white + navy border.
  Ghost: transparent navy, used in nav. Always include focus-visible ring (green).

### `Card.tsx`
- White surface, `rounded-[20px]`, border, `--shadow-card`, padding, optional hover lift.
- Slots: `icon?`, `title`, `children` (body).

### `SectionHeading.tsx`
- Props: `eyebrow`, `title`, `lead?`, `align?: 'left' | 'center'`.
- Renders green uppercase eyebrow, h2 navy title, muted lead paragraph. Used by every section.

### `StepItem.tsx`
- Props: `index`, `title`, `body`, `isLast?`. Green numbered circular badge + connecting line,
  title, body. Used by HowToUse.

### `PhoneMockup.tsx`
- Pure-CSS phone frame (navy bezel, rounded, notch) containing a simple on-brand "app screen"
  (green header bar, a few skeleton receipt rows with green check). Decorative; `aria-hidden`.

## Layout (`src/components/layout/`)

### `Header.tsx` (Client Component)
- Sticky top, translucent white + `backdrop-blur`, bottom border on scroll.
- Left: `logo.png` + "Justo" wordmark linking to `#` (top). Center/right: nav links to the 6
  anchors using `dict.nav`. Right: `LanguageSwitcher` + primary `Button` (`dict.nav.cta`) → `#download`.
- Mobile (`< md`): hamburger toggles `MobileMenu`. Track scroll to toggle shadow/border.
- Nav anchors: `#about #how #team #download #support #partner`.

### `MobileMenu.tsx` (Client)
- Full-width sheet/drawer with the nav links, language switcher, CTA. Close button. Locks scroll
  when open. Labels from `dict.a11y`.

### `LanguageSwitcher.tsx` (Client)
- FR/EN toggle. Reads current locale + pathname, swaps the `[locale]` segment, preserves hash.
  `aria-label` from `dict.a11y.switchLang`. Show current locale as active (green).

### `Footer.tsx`
- Navy background, white/muted text. Logo + tagline (`dict.footer.tagline`), repeated nav,
  language switcher, `© {year} Justo. {dict.footer.rights}`. Small links: domains.

## Sections (`src/components/sections/`)
Each is a server component receiving `{ dict, locale }`. Each renders a `<section id=...>`
with `scroll-mt-24` and alternating background.

| Component | id | Content keys | Layout |
|-----------|------|--------------|--------|
| `Hero` | (top) | `hero` | Big h1, subtitle, two CTAs (primary→#download, secondary→#about), `PhoneMockup` beside on desktop. Eyebrow pill. |
| `About` | `about` | `about` | SectionHeading + 4 feature `Card`s in a responsive grid (1/2/4 cols). Each card: lucide icon (Receipt, ShieldCheck, Users, Lock), title, body. |
| `HowToUse` | `how` | `how` | SectionHeading + 3 `StepItem`s (vertical on mobile, horizontal on desktop). |
| `Team` | `team` | `team` | SectionHeading + 3 value `Card`s (icons: Sparkles, ShieldCheck, HeartHandshake). |
| `Download` | `download` | `download` | Centered CTA band on a navy or green-tinted surface. Two store buttons (App Store, Google Play) + note. |
| `Support` | `support` | `support` | SectionHeading + card with mailto button (`support.email`), FAQ link, response-time note. Icons: Mail, LifeBuoy. |
| `Partner` | `partner` | `partner` | SectionHeading + bullet list (green checks) + mailto CTA (`partner.email`). Highlighted card. |

### Store buttons (Download)
- Two pill/secondary buttons with platform icon (use lucide `Apple`/`Smartphone` or inline SVG)
  and the localized label. `href="#"` placeholder + `{/* TODO: real store URL */}`.

## Page composition (`src/app/[locale]/page.tsx`)
```
<main>
  <Hero/>
  <About/>
  <HowToUse/>
  <Team/>
  <Download/>
  <Support/>
  <Partner/>
</main>
```
`[locale]/layout.tsx` wraps with `<Header/>` … `{children}` … `<Footer/>`, sets `<html lang>`,
and exports `generateMetadata` (per-locale title/description + `alternates.languages` hreflang +
Open Graph using `og-image`/logo).

## Helpers (`src/lib/`)
- `cn.ts`: `clsx` + `tailwind-merge` className combiner.
- `nav.ts`: exported array of `{ id, key }` for the 6 sections so Header/Footer stay in sync.
