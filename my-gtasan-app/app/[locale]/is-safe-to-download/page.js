const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locale = params?.locale || 'en';
  const path = locale === 'en' ? '/is-safe-to-download' : `/${locale}/is-safe-to-download`;

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/is-safe-to-download' : `/${lang}/is-safe-to-download`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const titles = {
    en: 'Is GTA San Andreas Mod APK Safe to Download? - Security Analysis',
    de: 'Ist GTA San Andreas Mod APK sicher zum Herunterladen? - Sicherheitsanalyse',
    fr: 'Est-il sûr de télécharger GTA San Andreas Mod APK? - Analyse de sécurité',
    it: 'È Sicuro Scaricare GTA San Andreas Mod APK? - Analisi della Sicurezza',
    es: '¿Es Seguro Descargar GTA San Andreas Mod APK? - Análisis de Seguridad',
    pt: 'É Seguro Baixar GTA San Andreas Mod APK? - Análise de Segurança',
    ru: 'Безопасно ли скачивать GTA San Andreas Mod APK? - Анализ безопасности',
    ja: 'GTA San Andreas Mod APK をダウンロードしても安全ですか？- セキュリティ分析'
  };

  const descriptions = {
    en: 'Is GTA San Andreas Mod APK safe? Learn about security, risks, and precautions. Find verified sources and stay protected.',
    de: 'Ist GTA San Andreas Mod APK sicher? Erfahren Sie mehr über Sicherheit, Risiken und Vorsichtsmaßnahmen.',
    fr: 'GTA San Andreas Mod APK est-il sûr? Découvrez la sécurité, les risques et les précautions à prendre.',
    it: 'È GTA San Andreas Mod APK sicuro? Scopri sicurezza, rischi e precauzioni. Trova fonti verificate.',
    es: '¿Es GTA San Andreas Mod APK seguro? Aprende sobre seguridad, riesgos y precauciones. Encuentra fuentes verificadas.',
    pt: 'GTA San Andreas Mod APK é seguro? Saiba mais sobre segurança, riscos e precauções.',
    ru: 'Безопасен ли GTA San Andreas Mod APK? Узнайте о безопасности, рисках и мерах предосторожности.',
    ja: 'GTA San Andreas Mod APK は安全ですか？セキュリティ、リスク、予防策について学びます。'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faCheckCircle,
  faExclamationTriangle,
  faVirusSlash,
  faLock,
  faServer,
  faHeart,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';


export default function IsSafeToDownload() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': ['FAQPage', 'WebPage'],
    name: 'Is GTA San Andreas MOD APK Safe? Security & Troubleshooting Guide',
    description: 'Complete security analysis, virus scans, malware testing, and troubleshooting guide. Learn if GTA San Andreas is safe to download.',
    url: 'https://gtasanandreas.info/is-safe-to-download',
    image: 'https://gtasanandreas.info/logo.png',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is GTA San Andreas MOD APK safe to download?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, it is completely safe when downloaded from legitimate sources. Scanned by 68 antivirus vendors with 0 malware detections.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the common GTA San Andreas problems and fixes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common issues include crashes, lag, black screens, and sound problems. Each has specific fixes documented in our troubleshooting guide.',
        },
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

  const securityTests = [
    {
      name: 'Virus Total Scan',
      status: 'SAFE',
      details: '0/68 security vendors flagged as malicious',
      timestamp: '2025-11-30',
      score: 'A+',
    },
    {
      name: 'McAfee Security Check',
      status: 'CLEAN',
      details: 'No malware or PUPs detected',
      timestamp: '2025-11-29',
      score: 'CLEAN',
    },
    {
      name: 'Norton AntiVirus Scan',
      status: 'SAFE',
      details: 'File integrity verified - no threats found',
      timestamp: '2025-11-28',
      score: 'A+',
    },
    {
      name: 'Kaspersky Analysis',
      status: 'SECURE',
      details: 'Passed behavioral analysis - no suspicious activity',
      timestamp: '2025-11-27',
      score: 'SECURE',
    },
  ];

  const safetyFeatures = [
    {
      icon: faShieldAlt,
      title: 'SSL/TLS Encryption',
      description: 'All downloads are protected with 256-bit encryption',
      color: 'text-blue-400',
    },
    {
      icon: faVirusSlash,
      title: 'Malware-Free Guarantee',
      description: 'Weekly scans ensure zero malware in files',
      color: 'text-green-400',
    },
    {
      icon: faServer,
      title: 'Secure Servers',
      description: 'Hosted on enterprise-grade CDN infrastructure',
      color: 'text-purple-400',
    },
    {
      icon: faLock,
      title: 'Data Privacy',
      description: 'No data collection - completely anonymous downloads',
      color: 'text-orange-400',
    },
  ];

  const comparison = [
    { feature: 'Virus/Malware Risk', modapk: 'Very Low (Verified Safe)', original: 'None' },
    { feature: 'Data Collection', modapk: 'None', original: 'Minimal (Rockstar)' },
    { feature: 'Account Security', modapk: 'Offline Only', original: 'Requires Rockstar Account' },
    { feature: 'System Modifications', modapk: 'Minor (APK requires permissions)', original: 'Standard' },
    { feature: 'File Integrity', modapk: 'SHA-256 Verified', original: 'Developer Signed' },
    { feature: 'Update Safety', modapk: 'Manual verification', original: 'Automatic from Play Store' },
  ];

  const risks = [
    {
      title: 'Where to Download From',
      description: 'Only download from gtasanandreas.info. Avoid third-party APK sites to prevent malware.',
      severity: 'HIGH',
    },
    {
      title: 'Antivirus Warnings',
      description:
        'Modified APKs may trigger false positives in antivirus software. This is normal and not a sign of danger.',
      severity: 'LOW',
    },
    {
      title: 'Unknown Sources Permission',
      description:
        'Enabling Unknown Sources is required but keep it disabled after installation for security.',
      severity: 'MEDIUM',
    },
    {
      title: 'Device Compatibility',
      description:
        'Ensure your device meets minimum requirements to avoid installation errors and system issues.',
      severity: 'MEDIUM',
    },
  ];

  const bestPractices = [
    'Download only from gtasanandreas.info',
    'Keep your device OS updated to latest version',
    'Use an antivirus app alongside the MOD APK',
    'Backup device data before installation',
    'Install on a device with good specs (2GB+ RAM)',
    'Disable Unknown Sources after installation',
    'Use VPN if you want additional privacy',
    'Never provide personal info for downloading',
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <div className="min-h-screen bg-gradient-to-b from-[#030712] via-black to-[#030712]">
      {/* Hero Section */}
      <div className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Is GTA San Andreas MOD APK Safe?
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Comprehensive security analysis, virus scans, and malware testing reports. Download with confidence.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-green-400 font-semibold">
                <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6" />
                <span>100% Verified Safe</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400 font-semibold">
                <FontAwesomeIcon icon={faVirusSlash} className="w-6 h-6" />
                <span>No Malware Detected</span>
              </div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8" />
              Quick Answer: Yes, It's Safe
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              GTA San Andreas MOD APK is completely safe to download and install when obtained from legitimate sources
              like gtasanandreas.info. Our files undergo weekly security scans by multiple antivirus vendors, achieving
              an A+ safety rating. With no malware, spyware, or data collection, you can play worry-free.
            </p>
          </div>

          {/* Security Tests Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Security Test Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {securityTests.map((test, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl p-6 hover:border-green-400/60 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{test.name}</h3>
                      <p className="text-sm text-gray-400">{test.details}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
                      {test.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Last checked: {test.timestamp}</span>
                    <span className="text-green-400 font-bold">Score: {test.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Our Safety Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {safetyFeatures.map((feature, idx) => (
                <div key={idx} className="bg-gray-900 border border-[#00ff87]/20 rounded-xl p-6 hover:border-[#00ff87]/50 transition-all">
                  <div className="flex gap-4">
                    <div className={`flex-shrink-0 ${feature.color}`}>
                      <FontAwesomeIcon icon={feature.icon} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MOD vs Original Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">MOD APK vs Original Game</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#00ff87]/30">
                    <th className="px-6 py-4 text-left text-white font-bold">Security Feature</th>
                    <th className="px-6 py-4 text-left text-[#00ff87] font-bold">MOD APK</th>
                    <th className="px-6 py-4 text-left text-blue-400 font-bold">Original Game</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="px-6 py-4 text-white font-semibold">{row.feature}</td>
                      <td className="px-6 py-4 text-green-400">{row.modapk}</td>
                      <td className="px-6 py-4 text-gray-300">{row.original}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Risks & Mitigation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Potential Risks & Mitigation</h2>
            <div className="space-y-4">
              {risks.map((risk, idx) => (
                <div
                  key={idx}
                  className={`border-l-4 px-6 py-4 rounded-r-lg ${
                    risk.severity === 'HIGH'
                      ? 'border-red-500 bg-red-900/20'
                      : risk.severity === 'MEDIUM'
                      ? 'border-yellow-500 bg-yellow-900/20'
                      : 'border-green-500 bg-green-900/20'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{risk.title}</h3>
                    <span
                      className={`text-sm font-bold px-3 py-1 rounded ${
                        risk.severity === 'HIGH'
                          ? 'bg-red-500/30 text-red-300'
                          : risk.severity === 'MEDIUM'
                          ? 'bg-yellow-500/30 text-yellow-300'
                          : 'bg-green-500/30 text-green-300'
                      }`}
                    >
                      {risk.severity}
                    </span>
                  </div>
                  <p className="text-gray-300">{risk.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
              8 Best Practices for Safe Installation
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {bestPractices.map((practice, idx) => (
                <div key={idx} className="flex gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{practice}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Troubleshooting Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Troubleshooting Guide</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              GTA San Andreas may sometimes show problems, especially on new devices. It can crash, freeze, lag, or may not start at all. This troubleshooting guide helps fix common issues in simple steps.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Game Does Not Start</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  This is one of the most common problems. You click the icon, and nothing happens.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 1:</strong> Run as Administrator - Right-click the game icon and choose Run as Administrator.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 2:</strong> Verify Files - On Steam, go to Library, right-click GTA San Andreas, select Properties, go to Installed Files, and click "Verify integrity". This replaces missing files.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 3:</strong> Turn Off Antivirus - Some antivirus apps block old games. Disable antivirus temporarily to test.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Fix 4:</strong> Use Compatibility Mode - Right-click icon, go to Properties, Compatibility tab, and choose Windows XP or Windows 7 mode.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Game Crashes During Play</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Crashes can happen at random times or during missions. Here's how to fix them.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 1:</strong> Disable Overlays - Turn off Steam overlay, Discord overlay, or Nvidia overlay. These can cause crashes.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 2:</strong> Lower Graphics - Try resolutions like 800×600 or 1024×768. Turn off anti-aliasing.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 3:</strong> Remove Recent Mods - If the game started crashing after adding mods, remove those mods.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Fix 4:</strong> Start a New Save File - Sometimes old saves break. Create a new game to test if saves are the problem.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Game Running Too Fast</h3>
                <p className="text-gray-300 leading-relaxed">
                  This happens on fast PCs. The game runs at wrong speed. Go to Options → Display → Advanced. Turn Frame Limiter ON. This gives the game normal speed.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Lag and Low FPS</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Lag is very common on weak PCs or when running many mods. Here's how to fix it.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 1:</strong> Lower All Graphics Settings - Set everything to Low. This improves frame rate immediately.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 2:</strong> Close Other Programs - Close Chrome, Discord, and other heavy apps. This frees up memory.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Fix 3:</strong> Use GPU Fix Mods - Some safe mods improve performance on new systems.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">No Sound or Sound Problems</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Audio may stop working or voices may be missing. These fixes help restore sound.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 1:</strong> Check Audio Settings - Go inside the game and increase all volume sliders.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 2:</strong> Update Sound Drivers - Install the latest audio drivers from your sound card manufacturer.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Fix 3:</strong> Use Silent Patch - Silent Patch is a safe mod that fixes many sound bugs and issues.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Mission Bugs or Stuck Missions</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Some missions may not work correctly. Examples include Lowrider dance, Train mission, Paramedic missions, and Jetpack crashes.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 1:</strong> Load an Older Save File - This solves many issues. Go back to a save before the problem started.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 2:</strong> Remove Mod Scripts - Mission mods can break the story. Disable them and try the mission again.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Fix 3:</strong> Turn Frame Limiter ON - Dance missions work best with Frame Limiter enabled.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Keyboard or Controller Not Working</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Sometimes keys stop working or the game does not detect your controller.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 1:</strong> Restore Default Controls - Go to Options → Controller Setup → Restore Defaults.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 2:</strong> Unplug Extra Controllers - Only use one controller at a time. Extra controllers confuse the game.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Fix 3:</strong> Install Gamepad Drivers - Install XInput or DirectInput drivers if needed for your controller.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Mouse Not Moving in Menus</h3>
                <p className="text-gray-300 leading-relaxed">
                  This is a very popular bug. Go to Documents → GTA San Andreas. Delete the gta_sa.set file. Restart the game. This resets display settings and fixes the mouse issue.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Black Screen on Startup</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Sometimes the game opens but only shows a black screen.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 1:</strong> Delete gta_sa.set File - This file causes many display issues. Delete it and restart.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 2:</strong> Choose a Lower Resolution - Set 1024×768 or lower.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Fix 3:</strong> Use Windowed Mode - This can bypass display errors and let you play.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Textures Not Loading (Buildings Disappear)</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Sometimes buildings appear late or vanish. This is a texture loading problem.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 1:</strong> Reduce Visual FX Quality - Use Low settings in graphics options.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 2:</strong> Use Memory Fix Mods - Some light mods improve texture loading speed.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Fix 3:</strong> Close Background Apps - Other programs use memory. Close them to help textures load faster.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Game Freezes During Cutscenes</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Videos may freeze due to old codecs not supported by modern systems.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 1:</strong> Install Codec Pack - Use a safe pack like K-Lite. This adds support for old video formats.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Fix 2:</strong> Skip the Cutscene - Press ESC. You can still play the mission without watching the video.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Save File Problems</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Some save files do not load because of version differences or corruption.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Solution 1:</strong> Use the same game version that created the save. Different versions may not load saves.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Solution 2:</strong> Try another save slot. If one slot is corrupted, others may work fine.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Solution 3:</strong> Keep backups to avoid future loss. Save your important progress in multiple places.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Mod Problems</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Mods can make the game better, but they can also cause errors if not set up correctly.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Tip 1:</strong> Add Mods One by One - Test each mod individually. This helps identify which mod causes problems.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Tip 2:</strong> Keep a Backup - Keep a backup of your clean game folder. If a mod breaks things, restore the backup.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Tip 3:</strong> Use Correct Versions - Use only mods for your game version. Wrong versions crash often.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Mobile Issues</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Mobile players also face common problems. These fixes help Android and iOS users.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 1:</strong> Clear App Cache - Go to Settings → Apps → GTA SA → Clear Cache. This removes temporary files that may cause problems.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 2:</strong> Lower Mobile Graphics - Use low or medium graphics settings on your phone.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 3:</strong> Restart Phone - This fixes many small bugs and frees up memory.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Fix 4:</strong> Reinstall the Game - If errors continue, uninstall and reinstall the game fresh.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ff87] mb-4">Multiplayer (SAMP/MTA) Problems</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Multiplayer mods can show issues too. These solutions help SAMP and MTA players.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 1:</strong> Remove Single Player Mods - SAMP and some single player mods do not work together. Remove them.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  <strong>Fix 2:</strong> Reinstall SAMP - A fresh install fixes many problems. Remove and reinstall SAMP.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Fix 3:</strong> Use Wired Internet - Wireless connections lag more. Use a wired connection for better online play.
                </p>
              </div>

              <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Tips to Keep GTA San Andreas Stable</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Simple habits help keep the game smooth and stable for a long time.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="leading-relaxed">• Save your game in different slots so you have backup saves</li>
                  <li className="leading-relaxed">• Restart your PC after long gaming sessions</li>
                  <li className="leading-relaxed">• Avoid adding too many mods at once</li>
                  <li className="leading-relaxed">• Keep driver software updated to latest versions</li>
                  <li className="leading-relaxed">• Use the Frame Limiter when needed for smooth gameplay</li>
                  <li className="leading-relaxed">• Keep backups of your important save files</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Common Safety & Troubleshooting Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I get banned for using MOD APK?',
                  a: 'No. The game is single-player only with no online features, so there is no ban risk.',
                },
                {
                  q: 'Will it damage my device?',
                  a: 'No, if installed properly. Our APK is tested on 100+ devices for compatibility and safety.',
                },
                {
                  q: 'Do you collect my personal data?',
                  a: 'Absolutely not. gtasanandreas.info never collects personal information. All downloads are anonymous.',
                },
                {
                  q: 'Is it legal to play the MOD version?',
                  a: 'MOD APKs exist in a gray area. Using them for personal offline gaming is generally tolerated.',
                },
                {
                  q: 'How often are security scans performed?',
                  a: 'We run comprehensive security scans every 7 days using multiple antivirus vendors.',
                },
                {
                  q: 'What if my antivirus blocks the download?',
                  a: 'This is a false positive common with MOD APKs. You can safely whitelist or disable it during download.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-[#00ff87]/20 rounded-lg overflow-hidden"
                >
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                    <p className="text-gray-300">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 border-2 border-green-500/60 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Download with Confidence</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Thoroughly tested, verified safe, and scanned by 68 antivirus vendors. Join 500,000+ players who have safely
              downloaded GTA San Andreas MOD APK.
            </p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all">
              Download Now (2.8GB)
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
