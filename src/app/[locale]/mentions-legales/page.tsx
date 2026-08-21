import type { Metadata } from 'next';
import { isLocale, type Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Mentions légales — Justo',
};

const h2 = 'text-xl font-semibold text-navy-800';
const p = 'mt-2 leading-relaxed text-text';

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam as Locale;

  return (
    <LegalLayout locale={locale} title="Mentions légales" updatedAt="7 août 2026">
      <section>
        <h2 className={h2}>Éditeur du site</h2>
        <p className={p}>
          Le site Justo (justodot.com / justodot.fr) est édité par :
        </p>
        <p className={p}>
          Yacqs, entrepreneur individuel (micro-entreprise)
          <br />
          SIRET : 522 983 212 00039
          <br />
          Adresse : 219 Impasse de Pelin, 40400 Tartas, France
          <br />
          E-mail : contact@yacqs.com
        </p>
      </section>

      <section>
        <h2 className={h2}>Directeur de la publication</h2>
        <p className={p}>Yacqs, en qualité d&apos;exploitant du site.</p>
      </section>

      <section>
        <h2 className={h2}>Hébergement</h2>
        <p className={p}>
          Le site est hébergé par :
          <br />
          Scaleway SAS
          <br />
          8 rue de la Ville l&apos;Évêque, 75008 Paris, France
          <br />
          RCS Paris 433 115 904
          <br />
          <a
            href="https://www.scaleway.com"
            className="text-green-600 hover:text-green-700"
          >
            www.scaleway.com
          </a>
        </p>
      </section>

      <section>
        <h2 className={h2}>Propriété intellectuelle</h2>
        <p className={p}>
          L&apos;ensemble des contenus présents sur le site (textes, logos,
          visuels, éléments graphiques, marque « Justo ») est protégé par le
          droit de la propriété intellectuelle et reste la propriété exclusive
          de l&apos;éditeur, sauf mention contraire. Toute reproduction,
          représentation ou diffusion, totale ou partielle, sans autorisation
          préalable est interdite.
        </p>
      </section>

      <section>
        <h2 className={h2}>Contact</h2>
        <p className={p}>
          Pour toute question relative au site, vous pouvez nous écrire à
          l&apos;adresse{' '}
          <a
            href="mailto:contact@yacqs.com"
            className="text-green-600 hover:text-green-700"
          >
            contact@yacqs.com
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
