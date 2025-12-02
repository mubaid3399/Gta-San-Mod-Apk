'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestionCircle,
  faGamepad,
  faDownload,
  faHeadset,
  faShieldAlt,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';


export default function FAQ() {
  const [openCategory, setOpenCategory] = useState(0);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'GTA San Andreas Frequently Asked Questions',
    description: 'Complete FAQ page with 50+ questions about GTA San Andreas. Download, installation, gameplay, security, technical support, and troubleshooting.',
    url: 'https://gtasanandreas.info/faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is GTA San Andreas MOD APK safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, when downloaded from legitimate sources. Verified safe with 0 malware detections.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I install GTA San Andreas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Follow our step-by-step installation guide for Android and PC platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the system requirements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Minimum: Android 6.0 or Windows 7. Recommended: Android 10+ or Windows 10/11 with 4GB+ RAM.',
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

  const categories = [
    {
      name: 'Download & Installation',
      icon: faDownload,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Gameplay & Features',
      icon: faGamepad,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Security & Safety',
      icon: faShieldAlt,
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Technical Support',
      icon: faWrench,
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Troubleshooting',
      icon: faHeadset,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'World & Characters',
      icon: faGamepad,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Vehicles & Weapons',
      icon: faGamepad,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'Multiplayer & Mods',
      icon: faGamepad,
      color: 'from-green-500 to-cyan-500',
    },
    {
      name: '2025 Updates',
      icon: faGamepad,
      color: 'from-pink-500 to-purple-500',
    },
  ];

  const faqs = {
    'Download & Installation': [
      {
        q: 'Where can I download GTA San Andreas MOD APK?',
        a: 'Download from gtasanandreas.info. Never download from unknown third-party sites as they may contain malware.',
      },
      {
        q: 'How large is the APK file?',
        a: 'The complete MOD APK is approximately 2.5-3GB. Ensure you have at least 5GB free space.',
      },
      {
        q: 'How long does download take?',
        a: 'Download time depends on your internet speed. On a 10Mbps connection, expect 30-50 minutes.',
      },
      {
        q: 'Can I pause and resume downloads?',
        a: 'Yes, our download system supports pause/resume functionality. Your progress is saved.',
      },
      {
        q: 'Is there a direct download link?',
        a: 'Yes, click the Download button on the homepage for direct download. No registration required.',
      },
      {
        q: 'Can I download on iOS?',
        a: 'Currently only available for Android. iOS users can play the original GTA San Andreas from the App Store.',
      },
      {
        q: 'Do I need a Google Play account?',
        a: 'No. MOD APK installs directly without requiring a Google Play account.',
      },
      {
        q: 'How do I enable Unknown Sources?',
        a: 'Settings > Security > Unknown Sources (toggle ON). Different Android versions may have different menu names.',
      },
      {
        q: 'Can I install on Windows Phone?',
        a: 'No, Windows Phone is no longer supported. Use Android device or PC with emulator.',
      },
      {
        q: 'Is there a torrent option for downloading?',
        a: 'We recommend direct download for safety. Torrents from unknown sources carry malware risk.',
      },
    ],
    'Gameplay & Features': [
      {
        q: 'What makes this MOD APK different from the original?',
        a: 'MOD includes unlimited money, all weapons unlocked, all missions available, no wanted level control, enhanced graphics, and exclusive mods.',
      },
      {
        q: 'Can I play multiplayer?',
        a: 'No, this is single-player only. The original GTA San Andreas doesn\'t have multiplayer either.',
      },
      {
        q: 'How much money do I start with?',
        a: 'You start with unlimited money from the beginning. No need to grind or complete missions for cash.',
      },
      {
        q: 'Are all missions available from the start?',
        a: 'Yes, all story missions are unlocked and available. Play in any order you prefer.',
      },
      {
        q: 'Can I customize my character?',
        a: 'Yes, extensive character customization including clothes, tattoos, hairstyles, and body modifications.',
      },
      {
        q: 'How many vehicles are available?',
        a: 'Over 90 different vehicles including cars, motorcycles, helicopters, and tanks are available.',
      },
      {
        q: 'Are cheats available?',
        a: 'Yes, all classic GTA San Andreas cheats work, plus additional MOD-exclusive cheats for even more fun.',
      },
      {
        q: 'Is there a story mode?',
        a: 'Yes, the complete original story campaign is included with all cutscenes and missions.',
      },
      {
        q: 'Can I import mods or additional content?',
        a: 'The base MOD is complete. Some advanced users can add additional mods, but it requires technical knowledge.',
      },
      {
        q: 'How long is the game?',
        a: 'Main story: 20-30 hours. 100% completion: 40-60 hours including side missions.',
      },
    ],
    'Security & Safety': [
      {
        q: 'Is GTA San Andreas MOD APK safe?',
        a: 'Yes, it\'s verified safe. Scanned by 68 antivirus vendors with 0 malware detections. A+ security rating.',
      },
      {
        q: 'Will it harm my device?',
        a: 'No, if downloaded from gtasanandreas.info. Our APK is tested on 100+ devices for compatibility.',
      },
      {
        q: 'Can I get banned for playing?',
        a: 'No, it\'s single-player offline. No online account or connection to Rockstar Games.',
      },
      {
        q: 'Does it collect my personal data?',
        a: 'No data collection. Downloads are completely anonymous. We don\'t track or store personal information.',
      },
      {
        q: 'Why does antivirus flag it as suspicious?',
        a: 'Modified APKs may trigger false positives. This is normal behavior - the file is safe.',
      },
      {
        q: 'Is it legal?',
        a: 'MOD APKs are in a legal gray area. Using them for personal offline gaming is generally tolerated.',
      },
      {
        q: 'Do I need VPN to download?',
        a: 'Not required, but using VPN adds extra privacy. Download works fine with or without VPN.',
      },
      {
        q: 'How often is it scanned for malware?',
        a: 'Every 7 days. Multiple antivirus vendors scan the file weekly for security assurance.',
      },
      {
        q: 'Is my device vulnerable after installation?',
        a: 'No. After installation, your device security is normal. Uninstall removes all traces.',
      },
      {
        q: 'What permissions does the app request?',
        a: 'Standard gaming permissions: storage access, internet (for updates), camera (for screenshots).',
      },
    ],
    'Technical Support': [
      {
        q: 'What Android version is required?',
        a: 'Minimum Android 6.0. Recommended Android 10 or higher for best performance.',
      },
      {
        q: 'How much RAM do I need?',
        a: 'Minimum 2GB. Recommended 4GB+ for smooth gameplay and better graphics.',
      },
      {
        q: 'What about storage requirements?',
        a: 'You need 3GB for the game plus system files. We recommend 5GB+ free space.',
      },
      {
        q: 'Which processors are supported?',
        a: 'Snapdragon 660+ for Android, Intel i5+ for PC. ARM processors on mobiles, x86/x64 on PC.',
      },
      {
        q: 'Is it compatible with my device?',
        a: 'Check our compatibility list or download. If it doesn\'t work, contact support with device specs.',
      },
      {
        q: 'Can I play on 32-bit devices?',
        a: 'No, APK is 64-bit only. 32-bit devices are not supported.',
      },
      {
        q: 'Do I need internet to play?',
        a: 'No, it\'s completely offline. Works without internet connection.',
      },
      {
        q: 'How do I update the game?',
        a: 'Updates are included in new downloads. No in-app update system available.',
      },
      {
        q: 'Can I play on Android TV?',
        a: 'Possibly, depending on your Android TV model. Most modern Android TV supports it.',
      },
      {
        q: 'Is there a 32GB variant for larger storage?',
        a: 'No, the main package is optimized for all devices. No variant needed.',
      },
    ],
    'Troubleshooting': [
      {
        q: 'Game crashes on startup',
        a: 'Clear cache in Settings > Apps > GTA San Andreas > Storage > Clear Cache. Ensure 4GB+ RAM available.',
      },
      {
        q: 'Installation fails',
        a: 'Ensure sufficient storage (5GB+), disable antivirus temporarily, enable Unknown Sources, try again.',
      },
      {
        q: 'Game won\'t load after installation',
        a: 'Wait 5 minutes for first launch (unpacking assets). Restart device. Check storage space.',
      },
      {
        q: 'Low FPS or laggy gameplay',
        a: 'Lower graphics settings in-game. Close other apps. Ensure device has 4GB+ RAM. Update graphics drivers on PC.',
      },
      {
        q: 'Sound not working',
        a: 'Check device volume. Restart game. Verify audio drivers. Try enabling/disabling audio in settings.',
      },
      {
        q: 'Controller not working',
        a: 'Pair controller first. Go to game settings > Controls. Ensure controller support is enabled.',
      },
      {
        q: 'Game won\'t save',
        a: 'Ensure sufficient storage. Clear app cache. Check write permissions. Verify internal storage isn\'t full.',
      },
      {
        q: 'Graphics glitches or textures missing',
        a: 'Update graphics drivers. Reduce graphics quality. Restart device. Reinstall if issue persists.',
      },
      {
        q: 'Game closes after 5 minutes',
        a: 'Enable Game Mode in device settings. Close background apps. Increase device cooling.',
      },
      {
        q: 'How do I uninstall completely?',
        a: 'Settings > Apps > GTA San Andreas > Uninstall. Then clear related folders in file manager for complete removal.',
      },
      {
        q: 'Why does the game run too fast?',
        a: 'Turn on the Frame Limiter in the display settings. This gives the game normal speed on fast PCs.',
      },
      {
        q: 'Black screen on startup',
        a: 'Delete gta_sa.set file in Documents > GTA San Andreas. Choose a lower resolution or use Windowed Mode.',
      },
      {
        q: 'Textures not loading (buildings disappear)',
        a: 'Reduce Visual FX Quality to Low settings. Use Memory Fix Mods. Close background applications.',
      },
      {
        q: 'Game freezes during cutscenes',
        a: 'Install a safe codec pack like K-Lite. You can also press ESC to skip cutscenes and continue missions.',
      },
      {
        q: 'Save file problems',
        a: 'Use the same game version that created the save. Try another save slot. Keep backups to avoid losing progress.',
      },
    ],
    'World & Characters': [
      {
        q: 'What is GTA San Andreas about?',
        a: 'The game follows Carl Johnson (CJ) who returns to Los Santos after his mother passes away. He tries to save his family, fix problems, and rebuild his life in the criminal underworld.',
      },
      {
        q: 'Who is CJ?',
        a: 'CJ is the main character. He is loyal, brave, and caring toward his family. He returns home to help his loved ones overcome difficulties.',
      },
      {
        q: 'Is the world open?',
        a: 'Yes. You can walk, drive, fly, or ride bikes anywhere after progressing through the story. The entire map is available to explore.',
      },
      {
        q: 'What are the three main cities?',
        a: 'Los Santos, San Fierro, and Las Venturas. Each city has unique areas, missions, and characters to discover.',
      },
      {
        q: 'Can CJ swim?',
        a: 'Yes. He can swim underwater and climb out of water. Swimming is essential for some missions.',
      },
      {
        q: 'How can CJ get stronger?',
        a: 'Visit gyms, eat healthy food in the game, and practice fighting. Your fitness and strength improve with training.',
      },
      {
        q: 'How long is the game?',
        a: 'The full story takes about 30 to 40 hours. Side missions can add more time. 100% completion: 40-60 hours.',
      },
    ],
    'Vehicles & Weapons': [
      {
        q: 'How many vehicles are in the game?',
        a: 'There are over 200 vehicles. These include cars, bikes, planes, boats, and more. Each vehicle handles differently.',
      },
      {
        q: 'Can you modify cars?',
        a: 'Yes. You can add body kits, wheels, paint jobs, and colors at mod shops throughout the map.',
      },
      {
        q: 'Are weapons easy to find?',
        a: 'Yes. You can find them in stores, missions, on the ground, or around the map. Different weapons have different power levels.',
      },
      {
        q: 'What is the strongest weapon?',
        a: 'Many players like the M4, the minigun, and the sniper rifle. The minigun deals the most damage.',
      },
      {
        q: 'How do I fly a plane easily?',
        a: 'Use gentle movements. Do not rush the controls. Practice helps a lot. Start with slower planes before advanced aircraft.',
      },
    ],
    'Multiplayer & Mods': [
      {
        q: 'Can I play multiplayer?',
        a: 'No, this is single-player only. The original GTA San Andreas doesn\'t have multiplayer either.',
      },
      {
        q: 'What is SAMP?',
        a: 'SAMP stands for San Andreas Multiplayer. It lets you play online with others on custom servers with roleplay features.',
      },
      {
        q: 'Why can I not join a SAMP server?',
        a: 'You may have the wrong game version. Install the correct one matching the server requirements.',
      },
      {
        q: 'Does SAMP work in 2025?',
        a: 'Yes. Many active servers still exist with new roleplay features and communities.',
      },
      {
        q: 'Are mods safe for the game?',
        a: 'Yes, if you use trusted sources. Download from reputable mod websites and test mods one at a time.',
      },
      {
        q: 'Why do modded games crash?',
        a: 'Mods can conflict with each other. Add mods one by one and test. Keep a backup of your original game folder.',
      },
    ],
    '2025 Updates': [
      {
        q: 'Does GTA San Andreas still work on Windows 11 in 2025?',
        a: 'Yes. It runs well with compatibility mode. Community patches ensure stability on modern systems.',
      },
      {
        q: 'Were new community patches released in 2025?',
        a: 'Yes. These patches fix bugs and improve stability. They address compatibility with new operating systems.',
      },
      {
        q: 'Are new texture mods available in 2025?',
        a: 'Yes. Many HD textures and light packs came out this year. Fans continue to improve the graphics.',
      },
      {
        q: 'Do new roleplay servers exist in 2025?',
        a: 'Yes. Many new SAMP roleplay servers launched this year with improved systems and features.',
      },
      {
        q: 'Is the mobile version smoother in 2025?',
        a: 'Yes. New phones support the game better. Mobile receives stability fixes that reduce crashes.',
      },
      {
        q: 'Did crashes reduce this year?',
        a: 'Yes. Thanks to patches and updates, crashes are less common. The game is more stable in 2025.',
      },
      {
        q: 'Is GTA San Andreas still fun in 2025?',
        a: 'Yes. The game still feels fun, even after many years. The story and world remain engaging for new and old players.',
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <div className="min-h-screen bg-gradient-to-b from-[#030712] via-black to-[#030712]">
      {/* Hero Section */}
      <div className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Get answers to 50+ questions about GTA San Andreas MOD APK. From installation to gameplay and troubleshooting.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setOpenCategory(idx)}
                className={`relative p-6 rounded-xl transition-all duration-300 group ${
                  openCategory === idx
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-900 border border-gray-700 text-gray-300 hover:border-gray-600'
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <FontAwesomeIcon icon={category.icon} className="w-6 h-6" />
                  <span className="text-sm font-semibold text-center">{category.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="space-y-4">
            {Object.entries(faqs).map((entry, catIdx) => {
              const [categoryName, questions] = entry;
              const isOpen = categories[openCategory]?.name === categoryName;

              if (!isOpen) return null;

              return (
                <div key={catIdx} className="space-y-4">
                  {questions.map((faq, qIdx) => (
                    <div
                      key={qIdx}
                      className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl overflow-hidden hover:border-[#00ff87]/50 transition-all duration-300"
                    >
                      <button
                        onClick={() =>
                          setExpandedQuestion(expandedQuestion === `${catIdx}-${qIdx}` ? null : `${catIdx}-${qIdx}`)
                        }
                        className="w-full px-6 py-4 flex justify-between items-start gap-4 hover:bg-gray-800/50 transition-colors"
                      >
                        <h3 className="text-base sm:text-lg font-semibold text-white text-left leading-relaxed">
                          {faq.q}
                        </h3>
                        <span
                          className={`flex-shrink-0 text-[#00ff87] transition-transform duration-300 mt-1 ${
                            expandedQuestion === `${catIdx}-${qIdx}` ? 'rotate-180' : ''
                          }`}
                        >
                          ▼
                        </span>
                      </button>
                      {expandedQuestion === `${catIdx}-${qIdx}` && (
                        <div className="px-6 py-4 bg-black/30 border-t border-[#00ff87]/20">
                          <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions */}
          <div className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-xl p-8 text-center mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-6">
              Can't find your answer? Contact our support team for quick assistance.
            </p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00ff87] to-[#00a2ff] text-black font-bold hover:shadow-lg hover:shadow-[#00ff87]/50 transition-all duration-300">
              Contact Support
            </button>
          </div>

          {/* Quick Links to Other Guides */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-gray-800">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">Installation Help</h3>
              <p className="text-gray-400 mb-4">Need step-by-step guide?</p>
              <a
                href="/how-to-install"
                className="inline-block px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all"
              >
                View Guide
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">Safety Concerns</h3>
              <p className="text-gray-400 mb-4">Is it safe to download?</p>
              <a
                href="/is-safe-to-download"
                className="inline-block px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-all"
              >
                Learn More
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">Comparison</h3>
              <p className="text-gray-400 mb-4">MOD vs Original?</p>
              <a
                href="/mod-apk-vs-original"
                className="inline-block px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all"
              >
                Compare Now
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
