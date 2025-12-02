import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Compiler for automatic memoization
  reactCompiler: true,

  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
  },

  // Compression
  compress: true,

  // Powering dynamic imports for code splitting
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      '@fortawesome/react-fontawesome',
      'framer-motion',
    ],
  },

  // Headers for caching and performance
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for old URLs (if needed)
  async redirects() {
    return [];
  },

  // Webpack optimization
  webpack: (config, { isServer }) => {
    config.optimization.minimize = true;
    config.performance = {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };
    return config;
  },

  // Production source maps disabled for smaller bundle
  productionBrowserSourceMaps: false,

  // Swc minification (faster than Terser)
  swcMinify: true,

  // Enable static exports where possible
  output: 'standalone',

  // Optimize fonts
  optimizeFonts: true,

  // PoweredBy header disabled
  poweredByHeader: false,

  // Trailing slashes
  trailingSlash: false,
};

export default withNextIntl(nextConfig);
