import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  Mail, Phone, MapPin, Clock, Send, MessageCircle, 
  Calendar, Building2, User, Award, Shield, 
  CheckCircle, XCircle, Loader2 
} from 'lucide-react'

// ✅ YOUR ACTUAL EMAILJS CREDENTIALS
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_pqipcpk',
  TEMPLATE_ID: 'template_hfiym3b', 
  PUBLIC_KEY: 'xBqxGOx7jlZYOEvW0',
  COMPANY_EMAIL: 'contact@danex.tech'
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Validate all fields are filled
      if (!formData.name || !formData.email || !formData.company || !formData.service || !formData.message) {
        throw new Error('Please fill all required fields')
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: EMAILJS_CONFIG.COMPANY_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        date: new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      console.log('📧 Sending email with EmailJS...', templateParams)

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      console.log('✅ Email sent successfully!', result)
      
      // Show success message
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)

    } catch (error) {
      console.error('❌ Failed to send email:', error)
      
      // Handle specific error types
      if (error.text?.includes('insufficient authentication scopes')) {
        setSubmitStatus('error_auth')
      } else if (error.text?.includes('Invalid login') || error.text?.includes('Authentication failed')) {
        setSubmitStatus('error_gmail_auth')
      } else if (error.text?.includes('Service not found')) {
        setSubmitStatus('error_service')
      } else if (error.text?.includes('Template not found')) {
        setSubmitStatus('error_template')
      } else {
        setSubmitStatus('error')
      }

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Our team will respond within 24 hours",
      contact: "contact@danex.tech",
      action: "mailto:contact@danex.tech"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our experts",
      contact: "+971 4 123 4567",
      action: "tel:+97141234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Our headquarters in Dubai",
      contact: "Dubai Internet City, Dubai, UAE",
      action: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      description: "We're available to support you",
      contact: "Sun - Thu: 8:00 AM - 6:00 PM GST",
      action: null
    }
  ]

  const services = [
    "AI-Enabled Software Engineering",
    "Hardware Validation & Testing",
    "Digital Transformation",
    "Cloud-Native Solutions",
    "DevOps & MLOps",
    "Other"
  ]

  const trustIndicators = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Enterprise Grade",
      description: "ISO 27001 Certified"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Compliant",
      description: "GDPR & Local Compliance"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Global Delivery",
      description: "Serving Clients Worldwide"
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 text-blue-300 mb-6"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Let's Start a Conversation</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Transform Your<br />
              <span className="text-blue-400">Technology Future</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Connect with our elite engineering team to discuss AI-enabled software solutions 
              and mission-critical hardware validation for your enterprise.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Multiple Ways to Connect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the communication method that works best for your enterprise needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  {method.action ? (
                    <a
                      href={method.action}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      {method.contact}
                    </a>
                  ) : (
                    <span className="text-gray-900 font-semibold">
                      {method.contact}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Trust Indicators */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and our solution architects will contact you within 24 hours
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-green-800 font-semibold">Message sent successfully!</p>
                      <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error_service' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <p className="text-red-800 font-semibold">Service Configuration Error</p>
                    </div>
                    <p className="text-red-600 text-sm">
                      Please check your EmailJS Service ID configuration.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error_template' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <p className="text-red-800 font-semibold">Template Configuration Error</p>
                    </div>
                    <p className="text-red-600 text-sm">
                      Please check your EmailJS Template ID configuration.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
                  >
                    <XCircle className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="text-red-800 font-semibold">Failed to send message</p>
                      <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="John Anderson"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your project requirements, timeline, and challenges..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Trust Indicators & CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                  <div className="text-center mb-8">
                    <Calendar className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">
                      Free 15-Day Consultation
                    </h3>
                    <p className="text-blue-100">
                      Experience our expertise with a complimentary consultation period. 
                      No commitment required.
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-blue-600 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Consultation
                  </motion.button>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    Why Enterprises Trust Danex
                  </h4>
                  <div className="space-y-4">
                    {trustIndicators.map((indicator, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
                      >
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                          {indicator.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">
                            {indicator.title}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {indicator.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Global Presence, Local Expertise
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Based in Dubai's technology hub, we serve enterprises across EMEA, 
              North America, and Asia-Pacific regions with tailored solutions.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">EMEA</div>
                <p className="text-gray-600">Dubai Headquarters</p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">NA</div>
                <p className="text-gray-600">North America Partners</p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">APAC</div>
                <p className="text-gray-600">Asia-Pacific Delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact