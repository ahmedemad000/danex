import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Danex Technologies</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Dubai's premier technology partner delivering AI-powered applications and mission-critical hardware validation for global enterprises.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-600 hover:text-primary-600 transition-colors duration-300">
                Services
              </Link>
              <Link to="/about" className="block text-gray-600 hover:text-primary-600 transition-colors duration-300">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-primary-600 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <p>Dubai, UAE</p>
              <p>info@danextechnologies.com</p>
              <p>+971 4 123 4567</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500"
        >
          <p>&copy; {currentYear} Danex Technologies. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer