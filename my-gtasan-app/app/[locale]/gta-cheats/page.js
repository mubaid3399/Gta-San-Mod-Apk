'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import heroCheats from '../../Assets/gta-cheats-hero.png';
import Footer from '../../components/Footer';
import FAQSection from '../../components/FAQSection';
import ContentSection from '../../components/sections/ContentSection';

// Action Cheats
const actionCheats = [
  { action: 'Infinite Health', pc: 'BAGUVIX', effect: 'Makes CJ almost invincible' },
  { action: 'Full Armor', pc: 'HESOYAM', effect: 'Gives full armor and health' },
  { action: 'Weapons Set 1', pc: 'LXGIWYL', effect: 'Basic guns and melee weapons' },
  { action: 'Jetpack', pc: 'ROCKETMAN', effect: 'Spawns a jetpack' },
  { action: 'Tank (Rhino)', pc: 'AIWPRTON', effect: 'Spawns a military tank' },
  { action: 'Wanted Level Down', pc: 'AEZAKMI', effect: 'Police ignore you' },
  { action: 'Cars Fly', pc: 'CHITTYCHITTYBANGBANG', effect: 'Cars can fly' },
  { action: 'Never Hungry', pc: 'AEDUWNV', effect: 'Hunger bar stays full' },
  { action: 'Mega Jump', pc: 'KANGAROO', effect: 'CJ jumps super high' },
];

// Player Cheats
const playerCheats = [
  {
    effect: 'Infinite Health',
    pc: 'BAGUVIX',
    ps: 'DOWN, X, RIGHT, LEFT, RIGHT, R1, RIGHT, DOWN, UP, TRIANGLE',
    xbox: 'DOWN, A, RIGHT, LEFT, RIGHT, RB, RIGHT, DOWN, UP, Y',
  },
  {
    effect: 'Infinite Ammo',
    pc: 'FULLCLIP',
    ps: 'L1, R1, SQUARE, R1, LEFT, R2, R1, LEFT, SQUARE, DOWN, L1, L1',
    xbox: 'LB, RB, X, RB, LEFT, RT, RB, LEFT, X, DOWN, LB, LB',
  },
  {
    effect: 'Infinite Oxygen',
    pc: 'CVWKXAM',
    ps: 'DOWN, LEFT, L1, DOWN, DOWN, R2, DOWN, L2, DOWN',
    xbox: 'DOWN, LEFT, LB, DOWN, DOWN, RT, DOWN, LT, DOWN',
  },
  {
    effect: 'Muscle Maxed',
    pc: 'JYSDSOD',
    ps: 'TRIANGLE, UP, UP, LEFT, RIGHT, SQUARE, CIRCLE, LEFT',
    xbox: 'Y, UP, UP, LEFT, RIGHT, X, B, LEFT',
  },
  {
    effect: 'Fat Maxed',
    pc: 'BTCDBCB',
    ps: 'TRIANGLE, UP, UP, LEFT, RIGHT, SQUARE, CIRCLE, RIGHT',
    xbox: 'Y, UP, UP, LEFT, RIGHT, X, B, RIGHT',
  },
  {
    effect: 'Skinny',
    pc: 'KVGYZQK',
    ps: 'TRIANGLE, UP, UP, LEFT, RIGHT, SQUARE, CIRCLE, UP',
    xbox: 'Y, UP, UP, LEFT, RIGHT, X, B, UP',
  },
  {
    effect: 'Six Star Wanted Level',
    pc: 'LJSPQK',
    ps: 'CIRCLE, RIGHT, CIRCLE, RIGHT, LEFT, SQUARE, X, DOWN',
    xbox: 'B, RIGHT, B, RIGHT, LEFT, X, Y, DOWN',
  },
  {
    effect: 'Lower Wanted Level',
    pc: 'ASNAEB',
    ps: 'R1, R1, CIRCLE, R2, UP, DOWN, UP, DOWN, UP, DOWN',
    xbox: 'RB, RB, B, RT, UP, DOWN, UP, DOWN, UP, DOWN',
  },
  {
    effect: 'Never Wanted',
    pc: 'AEZAKMI',
    ps: 'DOWN, RIGHT, RIGHT, L1, RIGHT, DOWN, LEFT, LEFT',
    xbox: 'DOWN, RIGHT, RIGHT, LB, RIGHT, DOWN, LEFT, LEFT',
  },
  {
    effect: 'Mega Jump',
    pc: 'KANGAROO',
    ps: 'UP, UP, TRIANGLE, TRIANGLE, UP, UP, LEFT, RIGHT, SQUARE, R2, R2',
    xbox: 'UP, UP, Y, Y, UP, UP, LEFT, RIGHT, X, RT, RT',
  },
];

