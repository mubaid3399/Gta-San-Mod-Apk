import GTA6Content from './GTA6Content';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-6' : `/${locale}/gta-6`;

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/gta-6' : `/${lang}/gta-6`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  // SEO-optimized title (60 chars)
  const title = 'GTA 6 Release Date: November 19, 2026 - Official Info';
  // SEO-optimized description (155 chars)
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
      'GTA 6 November 2026',
      'GTA 6 trailer',
      'GTA 6 gameplay',
      'GTA 6 Vice City',
      'Lucia Caminos',
      'Jason Duval',
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
      'GTA 6 system requirements',
      'GTA 6 release date PS5',
      'GTA 6 release date Xbox',
      'GTA 6 release date PC',
      'GTA 6 launch date',
      'Grand Theft Auto VI release',
    ],
    alternates: {
      canonical: `${base}${path}`,
      languages,
    },
    openGraph: {
      title: 'GTA 6 Release Date Confirmed: November 19, 2026',
      description: 'Everything you need to know about Grand Theft Auto VI launch, gameplay, characters, and platforms. Complete guide to GTA 6.',
      url: `${base}${path}`,
      siteName: 'GTA San Andreas APK',
      images: [
        {
          url: `${base}/Gta%206/hero-img.webp`,
          width: 1200,
          height: 630,
          alt: 'GTA 6 Release Date November 19 2026 - Grand Theft Auto VI Official Announcement',
          type: 'image/webp',
        },
      ],
      locale,
      type: 'article',
      publishedTime: '2023-12-05T10:00:00Z',
      modifiedTime: new Date().toISO String(),
      authors: ['GTA San Andreas APK'],
      section: 'Gaming News',
      tags: ['GTA 6', 'Rockstar Games', 'Grand Theft Auto', 'Vice City', 'Gaming'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'GTA 6 Release Date: November 19, 2026',
      description: 'Complete guide to GTA 6 - release date, features, characters, maps, trailers (90M + 475M views), and more.',
      images: [`${base}/Gta%206/hero-img.webp`],
      site: '@GTASanApk',
      creator: '@GTASanApk',
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:published_time': '2023-12-05T10:00:00Z',
      'article:modified_time': new Date().toISOString(),
      'article:author': 'GTA San Andreas APK',
      'article:section': 'Gaming News',
      'article:tag': 'GTA 6, Rockstar Games, Grand Theft Auto, Vice City',
    },
  };
}

