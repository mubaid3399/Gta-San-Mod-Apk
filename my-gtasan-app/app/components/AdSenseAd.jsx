'use client';

import { useEffect } from 'react';

export default function AdSenseAd({ adSlot, format = 'auto', responsive = true }) {
  useEffect(() => {
    try {
      // Push ad to Google AdSense
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.warn('AdSense error:', error);
    }
  }, []);

  return (
    <div className="ad-container my-8 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
        }}
        data-ad-layout="in-article"
        data-ad-format={format}
        data-ad-client="ca-pub-6276217203648123"
        data-ad-slot={adSlot}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
