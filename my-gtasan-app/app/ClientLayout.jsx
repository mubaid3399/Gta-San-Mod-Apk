'use client';

import { useEffect } from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function ClientLayout({ children }) {
 useEffect(() => {
 // Defer GA loading to after page interactive (LCP not affected)
 if (document.readyState === 'complete') {
 initGoogleAnalytics();
 } else {
 window.addEventListener('load', initGoogleAnalytics, { once: true });
 }
 }, []);

 const initGoogleAnalytics = () => {
 const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
 const script = document.createElement('script');
 script.async = true;
 script.defer = true;
 script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
 document.head.appendChild(script);

 window.dataLayer = window.dataLayer || [];
 window.gtag = function() {
 window.dataLayer.push(arguments);
 };
 window.gtag('js', new Date());
 window.gtag('config', GA_ID);
 };

 return (
 <>
 {children}
 <ScrollToTopButton />
 </>
 );
}
