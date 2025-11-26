'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Footer from '../../components/Footer';
import FAQSection from '../../components/FAQSection';
import { motion } from 'framer-motion';
import carsBanner from '../../../public/cars banner iamge.png';

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

export default function GtaCarsContent() {
  const t = useTranslations('gtaCars');
  const tFaq = useTranslations('gtaCars.faqCars');

  // Convert FAQs from translations
  const faqRaw = t.raw('faqCars.data');
  let gtaCarsFAQs = [];
  if (Array.isArray(faqRaw)) {
    gtaCarsFAQs = faqRaw;
  }

  // Car images data
  const carImages = [
    { name: 'Admiral Sedan Car.png', displayName: 'Admiral Sedan' },
    { name: 'Alpha Sports Car.png', displayName: 'Alpha Sports' },
    { name: 'Baggage Utility Car.png', displayName: 'Baggage Utility' },
    { name: 'Banshee sports car.png', displayName: 'Banshee' },
    { name: 'Barracks Emergency Car.png', displayName: 'Barracks' },
    { name: 'Benson Car Van.png', displayName: 'Benson Van' },
    { name: 'BF injection off-road Car.png', displayName: 'BF Injection' },
    { name: 'Blaed Car lowrider.png', displayName: 'Blade Lowrider' },
    { name: 'Blista Compact Sedan Car.png', displayName: 'Blista Compact' },
    { name: 'Bloodring Banger sedan Car.png', displayName: 'Bloodring Banger' },
    { name: 'Bobcat Car Van.png', displayName: 'Bobcat' },
    { name: 'Boxvile car Van.png', displayName: 'Boxville' },
    { name: 'Bravura Coupes car.png', displayName: 'Bravura' },
    { name: 'Broadway lowrider car.png', displayName: 'Broadway' },
    { name: 'Buccaneer Coupes Car.png', displayName: 'Buccaneer' },
    { name: 'Buffalo Sports Car.png', displayName: 'Buffalo' },
    { name: 'Bullet Sports Car.png', displayName: 'Bullet' },
    { name: 'Burrito Van Car.png', displayName: 'Burrito' },
    { name: 'Cabbie Car.png', displayName: 'Cabbie' },
    { name: 'caddy Utility Car.png', displayName: 'Caddy' },
    { name: 'Campers Van Car.png', displayName: 'Camper' },
    { name: 'Cardona coupes car.png', displayName: 'Cardona' },
    { name: 'Cargobob Helicopter.png', displayName: 'Cargobob' },
    { name: 'Cheetha Sports Car.png', displayName: 'Cheetah' },
    { name: 'Clover Coupes Car.png', displayName: 'Clover' },
    { name: 'Club Sports Car.png', displayName: 'Club' },
    { name: 'Comet Sports car.png', displayName: 'Comet' },
    { name: 'DFT-30 industrial Car.png', displayName: 'DFT-30' },
    { name: 'Dozer Industrial Car.png', displayName: 'Dozer' },
    { name: 'Dumper Industrial Car.png', displayName: 'Dumper' },
    { name: 'Dune Off-Road Car.png', displayName: 'Dune' },
    { name: 'Elegant Sedan Car.png', displayName: 'Elegant' },
    { name: 'Elegy Tuner Sports Car.png', displayName: 'Elegy' },
    { name: 'Emperor Sedan car.png', displayName: 'Emperor' },
    { name: 'Enforcer Emergency Car.png', displayName: 'Enforcer' },
    { name: 'Esperanto Coupes Car.png', displayName: 'Esperanto' },
    { name: 'Euros Sports Car.png', displayName: 'Euros' },
    { name: 'FBI Rancher car.png', displayName: 'FBI Rancher' },
    { name: 'Feltzer Coupes Car.png', displayName: 'Feltzer' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-8 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="container mx-auto">
          <div className="relative h-[60vh] w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={carsBanner}
              alt="GTA San Andreas Cars Banner"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                  {t('hero.title')}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] text-black font-bold">
                    {t('hero.badge1')}
                  </span>
                  <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#00a2ff] to-[#00ff87] text-black font-bold">
                    {t('hero.badge2')}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/70 text-sm">Scroll to explore</span>
                <div className="flex flex-col gap-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-[#00ff87] to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative w-full bg-white dark:bg-[#030712] text-gray-900 dark:text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={staggerItem} className="text-center">
              <h2 className="text-4xl font-bold mb-4">{t('introduction.title')}</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
            </motion.div>

            <motion.p variants={staggerItem} className="text-lg leading-8 text-gray-700 dark:text-gray-300">
              {t('introduction.paragraph1')}
            </motion.p>

            <motion.p variants={staggerItem} className="text-lg leading-8 text-gray-700 dark:text-gray-300">
              {t('introduction.paragraph2')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Car Gallery Section */}
      <CarGallery carImages={carImages} />

      {/* Vehicle System Section */}
      <section className="relative w-full bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2 variants={staggerItem} className="text-4xl font-bold mb-6">
              {t('vehicleSystem.title')}
            </motion.h2>
            <motion.p variants={staggerItem} className="text-lg leading-8 text-gray-700 dark:text-gray-300">
              {t('vehicleSystem.content')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sports Cars Section with Table */}
      <VehicleSection
        title={t('sportsCars.title')}
        content={t('sportsCars.content')}
        vehicleType="Cars/Sports"
        t={t}
      />

      {/* Low Riders Section with Table */}
      <VehicleSection
        title={t('lowRiders.title')}
        content={t('lowRiders.content')}
        bgLight
        vehicleType="Cars/Lowriders"
        t={t}
      />

      {/* Motorcycles Section with Table */}
      <VehicleSection
        title={t('motorcycles.title')}
        content={t('motorcycles.content')}
        vehicleType="Motorcycles"
        t={t}
      />

      {/* Heavy Vehicles Section with Table */}
      <VehicleSection
        title={t('heavyVehicles.title')}
        content={t('heavyVehicles.content')}
        bgLight
        vehicleType="Trucks"
        t={t}
      />

      {/* Rare Vehicles Section with Table */}
      <VehicleSection
        title={t('rareVehicles.title')}
        content={t('rareVehicles.content')}
        vehicleType="Classic"
        t={t}
      />

      {/* Aircraft Section with Table */}
      <VehicleSection
        title={t('aircraft.title')}
        content={t('aircraft.content')}
        bgLight
        vehicleType="Aircraft"
        t={t}
      />

      {/* Water Vehicles Section with Table */}
      <VehicleSection
        title={t('waterVehicles.title')}
        content={t('waterVehicles.content')}
        vehicleType="Water Vehicles"
        t={t}
      />

      {/* Police Vehicles Section with Table */}
      <VehicleSection
        title={t('policeVehicles.title')}
        content={t('policeVehicles.content')}
        bgLight
        vehicleType="Emergency"
        t={t}
      />

      {/* Modifications Section */}
      <VehicleSection
        title={t('modifications.title')}
        content={t('modifications.content')}
      />

      {/* Damage System Section */}
      <VehicleSection
        title={t('damageSystem.title')}
        content={t('damageSystem.content')}
        bgLight
      />

      {/* Cheats Section */}
      <VehicleSection
        title={t('cheats.title')}
        content={t('cheats.content')}
      />

      {/* Finding Vehicles Section */}
      <VehicleSection
        title={t('findingVehicles.title')}
        content={t('findingVehicles.content')}
        bgLight
      />

      {/* Vehicle Missions Section */}
      <VehicleSection
        title={t('vehicleMissions.title')}
        content={t('vehicleMissions.content')}
      />

      {/* Performance Section */}
      <VehicleSection
        title={t('performance.title')}
        content={t('performance.content')}
        bgLight
      />

      {/* Driving Skill Section */}
      <VehicleSection
        title={t('drivingSkill.title')}
        content={t('drivingSkill.content')}
      />

      {/* Updates Section */}
      <VehicleSection
        title={t('updates2025.title')}
        content={t('updates2025.content')}
        bgLight
      />

      {/* FAQ Section */}
      <FAQSection
        title={t('faqCars.title')}
        faqs={gtaCarsFAQs}
      />

      {/* Conclusion Section */}
      <section className="relative w-full bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 text-center"
          >
            <motion.h2 variants={staggerItem} className="text-4xl font-bold">
              {t('conclusion.title')}
            </motion.h2>
            <motion.div variants={staggerItem} className="h-1 w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto"></motion.div>
            <motion.p variants={staggerItem} className="text-lg leading-8 text-white/90">
              {t('conclusion.content')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

// Reusable Vehicle Section Component with Optional Table
function VehicleSection({ title, content, bgLight = false, vehicleType = null, t = null }) {
  const vehicleData = t ? t.raw('vehicleDatabase.data') : [];
  const vehicles = Array.isArray(vehicleData) ? vehicleData : [];

  // Filter vehicles by type if vehicleType is provided
  const filteredVehicles = vehicleType
    ? vehicles.filter(v => {
        if (!v.type) return false;
        const typeStr = String(v.type).toLowerCase();
        const searchStr = String(vehicleType).toLowerCase();
        return typeStr.includes(searchStr);
      })
    : [];

  return (
    <section className={`relative w-full ${bgLight ? 'bg-gray-50 dark:bg-gray-900/50' : 'bg-white dark:bg-[#030712]'} text-gray-900 dark:text-gray-100 py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2 variants={staggerItem} className="text-4xl font-bold mb-6">
            {title}
          </motion.h2>
          <motion.div variants={staggerItem} className="h-1 w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded"></motion.div>
          <motion.p variants={staggerItem} className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            {content}
          </motion.p>

          {/* Vehicle Table */}
          {vehicleType && filteredVehicles.length > 0 && (
            <motion.div variants={staggerItem} className="overflow-x-auto rounded-xl border border-gray-200 dark:border-white/10 shadow-lg mt-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 dark:from-[#00ff87]/5 dark:to-[#00a2ff]/5 border-b border-gray-200 dark:border-white/10">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Vehicle Name</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Type</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Top Speed</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVehicles.map((vehicle, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{vehicle.name}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm">
                          {vehicle.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-semibold">{vehicle.speed}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-semibold text-green-600 dark:text-green-400">{vehicle.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// Car Image Gallery Component with Zigzag Layout
function CarGallery({ carImages }) {
  const t = useTranslations('gtaCars');
  const vehicleData = t.raw('vehicleDatabase.data');
  const vehicles = Array.isArray(vehicleData) ? vehicleData : [];

  // Create a map of vehicle names for quick lookup
  const vehicleMap = {};
  vehicles.forEach(vehicle => {
    vehicleMap[vehicle.name] = vehicle;
  });

  // Map car images to vehicle data
  const carMappings = {
    'Admiral Sedan': 'Admiral',
    'Alpha Sports': 'Alpha',
    'Baggage Utility': 'Baggage Utility',
    'Banshee': 'Banshee',
    'Barracks': 'Barracks',
    'Benson Van': 'Benson Car Van',
    'BF Injection': 'BF-Injection',
    'Blade Lowrider': 'Blade',
    'Blista Compact': 'Blista Compact',
    'Bloodring Banger': 'Bloodring Banger',
    'Bobcat': 'Bobcat Car Van',
    'Boxville': 'Boxville',
    'Bravura': 'Bravura',
    'Broadway': 'Broadway',
    'Buccaneer': 'Buccaneer',
    'Buffalo': 'Buffalo',
    'Bullet': 'Bullet',
    'Burrito': 'Burrito',
    'Cabbie': 'Cabbie',
    'Caddy': 'Caddy',
    'Camper': 'Camper',
    'Cardona': 'Cardona',
    'Cargobob': 'Cargobob',
    'Cheetah': 'Cheetah',
    'Clover': 'Clover',
    'Club': 'Club',
    'Comet': 'Comet',
    'DFT-30': 'DFT-30',
    'Dozer': 'Dozer',
    'Dumper': 'Dumper',
    'Dune': 'Dune',
    'Elegant': 'Elegant',
    'Elegy': 'Elegy',
    'Emperor': 'Emperor',
    'Enforcer': 'Enforcer',
    'Esperanto': 'Esperanto',
    'Euros': 'Euros',
    'FBI Rancher': 'FBI Rancher',
    'Feltzer': 'Feltzer',
  };

  return (
    <section className="relative w-full bg-white dark:bg-[#030712] text-gray-900 dark:text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center">
            <h2 className="text-4xl font-bold mb-4">GTA San Andreas Vehicles Gallery</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto"></div>
          </motion.div>

          {/* Zigzag Layout - Side by Side */}
          <div className="space-y-16">
            {carImages.map((car, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col justify-center space-y-4 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  {(() => {
                    const vehicleKey = carMappings[car.displayName];
                    const vehicleInfo = vehicleMap[vehicleKey] || {};

                    return (
                      <>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                          {car.displayName}
                        </h3>
                        <div className="h-1 w-16 bg-linear-to-r from-[#00ff87] to-[#00a2ff] rounded"></div>

                        {/* Vehicle Details */}
                        <div className="space-y-3">
                          {vehicleInfo.type && (
                            <div className="flex items-baseline gap-2">
                              <span className="text-sm font-semibold text-[#00ff87]">Type:</span>
                              <span className="text-base text-gray-700 dark:text-gray-300">
                                {vehicleInfo.type}
                              </span>
                            </div>
                          )}

                          {vehicleInfo.speed && (
                            <div className="flex items-baseline gap-2">
                              <span className="text-sm font-semibold text-[#00ff87]">Top Speed:</span>
                              <span className="text-base text-gray-700 dark:text-gray-300">
                                {vehicleInfo.speed}
                              </span>
                            </div>
                          )}

                          {vehicleInfo.price && (
                            <div className="flex items-baseline gap-2">
                              <span className="text-sm font-semibold text-[#00ff87]">Price:</span>
                              <span className="text-base font-semibold text-green-500">
                                {vehicleInfo.price}
                              </span>
                            </div>
                          )}
                        </div>
                      </>
                    );
                  })()}
                </motion.div>

                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative w-full h-80 lg:h-96 bg-gray-200 dark:bg-gray-800">
                    <Image
                      src={`/${car.name}`}
                      alt={car.displayName}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
