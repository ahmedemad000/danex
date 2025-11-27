import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Play, ArrowRight, Sparkles, Zap, Brain, Cpu, Shield, Globe,
  Currency, Fingerprint, RefreshCw, TrendingUp, Clock, Users,
  Server, TestTube, Wind, Search, Code, Settings, Cloud, GitBranch,
  CheckCircle, Award, Target, BarChart3, Database, Workflow,
  Rocket, Star, ChevronRight
} from 'lucide-react'

const floatingAnimation = `
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}
@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(90deg); }
}
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
`

const HeroSection = () => {
  const stats = [
    { value: "99.9%", label: "Uptime Reliability" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "24/7", label: "Global Support" },
    { value: "ISO 9001", label: "Certified Quality" }
  ]

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(#e5e7eb 1px, transparent 1px),
              linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-200 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-200 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-cyan-200 rounded-full blur-xl animate-pulse delay-500"></div>

        {/* Gradient Blobs */}
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-gradient-to-r from-cyan-100 to-emerald-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-4 py-3 shadow-lg"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                Enterprise Technology Partner
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Build The Future
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  With Intelligence
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Danex Technologies delivers elite engineering solutions that integrate
                <span className="font-semibold text-gray-900"> AI-powered software </span>
                with
                <span className="font-semibold text-gray-900"> mission-critical hardware validation</span>.
                Transform your technology infrastructure with reliability and innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <Rocket className="w-5 h-5" />
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="group bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-3">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image Showcase */}









<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative"
>
  {/* Modern Card Grid */}
  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 p-8 shadow-2xl">
    
    {/* Main Feature Card */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white mb-6 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Full-Stack Engineering</h3>
          <p className="text-blue-100">AI Software + Hardware Validation</p>
        </div>
        <Rocket className="w-12 h-12 text-white opacity-80" />
      </div>
    </motion.div>

    {/* Service Cards Grid */}
    <div className="grid grid-cols-2 gap-4">
      {/* AI Card */}
      <motion.div
        whileHover={{ y: -5, scale: 1.05 }}
        className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100 cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">AI Engineering</h4>
            <p className="text-gray-600 text-xs">Machine Learning</p>
          </div>
        </div>
      </motion.div>

      {/* Hardware Card */}
      <motion.div
        whileHover={{ y: -5, scale: 1.05 }}
        className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100 cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">Hardware</h4>
            <p className="text-gray-600 text-xs">Validation & Testing</p>
          </div>
        </div>
      </motion.div>

      {/* Cloud Card */}
      <motion.div
        whileHover={{ y: -5, scale: 1.05 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">Cloud</h4>
            <p className="text-gray-600 text-xs">Native Solutions</p>
          </div>
        </div>
      </motion.div>

      {/* DevOps Card */}
      <motion.div
        whileHover={{ y: -5, scale: 1.05 }}
        className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100 cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <GitBranch className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">DevOps</h4>
            <p className="text-gray-600 text-xs">CI/CD & MLOps</p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Stats Row */}
    <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
      {[
        { value: '50+', label: 'Clients' },
        { value: '99.9%', label: 'Uptime' },
        { value: '24/7', label: 'Support' }
      ].map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-lg font-bold text-gray-900">{stat.value}</div>
          <div className="text-xs text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Floating Elements */}
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-8 -left-8 w-16 h-16 bg-white rounded-2xl shadow-2xl border border-gray-200 flex items-center justify-center"
  >
    <Shield className="w-8 h-8 text-green-500" />
  </motion.div>

  <motion.div
    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    className="absolute -bottom-8 -right-8 w-16 h-16 bg-white rounded-2xl shadow-2xl border border-gray-200 flex items-center justify-center"
  >
    <Zap className="w-8 h-8 text-yellow-500" />
  </motion.div>
</motion.div>





        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Rest of the components remain exactly the same...
const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 0,
      icon: Brain,
      title: 'AI-Enabled Engineering',
      description: 'We design, build, and scale enterprise applications enhanced with AI intelligence and automation capabilities.',
      details: [
        'Machine Learning Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics Implementation'
      ],
      color: 'from-blue-500 to-cyan-500',
      metrics: '40% faster development cycles'
    },
    {
      id: 1,
      icon: Server,
      title: 'Hardware Validation',
      description: 'Comprehensive testing and validation services for mission-critical hardware infrastructure.',
      details: [
        'Component Performance Testing',
        'Environmental Stress Analysis',
        'Firmware Compatibility',
        'Rack-Level Integration'
      ],
      color: 'from-gray-600 to-gray-800',
      metrics: '99.9% hardware reliability'
    },
    {
      id: 2,
      icon: Cloud,
      title: 'Cloud-Native Engineering',
      description: 'Build and operate applications across Azure, AWS, and GCP with cloud-native architectures.',
      details: [
        'Multi-Cloud Architecture',
        'Serverless Computing',
        'Container Orchestration',
        'Infrastructure as Code'
      ],
      color: 'from-green-500 to-emerald-500',
      metrics: '60% cost reduction'
    },
    {
      id: 3,
      icon: GitBranch,
      title: 'DevOps & MLOps',
      description: 'Streamline engineering with modern DevOps and MLOps practices and intelligent testing.',
      details: [
        'CI/CD Pipelines',
        'Automated Testing',
        'MLOps Implementation',
        'Quality Assurance'
      ],
      color: 'from-purple-500 to-pink-500',
      metrics: '3x faster deployment'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
            <Target className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            End-to-End Engineering Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered software development to mission-critical hardware validation -
            comprehensive technology solutions for global enterprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${activeFeature === index
                  ? 'bg-white shadow-2xl border-2 border-blue-500/20'
                  : 'bg-white/50 hover:bg-white/80 hover:shadow-lg border-2 border-transparent'
                  }`}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${activeFeature === index
                    ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}>
                    <feature.icon size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold transition-colors duration-300 mb-2 ${activeFeature === index ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${activeFeature === index ? 'text-gray-700' : 'text-gray-500'
                      }`}>
                      {feature.description}
                    </p>
                    {activeFeature === index && (
                      <div className="mt-3 flex items-center gap-2 text-sm text-green-600 font-medium">
                        <TrendingUp size={16} />
                        {feature.metrics}
                      </div>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {features[activeFeature].title}
                    </h3>
                    <p className="text-gray-600">
                      {features[activeFeature].description}
                    </p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${features[activeFeature].color} rounded-xl flex items-center justify-center shadow-lg`}>
                    {React.createElement(features[activeFeature].icon, { className: "text-white", size: 24 })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features[activeFeature].details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

const ServicesShowcase = () => {
  const softwareServices = [
    {
      icon: Cloud,
      title: 'Application & AI-Enabled Engineering',
      description: 'Design, build, and scale enterprise applications enhanced with AI intelligence and automation capabilities.',
      features: ['AI-Powered Applications', 'Enterprise Scale', 'Automation Focus'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Digital Transformation Powered by AI/ML',
      description: 'End-to-end transformation modernizing systems, automating processes, and embedding AI/ML models.',
      features: ['Legacy Modernization', 'AI/ML Pipelines', 'Workflow Optimization'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: GitBranch,
      title: 'DevOps, MLOps & Intelligent Testing',
      description: 'Streamline engineering with modern DevOps and MLOps practices and AI-assisted testing frameworks.',
      features: ['CI/CD Pipelines', 'Automated Testing', 'MLOps Implementation'],
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const hardwareServices = [
    {
      icon: Cpu,
      title: 'Hardware Engineering & Qualification',
      description: 'Full-stack hardware engineering support from design validation to production qualification.',
      features: ['Design Validation', 'Production Qualification', 'Performance Testing'],
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: TestTube,
      title: 'Advanced Component Testing',
      description: 'Comprehensive testing of next-generation CPUs, GPUs, SSDs, and networking components.',
      features: ['Processor Testing', 'Memory Validation', 'Storage Testing'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Search,
      title: 'Failure Analysis & Investigation',
      description: 'Advanced diagnostic services to identify hardware failures and perform root-cause analysis.',
      features: ['Failure Diagnostics', 'Root-Cause Analysis', 'Corrective Actions'],
      gradient: 'from-red-600 to-red-800'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Engineering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging cutting-edge AI software development with rigorous hardware validation for enterprise-scale solutions.
          </p>
        </motion.div>

        {/* Software Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI & Software Engineering</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softwareServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hardware Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hardware & Validation Engineering</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hardwareServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const CompanyStory = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-cyan-400 mb-4">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering Excellence from Dubai to the World
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6">Bridging AI Software & Hardware Validation</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Danex Technologies was founded with a vision to bridge the critical gap between
                  cutting-edge AI software development and mission-critical hardware validation.
                  Based in the global hub of Dubai, we serve enterprises and hyperscalers worldwide.
                </p>
                <p>
                  Our unique position allows us to deliver comprehensive engineering solutions
                  that span from intelligent software applications to rigorous hardware qualification,
                  ensuring our clients receive end-to-end excellence in technology implementation.
                </p>
                <p>
                  We are 100% remote and live by our core values of Ownership & Freedom Culture,
                  believing that we achieve our best performance when we enjoy absolute freedom
                  and take control of our own areas.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                  <div className="text-sm text-gray-400">Expert Engineers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-sm text-gray-400">Remote Team</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Global Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h4 className="text-2xl font-bold mb-6 text-cyan-400">Our Mission & Vision</h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-semibold mb-3">🚀 Our Mission</h5>
                  <p className="text-gray-300">
                    Build the easiest and most powerful engineering platform that integrates
                    AI-powered software development with mission-critical hardware validation.
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-3">🎯 Our Vision</h5>
                  <p className="text-gray-300">
                    Help passionate enterprises build their own sustainable technology infrastructure
                    through elite engineering solutions and innovation.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <h5 className="text-lg font-semibold mb-4 text-cyan-400">Core Values</h5>
                  <div className="space-y-3">
                    {[
                      'Ownership & Freedom Culture',
                      'Excellence in Engineering',
                      'Innovation & Learning',
                      'Global Collaboration',
                      'Client Success Focus'
                    ].map((value, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{floatingAnimation}</style>

      {/* Updated Hero Section with Images */}
      <HeroSection />

      {/* Interactive Features */}
      <InteractiveFeatures />

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Company Story */}
      <CompanyStory />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join global enterprises that trust Danex Technologies for their
              most critical engineering challenges. Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home