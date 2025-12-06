import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <div style={{ backgroundColor: '#030712' }}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
