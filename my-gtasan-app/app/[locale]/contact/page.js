import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export async function generateMetadata({ params }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locale = (await params)?.locale || 'en';
  const path = locale === 'en' ? '/contact' : `/${locale}/contact`;

  const languages = supportedLocales.reduce((acc, lang) => {
    const localizedPath = lang === 'en' ? '/contact' : `/${lang}/contact`;
    acc[lang] = `${base}${localizedPath}`;
    return acc;
  }, {});

  const titles = {
    en: 'Contact Us - GTA San Andreas Mod APK Support',
    de: 'Kontaktieren Sie Uns - GTA San Andreas Mod APK Unterstützung',
    fr: 'Nous Contacter - Support GTA San Andreas Mod APK',
    it: 'Contattaci - Supporto GTA San Andreas Mod APK',
    es: 'Contáctenos - Soporte GTA San Andreas Mod APK',
    pt: 'Entre em Contato - Suporte GTA San Andreas Mod APK',
    ru: 'Свяжитесь с нами - Поддержка GTA San Andreas Mod APK',
    ja: 'お問い合わせ - GTA San Andreas Mod APK サポート'
  };

  const descriptions = {
    en: 'Contact GTA San Andreas Mod APK support. Have questions or need help? Reach out to our team for assistance.',
    de: 'Kontaktieren Sie unseren GTA San Andreas Mod APK Support. Haben Sie Fragen? Wenden Sie sich an unser Team.',
    fr: 'Contactez le support GTA San Andreas Mod APK. Des questions? Veuillez nous contacter pour obtenir de l\'aide.',
    it: 'Contatta il supporto GTA San Andreas Mod APK. Hai domande? Rivolgiti al nostro team per assistenza.',
    es: 'Contacta al soporte de GTA San Andreas Mod APK. ¿Tienes preguntas? Comunícate con nuestro equipo.',
    pt: 'Entre em contato com o suporte de GTA San Andreas Mod APK. Tem dúvidas? Converse com nosso time.',
    ru: 'Свяжитесь с поддержкой GTA San Andreas Mod APK. Есть вопросы? Обратитесь к нашей команде.',
    ja: 'GTA San Andreas Mod APK サポートにお問い合わせください。ご質問がありますか？当社のチームにお問い合わせください。'
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

export default async function Contact({ params }) {
  const locale = (await params)?.locale || 'en';
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us - GTA San Andreas Mod APK Support',
    description: 'Contact GTA San Andreas Mod APK support. Have questions or need help? Reach out to our team for assistance.',
    url: `${base}${locale === 'en' ? '/contact' : `/${locale}/contact`}`,
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GTA San Andreas APK',
    url: base,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'gta868309@gmail.com',
      availableLanguage: ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100">
      {/* Header Section */}
      <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg">
            Have Questions? We Are Here To Help
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Card 1 */}
          <div className="bg-gradient-to-br from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-xl p-6 hover:border-[#00ff87]/60 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-black w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Email</h3>
            </div>
            <p className="text-gray-300 text-sm mb-2">Send us an email anytime</p>
            <a href="mailto:gta868309@gmail.com" className="text-[#00ff87] hover:text-[#00a2ff] transition-colors">
              gta868309@gmail.com
            </a>
          </div>

          {/* Contact Info Card 2 */}
          <div className="bg-gradient-to-br from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-xl p-6 hover:border-[#00ff87]/60 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faClock} className="text-black w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Response Time</h3>
            </div>
            <p className="text-gray-300 text-sm mb-2">We typically respond within</p>
            <p className="text-[#00ff87] font-semibold">
              24-48 hours
            </p>
          </div>

          {/* Contact Info Card 3 */}
          <div className="bg-gradient-to-br from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-xl p-6 hover:border-[#00ff87]/60 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Available</h3>
            </div>
            <p className="text-gray-300 text-sm mb-2">24/7 Support Available</p>
            <p className="text-[#00ff87] font-semibold">
              Worldwide
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-900/50 backdrop-blur border border-[#00ff87]/20 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="w-1 h-10 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
            Send Us a Message
          </h2>
          <p className="text-gray-400 mb-8">
            Have questions about GTA San Andreas Mod APK, Privacy Policy, Terms of Service, or anything else? Fill out the form below and we will get back to you as soon as possible.
          </p>

          <ContactForm />
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-900/50 backdrop-blur border border-[#00ff87]/20 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-1 h-10 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="border-l-4 border-[#00ff87] pl-6">
              <h3 className="text-lg font-bold text-white mb-2">
                What should I do if I find a bug in the Mod APK?
              </h3>
              <p className="text-gray-300">
                Please contact us with detailed information about the bug, including what device you are using, which version of the Mod APK you have, and exactly what happens when the bug occurs. Include screenshots if possible.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-l-4 border-[#00ff87] pl-6">
              <h3 className="text-lg font-bold text-white mb-2">
                How can I report a security issue?
              </h3>
              <p className="text-gray-300">
                If you discover a security vulnerability, please email us at gta868309@gmail.com with full details. Do not share security issues publicly as it may put other players at risk.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-l-4 border-[#00ff87] pl-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Where can I find the Privacy Policy and Terms of Service?
              </h3>
              <p className="text-gray-300">
                Both documents are available in the footer of our website. You can also use the footer links to access Privacy Policy, Terms of Service, and Cookie Policy anytime.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border-l-4 border-[#00ff87] pl-6">
              <h3 className="text-lg font-bold text-white mb-2">
                How long does it take to get a response?
              </h3>
              <p className="text-gray-300">
                We aim to respond to all inquiries within 24-48 hours. During peak times, it may take slightly longer. We appreciate your patience as we work to help as many players as possible.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="border-l-4 border-[#00ff87] pl-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Can I suggest new features for the Mod APK?
              </h3>
              <p className="text-gray-300">
                Absolutely! We welcome feature suggestions and feedback from our players. Use the contact form to share your ideas. The more detailed your suggestion, the better we can evaluate it.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-gradient-to-r from-[#00ff87]/5 to-[#00a2ff]/5 border border-[#00ff87]/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-3">Important Notice</h3>
          <p className="text-gray-300 text-sm">
            GTA San Andreas is a trademark of Rockstar Games, Inc. We are not affiliated with Rockstar Games. For official support related to the original game, please visit Rockstar Games support website. We provide support for GTA San Andreas Mod APK only.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
