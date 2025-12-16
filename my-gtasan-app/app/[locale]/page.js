import HomeContent from './HomeContent';
import {
  generateOrganizationSchema,
  generateSoftwareApplicationSchema,
  generateBreadcrumbSchema,
  generateWebSiteSchema,
  generateReviewSchema
} from '../utils/schemaMarkup';
import {
  generateAlternateLanguages,
  generateOpenGraphMetadata,
  generateTwitterCardMetadata,
  generateRobotsMetadata
} from '../utils/metadataHelpers';

export async function generateMetadata({ params }) {
  const locale = (await params)?.locale || 'en';

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '' : `/${locale}`;

  const titles = {
    en: 'GTA San Andreas MOD APK 2025 - Unlimited Money & All Features Unlocked',
    de: 'GTA San Andreas MOD APK 2025 - Unbegrenzte Geld- und Funktionen freigegeben',
    fr: 'GTA San Andreas MOD APK 2025 - Argent illimité et fonctionnalités déverrouillées',
    it: 'GTA San Andreas MOD APK 2025 - Soldi illimitati e funzioni sbloccate',
    es: 'GTA San Andreas MOD APK 2025 - Dinero ilimitado y características desbloqueadas',
    pt: 'GTA San Andreas MOD APK 2025 - Dinheiro Ilimitado e Recursos Desbloqueados',
    ru: 'GTA San Andreas MOD APK 2025 - Бесконечные деньги и открытые функции',
    ja: 'GTA San Andreas MOD APK 2025 - 無制限のお金とすべての機能を解除'
  };

  const descriptions = {
    en: 'Download GTA San Andreas MOD APK 2025 with unlimited money, all features unlocked, enhanced graphics and mods. Free Android APK download with premium features.',
    de: 'Laden Sie GTA San Andreas MOD APK 2025 mit unbegrenztem Geld herunter. Alle Funktionen freigeschaltet, verbesserte Grafiken und Mods.',
    fr: 'Téléchargez GTA San Andreas MOD APK 2025 avec argent illimité, toutes les fonctionnalités déverrouillées et les mods améliorés.',
    it: 'Scarica GTA San Andreas MOD APK 2025 con soldi illimitati, tutte le funzioni sbloccate e grafica migliorata.',
    es: 'Descargar GTA San Andreas MOD APK 2025 con dinero ilimitado, todas las características desbloqueadas y gráficos mejorados.',
    pt: 'Baixe GTA San Andreas MOD APK 2025 com dinheiro ilimitado, todas as funções desbloqueadas e gráficos aprimorados.',
    ru: 'Скачайте GTA San Andreas MOD APK 2025 с бесконечными деньгами, разблокированными функциями и улучшенной графикой.',
    ja: 'GTA San Andreas MOD APK 2025をダウンロード - 無制限のお金、すべての機能が解除されます。'
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  return {
    title,
    description,
    keywords: [
      'GTA San Andreas APK',
      'GTA San Andreas MOD APK',
      'GTA SA APK download',
      'GTA San Andreas unlimited money',
      'GTA San Andreas Android',
      'GTA San Andreas free download',
      'GTA SA MOD APK 2025',
      'Grand Theft Auto San Andreas',
      'GTA San Andreas cheats',
      'GTA SA Android game',
      'GTA San Andreas latest version',
      'GTA San Andreas offline',
      'open world game Android',
      'action game APK'
    ],
    alternates: {
      canonical: `${base}${path}`,
      languages: generateAlternateLanguages('', base),
    },
    openGraph: generateOpenGraphMetadata({
      title,
      description,
      url: `${base}${path}`,
      locale,
      imageAlt: title,
    }),
    twitter: generateTwitterCardMetadata({
      title,
      description,
    }),
    robots: generateRobotsMetadata(),
  };
}

export default function Home() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';

  const breadcrumbItems = [
    { name: 'Home', url: base },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema(base)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSoftwareApplicationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteSchema(base)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateReviewSchema()),
        }}
      />
      <HomeContent />
    </>
  );
}
