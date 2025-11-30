'use client';

import { useEffect } from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function ClientLayout({ children }) {
  useEffect(() => {
    // Google Analytics 4 Tracking
    const initGoogleAnalytics = () => {
      // Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 property ID
      const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

      // Create script element
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', GA_ID);
    };

    initGoogleAnalytics();
  }, []);

  return (
    <>
      {children}
      <ScrollToTopButton />
    </>
  );
}
