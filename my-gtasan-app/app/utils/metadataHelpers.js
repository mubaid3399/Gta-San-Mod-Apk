/**
 * Metadata Helper Functions
 * Standardized metadata generation for SEO compliance
 */

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

/**
 * Generate hreflang alternate links with x-default
 * @param {string} route - The route path (e.g., '/about', '/for-ios')
 * @param {string} baseUrl - The base URL of the site
 * @returns {Object} - Object with language codes as keys and URLs as values
 */
export function generateAlternateLanguages(route, baseUrl = 'https://gtasanandreas.info') {
  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? route : `/${lang}${route}`;
    acc[lang] = `${baseUrl}${localizedPath}`;
    return acc;
  }, {});

  // Add x-default for international targeting (self-reference)
  languages['x-default'] = route === '' ? baseUrl : `${baseUrl}${route}`;

  return languages;
}

/**
 * Generate complete Open Graph metadata with all required fields
 * @param {Object} options - Configuration object
 * @returns {Object} - Open Graph metadata object
 */
export function generateOpenGraphMetadata({
  title,
  description,
  url,
  locale = 'en',
  image = '/heroimage2.webp',
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt = 'GTA San Andreas',
  type = 'website',
  siteName = 'GTA San Apk'
}) {
  return {
    title,
    description,
    url,
    locale: locale.replace('-', '_'),
    type,
    siteName,
    images: [
      {
        url: image,
        width: imageWidth,
        height: imageHeight,
        alt: imageAlt,
        type: 'image/webp',
      },
    ],
  };
}

/**
 * Generate complete Twitter Card metadata
 * @param {Object} options - Configuration object
 * @returns {Object} - Twitter Card metadata object
 */
export function generateTwitterCardMetadata({
  title,
  description,
  image = '/heroimage2.webp',
  card = 'summary_large_image',
  site = '@GTASanApk',
  creator = '@GTASanApk'
}) {
  return {
    card,
    title,
    description,
    images: [image],
    site,
    creator,
  };
}

/**
 * Generate robots metadata with Google-specific settings
 * @returns {Object} - Robots metadata object
 */
export function generateRobotsMetadata() {
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  };
}
