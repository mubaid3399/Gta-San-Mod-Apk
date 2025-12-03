'use client';

import { motion } from 'framer-motion';

const variantClasses = {
 default:
 'bg-gray-900/30 border-gray-800 hover:border-[#00ff87]/50',
 blue: 'bg-gray-900/50 border-blue-600 hover:border-blue-400',
 amber: 'bg-gray-900/50 border-amber-600 hover:border-amber-400',
};

export default function FeatureCard({
 icon,
 title,
 description,
 children,
 variant = 'default',
}) {
 return (
 <motion.div
 whileHover={{ y: -5 }}
 transition={{ duration: 0.3 }}
 className={`p-4 rounded-lg border ${variantClasses[variant]} hover:shadow-md transition-all`}
 >
 {icon && (
 <div className="text-2xl mb-3">
 {typeof icon === 'string' ? <span>{icon}</span> : icon}
 </div>
 )}

 <h4 className="font-bold text-white mb-2">{title}</h4>

 {description && <p className="text-sm text-gray-300">{description}</p>}

 {children && <div className="text-sm text-gray-300">{children}</div>}
 </motion.div>
 );
}
