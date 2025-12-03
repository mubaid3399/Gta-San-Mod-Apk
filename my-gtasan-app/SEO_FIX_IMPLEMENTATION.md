# SEO FIX IMPLEMENTATION GUIDE

## Status: IN PROGRESS ✅

### Completed Fixes:
- ✅ Fix #1: gta-cars broken canonical URL (line 8: 'https://example.com' → 'https://gtasanandreas.info')
- ✅ Fix #2: Added Russian & Japanese hreflang to root layout.js
- ✅ Fix #3: Added metadata to about/page.js

### Remaining Fixes (10 pages):
- ⏳ acceptable-use/page.js
- ⏳ community/page.js
- ⏳ contact/page.js
- ⏳ cookie-policy/page.js
- ⏳ faq/page.js
- ⏳ how-to-install/page.js
- ⏳ is-safe-to-download/page.js
- ⏳ mod-apk-vs-original/page.js
- ⏳ privacy-policy/page.js
- ⏳ terms-of-service/page.js

---

## METADATA TEMPLATE FOR EACH PAGE

Copy this template and customize for each page:

```javascript
import { getTranslations } from 'next-intl/server';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locale = params?.locale || 'en';
  const path = locale === 'en' ? '/[PAGE_PATH]' : `/${locale}/[PAGE_PATH]`;

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/[PAGE_PATH]' : `/${lang}/[PAGE_PATH]`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const titles = {
    en: '[ENGLISH_TITLE_WITH_KEYWORD]',
    de: '[GERMAN_TITLE]',
    fr: '[FRENCH_TITLE]',
    it: '[ITALIAN_TITLE]',
    es: '[SPANISH_TITLE]',
    pt: '[PORTUGUESE_TITLE]',
    ru: '[RUSSIAN_TITLE]',
    ja: '[JAPANESE_TITLE]'
  };

  const descriptions = {
    en: '[ENGLISH_DESCRIPTION_150_CHARS]',
    de: '[GERMAN_DESCRIPTION]',
    fr: '[FRENCH_DESCRIPTION]',
    it: '[ITALIAN_DESCRIPTION]',
    es: '[SPANISH_DESCRIPTION]',
    pt: '[PORTUGUESE_DESCRIPTION]',
    ru: '[RUSSIAN_DESCRIPTION]',
    ja: '[JAPANESE_DESCRIPTION]'
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
  };
}

'use client';

import { useTranslations } from 'next-intl';

// ... rest of component unchanged
```

---

## SPECIFIC METADATA FOR EACH PAGE

### 1. acceptable-use/page.js

**Page Path**: `/acceptable-use`

**Titles**:
- en: 'Acceptable Use Policy - GTA San Andreas Mod APK'
- de: 'Akzeptable Nutzungsrichtlinie - GTA San Andreas Mod APK'
- fr: 'Politique d''Utilisation Acceptable - GTA San Andreas Mod APK'
- it: 'Politica di Utilizzo Accettabile - GTA San Andreas Mod APK'
- es: 'Política de Uso Aceptable - GTA San Andreas Mod APK'
- pt: 'Política de Uso Aceitável - GTA San Andreas Mod APK'
- ru: 'Политика приемлемого использования - GTA San Andreas Mod APK'
- ja: '利用規約 - GTA San Andreas Mod APK'

**Descriptions**:
- en: 'Review our acceptable use policy for GTA San Andreas Mod APK. Understand terms of service and user conduct guidelines.'
- de: 'Überprüfen Sie unsere Richtlinie für akzeptable Nutzung. Verstehen Sie die Nutzungsbedingungen und Richtlinien für Benutzerverhalten.'
- fr: 'Examinez notre politique d''utilisation acceptable. Comprenez les conditions de service et les directives de conduite des utilisateurs.'
- it: 'Esamina la nostra politica di utilizzo accettabile. Comprendi i termini di servizio e le linee guida sulla condotta degli utenti.'
- es: 'Revisa nuestra política de uso aceptable. Comprende los términos de servicio y las directrices de conducta del usuario.'
- pt: 'Revise nossa política de uso aceitável. Entenda os termos de serviço e as diretrizes de conduta do usuário.'
- ru: 'Ознакомьтесь с нашей политикой приемлемого использования. Поймите условия обслуживания и правила поведения пользователей.'
- ja: '利用規約を確認してください。サービス条件とユーザー行為ガイドラインを理解してください。'

