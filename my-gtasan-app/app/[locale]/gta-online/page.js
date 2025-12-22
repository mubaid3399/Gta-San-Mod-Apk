import { getTranslations } from 'next-intl/server';
import GTAOnlineContent from './GTAOnlineContent';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-online' : `/${locale}/gta-online`;

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/gta-online' : `/${lang}/gta-online`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const title = 'GTA Online Complete Guide 2025 - Everything You Need to Know | GTA San Andreas';
  const description =
    'Complete GTA Online guide covering missions, heists, businesses, vehicles, weapons, and money-making strategies. Learn everything about GTA V Online multiplayer in 2025.';

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
      siteName: 'GTA San Apk',
      images: [
        {
          url: '/heroimage2.webp',
          width: 1200,
          height: 630,
          alt: 'GTA Online Complete Guide 2025',
        },
      ],
      locale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/heroimage2.webp'],
      site: '@GTASanApk',
      creator: '@GTASanApk',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    keywords:
      'GTA Online, GTA V Online, GTA 5 multiplayer, GTA Online guide, GTA Online heists, GTA Online money, GTA Online businesses, GTA Online 2025, Grand Theft Auto Online, Los Santos Online, GTA Online missions, GTA Online vehicles, GTA Online weapons, Cayo Perico Heist, GTA Online updates',
  };
}

export default async function GTAOnlinePage({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-online' : `/${locale}/gta-online`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GTA Online Complete Guide 2025 - Everything You Need to Know',
    description: 'Complete GTA Online guide covering missions, heists, businesses, vehicles, weapons, and money-making strategies. Learn everything about GTA V Online multiplayer in 2025.',
    image: `${base}/heroimage2.webp`,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'GTA San Andreas APK',
      url: base,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GTA San Andreas APK',
      logo: {
        '@type': 'ImageObject',
        url: `${base}/logo.png`,
      },
    },
  };

  const videoGameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'GTA Online',
    description: 'GTA Online is the multiplayer mode of Grand Theft Auto V. Experience missions, heists, businesses, and more.',
    image: `${base}/heroimage2.webp`,
    url: `${base}${path}`,
    applicationCategory: 'Game',
    operatingSystem: 'Windows, PlayStation, Xbox',
    gamePlatform: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X', 'Xbox One'],
    genre: 'Action, Adventure, Multiplayer',
    publisher: {
      '@type': 'Organization',
      name: 'Rockstar Games',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '250000',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <GTAOnlineContent locale={locale} />
    </>
  );
}
