'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FAQSection from '../../components/FAQSection';
import RelatedPages from '../../components/RelatedPages';
import { motion } from 'framer-motion';

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

export default function ViceCityContent() {
  const t = useTranslations('viceCityContent');

  // Weapon data
  const weapons = [
    { name: 'Knife', category: 'Melee', price: '$50', bestUse: 'Silent kills' },
    { name: 'Baseball Bat', category: 'Melee', price: '$5', bestUse: 'Close combat' },
    { name: 'Chainsaw', category: 'Melee', price: '$100', bestUse: 'Intimidation' },
    { name: 'Colt 45', category: 'Handgun', price: '$100', bestUse: 'Basic defense' },
    { name: 'Colt Python', category: 'Handgun', price: '$2,000', bestUse: 'Powerful shots' },
    { name: 'Chrome Shotgun', category: 'Shotgun', price: '$1,500', bestUse: 'Close range' },
    { name: 'Spas 12 Shotgun', category: 'Shotgun', price: '$4,000', bestUse: 'Best shotgun' },
    { name: 'Tec-9', category: 'SMG', price: '$300', bestUse: 'Drive-by shooting' },
    { name: 'Mac 10', category: 'SMG', price: '$1,000', bestUse: 'Rapid fire' },
    { name: 'MP5', category: 'SMG', price: '$2,000', bestUse: 'Balanced SMG' },
    { name: 'Ruger', category: 'Assault Rifle', price: '$2,000', bestUse: 'Accurate fire' },
    { name: 'M4', category: 'Assault Rifle', price: '$5,000', bestUse: 'Best rifle' },
    { name: 'Rocket Launcher', category: 'Heavy', price: '$8,000', bestUse: 'Vehicles' },
    { name: 'Minigun', category: 'Heavy', price: '$10,000', bestUse: 'Ultimate power' },
    { name: 'Sniper Rifle', category: 'Sniper', price: '$6,000', bestUse: 'Long distance' },
    { name: 'Laser Sniper', category: 'Sniper', price: '$15,000', bestUse: 'Perfect accuracy' },
    { name: 'Grenades', category: 'Thrown', price: '$300', bestUse: 'Area damage' },
    { name: 'Molotov Cocktails', category: 'Thrown', price: '$500', bestUse: 'Fire damage' },
  ];

  // Vehicle data
  const vehicles = [
    { name: 'Infernus', type: 'Sports Car', topSpeed: 'Very Fast', features: 'Best car in game' },
    { name: 'Cheetah', type: 'Sports Car', topSpeed: 'Very Fast', features: 'Sleek design' },
    { name: 'Banshee', type: 'Sports Car', topSpeed: 'Fast', features: 'Easy handling' },
    { name: 'Phoenix', type: 'Muscle Car', topSpeed: 'Fast', features: 'Classic look' },
    { name: 'Sabre Turbo', type: 'Muscle Car', topSpeed: 'Medium', features: 'Durable' },
    { name: 'PCJ-600', type: 'Motorcycle', topSpeed: 'Very Fast', features: 'Best bike' },
    { name: 'Faggio', type: 'Scooter', topSpeed: 'Slow', features: 'Funny vehicle' },
    { name: 'Sanchez', type: 'Dirt Bike', topSpeed: 'Fast', features: 'Off-road' },
  ];

  // Boats
  const boats = [
    { name: 'Squalo', type: 'Speedboat', speed: 'Very Fast', notes: 'Racing boat' },
    { name: 'Reefer', type: 'Boat', speed: 'Slow', notes: 'Large vessel' },
    { name: 'Tropic', type: 'Boat', speed: 'Medium', notes: 'Common boat' },
    { name: 'Coastguard', type: 'Boat', speed: 'Medium', notes: 'Official boat' },
  ];

  // Gangs
  const gangs = [
    { name: 'Vercetti Gang', clothing: 'Light blue Hawaiian shirts', territory: 'Your properties' },
    { name: 'Diaz Gang', clothing: 'Black suits', territory: 'Mansion area' },
    { name: 'Cubans', clothing: 'White outfits', territory: 'Little Havana' },
    { name: 'Haitians', clothing: 'Colorful clothing', territory: 'Opposite area' },
    { name: 'Bikers', clothing: 'Leather', territory: 'Downtown bar' },
  ];

  // Related pages
  const relatedPages = [
    {
      href: '/gta-cheats',
      icon: '🎮',
      title: 'GTA Cheats',
      description: 'Complete cheat codes for all GTA games including Vice City.'
    },
    {
      href: '/for-pc',
      icon: '💻',
      title: 'GTA for PC',
      description: 'Download and play GTA Vice City on your computer.'
    },
    {
      href: '/for-ios',
      icon: '📱',
      title: 'GTA for iOS',
      description: 'Play Vice City on your iPhone or iPad with touch controls.'
    },
    {
      href: '/how-to-install',
      icon: '📥',
      title: 'Installation Guide',
      description: 'Step-by-step guide to install GTA Vice City on any platform.'
    },
    {
      href: '/gta-cars',
      icon: '🚗',
      title: 'GTA Cars',
      description: 'Explore all vehicles across the GTA series.'
    },
    {
      href: '/',
      icon: '🏠',
      title: 'Home',
      description: 'Return to main page for more GTA content and downloads.'
    }
  ];

  // FAQ data
  const viceCityFAQs = [
    {
      question: "Is there a GTA Vice City remaster coming in 2025?",
      answer: "No official remaster has been announced for 2025. The Grand Theft Auto Vice City Definitive Edition released in 2021 remains the latest official version with updated graphics and modern conveniences."
    },
    {
      question: "Can I play GTA Vice City on new consoles in 2025?",
      answer: "Yes, you can play Grand Theft Auto Vice City Definitive Edition on PlayStation 5, Xbox Series X/S, Nintendo Switch, PlayStation 4, and Xbox One with excellent performance and faster loading times."
    },
    {
      question: "Does GTA Vice City support multiplayer in 2025?",
      answer: "The official game does not include multiplayer. However, PC players can use community mods like Multi Theft Auto to play online, though these are unofficial and not supported by Rockstar Games."
    },
    {
      question: "Are there new cheats or features added in 2025?",
      answer: "No new official cheats have been added. The same cheats from the original release work in all versions. The Definitive Edition includes quality-of-life improvements like better checkpoints and updated controls."
    },
    {
      question: "What is the file size for GTA Vice City in 2025?",
      answer: "File sizes vary by platform. PC version requires about 1.5 GB for the original and 15 GB for Definitive Edition. Mobile versions need 1.5 to 2 GB. Console versions range from 12 to 15 GB."
    },
    {
      question: "Can I transfer saves between PC and mobile versions?",
      answer: "No official method exists to transfer saves between platforms. Each version uses different save file formats. It is safer to treat each platform as a separate experience."
    },
    {
      question: "Is GTA Vice City still popular in 2025?",
      answer: "Yes, Vice City remains extremely popular with millions of YouTube views, active speedrunning communities, and ongoing mod development. Its status as one of the best open-world games ever keeps it relevant."
    },
    {
      question: "What makes Vice City better than other GTA games?",
      answer: "Vice City offers unique advantages: the 1980s Miami setting with neon colors and classic music creates unmatched atmosphere. Tommy Vercetti is one of the most memorable protagonists. The game length is perfect and the balance of gameplay, story, and setting makes it special."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-8 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="container mx-auto">
          <div className="relative h-[60vh] w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/vice city/vice city banner.webp"
              alt="GTA Vice City Banner"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                  GTA Vice City
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-bold">
                  The Timeless Classic That Redefined Open World Gaming
                </h2>
                <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                  Experience the legendary 1980s Miami adventure. Complete guide covering gameplay, cheats, vehicles, missions, and essential fixes for PC and mobile.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-6 py-2 bg-[#00ff87]/20 backdrop-blur-sm border border-[#00ff87] rounded-full text-white font-semibold">
                    🎮 Complete Guide
                  </span>
                  <span className="px-6 py-2 bg-[#00a2ff]/20 backdrop-blur-sm border border-[#00a2ff] rounded-full text-white font-semibold">
                    🌴 1980s Miami
                  </span>
                  <span className="px-6 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500 rounded-full text-white font-semibold">
                    ⭐ Classic Game
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={staggerItem}>
              <p className="text-lg leading-relaxed mb-6">
                Grand Theft Auto Vice City remains one of the most beloved entries in the GTA game series. Released in 2002, this iconic open world game takes players to a vibrant 1980s Miami-inspired city filled with neon lights, fast cars, and thrilling missions. Whether you are looking for <strong>GTA Vice City gameplay and features</strong>, searching for <strong>GTA Vice City cheats</strong> to make your adventure easier, finding essential fixes for common <strong>GTA Vice City errors</strong>, or deciding between <strong>GTA Vice City PC vs mobile</strong> which one is best, this complete guide covers everything you need to know.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                From the legendary story of Tommy Vercetti to the best weapons and vehicles, this article helps both new players and longtime fans enjoy one of the best open-world games ever created.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="relative w-full bg-gray-900/50 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
              The Story: From Criminal to Crime Lord
            </motion.h2>
            <motion.div variants={staggerItem} className="space-y-6 text-lg leading-relaxed">
              <p>
                The story begins when Tommy Vercetti arrives in Vice City in 1986. He just spent 15 years in prison for his old boss. Now he gets a second chance to prove himself. His mission seems simple at first: complete a drug deal. But things go wrong very fast. Enemies ambush the deal, steal the money, and take the drugs. Tommy's boss, Sonny Forelli, demands answers. Now Tommy must find the money, discover who set him up, and build his own criminal empire in Vice City.
              </p>
              <p>
                Throughout the game, Tommy meets many colorful characters. <strong>Lance Vance</strong> becomes his partner and helps him fight rival gangs. Ken Rosenberg, a nervous lawyer, provides missions and connections. Avery Carrington, a real estate mogul, offers property deals. Colonel Juan Cortez introduces Tommy to important contacts. Ricardo Diaz, a short-tempered drug lord, becomes both ally and enemy.
              </p>
              <p>
                As the story unfolds, players watch Tommy transform from an errand boy into the most powerful crime boss in Vice City. The <strong>role of Tommy Vercetti</strong> showcases one of gaming's best character arcs, while <strong>Lance Vance</strong> adds drama and eventual betrayal that keeps players engaged until the final mission.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Vice City Became an Icon */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
              Why GTA Vice City Became an Icon
            </motion.h2>
            <motion.div variants={staggerItem} className="space-y-6 text-lg leading-relaxed">
              <p>
                Grand Theft Auto Vice City changed gaming forever. Before this game, most open world games felt empty or lifeless. Vice City brought a living, breathing city to life. Every street corner had something happening. Radio stations played real 1980s music. People walked around, talked, and reacted to your actions. The game captured the spirit of Miami in the 1980s perfectly.
              </p>
              <p>
                The success came from many factors working together. The story felt like playing through a classic crime movie. The characters had personality and memorable voices. The missions offered variety, from simple deliveries to intense shootouts. Players could buy properties and businesses, making them feel like real crime bosses. The bright colors and neon aesthetic made Vice City stand out from other GTA games that used darker, grittier tones.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="relative w-full bg-gray-900/50 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
              All Main Characters in GTA Vice City
            </motion.h2>

            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl mb-12">
              <Image
                src="/vice city/Charcters Image.webp"
                alt="GTA Vice City Characters"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>

            <motion.div variants={staggerItem} className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#00ff87]/20">
                <h3 className="text-xl font-bold text-[#00ff87] mb-3">Tommy Vercetti</h3>
                <p className="text-white/80">The main character you control. A tough criminal who builds an empire from nothing. Voice acted by Ray Liotta.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#00ff87]/20">
                <h3 className="text-xl font-bold text-[#00ff87] mb-3">Lance Vance</h3>
                <p className="text-white/80">Tommy's partner and friend. He starts loyal but becomes jealous of Tommy's success. His betrayal creates the game's climax.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#00a2ff]/20">
                <h3 className="text-xl font-bold text-[#00a2ff] mb-3">Ken Rosenberg</h3>
                <p className="text-white/80">A cowardly lawyer who helps Tommy navigate Vice City's criminal underworld.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#00a2ff]/20">
                <h3 className="text-xl font-bold text-[#00a2ff] mb-3">Sonny Forelli</h3>
                <p className="text-white/80">Tommy's old boss from Liberty City. He demands his money back and becomes the final enemy.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Ricardo Diaz</h3>
                <p className="text-white/80">A paranoid drug lord who provides missions but treats everyone poorly. Tommy eventually takes over his mansion.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Colonel Juan Cortez</h3>
                <p className="text-white/80">A military officer with valuable connections. He helps Tommy early in the game.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Weapons Section */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
              Weapons: Your Tools of the Trade
            </motion.h2>
            <motion.p variants={staggerItem} className="text-lg text-center mb-12 text-white/80">
              Vice City offers a wide arsenal. Players can carry one weapon from each category.
            </motion.p>

            <motion.div variants={staggerItem} className="overflow-x-auto">
              <table className="w-full bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#00ff87]/20 to-[#00a2ff]/20">
                    <th className="px-6 py-4 text-left">Weapon Name</th>
                    <th className="px-6 py-4 text-left">Category</th>
                    <th className="px-6 py-4 text-left">Price</th>
                    <th className="px-6 py-4 text-left">Best Use</th>
                  </tr>
                </thead>
                <tbody>
                  {weapons.map((weapon, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">{weapon.name}</td>
                      <td className="px-6 py-4">{weapon.category}</td>
                      <td className="px-6 py-4 text-[#00ff87]">{weapon.price}</td>
                      <td className="px-6 py-4 text-white/80">{weapon.bestUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="relative w-full bg-gray-900/50 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
              Cars and Bikes: Ride in Style
            </motion.h2>

            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl mb-12">
              <Image
                src="/vice city/all-cars-image.webp"
                alt="GTA Vice City Vehicles"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>

            <motion.div variants={staggerItem} className="overflow-x-auto mb-12">
              <table className="w-full bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#00ff87]/20 to-[#00a2ff]/20">
                    <th className="px-6 py-4 text-left">Vehicle Name</th>
                    <th className="px-6 py-4 text-left">Type</th>
                    <th className="px-6 py-4 text-left">Top Speed</th>
                    <th className="px-6 py-4 text-left">Special Features</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((vehicle, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-semibold">{vehicle.name}</td>
                      <td className="px-6 py-4">{vehicle.type}</td>
                      <td className="px-6 py-4 text-[#00a2ff]">{vehicle.topSpeed}</td>
                      <td className="px-6 py-4 text-white/80">{vehicle.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Boats Section */}
            <motion.h3 variants={staggerItem} className="text-2xl md:text-3xl font-bold mb-6 text-[#00ff87]">
              Boats and Water Vehicles
            </motion.h3>

            <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/vice city/Boat image.jpg"
                alt="GTA Vice City Boats"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>

            <motion.div variants={staggerItem} className="overflow-x-auto">
              <table className="w-full bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#00ff87]/20 to-[#00a2ff]/20">
                    <th className="px-6 py-4 text-left">Boat Name</th>
                    <th className="px-6 py-4 text-left">Type</th>
                    <th className="px-6 py-4 text-left">Speed</th>
                    <th className="px-6 py-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {boats.map((boat, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-semibold">{boat.name}</td>
                      <td className="px-6 py-4">{boat.type}</td>
                      <td className="px-6 py-4 text-[#00a2ff]">{boat.speed}</td>
                      <td className="px-6 py-4 text-white/80">{boat.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gangs Section */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
              Gangs of Vice City
            </motion.h2>

            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl mb-12">
              <Image
                src="/vice city/gangs of vice city.jpg"
                alt="GTA Vice City Gangs"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>

            <motion.div variants={staggerItem} className="overflow-x-auto mb-8">
              <table className="w-full bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#00ff87]/20 to-[#00a2ff]/20">
                    <th className="px-6 py-4 text-left">Gang Name</th>
                    <th className="px-6 py-4 text-left">Clothing</th>
                    <th className="px-6 py-4 text-left">Territory</th>
                  </tr>
                </thead>
                <tbody>
                  {gangs.map((gang, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#00ff87]">{gang.name}</td>
                      <td className="px-6 py-4">{gang.clothing}</td>
                      <td className="px-6 py-4 text-white/80">{gang.territory}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.p variants={staggerItem} className="text-lg text-white/80">
              Gang wars create dynamic city life. Driving through wrong neighborhoods triggers attacks. Completing missions shifts gang territories in your favor.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Secret Locations Section */}
      <section className="relative w-full bg-gray-900/50 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
              Secret Locations and Hidden Gems
            </motion.h2>

            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl mb-12">
              <Image
                src="/vice city/secret-locations-image 2.webp"
                alt="GTA Vice City Secret Locations"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>

            <motion.div variants={staggerItem} className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#00ff87]/20">
                <h3 className="text-xl font-bold text-[#00ff87] mb-2">Hyman Condo</h3>
                <p className="text-white/80 mb-2">Purchase for $14,000. Largest garage holding four vehicles. Located in Downtown Vice City.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#00ff87]/20">
                <h3 className="text-xl font-bold text-[#00ff87] mb-2">Film Studio</h3>
                <p className="text-white/80 mb-2">Costs $60,000. Unlocks movie-making missions. Generates excellent daily income after completion.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#00a2ff]/20">
                <h3 className="text-xl font-bold text-[#00a2ff] mb-2">Malibu Club</h3>
                <p className="text-white/80 mb-2">Costs $120,000. Complete four missions to run this nightclub successfully.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#00a2ff]/20">
                <h3 className="text-xl font-bold text-[#00a2ff] mb-2">Sunshine Autos</h3>
                <p className="text-white/80 mb-2">Car dealership costing $50,000. Collect specific cars to complete the asset.</p>
              </div>
            </motion.div>

            <motion.p variants={staggerItem} className="mt-8 text-lg text-white/80">
              Hidden packages also reward players. Collecting all 100 packages spawns weapons at your properties. Some packages hide in hard-to-reach spots, requiring helicopters or careful jumping.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cheats Section */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
              GTA Vice City Cheats: Playing Your Way
            </motion.h2>

            <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-2xl mb-12">
              <Image
                src="/vice city/gta-cheat-codes image.jpg"
                alt="GTA Vice City Cheat Codes"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>

            <motion.div variants={staggerItem} className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-[#00ff87]/20">
                <code className="text-[#00ff87] font-bold">PANZER</code>
                <p className="text-white/80 mt-2">Spawns a tank</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-[#00ff87]/20">
                <code className="text-[#00ff87] font-bold">THUGSTOOLS</code>
                <p className="text-white/80 mt-2">Gives basic weapon set</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-[#00a2ff]/20">
                <code className="text-[#00a2ff] font-bold">PROFESSIONALTOOLS</code>
                <p className="text-white/80 mt-2">Gives advanced weapon set</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-[#00a2ff]/20">
                <code className="text-[#00a2ff] font-bold">NUTTERTOOLS</code>
                <p className="text-white/80 mt-2">Gives best weapon set</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                <code className="text-purple-400 font-bold">PRECIOUSPROTECTION</code>
                <p className="text-white/80 mt-2">Full health and armor</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                <code className="text-purple-400 font-bold">LEAVEMEALONE</code>
                <p className="text-white/80 mt-2">Clear wanted level</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
                <code className="text-pink-400 font-bold">BIGBANG</code>
                <p className="text-white/80 mt-2">Blow up nearby vehicles</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
                <code className="text-pink-400 font-bold">COMEFLYWITHME</code>
                <p className="text-white/80 mt-2">Cars fly when hit</p>
              </div>
            </motion.div>

            <motion.p variants={staggerItem} className="text-lg text-white/80">
              Cheats make experimentation fun. Want to see what happens when all cars fly? Use the cheat. Curious about tank damage? Spawn one and find out. Cheats do not hurt anyone, so use them for entertainment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PC vs Mobile Section */}
      <section className="relative w-full bg-gray-900/50 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
              GTA Vice City PC vs Mobile: Which One is Best?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={staggerItem} className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-[#00ff87]/30">
                <h3 className="text-2xl font-bold text-[#00ff87] mb-6">💻 PC Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#00ff87] mr-3">✓</span>
                    <span>Better graphics and performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00ff87] mr-3">✓</span>
                    <span>Mouse and keyboard precision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00ff87] mr-3">✓</span>
                    <span>Mod support adds new content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00ff87] mr-3">✓</span>
                    <span>Larger screen provides better view</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00ff87] mr-3">✓</span>
                    <span>Easy save backup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00ff87] mr-3">✓</span>
                    <span>Controller support available</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={staggerItem} className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-[#00a2ff]/30">
                <h3 className="text-2xl font-bold text-[#00a2ff] mb-6">📱 Mobile Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#00a2ff] mr-3">✓</span>
                    <span>Play anywhere on phone or tablet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a2ff] mr-3">✓</span>
                    <span>Touch controls work surprisingly well</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a2ff] mr-3">✓</span>
                    <span>Updated graphics for mobile devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a2ff] mr-3">✓</span>
                    <span>Costs less than PC version</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a2ff] mr-3">✓</span>
                    <span>Includes console-exclusive content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a2ff] mr-3">✓</span>
                    <span>No installation patches needed</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div variants={staggerItem} className="mt-8 p-6 bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 rounded-lg border border-[#00ff87]/20">
              <h4 className="text-xl font-bold mb-4">🏆 Verdict</h4>
              <p className="text-lg text-white/90">
                For the best experience, <strong>GTA Vice City PC</strong> wins. Better controls, superior graphics, and mod support make it ideal. However, <strong>GTA Vice City mobile</strong> offers convenience. Playing during commutes or travel times is valuable. Many players own both versions for different occasions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Essential Fixes Section */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
              Essential Fixes for Common GTA Vice City Errors
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#00ff87]/20">
                <h3 className="text-xl font-bold text-[#00ff87] mb-3">🔧 Game Won't Start</h3>
                <p className="text-white/80">Run as administrator. Check if DirectX is updated. Verify game files if using Steam.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#00a2ff]/20">
                <h3 className="text-xl font-bold text-[#00a2ff] mb-3">💥 Crashes During Loading</h3>
                <p className="text-white/80">Lower graphics settings. Update graphics card drivers. Disable frame limiter in settings.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-3">🔊 Audio Problems</h3>
                <p className="text-white/80">Install latest audio drivers. Check if Windows audio services are running. Some players fix this by installing codec packs.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-pink-500/20">
                <h3 className="text-xl font-bold text-pink-400 mb-3">📉 Frame Rate Issues</h3>
                <p className="text-white/80">Turn on frame limiter. Modern PCs run the game too fast without limits. Cap frame rate at 30 or 60 FPS.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">🎮 Controller Not Working</h3>
                <p className="text-white/80">Use third-party tools like Joy2Key. The original game has limited controller support. Modern patches improve this.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-3">🖼️ Missing Textures</h3>
                <p className="text-white/80">Reinstall the game. Sometimes files corrupt during installation. Verify all files are present.</p>
              </div>
            </motion.div>

            <motion.p variants={staggerItem} className="mt-8 text-lg text-white/80 text-center">
              These fixes solve most problems. If issues persist, check community forums. The GTA Vice City community remains active and helpful.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full bg-gray-900/50 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <FAQSection title="Frequently Asked Questions: GTA Vice City 2025" faqs={viceCityFAQs} />
        </div>
      </section>

      {/* Final Thoughts Section */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
              Final Thoughts
            </motion.h2>
            <motion.div variants={staggerItem} className="space-y-6 text-lg leading-relaxed">
              <p>
                Grand Theft Auto Vice City deserves its legendary status. From the moment Tommy Vercetti arrives in Vice City to his final confrontation with Sonny Forelli, the game delivers memorable moments. The <strong>role of Tommy Vercetti</strong> shows character development rarely seen in games. <strong>Lance Vance</strong> provides drama and betrayal. Every character contributes to an unforgettable story.
              </p>
              <p>
                This <strong>iconic open world game</strong> set standards that influenced hundreds of open world games on Android, console, and PC platforms. Whether you choose <strong>GTA Vice City PC</strong> for the ultimate experience or <strong>GTA Vice City mobile</strong> for convenience, you are playing gaming history.
              </p>
              <p className="text-xl font-bold text-center mt-8 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
                Welcome to the 1980s. Welcome to Vice City. Welcome to one of the greatest games ever created.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="relative w-full bg-gray-900/50 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <RelatedPages pages={relatedPages} />
        </div>
      </section>
    </main>
  );
}
