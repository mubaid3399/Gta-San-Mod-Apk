import { getTranslations } from 'next-intl/server';
import ForIOSContent from './ForIOSContent';
import { generateBreadcrumbSchema } from '../../utils/schemaMarkup';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/for-ios' : `/${locale}/for-ios`;
  const t = await getTranslations({ locale, namespace: 'forIOS' }).catch(() => null);

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/for-ios' : `/${lang}/for-ios`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const titles = {
    en: 'GTA San Andreas for iOS - Download, Install & Play 2025',
    de: 'GTA San Andreas für iOS - Herunterladen, Installieren und Spielen 2025',
    fr: 'GTA San Andreas pour iOS - Télécharger, Installer et Jouer 2025',
    it: 'GTA San Andreas per iOS - Scarica, Installa e Gioca 2025',
    es: 'GTA San Andreas para iOS - Descargar, Instalar y Jugar 2025',
    pt: 'GTA San Andreas para iOS - Baixe, Instale e Jogue 2025',
    ru: 'GTA San Andreas для iOS - Скачайте, установите и играйте 2025',
    ja: 'GTA San Andreas for iOS - ダウンロード、インストール＆プレイ2025'
  };

  const descriptions = {
    en: 'Download GTA San Andreas for iOS with touch controls and cloud save. Complete installation guide, system requirements, gameplay features and tips for iPhone and iPad.',
    de: 'Laden Sie GTA San Andreas für iOS herunter. Touchscreen-Steuerung, Cloud-Speicher und kompletter Installationsleitfaden.',
    fr: 'Téléchargez GTA San Andreas pour iOS avec contrôles tactiles et sauvegarde cloud. Guide complet.',
    it: 'Scarica GTA San Andreas per iOS con controlli touch e salvataggio cloud. Guida completa.',
    es: 'Descarga GTA San Andreas para iOS con controles táctiles y almacenamiento en la nube. Guía completa.',
    pt: 'Baixe GTA San Andreas para iOS com controles de toque e salvamento na nuvem. Guia completo.',
    ru: 'Скачайте GTA San Andreas для iOS с сенсорным управлением и облачным сохранением.',
    ja: 'iOSのGTA San Andreasをダウンロード。タッチコントロール、クラウドセーブ。完全ガイド。'
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

export default async function ForIOSPage({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/for-ios' : `/${locale}/for-ios`;

  const breadcrumbItems = [
    { name: 'Home', url: base },
    { name: 'For iOS', url: `${base}${path}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      <ForIOSContent />
    </>
  );
}
