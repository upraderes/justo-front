import type { Metadata } from 'next';
import { isLocale, type Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: "Politique de confidentialité de l'application Justo",
  robots: {
    index: false,
    follow: false,
  },
};

const h2 = 'text-xl font-semibold text-navy-800';
const p = 'mt-2 leading-relaxed text-text';
const ul = 'mt-2 list-disc space-y-1 pl-5 leading-relaxed text-text';

export default async function AppPrivacyPolicyPage({
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
      title="Politique de confidentialité de l'application Justo"
      updatedAt="9 août 2026"
    >
      <p className={p}>
        Cette politique décrit comment l&apos;application mobile Justo (iOS
        et Android) traite vos données. Elle est distincte de la politique de
        confidentialité du site justodot.com / justodot.fr.
      </p>

      <section>
        <h2 className={h2}>Éditeur de l&apos;application</h2>
        <p className={p}>
          Yacqs, entrepreneur individuel, SIRET 522 983 212 00039, 219
          Impasse de Pelin, 40400 Tartas, France — contact@yacqs.com.
        </p>
      </section>

      <section>
        <h2 className={h2}>Aucun compte, aucune donnée envoyée à nos serveurs</h2>
        <p className={p}>
          Justo ne nécessite la création d&apos;aucun compte. L&apos;application
          n&apos;est reliée à aucun serveur ni service en ligne : elle
          fonctionne entièrement hors connexion. Vos reçus, justificatifs et
          toute donnée que vous saisissez (montants, dates, catégories, etc.)
          sont stockés uniquement sur votre appareil, dans la mémoire locale
          du téléphone. Aucune de ces données n&apos;est transmise à Justo,
          ni à un quelconque tiers.
        </p>
      </section>

      <section>
        <h2 className={h2}>Verrouillage par Face ID / Touch ID / empreinte digitale</h2>
        <p className={p}>
          L&apos;application peut être protégée par le verrouillage
          biométrique de votre téléphone (Face ID, Touch ID ou empreinte
          digitale selon l&apos;appareil). Cette authentification est
          entièrement gérée par le système d&apos;exploitation de votre
          appareil (iOS ou Android) : Justo ne collecte, ne consulte, ne
          transmet ni ne stocke aucune donnée biométrique. L&apos;application
          reçoit uniquement une confirmation (réussite ou échec) de la part
          du système.
        </p>
      </section>

      <section>
        <h2 className={h2}>Permissions utilisées</h2>
        <p className={p}>
          Selon les fonctionnalités que vous utilisez, l&apos;application peut
          demander l&apos;accès :
        </p>
        <ul className={ul}>
          <li>à l&apos;appareil photo, pour scanner un reçu ou une facture ;</li>
          <li>
            à votre photothèque, pour importer une image de reçu déjà
            existante.
          </li>
        </ul>
        <p className={p}>
          Ces accès sont soumis à votre autorisation explicite via les
          réglages de votre système, et les images correspondantes restent
          stockées localement sur votre appareil.
        </p>
      </section>

      <section>
        <h2 className={h2}>Aucun service tiers, aucun suivi</h2>
        <p className={p}>
          L&apos;application n&apos;intègre aucun outil d&apos;analyse
          d&apos;audience, de mesure publicitaire, de crash reporting ni de
          service tiers susceptible de collecter des données vous concernant.
          Justo ne vend ni ne partage aucune donnée, puisqu&apos;aucune donnée
          ne quitte votre appareil.
        </p>
      </section>

      <section>
        <h2 className={h2}>Sauvegardes du système d&apos;exploitation</h2>
        <p className={p}>
          Si vous avez activé une sauvegarde automatique de votre téléphone
          (par exemple iCloud sur iOS ou la sauvegarde Google sur Android),
          les données de l&apos;application peuvent être incluses dans cette
          sauvegarde comme n&apos;importe quelle autre donnée locale de votre
          appareil. Cette sauvegarde est gérée par Apple ou Google
          conformément à leurs propres politiques de confidentialité, et non
          par Justo.
        </p>
      </section>

      <section>
        <h2 className={h2}>Suppression des données</h2>
        <p className={p}>
          Vos données étant stockées uniquement sur votre appareil, vous en
          gardez l&apos;entière maîtrise. La désinstallation de
          l&apos;application entraîne la suppression définitive et
          irréversible de toutes les données associées (reçus, justificatifs,
          réglages), Justo ne conservant aucune copie sur ses propres
          serveurs.
        </p>
      </section>

      <section>
        <h2 className={h2}>Vos droits</h2>
        <p className={p}>
          Conformément au RGPD et à la loi « Informatique et Libertés »,
          toute personne dispose d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement, de limitation, de portabilité et
          d&apos;opposition sur les données la concernant. Dans la mesure où
          Justo ne dispose d&apos;aucun accès aux données stockées localement
          sur votre appareil, l&apos;exercice de ces droits s&apos;effectue
          directement depuis l&apos;application (modification ou suppression
          de vos reçus) ou en désinstallant l&apos;application.
        </p>
        <ul className={ul}>
          <li>
            Pour toute question, vous pouvez nous écrire à{' '}
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
        <h2 className={h2}>Évolution de cette politique</h2>
        <p className={p}>
          Si l&apos;application venait à évoluer (ajout d&apos;un compte,
          d&apos;une synchronisation en ligne ou d&apos;un service tiers,
          par exemple pour de la publicité), cette politique serait mise à
          jour avant la mise en service de cette évolution, et la date en
          haut de cette page serait actualisée en conséquence.
        </p>
      </section>
    </LegalLayout>
  );
}