---

### 2. community/page.js

**Page Path**: `/community`

**Titles**:
- en: 'GTA San Andreas Gaming Community - Connect With Players'
- de: 'GTA San Andreas Gaming-Gemeinschaft - Verbinden Sie sich mit Spielern'
- fr: 'Communauté de Jeu GTA San Andreas - Connectez-vous avec d''autres Joueurs'
- it: 'Comunità di Gioco GTA San Andreas - Connettiti con i Giocatori'
- es: 'Comunidad de Juegos GTA San Andreas - Conecta con Jugadores'
- pt: 'Comunidade de Jogos GTA San Andreas - Conecte-se com Jogadores'
- ru: 'Игровое сообщество GTA San Andreas - Подключитесь к игрокам'
- ja: 'GTA San Andreas ゲーミング コミュニティ - プレイヤーと繋がる'

**Descriptions**:
- en: 'Join the GTA San Andreas community. Connect with players, share tips, discuss mods, and participate in gaming discussions.'
- de: 'Treten Sie der GTA San Andreas-Gemeinschaft bei. Verbinden Sie sich mit Spielern, teilen Sie Tipps und diskutieren Sie Mods.'
- fr: 'Rejoignez la communauté GTA San Andreas. Connectez-vous avec d''autres joueurs, partagez des conseils et discutez des mods.'
- it: 'Unisciti alla comunità GTA San Andreas. Connettiti con i giocatori, condividi suggerimenti e discuti di mod.'
- es: 'Únete a la comunidad GTA San Andreas. Conecta con jugadores, comparte consejos y discute sobre mods.'
- pt: 'Junte-se à comunidade GTA San Andreas. Conecte-se com jogadores, compartilhe dicas e discuta mods.'
- ru: 'Присоединитесь к сообществу GTA San Andreas. Подключитесь к игрокам, делитесь советами и обсуждайте моды.'
- ja: 'GTA San Andreas コミュニティに参加してください。プレイヤーと繋がり、ヒントを共有し、モッドについて議論してください。'

---

### 3. contact/page.js

**Page Path**: `/contact`

**Titles**:
- en: 'Contact Us - GTA San Andreas Mod APK Support'
- de: 'Kontaktieren Sie Uns - GTA San Andreas Mod APK Unterstützung'
- fr: 'Nous Contacter - Support GTA San Andreas Mod APK'
- it: 'Contattaci - Supporto GTA San Andreas Mod APK'
- es: 'Contáctenos - Soporte GTA San Andreas Mod APK'
- pt: 'Entre em Contato - Suporte GTA San Andreas Mod APK'
- ru: 'Свяжитесь с нами - Поддержка GTA San Andreas Mod APK'
- ja: 'お問い合わせ - GTA San Andreas Mod APK サポート'

**Descriptions**:
- en: 'Contact GTA San Andreas Mod APK support. Have questions or need help? Reach out to our team for assistance.'
- de: 'Kontaktieren Sie unseren GTA San Andreas Mod APK Support. Haben Sie Fragen? Wenden Sie sich an unser Team.'
- fr: 'Contactez le support GTA San Andreas Mod APK. Des questions? Veuillez nous contacter pour obtenir de l''aide.'
- it: 'Contatta il supporto GTA San Andreas Mod APK. Hai domande? Rivolgiti al nostro team per assistenza.'
- es: 'Contacta al soporte de GTA San Andreas Mod APK. ¿Tienes preguntas? Comunícate con nuestro equipo.'
- pt: 'Entre em contato com o suporte de GTA San Andreas Mod APK. Tem dúvidas? Converse com nosso time.'
- ru: 'Свяжитесь с поддержкой GTA San Andreas Mod APK. Есть вопросы? Обратитесь к нашей команде.'
- ja: 'GTA San Andreas Mod APK サポートにお問い合わせください。ご質問がありますか？当社のチームにお問い合わせください。'

---

### 4. cookie-policy/page.js

**Page Path**: `/cookie-policy`

**Titles**:
- en: 'Cookie Policy - GTA San Andreas Mod APK'
- de: 'Cookie-Richtlinie - GTA San Andreas Mod APK'
- fr: 'Politique relative aux Cookies - GTA San Andreas Mod APK'
- it: 'Politica sui Cookie - GTA San Andreas Mod APK'
- es: 'Política de Cookies - GTA San Andreas Mod APK'
- pt: 'Política de Cookies - GTA San Andreas Mod APK'
- ru: 'Политика в отношении файлов cookie - GTA San Andreas Mod APK'
- ja: 'クッキーポリシー - GTA San Andreas Mod APK'

