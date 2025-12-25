import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LayoutWrapper from './LayoutWrapper';

// Generate static params for all supported locales
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
    { locale: 'fr' },
    { locale: 'it' },
    { locale: 'es' },
    { locale: 'pt' },
    { locale: 'ru' },
    { locale: 'ja' },
  ];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <LayoutWrapper>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </LayoutWrapper>
  );
}