// Vehicle Cheats
const vehicleCheats = [
  {
    effect: 'Spawn Tanker Truck',
    pc: 'AMOMHRER',
    ps: 'R1, UP, LEFT, RIGHT, R2, UP, RIGHT, SQUARE, RIGHT, L2, L1, L1',
    xbox: 'RB, UP, LEFT, RIGHT, RT, UP, RIGHT, X, RIGHT, LT, LB, LB',
  },
  {
    effect: 'Spawn Jetpack',
    pc: 'ROCKETMAN',
    ps: 'LEFT, RIGHT, L1, L2, R1, R2, UP, DOWN, LEFT, RIGHT',
    xbox: 'LEFT, RIGHT, LB, LT, RB, RT, UP, DOWN, LEFT, RIGHT',
  },
  {
    effect: 'Spawn Hydra Jet',
    pc: 'JUMPJET',
    ps: 'TRIANGLE, TRIANGLE, SQUARE, CIRCLE, X, L1, L1, DOWN, UP',
    xbox: 'Y, Y, X, B, A, LB, LB, DOWN, UP',
  },
  {
    effect: 'Spawn Monster Truck',
    pc: 'MONSTERMASH',
    ps: 'RIGHT, UP, R1, R1, R1, DOWN, TRIANGLE, TRIANGLE, X, CIRCLE, L1, L1',
    xbox: 'RIGHT, UP, RB, RB, RB, DOWN, Y, Y, A, B, LB, LB',
  },
  {
    effect: 'Cars Fly',
    pc: 'RIPAZHA',
    ps: 'SQUARE, DOWN, L2, UP, L1, CIRCLE, UP, X, LEFT',
    xbox: 'X, DOWN, LT, UP, LB, B, UP, A, LEFT',
  },
  {
    effect: 'Cars Float on Water',
    pc: 'BGKGTJH',
    ps: 'RIGHT, R2, CIRCLE, R2, UP, DOWN, RIGHT, R2, UP, RIGHT',
    xbox: 'RIGHT, RT, B, RT, UP, DOWN, RIGHT, RT, UP, RIGHT',
  },
  {
    effect: 'All Cars Have Nitrous',
    pc: 'SPEEDFREAK',
    ps: 'RIGHT, L1, UP, TRIANGLE, R2, TRIANGLE, UP, RIGHT, SQUARE, L1',
    xbox: 'RIGHT, LB, UP, Y, RT, Y, UP, RIGHT, X, LB',
  },
  {
    effect: 'Blow Up All Cars',
    pc: 'CPKTNWT',
    ps: 'R2, L2, L1, R1, L2, R2, SQUARE, TRIANGLE, CIRCLE, TRIANGLE, L2, L1',
    xbox: 'RT, LT, LB, RB, LT, RT, X, Y, B, Y, LT, LB',
  },
];

// World & Weather Cheats
const weatherCheats = [
  {
    effect: 'Sunny Weather',
    pc: 'PLEASANTLYWARM',
    ps: 'TRIANGLE, UP, RIGHT, DOWN, L2, L1, SQUARE',
    xbox: 'Y, UP, RIGHT, DOWN, LT, LB, X',
  },
  {
    effect: 'Rainy Weather',
    pc: 'AUIFRVQS',
    ps: 'DOWN, RIGHT, RIGHT, L1, RIGHT, UP, SQUARE',
    xbox: 'DOWN, RIGHT, RIGHT, LB, RIGHT, UP, X',
  },
  {
    effect: 'Foggy Weather',
    pc: 'CFVFGMJ',
    ps: 'RIGHT, RIGHT, L2, LEFT, LEFT, R2, SQUARE',
    xbox: 'RIGHT, RIGHT, LT, LEFT, LEFT, RT, X',
  },
  {
    effect: 'Fast Time',
    pc: 'YSOHNUL',
    ps: 'CIRCLE, CIRCLE, SQUARE, L1, L2, X, TRIANGLE, UP',
    xbox: 'B, B, X, LB, LT, A, Y, UP',
  },
  {
    effect: 'Slow Time',
    pc: 'LIYOAAY',
    ps: 'TRIANGLE, UP, RIGHT, DOWN, SQUARE, R2, R1',
    xbox: 'Y, UP, RIGHT, DOWN, X, RT, RB',
  },
];

