# 03 — Content & i18n

All user-facing copy lives here in **French (default)** and **English**. Build agents must
copy these into `src/i18n/dictionaries/fr.json` and `en.json` using the exact key structure
below. Do **not** hard-code strings in components.

> Justo positioning (inferred from the brand: a receipt/checklist mark + green check):
> Justo is a mobile app that helps people **track receipts, manage warranties, and split or
> verify expenses fairly** — "just" expenses, made simple. Keep copy warm, clear, confident.
> If the team later refines the product pitch, only this file changes.

## Key structure (identical in both files)
```jsonc
{
  "meta": { "title": "...", "description": "..." },
  "nav": { "about": "...", "how": "...", "team": "...", "download": "...", "support": "...", "partner": "...", "cta": "..." },
  "hero": { "eyebrow": "...", "title": "...", "subtitle": "...", "ctaPrimary": "...", "ctaSecondary": "..." },
  "about": { "eyebrow": "...", "title": "...", "lead": "...", "features": [ { "title": "...", "body": "..." }, ... ] },
  "how": { "eyebrow": "...", "title": "...", "lead": "...", "steps": [ { "title": "...", "body": "..." }, ... ] },
  "team": { "eyebrow": "...", "title": "...", "lead": "...", "values": [ { "title": "...", "body": "..." }, ... ] },
  "download": { "eyebrow": "...", "title": "...", "lead": "...", "appStore": "...", "googlePlay": "...", "note": "..." },
  "support": { "eyebrow": "...", "title": "...", "lead": "...", "email": "support@justodot.com", "emailLabel": "...", "faqLabel": "...", "responseTime": "..." },
  "partner": { "eyebrow": "...", "title": "...", "lead": "...", "bullets": [ "...", "..." ], "cta": "...", "email": "partners@justodot.com" },
  "footer": { "tagline": "...", "rights": "...", "language": "..." },
  "a11y": { "menu": "...", "close": "...", "switchLang": "..." }
}
```

---

## French (`fr.json`) — DEFAULT

- **meta.title:** `Justo — Vos reçus et dépenses, en toute simplicité`
- **meta.description:** `Justo est l'application mobile qui vous aide à suivre vos reçus, gérer vos garanties et partager vos dépenses équitablement. Simple, clair, juste.`
- **nav:** about `À propos`, how `Comment ça marche`, team `L'équipe`, download `Télécharger`, support `Support`, partner `Devenir partenaire`, cta `Télécharger l'app`
- **hero.eyebrow:** `L'app des dépenses justes`
- **hero.title:** `Vos reçus et vos dépenses, enfin sous contrôle.`
- **hero.subtitle:** `Justo réunit vos reçus, vos garanties et vos dépenses partagées dans une seule application claire et élégante. Gardez chaque preuve d'achat à portée de main.`
- **hero.ctaPrimary:** `Télécharger l'app`
- **hero.ctaSecondary:** `Découvrir Justo`
- **about.eyebrow:** `À propos de l'app`
- **about.title:** `Tout ce qui compte, au même endroit`
- **about.lead:** `Justo numérise vos tickets de caisse et factures, vous alerte avant la fin de vos garanties et rend le partage de dépenses transparent entre amis, en couple ou en colocation.`
- **about.features:**
  1. `Reçus numérisés` — `Scannez ou importez vos reçus. Ils sont classés, recherchables et toujours disponibles.`
  2. `Garanties suivies` — `Justo détecte les durées de garantie et vous prévient avant qu'elles expirent.`
  3. `Dépenses partagées` — `Répartissez les dépenses en quelques secondes et voyez qui doit quoi, sans calcul.`
  4. `Données protégées` — `Vos justificatifs sont chiffrés et vous restez seul propriétaire de vos données.`
- **how.eyebrow:** `Comment ça marche`
- **how.title:** `Trois étapes, pas une de plus`
- **how.lead:** `Commencer avec Justo prend moins d'une minute.`
- **how.steps:**
  1. `Téléchargez et créez votre compte` — `Installez Justo depuis l'App Store ou Google Play et créez votre compte en quelques secondes.`
  2. `Ajoutez vos reçus` — `Prenez en photo un ticket ou importez une facture : Justo extrait les informations clés automatiquement.`
  3. `Suivez et partagez` — `Retrouvez vos garanties, vos statistiques et partagez les dépenses avec vos proches en un geste.`
- **team.eyebrow:** `L'équipe`
- **team.title:** `Une petite équipe, une grande exigence`
- **team.lead:** `Justo est conçu en France par une équipe passionnée de produits simples et utiles, avec une obsession : vous faire gagner du temps et de la sérénité.`
- **team.values:**
  1. `Simplicité` — `Nous retirons tout ce qui n'est pas essentiel pour ne garder que l'utile.`
  2. `Confiance` — `Vos données vous appartiennent. Transparence et sécurité avant tout.`
  3. `Proximité` — `Nous écoutons nos utilisateurs et améliorons Justo chaque semaine.`
