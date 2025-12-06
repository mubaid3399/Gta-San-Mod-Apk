'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { locales } from '../../i18n.config';

const validLocales = locales;

export default function Footer() {
 const t = useTranslations();
 const pathname = usePathname();
 const currentYear = 2025;

 const localePrefix = (() => {
   const parts = pathname.split('/').filter(Boolean);
   const maybeLocale = parts[0];
   return maybeLocale && validLocales.includes(maybeLocale.toLowerCase()) ? `/${maybeLocale.toLowerCase()}` : '';
 })();

 const buildHref = (path) => {
   if (path === '/') {
     return localePrefix || '/';
   }
   return `${localePrefix}${path}`;
 };

 const platformLinks = [
 { label: 'For iOS', href: '/for-ios' },
 { label: 'For PC', href: '/for-pc' },
 ];

 const contentLinks = [
 { label: 'GTA Cars', href: '/gta-cars' },
 { label: 'GTA Cheats', href: '/gta-cheats' },
 { label: 'How to Install', href: '/how-to-install' },
 { label: 'FAQ', href: '/faq' },
 ];

 const supportLinks = [
 { label: 'Is Safe to Download', href: '/is-safe-to-download' },
 { label: 'MOD vs Original', href: '/mod-apk-vs-original' },
 { label: 'Community', href: '/community' },
 { label: 'Contact Us', href: '/contact' },
 ];

 const socialLinks = [
 { icon: faFacebook, label: 'Facebook', href: 'https://www.facebook.com/people/Gta-SanAndreas/pfbid02rnCyLfcbiZZKnrfVB22tGm5CnrQFvri1zRPAFpjcfpy8hpvTZeqCxa2WfCgGhVWCl/' },
 { icon: faPinterest, label: 'Pinterest', href: 'https://www.pinterest.com/gta868309/' },
 { icon: faInstagram, label: 'Instagram', href: 'https://www.instagram.com/gta868309/' },
 { icon: faYoutube, label: 'YouTube', href: 'https://www.youtube.com/channel/UCYe8ocBekKxI4S6vRWSdaOQ' },
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
 <footer className="relative w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 pt-16 pb-6 px-4 sm:px-6 lg:px-8">
 <div className="container mx-auto max-w-7xl">
 {/* Main Footer Content */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
 {/* Brand Section */}
 <div className="flex flex-col gap-4">
 <div className="flex items-center gap-3">
 <div className="h-12 w-12 rounded-full overflow-hidden border border-[#00ff87]/30 shadow-lg">
 <Image
 src="/logo.png"
 alt="GTA San Andreas Logo"
 width={48}
 height={48}
 className="w-full h-full object-cover"
 />
 </div>
 <div>
 <h3 className="text-lg font-bold tracking-wide text-white">GTA San Andreas</h3>
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

 {/* Platforms */}
 <div>
 <h4 className="text-base font-bold text-white mb-6 relative pb-2">
 Platforms
 <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#00ff87] to-[#00a2ff]"></span>
 </h4>
 <ul className="space-y-3">
 {platformLinks.map((link) => (
 <li key={link.label}>
 <Link
 href={buildHref(link.href)}
 className="text-gray-400 hover:text-[#00ff87] transition-colors duration-200 flex items-center gap-2 group text-sm cursor-pointer"
 >
 <span className="w-1 h-1 rounded-full bg-[#00ff87] group-hover:scale-125 transition-transform"></span>
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Content */}
 <div>
 <h4 className="text-base font-bold text-white mb-6 relative pb-2">
 Content
 <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#00ff87] to-[#00a2ff]"></span>
 </h4>
 <ul className="space-y-3">
 {contentLinks.map((link) => (
 <li key={link.label}>
 <Link
 href={buildHref(link.href)}
 className="text-gray-400 hover:text-[#00ff87] transition-colors duration-200 flex items-center gap-2 group text-sm cursor-pointer"
 >
 <span className="w-1 h-1 rounded-full bg-[#00ff87] group-hover:scale-125 transition-transform"></span>
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Support */}
 <div>
 <h4 className="text-base font-bold text-white mb-6 relative pb-2">
 Support
 <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#00ff87] to-[#00a2ff]"></span>
 </h4>
 <ul className="space-y-3">
 {supportLinks.map((link) => (
 <li key={link.label}>
 <Link
 href={buildHref(link.href)}
 className="text-gray-400 hover:text-[#00ff87] transition-colors duration-200 flex items-center gap-2 group text-sm cursor-pointer"
 >
 <span className="w-1 h-1 rounded-full bg-[#00ff87] group-hover:scale-125 transition-transform"></span>
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
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
 <Link
 href={buildHref(link.href)}
 className="hover:text-[#00ff87] transition-colors duration-200"
 >
 {link.label}
 </Link>
 {index < legalLinks.length - 1 && (
 <span className="text-gray-400">•</span>
 )}
 </div>
 ))}
 </div>

 {/* Copyright */}
 <div className="text-center md:text-right text-xs text-gray-400">
 <p>
 © {currentYear} <span className="text-[#00ff87] font-semibold">GTA San Andreas</span>. All rights reserved. | Made with <span className="text-[#00a2ff]">❤</span>
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
