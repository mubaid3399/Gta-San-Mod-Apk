/**
 * Schema Markup Utility for SEO
 * Generates JSON-LD structured data for Google Rich Results
 */

export const generateOrganizationSchema = (siteUrl = 'https://gtasanandreas.info') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GTA San Andreas APK',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Download GTA San Andreas MOD APK with unlimited money, all features unlocked, enhanced graphics and mods.',
    sameAs: [
      'https://www.facebook.com/people/Gta-SanAndreas/pfbid02rnCyLfcbiZZKnrfVB22tGm5CnrQFvri1zRPAFpjcfpy8hpvTZeqCxa2WfCgGhVWCl/',
      'https://www.pinterest.com/gta868309/',
      'https://www.instagram.com/gta868309/',
      'https://www.youtube.com/channel/UCYe8ocBekKxI4S6vRWSdaOQ',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'gta868309@gmail.com',
    },
  };
};

export const generateBreadcrumbSchema = (items = []) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateFAQSchema = (faqs = []) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateArticleSchema = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished || new Date().toISOString(),
    dateModified: article.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'GTA San Andreas APK',
      url: 'https://gtasanandreas.info',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GTA San Andreas APK',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gtasanandreas.info/logo.png',
      },
    },
  };
};

export const generateSoftwareApplicationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GTA San Andreas MOD APK 2025',
    alternateName: 'GTA SA MOD APK',
    applicationCategory: 'GameApplication',
    description: 'Download GTA San Andreas MOD APK 2025 with unlimited money, all features unlocked, enhanced graphics and premium mods for Android. Free APK with no ads and premium gameplay.',
    operatingSystem: 'Android 5.0 and up',
    datePublished: '2004-10-26',
    dateModified: new Date().toISOString().split('T')[0],
    softwareVersion: '2.11.245',
    fileSize: '2.5GB',
    downloadUrl: 'https://gtasanandreas.info',
    screenshot: 'https://gtasanandreas.info/heroimage2.webp',
    applicationSubCategory: 'Action Game',
    keywords: 'GTA San Andreas, MOD APK, unlimited money, free download, Android game, open world game',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      category: 'Free Download'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150000',
      reviewCount: '45000',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'Rockstar Games',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GTA San Andreas APK',
      url: 'https://gtasanandreas.info',
    },
    inLanguage: ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'],
    contentRating: 'Mature 17+',
  };
};

export const generateVideoSchema = (video) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate || new Date().toISOString(),
    duration: video.duration,
    contentUrl: video.contentUrl,
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GTA San Andreas APK',
    url: 'https://gtasanandreas.info',
    logo: 'https://gtasanandreas.info/logo.png',
    sameAs: [
      'https://www.facebook.com/people/Gta-SanAndreas/pfbid02rnCyLfcbiZZKnrfVB22tGm5CnrQFvri1zRPAFpjcfpy8hpvTZeqCxa2WfCgGhVWCl/',
      'https://www.pinterest.com/gta868309/',
      'https://www.instagram.com/gta868309/',
      'https://www.youtube.com/channel/UCYe8ocBekKxI4S6vRWSdaOQ',
    ],
  };
};

export const generateVideoGameSchema = (game) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.name,
    description: game.description,
    image: game.image,
    url: game.url,
    applicationCategory: 'Game',
    operatingSystem: game.operatingSystem || 'Windows, Android, iOS',
    gamePlatform: game.gamePlatform || ['PC', 'Android', 'iOS'],
    genre: game.genre || 'Action, Adventure',
    publisher: {
      '@type': 'Organization',
      name: game.publisher || 'Rockstar Games',
    },
    aggregateRating: game.aggregateRating
      ? {
          '@type': 'AggregateRating',
          ratingValue: game.aggregateRating.ratingValue,
          ratingCount: game.aggregateRating.ratingCount,
        }
      : undefined,
    offers: {
      '@type': 'Offer',
      price: game.price || '0',
      priceCurrency: 'USD',
    },
  };
};

/**
 * WebSite schema with search action for Google Sitelinks Searchbox
 * This helps Google display a search box directly in search results
 */
export const generateWebSiteSchema = (siteUrl = 'https://gtasanandreas.info') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GTA San Andreas APK',
    url: siteUrl,
    description: 'Download GTA San Andreas MOD APK with unlimited money, all features unlocked for Android',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/?s={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'GTA San Andreas APK',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
        width: 250,
        height: 60
      }
    }
  };
};

/**
 * Review schema for better SERP display with star ratings
 */
export const generateReviewSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: 'GTA San Andreas MOD APK',
      applicationCategory: 'GameApplication',
      operatingSystem: 'Android',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '150000',
        bestRating: '5',
        worstRating: '1'
      }
    },
    author: {
      '@type': 'Organization',
      name: 'GTA San Andreas APK'
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1'
    },
    reviewBody: 'GTA San Andreas MOD APK offers unlimited money, all features unlocked, and enhanced gameplay experience for Android users. The best way to experience the classic GTA San Andreas on mobile devices.'
  };
};

/**
 * HowTo schema for installation and tutorial pages
 * Helps with featured snippets and step-by-step results
 */
export const generateHowToSchema = (howTo) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    image: howTo.image,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: 0
    },
    totalTime: howTo.totalTime || 'PT5M',
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url
    }))
  };
};