// Gang & Pedestrian Cheats
const gangCheats = [
  {
    effect: 'Recruit Anyone (Pistol)',
    pc: 'SJMAHPE',
    ps: 'DOWN, SQUARE, UP, R2, R2, UP, RIGHT, UP, RIGHT',
    xbox: 'DOWN, X, UP, RT, RT, UP, RIGHT, UP, RIGHT',
  },
  {
    effect: 'Recruit Anyone (Rockets)',
    pc: 'ZSOXFSQ',
    ps: 'DOWN, SQUARE, UP, R2, LEFT, RIGHT, LEFT, RIGHT, LEFT',
    xbox: 'DOWN, X, UP, RT, LEFT, RIGHT, LEFT, RIGHT, LEFT',
  },
  {
    effect: 'Gangs Control the Streets',
    pc: 'BIFBUZZ',
    ps: 'UP, X, UP, X, DOWN, LEFT, X, RIGHT',
    xbox: 'UP, A, UP, A, DOWN, LEFT, A, RIGHT',
  },
  {
    effect: 'Riots in the City',
    pc: 'IOJUFZN',
    ps: 'DOWN, LEFT, UP, LEFT, X, R2, R1, L2, L1',
    xbox: 'DOWN, LEFT, UP, LEFT, A, RT, RB, LT, LB',
  },
];

// Money, Weapons & Skills
const moneyWeaponsCheats = [
  {
    effect: 'Full Health, Armor & $250k',
    pc: 'HESOYAM',
    ps: 'R1, R2, L1, X, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
    xbox: 'RB, RT, LB, A, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
  },
  {
    effect: 'Weapon Set 1',
    pc: 'LXGIWYL',
    ps: 'R1, R2, L1, R2, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
    xbox: 'RB, RT, LB, RT, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
  },
  {
    effect: 'Weapon Set 2',
    pc: 'PROFESSIONALSKIT',
    ps: 'R1, R2, L1, R2, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, LEFT',
    xbox: 'RB, RT, LB, RT, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, LEFT',
  },
  {
    effect: 'Weapon Set 3',
    pc: 'UZUMYMW',
    ps: 'R1, R2, L1, R2, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, DOWN',
    xbox: 'RB, RT, LB, RT, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, DOWN',
  },
];

// Weapons List
const weaponsList = [
  { name: '9mm Pistol', type: 'Handgun', price: 250, details: 'Basic weapon, good for close fights' },
  { name: 'Desert Eagle', type: 'Handgun', price: 1200, details: 'Strong damage, one-shot power' },
  { name: 'AK-47', type: 'Rifle', price: 3500, details: 'Popular assault rifle' },
  { name: 'M4', type: 'Rifle', price: 5000, details: 'Powerful and accurate' },
  { name: 'Shotgun', type: 'Pump', price: 1000, details: 'Good for close range' },
  { name: 'Combat Shotgun', type: 'Auto', price: 2500, details: 'Rapid-fire shotgun' },
  { name: 'Micro SMG', type: 'SMG', price: 1500, details: 'Light and fast' },
  { name: 'MP5', type: 'SMG', price: 3000, details: 'Strong SMG for missions' },
  { name: 'Sniper Rifle', type: 'Long Range', price: 6000, details: 'Long-range precision' },
  { name: 'RPG', type: 'Heavy', price: 8000, details: 'Rocket launcher for vehicles' },
  { name: 'Minigun', type: 'Heavy', price: 15000, details: 'Extreme firepower' },
];

// Vehicles List
const vehiclesList = [
  { name: 'Infernus', type: 'Super Car', speed: 240, price: 90000 },
  { name: 'Cheetah', type: 'Sports', speed: 230, price: 80000 },
  { name: 'Turismo', type: 'Sports', speed: 220, price: 85000 },
  { name: 'Bullet', type: 'Sports', speed: 210, price: 75000 },
  { name: 'Banshee', type: 'Sports', speed: 200, price: 65000 },
  { name: 'Phoenix', type: 'Classic', speed: 180, price: 55000 },
  { name: 'NRG-500', type: 'Bike', speed: 250, price: 60000 },
  { name: 'PCJ-600', type: 'Bike', speed: 200, price: 30000 },
  { name: 'Sanchez', type: 'Dirt Bike', speed: 160, price: 20000 },
  { name: 'Quad', type: 'Off-road', speed: 140, price: 15000 },
];

// Characters
const characters = [
  { name: 'Carl Johnson (CJ)', role: 'Main hero, player character' },
  { name: 'Sweet Johnson', role: 'CJ\'s brother, the Grove Street leader' },
  { name: 'Big Smoke', role: 'CJ\'s old friend later betrays him' },
  { name: 'Ryder', role: 'Another Grove Street member also betrays CJ' },
  { name: 'Cesar Vialpando', role: 'Kendl\'s boyfriend and CJ\'s close ally' },
  { name: 'Kendl Johnson', role: 'CJ\'s sister, strong and smart' },
  { name: 'Officer Tenpenny', role: 'Corrupt cop, main villain' },
  { name: 'Woozie', role: 'Blind Triad leader, CJ\'s friend' },
  { name: 'Catalina', role: 'CJ\'s crazy girlfriend for a time' },
  { name: 'The Truth', role: 'A funny hippie who helps CJ' },
];

// Gangs
const gangs = [
  { name: 'Grove Street Families', area: 'Los Santos', color: 'Green', enemy: 'Ballas, Vagos' },
  { name: 'Ballas', area: 'Los Santos', color: 'Purple', enemy: 'Grove Street' },
  { name: 'Los Santos Vagos', area: 'Los Santos', color: 'Yellow', enemy: 'Grove Street' },
  { name: 'San Fierro Rifa', area: 'San Fierro', color: 'Blue', enemy: 'Triads' },
  { name: 'Triads', area: 'San Fierro', color: 'Red', enemy: 'Rifa, Da Nang Boys' },
  { name: 'Da Nang Boys', area: 'San Fierro', color: 'Gray', enemy: 'Triads' },
  { name: 'Varrio Los Aztecas', area: 'Los Santos', color: 'Light Blue', enemy: 'Ballas, Vagos' },
  { name: 'Russian Mafia', area: 'Las Venturas', color: 'Black', enemy: 'Grove Street (later missions)' },
];

// Secret Locations
const secretLocations = [
  { location: 'Area 69', place: 'Desert', find: 'Hidden jet (Hydra) and military base' },
  { location: 'Mount Chiliad', place: 'Countryside', find: 'Parachute jump spot and bike races' },
  { location: 'Ghost Town', place: 'North of San Fierro', find: 'Abandoned area with strange details' },
  { location: 'Underwater Ruins', place: 'Near Bayside', find: 'Hidden objects under the sea' },
  { location: 'The Big Ear', place: 'Desert', find: 'Giant radio telescope' },
  { location: 'Grove Street House', place: 'Los Santos', find: 'CJ\'s home, full of memories' },
  { location: 'Easter Basin Dock', place: 'San Fierro', find: 'Big ships and cranes' },
  { location: 'Verdant Meadows', place: 'Desert', find: 'Airport where you start flight school' },
];

// FAQ Data
const faqData = [
  {
    id: '1',
    question: 'Do GTA San Andreas cheats disable achievements?',
    answer: 'Yes, most cheats will disable achievements and trophies on certain platforms. Check your game version before using cheats if you care about achievements.',
  },
  {
    id: '2',
    question: 'Can I use cheats in multiplayer mode?',
    answer: 'No, cheats are generally only available in single-player mode. Using cheats in multiplayer may get you banned from online play.',
  },
  {
    id: '3',
    question: 'Will cheats affect my save file?',
    answer: 'Cheats won\'t corrupt your save, but some versions may flag your save as modified. It\'s best to use cheats on separate saves.',
  },
  {
    id: '4',
    question: 'How do I enter cheats on PC?',
    answer: 'On PC, simply type the cheat code while playing. On console versions, use your controller to input the button combinations.',
  },
  {
    id: '5',
    question: 'Are there any cheat codes for unlimited ammo?',
    answer: 'Yes, there are specific cheats for unlimited ammunition. Enter the appropriate code for your platform and enjoy endless firepower.',
  },
  {
    id: '6',
    question: 'Can I turn off cheats once activated?',
    answer: 'Some cheats can be toggled off by entering the code again, while others are permanent until you load a previous save.',
  },
];

