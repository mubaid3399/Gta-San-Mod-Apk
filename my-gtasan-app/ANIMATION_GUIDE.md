# Animation Libraries Integration Guide

This document provides a comprehensive guide on how to use the animation libraries integrated into the GTA San Apk project.

---

## 📦 Installed Libraries

### 1. **Framer Motion** (Production Animation Library)
- **Version**: Latest
- **Purpose**: Advanced animations, transitions, and gestures
- **Best For**: Page transitions, component animations, complex motion effects
- **Bundle Size**: ~45KB (gzipped)

```bash
npm install framer-motion
```

### 2. **AOS (Animate On Scroll)**
- **Version**: Latest
- **Purpose**: Scroll-triggered animations
- **Best For**: Hero sections, feature reveals, fade-in effects
- **Bundle Size**: ~7KB (gzipped)

```bash
npm install aos
```

### 3. **Three.js & React Three Fiber**
- **Purpose**: 3D graphics and WebGL effects
- **Best For**: Background effects, 3D models, interactive graphics
- **Includes**: `three`, `@react-three/fiber`, `@react-three/drei`

```bash
npm install three @react-three/fiber @react-three/drei
```

### 4. **FormKit Auto Animate**
- **Purpose**: Automatic animations for DOM changes
- **Best For**: List items, accordion animations, automatic transitions
- **Bundle Size**: ~2KB

```bash
npm install @formkit/auto-animate
```

### 5. **Lottie React**
- **Purpose**: JSON-based animations from After Effects
- **Best For**: Loading states, complex animations, micro-interactions
- **Bundle Size**: ~30KB

```bash
npm install lottie-react
```

---

## 🎯 Animation Components Created

### 1. **ScrollRevealWrapper** (AOS)
Animates elements when they come into viewport.

#### Location
`app/components/animations/ScrollRevealWrapper.jsx`

#### Usage
```jsx
import { ScrollRevealWrapper } from '@/app/components/animations';

export default function MyComponent() {
  return (
    <ScrollRevealWrapper animation="fade-in" duration={800} delay={0}>
      <div>Content that fades in on scroll</div>
    </ScrollRevealWrapper>
  );
}
```

#### Props
- `animation` (string): AOS animation type - `fade-in`, `slide-up`, `slide-down`, `slide-left`, `slide-right`, `zoom-in`, `flip-left`, `flip-right`
- `duration` (number): Animation duration in ms (default: 800)
- `delay` (number): Delay before animation starts in ms
- `offset` (number): Trigger offset (default: 100)

#### Available Animations
```javascript
// AOS provides dozens of animations:
'fade-in', 'fade-in-up', 'fade-in-down', 'fade-in-left', 'fade-in-right',
'slide-up', 'slide-down', 'slide-left', 'slide-right',
'zoom-in', 'zoom-in-up', 'zoom-in-down',
'flip-left', 'flip-right', 'flip-up', 'flip-down',
'rotate', 'roll-left', 'roll-right',
'bounce', 'bounce-in', 'bounce-up', 'bounce-down'
```

---

### 2. **AutoAnimateWrapper** (Auto Animate)
Automatically animates list items, additions, and removals.

#### Location
`app/components/animations/AutoAnimateWrapper.jsx`

#### Usage
```jsx
import { AutoAnimateWrapper } from '@/app/components/animations';

export default function FAQSection() {
  const [items, setItems] = useState([]);

  return (
    <AutoAnimateWrapper className="space-y-4">
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </AutoAnimateWrapper>
  );
}
```

#### Features
- Zero-config automatic animations
- Smoothly animates list reordering
- Handles additions and removals
- No need to specify animation properties

#### Already Implemented In
- ✅ FAQSection.jsx - Accordion items animate smoothly when expanded/collapsed

---

### 3. **Framer Motion Primitives**
Direct exports for use with Framer Motion animations.

#### Location
`app/components/animations/FramerMotionWrapper.jsx`

#### Available Components & Variants

```jsx
import {
  AnimatedDiv,           // motion.div
  AnimatedSection,       // motion.section
  fadeInUp,
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  scaleIn,
  staggerContainer,
  staggerItem,
} from '@/app/components/animations';
```

#### Usage Examples

**Basic Fade In:**
```jsx
<AnimatedDiv variants={fadeInUp} initial="initial" animate="animate">
  <h1>Fade in with slide up</h1>
</AnimatedDiv>
```

**Staggered Children Animation:**
```jsx
<AnimatedDiv
  variants={staggerContainer}
  initial="initial"
  animate="animate"
>
  {items.map(item => (
    <AnimatedDiv key={item.id} variants={staggerItem}>
      {item.name}
    </AnimatedDiv>
  ))}
</AnimatedDiv>
```

**Custom Animation:**
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  Animated content
</motion.div>
```

#### Available Variants
- `fadeInUp` - Fades in while sliding up
- `fadeIn` - Simple fade in
- `slideInFromLeft` - Slides in from left
- `slideInFromRight` - Slides in from right
- `scaleIn` - Scales up from smaller size
- `staggerContainer` - Container for staggered animations
- `staggerItem` - Item that staggered with others

#### Already Implemented In
- ✅ Header.jsx - Header slides down on page load, mobile menu slides from left
- ✅ GTATimeline.jsx - Timeline line animates with scaleY, items stagger in with x-axis slide

---

### 4. **ThreeDBackground** (Three.js)
Creates an interactive 3D background with rotating geometry.

#### Location
`app/components/animations/ThreeDBackground.jsx`

#### Usage
```jsx
import { ThreeDBackground } from '@/app/components/animations';