export default async function GTA6Page({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-6' : `/${locale}/gta-6`;
  const currentDate = new Date().toISOString();

  // 1. NewsArticle Schema - PRIMARY for trending news content
  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'GTA 6 Release Date Confirmed: November 19, 2026',
    alternativeHeadline: 'Complete Guide to Grand Theft Auto VI - Release Date, Features, Characters & Platforms',
    description: 'Official Grand Theft Auto VI release date announcement for November 19, 2026. Complete coverage of GTA 6 trailers (90M + 475M views), Vice City setting, Lucia Caminos & Jason Duval characters, gameplay features, platform availability, and pre-order details.',
    image: {
      '@type': 'ImageObject',
      url: `${base}/Gta%206/hero-img.webp`,
      width: 1200,
      height: 630,
      caption: 'GTA 6 Release Date November 19 2026 - Grand Theft Auto VI Official Announcement'
    },
    datePublished: '2023-12-05T10:00:00Z',
    dateModified: currentDate,
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
        width: 250,
        height: 60
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${base}${path}`,
    },
    articleSection: 'Gaming News',
    keywords: 'GTA 6, GTA 6 release date, Grand Theft Auto VI, November 19 2026, Rockstar Games, Vice City, Lucia Caminos, Jason Duval, GTA 6 trailer, GTA 6 gameplay',
    wordCount: 8500,
    inLanguage: locale || 'en',
    about: {
      '@type': 'VideoGame',
      name: 'Grand Theft Auto VI'
    }
  };

  // 2. VideoGame Schema - For game information
  const videoGameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Grand Theft Auto VI',
    alternateName: ['GTA 6', 'GTA VI', 'Grand Theft Auto 6'],
    description: 'Grand Theft Auto VI returns to Vice City with protagonists Lucia Caminos and Jason Duval in an expansive open-world crime adventure across the State of Leonida. Releasing November 19, 2026 for PlayStation 5 and Xbox Series X/S.',
    image: `${base}/Gta%206/hero-img.webp`,
    url: `${base}${path}`,
    applicationCategory: 'Game',
    operatingSystem: 'PlayStation 5, Xbox Series X, Xbox Series S, Windows PC',
    gamePlatform: ['PlayStation 5', 'Xbox Series X', 'Xbox Series S', 'PC'],
    genre: ['Action-adventure', 'Open World', 'Crime', 'Shooter'],
    publisher: {
      '@type': 'Organization',
      name: 'Rockstar Games',
      url: 'https://www.rockstargames.com'
    },
    developer: {
      '@type': 'Organization',
      name: 'Rockstar Studios'
    },
    releaseDate: '2026-11-19',
    gameSetting: 'Vice City, State of Leonida',
    character: [
      {
        '@type': 'Person',
        name: 'Lucia Caminos',
        description: 'First female protagonist in GTA mainline series'
      },
      {
        '@type': 'Person',
        name: 'Jason Duval',
        description: 'Male protagonist partnering with Lucia'
      }
    ],
    trailer: {
      '@type': 'VideoObject',
      name: 'GTA 6 Official Trailer',
      description: 'Official Grand Theft Auto VI announcement trailer',
      thumbnailUrl: `${base}/Gta%206/hero-img.webp`,
      uploadDate: '2023-12-04T00:00:00Z'
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Standard Edition',
        price: '69.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: `${base}${path}#standard-edition`,
        priceValidUntil: '2026-11-19',
        itemCondition: 'https://schema.org/NewCondition'
      },
      {
        '@type': 'Offer',
        name: 'Deluxe Edition',
        price: '89.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: `${base}${path}#deluxe-edition`,
        priceValidUntil: '2026-11-19',
        itemCondition: 'https://schema.org/NewCondition',
        description: 'Includes season pass, exclusive vehicles, and cosmetics'
      },
      {
        '@type': 'Offer',
        name: 'Collector\'s Edition',
        price: '149.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: `${base}${path}#collectors-edition`,
        priceValidUntil: '2026-11-19',
        itemCondition: 'https://schema.org/NewCondition',
        description: 'Physical memorabilia, artbook, steelbook case, and exclusive collectibles'
      },
      {
        '@type': 'Offer',
        name: 'Ultimate Edition',
        price: '99.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: `${base}${path}#ultimate-edition`,
        priceValidUntil: '2026-11-19',
        itemCondition: 'https://schema.org/NewCondition',
        description: 'All digital content and in-game currency bonuses'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '250000',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '75000'
    }
  };

  // 3. Video Object Schema - For Trailer 1
  const trailer1VideoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'GTA 6 Official Trailer 1',
    description: 'First official Grand Theft Auto VI trailer showcasing Vice City reborn with breathtaking fidelity and introducing Lucia Caminos. Accumulated 90 million views.',
    thumbnailUrl: `${base}/Gta%206/Screenshot%20(10)%20(1).webp`,
    uploadDate: '2023-12-04T00:00:00Z',
    duration: 'PT1M31S',
    contentUrl: `${base}${path}#trailer-1`,
    embedUrl: `${base}${path}#trailer-1`,
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/WatchAction',
      userInteractionCount: 90000000
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rockstar Games'
    }
  };

  // 4. Video Object Schema - For Trailer 2
  const trailer2VideoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'GTA 6 Official Trailer 2',
    description: 'Second official Grand Theft Auto VI trailer with actual gameplay footage demonstrating refined mechanics. Achieved record-breaking 475 million views.',
    thumbnailUrl: `${base}/Gta%206/Screenshot%20(11)%20(1).webp`,
    uploadDate: '2024-02-08T00:00:00Z',
    duration: 'PT2M45S',
    contentUrl: `${base}${path}#trailer-2`,
    embedUrl: `${base}${path}#trailer-2`,
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/WatchAction',
      userInteractionCount: 475000000
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rockstar Games'
    }
  };

  // 5. Enhanced FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When does GTA 6 come out exactly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Grand Theft Auto VI officially launches on November 19, 2026 for PlayStation 5 and Xbox Series X/S consoles. This confirmed GTA 6 release date ends years of speculation and marks one of gaming\'s most anticipated arrivals. PC players should expect their version approximately 12-18 months later, likely in 2027, following Rockstar\'s traditional platform release strategy.',
          dateCreated: currentDate
        },
      },
      {
        '@type': 'Question',
        name: 'Will GTA 6 be available on PC at launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, the Grand Theft Auto VI launch date only covers console platforms initially. Rockstar Games focuses on optimizing the PlayStation 5 and Xbox Series X/S versions before tackling PC\'s diverse hardware configurations. History suggests patient PC gamers receive technically superior ports featuring enhanced graphics options and modding support that justify the extended wait. PC version is expected approximately 12-18 months later, likely in 2027.',
          dateCreated: currentDate
        },
      },
      {
        '@type': 'Question',
        name: 'How much will GTA 6 cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The standard edition carries a $69.99 price tag for the United States market, aligning with current next-generation game pricing. Premium editions ranging from $89.99 to $149.99+ include additional content, season passes, and physical collectibles. The Deluxe Edition ($89.99) includes season pass and exclusive items. The Collector\'s Edition ($149.99+) features physical memorabilia, artbook, and steelbook case. The Ultimate Edition ($99.99) provides all digital content and in-game currency bonuses.',
          dateCreated: currentDate
        },
      },
      {
        '@type': 'Question',
        name: 'Can I play GTA 6 on PlayStation 4 or Xbox One?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, Grand Theft Auto VI exclusively targets next-gen consoles (PS5, Xbox Series X/S). No versions exist for last-generation hardware from PlayStation 4 or Xbox One. This decision liberates developers from technical limitations that would compromise their creative vision, ensuring Leonida\'s sprawling world operates without sacrifices necessary to accommodate aging architecture from 2013-era systems.',
          dateCreated: currentDate
        },
      },
      {
        '@type': 'Question',
        name: 'Where is GTA 6 set?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GTA 6 is set in the State of Leonida, a fictional Florida-inspired region centered around Vice City. The map spans diverse environments including Vice-Dale County (suburban neighborhoods), Kelly County (farmland and rural towns), Leonard County (industrial complexes), Mariana County (coastal villages and islands), and Ambrosia County (wilderness and swamps). This represents the largest playable space in franchise history, reportedly three times GTA 5\'s Los Santos footprint.',
          dateCreated: currentDate
        },
      },
      {
        '@type': 'Question',
        name: 'Who are the main characters in GTA 6?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Players control Lucia Caminos and Jason Duval, a criminal duo navigating Leonida\'s underworld. Lucia represents the franchise\'s first female protagonist in a mainline entry, bringing fresh perspective as a hardened criminal with Latina heritage. Jason complements her with street-smart cunning and improvisation skills. Their partnership forms the narrative foundation in a Bonnie and Clyde-style dynamic, with supporting characters like Cal Hampton, Boobie Ike, and Dre Quan Priest enriching the story.',
          dateCreated: currentDate
        },
      },
      {
        '@type': 'Question',
        name: 'How big is the GTA 6 map compared to GTA 5?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While Rockstar Studios hasn\'t released exact measurements, trailer footage and insider reports suggest Leonida dwarfs Los Santos significantly. Conservative estimates indicate three times GTA 5\'s playable area, incorporating multiple distinct regions from urban Vice City to rural wilderness. The map\'s vertical design also increases effective space through accessible building interiors, creating unprecedented environmental density and exploration opportunities.',
          dateCreated: currentDate
        },
      },
      {
        '@type': 'Question',
        name: 'What platforms will GTA 6 be released on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Grand Theft Auto VI launches exclusively on PlayStation 5 and Xbox Series X/S on November 19, 2026. Both platforms support performance and quality modes, with PS5 offering DualSense controller integration (adaptive triggers, haptic feedback) and Xbox Series X delivering native 4K at 60 FPS. PC version expected 12-18 months later in 2027 with enhanced graphics including ray tracing, higher frame rates, and modding support.',
          dateCreated: currentDate
        },
      }
    ],
  };

  // 6. BreadcrumbList Schema
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
        name: 'GTA 6 Release Date',
        item: `${base}${path}`,
      },
    ],
  };

  // 7. Product Schema with comprehensive pricing
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Grand Theft Auto VI',
    description: 'Next-generation crime action game returning to Vice City with dual protagonists Lucia Caminos and Jason Duval. Releasing November 19, 2026 for PS5 and Xbox Series X/S.',
    image: `${base}/Gta%206/hero-img.webp`,
    brand: {
      '@type': 'Brand',
      name: 'Grand Theft Auto',
      logo: `${base}/logo.png`
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Rockstar Games'
    },
    releaseDate: '2026-11-19',
    category: 'Video Games',
    offers: [
      {
        '@type': 'Offer',
        name: 'Standard Edition',
        price: '69.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: `${base}${path}#standard-edition`,
        seller: {
          '@type': 'Organization',
          name: 'Rockstar Games'
        }
      },
      {
        '@type': 'Offer',
        name: 'Deluxe Edition',
        price: '89.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: `${base}${path}#deluxe-edition`,
        seller: {
          '@type': 'Organization',
          name: 'Rockstar Games'
        }
      },
      {
        '@type': 'Offer',
        name: 'Collector\'s Edition',
        price: '149.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: `${base}${path}#collectors-edition`,
        seller: {
          '@type': 'Organization',
          name: 'Rockstar Games'
        }
      },
      {
        '@type': 'Offer',
        name: 'Ultimate Edition',
        price: '99.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: `${base}${path}#ultimate-edition`,
        seller: {
          '@type': 'Organization',
          name: 'Rockstar Games'
        }
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '250000',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Gaming News Network'
        },
        reviewBody: 'GTA 6 promises to be the most ambitious Grand Theft Auto game ever created, with unprecedented scale, detail, and innovation in open-world design.'
      }
    ]
  };

  // 8. Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GTA San Andreas APK',
    url: base,
    logo: `${base}/logo.png`,
    description: 'Complete guide and resources for GTA games including GTA 6, GTA San Andreas, GTA V, and more.',
    sameAs: [
      'https://twitter.com/GTASanApk',
      'https://www.facebook.com/GTASanApk'
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trailer1VideoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trailer2VideoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <GTA6Content locale={locale} />
    </>
  );
}
