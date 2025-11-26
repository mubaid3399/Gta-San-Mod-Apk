import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/*.json$', '/*?*sort=', '/*?*filter='],
    },
    sitemap: 'https://gtasanandreas.info/sitemap.xml',
  };
}
