import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Cpu, Cloud, TestTube, Server, Rocket, Shield, Zap, Globe, Users, Star, Target, BookOpen } from 'lucide-react'

const About = () => {
  const navigate = useNavigate()

  // Stats data for the prototype
  const stats = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      value: "3.5",
      label: "Years Experience"
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: "23",
      label: "Project Challenge"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "830+",
      label: "Positive Reviews"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "100K",
      label: "Trusted Students"
    }
  ]

  // Your existing services data remains the same...
  const softwareServices = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Application & AI-Enabled Engineering",
      description: "We design, build, and scale enterprise applications enhanced with AI intelligence and automation. Our teams integrate smart features, predictive capabilities, and workflow automation to help organizations transform faster and operate smarter."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Transformation Powered by AI/ML",
      description: "We deliver end-to-end transformation—modernizing systems, automating processes, and embedding AI/ML models to drive real business impact. From workflow intelligence to advanced analytics, we help enterprises evolve into AI-ready organizations."
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "DevOps, MLOps & Intelligent Software Testing",
      description: "We streamline engineering with modern DevOps and MLOps practices. Our intelligent testing frameworks use AI-assisted automation to accelerate QA, improve quality, and reduce release time. CI/CD pipelines ensure secure, reliable, and continuous delivery."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud-Native & Hyperscaler Engineering",
      description: "Our teams build and operate applications across Azure, AWS, and GCP, integrating cloud-native AI services and toolchains. We work seamlessly with ISVs and hyperscalers to deploy scalable, resilient, and future-ready solutions."
    }
  ]

  const hardwareServices = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Hardware Engineering & Qualification Services",
      description: "We deliver full-stack hardware engineering support for hyperscalers and enterprise environments — from early prototypes to production-ready systems. Our teams perform deep validation, accelerated testing, and rigorous investigations."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Advanced Component Testing & Validation",
      description: "We perform end-to-end testing for next-generation CPUs, GPUs, SSDs, NICs, memory modules, and power systems. Our validation ensures every component meets strict performance, security, and compatibility expectations."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Failure Analysis & Root-Cause Investigation",
      description: "Our engineers perform deep investigations on hardware faults, firmware issues, and system instabilities. We identify root causes and provide clear corrective actions to improve quality and reduce downtime."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Firmware Deployment & Compatibility Testing",
      description: "We handle secure firmware flashing, version validation, regression testing, and compatibility checks across devices, racks, and configurations — ensuring stable and secure system performance."
    }
  ]

  // Navigation handlers
  const navigateToServices = () => navigate('/services')
  const navigateToContact = () => navigate('/contact')
  const navigateToPartnership = () => navigate('/partnership')
  const navigateToConsultation = () => navigate('/consultation')
  const navigateToCaseStudies = () => navigate('/case-studies')
  
  // Service detail navigation
  const navigateToServiceDetail = (serviceType) => {
    navigate(`/services/${serviceType}`)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* How It Started Section - New Prototype */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header Section */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-blue-600 font-semibold text-lg tracking-wider uppercase">
                  How It Started
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight"
              >
                Our Dream is<br />
                <span className="text-blue-600">Global Learning<br />Transformation</span>
              </motion.h2>
            </div>

            {/* Story Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-xl text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Kawruh was founded by Robert Anderson, a passionate lifelong learner, and Maria Sanchez, a visionary educator.</span> Their shared dream was to create a digital haven of knowledge accessible to all.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  United by their belief in the transformational power of education, they embarked on a journey to build 'Kawruh.' With relentless dedication, they gathered a team of experts and launched this innovative platform, creating a global community of eager learners, all connected by the desire to explore, learn, and grow.
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full border-2 border-white"></div>
                    <div className="w-12 h-12 bg-green-600 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold text-gray-900">Robert Anderson & Maria Sanchez</div>
                    <div>Founders, Kawruh</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="flex justify-center mb-3">
                          <div className="p-2 bg-white/20 rounded-lg">
                            {stat.icon}
                          </div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-blue-100 text-sm font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-20"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your existing sections follow below */}
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 text-blue-300 mb-6">
              <Globe size={24} />
              <span className="text-lg font-medium">Dubai • Global Enterprise Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Bridging AI Software &<br />
              <span className="text-blue-400">Hardware Validation</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Danex Technologies delivers elite engineering solutions that integrate cutting-edge AI software 
              with mission-critical hardware validation for global enterprises and hyperscalers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={navigateToServices}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105"
              >
                Explore Our Services
              </button>
              <button 
                onClick={navigateToContact}
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400/10 transition-colors duration-300 cursor-pointer transform hover:scale-105"
              >
                Contact Our Team
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rest of your existing sections remain exactly the same */}
      {/* AI & Software Engineering Section */}
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
                AI-Enabled Software Engineering
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building intelligent enterprise solutions with cutting-edge AI/ML capabilities 
                and cloud-native architectures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {softwareServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => navigateToServiceDetail('software-engineering')}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:scale-105"
                >
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hardware Engineering Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hardware & Firmware Engineering
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive hardware validation, qualification, and lifecycle management 
                for enterprise and hyperscale environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {hardwareServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => navigateToServiceDetail('hardware-engineering')}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:scale-105"
                >
                  <div className="text-gray-700 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Engineering Excellence from Dubai to the World
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <button 
                onClick={navigateToPartnership}
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 cursor-pointer transform hover:scale-105"
              >
                Partner With Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Technology Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI-enabled software and hardware validation expertise can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={navigateToConsultation}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer transform hover:scale-105"
              >
                Schedule a Consultation
              </button>
              <button 
                onClick={navigateToCaseStudies}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 cursor-pointer transform hover:scale-105"
              >
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About