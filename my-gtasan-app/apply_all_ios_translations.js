const fs = require('fs');
const path = require('path');

// All translations data
const ALL_TRANS = {
  de: require('./translations/de_ios.json'),
  es: require('./translations/es_ios.json'),
  fr: require('./translations/fr_ios.json'),
  it: require('./translations/it_ios.json'),
  ja: require('./translations/ja_ios.json'),
  pt: require('./translations/pt_ios.json'),
  ru: require('./translations/ru_ios.json')
};

const messagesDir = path.join(__dirname, 'messages');

console.log('Applying iOS translations to all language files...\n');

let successCount = 0;
let failCount = 0;

for (const [lang, forIOSData] of Object.entries(ALL_TRANS)) {
  try {
    const filePath = path.join(messagesDir, `${lang}.json`);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.forIOS = forIOSData;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ ${lang}.json - SUCCESS`);
    successCount++;
  } catch (error) {
    console.log(`✗ ${lang}.json - FAILED: ${error.message}`);
    failCount++;
  }
}

console.log('\n' + '='.repeat(50));
console.log(`Total: ${successCount} succeeded, ${failCount} failed`);
console.log('='.repeat(50));

process.exit(failCount > 0 ? 1 : 0);
