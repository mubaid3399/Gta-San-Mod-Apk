'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { locales } from '../../i18n.config';

const validLocales = locales;

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('header');
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const dropdownTimeoutRef = useRef(null);

  // Update active page and language based on pathname
  useEffect(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const locale = pathSegments[0];

    if (locale && validLocales.includes(locale.toLowerCase())) {
      setSelectedLanguage(locale.toUpperCase());
    } else {
      setSelectedLanguage('EN');
    }

    if (pathname.includes('/for-pc')) {
      setActivePage('forPC');
    } else if (pathname.includes('/gta-cheats')) {
      setActivePage('gtaCheats');
    } else if (pathname.includes('/gta-cars')) {
      setActivePage('gtaCars');
    } else {
      setActivePage('home');
    }
  }, [pathname]);

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'DE', label: 'Deutsch' },
    { code: 'FR', label: 'Français' },
    { code: 'IT', label: 'Italiano' },
    { code: 'ES', label: 'Español' },
    { code: 'PT', label: 'Português' },
    { code: 'RU', label: 'Русский' },
    { code: 'JA', label: '日本語' },
  ];

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

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    const scrollY = window.scrollY;

    let pathWithoutLocale = pathname;
    // Dynamically create regex from available locales
    const localeRegex = new RegExp(`^/(${validLocales.join('|')})(?:/|$)`);
    if (localeRegex.test(pathname)) {
      pathWithoutLocale = pathname.replace(localeRegex, '/');
    }

    router.push(`/${lang.toLowerCase()}${pathWithoutLocale}`);

    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 0);

    setIsLanguageDropdownOpen(false);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsLanguageDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsLanguageDropdownOpen(false);
    }, 300);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 sm:px-6 md:px-8 flex justify-center backdrop-blur-2xl bg-white/10 border border-white/20 dark:bg-black/10 dark:border-white/20 rounded-full shadow-lg">
        <div className="container flex items-center justify-between px-4 sm:px-6 py-3">

        {/* Logo */}
        <Link href={buildHref('/')} className="flex items-center gap-3 group shrink-0">
          <div className="h-14 w-14 rounded-full overflow-hidden border border-white/30 shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Image
              src="/logo.png"
              alt="GTA San Apk Logo"
              width={56}
              height={56}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold tracking-wider text-white drop-shadow">
              {t("title")}
            </span>
            <p className="text-xs text-gray-400">{t("forPC")}</p>
          </div>
        </Link>

        {/* Center Navigation - Hidden on mobile */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-white font-medium">
            {[
              { key: "home", label: t("navigation.home"), href: "/" },
              { key: "forPC", label: t("navigation.forPC"), href: "/for-pc" },
              { key: "gtaCheats", label: t("navigation.gtaCheats"), href: "/gta-cheats" },
              { key: "gtaCars", label: t("navigation.gtaCars"), href: "/gta-cars" }
            ].map(item => {
              const isActive = activePage === item.key;
              return (
                <li key={item.key}>
                  <Link
                    href={buildHref(item.href)}
                    className={`relative transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white after:w-full'
                        : 'text-white/80 hover:text-white after:w-0 hover:after:w-full'
                    } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-linear-to-r after:from-[#00ff87] after:to-[#00a2ff] after:transition-all`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Language Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button className="backdrop-blur-md bg-black/10 border border-gray-300 rounded-full cursor-pointer px-3 py-2 flex items-center gap-2 text-black hover:bg-black/20 transition-all dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20">
              <FontAwesomeIcon icon={faGlobe} className="text-sm" />
              <span className="hidden sm:inline">{selectedLanguage}</span>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-xl shadow-2xl transition-all duration-200 z-50 dark:bg-gray-900/95 dark:border-white/20 ${
                isLanguageDropdownOpen
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible'
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang.code);
                  }}
                  className={`w-full text-left px-4 py-3 transition-all cursor-pointer first:rounded-t-xl last:rounded-b-xl hover:bg-gray-100 dark:hover:bg-white/10 ${
                    selectedLanguage === lang.code
                      ? 'text-[#00ff87] font-semibold'
                      : 'text-black dark:text-white/80'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 relative"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {/* Animated hamburger to X */}
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 transform origin-center ${
                'bg-white'
              } ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                'bg-white'
              } ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 transform origin-center ${
                'bg-white'
              } ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            ></span>
          </button>
        </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Slides from left with smooth tension */}
      {isMenuOpen && (
        <motion.div className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Sidebar Menu */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 dark:bg-linear-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:border-r dark:border-white/10 shadow-2xl"
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            exit={{ x: -256 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Navigation Items */}
            <nav className="p-6 space-y-2 mt-20">
              {[
                { key: "home", label: t("navigation.home"), href: "/" },
                { key: "forPC", label: t("navigation.forPC"), href: "/for-pc" },
                { key: "gtaCheats", label: t("navigation.gtaCheats"), href: "/gta-cheats" },
                { key: "gtaCars", label: t("navigation.gtaCars"), href: "/gta-cars" }
              ].map((item) => {
                const isActive = activePage === item.key;
                return (
                  <Link
                    key={item.key}
                    href={buildHref(item.href)}
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full text-left block px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-base cursor-pointer ${
                      isActive
                        ? 'bg-[#00ff87]/20 text-[#00ff87] dark:bg-[#00ff87]/10'
                        : 'text-gray-900 hover:bg-gray-100 hover:text-[#00ff87] dark:text-white dark:hover:bg-white/10 dark:hover:text-[#00ff87]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Header;
