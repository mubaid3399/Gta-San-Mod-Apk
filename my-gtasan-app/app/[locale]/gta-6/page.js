import GTA6Content from './GTA6Content';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({
    locale,
  }));
}

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-6' : `/${locale}/gta-6`;

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/gta-6' : `/${lang}/gta-6`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const title = 'GTA 6 Release Date: November 19, 2026 - Official Info';
  const description =
    'Complete guide to GTA 6 release date, features, characters, maps, platforms & more. Official November 19, 2026 launch info for PS5, Xbox & PC coming 2027. Trailers: 90M + 475M views.';

  return {
    title,
    description,
    keywords: [
      'GTA 6 release date',
      'GTA 6',
      'Grand Theft Auto 6',
      'GTA VI',
      'when does GTA 6 come out',
      'GTA 6 trailer',
      'GTA 6 gameplay',
      'GTA 6 Vice City',
      'Lucia Caminos',
      'Jason Duval',
      'GTA 6 November 2026',
      'GTA 6 PS5',
      'GTA 6 Xbox Series X',
      'GTA 6 PC',
      'GTA 6 map',
      'GTA 6 characters',
      'Rockstar Games',
      'GTA 6 pre-order',
      'State of Leonida',
      'GTA 6 online',
      'GTA 6 multiplayer',
      'GTA 6 news',
      'GTA 6 system requirements'
    ],
    alternates: {
      canonical: `${base}${path}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${base}${path}`,
      siteName: 'GTA San Andreas APK',
      images: [
        {
          url: `${base}/Gta%206/hero-img.webp`,
          width: 1200,
          height: 630,
          alt: 'GTA 6 Release Date November 19 2026',
        },
      ],
      locale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${base}/Gta%206/hero-img.webp`],
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
  };
}

export default async function GTA6Page({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-6' : `/${locale}/gta-6`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GTA 6 Release Date Confirmed: November 19, 2026 - Complete Guide to Grand Theft Auto VI',
    description: 'Complete guide to GTA 6 including official release date, trailers with 90M and 475M views, Vice City map, Lucia and Jason characters, gameplay features, and pre-order information.',
    image: `${base}/Gta%206/hero-img.webp`,
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${base}${path}`,
    },
  };

  const videoGameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Grand Theft Auto VI',
    alternateName: 'GTA 6',
    description: 'Grand Theft Auto VI returns to Vice City with protagonists Lucia Caminos and Jason Duval in an expansive open-world crime adventure across the State of Leonida.',
    image: `${base}/Gta%206/hero-img.webp`,
    url: `${base}${path}`,
    applicationCategory: 'Game',
    operatingSystem: 'PlayStation 5, Xbox Series X, Xbox Series S, Windows PC',
    gamePlatform: ['PlayStation 5', 'Xbox Series X', 'Xbox Series S', 'PC'],
    genre: 'Action-adventure, Open World, Crime',
    publisher: {
      '@type': 'Organization',
      name: 'Rockstar Games',
    },
    datePublished: '2026-11-19',
    offers: {
      '@type': 'Offer',
      price: '69.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      url: `${base}${path}`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When does GTA 6 come out exactly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Grand Theft Auto VI officially launches on November 19, 2026 for PlayStation 5 and Xbox Series X/S consoles. PC players should expect their version approximately 12-18 months later, likely in 2027.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will GTA 6 be available on PC at launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, the Grand Theft Auto VI launch date only covers console platforms initially. PC version is expected approximately 12-18 months later, likely in 2027.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much will GTA 6 cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The standard edition costs $69.99 for the United States market. Premium editions range from $89.99 to $149.99+ and include additional content, season passes, and physical collectibles.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I play GTA 6 on PlayStation 4 or Xbox One?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, Grand Theft Auto VI exclusively targets next-gen consoles (PS5, Xbox Series X/S). No versions exist for last-generation hardware.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is GTA 6 set?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GTA 6 is set in the State of Leonida, a fictional Florida-inspired region centered around Vice City, spanning diverse environments including Vice-Dale County, Kelly County, Leonard County, Mariana County, and Ambrosia County.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who are the main characters in GTA 6?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Players control Lucia Caminos and Jason Duval, a criminal duo. Lucia is the franchise\'s first female protagonist in a mainline entry, partnered with Jason in a Bonnie and Clyde-style narrative.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: base,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'GTA 6',
        item: `${base}${path}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GTA6Content locale={locale} />
    </>
  );
}
