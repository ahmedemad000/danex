import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * Optimized Responsive Logo Component
 * 
 * @param {Object} props
 * @param {string} props.variant - 'navbar' | 'footer' | 'loading' | 'hero'
 * @param {boolean} props.animate - Enable animations
 * @param {boolean} props.isLink - Wrap in Link component
 * @param {string} props.className - Additional classes
 * @param {Function} props.onClick - Click handler
 */
const Logo = ({ 
  variant = 'navbar', // 'navbar', 'footer', 'loading', 'hero'
  animate = true,
  isLink = true,
  className = '',
  onClick = () => {}
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Responsive sizing based on variant and screen size
  const getLogoSize = () => {
    switch (variant) {
      case 'navbar':
        return {
          mobile: { width: 130, height: 40 },   // Increased height: 40→50
          desktop: { width: 180, height: 75 },  // Increased height: 45→55
          maxWidth: '250px'  // Maximum width
        };
      case 'footer':
        return {
               mobile: { width: 130, height: 40 },   // Increased height: 40→50
          desktop: { width: 180, height: 75 },  // Increased height: 45→55
          maxWidth: '250px'  // Maximum width
        };
      case 'loading':
        return {
          mobile: { width: 200, height: 70 }, // Increased height: 55→65
          desktop: { width: 280, height: 90 }, // Increased height: 65→75
          maxWidth: '300px'
        };
      case 'hero':
        return {
          mobile: { width: 180, height: 65 },
          desktop: { width: 220, height: 75 },
          maxWidth: '260px'
        };
      default:
        return {
          mobile: { width: 130, height: 50 },
          desktop: { width: 150, height: 55 },
          maxWidth: '200px'
        };
    }
  };
  
  const sizeConfig = getLogoSize();
  
  // Animation variants
  const logoVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: variant === 'navbar' ? {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    } : {}
  };
  
  // Logo path - using public folder
  const logoSrc = '/danex-logo.png';

  const LogoImage = () => (
    <motion.div
      variants={logoVariants}
      initial="initial"
      animate="animate"
      whileHover={animate && variant === 'navbar' ? "hover" : ""}
      className={`relative transition-all duration-300 ${className}`}
      onClick={onClick}
      style={{
        // Responsive width/height
        width: `clamp(${sizeConfig.mobile.width}px, 8vw, ${sizeConfig.desktop.width}px)`,
        height: `clamp(${sizeConfig.mobile.height}px, 4vw, ${sizeConfig.desktop.height}px)`,
        maxWidth: sizeConfig.maxWidth,
        minWidth: `${sizeConfig.mobile.width}px`,
      }}
    >
      {/* Logo Container */}
      <div className="relative w-full h-full">
        {/* Main Logo Image */}
        {!error ? (
          <img
            src={logoSrc}
            alt="Danex Technologies"
            className={`w-full h-full object-contain transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
            }}
            onLoad={() => {
              setLoaded(true);
              console.log('✅ Logo loaded successfully');
            }}
            onError={() => {
              console.error('❌ Logo failed to load');
              setError(true);
            }}
            loading="eager"
            decoding="async"
          />
        ) : (
          // Fallback - Shows if logo fails to load
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
            <div className="text-white font-bold text-xl tracking-wider">
              DANEX
            </div>
          </div>
        )}
        
        {/* Loading shimmer effect */}
        {!loaded && !error && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse rounded-lg" 
               style={{ backgroundSize: '200% 100%' }} />
        )}
        
        {/* Subtle hover glow for navbar */}
        {variant === 'navbar' && animate && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        )}
      </div>
    </motion.div>
  );

  // Return either linked or standalone logo
  if (isLink) {
    return (
      <Link to="/" className="inline-block group">
        <LogoImage />
      </Link>
    );
  }

  return <LogoImage />;
};

export default Logo;