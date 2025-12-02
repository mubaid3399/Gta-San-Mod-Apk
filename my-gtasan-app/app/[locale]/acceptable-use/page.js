'use client';

import { useTranslations } from 'next-intl';

export default function AcceptableUsePolicy() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black dark:from-[#030712] dark:via-[#0a0e27] dark:to-black text-gray-100">
      {/* Header Section */}
      <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
            Acceptable Use Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: November 28, 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900/50 backdrop-blur border border-[#00ff87]/20 rounded-xl p-8 space-y-8">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This Acceptable Use Policy ("Policy") applies to all users of gtasanandreas.info (the "Site"). By accessing and using our Site, you agree to comply with this Policy and all applicable laws and regulations. We reserve the right to enforce these terms and take appropriate action against users who violate this Policy.
            </p>
          </section>

          {/* 2. Prohibited Activities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              2. Prohibited Activities
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Users are strictly prohibited from:
            </p>

            <h3 className="text-lg font-semibold text-white mt-4 mb-3">A. Illegal and Harmful Activities</h3>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Using the Site for illegal purposes or to promote illegal activities</li>
              <li>• Distributing malware, viruses, worms, or other harmful code</li>
              <li>• Engaging in hacking, unauthorized access, or cybercrime</li>
              <li>• Facilitating money laundering, fraud, or financial crime</li>
              <li>• Threatening, harassing, or intimidating other users or staff</li>
              <li>• Creating content that promotes violence, terrorism, or extremism</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">B. Intellectual Property Violations</h3>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Uploading, sharing, or distributing copyrighted content without permission</li>
              <li>• Infringement of trademarks, patents, or intellectual property rights</li>
              <li>• Plagiarizing content and claiming it as your own</li>
              <li>• Reverse engineering or attempting to extract proprietary content</li>
              <li>• Creating derivative works that violate Rockstar Games' intellectual property</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">C. Spam and Abuse</h3>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Posting spam, unsolicited advertising, or promotional content</li>
              <li>• Creating multiple accounts to bypass restrictions or rules</li>
              <li>• Sending unsolicited bulk emails or messages ("spam")</li>
              <li>• Participating in pyramid schemes, MLM, or phishing scams</li>
              <li>• Disrupting normal Site operations or engaging in DoS attacks</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">D. Harmful Content</h3>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Posting explicit sexual content, child exploitation material, or CSAM</li>
              <li>• Sharing hate speech, discriminatory language, or racial slurs</li>
              <li>• Creating content that glorifies violence, self-harm, or suicide</li>
              <li>• Posting graphic violence, gore, or disturbing imagery</li>
              <li>• Spreading misinformation or health hoaxes</li>
              <li>• Engaging in personal attacks, defamation, or libel</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">E. System Abuse</h3>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Attempting to breach security measures or gain unauthorized access</li>
              <li>• Web scraping, automated crawling, or data mining without permission</li>
              <li>• Using bots or automated tools to manipulate content or voting systems</li>
              <li>• Overloading the Site with requests (DoS/DDoS attacks)</li>
              <li>• Exploiting Site vulnerabilities or bugs for personal gain</li>
              <li>• Circumventing rate limits, blocks, or access restrictions</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">F. Privacy and Data Violations</h3>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Posting personal information of others without consent (doxing)</li>
              <li>• Attempting to collect personal data through deception</li>
              <li>• Violating others' privacy or confidentiality</li>
              <li>• Using other users' accounts or login credentials</li>
              <li>• Impersonating another user or person</li>
            </ul>
          </section>

          {/* 3. Content Moderation */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              3. Content Moderation
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are committed to maintaining a safe, respectful community. Our moderation practices include:
            </p>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Our Rights:</h3>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Remove, edit, or refuse to publish violating content</li>
              <li>• Hide, delete, or quarantine harmful or inappropriate content</li>
              <li>• Suspend or terminate accounts that violate this Policy</li>
              <li>• Permanently ban repeat offenders</li>
              <li>• Report illegal activities to law enforcement</li>
              <li>• Monitor and enforce compliance with this Policy 24/7</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Moderation Standards:</h3>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• We use both automated systems and human review for moderation</li>
              <li>• Content is reviewed against this Policy and applicable laws</li>
              <li>• Users may request human review of moderation decisions</li>
              <li>• We maintain logs of moderation actions for legal compliance</li>
            </ul>
          </section>

          {/* 4. User Reporting */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              4. Reporting Violations
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you encounter content or behavior that violates this Policy, please report it immediately:
            </p>

            <div className="bg-gray-800 rounded-lg p-6 mt-4">
              <h3 className="text-white font-semibold mb-3">How to Report:</h3>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• <strong>Email:</strong> gta868309@gmail.com (include detailed description and evidence)</li>
                <li>• <strong>Website:</strong> gtasanandreas.info/contact (use contact form to report)</li>
                <li>• <strong>DMCA Claims:</strong> Contact support with copyright takedown request</li>
                <li>• <strong>Response Time:</strong> We investigate reports within 24-48 hours</li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Important:</strong> Please provide as much information as possible, including:
            </p>
            <ul className="text-gray-300 space-y-1 ml-4 mt-2">
              <li>• Specific content URL or description</li>
              <li>• Date and time of violation</li>
              <li>• Screenshots or evidence</li>
              <li>• Explanation of why it violates this Policy</li>
            </ul>
          </section>

          {/* 5. Consequences for Violations */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              5. Consequences for Violations
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Users who violate this Policy may face the following consequences:
            </p>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Progressive Enforcement:</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300 font-semibold">Minor Violations (First Offense):</p>
                <ul className="text-gray-300 text-sm mt-2 ml-4 space-y-1">
                  <li>• Content warning or removal</li>
                  <li>• Account flag or temporary suspension</li>
                  <li>• Educational message about Policy</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300 font-semibold">Serious Violations or Repeat Offenses:</p>
                <ul className="text-gray-300 text-sm mt-2 ml-4 space-y-1">
                  <li>• Temporary account suspension (7-30 days)</li>
                  <li>• Restriction of posting or commenting privileges</li>
                  <li>• Content removal and account history review</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300 font-semibold">Severe or Repeated Violations:</p>
                <ul className="text-gray-300 text-sm mt-2 ml-4 space-y-1">
                  <li>• Permanent account ban and blacklist</li>
                  <li>• IP address ban from the Site</li>
                  <li>• Referral to law enforcement (if applicable)</li>
                  <li>• Legal action and civil/criminal prosecution</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Note:</strong> We reserve the right to skip warning stages and immediately terminate accounts or take legal action for severe violations, illegal activity, or repeat offenders.
            </p>
          </section>

          {/* 6. Age-Appropriate Content */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              6. Age Restrictions
            </h2>
            <p className="text-gray-300 leading-relaxed">
              GTA San Andreas is rated <strong>M for Mature (17+)</strong> by the ESRB and contains:
            </p>
            <ul className="text-gray-300 space-y-1 ml-4 mt-2">
              <li>• Graphic violence and bloodshed</li>
              <li>• Strong language and profanity</li>
              <li>• Sexual content and nudity</li>
              <li>• Drug and alcohol use</li>
              <li>• Crime and criminal activities</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Our Site is for users 13 and older (COPPA compliant).</strong> However, users under 17 acknowledge that GTA San Andreas contains mature content inappropriate for their age group. Parents and guardians are responsible for monitoring young users' access to gaming-related content.
            </p>
          </section>

          {/* 7. Copyright and DMCA */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              7. Copyright and DMCA
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We respect intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA). If you believe content on our Site infringes your copyright:
            </p>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">To File a DMCA Complaint:</h3>
            <div className="bg-gray-800 rounded-lg p-4 mt-2">
              <p className="text-gray-300 text-sm">Send an email to <strong>gta868309@gmail.com</strong> with:</p>
              <ul className="text-gray-300 text-sm mt-2 ml-4 space-y-1">
                <li>• Your contact information (name, address, email)</li>
                <li>• Description of the copyrighted work</li>
                <li>• Specific URL of the infringing content</li>
                <li>• Statement that you have good faith belief of infringement</li>
                <li>• Your signature (physical or digital)</li>
                <li>• Statement under penalty of perjury</li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              We will investigate DMCA claims and remove infringing content within 10 business days if found valid. Repeat copyright violations may result in permanent account termination.
            </p>
          </section>

          {/* 8. Third-Party Services Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              8. Third-Party Services Disclaimer
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our Site may reference or link to Game Mod APK files, third-party services, or external content. <strong>This Acceptable Use Policy applies only to gtasanandreas.info.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Third-party services have their own acceptable use policies. We are not responsible for:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mt-3">
              <li>• Content or policies of third-party websites</li>
              <li>• Game Mod APK files or their creators' practices</li>
              <li>• External services linked from our Site</li>
              <li>• Violations of third-party policies</li>
              <li>• Illegal downloads or copyright infringement by third parties</li>
            </ul>
          </section>

          {/* 9. Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              9. Changes to This Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Acceptable Use Policy periodically. Changes become effective when posted to this page. Your continued use of the Site after changes constitutes acceptance. We recommend reviewing this Policy regularly.
            </p>
          </section>

          {/* 10. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
              10. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about this Acceptable Use Policy or to report violations:
            </p>
            <div className="bg-gray-800 rounded-lg p-4 mt-4">
              <p className="text-gray-300">
                <strong>Email:</strong> gta868309@gmail.com<br/>
                <strong>Website:</strong> gtasanandreas.info<br/>
                <strong>Contact Form:</strong> gtasanandreas.info/contact<br/>
                <strong>Response Time:</strong> 24-48 hours
              </p>
            </div>
          </section>

          {/* Important Notice */}
          <section className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">⚠️ Legal Notice</h3>
            <p className="text-gray-300 text-sm">
              This Acceptable Use Policy is legally binding. Violation of these terms may result in account termination, legal action, and potential criminal prosecution depending on the severity and nature of the violation. By using this Site, you acknowledge that you have read and understood this Policy and agree to comply with all terms and conditions.
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