**Descriptions**:
- en: 'Learn about our cookie policy. Understand how we use cookies to improve your experience on GTA San Andreas Mod APK.'
- de: 'Erfahren Sie mehr über unsere Cookie-Richtlinie. Verstehen Sie, wie wir Cookies verwenden, um Ihr Erlebnis zu verbessern.'
- fr: 'Découvrez notre politique relative aux cookies. Comprenez comment nous utilisons les cookies pour améliorer votre expérience.'
- it: 'Scopri la nostra politica sui cookie. Capire come utilizziamo i cookie per migliorare la tua esperienza.'
- es: 'Aprende sobre nuestra política de cookies. Comprende cómo utilizamos las cookies para mejorar tu experiencia.'
- pt: 'Saiba mais sobre nossa política de cookies. Entenda como usamos cookies para melhorar sua experiência.'
- ru: 'Узнайте о нашей политике в отношении файлов cookie. Поймите, как мы используем файлы cookie для улучшения вашего опыта.'
- ja: 'クッキーポリシーについて学びましょう。エクスペリエンス向上のためにクッキーをどう使うかを理解してください。'

---

### 5. faq/page.js

**Page Path**: `/faq`

**Titles**:
- en: 'FAQ - GTA San Andreas Mod APK Questions & Answers'
- de: 'Häufig Gestellte Fragen - GTA San Andreas Mod APK'
- fr: 'FAQ - Questions et Réponses GTA San Andreas Mod APK'
- it: 'Domande Frequenti - GTA San Andreas Mod APK'
- es: 'Preguntas Frecuentes - GTA San Andreas Mod APK'
- pt: 'Perguntas Frequentes - GTA San Andreas Mod APK'
- ru: 'Часто задаваемые вопросы - GTA San Andreas Mod APK'
- ja: 'よくある質問 - GTA San Andreas Mod APK'

**Descriptions**:
- en: 'Find answers to common questions about GTA San Andreas Mod APK. Learn about features, installation, safety, and more.'
- de: 'Finden Sie Antworten auf häufig gestellte Fragen zu GTA San Andreas Mod APK. Erfahren Sie mehr über Funktionen und Installation.'
- fr: 'Trouvez des réponses aux questions courantes sur GTA San Andreas Mod APK. Apprenez-en plus sur les fonctionnalités.'
- it: 'Trova risposte alle domande frequenti su GTA San Andreas Mod APK. Scopri di più su funzionalità e installazione.'
- es: 'Encuentra respuestas a preguntas frecuentes sobre GTA San Andreas Mod APK. Aprende sobre características e instalación.'
- pt: 'Encontre respostas a perguntas frequentes sobre GTA San Andreas Mod APK. Saiba mais sobre recursos e instalação.'
- ru: 'Найдите ответы на часто задаваемые вопросы о GTA San Andreas Mod APK. Узнайте о функциях и установке.'
- ja: 'GTA San Andreas Mod APK についてよくある質問に答えを見つけてください。機能とインストールについて学ぶ。'

---

### 6. how-to-install/page.js

**Page Path**: `/how-to-install`

**Titles**:
- en: 'How to Install GTA San Andreas Mod APK - Step-by-Step Guide'
- de: 'Wie man GTA San Andreas Mod APK installiert - Schritt-für-Schritt-Anleitung'
- fr: 'Comment Installer GTA San Andreas Mod APK - Guide Étape par Étape'
- it: 'Come Installare GTA San Andreas Mod APK - Guida Passo Dopo Passo'
- es: 'Cómo Instalar GTA San Andreas Mod APK - Guía Paso a Paso'
- pt: 'Como Instalar GTA San Andreas Mod APK - Guia Passo a Passo'
- ru: 'Как установить GTA San Andreas Mod APK - Пошаговое руководство'
- ja: 'GTA San Andreas Mod APK のインストール方法 - ステップバイステップ ガイド'

