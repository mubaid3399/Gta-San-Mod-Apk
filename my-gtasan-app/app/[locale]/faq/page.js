import FAQContent from './FAQContent';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locale = (await params)?.locale || 'en';
  const path = locale === 'en' ? '/faq' : `/${locale}/faq`;

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/faq' : `/${lang}/faq`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const titles = {
    en: 'FAQ - GTA San Andreas Mod APK Questions & Answers',
    de: 'Häufig Gestellte Fragen - GTA San Andreas Mod APK',
    fr: 'FAQ - Questions et Réponses GTA San Andreas Mod APK',
    it: 'Domande Frequenti - GTA San Andreas Mod APK',
    es: 'Preguntas Frecuentes - GTA San Andreas Mod APK',
    pt: 'Perguntas Frequentes - GTA San Andreas Mod APK',
    ru: 'Часто задаваемые вопросы - GTA San Andreas Mod APK',
    ja: 'よくある質問 - GTA San Andreas Mod APK'
  };

  const descriptions = {
    en: 'Find answers to common questions about GTA San Andreas Mod APK. Learn about features, installation, safety, and more.',
    de: 'Finden Sie Antworten auf häufig gestellte Fragen zu GTA San Andreas Mod APK. Erfahren Sie mehr über Funktionen und Installation.',
    fr: 'Trouvez des réponses aux questions courantes sur GTA San Andreas Mod APK. Apprenez-en plus sur les fonctionnalités.',
    it: 'Trova risposte alle domande frequenti su GTA San Andreas Mod APK. Scopri di più su funzionalità e installazione.',
    es: 'Encuentra respuestas a preguntas frecuentes sobre GTA San Andreas Mod APK. Aprende sobre características e instalación.',
    pt: 'Encontre respostas a perguntas frequentes sobre GTA San Andreas Mod APK. Saiba mais sobre recursos e instalação.',
    ru: 'Найдите ответы на часто задаваемые вопросы о GTA San Andreas Mod APK. Узнайте о функциях и установке.',
    ja: 'GTA San Andreas Mod APK についてよくある質問に答えを見つけてください。機能とインストールについて学ぶ。'
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

export default function FAQ() {
  return <FAQContent />;
}
