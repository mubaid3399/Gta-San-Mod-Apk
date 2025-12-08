/**
 * Image Optimization Script
 *
 * This script converts all PNG and JPG images to WebP format for better performance.
 * Run: node scripts/optimize-images.js
 *
 * Prerequisites:
 * npm install -D sharp
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

// Configuration
const QUALITY = {
  webp: 85,
  avif: 80,
  jpeg: 85,
};

async function getAllImageFiles(dir) {
  const files = [];

  async function traverse(currentPath) {
    const entries = await fs.readdir(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        await traverse(fullPath);
      } else if (IMAGE_EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) {
        files.push(fullPath);
      }
    }
  }

  await traverse(dir);
  return files;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = filePath.replace(ext, '');

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    console.log(`\nProcessing: ${path.relative(PUBLIC_DIR, filePath)}`);
    console.log(`  Original size: ${metadata.width}x${metadata.height} (${metadata.format})`);

    // Generate WebP version
    const webpPath = `${baseName}.webp`;
    await image
      .webp({ quality: QUALITY.webp })
      .toFile(webpPath);

    const webpStats = await fs.stat(webpPath);
    console.log(`  ✓ Created WebP: ${(webpStats.size / 1024).toFixed(2)} KB`);

    // Generate AVIF version (smaller but takes longer)
    try {
      const avifPath = `${baseName}.avif`;
      await sharp(filePath)
        .avif({ quality: QUALITY.avif })
        .toFile(avifPath);

      const avifStats = await fs.stat(avifPath);
      console.log(`  ✓ Created AVIF: ${(avifStats.size / 1024).toFixed(2)} KB`);
    } catch (avifError) {
      console.log(`  ⚠ AVIF conversion failed (sharp may not support AVIF)`);
    }

    // Resize if image is too large
    if (metadata.width > 1920) {
      const resizedPath = `${baseName}-optimized${ext}`;
      await sharp(filePath)
        .resize(1920, null, { withoutEnlargement: true })
        .jpeg({ quality: QUALITY.jpeg })
        .toFile(resizedPath);

      const resizedStats = await fs.stat(resizedPath);
      console.log(`  ✓ Created resized: ${(resizedStats.size / 1024).toFixed(2)} KB (max-width: 1920px)`);
    }

    const originalStats = await fs.stat(filePath);
    console.log(`  Original: ${(originalStats.size / 1024).toFixed(2)} KB`);

  } catch (error) {
    console.error(`  ✗ Error processing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🎨 Image Optimization Script\n');
  console.log('Scanning for images in:', PUBLIC_DIR);

  try {
    const imageFiles = await getAllImageFiles(PUBLIC_DIR);
    console.log(`\nFound ${imageFiles.length} images to process\n`);

    if (imageFiles.length === 0) {
      console.log('No images found to optimize.');
      return;
    }

    let processed = 0;
    for (const file of imageFiles) {
      await optimizeImage(file);
      processed++;
    }

    console.log(`\n✅ Optimization complete! Processed ${processed} images.`);
    console.log('\n📝 Next steps:');
    console.log('1. Update image paths in your code to use .webp extension');
    console.log('2. Use Next.js Image component with multiple formats');
    console.log('3. Test the website with PageSpeed Insights');

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Run the script
main();
