import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

  // Define all pages with priority and change frequency
  // Tier 1: Main Pages (Priority 1.0 - 0.9)
  const tier1Pages = [
    { slug: '', priority: 1.0, changefreq: 'weekly' as const }, // Homepage
    { slug: 'gta-san-andreas-mod-apk', priority: 0.95, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-download', priority: 0.95, changefreq: 'weekly' as const },
    { slug: 'for-pc', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'for-ios', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'for-android', priority: 0.9, changefreq: 'weekly' as const },
  ];

  // Tier 2: Cheats & Codes (Priority 0.9)
  const cheatsPages = [
    { slug: 'gta-cheats', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-cheat-codes', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-hidden-cheats', priority: 0.88, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-money-cheats', priority: 0.87, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-weapon-cheats', priority: 0.87, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-vehicle-cheats', priority: 0.87, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-health-cheats', priority: 0.86, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-wanted-level-cheat', priority: 0.85, changefreq: 'weekly' as const },
  ];

  // Tier 3: Mods & Graphics (Priority 0.85)
  const modsPages = [
    { slug: 'gta-san-andreas-mods', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-graphics-mods', priority: 0.88, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-mod-installation-guide', priority: 0.87, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-best-mods-2025', priority: 0.88, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-realistic-graphics-mods', priority: 0.86, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-gameplay-mods', priority: 0.85, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-character-mods', priority: 0.84, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-weather-mods', priority: 0.83, changefreq: 'monthly' as const },
  ];

  // Tier 4: Walkthrough & Missions (Priority 0.85)
  const walkthroughPages = [
    { slug: 'gta-san-andreas-walkthrough', priority: 0.88, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-missions-guide', priority: 0.87, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-story-missions', priority: 0.86, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-side-missions', priority: 0.85, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-best-missions', priority: 0.84, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-mission-walkthroughs', priority: 0.83, changefreq: 'weekly' as const },
  ];

  // Tier 5: Installation & Setup (Priority 0.85)
  const installationPages = [
    { slug: 'how-to-install', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-installation-guide', priority: 0.88, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-system-requirements', priority: 0.87, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-download-guide', priority: 0.87, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-setup-tutorial', priority: 0.86, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-controller-setup', priority: 0.85, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-graphics-settings', priority: 0.84, changefreq: 'monthly' as const },
  ];

  // Tier 6: Mobile Specific (Priority 0.85)
  const mobilePages = [
    { slug: 'gta-san-andreas-ios-download', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-iphone-download', priority: 0.88, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-android-download', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-mobile-requirements', priority: 0.86, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-mobile-controls', priority: 0.85, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-mobile-vs-pc', priority: 0.84, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-mobile-tips', priority: 0.83, changefreq: 'weekly' as const },
  ];

  // Tier 7: Guides & Tutorials (Priority 0.8)
  const guidesPages = [
    { slug: 'gta-san-andreas-beginners-guide', priority: 0.85, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-advanced-guide', priority: 0.84, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-money-making-guide', priority: 0.84, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-fast-level-up', priority: 0.83, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-skill-guide', priority: 0.82, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-weapon-guide', priority: 0.82, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-property-guide', priority: 0.81, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-business-guide', priority: 0.80, changefreq: 'monthly' as const },
  ];

  // Tier 8: Vehicles & Cars (Priority 0.8)
  const vehiclesPages = [
    { slug: 'gta-cars', priority: 0.85, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-vehicles-list', priority: 0.83, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-rare-vehicles', priority: 0.82, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-best-cars', priority: 0.82, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-police-vehicles', priority: 0.81, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-sports-cars', priority: 0.81, changefreq: 'monthly' as const },
  ];

  // Tier 9: Troubleshooting (Priority 0.75)
  const troubleshootingPages = [
    { slug: 'gta-san-andreas-troubleshooting', priority: 0.8, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-crash-fix', priority: 0.78, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-lag-fix', priority: 0.78, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-graphics-error-fix', priority: 0.77, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-download-error', priority: 0.77, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-compatibility-issues', priority: 0.76, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-performance-optimization', priority: 0.76, changefreq: 'monthly' as const },
  ];

  // Tier 10: Comparisons & Reviews (Priority 0.8)
  const comparisonPages = [
    { slug: 'mod-apk-vs-original', priority: 0.85, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-mobile-review', priority: 0.83, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-best-version', priority: 0.82, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-2025-updates', priority: 0.82, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-new-features-2025', priority: 0.81, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-vs-gta-5', priority: 0.80, changefreq: 'monthly' as const },
  ];

  // Tier 11: Characters & Story (Priority 0.75)
  const characterPages = [
    { slug: 'gta-san-andreas-characters', priority: 0.78, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-main-characters', priority: 0.77, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-character-guide', priority: 0.76, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-story-explained', priority: 0.76, changefreq: 'monthly' as const },
  ];

  // Tier 12: Weapons & Items (Priority 0.75)
  const weaponsPages = [
    { slug: 'gta-san-andreas-weapons', priority: 0.78, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-weapons-list', priority: 0.76, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-best-weapons', priority: 0.76, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-weapon-damage', priority: 0.75, changefreq: 'monthly' as const },
  ];

  // Tier 13: FAQ & Support (Priority 0.8)
  const faqPages = [
    { slug: 'faq', priority: 0.85, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-frequently-asked-questions', priority: 0.84, changefreq: 'weekly' as const },
    { slug: 'is-safe-to-download', priority: 0.83, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-free-or-paid', priority: 0.82, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-file-size', priority: 0.81, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-storage-requirements', priority: 0.80, changefreq: 'monthly' as const },
  ];

  // Tier 14: Features & Content (Priority 0.8)
  const featuresPages = [
    { slug: 'all-features', priority: 0.85, changefreq: 'weekly' as const },
    { slug: 'gta-san-andreas-gameplay-features', priority: 0.83, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-multiplayer-guide', priority: 0.82, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-easter-eggs', priority: 0.81, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-hidden-locations', priority: 0.81, changefreq: 'monthly' as const },
    { slug: 'gta-san-andreas-secrets-and-tips', priority: 0.80, changefreq: 'monthly' as const },
  ];

  // Static Legal Pages (Priority 0.6)
  const staticPages = [
    { slug: 'privacy-policy', priority: 0.6, changefreq: 'monthly' as const },
    { slug: 'terms-of-service', priority: 0.6, changefreq: 'monthly' as const },
    { slug: 'cookie-policy', priority: 0.6, changefreq: 'monthly' as const },
    { slug: 'acceptable-use', priority: 0.6, changefreq: 'monthly' as const },
    { slug: 'about', priority: 0.75, changefreq: 'monthly' as const },
    { slug: 'contact', priority: 0.75, changefreq: 'monthly' as const },
    { slug: 'community', priority: 0.65, changefreq: 'monthly' as const },
  ];

  // Combine all pages
  const allPages = [
    ...tier1Pages,
    ...cheatsPages,
    ...modsPages,
    ...walkthroughPages,
    ...installationPages,
    ...mobilePages,
    ...guidesPages,
    ...vehiclesPages,
    ...troubleshootingPages,
    ...comparisonPages,
    ...characterPages,
    ...weaponsPages,
    ...faqPages,
    ...featuresPages,
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add localized pages
  allPages.forEach((page) => {
    locales.forEach((locale) => {
      const isHomepage = page.slug === '';
      const url = isHomepage
        ? locale === 'en'
          ? `${baseUrl}/`
          : `${baseUrl}/${locale}`
        : locale === 'en'
        ? `${baseUrl}/${page.slug}`
        : `${baseUrl}/${locale}/${page.slug}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changefreq,
        priority: page.priority,
      });
    });
  });

  // Add static pages (not localized - English only)
  staticPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: page.changefreq,
      priority: page.priority,
    });
  });

  return sitemapEntries;
}
