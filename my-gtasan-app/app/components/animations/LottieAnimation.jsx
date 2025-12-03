'use client';

import Lottie from 'lottie-react';

export default function LottieAnimation({ animationData, className = '', loop = true, autoplay = true, ...props }) {
 return (
 <div className={className}>
 <Lottie
 animationData={animationData}
 loop={loop}
 autoplay={autoplay}
 {...props}
 />
 </div>
 );
}
