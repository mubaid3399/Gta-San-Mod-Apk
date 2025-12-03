#!/bin/bash

# Counter for replacements
total_replacements=0

# Function to fix a file
fix_file() {
    local file=$1
    local before_count=$(grep -o "bg-white\|bg-gray-50\|bg-gray-100\|text-gray-900\|text-gray-800\|text-black\|dark:" "$file" | wc -l)
    
    # Background color replacements
    sed -i 's/bg-white dark:bg-\[\#030712\]/bg-[#030712]/g' "$file"
    sed -i 's/bg-white dark:bg-\[#030712\]/bg-[#030712]/g' "$file"
    sed -i 's/bg-gray-50 dark:bg-gray-900\/50/bg-gray-900\/50/g' "$file"
    sed -i 's/bg-gray-50 dark:bg-gray-900/bg-gray-900/g' "$file"
    sed -i 's/bg-gray-100 dark:bg-gray-800/bg-gray-800/g' "$file"
    sed -i 's/bg-white dark:bg-gray-900/bg-gray-900/g' "$file"
    sed -i 's/bg-white\//bg-[#030712]\//g' "$file"
    sed -i 's/\bbg-white\b/bg-[#030712]/g' "$file"
    
    # Text color replacements
    sed -i 's/text-gray-900 dark:text-white/text-white/g' "$file"
    sed -i 's/text-gray-900 dark:text-gray-100/text-white/g' "$file"
    sed -i 's/text-gray-800 dark:text-gray-100/text-gray-100/g' "$file"
    sed -i 's/text-black dark:text-white/text-white/g' "$file"
    sed -i 's/text-gray-600 dark:text-gray-400/text-gray-400/g' "$file"
    sed -i 's/text-gray-700 dark:text-gray-300/text-gray-300/g' "$file"
    sed -i 's/\btext-gray-900\b/text-white/g' "$file"
    sed -i 's/\btext-gray-800\b/text-gray-100/g' "$file"
    sed -i 's/\btext-black\b/text-white/g' "$file"
    
    # Gradient replacements
    sed -i 's/from-gray-50 to-white dark:from-gray-900\/50 dark:to-\[\#030712\]/from-gray-900\/50 to-[#030712]/g' "$file"
    sed -i 's/from-gray-50 to-white dark:from-gray-900 dark:to-\[\#030712\]/from-gray-900 to-[#030712]/g' "$file"
    sed -i 's/from-gray-50/from-gray-900/g' "$file"
    sed -i 's/to-white dark:/to-[#030712]/g' "$file"
    
    # Border replacements
    sed -i 's/border-gray-200 dark:border-gray-800/border-gray-800/g' "$file"
    sed -i 's/border-gray-300 dark:border-gray-700/border-gray-700/g' "$file"
    sed -i 's/border-gray-200 dark:border-white\/10/border-white\/10/g' "$file"
    
    local after_count=$(grep -o "bg-white\|bg-gray-50\|bg-gray-100\|text-gray-900\|text-gray-800\|text-black\|dark:" "$file" | wc -l)
    local fixed=$((before_count - after_count))
    
    if [ $fixed -gt 0 ]; then
        echo "✓ $file: Fixed $fixed issues"
        total_replacements=$((total_replacements + fixed))
    fi
}

# Process all component files
for file in app/[locale]/HomeContent.jsx \
            app/[locale]/for-ios/ForIOSContent.jsx \
            app/[locale]/for-pc/ForPCContent.jsx \
            app/[locale]/gta-cars/GtaCarsContent.jsx \
            app/[locale]/gta-cheats/GtaCheatsContent.jsx \
            app/components/FAQSection.jsx \
            app/components/GameplayControls.jsx \
            app/components/GTAFeaturesDetail.jsx \
            app/components/Footer.jsx \
            app/components/DownloadInstallation.jsx \
            app/components/ComparisonSection.jsx \
            app/components/GTAGameplayVideo.jsx \
            app/components/GTATimeline.jsx \
            app/components/Header.jsx \
            app/components/ProsAndCons.jsx \
            app/components/SafetyPrecautions.jsx \
            app/components/TipsAndTricks.jsx \
            app/components/sections/ContentSection.jsx \
            app/components/SystemRequirementsFeatures.jsx \
            app/components/SystemRequirementsTable.jsx \
            app/components/ui/FeatureCard.jsx \
            app/components/ScrollToTopButton.jsx; do
    if [ -f "$file" ]; then
        fix_file "$file"
    fi
done

echo ""
echo "✅ Total replacements made: $total_replacements"
