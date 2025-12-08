'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import heroCheats from '../../Assets/gta-cheats-hero.png';
import FAQSection from '../../components/FAQSection';
import ContentSection from '../../components/sections/ContentSection';
import RelatedPages from '../../components/RelatedPages';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Reusable Table Component
const TableComponent = ({ headers, rows, variant = 'default' }) => (
  <div className="rounded-lg border border-gray-700 w-full overflow-hidden">
    <table className="w-full text-xs sm:text-sm md:text-base">
      <thead>
        <tr className={variant === 'dark' ? 'bg-gray-900' : 'bg-gray-800'}>
          {headers.map((header) => (
            <th key={header} className="px-2 py-2 sm:px-3 sm:py-3 md:px-6 md:py-4 text-left font-semibold text-white border-b border-gray-700 text-xs sm:text-sm md:text-base">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-900/50' : 'bg-gray-800/30'}>
            {Object.values(row).map((cell, cellIdx) => (
              <td key={cellIdx} className="px-2 py-2 sm:px-3 sm:py-3 md:px-6 md:py-4 text-gray-300 border-b border-gray-700 break-words text-xs sm:text-sm md:text-base">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function GtaCheatsContent() {
  const t = useTranslations('gtaCheats');

  // Get raw cheat data from translations
  const actionCheatsRaw = t.raw('actionCheats.data');
  const playerCheatsRaw = t.raw('playerCheats.data');
  const vehicleCheatsRaw = t.raw('vehicleCheats.data');
  const weatherCheatsRaw = t.raw('weatherCheats.data');
  const gangCheatsRaw = t.raw('gangCheats.data');
  const moneyWeaponsRaw = t.raw('moneyWeapons.data');
  const weaponsRaw = t.raw('weapons.data');
  const vehiclesRaw = t.raw('vehicles.data');
  const charactersRaw = t.raw('characters.data');
  const gangsRaw = t.raw('gangs.data');
  const secretLocationsRaw = t.raw('secretLocations.data');
  const faqRaw = t.raw('faqCheats.data');

  // Convert to arrays if available
  const actionCheats = Array.isArray(actionCheatsRaw) ? actionCheatsRaw : [];
  const playerCheats = Array.isArray(playerCheatsRaw) ? playerCheatsRaw : [];
  const vehicleCheats = Array.isArray(vehicleCheatsRaw) ? vehicleCheatsRaw : [];
  const weatherCheats = Array.isArray(weatherCheatsRaw) ? weatherCheatsRaw : [];
  const gangCheats = Array.isArray(gangCheatsRaw) ? gangCheatsRaw : [];
  const moneyWeaponsCheats = Array.isArray(moneyWeaponsRaw) ? moneyWeaponsRaw : [];
  const weaponsList = Array.isArray(weaponsRaw) ? weaponsRaw : [];
  const vehiclesList = Array.isArray(vehiclesRaw) ? vehiclesRaw : [];
  const characters = Array.isArray(charactersRaw) ? charactersRaw : [];
  const gangs = Array.isArray(gangsRaw) ? gangsRaw : [];
  const secretLocations = Array.isArray(secretLocationsRaw) ? secretLocationsRaw : [];
  const gtaCheatsRFAQs = Array.isArray(faqRaw) ? faqRaw : [];

  // Transform data for tables
  const actionCheatsRows = actionCheats.map((cheat) => ({
    action: cheat.action || '',
    code: cheat.pc || '',
    effect: cheat.effect || '',
  }));

  const playerCheatsRows = playerCheats.map((cheat) => ({
    effect: cheat.effect || '',
    pc: cheat.pc || '',
    ps: cheat.ps || '',
    xbox: cheat.xbox || '',
  }));

  const vehiclesCheatsRows = vehicleCheats.map((cheat) => ({
    effect: cheat.effect || '',
    pc: cheat.pc || '',
    ps: cheat.ps || '',
    xbox: cheat.xbox || '',
  }));

  const weatherCheatsRows = weatherCheats.map((cheat) => ({
    effect: cheat.effect || '',
    pc: cheat.pc || '',
    ps: cheat.ps || '',
    xbox: cheat.xbox || '',
  }));

  const gangCheatsRows = gangCheats.map((cheat) => ({
    effect: cheat.effect || '',
    pc: cheat.pc || '',
    ps: cheat.ps || '',
    xbox: cheat.xbox || '',
  }));

  const moneyWeaponsRows = moneyWeaponsCheats.map((cheat) => ({
    effect: cheat.effect || '',
    pc: cheat.pc || '',
    ps: cheat.ps || '',
    xbox: cheat.xbox || '',
  }));

  const weaponsRows = weaponsList.map((weapon) => ({
    gun: weapon.name || '',
    type: weapon.type || '',
    price: weapon.price ? `$${weapon.price}` : '',
    details: weapon.details || '',
  }));

  const vehiclesRows = vehiclesList.map((vehicle) => ({
    vehicle: vehicle.name || '',
    type: vehicle.type || '',
    speed: vehicle.speed ? `${vehicle.speed} km/h` : '',
    price: vehicle.price ? `$${vehicle.price}` : '',
  }));

  const charactersRows = characters.map((char) => ({
    character: char.name || '',
    role: char.role || '',
  }));

  const gangsRows = gangs.map((gang) => ({
    gang: gang.name || '',
    area: gang.area || '',
    color: gang.color || '',
    enemy: gang.enemy || '',
  }));

  const secretLocationsRows = secretLocations.map((loc) => ({
    location: loc.location || '',
    place: loc.place || '',
    find: loc.find || '',
  }));

  const relatedPages = [
    {
      href: '/gta-cars',
      icon: '🚗',
      title: 'Vehicle Cheats & Spawning',
      description: 'View all vehicles and learn how to spawn them using cheat codes.'
    },
    {
      href: '/for-ios',
      icon: '📱',
      title: 'iOS Cheats Guide',
      description: 'How to enter cheats on iOS devices with touch controls.'
    },
    {
      href: '/for-pc',
      icon: '⌨️',
      title: 'PC Cheats Guide',
      description: 'Complete keyboard cheat codes list for PC version.'
    },
    {
      href: '/how-to-install',
      icon: '📥',
      title: 'Installation Guide',
      description: 'Install the game to start using all cheats and features.'
    },
    {
      href: '/',
      icon: '🏠',
      title: 'Home',
      description: 'Return to the main page for downloads and game overview.'
    },
    {
      href: '/faq',
      icon: '❓',
      title: 'FAQ',
      description: 'Common questions about cheats, gameplay, and troubleshooting.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative w-full py-8 px-4 sm:px-6 lg:px-8 mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="relative h-[60vh] w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={heroCheats}
              alt="GTA San Andreas cheats hero background"
              fill
              priority
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45"></div>

            {/* Hero Content */}
            <motion.div
              className="relative z-10 h-full flex items-center justify-center flex-col gap-6 px-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                {t('hero.title')}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl drop-shadow-lg">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="bg-[#030712]/15 text-white text-sm sm:text-base px-4 py-2 rounded-full border border-white/20 backdrop-blur">
                  {t('hero.badge1')}
                </span>
                <span className="bg-[#030712]/15 text-white text-sm sm:text-base px-4 py-2 rounded-full border border-white/20 backdrop-blur">
                  {t('hero.badge2')}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <ContentSection
        title={t('introduction.title')}
        subtitle={t('introduction.subtitle')}
        description={t('introduction.description')}
        bgColor="white"
      >
        <div className="space-y-6">
          <p className="text-base sm:text-lg leading-8 text-gray-300">
            {t('introduction.paragraph')}
          </p>
          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-4 sm:p-6">
            <p className="text-sm text-gray-300">
              💡 <strong>Tip:</strong> {t('introduction.tip')}
            </p>
          </div>

          {/* YouTube Video */}
          <motion.div
            className="mt-8 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/1OCbl5ZaQFE"
                title="How to Add Cheat Menu in GTA San Andreas PC"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Action Cheats Table */}
      <ContentSection title={t('actionCheats.title')} bgColor="light">
        <TableComponent
          headers={[t('actionCheats.headers.0'), t('actionCheats.headers.1'), t('actionCheats.headers.2')]}
          rows={actionCheatsRows}
        />
      </ContentSection>

      {/* Player Cheats Table */}
      <ContentSection title={t('playerCheats.title')} subtitle={t('playerCheats.subtitle')} bgColor="white">
        <TableComponent
          headers={[t('playerCheats.headers.0'), t('playerCheats.headers.1'), t('playerCheats.headers.2'), t('playerCheats.headers.3')]}
          rows={playerCheatsRows}
        />
      </ContentSection>

      {/* Vehicle Cheats Table */}
      <ContentSection title={t('vehicleCheats.title')} bgColor="light">
        <TableComponent
          headers={[t('vehicleCheats.headers.0'), t('vehicleCheats.headers.1'), t('vehicleCheats.headers.2'), t('vehicleCheats.headers.3')]}
          rows={vehiclesCheatsRows}
        />
      </ContentSection>

      {/* Weather Cheats Table */}
      <ContentSection title={t('weatherCheats.title')} bgColor="white">
        <TableComponent
          headers={[t('weatherCheats.headers.0'), t('weatherCheats.headers.1'), t('weatherCheats.headers.2'), t('weatherCheats.headers.3')]}
          rows={weatherCheatsRows}
        />
      </ContentSection>

      {/* Gang Cheats Table */}
      <ContentSection title={t('gangCheats.title')} bgColor="light">
        <TableComponent
          headers={[t('gangCheats.headers.0'), t('gangCheats.headers.1'), t('gangCheats.headers.2'), t('gangCheats.headers.3')]}
          rows={gangCheatsRows}
        />
      </ContentSection>

      {/* Money, Weapons & Skills Table */}
      <ContentSection title={t('moneyWeapons.title')} bgColor="white">
        <TableComponent
          headers={[t('moneyWeapons.headers.0'), t('moneyWeapons.headers.1'), t('moneyWeapons.headers.2'), t('moneyWeapons.headers.3')]}
          rows={moneyWeaponsRows}
        />
      </ContentSection>

      {/* Weapons List */}
      <ContentSection
        title={t('weapons.title')}
        subtitle={t('weapons.subtitle')}
        description={t('weapons.description')}
        bgColor="light"
      >
        <TableComponent
          headers={[t('weapons.headers.0'), t('weapons.headers.1'), t('weapons.headers.2'), t('weapons.headers.3')]}
          rows={weaponsRows}
        />
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-6">
          <p className="text-sm text-amber-900">
            💡 <strong>Tip:</strong> {t('weapons.tip')}
          </p>
        </div>
      </ContentSection>

      {/* Vehicles List */}
      <ContentSection
        title={t('vehicles.title')}
        subtitle={t('vehicles.subtitle')}
        description={t('vehicles.description')}
        bgColor="white"
      >
        <TableComponent
          headers={[t('vehicles.headers.0'), t('vehicles.headers.1'), t('vehicles.headers.2'), t('vehicles.headers.3')]}
          rows={vehiclesRows}
        />
        <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4 sm:p-6">
          <p className="text-sm text-purple-900">
            🏆 <strong>Fun Fact:</strong> {t('vehicles.fact')}
          </p>
        </div>
      </ContentSection>

      {/* Main Characters */}
      <ContentSection
        title={t('characters.title')}
        subtitle={t('characters.subtitle')}
        description={t('characters.description')}
        bgColor="light"
      >
        <TableComponent
          headers={[t('characters.headers.0'), t('characters.headers.1')]}
          rows={charactersRows}
        />
        <div className="mt-6 text-center">
          <p className="text-base sm:text-lg text-gray-300">
            {t('characters.note')}
          </p>
        </div>
      </ContentSection>

      {/* Gangs */}
      <ContentSection
        title={t('gangs.title')}
        description={t('gangs.description')}
        bgColor="white"
      >
        <TableComponent
          headers={[t('gangs.headers.0'), t('gangs.headers.1'), t('gangs.headers.2'), t('gangs.headers.3')]}
          rows={gangsRows}
        />
        <div className="mt-6">
          <p className="text-base sm:text-lg text-gray-300">
            {t('gangs.note')}
          </p>
        </div>
      </ContentSection>

      {/* Secret Locations */}
      <ContentSection
        title={t('secretLocations.title')}
        description={t('secretLocations.description')}
        bgColor="light"
      >
        <TableComponent
          headers={[t('secretLocations.headers.0'), t('secretLocations.headers.1'), t('secretLocations.headers.2')]}
          rows={secretLocationsRows}
        />
        <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <p className="text-sm text-indigo-900">
            👽 <strong>Fun Note:</strong> {t('secretLocations.note')}
          </p>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <div className="bg-gradient-to-b from-gray-900/50 to-[#030712]">
        <FAQSection faqs={gtaCheatsRFAQs} />
      </div>

      {/* Related Pages Section */}
      <RelatedPages pages={relatedPages} />
    </main>
  );
}
