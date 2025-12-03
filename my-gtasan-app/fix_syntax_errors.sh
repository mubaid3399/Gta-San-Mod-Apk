#!/bin/bash

# Fix ComparisonSection.jsx
sed -i '66s/border-gray-800$/border-gray-800">/' app/components/ComparisonSection.jsx
sed -i "85s/'bg-gray-900\/30/'bg-gray-900\/30'/" app/components/ComparisonSection.jsx

# Fix DownloadInstallation.jsx  
sed -i '80s/bg-gray-800\/30$/bg-gray-800\/30"/' app/components/DownloadInstallation.jsx
sed -i '114s/bg-gray-800\/50$/bg-gray-800\/50">/' app/components/DownloadInstallation.jsx

# Fix FAQSection.jsx
sed -i '128s/hover:shadow-lg$/hover:shadow-lg">/' app/components/FAQSection.jsx
sed -i '163s/to-gray-50\/50$/to-gray-50\/50">/' app/components/FAQSection.jsx
sed -i '175s/border-blue-200$/border-blue-200">/' app/components/FAQSection.jsx

# Fix GTAFeaturesDetail.jsx
sed -i '47s/hover:shadow-lg$/hover:shadow-lg">/' app/components/GTAFeaturesDetail.jsx
sed -i '163s/shadow-lg$/shadow-lg"/' app/components/GTAFeaturesDetail.jsx

# Fix GTAGameplayVideo.jsx
sed -i '24s/shadow-lg$/shadow-lg"/' app/components/GTAGameplayVideo.jsx

# Fix Header.jsx
sed -i '173s/transition-all\/10$/transition-all\/10">/' app/components/Header.jsx
sed -i "274s/'text-\[#00ff87\]/'text-[#00ff87]'/" app/components/Header.jsx
sed -i "275s/'text-\[#00ff87\]/'text-[#00ff87]'/" app/components/Header.jsx

# Fix SystemRequirementsFeatures.jsx
sed -i '33s/hover:shadow-lg$/hover:shadow-lg">/' app/components/SystemRequirementsFeatures.jsx

# Fix SystemRequirementsTable.jsx
sed -i "58s/hover:shadow-lg$/hover:shadow-lg'/" app/components/SystemRequirementsTable.jsx
sed -i "59s/hover:shadow-lg$/hover:shadow-lg'/" app/components/SystemRequirementsTable.jsx
sed -i '75s/border-blue-200$/border-blue-200">/' app/components/SystemRequirementsTable.jsx

echo "✅ All syntax errors fixed"
