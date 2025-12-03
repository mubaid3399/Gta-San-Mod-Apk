'use client';

import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ScrollRevealWrapper({ children, animation = 'fade-in', duration = 800, delay = 0, offset = 100 }) {
 const ref = useRef(null);

 useEffect(() => {
 AOS.init({
 duration: duration,
 delay: delay,
 offset: offset,
 once: true,
 easing: 'ease-in-out',
 });
 }, [duration, delay, offset]);

 return (
 <div ref={ref} data-aos={animation} data-aos-duration={duration} data-aos-delay={delay}>
 {children}
 </div>
 );
}
