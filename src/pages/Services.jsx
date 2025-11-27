import React from 'react'
import { motion } from 'framer-motion'
import {
  Cloud,
  Brain,
  GitBranch,
  Server,
  Cpu,
  TestTube,
  Wind,
  RefreshCw,
  Search,
  Code,
  Settings,
  ArrowRight,
  Zap,
  Shield,
  Database,
  Workflow
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const appServices = [
    {
      icon: Cloud,
      title: 'Application & AI-Enabled Engineering',
      description: 'We design, build, and scale enterprise applications enhanced with AI intelligence and automation capabilities, delivering robust solutions that drive business transformation.',
      features: ['AI-Powered Applications', 'Enterprise Scale', 'Automation Focus'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      delay: 0.1
    },
    {
      icon: Brain,
      title: 'Digital Transformation Powered by AI/ML',
      description: 'We deliver end-to-end transformation—modernizing legacy systems, implementing AI/ML pipelines, and creating intelligent workflows that optimize operations and unlock new capabilities.',
      features: ['Legacy Modernization', 'AI/ML Pipelines', 'Workflow Optimization'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      delay: 0.2
    },
    {
      icon: GitBranch,
      title: 'DevOps, MLOps & Intelligent Software Testing',
      description: 'We streamline engineering with modern DevOps and MLOps practices, implementing automated testing, continuous integration, and intelligent quality assurance frameworks.',
      features: ['CI/CD Pipelines', 'Automated Testing', 'MLOps Implementation'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      delay: 0.3
    },
    {
      icon: Server,
      title: 'Cloud-Native & Hyperscaler Engineering',
      description: 'Our teams build and operate applications across Azure, AWS, and GCP, leveraging cloud-native architectures, serverless computing, and hyperscale infrastructure optimization.',
      features: ['Multi-Cloud Expertise', 'Serverless Architecture', 'Infrastructure Optimization'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      delay: 0.4
    }
  ]

  const hardwareServices = [
    {
      icon: Cpu,
      title: 'Hardware Engineering & Qualification',
      description: 'Full-stack hardware engineering support from design validation to production qualification, ensuring reliability and performance at scale.',
      features: ['Design Validation', 'Production Qualification', 'Performance Testing'],
      gradient: 'from-gray-600 to-gray-800',
      bgGradient: 'from-gray-50 to-gray-100',
      delay: 0.1
    },
    {
      icon: TestTube,
      title: 'Advanced Component Testing',
      description: 'Comprehensive testing of processors, memory, storage, and networking components under real-world conditions.',
      features: ['Processor Testing', 'Memory Validation', 'Storage Testing'],
      gradient: 'from-blue-600 to-blue-800',
      bgGradient: 'from-blue-50 to-blue-100',
      delay: 0.2
    },
    {
      icon: Wind,
      title: 'Environmental & Stress Testing',
      description: 'Rigorous environmental testing including thermal, vibration, shock, and humidity analysis.',
      features: ['Thermal Analysis', 'Vibration Testing', 'Humidity Validation'],
      gradient: 'from-green-600 to-green-800',
      bgGradient: 'from-green-50 to-green-100',
      delay: 0.3
    },
    {
      icon: RefreshCw,
      title: 'Hardware Lifecycle Management',
      description: 'End-to-end management of hardware assets from procurement to sustainable decommissioning.',
      features: ['Asset Management', 'Lifecycle Planning', 'Sustainable Decommissioning'],
      gradient: 'from-purple-600 to-purple-800',
      bgGradient: 'from-purple-50 to-purple-100',
      delay: 0.4
    },
    {
      icon: Search,
      title: 'Failure Analysis & Investigation',
      description: 'Advanced diagnostic services to identify hardware failures and perform root-cause analysis.',
      features: ['Failure Diagnostics', 'Root-Cause Analysis', 'Corrective Actions'],
      gradient: 'from-red-600 to-red-800',
      bgGradient: 'from-red-50 to-red-100',
      delay: 0.5
    },
    {
      icon: Code,
      title: 'Firmware Deployment & Testing',
      description: 'Comprehensive firmware validation, deployment automation, and cross-platform compatibility testing.',
      features: ['Firmware Validation', 'Deployment Automation', 'Cross-Platform Testing'],
      gradient: 'from-cyan-600 to-cyan-800',
      bgGradient: 'from-cyan-50 to-cyan-100',
      delay: 0.6
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
            >
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Enterprise Technology Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Engineering
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Excellence</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology engineering services spanning AI-enabled software development
              and mission-critical hardware validation for global enterprises.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Start Your Project
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI & Software Services */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 text-blue-600 mb-4">
              <Brain className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">AI & Software Engineering</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intelligent Software Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Building next-generation applications with artificial intelligence, cloud-native architectures,
              and enterprise-grade reliability.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {appServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200/80 hover:border-gray-300 transition-all duration-500 shadow-sm hover:shadow-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`px-3 py-2 bg-gradient-to-r ${service.bgGradient} text-gray-700 rounded-lg text-sm font-medium border border-gray-200/50`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hardware Services */}
      {/* Hardware Services */}
      <section className="py-24 bg-gradient-to-b from-gray-50/50 to-slate-900 relative overflow-hidden">
        {/* Technical Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px] opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(100,116,139,0.1)_50%,transparent_51%)] bg-[length:20px_20px] opacity-30" />

        {/* Circuit Board Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="100" height="100" fill="none" />
                <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="30" cy="30" r="3" fill="currentColor" />
                <circle cx="70" cy="30" r="3" fill="currentColor" />
                <circle cx="30" cy="70" r="3" fill="currentColor" />
                <circle cx="70" cy="70" r="3" fill="currentColor" />
                <path d="M50,20 L50,40 M50,60 L50,80 M20,50 L40,50 M60,50 L80,50" stroke="currentColor" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Binary Code Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="animate-float-slow">
            <div className="text-green-400 font-mono text-sm whitespace-nowrap">
              10101010 00110011 11001100 01010101 10101010 00110011 11001100 01010101
            </div>
            <div className="text-blue-400 font-mono text-sm whitespace-nowrap mt-4">
              01010101 11001100 00110011 10101010 01010101 11001100 00110011 10101010
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 text-cyan-400 mb-4">
              <Cpu className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Hardware Validation & Engineering
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mission-Critical Hardware Excellence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Rigorous testing, validation, and engineering services ensuring reliability
              and performance for enterprise and hyperscale infrastructure.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {hardwareServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
              >
                {/* Hardware-inspired card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-xl border border-cyan-500/0 group-hover:border-cyan-500/20 transition-all duration-500" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-cyan-500/20`}>
                    <service.icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2.5 py-1 bg-slate-700/70 text-gray-300 rounded-lg text-xs font-medium border border-slate-600/50 group-hover:border-cyan-500/30 group-hover:text-cyan-100 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Technical indicator */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50 group-hover:border-cyan-500/20 transition-colors">
                    <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">
                      ENTERPRISE GRADE
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Hardware Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime Reliability</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">5000+</div>
              <div className="text-sm text-gray-400">Components Tested</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Monitoring</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">ISO 9001</div>
              <div className="text-sm text-gray-400">Certified</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Technology Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how our comprehensive engineering services can drive your digital transformation forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services