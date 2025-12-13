import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
  ArrowRight,
  Zap,
  Shield,
  Database,
  Workflow,
  CircuitBoard,
  Cpu as Chip,
  Layers,
  GitMerge,
  ServerCrash,
  BarChart3
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98])

  const appServices = [
    {
      icon: Cloud,
      title: 'Application & AI-Enabled Engineering',
      description: 'Enterprise-grade applications powered by AI intelligence and automation capabilities.',
      features: ['AI-Powered Applications', 'Enterprise Scale', 'Automation Focus'],
      gradient: 'from-blue-500 via-sky-500 to-cyan-500',
      bgGradient: 'from-blue-50/80 via-sky-50/60 to-cyan-50/80',
      stats: '99.9% Uptime',
      delay: 0.1
    },
    {
      icon: Brain,
      title: 'Digital Transformation Powered by AI/ML',
      description: 'End-to-end modernization with intelligent workflows and ML pipelines.',
      features: ['Legacy Modernization', 'AI/ML Pipelines', 'Workflow Optimization'],
      gradient: 'from-purple-500 via-violet-500 to-pink-500',
      bgGradient: 'from-purple-50/80 via-violet-50/60 to-pink-50/80',
      stats: '3x Faster Deployment',
      delay: 0.2
    },
    {
      icon: GitBranch,
      title: 'DevOps, MLOps & Intelligent Testing',
      description: 'Streamlined engineering with automated testing and CI/CD pipelines.',
      features: ['CI/CD Pipelines', 'Automated Testing', 'MLOps Implementation'],
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      bgGradient: 'from-emerald-50/80 via-green-50/60 to-teal-50/80',
      stats: '40% Cost Reduction',
      delay: 0.3
    },
    {
      icon: Server,
      title: 'Cloud-Native & Hyperscaler Engineering',
      description: 'Multi-cloud applications with serverless architectures and infrastructure optimization.',
      features: ['Multi-Cloud Expertise', 'Serverless Architecture', 'Infrastructure Optimization'],
      gradient: 'from-orange-500 via-amber-500 to-red-500',
      bgGradient: 'from-orange-50/80 via-amber-50/60 to-red-50/80',
      stats: '5x Scalability',
      delay: 0.4
    }
  ]

  const hardwareServices = [
    {
      icon: Cpu,
      title: 'Hardware Engineering & Qualification',
      description: 'Full-stack hardware engineering from design validation to production qualification.',
      features: ['Design Validation', 'Production Qualification', 'Performance Testing'],
      gradient: 'from-slate-600 via-gray-700 to-zinc-800',
      bgGradient: 'from-slate-50/90 via-gray-50/80 to-zinc-50/90',
      delay: 0.1
    },
    {
      icon: TestTube,
      title: 'Advanced Component Testing',
      description: 'Comprehensive testing of processors, memory, and storage under real-world conditions.',
      features: ['Processor Testing', 'Memory Validation', 'Storage Testing'],
      gradient: 'from-blue-600 via-indigo-600 to-blue-800',
      bgGradient: 'from-blue-50/90 via-indigo-50/80 to-blue-50/90',
      delay: 0.2
    },
    {
      icon: Wind,
      title: 'Environmental & Stress Testing',
      description: 'Rigorous environmental testing including thermal, vibration, and humidity analysis.',
      features: ['Thermal Analysis', 'Vibration Testing', 'Humidity Validation'],
      gradient: 'from-emerald-600 via-green-600 to-teal-700',
      bgGradient: 'from-emerald-50/90 via-green-50/80 to-teal-50/90',
      delay: 0.3
    },
    {
      icon: RefreshCw,
      title: 'Hardware Lifecycle Management',
      description: 'End-to-end management of hardware assets from procurement to decommissioning.',
      features: ['Asset Management', 'Lifecycle Planning', 'Sustainable Decommissioning'],
      gradient: 'from-purple-600 via-violet-600 to-purple-800',
      bgGradient: 'from-purple-50/90 via-violet-50/80 to-purple-50/90',
      delay: 0.4
    },
    {
      icon: Search,
      title: 'Failure Analysis & Investigation',
      description: 'Advanced diagnostic services for hardware failures and root-cause analysis.',
      features: ['Failure Diagnostics', 'Root-Cause Analysis', 'Corrective Actions'],
      gradient: 'from-rose-600 via-red-600 to-rose-800',
      bgGradient: 'from-rose-50/90 via-red-50/80 to-rose-50/90',
      delay: 0.5
    },
    {
      icon: Code,
      title: 'Firmware Deployment & Testing',
      description: 'Comprehensive firmware validation and cross-platform compatibility testing.',
      features: ['Firmware Validation', 'Deployment Automation', 'Cross-Platform Testing'],
      gradient: 'from-cyan-600 via-sky-600 to-cyan-800',
      bgGradient: 'from-cyan-50/90 via-sky-50/80 to-cyan-50/90',
      delay: 0.6
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <div className="min-h-screen bg-white pt-26">
      {/* Hero Section with Parallax */}
      <motion.section
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_49%,rgba(59,130,246,0.1)_50%,transparent_51%)] bg-[size:100px_100px] animate-grid-flow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              initial={{ x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
              animate={{
                y: ['0%', '100%'],
                x: [Math.random() * 20 - 10 + '%', Math.random() * 20 - 10 + '%']
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300 tracking-wider">FULL-STACK TECHNOLOGY ENGINEERING</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Enterprise-Grade
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              From AI-powered software development to mission-critical hardware validation —
              delivering reliability at scale for the world's most demanding enterprises.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

             
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.section>

      {/* Software Services Section */}
      <section className="relative py-32 bg-gradient-to-b from-white to-gray-50/30">
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_48%,rgba(59,130,246,0.03)_50%,transparent_52%)] bg-[size:200px_200px]" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <div className="inline-flex items-center gap-3 text-blue-600 mb-6">
                <Brain className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600/80">
                  AI & Software Engineering
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                Intelligent Software
                <span className="block text-blue-600">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                Enterprise applications reimagined with artificial intelligence, cloud-native architectures,
                and unparalleled reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {appServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 hover:border-blue-200 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <service.icon className="text-white" size={32} />
                      </div>
                      <span className="text-sm font-semibold text-blue-600 px-3 py-1 bg-blue-50 rounded-full">
                        {service.stats}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className={`px-4 py-2 bg-gradient-to-r ${service.bgGradient} text-gray-700 rounded-lg text-sm font-medium border border-gray-200/50 backdrop-blur-sm`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        Explore Solutions
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hardware Services Section */}
      <section className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-hidden">
        {/* Technical Background */}
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_49%,rgba(6,182,212,0.05)_50%,transparent_51%)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(6,182,212,0.15),transparent)]" />

        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuitPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M100,0 L100,200 M0,100 L200,100" stroke="rgba(6,182,212,0.3)" strokeWidth="0.5" fill="none" />
                <circle cx="100" cy="100" r="8" fill="rgba(6,182,212,0.1)" />
                <path d="M50,50 L150,150 M50,150 L150,50" stroke="rgba(6,182,212,0.2)" strokeWidth="0.3" strokeDasharray="2,2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuitPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <div className="inline-flex items-center gap-3 text-cyan-400 mb-6">
                <Chip className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  Hardware Validation & Engineering
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
                Mission-Critical
                <span className="block text-cyan-400">Hardware Excellence</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                Rigorous testing and validation ensuring reliability and performance for
                hyperscale infrastructure and enterprise systems.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {hardwareServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -6 }}
                  className="group relative bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/5 cursor-pointer overflow-hidden"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 blur transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <service.icon className="text-white" size={24} />
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:animate-pulse" />
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1.5 bg-slate-700/50 text-gray-300 rounded-lg text-xs font-medium border border-slate-600/30 group-hover:border-cyan-500/20 group-hover:text-cyan-100 transition-all duration-300 backdrop-blur-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>


                  </div>
                </motion.div>
              ))}
            </motion.div>

            
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.1)_50%,transparent_52%)] bg-[size:200px_200px] animate-shimmer" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center gap-2 text-white/80 mb-4">
                <span className="text-sm font-semibold uppercase tracking-wider">LET'S BUILD</span>
                <div className="w-8 h-px bg-white/30" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Transform Your Technology
                <br />
                <span className="text-cyan-200">Infrastructure Today</span>
              </h2>
              <p className="text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Partner with industry leaders to drive innovation, reliability, and scalability
                in your digital transformation journey.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group relative bg-white text-blue-600 px-12 py-5 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  Schedule Discovery Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>

             
            </motion.div>

           
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services