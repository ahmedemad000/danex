import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const LogoFallback = ({ size = 'md', withText = true }) => {
  const sizeMap = {
    sm: { container: 'w-8 h-8', text: 'text-sm' },
    md: { container: 'w-10 h-10', text: 'text-lg' },
    lg: { container: 'w-14 h-14', text: 'text-2xl' },
    xl: { container: 'w-18 h-18', text: 'text-4xl' }
  };

  const { container, text } = sizeMap[size];

  return (
    <div className="flex items-center space-x-3">
      <motion.div
        className={`${container} bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25`}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="text-white" size={size === 'xl' ? 28 : size === 'lg' ? 20 : 16} />
      </motion.div>
      
      {withText && (
        <div className="flex flex-col">
          <span className={`font-bold text-gray-900 ${text}`}>
            Danex
          </span>
          <span className="text-xs text-gray-500 font-medium -mt-1">
            Technologies
          </span>
        </div>
      )}
    </div>
  );
};

export default LogoFallback;