# 01 — Design System

Derived from the Justo logo (`Gemini_Generated_Image_5elp0k5elp0k5elp.png`): a dark-navy
receipt/checklist mark with a bright green check, on a soft off-white background. The site
must feel like a modern, friendly fintech/receipts mobile app: rounded, airy, confident.

## Brand palette (CSS custom properties)
Define these on `:root` in `globals.css` and consume them via Tailwind theme tokens.

```css
:root {
  /* Brand */
  --color-navy-900: #122033;   /* deepest brand navy (logo mark) */
  --color-navy-800: #16293D;   /* primary text / headers */
  --color-navy-700: #1F3A53;
  --color-green-600: #16A34A;  /* accent pressed */
  --color-green-500: #22C55E;  /* primary accent (logo check) */
  --color-green-400: #4ADE80;

  /* Neutrals */
  --color-bg: #F1F4F6;         /* page background (logo backdrop) */
  --color-surface: #FFFFFF;    /* cards */
  --color-border: #E2E8F0;
  --color-muted: #64748B;      /* secondary text */
  --color-text: #16293D;       /* default text */

  /* Semantics */
  --radius-card: 20px;
  --radius-pill: 9999px;
  --shadow-card: 0 10px 30px -12px rgba(18, 32, 51, 0.18);
  --shadow-soft: 0 4px 16px -8px rgba(18, 32, 51, 0.15);
}
```

### Usage rules
- **Primary text:** `--color-navy-800`. **Secondary text:** `--color-muted`.
- **Accent / CTAs / active states / icons:** green (`--color-green-500`, hover `--color-green-600`).
- **Page background:** `--color-bg`. **Cards & header:** `--color-surface` white.
- Never put green text on white for body copy (contrast); green is for fills, checks, links-hover.
- Section backgrounds alternate `--color-bg` ↔ `--color-surface` for rhythm.

## Typography
- **Font:** `Inter` (via `next/font/google`), with system fallback. Headings can use
  `Inter` weight 700–800. The logo wordmark is rounded; pairing with Inter is fine.
- Scale (clamp for fluid sizing):
  - Display / hero h1: `clamp(2.25rem, 5vw, 3.75rem)`, weight 800, tracking -0.02em.
  - Section h2: `clamp(1.75rem, 3vw, 2.5rem)`, weight 700.
  - Card h3: `1.25rem`, weight 700.
  - Body: `1rem`–`1.125rem`, line-height 1.6, weight 400.
  - Eyebrow/label: `0.8125rem`, weight 600, uppercase, letter-spacing 0.08em, green.

## Spacing & layout
- Max content width: `1120px`, centered, horizontal padding `1.25rem` (mobile) → `2rem`.
- Vertical section padding: `clamp(4rem, 8vw, 7rem)`.
- Grid gaps: `1.5rem` mobile, `2rem` desktop.
- Corner radius: cards `20px`, buttons/pills `9999px`, images `16px`.

## Components look & feel
- **Buttons**
  - Primary: green fill, white text, pill, `padding 0.875rem 1.5rem`, hover darken + lift (`translateY(-1px)` + `--shadow-soft`).
  - Secondary: white fill, navy text, `1px` navy border, pill.
  - Ghost (nav): transparent, navy text, green underline/indicator on hover/active.
- **Cards:** white surface, `--radius-card`, `--shadow-card`, `1px` `--color-border`,
  internal padding `1.5rem`–`2rem`. Hover: slight lift.
- **Icons:** use a single icon set (`lucide-react`). Accent icons green inside a soft
  rounded `--color-bg` tile (44–56px).
- **Steps (How to use):** numbered green circular badges with connecting line.
- **Header:** sticky, translucent white (`backdrop-blur`), logo left, nav center/right,
  language switcher + Download CTA right. Collapses to a hamburger/sheet on mobile.
- **Footer:** navy background, white/muted text, logo, nav repeat, legal + language switcher.

## Motion
- Subtle only. Fade-up on scroll (`opacity` + `translateY(12px)`), 400ms ease-out, respect
  `prefers-reduced-motion`. Smooth scroll via CSS `scroll-behavior: smooth` + `scroll-mt` on anchors.

## Imagery
- Reuse the brand logo for the header/footer/hero (copy it into `public/`).
- Use abstract app-screen mockups as decorative placeholders (CSS-drawn phone frame is fine —
  no need for real screenshots). Keep them on-brand (navy frame, green accents).

## Accessibility
- Contrast AA: navy-on-bg and white-on-navy both pass. Verify any green-on-white is decorative only.
- Visible focus ring: `2px` solid `--color-green-500` with `2px` offset.
- All interactive elements reachable by keyboard; nav is a real `<nav>` with `<a href="#anchor">`.
