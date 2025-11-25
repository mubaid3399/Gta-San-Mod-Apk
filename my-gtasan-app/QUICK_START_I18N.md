# Quick Start - Internationalization (i18n)

## What You Have Now

✅ **8 languages fully configured:**
- English, Deutsch, Français, Italiano, Español, Português, Русский, 日本語

✅ **Translation files ready** in `messages/` folder

✅ **Language dropdown** in Header (fully functional)

✅ **Theme toggle** works with all languages

## How to Use in Your App

### 1. Update Your Components

**Replace hardcoded text with translations:**

```jsx
// ❌ BEFORE (hardcoded)
<h1>Welcome to GTASAN</h1>

// ✅ AFTER (using translations)
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();
  return <h1>{t('hero.title')}</h1>;
}
```

### 2. Use in Navigation

```jsx
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations();
  const navItems = ['home', 'mods', 'about', 'contact'];

  return (
    <nav>
      {navItems.map(item => (
        <a key={item}>{t(`navigation.${item}`)}</a>
      ))}
    </nav>
  );
}
```

### 3. Use in Buttons & Labels

```jsx
<button>{t('header.darkMode')}</button>
<label>{t('header.lightMode')}</label>
```

## Available Translation Keys

```
navigation.home
navigation.mods
navigation.about
navigation.contact

header.title          → "GTA San Apk"
header.subtitle       → "Premium Mods"
header.darkMode       → "Dark" / "Dunkel" / etc
header.lightMode      → "Light" / "Hell" / etc

hero.title            → "Welcome to GTASAN"
hero.subtitle         → "Explore premium mods..."

footer.copyright
footer.privacy
footer.terms
```

## Adding New Translations

### Step 1: Add to messages/en.json
```json
{
  "button": {
    "download": "Download Mod",
    "share": "Share"
  }
}
```

### Step 2: Add same key to ALL other languages

**messages/de.json:**
```json
{
  "button": {
    "download": "Mod herunterladen",
    "share": "Teilen"
  }
}
```

Continue for: fr.json, it.json, es.json, pt.json, ru.json, ja.json

### Step 3: Use in component
```jsx
const t = useTranslations();
<button>{t('button.download')}</button>
```

## How Language Switching Works

1. User hovers over **🌐 EN** in header
2. Clicks a language (DE, FR, IT, etc.)
3. App **automatically switches** to that language
4. **URL changes** to `/de`, `/fr`, `/it`, etc
5. **All text translates** instantly

## File Locations

```
messages/
├── en.json  ← Add translations here
├── de.json
├── fr.json
├── it.json
├── es.json
├── pt.json
├── ru.json
└── ja.json
```

## Testing Languages

1. Run: `npm run dev`
2. Hover over **🌐 EN** button
3. Click different languages
4. Check if text changes
5. Refresh page - language persists in localStorage

## Common Mistakes to Avoid

❌ Don't forget to add translations to ALL 8 language files
❌ Don't hardcode text - always use `t('key')`
❌ Don't use different key names across languages
❌ Don't add special characters without proper encoding

## Library Used

**next-intl** - Official Next.js internationalization library
- Automatic locale detection
- URL-based routing
- Server-side rendering support
- Easy translation management

## Need Help?

See `INTERNATIONALIZATION.md` for detailed guide
Or check `messages/en.json` for existing translation structure

## Next: Update Your Components

1. Open `app/components/Header.jsx`
2. Import: `import { useTranslations } from 'next-intl';`
3. Add: `const t = useTranslations();`
4. Replace hardcoded text with `t('key')`
5. Test language switching!
