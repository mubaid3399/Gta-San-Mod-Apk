# Internationalization (i18n) Setup Guide

## Overview
This app uses **next-intl** for multilingual support with 8 languages:
- English (EN)
- Deutsch (DE)
- Français (FR)
- Italiano (IT)
- Español (ES)
- Português (PT)
- Русский (RU)
- 日本語 (JA)

## Project Structure

```
my-gtasan-app/
├── messages/                  # Translation files
│   ├── en.json
│   ├── de.json
│   ├── fr.json
│   ├── it.json
│   ├── es.json
│   ├── pt.json
│   ├── ru.json
│   └── ja.json
├── app/
│   └── context/
│       ├── LanguageContext.tsx  # Language state management
│       └── ThemeContext.tsx     # Theme state management
├── i18n.config.ts            # i18n configuration
└── middleware.ts             # Next.js middleware for locale routing
```

## Installation & Setup

### 1. Install Dependencies
```bash
npm install next-intl --legacy-peer-deps
```

### 2. Update next.config.js
Your next.config.mjs already has the necessary setup.

### 3. Create Middleware (Already Created)
The `middleware.ts` file handles automatic locale detection and routing.

## How to Use in Components

### Using Translations with useTranslations Hook

```jsx
'use client';

import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      <a href="#">{t('navigation.home')}</a>
    </div>
  );
}
```

### Example: Using in Header Component

```jsx
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations();

  return (
    <nav>
      <a href="#">{t('navigation.home')}</a>
      <a href="#">{t('navigation.mods')}</a>
      <a href="#">{t('navigation.about')}</a>
      <a href="#">{t('navigation.contact')}</a>
    </nav>
  );
}
```

## Translation Files Structure

Each translation file (messages/en.json, messages/de.json, etc.) follows this structure:

```json
{
  "navigation": {
    "home": "Home",
    "mods": "Mods",
    "about": "About",
    "contact": "Contact"
  },
  "header": {
    "title": "GTA San Apk",
    "subtitle": "Premium Mods"
  },
  "hero": {
    "title": "Welcome to GTASAN",
    "subtitle": "Explore premium mods..."
  }
}
```

## How Language Switching Works

1. **User selects language** from dropdown in Header
2. **Language selector** calls `handleLanguageChange()`
3. **Context updates** and saves to localStorage
4. **URL changes** to reflect new locale (e.g., `/de`, `/fr`, `/it`)
5. **All content automatically translates** using `useTranslations()` hook

## Adding New Translations

### Step 1: Add to All Language Files

**messages/en.json:**
```json
{
  "footer": {
    "copyright": "© 2025 GTA San Apk. All rights reserved."
  }
}
```

**messages/de.json:**
```json
{
  "footer": {
    "copyright": "© 2025 GTA San Apk. Alle Rechte vorbehalten."
  }
}
```

### Step 2: Use in Component

```jsx
const t = useTranslations();
<footer>{t('footer.copyright')}</footer>
```

## Supported Languages

| Code | Language | Native Name |
|------|----------|------------|
| en | English | English |
| de | German | Deutsch |
| fr | French | Français |
| it | Italian | Italiano |
| es | Spanish | Español |
| pt | Portuguese | Português |
| ru | Russian | Русский |
| ja | Japanese | 日本語 |

## URL Routing

After language selection, URLs will look like:
- `/en` - English
- `/de` - German
- `/fr` - French
- `/it` - Italian
- `/es` - Spanish
- `/pt` - Portuguese
- `/ru` - Russian
- `/ja` - Japanese

The default language (English) also works without prefix: `/`

## Best Practices

1. **Keep keys organized** - Use nested structure (e.g., `navigation.home`)
2. **Translate all UI text** - Don't hardcode strings
3. **Use consistent key names** across all language files
4. **Update all 8 languages** when adding new content
5. **Use useTranslations()** for dynamic content
6. **Keep translations simple** - Avoid complex formatting

## Common Examples

### Navigation Menu
```jsx
const t = useTranslations();
const navItems = ['home', 'mods', 'about', 'contact'];

{navItems.map(item => (
  <a key={item}>{t(`navigation.${item}`)}</a>
))}
```

### Dynamic Content
```jsx
const t = useTranslations();

<h1>{t('hero.title')}</h1>
<p>{t('hero.subtitle')}</p>
```

### Conditional Translations
```jsx
const t = useTranslations();

<button>
  {isDarkMode ? t('header.darkMode') : t('header.lightMode')}
</button>
```

## Troubleshooting

### Translation not showing?
- Ensure the key exists in all language files
- Check spelling and case sensitivity
- Verify the component uses `useTranslations()` hook
- Check browser console for errors

### Language not changing?
- Clear browser cache and localStorage
- Check if middleware.ts is properly configured
- Verify language code matches one of: en, de, fr, it, es, pt, ru, ja
- Check browser console for routing errors

## Next Steps

1. Update Header component to use translations
2. Update Page component to use translations
3. Create additional components (Footer, Hero, etc.)
4. Test all 8 languages in the language dropdown
5. Add more translation strings as needed

## Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/internationalization)
