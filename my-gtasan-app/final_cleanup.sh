#!/bin/bash

echo "Removing ALL remaining dark: prefixes..."

for file in app/[locale]/**/*.jsx app/[locale]/**/*.js app/components/**/*.jsx app/components/*.jsx app/*.jsx; do
  if [ -f "$file" ]; then
    # Remove ALL dark: prefixed classes - they're not needed in dark mode only
    sed -i 's/ dark:[^ ]*/g' "$file"
    sed -i 's/ dark:/g' "$file"
    
    # Clean up any double spaces created
    sed -i 's/  */ /g' "$file"
    sed -i 's/ $//' "$file"
  fi
done

echo "✅ All dark: prefixes removed"
