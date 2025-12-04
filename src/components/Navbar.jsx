import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    // Close mobile menu if open
    setIsOpen(false)
    
    // Scroll to top will be handled by the ScrollToTopOnNavigate component
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-card py-3 shadow-2xl shadow-primary-500/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <Link to="/" onClick={handleNavClick} className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <Sparkles className="text-white" size={20} />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Danex
                  </span>
                  <span className="text-xs text-gray-500 font-medium -mt-1">
                    Technologies
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(item.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                      location.pathname === item.path
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Animated underline */}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Hover effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-lg ${
                        hoveredLink === item.path ? 'opacity-100' : 'opacity-0'
                      }`}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <Link
                to="/contact"
                onClick={handleNavClick}
                className="group relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 hover:scale-105 inline-flex items-center space-x-2"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="w-5 h-5 relative"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <Sparkles className="relative z-10" size={16} />
                </motion.div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-300 relative cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
              {!isOpen && (
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl border-l border-white/20"
            >
              <div className="flex flex-col p-8 pt-24 h-full">
                {/* Mobile Navigation Items */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col space-y-6 flex-1"
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      className="relative"
                    >
                      <Link
                        to={item.path}
                        onClick={handleNavClick}
                        className={`block text-2xl font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        {location.pathname === item.path && (
                          <motion.div
                            layoutId="mobile-navbar-active"
                            className="absolute left-0 top-1/2 w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-600 rounded-r-full -translate-y-1/2"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="pt-8 border-t border-gray-200"
                >
                  <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className="group w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 inline-flex items-center justify-center space-x-2"
                  >
                    <span>Get Started</span>
                    <Sparkles className="group-hover:scale-110 transition-transform duration-300" size={20} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar