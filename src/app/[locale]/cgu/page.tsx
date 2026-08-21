import type { Metadata } from 'next';
import { isLocale, type Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Justo",
};

const h2 = 'text-xl font-semibold text-navy-800';
const p = 'mt-2 leading-relaxed text-text';

export default async function TermsPage({
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
    <LegalLayout
      locale={locale}
      title="Conditions générales d'utilisation"
      updatedAt="7 août 2026"
    >
      <p className={p}>
        Les présentes conditions générales d&apos;utilisation (« CGU »)
        régissent l&apos;accès et l&apos;utilisation du site justodot.com /
        justodot.fr (le « Site »), édité par Yacqs (voir les{' '}
        <a
          href={`/${locale}/mentions-legales`}
          className="text-green-600 hover:text-green-700"
        >
          mentions légales
        </a>
        ). L&apos;accès au Site vaut acceptation sans réserve des présentes
        CGU.
      </p>

      <section>
        <h2 className={h2}>Objet du Site</h2>
        <p className={p}>
          Le Site est un site vitrine présentant l&apos;application Justo et
          ses fonctionnalités. Il ne permet à ce jour aucune vente en ligne,
          aucune création de compte ni aucune transaction financière. En
          l&apos;absence de vente de produits ou services sur le Site,
          aucunes conditions générales de vente (CGV) ne sont applicables ; le
          cas échéant, des CGV spécifiques seront publiées avant la mise en
          place de toute offre payante.
        </p>
      </section>

      <section>
        <h2 className={h2}>Accès au Site</h2>
        <p className={p}>
          Le Site est accessible gratuitement à tout utilisateur disposant
          d&apos;un accès à Internet. L&apos;éditeur met tout en œuvre pour
          assurer un accès de qualité, sans garantie de continuité ni
          d&apos;absence d&apos;erreur, et peut interrompre ou suspendre
          l&apos;accès au Site, notamment pour des opérations de maintenance.
        </p>
      </section>

      <section>
        <h2 className={h2}>Utilisation du Site</h2>
        <p className={p}>
          L&apos;utilisateur s&apos;engage à faire un usage licite du Site et
          à ne pas porter atteinte à son bon fonctionnement, notamment par
          l&apos;introduction de virus, l&apos;extraction non autorisée de
          contenus ou toute tentative d&apos;accès non autorisé aux systèmes
          de l&apos;éditeur.
        </p>
      </section>

      <section>
        <h2 className={h2}>Propriété intellectuelle</h2>
        <p className={p}>
          Les marques, logos, textes, images et autres contenus du Site sont
          protégés par le droit de la propriété intellectuelle. Toute
          reproduction ou exploitation non autorisée est interdite. Voir les{' '}
          <a
            href={`/${locale}/mentions-legales`}
            className="text-green-600 hover:text-green-700"
          >
            mentions légales
          </a>{' '}
          pour plus de détails.
        </p>
      </section>

      <section>
        <h2 className={h2}>Liens vers l&apos;application Justo</h2>
        <p className={p}>
          Le Site peut proposer des liens vers l&apos;application mobile
          Justo, dont l&apos;utilisation est régie par ses propres conditions
          générales, communiquées lors de l&apos;installation ou de la
          création d&apos;un compte dans l&apos;application.
        </p>
      </section>

      <section>
        <h2 className={h2}>Responsabilité</h2>
        <p className={p}>
          L&apos;éditeur ne saurait être tenu responsable des dommages directs
          ou indirects résultant de l&apos;utilisation du Site ou de
          l&apos;impossibilité d&apos;y accéder, sauf faute prouvée de sa
          part.
        </p>
      </section>

      <section>
        <h2 className={h2}>Données personnelles</h2>
        <p className={p}>
          Le traitement des données personnelles dans le cadre de
          l&apos;utilisation du Site est décrit dans notre{' '}
          <a
            href={`/${locale}/politique-de-confidentialite`}
            className="text-green-600 hover:text-green-700"
          >
            politique de confidentialité
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className={h2}>Droit applicable et juridiction</h2>
        <p className={p}>
          Les présentes CGU sont soumises au droit français. Tout litige
          relatif à leur interprétation ou à leur exécution relève de la
          compétence des tribunaux français, sous réserve des règles
          impératives applicables aux consommateurs.
        </p>
      </section>

      <section>
        <h2 className={h2}>Contact</h2>
        <p className={p}>
          Pour toute question relative aux présentes CGU, vous pouvez écrire à{' '}
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
