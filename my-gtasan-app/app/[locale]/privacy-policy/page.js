const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locale = resolvedParams?.locale || 'en';
  const path = locale === 'en' ? '/privacy-policy' : `/${locale}/privacy-policy`;

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/privacy-policy' : `/${lang}/privacy-policy`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const titles = {
    en: 'Privacy Policy - GTA San Andreas Mod APK',
    de: 'Datenschutzrichtlinie - GTA San Andreas Mod APK',
    fr: 'Politique de Confidentialité - GTA San Andreas Mod APK',
    it: 'Politica sulla Privacy - GTA San Andreas Mod APK',
    es: 'Política de Privacidad - GTA San Andreas Mod APK',
    pt: 'Política de Privacidade - GTA San Andreas Mod APK',
    ru: 'Политика конфиденциальности - GTA San Andreas Mod APK',
    ja: 'プライバシーポリシー - GTA San Andreas Mod APK'
  };

  const descriptions = {
    en: 'Review our privacy policy. Learn how we collect, use, and protect your personal information on GTA San Andreas Mod APK.',
    de: 'Überprüfen Sie unsere Datenschutzrichtlinie. Erfahren Sie, wie wir Ihre Daten schützen.',
    fr: 'Examinez notre politique de confidentialité. Découvrez comment nous protégeons vos données.',
    it: 'Esamina la nostra politica sulla privacy. Scopri come proteggiamo i tuoi dati.',
    es: 'Revisa nuestra política de privacidad. Aprende cómo protegemos tus datos.',
    pt: 'Revise nossa política de privacidade. Saiba como protegemos seus dados.',
    ru: 'Ознакомьтесь с нашей политикой конфиденциальности. Узнайте, как мы защищаем ваши данные.',
    ja: 'プライバシーポリシーを確認してください。個人情報の保護方法を学ぶ。'
  };

  const title = titles[locale] || titles['en'];
  const description = descriptions[locale] || descriptions['en'];

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
      images: [
        {
          url: `${base}/heroimage2.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images: [`${base}/heroimage2.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

import Image from 'next/image';

export default async function PrivacyPolicy({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';

  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy - GTA San Andreas Mod APK',
    description: 'Review our privacy policy. Learn how we collect, use, and protect your personal information.',
    url: `${base}${locale === 'en' ? '/privacy-policy' : `/${locale}/privacy-policy`}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }} />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100">
      {/* Header Section */}
      <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: November 28, 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900/50 backdrop-blur border border-[#00ff87]/20 rounded-xl p-8 space-y-8">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to GTA San Apk ("we," "us," "our," or "Company"). We are committed to protecting your privacy. This Privacy Policy explains our data handling practices when you visit our website at gtasanandreas.info (the "Site") and use our services.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              This Privacy Policy covers our Site only and does not apply to third-party websites, including but not limited to game modification APK files, external links, or services promoted on our Site. You are responsible for reviewing the privacy policies of any third-party services you use.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              2. Information We Collect
            </h2>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">A. Information You Provide Directly:</h3>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Contact form submissions (name, email, message)</li>
              <li>• Newsletter subscriptions (if available)</li>
              <li>• User comments or feedback</li>
              <li>• Any other information you voluntarily provide</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">B. Information Collected Automatically:</h3>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• <strong>Server Logs:</strong> IP address, browser type, referring page, date/time of visit</li>
              <li>• <strong>Cookies and Web Beacons:</strong> Google Analytics, advertising cookies, session tracking</li>
              <li>• <strong>Google Analytics:</strong> Pages visited, time on site, click patterns, location data (country/city level)</li>
              <li>• <strong>Google AdSense:</strong> Cookie identifiers for ad personalization and reporting</li>
              <li>• <strong>Device Information:</strong> Device type, operating system, screen resolution</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">C. Third-Party Services:</h3>
            <p className="text-gray-300 mt-2">
              Our Site uses third-party services that collect data:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-2">
              <li>• <strong>Google Analytics:</strong> Tracks user behavior and site performance</li>
              <li>• <strong>Google AdSense:</strong> Displays personalized ads and collects ad interaction data</li>
              <li>• <strong>YouTube Embeds:</strong> Embedded videos may collect viewing data</li>
              <li>• <strong>Social Media Pixels:</strong> Facebook, Twitter, Instagram pixels (if configured)</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We use collected information for:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• Responding to your inquiries and providing customer support</li>
              <li>• Analyzing website usage and improving user experience</li>
              <li>• Displaying personalized advertisements through Google AdSense</li>
              <li>• Sending newsletters or promotional content (with consent)</li>
              <li>• Complying with legal obligations</li>
              <li>• Preventing fraud and ensuring site security</li>
              <li>• Tracking website performance and analytics</li>
            </ul>
          </section>

          {/* 4. Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our Site uses cookies and similar tracking technologies:
            </p>
            <ul className="text-gray-300 space-y-3 ml-4 mt-3">
              <li>
                <strong>Essential Cookies:</strong> Necessary for site functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Google Analytics (_ga, _gid) track your movements and interactions
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Google AdSense and ad networks use cookies for ad personalization
              </li>
              <li>
                <strong>Third-Party Cookies:</strong> External services may set their own cookies
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You can control cookies through your browser settings. Disabling cookies may affect Site functionality.
            </p>
          </section>

          {/* 5. Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              5. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We do NOT sell your personal data. We may share information with:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• <strong>Google Analytics & AdSense:</strong> For analytics and ad serving</li>
              <li>• <strong>Hosting Providers:</strong> Vercel (our hosting platform)</li>
              <li>• <strong>Service Providers:</strong> Third-party tools and platforms</li>
              <li>• <strong>Legal Authorities:</strong> If required by law or legal process</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We require all third parties to maintain confidentiality and use data only as described in this policy.
            </p>
          </section>

          {/* 6. Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              6. Your Privacy Rights
            </h2>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">GDPR (European Users):</h3>
            <p className="text-gray-300 text-sm">
              If you are in the EU, you have the right to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-2 text-sm">
              <li>• Access your personal data</li>
              <li>• Correct inaccurate data</li>
              <li>• Delete your data ("right to be forgotten")</li>
              <li>• Restrict processing</li>
              <li>• Data portability</li>
              <li>• Opt-out of personalized ads</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">CCPA (California Users):</h3>
            <p className="text-gray-300 text-sm">
              If you are in California, you have the right to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-2 text-sm">
              <li>• Know what personal data is collected</li>
              <li>• Delete personal data</li>
              <li>• Opt-out of data sales</li>
              <li>• Non-discrimination for exercising your rights</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise any rights, contact us at gta868309@gmail.com with your request.
            </p>
          </section>

          {/* 7. Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              7. Data Retention
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your data for as long as necessary to provide services and comply with legal obligations:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• <strong>Contact Form Data:</strong> Retained for 1 year or as needed for response</li>
              <li>• <strong>Analytics Data:</strong> Google Analytics retains data for 14 months by default</li>
              <li>• <strong>Cookies:</strong> Vary by type (typically 6-24 months)</li>
              <li>• <strong>Server Logs:</strong> Retained for 30 days</li>
            </ul>
          </section>

          {/* 8. Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              8. Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We implement security measures including:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• HTTPS encryption on all pages</li>
              <li>• SSL/TLS certificates</li>
              <li>• Regular security updates</li>
              <li>• No storage of sensitive payment information</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              However, no security system is impenetrable. We cannot guarantee absolute data security.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              9. Children's Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our Site is not intended for children under 13. We do not knowingly collect data from children under 13. If we discover we have collected such data, we will delete it immediately. Parents who believe their child has provided information should contact us at gta868309@gmail.com.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Note: GTA San Andreas is rated M for Mature (17+) and contains violent content inappropriate for children.
            </p>
          </section>

          {/* 10. Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              10. Third-Party Links and Services
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our Site contains links to third-party websites and services. We are not responsible for their privacy practices. This Privacy Policy applies only to our Site. Please review third-party privacy policies before sharing your information.
            </p>
          </section>

          {/* 11. Policy Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              11. Changes to This Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy at any time. Changes become effective when posted to the Site. Your continued use of the Site after changes constitutes acceptance of the updated Privacy Policy. We recommend reviewing this policy periodically.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              12. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, contact us:
            </p>
            <div className="bg-gray-800 rounded-lg p-4 mt-4">
              <p className="text-gray-300">
                <strong>Email:</strong> gta868309@gmail.com<br/>
                <strong>Website:</strong> gtasanandreas.info<br/>
                <strong>Response Time:</strong> 24-48 hours
              </p>
            </div>
          </section>

          {/* Important Notice */}
          <section className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">⚠️ Important Notice</h3>
            <p className="text-gray-300 text-sm">
              GTA San Andreas is a trademark of Rockstar Games, Inc. We are not affiliated with Rockstar Games. This Privacy Policy is for gtasanandreas.info website only. The Game Mod APK files referenced on this Site are subject to the policies of their respective creators. We are not responsible for data practices of third-party MOD APK files or their creators.
            </p>
          </section>

          {/* Last Updated */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              Last Updated: November 28, 2025 | © 2025 GTA San Apk. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
