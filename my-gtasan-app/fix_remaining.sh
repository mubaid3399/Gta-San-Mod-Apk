#!/bin/bash

# Fix remaining conditional hover states and other patterns
for file in app/components/*.jsx app/[locale]/**/*.jsx app/[locale]/*.jsx app/[locale]/**/*.js; do
  if [ -f "$file" ]; then
    # Fix hover:bg-gray-50/100 with dark alternatives
    sed -i 's/hover:bg-gray-50 dark:hover:bg-gray-800/dark:hover:bg-gray-800/g' "$file"
    sed -i 's/hover:bg-gray-100\/60 dark:hover:bg-gray-800/dark:hover:bg-gray-800/g' "$file"
    sed -i 's/hover:bg-gray-100 dark:hover:bg-gray-800/dark:hover:bg-gray-800/g' "$file"
    sed -i 's/hover:bg-gray-100 dark:hover:bg-\[\#030712\]/dark:hover:bg-[#030712]/g' "$file"
    sed -i 's/bg-gray-100 dark:bg-gray-900/dark:bg-gray-900/g' "$file"
    sed -i 's/bg-gray-50 dark:bg-gray-800/dark:bg-gray-800/g' "$file"
    sed -i 's/bg-gray-900\/50\|bg-gray-50 dark:bg-gray-800\/30/bg-gray-800\/30/g' "$file"
  fi
done

echo "✅ Remaining conditional classes cleaned up"
