import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Cpu, Cloud, TestTube, Server, Rocket, Shield, Zap, Globe, Users, Star, Target, BookOpen, ArrowRight } from 'lucide-react'

const About = () => {
  const navigate = useNavigate()

  
  

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 text-blue-600 mb-6">
              <Globe className="w-6 h-6" />
              <span className="font-semibold text-lg">Dubai • Global Enterprise Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Bridging AI Software &<br />
              <span className="text-blue-600">Hardware Validation</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Danex Technologies delivers elite engineering solutions that integrate cutting-edge AI software
              with mission-critical hardware validation for global enterprises and hyperscalers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/services')}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-3 group cursor-pointer shadow-lg hover:shadow-xl"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

     

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Powering Enterprise<br />
                <span className="text-blue-600">Digital Transformation Through Technology</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in delivering end-to-end technology solutions that bridge intelligent software engineering with robust hardware infrastructure.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <p className="text-xl text-gray-700 leading-relaxed">
                  With deep expertise in both software intelligence and hardware engineering, we provide integrated solutions that ensure your technology stack performs optimally at every layer. From cloud-native AI applications to rigorous hardware qualifications, we deliver reliability, scalability, and innovation across the entire technology lifecycle.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'AI-Enabled Engineering', color: 'bg-blue-600' },
                    { label: 'Intelligent Software Testing', color: 'bg-cyan-600' },
                    { label: 'Hardware Qualification', color: 'bg-indigo-600' },
                    { label: 'Cloud-Native Development', color: 'bg-sky-600' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 ${item.color} rounded-full`} />
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8 text-center">Our Service Pillars</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: "🚀", title: "AI & Software", desc: "Intelligent applications, DevOps & testing" },
                      { icon: "⚙️", title: "Hardware", desc: "Component validation & qualification" },
                      { icon: "☁️", title: "Cloud", desc: "Hyperscaler & ISV integration" },
                      { icon: "🔄", title: "Lifecycle", desc: "End-to-end technology management" }
                    ].map((pillar, index) => (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-3">
                          <div className="p-3 bg-white/10 rounded-lg text-2xl backdrop-blur-sm">
                            {pillar.icon}
                          </div>
                        </div>
                        <div className="font-bold mb-1">{pillar.title}</div>
                        <div className="text-blue-100 text-sm">{pillar.desc}</div>
                      </div>
                    ))}
                  </div>

                
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
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
                  onClick={() => navigate('/services')}
                  className="bg-gradient-to-br from-white to-blue-50/30 p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl cursor-pointer group"
                >
                  <div className="text-blue-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
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
                  onClick={() => navigate('/services')}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl cursor-pointer group"
                >
                  <div className="text-gray-700 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
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
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-blue-600" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Engineering Excellence from Dubai to the World
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-12">
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

            <button
              onClick={() => navigate('/contact')}
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center gap-3 mx-auto group cursor-pointer"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

    
    </div>
  )
}

export default About