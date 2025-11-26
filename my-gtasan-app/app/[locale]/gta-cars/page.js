import { getTranslations } from 'next-intl/server';
import GtaCarsContent from './GtaCarsContent';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const locale = params?.locale || 'en';
  const path = locale === 'en' ? '/gta-cars' : `/${locale}/gta-cars`;
  const t = await getTranslations({ locale, namespace: 'gtaCars' }).catch(() => null);

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/gta-cars' : `/${lang}/gta-cars`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const title = t?.('hero.title') || 'GTA San Andreas Cars - Full List & Stats';
  const description =
    t?.('introduction.paragraph1') ||
    'Explore GTA San Andreas cars with speeds, prices, and categories. Compare sports, lowriders, motorcycles, and more.';

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
      images: ['/og-gta-cars.jpg'],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-gta-cars.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function GTACarsPage() {
  return <GtaCarsContent />;
}
