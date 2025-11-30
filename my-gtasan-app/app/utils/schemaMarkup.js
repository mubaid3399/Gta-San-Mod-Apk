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
    logo: `${siteUrl}/gta-logo.jpg`,
    description: 'Download GTA San Andreas MOD APK with unlimited money, all features unlocked, enhanced graphics and mods.',
    sameAs: [
      'https://www.facebook.com/gtasanandreas',
      'https://twitter.com/GTASanApk',
      'https://www.youtube.com/channel/gtasanandreas',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@gtasanandreas.info',
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
        url: 'https://gtasanandreas.info/gta-logo.jpg',
      },
    },
  };
};

export const generateSoftwareApplicationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GTA San Andreas MOD APK',
    applicationCategory: 'GameApplication',
    description: 'Download GTA San Andreas MOD APK with unlimited money, all features unlocked, enhanced graphics and mods for Android.',
    operatingSystem: 'Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150000',
    },
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
    logo: 'https://gtasanandreas.info/gta-logo.jpg',
    sameAs: [
      'https://www.facebook.com/gtasanandreas',
      'https://twitter.com/GTASanApk',
    ],
  };
};
