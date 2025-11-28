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
            User Agreement & Conditions
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900/50 backdrop-blur border border-[#00ff87]/20 rounded-xl p-8 space-y-8">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using the GTA San Apk website and downloading any content from this site, you agree to be bound by these Terms of Service. If you do not agree to abide by the above, please do not use this service. We reserve the right to modify these terms at any time, and your continued use of the site following any changes shall constitute your acceptance of the new terms.
            </p>
          </section>

          {/* Use License */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              License to Use Website
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on the GTA San Apk website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="text-gray-300 leading-relaxed mt-4 space-y-2 ml-4">
              <li>• Modifying or copying the materials</li>
              <li>• Using the materials for any commercial purpose or for any public display</li>
              <li>• Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>• Removing any copyright or other proprietary notations from the materials</li>
              <li>• Transferring the materials to another person or "mirroring" the materials on any other server</li>
              <li>• Accessing or using the site for any illegal purpose</li>
              <li>• Harassing or causing distress or inconvenience to any person</li>
            </ul>
          </section>

          {/* Mod APK Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Modification of Materials & Mod APK Information
            </h2>
            <p className="text-gray-300 leading-relaxed">
              GTA San Apk has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by GTA San Apk of the site. Use of any such linked website is at the user's own risk.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              The GTA San Andreas Mod APK is a modified version of the original GTA San Andreas game. This is NOT the official version created by Rockstar Games. We provide this mod APK for entertainment and educational purposes only. Users download and install at their own risk. We do not provide technical support for the official GTA San Andreas game.
            </p>
          </section>

          {/* Warranty Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Disclaimer of Warranties
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The materials on GTA San Apk's website are provided "as is". GTA San Apk makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          {/* Limitations of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Limitations of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall GTA San Apk or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GTA San Apk's website, even if GTA San Apk or a GTA San Apk authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              User Responsibilities
            </h2>
            <p className="text-gray-300 leading-relaxed">
              As a user of this website and the GTA San Andreas Mod APK, you agree to:
            </p>
            <ul className="text-gray-300 leading-relaxed mt-4 space-y-2 ml-4">
              <li>• Only download from this official website</li>
              <li>• Not distribute or sell the Mod APK without permission</li>
              <li>• Not claim the mod as your own creation</li>
              <li>• Keep your device secure and up-to-date</li>
              <li>• Not use the mod for illegal purposes</li>
              <li>• Respect the intellectual property of Rockstar Games and mod creators</li>
            </ul>
          </section>

          {/* Age Restrictions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Age Restrictions
            </h2>
            <p className="text-gray-300 leading-relaxed">
              GTA San Andreas is rated M for Mature (17+) by the ESRB. By downloading and using this mod, you confirm that you are at least 17 years old or have parental consent. We are not responsible for inappropriate access by minors. Parents are encouraged to use parental controls and monitor their children's gaming activities.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Termination of Access
            </h2>
            <p className="text-gray-300 leading-relaxed">
              GTA San Apk may terminate or suspend access to this website and any services immediately, without prior notice or liability, for any reason whatsoever, including if you breach the Terms of Service. Upon termination, your right to use the website will immediately cease.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Governing Law
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which this service is provided, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our website. We welcome your feedback and suggestions for improvements.
            </p>
          </section>

          {/* Important Notice */}
          <section className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              Important Notice
            </h2>
            <p className="text-gray-300 leading-relaxed">
              GTA San Andreas is a trademark of Rockstar Games, Inc. We are not affiliated with, endorsed by, or associated with Rockstar Games. The Mod APK is provided for educational and entertainment purposes only. Users assume all responsibility for compliance with local laws and regulations.
            </p>
          </section>

          {/* Last Updated */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              Last Updated: November 2025 | © 2025 GTA San Apk. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
