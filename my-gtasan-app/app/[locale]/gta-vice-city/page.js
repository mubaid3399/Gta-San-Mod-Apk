import { getTranslations } from 'next-intl/server';
import ViceCityContent from './ViceCityContent';
import { generateBreadcrumbSchema, generateFAQSchema, generateVideoGameSchema } from '../../utils/schemaMarkup';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-vice-city' : `/${locale}/gta-vice-city`;
  const t = await getTranslations({ locale, namespace: 'viceCityContent' }).catch(() => null);

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/gta-vice-city' : `/${lang}/gta-vice-city`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const title = t?.('hero.title') || 'GTA Vice City - The Timeless Classic | Complete Guide 2025';
  const description =
    t?.('hero.subtitle') ||
    'Complete GTA Vice City guide covering gameplay, story, characters, weapons, vehicles, missions, cheats, and essential fixes. Download for PC and mobile.';

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
      images: ['/Gta/banner image.webp'],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/Gta/banner image.webp'],
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: 'GTA Vice City, Tommy Vercetti, Vice City game, GTA VC download, Vice City cheats, GTA Vice City PC, Vice City mobile, 1980s Miami, open world game',
  };
}

export default async function ViceCityPage({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/gta-vice-city' : `/${locale}/gta-vice-city`;

  const breadcrumbItems = [
    { name: 'Home', url: base },
    { name: 'GTA Vice City', url: `${base}${path}` },
  ];

  // FAQ data for structured data
  const faqData = [
    {
      question: "What is GTA Vice City?",
      answer: "GTA Vice City is an action-adventure game developed by Rockstar North and published by Rockstar Games. Released in 2002, it's set in the fictional Vice City, inspired by 1980s Miami. Players take on the role of Tommy Vercetti, a former mobster building a criminal empire."
    },
    {
      question: "Can I play GTA Vice City on PC?",
      answer: "Yes! GTA Vice City is available for PC. You can download it from Steam, Rockstar Games Launcher, or other authorized platforms. The PC version offers enhanced graphics and mod support."
    },
    {
      question: "Is GTA Vice City available on mobile?",
      answer: "Yes, GTA Vice City is available for both Android and iOS devices. The mobile version features enhanced graphics, cloud saves, and controller support for an optimized mobile gaming experience."
    },
    {
      question: "What are the system requirements for GTA Vice City on PC?",
      answer: "Minimum: Windows XP/Vista/7/8/10, 1 GHz Intel Pentium III or AMD Athlon processor, 128 MB RAM, 8x speed DVD drive, 915 MB hard drive space, 64 MB DirectX 9.0 compatible video card, DirectX 9.0 compatible sound card. Recommended specs are higher for better performance."
    },
    {
      question: "How can I fix the pink/purple car glitch in GTA Vice City?",
      answer: "This common graphical issue can be fixed by: 1) Updating your graphics drivers, 2) Using the 'No2Dvfx.ini' mod, 3) Installing the SilentPatch, or 4) Running the game in compatibility mode for Windows XP SP3."
    },
    {
      question: "What are the best cheats for GTA Vice City?",
      answer: "Popular cheats include: PANZER (spawn a tank), ASPIRINE (full health), THUGSTOOLS (weapon set 1), PROFESSIONALTOOLS (weapon set 2), FANNYMAGNET (attract ladies), CERTAINDEATH (Tommy smokes a cigarette), SEAWAYS (cars drive on water), and COMEFLYWITHME (cars can fly)."
    },
    {
      question: "How long does it take to complete GTA Vice City?",
      answer: "The main story takes approximately 15-20 hours to complete. For 100% completion, including all side missions, hidden packages, unique jumps, and rampages, expect around 30-35 hours of gameplay."
    },
    {
      question: "Is GTA Vice City better than GTA San Andreas?",
      answer: "Both games have their strengths. Vice City excels in storytelling, 1980s atmosphere, and a more focused narrative. San Andreas offers a larger map, more features like RPG elements and vehicle customization, and more gameplay variety. The choice depends on personal preference."
    }
  ];

  // VideoGame structured data
  const videoGameData = {
    name: 'Grand Theft Auto: Vice City',
    description: 'GTA Vice City is an action-adventure game set in 1980s Miami. Play as Tommy Vercetti and build a criminal empire in this iconic open-world game featuring memorable characters, thrilling missions, and an unforgettable soundtrack.',
    image: `${base}/Gta/banner image.webp`,
    url: `${base}${path}`,
    operatingSystem: 'Windows, Android, iOS',
    gamePlatform: ['PC', 'Android', 'iOS', 'PlayStation 2', 'Xbox'],
    genre: 'Action, Adventure, Open World',
    publisher: 'Rockstar Games',
    aggregateRating: {
      ratingValue: '4.7',
      ratingCount: '250000'
    },
    price: '9.99'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqData)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateVideoGameSchema(videoGameData)),
        }}
      />
      <ViceCityContent />
    </>
  );
}
