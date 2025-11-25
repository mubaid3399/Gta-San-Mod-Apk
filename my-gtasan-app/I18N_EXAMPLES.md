# i18n Implementation Examples

## Example 1: Update Header Component

### Before (Hardcoded):
```jsx
<nav>
  <ul className="flex gap-8 text-white font-medium">
    {["Home", "Mods", "About", "Contact"].map(item => (
      <li key={item}>
        <a href="#">{item}</a>
      </li>
    ))}
  </ul>
</nav>
```

### After (With Translations):
```jsx
'use client';

import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations();
  const navItems = ['home', 'mods', 'about', 'contact'];

  return (
    <nav>
      <ul className="flex gap-8 text-white font-medium">
        {navItems.map(item => (
          <li key={item}>
            <a href="#">{t(`navigation.${item}`)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

---

## Example 2: Update Hero Section

### Before:
```jsx
export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to GTASAN
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Explore premium mods and enhancements for GTA San Andreas
        </p>
      </div>
    </section>
  );
}
```

### After:
```jsx
'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  );
}
```

---

## Example 3: Update Footer

### Before:
```jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© 2025 GTA San Apk. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
```

### After:
```jsx
'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>{t('footer.copyright')}</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#">{t('footer.privacy')}</a>
          <a href="#">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
}
```

---

## Example 4: Dynamic Content with Variables

### In Translation File (en.json):
```json
{
  "welcome": "Welcome, {name}!",
  "count": "You have {count} downloads"
}
```

### In Component:
```jsx
import { useTranslations } from 'next-intl';

export default function Welcome({ name, count }) {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('welcome', { name })}</h1>
      <p>{t('count', { count })}</p>
    </div>
  );
}
```

---

## Example 5: Conditional Translations

### Scenario: Different text based on language

```jsx
import { useLocale, useTranslations } from 'next-intl';

export default function LanguageInfo() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div>
      <h1>{t('hero.title')}</h1>

      {locale === 'ja' && (
        <p>このアプリは日本語でご利用いただけます</p>
      )}

      {locale === 'de' && (
        <p>Diese App ist auf Deutsch verfügbar</p>
      )}
    </div>
  );
}
```

---

## Example 6: Translation List Component

### Scenario: Display list of languages

```jsx
'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function LanguageList() {
  const t = useTranslations();
  const locale = useLocale();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'it', name: 'Italiano' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'ja', name: '日本語' },
  ];

  return (
    <div>
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={`/${lang.code}`}
          className={locale === lang.code ? 'active' : ''}
        >
          {lang.name}
        </Link>
      ))}
    </div>
  );
}
```

---

## Example 7: Add New Translations (Complete Example)

### Step 1: Add to ALL language files

**messages/en.json:**
```json
{
  "modList": {
    "title": "Popular Mods",
    "noMods": "No mods available",
    "download": "Download",
    "rating": "Rating"
  }
}
```

**messages/de.json:**
```json
{
  "modList": {
    "title": "Beliebte Mods",
    "noMods": "Keine Mods verfügbar",
    "download": "Herunterladen",
    "rating": "Bewertung"
  }
}
```

**messages/fr.json:**
```json
{
  "modList": {
    "title": "Mods populaires",
    "noMods": "Aucun mod disponible",
    "download": "Télécharger",
    "rating": "Évaluation"
  }
}
```

Continue for: it.json, es.json, pt.json, ru.json, ja.json

### Step 2: Use in Component

```jsx
'use client';

import { useTranslations } from 'next-intl';

export default function ModsList({ mods = [] }) {
  const t = useTranslations();

  return (
    <section>
      <h2>{t('modList.title')}</h2>

      {mods.length === 0 ? (
        <p>{t('modList.noMods')}</p>
      ) : (
        <div className="grid gap-4">
          {mods.map((mod) => (
            <div key={mod.id} className="mod-card">
              <h3>{mod.name}</h3>
              <p>{mod.description}</p>
              <span>⭐ {mod.rating}</span>
              <button>{t('modList.download')}</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
```

---

## Example 8: Full Page Implementation

### Complete Page with All Translations

```jsx
'use client';

import { useTranslations } from 'next-intl';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
        </section>

        {/* Navigation */}
        <nav>
          <a href="#">{t('navigation.home')}</a>
          <a href="#">{t('navigation.mods')}</a>
          <a href="#">{t('navigation.about')}</a>
          <a href="#">{t('navigation.contact')}</a>
        </nav>
      </main>

      <Footer />
    </div>
  );
}
```

---

## Common Patterns

### Pattern 1: Array of Items
```jsx
const items = ['home', 'mods', 'about'];
{items.map(item => <li>{t(`navigation.${item}`)}</li>)}
```

### Pattern 2: Object Properties
```jsx
const config = {
  title: t('header.title'),
  subtitle: t('header.subtitle')
};
```

### Pattern 3: Conditional Rendering
```jsx
{isDarkMode && <h1>{t('header.darkMode')}</h1>}
{!isDarkMode && <h1>{t('header.lightMode')}</h1>}
```

### Pattern 4: Fallback Text
```jsx
const title = t('hero.title') || 'Default Title';
```

---

## Testing Translations

### 1. Test in All Languages
- Switch to each language
- Verify text displays correctly
- Check for missing translations

### 2. Check Console
- Look for i18n warnings
- Verify no missing keys

### 3. Test Language Persistence
- Change language
- Refresh page
- Language should persist from localStorage

### 4. Test URL Routing
- Select language
- URL should change to `/de`, `/fr`, etc
- Direct URL navigation should work

---

## Troubleshooting

### Issue: "Message 'key.name' not found"
**Solution:** Add the key to all 8 language files

### Issue: Text shows English even in other language
**Solution:** Check if key exists in that language file

### Issue: Language doesn't persist after refresh
**Solution:** Check localStorage is enabled in browser

### Issue: Special characters show wrong
**Solution:** Ensure JSON files are UTF-8 encoded

---

## Tips & Tricks

✅ Use consistent naming: `section.element.text`
✅ Group related translations together
✅ Test all languages before shipping
✅ Use meaningful key names (not t1, t2, t3)
✅ Keep translations short and clear
✅ Use locale hook to customize behavior per language

---

## Resources

- [next-intl Docs](https://next-intl-docs.vercel.app/)
- [JSON i18n Best Practices](https://phrase.com/blog/posts/i18n-best-practices/)
- [Translation Management Tips](https://www.notion.so/i18n-Tips-123abc)
