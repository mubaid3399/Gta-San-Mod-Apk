import { getTranslations } from 'next-intl/server';
import ViceCityContent from './ViceCityContent';
import { generateBreadcrumbSchema } from '../../utils/schemaMarkup';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-vice-city' : `/${locale}/gta-vice-city`;
  const t = await getTranslations({ locale, namespace: 'viceCityContent' }).catch(() => null);

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/gta-vice-city' : `/${lang}/gta-vice-city`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const title = t?.('hero.title') || 'GTA Vice City - The Timeless Classic | Complete Guide 2025';
  const description =
    t?.('hero.subtitle') ||
    'Complete GTA Vice City guide covering gameplay, story, characters, weapons, vehicles, missions, cheats, and essential fixes. Download for PC and mobile.';

  return {
    title,
    description,
    alternates: {
      canonical: `${base}${path}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${base}${path}`,
      images: ['/vice city/GTA_ViceCity.jpg'],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/vice city/GTA_ViceCity.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: 'GTA Vice City, Tommy Vercetti, Vice City game, GTA VC download, Vice City cheats, GTA Vice City PC, Vice City mobile, 1980s Miami, open world game',
  };
}

export default async function ViceCityPage({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-vice-city' : `/${locale}/gta-vice-city`;

  const breadcrumbItems = [
    { name: 'Home', url: base },
    { name: 'GTA Vice City', url: `${base}${path}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      <ViceCityContent />
    </>
  );
}
