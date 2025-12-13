import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Cpu, Cloud, Server, Code, Zap, Database, Shield, 
  CheckCircle, Cpu as CpuIcon, CloudLightning, ServerCog,
  Sparkles, Lock, Rocket, Terminal
} from 'lucide-react';
import Logo from './Logo';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing core systems...');
  const [isComplete, setIsComplete] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [completedModules, setCompletedModules] = useState([]);

  // Loading phases with different durations and characteristics
  const loadingPhases = [
    {
      id: 0,
      name: 'Boot Sequence',
      duration: 800,
      targetProgress: 20,
      icon: ServerCog,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      messages: [
        'Initializing kernel...',
        'Loading system modules...',
        'Checking hardware integrity...'
      ]
    },
    {
      id: 1,
      name: 'AI Engine',
      duration: 1200,
      targetProgress: 45,
      icon: Brain,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      messages: [
        'Starting neural networks...',
        'Loading AI models...',
        'Optimizing algorithms...'
      ]
    },
    {
      id: 2,
      name: 'Cloud Services',
      duration: 1000,
      targetProgress: 70,
      icon: CloudLightning,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      messages: [
        'Connecting to cloud...',
        'Syncing data centers...',
        'Establishing secure links...'
      ]
    },
    {
      id: 3,
      name: 'Security Suite',
      duration: 900,
      targetProgress: 90,
      icon: Shield,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      messages: [
        'Encrypting connections...',
        'Validating certificates...',
        'Deploying firewalls...'
      ]
    },
    {
      id: 4,
      name: 'Final Launch',
      duration: 500,
      targetProgress: 100,
      icon: Rocket,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      messages: [
        'Optimizing performance...',
        'Running final checks...',
        'Ready for launch!'
      ]
    }
  ];

  // System modules that get checked off
  const systemModules = [
    { id: 'core', name: 'Core Systems', icon: CpuIcon },
    { id: 'ai', name: 'AI Engine', icon: Brain },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud },
    { id: 'db', name: 'Database Cluster', icon: Database },
    { id: 'security', name: 'Security Protocol', icon: Lock },
    { id: 'api', name: 'API Gateway', icon: Terminal }
  ];

  // Update loading text based on progress and phase
  useEffect(() => {
    const currentPhase = loadingPhases.find(phase => 
      progress >= phase.targetProgress - 25 && progress < phase.targetProgress
    ) || loadingPhases[0];

    setActivePhase(currentPhase.id);

    // Cycle through phase messages based on progress within phase
    const phaseProgress = (progress - (currentPhase.targetProgress - 25)) / 25;
    const messageIndex = Math.min(
      Math.floor(phaseProgress * currentPhase.messages.length),
      currentPhase.messages.length - 1
    );

    setLoadingText(currentPhase.messages[messageIndex]);

    // Mark modules as completed based on progress
    const modulesToComplete = Math.floor((progress / 100) * systemModules.length);
    const newCompletedModules = systemModules.slice(0, modulesToComplete).map(m => m.id);
    setCompletedModules(newCompletedModules);
  }, [progress]);

  // Simulate loading with smooth easing
  useEffect(() => {
    const startTime = Date.now();
    const totalDuration = 3500; // Total loading time in ms

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / totalDuration, 1);

      // Cubic easing function for smooth acceleration/deceleration
      const easeOutCubic = 1 - Math.pow(1 - t, 3);
      const newProgress = Math.floor(easeOutCubic * 100);

      setProgress(newProgress);

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        // Add a small delay at 100% before completing
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onLoadingComplete, 400);
        }, 500);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Cleanup if component unmounts
    };
  }, [onLoadingComplete]);

  // Floating particles in background
  const Particle = ({ delay, size, duration }) => (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
      style={{
        width: size,
        height: size,
      }}
      initial={{
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        opacity: 0,
      }}
      animate={{
        x: [null, Math.random() * 100 - 50],
        y: [null, Math.random() * 100 - 50],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
    />
  );

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950/90 to-cyan-950/90"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Floating particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <Particle
                key={i}
                delay={i * 0.3}
                size={Math.random() * 60 + 20}
                duration={Math.random() * 10 + 10}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 py-8">
            {/* Logo section */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <Logo
                variant="loading"
                animate={true}
                isLink={false}
                className="scale-125" // 25% larger
              />
              <motion.div
                className="mt-4 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                <span className="text-sm text-blue-300/80 font-medium tracking-wider">
                  ENTERPRISE TECHNOLOGY
                </span>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Progress container */}
            <div className="w-full max-w-2xl space-y-8">
              {/* System modules status */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
              >
                {systemModules.map((module) => {
                  const isCompleted = completedModules.includes(module.id);
                  const Icon = module.icon;
                  
                  return (
                    <motion.div
                      key={module.id}
                      className={`flex flex-col items-center p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                        isCompleted
                          ? 'bg-white/10 border-blue-500/30'
                          : 'bg-white/5 border-white/10'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`mb-2 p-2 rounded-lg ${isCompleted ? 'bg-blue-500/20' : 'bg-white/10'}`}>
                        <Icon className={`w-5 h-5 ${isCompleted ? 'text-blue-400' : 'text-gray-400'}`} />
                      </div>
                      <span className={`text-xs font-medium ${isCompleted ? 'text-blue-300' : 'text-gray-400'}`}>
                        {module.name}
                      </span>
                      {isCompleted && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="mt-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Progress bar with phase indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                {/* Current phase indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${loadingPhases[activePhase].bgColor}`}>
                      {React.createElement(loadingPhases[activePhase].icon, {
                        className: `${loadingPhases[activePhase].color} w-5 h-5`
                      })}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {loadingPhases[activePhase].name}
                      </h3>
                      <p className="text-sm text-blue-300/80">
                        {loadingText}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {Math.round(progress)}%
                    </div>
                    <div className="text-xs text-gray-400">
                      Phase {activePhase + 1} of {loadingPhases.length}
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative">
                  {/* Background track */}
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                    {/* Glowing progress fill */}
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 relative"
                      style={{ width: `${progress}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 blur-lg" />
                    </motion.div>
                  </div>

                  {/* Phase markers */}
                  <div className="flex justify-between mt-2 px-1">
                    {loadingPhases.map((phase) => (
                      <div
                        key={phase.id}
                        className={`flex flex-col items-center ${
                          phase.id <= activePhase ? 'opacity-100' : 'opacity-40'
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full mb-1 ${
                          phase.id <= activePhase
                            ? 'bg-blue-500 ring-4 ring-blue-500/30'
                            : 'bg-white/20'
                        }`} />
                        <span className="text-xs text-gray-400">
                          {phase.targetProgress}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10"
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-white">
                    {Math.floor(progress / 20) * 2 + 3}
                  </div>
                  <div className="text-xs text-gray-400">Modules Active</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">
                    {Math.floor(progress / 10) * 50 + 125}
                  </div>
                  <div className="text-xs text-gray-400">Requests/sec</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">
                    {progress > 50 ? '99.9%' : `${progress + 49}%`}
                  </div>
                  <div className="text-xs text-gray-400">System Uptime</div>
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            >
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">
                  Secured Connection • AI-Powered Infrastructure
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-400">Live</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                © {new Date().getFullYear()} Danex Technologies • All systems encrypted
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;