**Descriptions**:
- en: 'Learn how to install GTA San Andreas Mod APK on Android. Follow our step-by-step installation guide with tips and troubleshooting.'
- de: 'Erfahren Sie, wie Sie GTA San Andreas Mod APK auf Android installieren. Folgen Sie unserer Schritt-für-Schritt-Anleitung.'
- fr: 'Apprenez à installer GTA San Andreas Mod APK sur Android. Suivez notre guide d''installation étape par étape.'
- it: 'Scopri come installare GTA San Andreas Mod APK su Android. Segui la nostra guida di installazione passo dopo passo.'
- es: 'Aprende a instalar GTA San Andreas Mod APK en Android. Sigue nuestra guía de instalación paso a paso.'
- pt: 'Aprenda a instalar GTA San Andreas Mod APK no Android. Siga nosso guia de instalação passo a passo.'
- ru: 'Узнайте, как установить GTA San Andreas Mod APK на Android. Следуйте нашему пошаговому руководству установки.'
- ja: 'Android に GTA San Andreas Mod APK をインストールする方法を学びます。ステップ バイ ステップ ガイドに従ってください。'

---

### 7. is-safe-to-download/page.js

**Page Path**: `/is-safe-to-download`

**Titles**:
- en: 'Is GTA San Andreas Mod APK Safe to Download? - Security Analysis'
- de: 'Ist GTA San Andreas Mod APK sicher zum Herunterladen? - Sicherheitsanalyse'
- fr: 'Est-il sûr de télécharger GTA San Andreas Mod APK? - Analyse de sécurité'
- it: 'È Sicuro Scaricare GTA San Andreas Mod APK? - Analisi della Sicurezza'
- es: '¿Es Seguro Descargar GTA San Andreas Mod APK? - Análisis de Seguridad'
- pt: 'É Seguro Baixar GTA San Andreas Mod APK? - Análise de Segurança'
- ru: 'Безопасно ли скачивать GTA San Andreas Mod APK? - Анализ безопасности'
- ja: 'GTA San Andreas Mod APK をダウンロードしても安全ですか？- セキュリティ分析'

**Descriptions**:
- en: 'Is GTA San Andreas Mod APK safe? Learn about security, risks, and precautions. Find verified sources and stay protected.'
- de: 'Ist GTA San Andreas Mod APK sicher? Erfahren Sie mehr über Sicherheit, Risiken und Vorsichtsmaßnahmen.'
- fr: 'GTA San Andreas Mod APK est-il sûr? Découvrez la sécurité, les risques et les précautions à prendre.'
- it: 'È GTA San Andreas Mod APK sicuro? Scopri sicurezza, rischi e precauzioni. Trova fonti verificate.'
- es: '¿Es GTA San Andreas Mod APK seguro? Aprende sobre seguridad, riesgos y precauciones. Encuentra fuentes verificadas.'
- pt: 'GTA San Andreas Mod APK é seguro? Saiba mais sobre segurança, riscos e precauções.'
- ru: 'Безопасен ли GTA San Andreas Mod APK? Узнайте о безопасности, рисках и мерах предосторожности.'
- ja: 'GTA San Andreas Mod APK は安全ですか？セキュリティ、リスク、予防策について学びます。'

---

### 8. mod-apk-vs-original/page.js

**Page Path**: `/mod-apk-vs-original`

**Titles**:
- en: 'GTA San Andreas Mod APK vs Original - Complete Comparison'
- de: 'GTA San Andreas Mod APK vs Original - Vollständiger Vergleich'
- fr: 'GTA San Andreas Mod APK vs Original - Comparaison Complète'
- it: 'GTA San Andreas Mod APK vs Original - Confronto Completo'
- es: 'GTA San Andreas Mod APK vs Original - Comparación Completa'
- pt: 'GTA San Andreas Mod APK vs Original - Comparação Completa'
- ru: 'GTA San Andreas Mod APK vs Original - Полное сравнение'
- ja: 'GTA San Andreas Mod APK vs Original - 完全な比較'

**Descriptions**:
- en: 'Compare GTA San Andreas Mod APK with the original game. Learn differences, features, pros & cons in detail.'
- de: 'Vergleichen Sie GTA San Andreas Mod APK mit dem Originalspiel. Lernen Sie Unterschiede und Funktionen kennen.'
- fr: 'Comparez GTA San Andreas Mod APK avec le jeu original. Apprenez les différences et les fonctionnalités.'
- it: 'Confronta GTA San Andreas Mod APK con il gioco originale. Scopri le differenze e le funzionalità.'
- es: 'Compara GTA San Andreas Mod APK con el juego original. Aprende las diferencias y características.'
- pt: 'Compare GTA San Andreas Mod APK com o jogo original. Aprenda as diferenças e características.'
- ru: 'Сравните GTA San Andreas Mod APK с оригинальной игрой. Узнайте различия и функции.'
- ja: 'GTA San Andreas Mod APK をオリジナル ゲームと比較してください。違いと機能を学びます。'

