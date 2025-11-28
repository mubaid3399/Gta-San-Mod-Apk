'use client';

import { useTranslations } from 'next-intl';

export default function TermsOfService() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black dark:from-[#030712] dark:via-[#0a0e27] dark:to-black text-gray-100">
      {/* Header Section */}
      <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: November 28, 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900/50 backdrop-blur border border-[#00ff87]/20 rounded-xl p-8 space-y-8">

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using the website gtasanandreas.info ("Site"), you agree to be legally bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you are not authorized to use this Site. We reserve the right to modify these Terms at any time. Your continued use of the Site following any changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* 2. Use License */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              2. License to Use Website
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We grant you a limited, non-exclusive, non-transferable license to access and use the Site for personal, non-commercial purposes only. This license does not include the right to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• Modify or copy materials from this Site</li>
              <li>• Use the materials for commercial purposes or public display</li>
              <li>• Attempt to reverse engineer, decompile, or disassemble software</li>
              <li>• Remove copyright, trademark, or proprietary notices</li>
              <li>• Transfer materials to another person or "mirror" them on another server</li>
              <li>• Use the Site for illegal purposes</li>
              <li>• Create derivative works based on Site content</li>
              <li>• Automate access to the Site (scraping, bots, etc.)</li>
            </ul>
          </section>

          {/* 3. User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              3. User Conduct and Responsibilities
            </h2>
            <p className="text-gray-300 leading-relaxed">
              When using this Site, you agree to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• Not engage in illegal activities or violate any laws</li>
              <li>• Not harass, threaten, or intimidate other users</li>
              <li>• Not post spam, malware, or fraudulent content</li>
              <li>• Not attempt to gain unauthorized access to the Site</li>
              <li>• Not submit false or misleading information</li>
              <li>• Not violate intellectual property rights</li>
              <li>• Not use the Site to distribute copyrighted material without permission</li>
              <li>• Respect the rights and privacy of others</li>
              <li>• Take responsibility for maintaining your account security</li>
            </ul>
          </section>

          {/* 4. Content Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              4. Content and Material Disclaimer
            </h2>
            <p className="text-gray-300 leading-relaxed">
              All content on this Site, including text, images, videos, and data, is provided "AS IS" without warranties of any kind. We do not guarantee:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• Accuracy or completeness of content</li>
              <li>• That content is error-free or uninterrupted</li>
              <li>• That content meets your specific needs</li>
              <li>• That content is current or up-to-date</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You acknowledge that GTA San Andreas is a product of Rockstar Games, Inc., and we are not affiliated with Rockstar Games. We do not endorse or take responsibility for any third-party game modification (MOD) files, APK distributions, or external content referenced on this Site.
            </p>
          </section>

          {/* 5. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              5. Intellectual Property Rights
            </h2>
            <p className="text-gray-300 leading-relaxed">
              All Site content, including text, graphics, logos, images, and software, are the property of GTA San Apk or its content suppliers and are protected by international copyright laws. Unauthorized reproduction or distribution of this content is prohibited.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Important Notice:</strong> "GTA San Andreas," "GTA," and related trademarks are the exclusive property of Rockstar Games, Inc. We acknowledge their ownership and do not claim any rights to these trademarks. Our use of these terms is for informational purposes only.
            </p>
          </section>

          {/* 6. Third-Party Content */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              6. Third-Party Content and Links
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This Site may contain links to third-party websites and resources. We are not responsible for:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• Availability or accuracy of third-party content</li>
              <li>• Third-party privacy or security practices</li>
              <li>• Third-party terms of service violations</li>
              <li>• Malware, viruses, or harmful content from external sites</li>
              <li>• Any transactions or agreements with third parties</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You assume all risk when accessing external links and resources. We strongly encourage you to review third-party privacy policies and terms before using their services.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              7. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              <strong>TO THE FULLEST EXTENT PERMITTED BY LAW:</strong>
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• We are not liable for any indirect, incidental, special, consequential, or punitive damages</li>
              <li>• This includes loss of data, profits, revenue, goodwill, or business opportunities</li>
              <li>• This applies even if we have been advised of the possibility of such damages</li>
              <li>• Our total liability shall not exceed the amount you paid to us (typically $0 for free content)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Some jurisdictions do not permit limitation of liability, so this provision may not apply to you.
            </p>
          </section>

          {/* 8. Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              8. Disclaimer of Warranties
            </h2>
            <p className="text-gray-300 leading-relaxed">
              <strong>THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING:</strong>
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• Warranty of merchantability</li>
              <li>• Warranty of fitness for a particular purpose</li>
              <li>• Warranty of non-infringement</li>
              <li>• Warranty that the Site will be uninterrupted or error-free</li>
              <li>• Warranty that defects will be corrected</li>
            </ul>
          </section>

          {/* 9. Age Restrictions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              9. Age Restrictions and Parental Consent
            </h2>
            <p className="text-gray-300 leading-relaxed">
              <strong>Important:</strong> GTA San Andreas is rated M for Mature (17+) by the ESRB due to violence, strong language, and mature themes.
            </p>
            <ul className="text-gray-300 space-y-3 ml-4 mt-4">
              <li>
                <strong>Age Requirements:</strong> By using this Site, you confirm you are at least 13 years old (for general browsing) or 17+ (for mature game content).
              </li>
              <li>
                <strong>Parental Consent:</strong> If you are under 18, you must have explicit parental or guardian consent before using this Site.
              </li>
              <li>
                <strong>Parents/Guardians:</strong> We encourage parents to monitor children's internet activity and use parental controls.
              </li>
              <li>
                <strong>Violations:</strong> Any user who violates age restrictions may be permanently banned from the Site.
              </li>
            </ul>
          </section>

          {/* 10. Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              10. Termination of Access
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Site at any time, for any reason, without notice or liability, including if you:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• Violate these Terms</li>
              <li>• Engage in illegal activity</li>
              <li>• Harass or threaten other users</li>
              <li>• Attempt unauthorized access to the Site</li>
              <li>• Violate intellectual property rights</li>
            </ul>
          </section>

          {/* 11. Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              11. Indemnification
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify and hold harmless GTA San Apk, its owners, operators, and employees from any claims, damages, or expenses (including legal fees) arising from:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• Your use of the Site</li>
              <li>• Your violation of these Terms</li>
              <li>• Your violation of third-party rights</li>
              <li>• Your illegal activity</li>
              <li>• Your user-generated content</li>
            </ul>
          </section>

          {/* 12. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              12. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms are governed by the laws of the jurisdiction in which the Site operator is located, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts in that location for any disputes.
            </p>
          </section>

          {/* 13. Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              13. Dispute Resolution
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Before initiating legal action, you agree to attempt to resolve disputes through:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• <strong>Informal Resolution:</strong> Contact us at support@gtasanapk.com with your complaint</li>
              <li>• <strong>Negotiation Period:</strong> Provide us 30 days to respond and work toward resolution</li>
              <li>• <strong>Legal Action:</strong> Only proceed with legal proceedings if informal resolution fails</li>
            </ul>
          </section>

          {/* 14. Severability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              14. Severability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, that provision will be severed, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          {/* 15. Entire Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              15. Entire Agreement
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms, along with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and GTA San Apk regarding use of the Site. These Terms supersede all prior agreements and understandings.
            </p>
          </section>

          {/* 16. Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              16. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these Terms of Service, contact us:
            </p>
            <div className="bg-gray-800 rounded-lg p-4 mt-4">
              <p className="text-gray-300">
                <strong>Email:</strong> support@gtasanapk.com<br/>
                <strong>Website:</strong> gtasanandreas.info<br/>
                <strong>Response Time:</strong> 24-48 hours
              </p>
            </div>
          </section>

          {/* Important Notice */}
          <section className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">⚠️ Important Legal Notice</h3>
            <p className="text-gray-300 text-sm">
              GTA San Andreas is trademarked by Rockstar Games, Inc. We are not affiliated with, endorsed by, or associated with Rockstar Games. This Site is an independent resource for gaming information. All information about GTA San Andreas MOD files and modifications is provided for educational purposes. Users are responsible for compliance with all applicable laws regarding game modifications and downloads. Rockstar Games retains all rights to GTA San Andreas and related IP.
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