export default function HeroSection() {
  return (
    <ThreeDBackground className="h-screen">
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1>Content over 3D background</h1>
      </div>
    </ThreeDBackground>
  );
}
```

#### Features
- Rotating icosahedron with wireframe
- Gradient lighting (green to blue)
- Responsive to window resize
- Alpha transparency for blending
- Smooth animation at 60 FPS

#### Customization
Edit `ThreeDBackground.jsx` to change:
- Geometry type (currently `IcosahedronGeometry`)
- Colors (currently `#00ff87` and `#00a2ff`)
- Rotation speed (x: 0.002, y: 0.003)
- Wireframe style and opacity

---

### 5. **LottieAnimation** (Lottie React)
Plays JSON animations exported from After Effects.

#### Location
`app/components/animations/LottieAnimation.jsx`

#### Usage
```jsx
import { LottieAnimation } from '@/app/components/animations';
import loadingAnimation from '@/public/animations/loading.json';

export default function LoadingState() {
  return (
    <LottieAnimation
      animationData={loadingAnimation}
      loop={true}
      autoplay={true}
      className="w-48 h-48"
    />
  );
}
```

#### Props
- `animationData` (object): JSON animation data from Lottie
- `loop` (boolean): Loop the animation (default: true)
- `autoplay` (boolean): Auto play on mount (default: true)
- `className` (string): CSS classes for styling

#### Getting Animations
1. Download from [LottieFiles.com](https://lottiefiles.com)
2. Export as JSON
3. Place in `public/animations/` folder
4. Import and use in components

---

## 🚀 Implementation Examples

### Example 1: Hero Section with AOS
```jsx
'use client';
import { ScrollRevealWrapper } from '@/app/components/animations';

export default function HeroSection() {
  return (
    <section className="py-20">
      <ScrollRevealWrapper animation="fade-in-up" duration={1000}>
        <h1 className="text-5xl font-bold">Welcome</h1>
      </ScrollRevealWrapper>

      <ScrollRevealWrapper animation="fade-in" delay={200}>
        <p className="text-xl mt-4">Subtitle text</p>
      </ScrollRevealWrapper>
    </section>
  );
}
```

### Example 2: Feature Cards with Stagger
```jsx
'use client';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/app/components/animations';

const features = [
  { id: 1, title: 'Feature 1' },
  { id: 2, title: 'Feature 2' },
  { id: 3, title: 'Feature 3' },
];

export default function Features() {
  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate">
      {features.map(feature => (
        <motion.div
          key={feature.id}
          variants={staggerItem}
          className="p-6 bg-white rounded-lg"
        >
          <h3>{feature.title}</h3>
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### Example 3: Dynamic List with Auto Animate
```jsx
'use client';
import { useState } from 'react';
import { AutoAnimateWrapper } from '@/app/components/animations';

export default function TodoList() {
  const [items, setItems] = useState(['Item 1', 'Item 2']);

  return (
    <AutoAnimateWrapper className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="p-4 bg-blue-100 rounded">
          {item}
        </div>
      ))}
    </AutoAnimateWrapper>
  );
}
```

---

## 📊 Current Integration Status

### ✅ Completed
- [x] Header animation (Framer Motion)
- [x] Mobile menu slide-in (Framer Motion)
- [x] FAQ accordion (AutoAnimate)
- [x] Timeline with stagger effects (Framer Motion)
- [x] Animation utilities exported

### 🔄 Ready to Implement
- [ ] Hero section scroll reveals (AOS)
- [ ] Feature cards stagger (Framer Motion)
- [ ] 3D background effects (Three.js)
- [ ] Loading animations (Lottie)
- [ ] Button hover effects
- [ ] Page transitions
- [ ] Image reveals on scroll

---

## 🎨 Animation Best Practices

### Performance Tips
1. **Use `whileInView` instead of `animate`** for scroll-triggered animations
   ```jsx
   <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: true }}
   />
   ```

2. **Optimize stagger delays**
   ```jsx
   staggerChildren: 0.1,  // 100ms between children
   delayChildren: 0.1,     // 100ms before first child
   ```

3. **Use `will-change` CSS for GPU acceleration**
   ```jsx
   <div style={{ willChange: 'transform' }}>
     Animated content
   </div>
   ```

4. **Reduce animation duration on mobile**
   ```jsx
   const duration = window.innerWidth < 768 ? 0.3 : 0.6;
   ```

### Accessibility
- Respect `prefers-reduced-motion` preference
- Use semantic HTML with animations
- Don't animate focus indicators
- Keep animations under 1 second for UI feedback

```jsx
import { useReducedMotion } from 'framer-motion';

export function AccessibleAnimation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={shouldReduceMotion ? {} : { x: 100 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
    />
  );
}
```

---

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [AOS Documentation](https://michalsnik.github.io/aos/)
- [Three.js Documentation](https://threejs.org/docs/)
- [LottieFiles](https://lottiefiles.com)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

---

## 🔧 Troubleshooting

### Animations not showing?
- Check if component is wrapped with `'use client'`
- Verify animation library is imported
- Check browser console for errors
- Ensure `viewport={{ once: true }}` is set for scroll animations

### Performance issues?
- Reduce number of animated elements
- Increase `staggerChildren` delay
- Use CSS transforms instead of position changes
- Profile with Chrome DevTools Performance tab

### Three.js not rendering?
- Check WebGL support in browser
- Ensure container has defined width/height
- Verify Three.js version compatibility
- Check for shader compilation errors

---

## 📝 Next Steps

1. **Add scroll reveals to feature sections** - Use `ScrollRevealWrapper`
2. **Create loading animations** - Implement Lottie animations
3. **Add 3D background** - Use `ThreeDBackground` in hero
4. **Optimize animations** - Test on mobile devices
5. **Add more Framer Motion transitions** - Between pages

---

**Last Updated**: November 20, 2025
**Project**: GTA San Apk Website
**Framework**: Next.js 16 + React 19
