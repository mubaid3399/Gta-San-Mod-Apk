#!/bin/bash

# More aggressive dark mode fixing to prevent hydration errors
for file in app/[locale]/**/*.jsx app/components/**/*.jsx app/[locale]/*.jsx app/components/*.jsx; do
  if [ -f "$file" ]; then
    # Remove ALL light mode classes entirely
    sed -i 's/ bg-white/ bg-[#030712]/g' "$file"
    sed -i 's/ bg-gray-50/ bg-gray-900/g' "$file"
    sed -i 's/ bg-gray-100/ bg-gray-800/g' "$file"
    sed -i 's/ bg-gray-200/ bg-gray-700/g' "$file"
    sed -i "s/ bg-white\b/ bg-[#030712]/g" "$file"
    
    # Remove light text colors
    sed -i "s/ text-gray-900\b/ text-white/g" "$file"
    sed -i "s/ text-gray-800\b/ text-gray-100/g" "$file"
    sed -i "s/ text-gray-700\b/ text-gray-300/g" "$file"
    sed -i "s/ text-black\b/ text-white/g" "$file"
    
    # Fix any remaining dark: conditional that has light mode before it
    sed -i 's/bg-white dark:/bg-[#030712] /g' "$file"
    sed -i 's/bg-gray-[0-9]* dark:/bg-gray-800 /g' "$file"
    sed -i 's/text-gray-[789]00 dark:/text-white /g' "$file"
    sed -i 's/text-black dark:/text-white /g' "$file"
    
    # Remove remaining dark: prefixes (since we're dark-only)
    sed -i 's/ dark:bg-\[#030712\]//g' "$file"
    sed -i 's/ dark:text-white//g' "$file"
    sed -i 's/ dark:text-gray-[0-9]*//g' "$file"
  fi
done

echo "✅ Hydration error fixes applied"
