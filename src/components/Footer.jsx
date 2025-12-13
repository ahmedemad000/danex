import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import Logo from './Logo' // Add this import

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white border-t border-gray-200/50">
      <div className="container mx-auto px-6 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand - Footer optimized logo */}
          <div>
            <Logo
              variant="footer"  // Smaller for footer
              animate={false}
              isLink={true}
              className="mb-4"
            />
            <p className="text-gray-600 text-sm mb-4">
              Enterprise technology solutions for the modern business.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          {/* Links */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Solutions</h3>
            <div className="space-y-2">
              {['AI Applications', 'Hardware Validation', 'Cloud Engineering', 'Digital Transformation'].map((link) => (
                <Link
                  key={link}
                  to="/services"
                  className="block text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <div className="space-y-2">
              {['About', 'Services', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPin size={14} />
                Dubai, UAE
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail size={14} />
                Khaled@danextech.com
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone size={14} />
                +90 552 6220200
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Danex Technologies. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer