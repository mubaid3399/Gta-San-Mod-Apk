import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTranslations } from 'next-intl/server';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locale = params?.locale || 'en';
  const path = locale === 'en' ? '/community' : `/${locale}/community`;

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/community' : `/${lang}/community`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const titles = {
    en: 'GTA San Andreas Gaming Community - Connect With Players',
    de: 'GTA San Andreas Gaming-Gemeinschaft - Verbinden Sie sich mit Spielern',
    fr: 'Communauté de Jeu GTA San Andreas - Connectez-vous avec d\'autres Joueurs',
    it: 'Comunità di Gioco GTA San Andreas - Connettiti con i Giocatori',
    es: 'Comunidad de Juegos GTA San Andreas - Conecta con Jugadores',
    pt: 'Comunidade de Jogos GTA San Andreas - Conecte-se com Jogadores',
    ru: 'Игровое сообщество GTA San Andreas - Подключитесь к игрокам',
    ja: 'GTA San Andreas ゲーミング コミュニティ - プレイヤーと繋がる'
  };

  const descriptions = {
    en: 'Join the GTA San Andreas community. Connect with players, share tips, discuss mods, and participate in gaming discussions.',
    de: 'Treten Sie der GTA San Andreas-Gemeinschaft bei. Verbinden Sie sich mit Spielern, teilen Sie Tipps und diskutieren Sie Mods.',
    fr: 'Rejoignez la communauté GTA San Andreas. Connectez-vous avec d\'autres joueurs, partagez des conseils et discutez des mods.',
    it: 'Unisciti alla comunità GTA San Andreas. Connettiti con i giocatori, condividi suggerimenti e discuti di mod.',
    es: 'Únete a la comunidad GTA San Andreas. Conecta con jugadores, comparte consejos y discute sobre mods.',
    pt: 'Junte-se à comunidade GTA San Andreas. Conecte-se com jogadores, compartilhe dicas e discuta mods.',
    ru: 'Присоединитесь к сообществу GTA San Andreas. Подключитесь к игрокам, делитесь советами и обсуждайте моды.',
    ja: 'GTA San Andreas コミュニティに参加してください。プレイヤーと繋がり、ヒントを共有し、モッドについて議論してください。'
  };

  const title = titles[locale] || titles['en'];
  const description = descriptions[locale] || descriptions['en'];

  return {
    title,
    description,
    alternates: {
      canonical: `${base}${path}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${base}${path}`,
      images: [
        {
          url: `${base}/heroimage2.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images: [`${base}/heroimage2.png`],
    },
  };
}

import {
  faUsers,
  faHeart,
  faPalette,
  faGamepad,
  faComments,
  faFire,
  faStar,
  faCrown,
} from '@fortawesome/free-solid-svg-icons';

export default function Community() {
  
  const communitySpots = [
    {
      icon: faComments,
      title: 'Online Forums',
      description: 'Discussion websites where fans write messages and answer questions. Great for long posts, guides, and bug fixes.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: faUsers,
      title: 'Social Media',
      description: 'Platforms like Facebook, YouTube, Reddit with many San Andreas groups. Players share screenshots, gameplay clips, and new mods.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: faPalette,
      title: 'Mod Websites',
      description: 'Places where fans upload mods. Download cars, skins, maps, tools, and content. Essential for players wanting new content.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: faGamepad,
      title: 'Streaming Platforms',
      description: 'Many players stream their San Andreas playthroughs. Learn missions from streamers and relive memories with the community.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const creativeContent = [
    {
      icon: faPalette,
      title: 'Mods',
      description: 'A mod is a file that changes something in the game. Some mods change single cars, while others change the whole map. Popular types include car mods, graphics mods, map expansions, sound mods, character skins, missions, lighting effects, weather systems, and multiplayer mods.',
    },
    {
      icon: faStar,
      title: 'Fan Art',
      description: 'Some people draw CJ and other characters. Others draw the cities or scenes from the game. Fan art keeps the characters alive in fans\' hearts.',
    },
    {
      icon: faFire,
      title: 'Videos',
      description: 'Many fans make videos with jokes, stories, or gameplay tips. Videos are popular on YouTube, TikTok, and streaming platforms.',
    },
    {
      icon: faComments,
      title: 'Guides and Tutorials',
      description: 'These help players finish hard missions or install mods in simple ways. Step-by-step guides help beginners learn.',
    },
    {
      icon: faGamepad,
      title: 'Tools',
      description: 'Some fans create tools that help others build mods. These tools make modding easier for beginners and reduce technical barriers.',
    },
  ];

  const communityHelps = [
    {
      title: 'Fixing Bugs',
      description: 'Fans fix old problems that came with early versions. They repair textures, crashes, and broken missions to make the game better.',
    },
    {
      title: 'Updating Graphics',
      description: 'Modern players want better graphics. Fans make high resolution textures, smooth shadows, and clean lighting for new systems.',
    },
    {
      title: 'Adding More Fun',
      description: 'New missions, cars, and skins keep players active. This makes the game feel alive and fresh even in 2025.',
    },
    {
      title: 'Teaching Beginners',
      description: 'New players can join any time. Community guides explain how to play and mod in very simple steps.',
    },
    {
      title: 'Saving Memories',
      description: 'Players share stories from their childhood. These stories remind everyone why the game is special.',
    },
  ];

  const faqItems = [
    {
      q: 'Are there new mods in 2025?',
      a: 'Yes. There are many large graphics packs and map updates in 2025. Several teams are working on improved textures and new missions.',
    },
    {
      q: 'Are there new multiplayer features?',
      a: 'Many new servers are active. Some servers focus on racing, others on roleplay. These servers run smoother in 2025 due to better hardware.',
    },
    {
      q: 'What about mobile players?',
      a: 'Mobile modding is easier now. More tools support Android devices. Many players enjoy simple mods for mobile versions.',
    },
    {
      q: 'Are there bug fixes in 2025?',
      a: 'Yes. Several fan projects continue to fix old bugs. The community tests and shares safe fixes.',
    },
    {
      q: 'Is GTA San Andreas still popular?',
      a: 'Yes. Many young fans join every year. The game stays active because of mods, videos, and community events.',
    },
  ];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'GTA San Andreas Community - Mods, Guides & Fan Content',
    description: 'Join the active GTA San Andreas community. Discover mods, fan art, guides, and connect with millions of players worldwide.',
    url: 'https://gtasanandreas.info/community',
    image: 'https://gtasanandreas.info/logo.png',
    potentialAction: {
      '@type': 'JoinAction',
      name: 'Join the GTA San Andreas Community',
      target: 'https://gtasanandreas.info/community',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <div className="min-h-screen bg-gradient-to-b from-[#030712] via-black to-[#030712]">
        {/* Hero Section */}
        <div className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent mb-4">
                GTA San Andreas Community
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Join millions of fans worldwide. Discover mods, share content, learn tips, and be part of the strongest gaming community that keeps GTA San Andreas alive.
              </p>
            </div>

            {/* Intro Section */}
            <div className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-white mb-4">Why the Community Matters</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The GTA San Andreas community is a group of fans who love the game. These people talk about the story, characters, missions, and secrets. They create new content and keep the game alive even after 20+ years. The game feels large and full of life because fans work together to improve and celebrate it.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Players love the world of Los Santos, San Fierro, and Las Venturas. They enjoy meeting characters like CJ, Sweet, Big Smoke, and Ryder. These characters still live in the minds of fans. The community adds new textures, maps, missions, and cars. It helps players with bugs. It teaches beginners. It gives people a safe place to talk about the game.
              </p>
            </div>

            {/* Why Still Growing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Why GTA San Andreas Stays Strong</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#00ff87] mb-3">The Game is Simple but Deep</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The controls are easy to learn. The missions are fun. The world is large. The story is strong. Players feel like they belong in the game.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#00ff87] mb-3">The World Feels Real</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The streets, cars, and sounds make the game feel alive. Players enjoy walking, driving, and exploring. Many fans say the game reminds them of real life.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#00ff87] mb-3">Fans Keep Adding Content</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Mods give the game new life every year. They change graphics, add new cars, create new cities. Some mods add whole story missions. This makes the game feel new.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#00ff87] mb-3">Old Players Help New Players</h3>
                  <p className="text-gray-300 leading-relaxed">
                    New players join every day. Old players share tips and explain missions. They teach how to install mods. This teamwork makes community feel warm.
                  </p>
                </div>
              </div>
            </div>

            {/* Where to Find Community */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Where to Find the Community</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Fans gather in many places online. Pick your favorite spot and start connecting with other players.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {communitySpots.map((spot, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6 hover:border-[#00ff87]/50 transition-all">
                    <div className="flex gap-4 mb-4">
                      <div className={`flex-shrink-0 text-[#00ff87]`}>
                        <FontAwesomeIcon icon={spot.icon} className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{spot.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{spot.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What Fans Create */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">What the Community Creates</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                The GTA San Andreas community is full of talent. Fans create amazing things that improve the game for everyone.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {creativeContent.map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                    <div className="flex gap-4 mb-4">
                      <div className={`flex-shrink-0 text-[#00ff87]`}>
                        <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How Community Helps */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">How the Community Helps the Game Stay Strong</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                The community does more than talk. It protects the game. It keeps the game healthy and fresh for new players.
              </p>
              <div className="space-y-6">
                {communityHelps.map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#00ff87] mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* New Members Guide */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">How to Join the Community</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                If someone is new to the GTA San Andreas community, they may feel a little shy. But joining is very easy. Here is a simple guide.
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[#00ff87]">Step 1: Join a Group</strong> - Choose a forum or social media group. Read the posts. Learn how people talk. Then join the conversation.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[#00ff87]">Step 2: Start Small</strong> - Ask simple questions. Share a screenshot. Say what you like about the game. Small steps help you learn the community rules.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[#00ff87]">Step 3: Try Simple Mods</strong> - Start with small mods like cars or textures. Learn how to place files in the right folders.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[#00ff87]">Step 4: Ask for Help</strong> - Most members enjoy helping new players. They will explain how to handle errors or missing files.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[#00ff87]">Step 5: Share Your Progress</strong> - If you learn to mod, share your work. Even simple mods can make others smile.
                  </p>
                </div>
              </div>
            </div>

            {/* 2025 Updates */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">GTA San Andreas in 2025</h2>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-8 mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  The year 2025 brings new interest to GTA San Andreas. Fans use faster computers. They create stronger mods. They redesign large areas of the map. They also support mobile versions. But the heart of the game stays the same. CJ's story continues to impress players. The cities feel warm and familiar. The community grows every day.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Some creators in 2025 are even working on new remaster-style mods. These make the game feel brand new but still keep the original look and style. Many mods add better roads, smoother characters, brighter skies, and cleaner buildings.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  There are also new multiplayer servers in 2025. These let fans roleplay with others. Some servers let players act as police, drivers, shop owners, and more.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">Community in 2025</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[#00ff87]">The Social Side:</strong> The community is not only about mods. It is about friendship. Many players form groups. They talk daily. They share funny moments, mistakes, and mission fails. Some fans hold contests. These contests may be about photography in the game or custom skins. Winners get small awards or respect from other fans.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[#00ff87]">Youth Movement:</strong> Many younger players join the community in 2025. They come from YouTube shorts, TikTok videos, or streaming clips. Old players teach them the basics. Younger players bring fresh ideas. This teamwork makes the community special.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[#00ff87]">Safety First:</strong> Many mod websites teach players how to avoid harmful files. They explain how to scan downloads. They also warn players about fake links. Community members guide each other to safe websites. They test mods before sharing.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-[#00ff87]">Young Players Learning:</strong> Many fans who play San Andreas are young. The community supports kids by offering simple guides. These guides explain missions in easy steps. They use pictures and short videos. Kids learn problem solving. They gain confidence. The community becomes a place to learn.
                  </p>
                </div>
              </div>
            </div>

            {/* Future of Community */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">The Future of GTA San Andreas Community</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                The future looks bright. Fans hope the game stays alive for many more years. With so much passion, that dream feels possible.
              </p>
              <div className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-[#00ff87] flex-shrink-0">→</span>
                    <span>Better remaster mods</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00ff87] flex-shrink-0">→</span>
                    <span>Larger map expansion projects</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00ff87] flex-shrink-0">→</span>
                    <span>More multiplayer servers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00ff87] flex-shrink-0">→</span>
                    <span>Cleaner textures and graphics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00ff87] flex-shrink-0">→</span>
                    <span>Updated character designs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00ff87] flex-shrink-0">→</span>
                    <span>Stronger mobile support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00ff87] flex-shrink-0">→</span>
                    <span>More languages supported</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00ff87] flex-shrink-0">→</span>
                    <span>Kid-friendly guides</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-900 border border-[#00ff87]/20 rounded-lg overflow-hidden"
                  >
                    <div className="px-6 py-4">
                      <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Join the GTA San Andreas Community Today</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                The GTA San Andreas community is waiting for you. Whether you are a new player or a veteran, there is a place for you. Share your passion, learn from others, and help keep this legendary game alive.
              </p>
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00ff87] to-[#00a2ff] text-black font-bold hover:shadow-lg hover:shadow-[#00ff87]/50 transition-all duration-300">
                Explore Community Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
