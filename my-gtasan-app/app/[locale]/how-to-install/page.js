'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faDownload,
  faShieldAlt,
  faSpinner,
  faExclamationTriangle,
  faMobileScreenButton,
  faApple,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';
// import { generateHowToSchema } from '@/app/utils/schemaMarkup'; // TODO: schema function not exported


export default function HowToInstall() {
  const [activeTab, setActiveTab] = useState('android');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const installationSteps = {
    android: [
      {
        number: 1,
        title: 'Download the APK File',
        description:
          'Visit gtasanandreas.info and click the "Download MOD APK" button. The file will be approximately 2.5-3GB.',
        icon: faDownload,
      },
      {
        number: 2,
        title: 'Enable Unknown Sources',
        description:
          'Go to Settings > Security > Unknown Sources and toggle it ON. This allows installation from non-Play Store sources.',
        icon: faShieldAlt,
      },
      {
        number: 3,
        title: 'Locate the Downloaded File',
        description:
          'Open your file manager and navigate to Downloads folder. Find the GTA San Andreas MOD APK file.',
        icon: faMobileScreenButton,
      },
      {
        number: 4,
        title: 'Install the APK',
        description: 'Tap on the APK file and click Install. Wait for the installation to complete (5-15 minutes).',
        icon: faSpinner,
      },
      {
        number: 5,
        title: 'Launch the Game',
        description: 'After installation, click "Open" or find the game icon on your home screen and tap to launch.',
        icon: faCheckCircle,
      },
    ],
    pc: [
      {
        number: 1,
        title: 'Download Android Emulator',
        description:
          'Install BlueStacks, NoxPlayer, or MEmu emulator on your PC. BlueStacks is recommended for best performance.',
        icon: faDownload,
      },
      {
        number: 2,
        title: 'Open Emulator Settings',
        description:
          'Launch the emulator and go to settings to ensure at least 4GB RAM and 20GB storage are allocated.',
        icon: faDesktop,
      },
      {
        number: 3,
        title: 'Download MOD APK',
        description: 'Download the GTA San Andreas MOD APK file on your PC to a known location.',
        icon: faDownload,
      },
      {
        number: 4,
        title: 'Drag and Drop APK',
        description: 'Drag the APK file into the emulator window or use the "Install APK" option in the emulator menu.',
        icon: faMobileScreenButton,
      },
      {
        number: 5,
        title: 'Play on PC',
        description:
          'The game will install and appear in the emulator. Click to launch and play with keyboard/mouse or controller.',
        icon: faCheckCircle,
      },
    ],
  };

  const requirements = {
    android: {
      minimum: ['Android 6.0 or higher', '2GB RAM', '3GB Free Storage', 'Processor: Snapdragon 660 or equivalent'],
      recommended: [
        'Android 10 or higher',
        '4GB+ RAM',
        '5GB Free Storage',
        'Processor: Snapdragon 855 or better',
        'GPU: Adreno 640+',
      ],
    },
    pc: {
      minimum: ['Windows 7 or higher', '4GB RAM', '20GB Free Storage', 'Intel Core i5 or AMD Ryzen 5'],
      recommended: [
        'Windows 10/11',
        '8GB+ RAM',
        'SSD with 25GB Space',
        'Intel Core i7 or AMD Ryzen 7',
        'NVIDIA GTX 1050+',
      ],
    },
  };

  const faqs = [
    {
      question: 'Is it safe to install GTA San Andreas MOD APK?',
      answer:
        'Yes, when downloaded from legitimate sources like gtasanandreas.info. Always ensure your antivirus is updated and download from trusted websites only.',
    },
    {
      question: 'Why does my antivirus warn me about the APK?',
      answer:
        'Antivirus software may flag MOD files as suspicious due to modifications. This is normal behavior for modified APKs. Our files are scanned regularly.',
    },
    {
      question: 'How much storage space do I need?',
      answer:
        'You need at least 3GB free storage for Android and 20GB for PC emulator. We recommend 5GB+ free space for smooth gameplay.',
    },
    {
      question: 'Can I play this on iOS?',
      answer:
        'Currently, GTA San Andreas MOD APK is only available for Android. For iOS, you can play the original game from the App Store.',
    },
    {
      question: 'What should I do if installation fails?',
      answer:
        'Clear cache in Settings > App Management, ensure sufficient storage, disable antivirus temporarily, and try again. See troubleshooting section for more help.',
    },
    {
      question: 'How long does installation take?',
      answer:
        'Installation typically takes 5-15 minutes on Android depending on device speed and internet. PC installation may take 10-20 minutes.',
    },
  ];

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
    step: installationSteps[activeTab].map((step) => ({
      '@type': 'HowToStep',
      position: step.number,
      name: step.title,
      text: step.description,
      image: 'https://gtasanandreas.info/logo.png',
    })),
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
      <div className="min-h-screen bg-gradient-to-b from-[#030712] via-black to-[#030712]">
        {/* Hero Section */}
        <div className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent mb-4">
                How to Install GTA San Andreas MOD APK
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Complete step-by-step guide for Android, PC, and Mac. Download, install, and play the ultimate GTA San
                Andreas experience.
              </p>
              <div className="flex justify-center gap-4 mb-8 flex-wrap">
                <div className="flex items-center gap-2 text-green-400">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" />
                  <span>100% Safe & Secure</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
                  <span>Easy Installation</span>
                </div>
              </div>
            </div>

            {/* Tab Selection */}
            <div className="flex gap-4 justify-center mb-12 flex-wrap">
              {[
                { id: 'android', label: 'Android Installation', icon: faMobileScreenButton },
                { id: 'pc', label: 'PC Installation', icon: faDesktop },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#00ff87] to-[#00a2ff] text-black shadow-lg shadow-[#00ff87]/50'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <FontAwesomeIcon icon={tab.icon} className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Installation Steps */}
            <div className="space-y-6 mb-16">
              {installationSteps[activeTab].map((step) => (
                <div
                  key={step.number}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6 hover:border-[#00ff87]/50 transition-all duration-300"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff]">
                        <span className="text-black font-bold text-lg">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* System Requirements */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {['android', 'pc'].map((platform) => (
                <div key={platform} className="bg-gradient-to-br from-gray-900 to-black border border-[#00a2ff]/20 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 capitalize">{platform} Requirements</h3>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#00ff87] mb-4">Minimum Requirements</h4>
                    <ul className="space-y-2">
                      {requirements[platform].minimum.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <span className="text-[#00ff87]">✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#00a2ff] mb-4">Recommended Specifications</h4>
                    <ul className="space-y-2">
                      {requirements[platform].recommended.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <span className="text-[#00a2ff]">★</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-8 mb-16">
              <div className="flex gap-4">
                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Important Before You Install</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Always download from official sources to avoid malware</li>
                    <li>• Backup your device data before installation</li>
                    <li>• Ensure you have a stable internet connection</li>
                    <li>• Free up sufficient storage space before installing</li>
                    <li>• Close other apps to prevent installation conflicts</li>
                    <li>• Do not interrupt the installation process</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Installation Tips */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Tips for a Smooth Installation</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#00ff87] mb-3">Check System Requirements</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Make sure your PC or phone can run the game. Review the minimum and recommended specifications above to ensure compatibility before downloading.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#00ff87] mb-3">Keep Enough Storage</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You need at least 4–6 GB free space for PC installation. For Android devices, ensure you have 5GB+ free space for smooth gameplay and updates.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#00ff87] mb-3">Install in a Simple Folder</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Avoid very long folder names with special characters. Simple folder paths like "GTA San Andreas" work best and prevent installation errors.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#00ff87] mb-3">Update Graphics Drivers</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Especially graphics and sound drivers should be updated to the latest version. This ensures compatibility and prevents performance issues during gameplay.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#00ff87] mb-3">Backup Your Saves</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If you reinstall the game, keep your old save files in a safe location. Back up your saves folder before any major updates or reinstallations.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-900 border border-[#00ff87]/20 rounded-lg overflow-hidden hover:border-[#00ff87]/50 transition-all duration-300"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-800 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-white text-left">{faq.question}</h3>
                      <span
                        className={`text-[#00ff87] transition-transform duration-300 ${
                          expandedFaq === idx ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-6 py-4 bg-gray-800/50 border-t border-[#00ff87]/20">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Download?</h3>
              <p className="text-gray-300 mb-6">
                Follow these steps and you'll be playing the ultimate GTA San Andreas MOD APK in minutes!
              </p>
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00ff87] to-[#00a2ff] text-black font-bold hover:shadow-lg hover:shadow-[#00ff87]/50 transition-all duration-300">
                Download MOD APK Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
