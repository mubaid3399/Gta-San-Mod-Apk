import { getTranslations } from 'next-intl/server';
import {
  generateAlternateLanguages,
  generateOpenGraphMetadata,
  generateTwitterCardMetadata,
  generateRobotsMetadata
} from '../../utils/metadataHelpers';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locale = resolvedParams?.locale || 'en';
  const path = locale === 'en' ? '/about' : `/${locale}/about`;

  const titles = {
    en: 'About GTA San Andreas Mod APK - Who We Are & Our Mission',
    de: 'Über GTA San Andreas Mod APK - Wer wir sind und unsere Mission',
    fr: 'À Propos de GTA San Andreas Mod APK - Qui nous sommes et notre mission',
    it: 'Chi Siamo - GTA San Andreas Mod APK - La Nostra Missione',
    es: 'Acerca de GTA San Andreas Mod APK - Quiénes Somos y Nuestra Misión',
    pt: 'Sobre GTA San Andreas Mod APK - Quem Somos e Nossa Missão',
    ru: 'О GTA San Andreas Mod APK - Кто мы и наша миссия',
    ja: 'GTA San Andreas Mod APKについて - 私たちについてと使命'
  };

  const descriptions = {
    en: 'Learn about GTA San Andreas Mod APK. Discover our mission to provide safe, verified gaming content and resources for players worldwide.',
    de: 'Erfahren Sie mehr über GTA San Andreas Mod APK. Entdecken Sie unsere Mission, sichere, verifizierte Gaming-Inhalte bereitzustellen.',
    fr: 'Découvrez GTA San Andreas Mod APK. Explorez notre mission de fournir du contenu de jeu sûr et vérifié aux joueurs du monde entier.',
    it: 'Scopri GTA San Andreas Mod APK. Scopri la nostra missione di fornire contenuti di gioco sicuri e verificati ai giocatori di tutto il mondo.',
    es: 'Aprende sobre GTA San Andreas Mod APK. Descubre nuestra misión de proporcionar contenido de juegos seguro y verificado a jugadores de todo el mundo.',
    pt: 'Saiba mais sobre GTA San Andreas Mod APK. Descubra nossa missão de fornecer conteúdo de jogos seguro e verificado para jogadores em todo o mundo.',
    ru: 'Узнайте о GTA San Andreas Mod APK. Откройте для себя нашу миссию по предоставлению безопасного, проверенного игрового контента.',
    ja: 'GTA San Andreas Mod APKについて詳しく知る。世界中のプレイヤーに安全で検証済みのゲーム コンテンツを提供するという当社の使命を発見してください。'
  };

  const title = titles[locale] || titles['en'];
  const description = descriptions[locale] || descriptions['en'];

  return {
    title,
    description,
    alternates: {
      canonical: `${base}${path}`,
      languages: generateAlternateLanguages('/about', base),
    },
    openGraph: generateOpenGraphMetadata({
      title,
      description,
      url: `${base}${path}`,
      locale,
      imageAlt: 'About GTA San Andreas Mod APK',
    }),
    twitter: generateTwitterCardMetadata({
      title,
      description,
    }),
    robots: generateRobotsMetadata(),
  };
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100">
      {/* Header Section */}
      <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
            About GTA San Apk
          </h1>
          <p className="text-gray-400 text-lg">
            Your Premier Gaming Resource for GTA San Andreas
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900/50 backdrop-blur border border-[#00ff87]/20 rounded-xl p-8 space-y-8">

          {/* Our Mission */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              GTA San Apk is dedicated to providing comprehensive, accurate, and educational information about GTA San Andreas - one of the most iconic gaming franchises of all time. Our mission is to create a trusted resource where gaming enthusiasts can learn about gameplay mechanics, strategies, features, and the rich gaming culture surrounding this legendary title.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              We believe in transparency, original content, and respect for intellectual property. Every article, guide, and piece of information on our site is crafted with care and integrity.
            </p>
          </section>

          {/* What We Do */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              What We Offer
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#00ff87] mb-2">Comprehensive Gaming Guides</h3>
                <p className="text-gray-300 text-sm">
                  Step-by-step guides, walkthroughs, and tutorials to help players navigate the world of GTA San Andreas and maximize their gaming experience.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#00ff87] mb-2">Original Strategy Content</h3>
                <p className="text-gray-300 text-sm">
                  Original gaming strategies, tips, and tricks developed by our gaming enthusiasts to help players overcome challenges and discover secrets.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#00ff87] mb-2">Game Information & Features</h3>
                <p className="text-gray-300 text-sm">
                  Detailed information about gameplay mechanics, features, vehicles, missions, characters, and everything else related to GTA San Andreas.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#00ff87] mb-2">Community & Discussion</h3>
                <p className="text-gray-300 text-sm">
                  A space for gaming enthusiasts to learn, share, and discuss their passion for GTA San Andreas and gaming in general.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-[#00ff87]/10 to-transparent border border-[#00ff87]/30 rounded-lg p-4">
                <h3 className="text-white font-bold mb-2">✓ Authenticity</h3>
                <p className="text-gray-300 text-sm">
                  We provide original, honest content without misleading claims or exaggerations.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#00ff87]/10 to-transparent border border-[#00ff87]/30 rounded-lg p-4">
                <h3 className="text-white font-bold mb-2">✓ Transparency</h3>
                <p className="text-gray-300 text-sm">
                  We are clear about our relationships, data practices, and policies with users.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#00ff87]/10 to-transparent border border-[#00ff87]/30 rounded-lg p-4">
                <h3 className="text-white font-bold mb-2">✓ Respect for IP</h3>
                <p className="text-gray-300 text-sm">
                  We respect Rockstar Games' intellectual property and acknowledge their ownership of GTA.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#00ff87]/10 to-transparent border border-[#00ff87]/30 rounded-lg p-4">
                <h3 className="text-white font-bold mb-2">✓ User Privacy</h3>
                <p className="text-gray-300 text-sm">
                  We protect user data and follow strict privacy and security standards.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#00ff87]/10 to-transparent border border-[#00ff87]/30 rounded-lg p-4">
                <h3 className="text-white font-bold mb-2">✓ Quality Content</h3>
                <p className="text-gray-300 text-sm">
                  We invest time and effort into creating accurate, helpful, and engaging content.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#00ff87]/10 to-transparent border border-[#00ff87]/30 rounded-lg p-4">
                <h3 className="text-white font-bold mb-2">✓ Community Focus</h3>
                <p className="text-gray-300 text-sm">
                  We build a supportive community where gamers can learn and connect.
                </p>
              </div>
            </div>
          </section>

          {/* Our Expertise */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Our Expertise
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The GTA San Apk team consists of dedicated gaming enthusiasts with extensive knowledge of:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-4">
              <li>• GTA San Andreas gameplay mechanics and features</li>
              <li>• Game strategy and optimization techniques</li>
              <li>• Gaming culture and community dynamics</li>
              <li>• Web development and digital publishing</li>
              <li>• Content creation and SEO best practices</li>
              <li>• Privacy, security, and compliance standards</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <section className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">⚠️ Important Legal Notice</h3>
            <p className="text-gray-300 text-sm">
              GTA San Andreas is a registered trademark of Rockstar Games, Inc. We are an independent fan and information resource, not affiliated with, endorsed by, or associated with Rockstar Games. We acknowledge Rockstar Games' ownership of all GTA San Andreas intellectual property and respect their rights.
            </p>
            <p className="text-gray-300 text-sm mt-4">
              All information provided on this site is for educational and entertainment purposes. We are not responsible for third-party downloads, modifications, or external applications. Users are responsible for compliance with all applicable laws and regulations.
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Get In Touch
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Have questions about our site, suggestions for content, or want to collaborate? We'd love to hear from you!
            </p>
            <div className="bg-gray-800 rounded-lg p-6 mt-4">
              <p className="text-gray-300">
                <strong>Email:</strong> gta868309@gmail.com<br/>
                <strong>Website:</strong> gtasanandreas.info<br/>
                <strong>Response Time:</strong> We aim to respond within 24-48 hours<br/>
                <strong>Available:</strong> 24/7 (email and contact form)
              </p>
            </div>
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
  );
}
