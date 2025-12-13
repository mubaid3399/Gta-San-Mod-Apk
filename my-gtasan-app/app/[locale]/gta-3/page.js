import { getTranslations } from 'next-intl/server';
import GTA3Content from './GTA3Content';
import { generateBreadcrumbSchema } from '../../utils/schemaMarkup';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

// Advanced SEO Schema for VideoGame
function generateVideoGameSchema(base) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Grand Theft Auto III",
    "alternateName": ["GTA 3", "GTA III", "Grand Theft Auto 3"],
    "description": "Grand Theft Auto III is an open-world action-adventure game developed by Rockstar Games, featuring Liberty City, missions, vehicles, and weapons.",
    "genre": ["Action", "Adventure", "Open World", "Crime"],
    "gameEdition": "Definitive Edition",
    "publisher": {
      "@type": "Organization",
      "name": "Rockstar Games"
    },
    "gamePlatform": ["PC", "PlayStation 2", "PlayStation 3", "PlayStation 4", "PlayStation 5", "Xbox", "Xbox One", "Xbox Series X", "Android", "iOS", "Nintendo Switch"],
    "applicationCategory": "Game",
    "operatingSystem": ["Windows", "macOS", "Android", "iOS", "PlayStation", "Xbox"],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "4.99",
      "highPrice": "19.99",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "bestRating": "5",
      "ratingCount": "14500000"
    },
    "image": `${base}/Gta 3 images/gta 3 image main.webp`,
    "datePublished": "2001-10-22",
    "playMode": "SinglePlayer",
    "inLanguage": ["English", "German", "French", "Italian", "Spanish", "Portuguese", "Russian", "Japanese"]
  };
}

// FAQ Schema for rich snippets
function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I play GTA 3 on PS5?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The GTA 3 Definitive Edition runs on PS5 with improved graphics and 60 FPS performance. You can also play the PS4 version through backward compatibility."
        }
      },
      {
        "@type": "Question",
        "name": "Is GTA 3 free in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. GTA 3 costs money on all platforms. Prices range from $4.99 on mobile to $9.99 on PC for the original. The Definitive Edition costs around $19.99 when sold separately."
        }
      },
      {
        "@type": "Question",
        "name": "Does GTA 3 have multiplayer in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No official multiplayer exists. Community mods for PC enable online play through third-party servers. Console and mobile versions remain single-player only."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best platform for GTA 3 in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PC offers the best experience with mod support, better graphics options, and mouse/keyboard controls. PS5 and Xbox Series X provide excellent console experiences with smooth performance."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use cheats on mobile GTA 3?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Android and iOS versions support cheats through touch gestures or modified APK files. Some cheats differ slightly from console versions."
        }
      },
      {
        "@type": "Question",
        "name": "How big is the GTA 3 download in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "File sizes vary by platform. PC needs about 2 GB. Mobile versions require 1.4-1.5 GB. Definitive Edition on consoles takes approximately 6 GB."
        }
      },
      {
        "@type": "Question",
        "name": "Is GTA 3 Definitive Edition fixed now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most major bugs from the 2021 launch are patched. Rockstar released multiple updates improving stability and graphics. Some minor issues remain, but the game is much better than at release."
        }
      },
      {
        "@type": "Question",
        "name": "How to download GTA 3 for free on Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GTA 3 is not officially available for free. The legitimate version costs $4.99 on the Google Play Store. Be cautious of free APK downloads as they may contain malware or viruses."
        }
      }
    ]
  };
}

// Article Schema for better indexing
function generateArticleSchema(base, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "GTA 3 Complete Guide - Download, Cheats, Missions & Tips 2025",
    "description": "Complete Grand Theft Auto III guide with download links for PC, Android, iOS, all cheat codes, mission walkthroughs, weapons guide, vehicles, hidden packages, mods, and performance optimization tips.",
    "image": `${base}/Gta 3 images/gta 3 image main.webp`,
    "datePublished": "2025-01-01T00:00:00Z",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "GTA San Andreas Guide",
      "url": base
    },
    "publisher": {
      "@type": "Organization",
      "name": "GTA San Andreas Guide",
      "logo": {
        "@type": "ImageObject",
        "url": `${base}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${base}${path}`
    },
    "articleSection": ["Gaming", "GTA Series", "Action Games"],
    "keywords": "GTA 3, Grand Theft Auto III, GTA 3 download, GTA 3 cheats, GTA 3 Android, GTA 3 PC, GTA 3 iOS, Liberty City, GTA 3 missions, GTA 3 mods"
  };
}

