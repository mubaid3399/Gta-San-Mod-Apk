'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const t = useTranslations();
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'For PC', href: '/for-pc' },
    { label: 'GTA Cheats', href: '/gta-cheats' },
    { label: 'Blog', href: '/' },
  ];

  const socialLinks = [
    { icon: faFacebook, label: 'Facebook', href: 'https://www.facebook.com/gtasanandreas' },
    { icon: faTwitter, label: 'Twitter', href: 'https://twitter.com/GTASanApk' },
    { icon: faInstagram, label: 'Instagram', href: 'https://www.instagram.com/gtasanandreas' },
    { icon: faYoutube, label: 'YouTube', href: 'https://www.youtube.com/channel/gtasanandreas' },
    { icon: faDiscord, label: 'Discord', href: 'https://discord.gg/gtasanandreas' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Acceptable Use', href: '/acceptable-use' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black dark:from-[#030712] dark:via-[#0a0e27] dark:to-black text-gray-100 pt-16 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden border border-[#00ff87]/30 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="GTA San Apk Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-wide text-white">GTA San Apk</h3>
                <p className="text-xs text-gray-400">For PC</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Experience the ultimate GTA San Andreas with premium mods, enhanced graphics, and exclusive features. Download now and dive into the world of Los Santos.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00ff87]/20 to-[#00a2ff]/20 border border-[#00ff87]/30 flex items-center justify-center text-white/70 hover:text-white hover:border-[#00ff87] hover:shadow-lg hover:shadow-[#00ff87]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#00ff87] to-[#00a2ff]"></span>
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => router.push(link.href)}
                    className="text-gray-400 hover:text-[#00ff87] transition-colors duration-200 flex items-center gap-2 group text-sm cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00ff87] group-hover:scale-125 transition-transform"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 relative pb-2">
              Resources
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#00ff87] to-[#00a2ff]"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/how-to-install"
                  className="text-gray-400 hover:text-[#00ff87] transition-colors duration-200 flex items-center gap-2 group text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-[#00ff87] group-hover:scale-125 transition-transform"></span>
                  Installation Guide
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-400 hover:text-[#00ff87] transition-colors duration-200 flex items-center gap-2 group text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-[#00ff87] group-hover:scale-125 transition-transform"></span>
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/is-safe-to-download"
                  className="text-gray-400 hover:text-[#00ff87] transition-colors duration-200 flex items-center gap-2 group text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-[#00ff87] group-hover:scale-125 transition-transform"></span>
                  Safety & Security
                </a>
              </li>
              <li>
                <a
                  href="/mod-apk-vs-original"
                  className="text-gray-400 hover:text-[#00ff87] transition-colors duration-200 flex items-center gap-2 group text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-[#00ff87] group-hover:scale-125 transition-transform"></span>
                  Comparison Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 relative pb-2">
              Community
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#00ff87] to-[#00a2ff]"></span>
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Join our gaming community and connect with other GTA San Andreas enthusiasts.
            </p>
            <p className="text-xs text-gray-500 text-center">
              Stay updated with the latest guides and strategies
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00ff87]/30 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-xs text-gray-400">
            {legalLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-4">
                <a
                  href={link.href}
                  className="hover:text-[#00ff87] transition-colors duration-200"
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-600">•</span>
                )}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-xs text-gray-400">
            <p>
              © {currentYear} <span className="text-[#00ff87] font-semibold">GTA San Apk</span>. All rights reserved. | Made with <span className="text-[#00a2ff]">❤</span>
            </p>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00ff87]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00a2ff]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      </div>
    </footer>
  );
}
