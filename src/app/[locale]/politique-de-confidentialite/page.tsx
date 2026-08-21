import type { Metadata } from 'next';
import { isLocale, type Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Justo',
};

const h2 = 'text-xl font-semibold text-navy-800';
const p = 'mt-2 leading-relaxed text-text';
const ul = 'mt-2 list-disc space-y-1 pl-5 leading-relaxed text-text';

export default async function PrivacyPolicyPage({
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
      title="Politique de confidentialité"
      updatedAt="7 août 2026"
    >
      <section>
        <h2 className={h2}>Responsable du traitement</h2>
        <p className={p}>
          Le responsable du traitement des données du site justodot.com /
          justodot.fr est Yacqs, entrepreneur individuel, SIRET 522 983 212
          00039, 219 Impasse de Pelin, 40400 Tartas, France — contact@yacqs.com.
        </p>
      </section>

      <section>
        <h2 className={h2}>Données collectées</h2>
        <p className={p}>
          Le site vitrine ne comporte ni formulaire en ligne, ni compte
          utilisateur, ni outil d&apos;analyse d&apos;audience (cookies de
          mesure ou de suivi). Les seules données personnelles traitées sont
          celles que vous nous transmettez volontairement en nous contactant
          par e-mail (voir ci-dessous), ainsi que les données techniques
          strictement nécessaires au fonctionnement du site (par exemple les
          journaux de connexion conservés par notre hébergeur, Scaleway SAS).
        </p>
        <p className={p}>
          Si cette situation évolue (ajout d&apos;un formulaire de contact,
          d&apos;une newsletter ou d&apos;outils de mesure d&apos;audience),
          cette politique sera mise à jour en conséquence avant toute mise en
          service.
        </p>
      </section>

      <section>
        <h2 className={h2}>Contact par e-mail</h2>
        <p className={p}>
          Le site propose des liens de contact (support et partenariats) qui
          ouvrent directement votre messagerie ; il ne s&apos;agit pas de
          formulaires transmettant des données à nos serveurs. Lorsque vous
          nous écrivez à l&apos;une de ces adresses, nous recevons et
          traitons les données que vous nous communiquez (nom, adresse
          e-mail, contenu du message et toute information que vous choisissez
          d&apos;y inclure), dans le seul but de répondre à votre demande.
        </p>
        <p className={p}>
          Base légale : intérêt légitime à traiter les demandes qui nous sont
          adressées. Durée de conservation : le temps nécessaire au
          traitement de votre demande, puis suppression, sauf obligation
          légale de conservation plus longue.
        </p>
      </section>

      <section>
        <h2 className={h2}>Cookies</h2>
        <p className={p}>
          Le site n&apos;installe actuellement aucun cookie de mesure
          d&apos;audience, de publicité ou de traçage. Seuls des cookies
          strictement techniques, indispensables à l&apos;affichage du site,
          sont susceptibles d&apos;être utilisés ; ils ne nécessitent pas de
          consentement préalable.
        </p>
      </section>

      <section>
        <h2 className={h2}>Vos droits</h2>
        <p className={p}>
          Conformément au Règlement général sur la protection des données
          (RGPD) et à la loi « Informatique et Libertés », toute personne
          dispose, sur les données la concernant, d&apos;un droit
          d&apos;accès, de rectification, d&apos;effacement, de limitation, de
          portabilité et d&apos;opposition.
        </p>
        <ul className={ul}>
          <li>
            Ces droits peuvent être exercés en écrivant à{' '}
            <a
              href="mailto:contact@yacqs.com"
              className="text-green-600 hover:text-green-700"
            >
              contact@yacqs.com
            </a>
            .
          </li>
          <li>
            En cas de difficulté, vous pouvez introduire une réclamation
            auprès de la CNIL (
            <a
              href="https://www.cnil.fr"
              className="text-green-600 hover:text-green-700"
            >
              www.cnil.fr
            </a>
            ).
          </li>
        </ul>
      </section>

      <section>
        <h2 className={h2}>Modification de la politique</h2>
        <p className={p}>
          Cette politique de confidentialité peut être modifiée à tout moment
          afin de refléter l&apos;évolution du site ou de la réglementation.
          La date de dernière mise à jour figure en haut de cette page.
        </p>
      </section>
    </LegalLayout>
  );
}
