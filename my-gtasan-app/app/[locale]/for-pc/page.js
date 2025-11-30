import { getTranslations } from 'next-intl/server';
import ForPCContent from './ForPCContent';
import { generateBreadcrumbSchema } from '../../utils/schemaMarkup';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locale = params?.locale || 'en';
  const path = locale === 'en' ? '/for-pc' : `/${locale}/for-pc`;
  const t = await getTranslations({ locale, namespace: 'forPC' }).catch(() => null);

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/for-pc' : `/${lang}/for-pc`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const titles = {
    en: 'GTA San Andreas for PC - Download, Install & Play 2025',
    de: 'GTA San Andreas für PC - Herunterladen, Installieren und Spielen 2025',
    fr: 'GTA San Andreas pour PC - Télécharger, Installer et Jouer 2025',
    it: 'GTA San Andreas per PC - Scarica, Installa e Gioca 2025',
    es: 'GTA San Andreas para PC - Descargar, Instalar y Jugar 2025',
    pt: 'GTA San Andreas para PC - Baixe, Instale e Jogue 2025',
    ru: 'GTA San Andreas для ПК - Скачайте, установите и играйте 2025',
    ja: 'GTA San Andreas for PC - ダウンロード、インストール＆プレイ2025'
  };

  const descriptions = {
    en: 'Download GTA San Andreas for PC with enhanced graphics and mods. Complete installation guide, system requirements, gameplay features and tips.',
    de: 'Laden Sie GTA San Andreas für PC mit verbesserter Grafik herunter. Kompletter Installationsleitfaden, Systemanforderungen, Spielfunktionen.',
    fr: 'Téléchargez GTA San Andreas pour PC avec des graphiques améliorés. Guide d\'installation complet, configuration requise, fonctionnalités de jeu.',
    it: 'Scarica GTA San Andreas per PC con grafica migliorata. Guida all\'installazione completa, requisiti di sistema, funzionalità di gioco.',
    es: 'Descarga GTA San Andreas para PC con gráficos mejorados. Guía de instalación completa, requisitos del sistema, características del juego.',
    pt: 'Baixe GTA San Andreas para PC com gráficos aprimorados. Guia de instalação completo, requisitos do sistema, recursos de gameplay.',
    ru: 'Скачайте GTA San Andreas для ПК с улучшенной графикой. Полное руководство по установке, системные требования, функции игры.',
    ja: 'PCのGTA San Andreasをダウンロード。改善されたグラフィックス、完全なインストールガイド、システム要件、ゲームプレイ機能。'
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

export default function ForPCPage({ params }) {
  const locale = params?.locale || 'en';
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const path = locale === 'en' ? '/for-pc' : `/${locale}/for-pc`;

  const breadcrumbItems = [
    { name: 'Home', url: base },
    { name: 'For PC', url: `${base}${path}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      <ForPCContent />
    </>
  );
}
