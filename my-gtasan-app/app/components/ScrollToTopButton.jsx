'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] text-black font-bold flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#00ff87]/50 transition-all duration-300 hover:scale-110 animate-bounce"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </>
  );
}
