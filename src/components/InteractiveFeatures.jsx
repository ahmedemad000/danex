import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Shield, 
  Globe, 
  Zap, 
  Currency, 
  Fingerprint,
  RefreshCw,
  TrendingUp
} from 'lucide-react'

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 0,
      icon: Shield,
      title: 'Global Tax Compliance',
      description: 'We serve as your merchant of record. That means we handle payments, merchant fees, fraud and sales tax without you lifting a finger.',
      image: '/api/placeholder/600/400',
      details: [
        'Automated tax calculation across 130+ countries',
        'Real-time compliance monitoring',
        'Quarterly tax filing automation',
        'Audit support and documentation'
      ]
    },
    {
      id: 1,
      icon: Globe,
      title: 'Borderless SaaS Payments',
      description: 'Accept payments from anywhere in the world with our global payment infrastructure designed specifically for SaaS businesses.',
      image: '/api/placeholder/600/400',
      details: [
        '150+ supported countries',
        'Multi-currency billing',
        'Recurring payment optimization',
        'Payment method localization'
      ]
    },
    {
      id: 2,
      icon: Zap,
      title: 'Instant Payment Methods',
      description: 'Offer your customers their preferred payment methods with instant activation and seamless integration.',
      image: '/api/placeholder/600/400',
      details: [
        'Credit/debit card processing',
        'Digital wallets (Apple Pay, Google Pay)',
        'Bank transfers & direct debit',
        'Cryptocurrency acceptance'
      ]
    },
    {
      id: 3,
      icon: Currency,
      title: 'Local Currency Support',
      description: 'Charge customers in their local currency while receiving payments in yours, with competitive exchange rates.',
      image: '/api/placeholder/600/400',
      details: [
        '40+ local currencies supported',
        'Dynamic currency conversion',
        'FX risk management',
        'Transparent pricing'
      ]
    },
    {
      id: 4,
      icon: Fingerprint,
      title: 'A.I. Fraud Prevention',
      description: 'Advanced machine learning algorithms detect and prevent fraudulent transactions in real-time.',
      image: '/api/placeholder/600/400',
      details: [
        'Real-time fraud scoring',
        'Behavioral pattern analysis',
        '3D Secure 2.0 integration',
        'Chargeback protection'
      ]
    },
    {
      id: 5,
      icon: RefreshCw,
      title: 'Failed Payment Recovery',
      description: 'Automatically recover failed payments with smart retry logic and customer communication.',
      image: '/api/placeholder/600/400',
      details: [
        'Intelligent retry scheduling',
        'Automated customer notifications',
        'Payment method updates',
        'Recovery analytics dashboard'
      ]
    }
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.4
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Payment Infrastructure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to accept payments globally, prevent fraud, and stay compliant.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Features List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                variants={itemVariants}
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                  activeFeature === index
                    ? 'bg-white shadow-2xl shadow-primary-500/10 border-2 border-primary-500/20'
                    : 'bg-white/50 hover:bg-white/80 hover:shadow-lg border-2 border-transparent'
                }`}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-primary-50 group-hover:text-primary-600'
                  }`}>
                    <feature.icon size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      activeFeature === index ? 'text-primary-600' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      activeFeature === index ? 'text-gray-700' : 'text-gray-500'
                    }`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {activeFeature === index && (
                    <motion.div
                      layoutId="activeFeature"
                      className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Content Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                {/* Feature Image/Visualization */}
                <motion.div
                  variants={imageVariants}
                  className="relative bg-white rounded-2xl shadow-2xl shadow-primary-500/10 border border-gray-200 overflow-hidden"
                >
                  {/* Mock Dashboard/Banking Interface */}
                  <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-semibold">{features[activeFeature].title}</h3>
                        <p className="text-gray-400 text-sm">Active • Real-time</p>
                      </div>
                      <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                        <features[activeFeature].icon size={16} />
                      </div>
                    </div>
                    
                    {/* Mock Data Visualization */}
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-400 text-sm">Processing</span>
                        <TrendingUp className="text-green-400" size={16} />
                      </div>
                      <div className="space-y-2">
                        {features[activeFeature].details.slice(0, 2).map((detail, index) => (
                          <div key={index} className="flex items-center space-x-3 text-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mock Transaction */}
                    <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                            <TrendingUp className="text-green-400" size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Bank Payment Processed</p>
                            <p className="text-xs text-gray-400">Just now</p>
                          </div>
                        </div>
                        <div className="text-green-400 font-semibold">+$46.50</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Feature Details */}
                <motion.div
                  variants={contentVariants}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    How it works
                  </h4>
                  <ul className="space-y-3">
                    {features[activeFeature].details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center space-x-3 text-gray-600"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveFeatures