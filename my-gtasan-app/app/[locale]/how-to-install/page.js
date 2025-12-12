const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/how-to-install' : `/${locale}/how-to-install`;

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/how-to-install' : `/${lang}/how-to-install`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const titles = {
    en: 'How to Install GTA San Andreas Mod APK - Step-by-Step Guide',
    de: 'Wie man GTA San Andreas Mod APK installiert - Schritt-für-Schritt-Anleitung',
    fr: 'Comment Installer GTA San Andreas Mod APK - Guide Étape par Étape',
    it: 'Come Installare GTA San Andreas Mod APK - Guida Passo Dopo Passo',
    es: 'Cómo Instalar GTA San Andreas Mod APK - Guía Paso a Paso',
    pt: 'Como Instalar GTA San Andreas Mod APK - Guia Passo a Passo',
    ru: 'Как установить GTA San Andreas Mod APK - Пошаговое руководство',
    ja: 'GTA San Andreas Mod APK のインストール方法 - ステップバイステップ ガイド'
  };

  const descriptions = {
    en: 'Learn how to install GTA San Andreas Mod APK on Android. Follow our step-by-step installation guide with tips and troubleshooting.',
    de: 'Erfahren Sie, wie Sie GTA San Andreas Mod APK auf Android installieren. Folgen Sie unserer Schritt-für-Schritt-Anleitung.',
    fr: 'Apprenez à installer GTA San Andreas Mod APK sur Android. Suivez notre guide d\'installation étape par étape.',
    it: 'Scopri come installare GTA San Andreas Mod APK su Android. Segui la nostra guida di installazione passo dopo passo.',
    es: 'Aprende a instalar GTA San Andreas Mod APK en Android. Sigue nuestra guía de instalación paso a paso.',
    pt: 'Aprenda a instalar GTA San Andreas Mod APK no Android. Siga nosso guia de instalação passo a passo.',
    ru: 'Узнайте, как установить GTA San Andreas Mod APK на Android. Следуйте нашему пошаговому руководству установки.',
    ja: 'Android に GTA San Andreas Mod APK をインストールする方法を学びます。ステップ バイ ステップ ガイドに従ってください。'
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

import HowToInstallContent from './HowToInstallContent';

export default async function HowToInstallPage({ params }) {
  const { locale } = await params;

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': ['HowTo', 'FAQPage'],
    name: 'How to Install GTA San Andreas - Complete Guide',
    description: 'Complete step-by-step guide to install GTA San Andreas MOD APK on Android, PC, and Mac. Installation tips and system requirements.',
    image: 'https://gtasanandreas.info/heroimage2.png',
    prepTime: 'PT10M',
    totalTime: 'PT20M',
    estimatedCost: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      price: '0',
    },
    tool: [
      { '@type': 'HowToTool', name: 'Android Device or PC' },
      { '@type': 'HowToTool', name: 'File Manager' },
      { '@type': 'HowToTool', name: 'GTA San Andreas MOD APK file' },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Download the APK File',
        text: 'Visit gtasanandreas.info and click the "Download MOD APK" button. The file will be approximately 2.5-3GB.',
        image: 'https://gtasanandreas.info/logo.png',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Enable Unknown Sources',
        text: 'Go to Settings > Security > Unknown Sources and toggle it ON. This allows installation from non-Play Store sources.',
        image: 'https://gtasanandreas.info/logo.png',
      },
    ],
    author: {
      '@type': 'Organization',
      name: 'GTA San Andreas Community',
      url: 'https://gtasanandreas.info',
    },
    datePublished: '2024-01-01',
    dateModified: '2025-12-02',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <HowToInstallContent />
    </>
  );
}