// Reusable Table Component
const TableComponent = ({ headers, rows, variant = 'default' }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
    <table className="w-full text-sm sm:text-base">
      <thead>
        <tr className={variant === 'dark' ? 'bg-gray-900 dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-800'}>
          {headers.map((header) => (
            <th key={header} className="px-4 py-3 sm:px-6 sm:py-4 text-left font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-900/50' : 'bg-gray-50 dark:bg-gray-800/30'}>
            {Object.values(row).map((cell, cellIdx) => (
              <td key={cellIdx} className="px-4 py-3 sm:px-6 sm:py-4 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 break-words">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function GtaCheatsPage() {
  // Transform data for tables
  const actionCheatsRows = actionCheats.map((cheat) => ({
    action: cheat.action,
    code: cheat.pc,
    effect: cheat.effect,
  }));

  const playerCheatsRows = playerCheats.map((cheat) => ({
    effect: cheat.effect,
    pc: cheat.pc,
    ps: cheat.ps,
    xbox: cheat.xbox,
  }));

  const vehiclesCheatsRows = vehicleCheats.map((cheat) => ({
    effect: cheat.effect,
    pc: cheat.pc,
    ps: cheat.ps,
    xbox: cheat.xbox,
  }));

  const weatherCheatsRows = weatherCheats.map((cheat) => ({
    effect: cheat.effect,
    pc: cheat.pc,
    ps: cheat.ps,
    xbox: cheat.xbox,
  }));

  const gangCheatsRows = gangCheats.map((cheat) => ({
    effect: cheat.effect,
    pc: cheat.pc,
    ps: cheat.ps,
    xbox: cheat.xbox,
  }));

  const moneyWeaponsRows = moneyWeaponsCheats.map((cheat) => ({
    effect: cheat.effect,
    pc: cheat.pc,
    ps: cheat.ps,
    xbox: cheat.xbox,
  }));

  const weaponsRows = weaponsList.map((weapon) => ({
    gun: weapon.name,
    type: weapon.type,
    price: `$${weapon.price.toLocaleString()}`,
    details: weapon.details,
  }));

  const vehiclesRows = vehiclesList.map((vehicle) => ({
    vehicle: vehicle.name,
    type: vehicle.type,
    speed: `${vehicle.speed} km/h`,
    price: `$${vehicle.price.toLocaleString()}`,
  }));

  const charactersRows = characters.map((char) => ({
    character: char.name,
    role: char.role,
  }));

  const gangsRows = gangs.map((gang) => ({
    gang: gang.name,
    area: gang.area,
    color: gang.color,
    enemy: gang.enemy,
  }));

  const secretLocationsRows = secretLocations.map((loc) => ({
    location: loc.location,
    place: loc.place,
    find: loc.find,
  }));

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
                GTA San Andreas Cheats
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl drop-shadow-lg">
                Master every corner of San Andreas with unlimited cheats and commands. Your complete guide to bending the rules.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="bg-white/15 text-white text-sm sm:text-base px-4 py-2 rounded-full border border-white/20 backdrop-blur">
                  All Platforms
                </span>
                <span className="bg-white/15 text-white text-sm sm:text-base px-4 py-2 rounded-full border border-white/20 backdrop-blur">
                  Updated Codes
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <ContentSection
        title="GTA San Andreas Cheats"
        subtitle="Complete Guide & Reference"
        description="Cheats make GTA San Andreas even more fun. You can use them on PC and Mobile to add cars, money, weapons, or special powers."
        bgColor="white"
      >
        <div className="space-y-6">
          <p className="text-base sm:text-lg leading-8 text-gray-700 dark:text-gray-300">
            Cheats make GTA San Andreas even more fun. You can use them on PC and Mobile to add cars, money, weapons, or special powers. Here are some popular cheats for fun gameplay:
          </p>
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              💡 <strong>Tip:</strong> Use cheats after saving your game. Too many cheats can cause the game to crash or make later missions harder.
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
      <ContentSection title="Quick Action Cheats" bgColor="light">
        <TableComponent
          headers={['Action', 'Cheat Code (PC)', 'Effect']}
          rows={actionCheatsRows}
        />
      </ContentSection>

      {/* Player Cheats Table */}
      <ContentSection title="Player Cheats" subtitle="For PC, PlayStation & Xbox" bgColor="white">
        <TableComponent
          headers={['Effect', 'PC', 'PlayStation', 'Xbox']}
          rows={playerCheatsRows}
        />
      </ContentSection>

      {/* Vehicle Cheats Table */}
      <ContentSection title="Vehicle & Transportation Cheats" bgColor="light">
        <TableComponent
          headers={['Effect', 'PC', 'PlayStation', 'Xbox']}
          rows={vehiclesCheatsRows}
        />
      </ContentSection>

      {/* Weather Cheats Table */}
      <ContentSection title="World & Weather Cheats" bgColor="white">
        <TableComponent
          headers={['Effect', 'PC', 'PlayStation', 'Xbox']}
          rows={weatherCheatsRows}
        />
      </ContentSection>

      {/* Gang Cheats Table */}
      <ContentSection title="Gang & Pedestrian Cheats" bgColor="light">
        <TableComponent
          headers={['Effect', 'PC', 'PlayStation', 'Xbox']}
          rows={gangCheatsRows}
        />
      </ContentSection>

      {/* Money, Weapons & Skills Table */}
      <ContentSection title="Money, Weapons & Skills Cheats" bgColor="white">
        <TableComponent
          headers={['Effect', 'PC', 'PlayStation', 'Xbox']}
          rows={moneyWeaponsRows}
        />
      </ContentSection>

      {/* Weapons List */}
      <ContentSection
        title="Weapons and Guns"
        subtitle="With Prices"
        description="Weapons are a big part of GTA San Andreas gameplay. You can buy them from Ammu-Nation stores or find them across the map."
        bgColor="light"
      >
        <TableComponent
          headers={['Gun Name', 'Type', 'Price ($)', 'Details']}
          rows={weaponsRows}
        />
        <div className="mt-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 sm:p-6">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            💡 <strong>Tip:</strong> Use different weapons for different missions. For gang wars, rifles and SMGs work best.
          </p>
        </div>
      </ContentSection>

      {/* Vehicles List */}
      <ContentSection
        title="Cars and Bikes"
        subtitle="With Speed and Price"
        description="Cars and bikes are the heart of the GTA San Andreas experience. Here are some popular ones:"
        bgColor="white"
      >
        <TableComponent
          headers={['Vehicle Name', 'Type', 'Speed (km/h)', 'Approx Price ($)']}
          rows={vehiclesRows}
        />
        <div className="mt-6 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 sm:p-6">
          <p className="text-sm text-purple-900 dark:text-purple-200">
            🏆 <strong>Fun Fact:</strong> The Infernus is the fastest car in the game and a favorite of many players.
          </p>
        </div>
      </ContentSection>

      {/* Main Characters */}
      <ContentSection
        title="All Main Characters"
        subtitle="The Story of San Andreas"
        description="The story of San Andreas is filled with unforgettable characters. Here are the key ones:"
        bgColor="light"
      >
        <TableComponent
          headers={['Character', 'Role in Story']}
          rows={charactersRows}
        />
        <div className="mt-6 text-center">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            Each character adds depth to the game, making every mission exciting.
          </p>
        </div>
      </ContentSection>

      {/* Gangs */}
      <ContentSection
        title="Gangs in GTA San Andreas"
        description="The world of San Andreas is filled with gangs that control different areas. Knowing them helps you understand the city map and survive gang wars."
        bgColor="white"
      >
        <TableComponent
          headers={['Gang Name', 'Main Area', 'Color', 'Enemy']}
          rows={gangsRows}
        />
        <div className="mt-6">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            Each gang has its own cars, tattoos, and music. Grove Street Families, CJ's gang, fight for respect and control of their neighborhood.
          </p>
        </div>
      </ContentSection>

      {/* Secret Locations */}
      <ContentSection
        title="Secret Locations in GTA San Andreas"
        description="San Andreas has many secret places that most players miss. Visiting them gives rewards or fun experiences."
        bgColor="light"
      >
        <TableComponent
          headers={['Secret Location', 'Place', 'What You Find There']}
          rows={secretLocationsRows}
        />
        <div className="mt-6 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 sm:p-6">
          <p className="text-sm text-indigo-900 dark:text-indigo-200">
            👽 <strong>Fun Note:</strong> Some players believe UFOs appear near Area 69 at night, but it is just a myth — or is it?
          </p>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection
        title="Frequently Asked Questions"
        bgColor="white"
      >
        <FAQSection faqs={faqData} />
      </ContentSection>

      {/* Footer */}
      <Footer />
    </main>
  );
}