// How-To Schema for mission guides
function generateHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download and Play GTA 3 in 2025",
    "description": "Step-by-step guide to download and install Grand Theft Auto III on PC, Android, iOS, PlayStation, and Xbox platforms.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose Your Platform",
        "text": "Decide whether you want to play on PC (Steam/Rockstar Launcher), mobile (Android/iOS), or console (PlayStation/Xbox)."
      },
      {
        "@type": "HowToStep",
        "name": "Purchase the Game",
        "text": "Buy GTA 3 from official stores: Steam for PC ($9.99), Google Play Store for Android ($4.99), App Store for iOS ($4.99), or console stores for Definitive Edition ($19.99)."
      },
      {
        "@type": "HowToStep",
        "name": "Download and Install",
        "text": "Download the game files (2GB for PC, 1.5GB for mobile, 6GB for Definitive Edition) and install following platform-specific instructions."
      },
      {
        "@type": "HowToStep",
        "name": "Configure Settings",
        "text": "Adjust graphics settings, controls, and audio preferences for optimal gameplay experience."
      },
      {
        "@type": "HowToStep",
        "name": "Start Playing",
        "text": "Launch the game and begin your journey through Liberty City as Claude in the main story mode."
      }
    ]
  };
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-3' : `/${locale}/gta-3`;

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/gta-3' : `/${lang}/gta-3`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  // SEO-optimized titles targeting US and India
  const titles = {
    en: 'GTA 3 Download Free - Grand Theft Auto 3 Cheats, APK & Guide 2025',
    de: 'GTA 3 Vollständiger Leitfaden - Download, Cheats, Missionen 2025',
    fr: 'Guide Complet GTA 3 - Téléchargement, Codes et Missions 2025',
    it: 'Guida Completa GTA 3 - Download, Trucchi e Missioni 2025',
    es: 'Guía Completa GTA 3 - Descarga, Trucos y Misiones 2025',
    pt: 'Guia Completo GTA 3 - Download, Cheats e Missões 2025',
    ru: 'Полное руководство GTA 3 - Загрузка, читы и миссии 2025',
    ja: 'GTA 3 完全ガイド - ダウンロード、チート、ミッション 2025'
  };

  // Enhanced descriptions with LSI keywords
  const descriptions = {
    en: '🎮 Download GTA 3 for PC, Android, iOS! Complete Grand Theft Auto III guide with all cheat codes, mission walkthroughs, weapons, vehicles, Liberty City map, hidden packages, mods & tips. Play GTA 3 Definitive Edition free guide 2025.',
    de: 'Vollständiger Grand Theft Auto III Leitfaden: Download für PC/Android/iOS, alle Cheat-Codes, Missionen, Waffen, Fahrzeuge und Tipps.',
    fr: 'Guide complet de Grand Theft Auto III: Téléchargement, codes de triche, missions, armes, véhicules et astuces.',
    it: 'Guida completa a Grand Theft Auto III: Download, trucchi, missioni, armi, veicoli e suggerimenti.',
    es: 'Guía completa de Grand Theft Auto III: Descarga, trucos, misiones, armas, vehículos y consejos.',
    pt: 'Guia completo de Grand Theft Auto III: Download, cheats, missões, armas, veículos e dicas.',
    ru: 'Полное руководство по Grand Theft Auto III: загрузка, читы, миссии, оружие и советы.',
    ja: 'Grand Theft Auto III完全ガイド：ダウンロード、チート、ミッション、武器、車両。'
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

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
      siteName: 'GTA San Andreas Guide - Download, Cheats & Tips',
      images: [
        {
          url: `${base}/Gta 3 images/gta 3 image main.webp`,
          width: 1200,
          height: 630,
          alt: 'Grand Theft Auto III - GTA 3 Download Free for PC, Android, iOS',
          type: 'image/webp',
        },
        {
          url: `${base}/Gta 3 images/banner iamge.webp`,
          width: 1200,
          height: 600,
          alt: 'GTA 3 Liberty City Banner',
          type: 'image/webp',
        }
      ],
      locale: locale === 'en' ? 'en_US' : locale,
      type: 'article',
      publishedTime: '2025-01-01T00:00:00Z',
      modifiedTime: new Date().toISOString(),
      authors: ['GTA San Andreas Guide Team'],
      section: 'Gaming Guides',
      tags: ['GTA 3', 'Grand Theft Auto III', 'Gaming', 'Cheats', 'Download', 'Liberty City', 'Rockstar Games']
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${base}/Gta 3 images/gta 3 image main.webp`],
      site: '@GTASanAndreas',
      creator: '@GTASanAndreas'
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Enhanced keywords targeting US and Indian search patterns
    keywords: [
      // Primary keywords
      'GTA 3',
      'Grand Theft Auto III',
      'GTA 3 download',
      'GTA 3 free download',

      // Platform-specific (US & India popular searches)
      'GTA 3 download for PC',
      'GTA 3 download for Android',
      'GTA 3 APK download',
      'GTA 3 mobile download',
      'GTA 3 iOS download',
      'GTA 3 PC game download',
      'GTA 3 for Windows 10',
      'GTA 3 free download for Android',

      // Cheats (highly searched in US & India)
      'GTA 3 cheats',
      'GTA 3 cheat codes',
      'GTA 3 cheats PC',
      'GTA 3 cheats Android',
      'GTA 3 cheats PS5',
      'GTA 3 all cheats',
      'GTA 3 money cheat',
      'GTA 3 weapon cheats',

      // Game versions
      'GTA 3 Definitive Edition',
      'GTA 3 remastered',
      'GTA 3 PS5',
      'GTA 3 PS4',
      'GTA 3 Xbox',

      // Gameplay keywords
      'GTA 3 missions',
      'GTA 3 walkthrough',
      'GTA 3 guide',
      'GTA 3 gameplay',
      'Liberty City',
      'GTA 3 map',
      'GTA 3 hidden packages',

      // Mods (popular in US)
      'GTA 3 mods',
      'GTA 3 graphics mod',
      'GTA 3 mod APK',

      // Comparison keywords
      'GTA 3 vs GTA Vice City',
      'GTA 3 best open world game',

      // Technical keywords
      'GTA 3 system requirements',
      'GTA 3 how to install',
      'GTA 3 low end PC',

      // Indian specific searches
      'GTA 3 game download kaise kare',
      'GTA 3 free me kaise download kare',

      // US specific
      'best GTA 3 cheats',
      'GTA 3 tips and tricks',

      // Long-tail keywords
      'how to download GTA 3',
      'how to play GTA 3',
      'where to download GTA 3',
      'GTA 3 complete guide'
    ],
    // Geo-targeting
    other: {
      'geo.region': 'US;IN',
      'geo.placename': 'United States;India',
      'geo.position': '37.09024;-95.712891;20.593684;78.96288',
    },
    // Additional metadata
    category: 'Gaming Guide',
    classification: 'Video Game Guide',
    rating: '4.7 out of 5 stars',
    // Verification
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    }
  };
}

export default async function GTA3Page({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-3' : `/${locale}/gta-3`;

  const breadcrumbItems = [
    { name: 'Home', url: base },
    { name: 'GTA 3', url: `${base}${path}` },
  ];

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      {/* VideoGame Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateVideoGameSchema(base)),
        }}
      />

      {/* FAQ Schema for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(base, path)),
        }}
      />

      {/* How-To Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHowToSchema()),
        }}
      />

      <GTA3Content />
    </>
  );
}