- **download.eyebrow:** `Télécharger`
- **download.title:** `Disponible sur iOS et Android`
- **download.lead:** `Téléchargez Justo gratuitement et reprenez le contrôle de vos dépenses dès aujourd'hui.`
- **download.appStore:** `Télécharger sur l'App Store`
- **download.googlePlay:** `Disponible sur Google Play`
- **download.note:** `Gratuit. Sans publicité. Sans engagement.`
- **support.eyebrow:** `Support`
- **support.title:** `Une question ? Nous sommes là`
- **support.lead:** `Notre équipe support répond rapidement et avec le sourire.`
- **support.email:** `support@justodot.com`
- **support.emailLabel:** `Écrivez-nous`
- **support.faqLabel:** `Consulter la FAQ`
- **support.responseTime:** `Réponse sous 24 h ouvrées.`
- **partner.eyebrow:** `Partenaires & fondateurs`
- **partner.title:** `Construisons Justo ensemble`
- **partner.lead:** `Vous êtes commerçant, créateur ou investisseur ? Rejoignez l'aventure Justo en tant que partenaire ou membre fondateur.`
- **partner.bullets:**
  - `Accès anticipé aux nouvelles fonctionnalités`
  - `Visibilité auprès de notre communauté grandissante`
  - `Un accompagnement dédié par notre équipe`
- **partner.cta:** `Devenir partenaire`
- **partner.email:** `partners@justodot.com`
- **footer.tagline:** `Les dépenses justes, simplement.`
- **footer.rights:** `Tous droits réservés.`
- **footer.language:** `Langue`
- **a11y:** menu `Ouvrir le menu`, close `Fermer le menu`, switchLang `Changer de langue`

---

## English (`en.json`)

- **meta.title:** `Justo — Your receipts and expenses, made simple`
- **meta.description:** `Justo is the mobile app that helps you track receipts, manage warranties and split expenses fairly. Simple, clear, just.`
- **nav:** about `About`, how `How it works`, team `Team`, download `Download`, support `Support`, partner `Become a partner`, cta `Download the app`
- **hero.eyebrow:** `The fair-expenses app`
- **hero.title:** `Your receipts and expenses, finally under control.`
- **hero.subtitle:** `Justo brings your receipts, warranties and shared expenses together in one clear, elegant app. Keep every proof of purchase at your fingertips.`
- **hero.ctaPrimary:** `Download the app`
- **hero.ctaSecondary:** `Discover Justo`
- **about.eyebrow:** `About the app`
- **about.title:** `Everything that matters, in one place`
- **about.lead:** `Justo digitizes your receipts and invoices, alerts you before warranties expire, and makes splitting expenses transparent — with friends, partners or flatmates.`
- **about.features:**
  1. `Digitized receipts` — `Scan or import your receipts. They are sorted, searchable and always available.`
  2. `Tracked warranties` — `Justo detects warranty periods and warns you before they expire.`
  3. `Shared expenses` — `Split costs in seconds and see who owes what — no math required.`
  4. `Protected data` — `Your records are encrypted and you stay the sole owner of your data.`
- **how.eyebrow:** `How it works`
- **how.title:** `Three steps, no more`
- **how.lead:** `Getting started with Justo takes less than a minute.`
- **how.steps:**
  1. `Download and create your account` — `Install Justo from the App Store or Google Play and create your account in seconds.`
  2. `Add your receipts` — `Snap a receipt or import an invoice — Justo extracts the key details automatically.`
  3. `Track and share` — `Find your warranties and stats, and split expenses with your circle in one tap.`
- **team.eyebrow:** `The team`
- **team.title:** `A small team, a high bar`
- **team.lead:** `Justo is crafted in France by a team passionate about simple, useful products, with one obsession: saving you time and peace of mind.`
- **team.values:**
  1. `Simplicity` — `We strip away everything non-essential and keep only what's useful.`
  2. `Trust` — `Your data is yours. Transparency and security come first.`
  3. `Closeness` — `We listen to our users and improve Justo every week.`
- **download.eyebrow:** `Download`
- **download.title:** `Available on iOS and Android`
- **download.lead:** `Download Justo for free and take back control of your expenses today.`
- **download.appStore:** `Download on the App Store`
- **download.googlePlay:** `Get it on Google Play`
- **download.note:** `Free. No ads. No commitment.`
- **support.eyebrow:** `Support`
- **support.title:** `Have a question? We're here`
- **support.lead:** `Our support team replies quickly and with a smile.`
- **support.email:** `support@justodot.com`
- **support.emailLabel:** `Email us`
- **support.faqLabel:** `Read the FAQ`
- **support.responseTime:** `Reply within 24 business hours.`
- **partner.eyebrow:** `Partners & founders`
- **partner.title:** `Let's build Justo together`
- **partner.lead:** `Are you a merchant, creator or investor? Join the Justo journey as a partner or founding member.`
- **partner.bullets:**
  - `Early access to new features`
  - `Visibility with our growing community`
  - `Dedicated support from our team`
- **partner.cta:** `Become a partner`
- **partner.email:** `partners@justodot.com`
- **footer.tagline:** `Fair expenses, made simple.`
- **footer.rights:** `All rights reserved.`
- **footer.language:** `Language`
- **a11y:** menu `Open menu`, close `Close menu`, switchLang `Switch language`

---

## Notes for agents
- Store `features`, `steps`, `values`, `bullets` as arrays so components can `.map()`.
- App Store / Google Play links: use placeholder `#` href with a clear TODO comment until
  real store URLs exist. Support/partner emails use `mailto:`.
- Brand name is always `Justo` (capital J, no accent). Domain: `justodot.com` / `justodot.fr`.
