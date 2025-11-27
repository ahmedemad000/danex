import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Cpu, Cloud, Server, Code, Zap, Database, Shield } from 'lucide-react'

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const [showPulse, setShowPulse] = useState(false)

    // Floating icons with different properties
    const floatingIcons = [
        { icon: Brain, size: 40, delay: 0, duration: 8, color: "text-purple-500" },
        { icon: Cpu, size: 36, delay: 1, duration: 10, color: "text-blue-500" },
        { icon: Cloud, size: 44, delay: 2, duration: 12, color: "text-cyan-500" },
        { icon: Server, size: 38, delay: 3, duration: 9, color: "text-green-500" },
        { icon: Code, size: 42, delay: 4, duration: 11, color: "text-orange-500" },
        { icon: Zap, size: 36, delay: 5, duration: 7, color: "text-yellow-500" },
        { icon: Database, size: 40, delay: 6, duration: 13, color: "text-indigo-500" },
        { icon: Shield, size: 38, delay: 7, duration: 10, color: "text-red-500" }
    ]

    useEffect(() => {
        const stages = [
            { end: 25, speed: 200, message: "Loading core modules..." },
            { end: 50, speed: 300, message: "Initializing AI systems..." },
            { end: 75, speed: 400, message: "Preparing interface..." },
            { end: 100, speed: 500, message: "Almost ready..." }
        ]

        let currentStage = 0
        const timer = setInterval(() => {
            setProgress(prev => {
                const stage = stages[currentStage]
                const increment = Math.random() * 5 + 2

                if (prev >= stage.end) {
                    currentStage++
                    if (currentStage >= stages.length) {
                        clearInterval(timer)
                        setShowPulse(true)
                        setTimeout(() => {
                            setIsComplete(true)
                            setTimeout(() => {
                                onLoadingComplete()
                            }, 800)
                        }, 1000)
                        return 100
                    }
                }

                return Math.min(prev + increment, stage.end)
            })
        }, stages[currentStage].speed)

        return () => clearInterval(timer)
    }, [onLoadingComplete])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            opacity: 0,
            scale: 1.1,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    }

    const logoVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    }

    const pulseVariants = {
        initial: { scale: 1, opacity: 1 },
        animate: {
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    // Floating animation for icons
    const floatingAnimation = {
        animate: (custom) => ({
            y: [0, -30, 0],
            x: [0, Math.sin(custom.delay) * 20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            transition: {
                duration: custom.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: custom.delay
            }
        })
    }

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-cyan-50 z-50 flex items-center justify-center overflow-hidden"
                >
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                        {/* Subtle Gradient Orbs */}
                        <motion.div
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                x: [0, -100, 0],
                                y: [0, 50, 0],
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                                delay: 10
                            }}
                            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl"
                        />

                        {/* Subtle Grid Pattern */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `
                                    linear-gradient(#e5e7eb 1px, transparent 1px),
                                    linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
                                `,
                                backgroundSize: '50px 50px',
                            }}
                        />

                        {/* Floating Spinning Icons */}
                        {floatingIcons.map((iconData, index) => (
                            <motion.div
                                key={index}
                                custom={iconData}
                                variants={floatingAnimation}
                                animate="animate"
                                className={`absolute ${iconData.color} opacity-60`}
                                style={{
                                    left: `${15 + (index * 10) % 70}%`,
                                    top: `${20 + (index * 7) % 60}%`,
                                }}
                            >
                                <iconData.icon size={iconData.size} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 text-center space-y-12">
                        {/* Main Logo with Pulse Effect */}
                        <motion.div
                            variants={logoVariants}
                            className="relative"
                        >
                            {showPulse && (
                                <motion.div
                                    variants={pulseVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute inset-0 bg-blue-200/40 rounded-full blur-xl -z-10"
                                />
                            )}

                            <motion.h1
                                className="text-7xl md:text-9xl font-black text-gray-900 mb-6 tracking-tighter"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                style={{
                                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                DANEX
                            </motion.h1>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                                className="h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 transform origin-left mx-auto max-w-md shadow-lg"
                            />

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                className="text-2xl text-gray-600 font-light tracking-widest uppercase mt-6"
                            >
                                ENGINEERING INTELLIGENCE
                            </motion.p>
                        </motion.div>
                        
                    </div>

                    {/* Bottom Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center space-y-2"
                    >
                        <div className="text-gray-500 text-sm font-light bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                            🔒 Securing connection to global infrastructure
                        </div>
                        <div className="text-gray-400 text-xs">
                            © 2024 Danex Technologies • All systems encrypted
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default LoadingScreen