---

### 9. privacy-policy/page.js

**Page Path**: `/privacy-policy`

**Titles**:
- en: 'Privacy Policy - GTA San Andreas Mod APK'
- de: 'Datenschutzrichtlinie - GTA San Andreas Mod APK'
- fr: 'Politique de Confidentialité - GTA San Andreas Mod APK'
- it: 'Politica sulla Privacy - GTA San Andreas Mod APK'
- es: 'Política de Privacidad - GTA San Andreas Mod APK'
- pt: 'Política de Privacidade - GTA San Andreas Mod APK'
- ru: 'Политика конфиденциальности - GTA San Andreas Mod APK'
- ja: 'プライバシーポリシー - GTA San Andreas Mod APK'

**Descriptions**:
- en: 'Review our privacy policy. Learn how we collect, use, and protect your personal information on GTA San Andreas Mod APK.'
- de: 'Überprüfen Sie unsere Datenschutzrichtlinie. Erfahren Sie, wie wir Ihre Daten schützen.'
- fr: 'Examinez notre politique de confidentialité. Découvrez comment nous protégeons vos données.'
- it: 'Esamina la nostra politica sulla privacy. Scopri come proteggiamo i tuoi dati.'
- es: 'Revisa nuestra política de privacidad. Aprende cómo protegemos tus datos.'
- pt: 'Revise nossa política de privacidade. Saiba como protegemos seus dados.'
- ru: 'Ознакомьтесь с нашей политикой конфиденциальности. Узнайте, как мы защищаем ваши данные.'
- ja: 'プライバシーポリシーを確認してください。個人情報の保護方法を学ぶ。'

---

### 10. terms-of-service/page.js

**Page Path**: `/terms-of-service`

**Titles**:
- en: 'Terms of Service - GTA San Andreas Mod APK'
- de: 'Nutzungsbedingungen - GTA San Andreas Mod APK'
- fr: 'Conditions d''Utilisation - GTA San Andreas Mod APK'
- it: 'Termini di Servizio - GTA San Andreas Mod APK'
- es: 'Términos de Servicio - GTA San Andreas Mod APK'
- pt: 'Termos de Serviço - GTA San Andreas Mod APK'
- ru: 'Условия использования - GTA San Andreas Mod APK'
- ja: '利用規約 - GTA San Andreas Mod APK'

**Descriptions**:
- en: 'Read our terms of service. Understand the rules and conditions for using GTA San Andreas Mod APK website.'
- de: 'Lesen Sie unsere Nutzungsbedingungen. Verstehen Sie die Regeln für die Nutzung unserer Website.'
- fr: 'Lisez nos conditions d''utilisation. Comprenez les règles d''utilisation de notre site Web.'
- it: 'Leggi i nostri termini di servizio. Comprendi le regole per l''utilizzo del nostro sito web.'
- es: 'Lee nuestros términos de servicio. Comprende las reglas para usar nuestro sitio web.'
- pt: 'Leia nossos termos de serviço. Entenda as regras para usar nosso site.'
- ru: 'Прочитайте наши условия использования. Поймите правила использования нашего сайта.'
- ja: '利用規約をお読みください。当社のウェブサイトの使用ルールを理解してください。'

---

## NEXT STEPS

1. Copy the metadata template above
2. Update each of the 10 remaining pages with their specific metadata
3. Add metadata BEFORE the `'use client';` line
4. Keep the rest of the component unchanged
5. Run `npm run build` to test
6. Deploy to production
7. Resubmit sitemap to Google Search Console

**Estimated Time**: 30-45 minutes (5 minutes per page)
**Difficulty**: Easy (copy-paste with customization)
**Impact**: Critical for SEO recovery

---

## After Completing All Fixes:

```bash
# Verify build
npm run build

# Deploy
git add .
git commit -m "SEO Fix: Add metadata to 11 pages, fix canonical URLs and hreflang"
git push

# Test in Google Search Console
# 1. Submit sitemap
# 2. Inspect each fixed page
# 3. Request indexing
```

**Estimated full recovery**: 7-14 days after deployment
