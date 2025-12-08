import { getTranslations } from 'next-intl/server';
import GtaCheatsContent from './GtaCheatsContent';
import { generateFAQSchema, generateBreadcrumbSchema } from '../../utils/schemaMarkup';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-cheats' : `/${locale}/gta-cheats`;
  const t = await getTranslations({ locale, namespace: 'gtaCheats' }).catch(() => null);

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/gta-cheats' : `/${lang}/gta-cheats`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const titles = {
    en: 'GTA San Andreas Cheats & Codes - Complete List 2025',
    de: 'GTA San Andreas Cheats & Codes - Komplette Liste 2025',
    fr: 'Codes de triche GTA San Andreas - Liste complète 2025',
    it: 'Codici cheat GTA San Andreas - Elenco completo 2025',
    es: 'Cheats de GTA San Andreas - Lista completa 2025',
    pt: 'Cheats e Códigos GTA San Andreas - Lista Completa 2025',
    ru: 'Читы GTA San Andreas - Полный список 2025',
    ja: 'GTA San Andreas チート&コード - 完全リスト2025'
  };

  const descriptions = {
    en: 'Unlock all GTA San Andreas cheats and codes. Money cheats, vehicle spawns, weapons, health, wanted level. Complete cheat list for maximum gameplay.',
    de: 'Schalte alle GTA San Andreas Cheats und Codes frei. Geldcheats, Fahrzeugspawn, Waffen, Gesundheit, Gewollte Stufe.',
    fr: 'Déverrouillez tous les codes de triche GTA San Andreas. Cheats d\'argent, apparition de véhicules, armes, santé, niveau de recherche.',
    it: 'Sblocca tutti i codici di GTA San Andreas. Cheat soldi, spawn di veicoli, armi, salute, livello ricercato.',
    es: 'Desbloquea todos los cheats de GTA San Andreas. Cheats de dinero, spawn de vehículos, armas, salud, nivel de búsqueda.',
    pt: 'Desbloqueie todos os cheats de GTA San Andreas. Cheats de dinheiro, spawn de veículos, armas, saúde, nível de procurado.',
    ru: 'Разблокируйте все читы GTA San Andreas. Читы на деньги, спавн транспорта, оружие, здоровье, уровень разыска.',
    ja: 'GTA San Andreasのすべてのチートコードをアンロック。お金のチート、車の出現、武器、体力、指名手配レベル。'
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
      images: ['/heroimage2.png'],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/heroimage2.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function GtaCheatsPage({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-cheats' : `/${locale}/gta-cheats`;

  const faqItems = [
    {
      question: 'What are GTA San Andreas cheats?',
      answer: 'GTA San Andreas cheats are special codes that unlock features like unlimited money, weapons, vehicles, and other gameplay modifications. You can enter these codes while playing to activate different effects. Our complete cheat list includes 50+ working codes for every platform.',
    },
    {
      question: 'How do I enter cheats in GTA San Andreas?',
      answer: 'On PC, press Enter to open the cheat console and type the cheat code. On consoles (PS2, Xbox), you cannot activate the cheat menu visibly, but the codes will work if entered correctly. For mobile devices, check our platform-specific guides for iOS and Android installation instructions.',
    },
    {
      question: 'Do cheats disable achievements or trophies?',
      answer: 'Yes, using cheats will prevent you from earning achievements or trophies on most platforms. Save your game before using cheats if you want to preserve your achievement progress. Consider using cheats only after completing missions.',
    },
    {
      question: 'Can I use cheats in multiplayer?',
      answer: 'No, cheats only work in single-player mode. Multiplayer games have anti-cheat systems that prevent cheat codes from functioning. Focus on legitimate gameplay progression for multiplayer modes.',
    },
    {
      question: 'Are cheats available in GTA San Andreas MOD APK?',
      answer: 'Yes, the MOD APK version includes many cheats already unlocked and activated by default, providing an enhanced gameplay experience with unlimited money and features. See our iOS and Android installation guides for setup instructions.',
    },
    {
      question: 'Which cheats make the most money fastest?',
      answer: 'The money cheat codes instantly add large sums, but for sustainable income, check our money-making guide which covers legitimate methods like burglary, store robbery, ATM robbery, and property income. These methods can earn $1000+ per hour without affecting achievements.',
    },
    {
      question: 'Can I use cheat codes on mobile (iOS/Android)?',
      answer: 'Yes, cheats work on mobile versions. However, the input method differs from PC. Our iOS and Android installation guides include specific instructions for entering cheat codes on mobile devices, including on-screen keyboard methods.',
    },
    {
      question: 'What\'s the best way to use cheats without ruining gameplay?',
      answer: 'Use cheats strategically: enable specific features (weapons/vehicles) rather than unlimited money to maintain challenge. Complete missions first, then use cheats to explore. Save regularly and experiment in separate save files. This approach keeps the game enjoyable while maximizing fun.',
    },
  ];

  const breadcrumbItems = [
    { name: 'Home', url: base },
    { name: 'GTA Cheats', url: `${base}${path}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      <GtaCheatsContent />
    </>
  );
}
