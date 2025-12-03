'use client';

import { useTranslations } from 'next-intl';

export default function CookiePolicy() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100">
      {/* Header Section */}
      <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: November 28, 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900/50 backdrop-blur border border-[#00ff87]/20 rounded-xl p-8 space-y-8">

          {/* 1. What Are Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              1. What Are Cookies?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files that websites store on your device (computer, tablet, or mobile phone). These files contain information about your visit, preferences, and interactions with the website. Cookies help websites remember you and personalize your experience.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              This Cookie Policy applies exclusively to gtasanandreas.info website. It does not apply to cookies used in any third-party Game Mod APK files or external applications.
            </p>
          </section>

          {/* 2. Types of Cookies We Use */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              2. Types of Cookies We Use
            </h2>

            <h3 className="text-lg font-semibold text-white mt-4 mb-3">A. Essential/Necessary Cookies</h3>
            <div className="bg-gray-800 rounded-lg p-4 ml-4">
              <p className="text-gray-300 text-sm"><strong>Purpose:</strong> Required for basic website functionality</p>
              <p className="text-gray-300 text-sm mt-2"><strong>Examples:</strong> Language preference, session management, security</p>
              <p className="text-gray-300 text-sm mt-2"><strong>Duration:</strong> Session or up to 1 year</p>
              <p className="text-gray-300 text-sm mt-2"><strong>User Control:</strong> Cannot be disabled without breaking site functionality</p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">B. Analytics Cookies</h3>
            <div className="bg-gray-800 rounded-lg p-4 ml-4">
              <p className="text-gray-300 text-sm"><strong>Purpose:</strong> Track user behavior and site performance (Google Analytics)</p>
              <p className="text-gray-300 text-sm mt-2"><strong>What We Track:</strong></p>
              <ul className="text-gray-300 text-sm mt-2 ml-4 space-y-1">
                <li>• Pages visited and time spent on each page</li>
                <li>• Clicks, scrolls, and interactions</li>
                <li>• Geographic location (country/city level)</li>
                <li>• Device type (mobile, desktop, tablet)</li>
                <li>• Browser and operating system information</li>
                <li>• Traffic sources (how you reached the site)</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2"><strong>Provider:</strong> Google Analytics (google.com/analytics)</p>
              <p className="text-gray-300 text-sm mt-2"><strong>Cookie Names:</strong> _ga, _gat, _gid</p>
              <p className="text-gray-300 text-sm mt-2"><strong>Duration:</strong> 2 years (can be customized)</p>
              <p className="text-gray-300 text-sm mt-2"><strong>User Control:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#00ff87] hover:text-[#00a2ff]">Opt-out with Google Analytics opt-out browser add-on</a></p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">C. Advertising/Marketing Cookies</h3>
            <div className="bg-gray-800 rounded-lg p-4 ml-4">
              <p className="text-gray-300 text-sm"><strong>Purpose:</strong> Display personalized ads (Google AdSense)</p>
              <p className="text-gray-300 text-sm mt-2"><strong>What We Track:</strong></p>
              <ul className="text-gray-300 text-sm mt-2 ml-4 space-y-1">
                <li>• Browsing history and interests</li>
                <li>• Ad interactions and clicks</li>
                <li>• Conversion tracking (if you click ads)</li>
                <li>• User ID and advertising preferences</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2"><strong>Provider:</strong> Google AdSense (google.com/adsense)</p>
              <p className="text-gray-300 text-sm mt-2"><strong>Cookie Names:</strong> NID, IDE, ANID, and others</p>
              <p className="text-gray-300 text-sm mt-2"><strong>Duration:</strong> 2 years</p>
              <p className="text-gray-300 text-sm mt-2"><strong>User Control:</strong> <a href="https://myadcenter.google.com" className="text-[#00ff87] hover:text-[#00a2ff]">Manage ad preferences at Google Ad Settings</a></p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">D. Third-Party Cookies</h3>
            <div className="bg-gray-800 rounded-lg p-4 ml-4">
              <p className="text-gray-300 text-sm"><strong>Purpose:</strong> Analytics, advertising, and tracking from external services</p>
              <p className="text-gray-300 text-sm mt-2"><strong>External Services:</strong></p>
              <ul className="text-gray-300 text-sm mt-2 ml-4 space-y-1">
                <li>• YouTube (video analytics and recommendations)</li>
                <li>• Google Fonts (performance tracking)</li>
                <li>• Social media pixels (if configured)</li>
                <li>• Other third-party ad networks</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2"><strong>Duration:</strong> Varies by service (typically 1-2 years)</p>
              <p className="text-gray-300 text-sm mt-2"><strong>User Control:</strong> Review each service's privacy policy for opt-out options</p>
            </div>
          </section>

          {/* 3. Cookie Table */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              3. Complete Cookie Reference
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left">Cookie Name</th>
                    <th className="px-4 py-3 text-left">Provider</th>
                    <th className="px-4 py-3 text-left">Purpose</th>
                    <th className="px-4 py-3 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-700">
                    <td className="px-4 py-3">_ga</td>
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">User ID tracking</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="px-4 py-3">_gat</td>
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">Request throttling</td>
                    <td className="px-4 py-3">1 minute</td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="px-4 py-3">_gid</td>
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">Session tracking</td>
                    <td className="px-4 py-3">24 hours</td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="px-4 py-3">NID</td>
                    <td className="px-4 py-3">Google AdSense</td>
                    <td className="px-4 py-3">Ad personalization</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="px-4 py-3">IDE</td>
                    <td className="px-4 py-3">Google (DoubleClick)</td>
                    <td className="px-4 py-3">Ad targeting</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="px-4 py-3">Language preference</td>
                    <td className="px-4 py-3">Our Site</td>
                    <td className="px-4 py-3">Store language choice</td>
                    <td className="px-4 py-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. How to Control Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              4. How to Control and Delete Cookies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You have the right to control cookies on your device:
            </p>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Browser Settings:</h3>
            <ul className="text-gray-300 space-y-2 ml-4 text-sm">
              <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li>• <strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
              <li>• <strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li>• <strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Cookie Management Options:</h3>
            <ul className="text-gray-300 space-y-2 ml-4 text-sm">
              <li>• Allow all cookies</li>
              <li>• Block all cookies</li>
              <li>• Block third-party cookies only</li>
              <li>• Delete existing cookies</li>
              <li>• Allow cookies for specific sites only</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Important Note:</h3>
            <p className="text-gray-300 text-sm">
              Disabling essential cookies may break website functionality. Analytics and advertising cookies can be disabled without affecting site performance.
            </p>
          </section>

          {/* 5. Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              5. How We Share Cookie Data
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Cookie data is shared with:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• <strong>Google Analytics:</strong> Aggregated usage statistics for site improvement</li>
              <li>• <strong>Google AdSense:</strong> User interests for ad personalization</li>
              <li>• <strong>Vercel (Hosting):</strong> Server logs and basic analytics</li>
              <li>• <strong>Legal Authorities:</strong> If required by law or legal process</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We do NOT sell cookie data to third parties for marketing purposes.
            </p>
          </section>

          {/* 6. Your Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              6. Your Rights Regarding Cookies
            </h2>
            <ul className="text-gray-300 space-y-3 ml-4">
              <li>
                <strong>GDPR (EU Users):</strong> Right to consent before non-essential cookies are set, right to access, right to delete
              </li>
              <li>
                <strong>CCPA (California Users):</strong> Right to know what cookies are used, right to delete, right to opt-out
              </li>
              <li>
                <strong>All Users:</strong> Right to control cookies through browser settings
              </li>
            </ul>
          </section>

          {/* 7. Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              7. Changes to This Cookie Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Cookie Policy periodically. Changes take effect when posted on this page. We recommend reviewing this policy regularly to stay informed about our cookie practices.
            </p>
          </section>

          {/* 8. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              8. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about our Cookie Policy or cookie practices:
            </p>
            <div className="bg-gray-800 rounded-lg p-4 mt-4">
              <p className="text-gray-300">
                <strong>Email:</strong> gta868309@gmail.com<br/>
                <strong>Website:</strong> gtasanandreas.info<br/>
                <strong>Response Time:</strong> 24-48 hours
              </p>
            </div>
          </section>

          {/* Important Notice */}
          <section className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">⚠️ Important Notice</h3>
            <p className="text-gray-300 text-sm">
              This Cookie Policy applies ONLY to gtasanandreas.info website. Game Mod APK files and third-party applications have their own cookie and data policies. We are not responsible for cookies used by third-party services, downloads, or external applications. Please review their privacy policies separately.
            </p>
          </section>

          {/* Last Updated */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              Last Updated: November 28, 2025 | © 2025 GTA San Apk. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
