import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side Content */}
          <motion.div variants={containerVariants}>
            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block glass-sm px-4 py-2 rounded-full mb-6 border border-cyan-500/30"
            >
              <span className="text-sm font-medium text-cyan-400">✨ Available for Freelance & Remote</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Building Intelligent
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg"
            >
              I'm an AI & Full-Stack Engineer building intelligent applications, AI-powered solutions, and scalable digital products that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-glow transition-all"
              >
                Explore My Work <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass border border-cyan-500/50 text-white font-semibold hover:border-cyan-400 transition-all"
              >
                Let's Work Together
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1Xse8S6Rtas2Q9FH01ZZ66Tl9bxbsa8-T/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass border border-violet-500/50 text-white font-semibold hover:border-violet-400 transition-all"
              >
                <Download size={20} /> Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Connect:</span>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="https://github.com/Muhammad-Ahtasham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass border border-blue-500/30 hover:border-blue-400 text-blue-400 hover:text-blue-300 transition-all"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="https://linkedin.com/in/muhammadahtasham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 transition-all"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="mailto:muhammadahtasham@mergestack.com"
                className="p-3 rounded-lg glass border border-violet-500/30 hover:border-violet-400 text-violet-400 hover:text-violet-300 transition-all"
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Visual */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            variants={containerVariants}
          >
            <motion.div
              className="relative w-full aspect-square max-w-md"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Floating cards with glassmorphism */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {/* Inner floating elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-24 h-24 rounded-xl glass border border-blue-500/30 backdrop-blur-xl"
                    style={{
                      left: `${50 + 60 * Math.cos((i / 3) * Math.PI * 2)}%`,
                      top: `${50 + 60 * Math.sin((i / 3) * Math.PI * 2)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      rotate: -360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-2xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {i === 0 ? 'AI' : i === 1 ? 'ML' : 'WEB'}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Center circle */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <div className="w-32 h-32 rounded-2xl glass border border-cyan-400/50 flex items-center justify-center shadow-glow">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      MA
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Full-Stack</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-blue-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
