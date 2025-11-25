# Animation Libraries - Quick Start Guide

## 🎯 Quick Reference

### 1️⃣ **Scroll Reveal (AOS)**
```jsx
import { ScrollRevealWrapper } from '@/app/components/animations';

<ScrollRevealWrapper animation="fade-in-up" duration={800}>
  <div>Animates when scrolled into view</div>
</ScrollRevealWrapper>
```

### 2️⃣ **Auto Animate (List Items)**
```jsx
import { AutoAnimateWrapper } from '@/app/components/animations';

<AutoAnimateWrapper className="space-y-4">
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</AutoAnimateWrapper>
```

### 3️⃣ **Framer Motion (Advanced)**
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### 4️⃣ **3D Background**
```jsx
import { ThreeDBackground } from '@/app/components/animations';

<ThreeDBackground className="h-screen">
  <div>Content over rotating 3D</div>
</ThreeDBackground>
```

### 5️⃣ **Lottie Animations**
```jsx
import { LottieAnimation } from '@/app/components/animations';
import animation from '@/public/animations/loading.json';

<LottieAnimation animationData={animation} />
```

---

## 📦 Library Comparison

| Library | Use Case | Size | Setup |
|---------|----------|------|-------|
| **Framer Motion** | Complex animations, transitions | 45KB | Medium |
| **AOS** | Scroll reveals, simple effects | 7KB | Easy |
| **Three.js** | 3D backgrounds, graphics | Large | Hard |
| **Auto Animate** | List animations | 2KB | Super Easy |
| **Lottie** | JSON animations | 30KB | Easy |

---

## 🔧 Already Implemented

✅ **Header.jsx** - Slides down on load
```jsx
<motion.header
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
/>
```

✅ **FAQSection.jsx** - Auto animate accordion
```jsx
<AutoAnimateWrapper className="space-y-4">
  {faqs.map(faq => <div>{faq.question}</div>)}
</AutoAnimateWrapper>
```

✅ **GTATimeline.jsx** - Stagger timeline items
```jsx
<motion.div variants={containerVariants} initial="hidden" whileInView="visible">
  {events.map(event => <motion.div variants={itemVariants}>{event}</motion.div>)}
</motion.div>
```

---

## 🎨 Common Patterns

### Button Hover
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Staggered List
```jsx
<motion.div variants={staggerContainer} initial="initial" animate="animate">
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

### On-Scroll Animation
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
/>
```

### Floating Animation
```jsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
/>
```

---

## 📚 Animation Types (AOS)

- `fade-in`, `fade-in-up`, `fade-in-down`, `fade-in-left`, `fade-in-right`
- `slide-up`, `slide-down`, `slide-left`, `slide-right`
- `zoom-in`, `zoom-in-up`, `zoom-in-down`
- `flip-left`, `flip-right`, `flip-up`, `flip-down`
- `rotate`, `roll-left`, `roll-right`
- `bounce`, `bounce-in`, `bounce-up`

---

## 🚀 Next Steps

1. Add scroll reveals to feature sections
2. Create loading states with Lottie
3. Add 3D hero background
4. Implement page transitions
5. Add micro-interactions to buttons

---

For detailed documentation, see **[ANIMATION_GUIDE.md](./ANIMATION_GUIDE.md)**
