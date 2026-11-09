import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Zap, Layers } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const expertise = [
    {
      icon: Brain,
      title: 'AI Engineering',
      description: 'Building intelligent systems using LLMs, RAG, and generative AI technologies.',
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Creating scalable web applications with React, Node.js, and modern frameworks.',
    },
    {
      icon: Zap,
      title: 'Generative AI',
      description: 'Leveraging OpenAI, LangChain, and advanced AI models for automation.',
    },
    {
      icon: Layers,
      title: 'Backend Architecture',
      description: 'Designing microservices, REST APIs, and scalable database solutions.',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Introduction */}
            <motion.div variants={containerVariants}>
              <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-6">
                Transforming Ideas into Intelligent Solutions
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 mb-6 leading-relaxed"
              >
                I'm Muhammad Ahtasham, an AI & Full-Stack Engineer with a passion for building cutting-edge digital experiences. I specialize in combining AI/ML with scalable web architecture to create intelligent, user-centric applications.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 mb-8 leading-relaxed"
              >
                With hands-on experience in Generative AI, RAG systems, LLM integrations, and full-stack development, I help businesses and startups leverage technology to solve complex problems and scale their operations.
              </motion.p>

              <motion.div variants={itemVariants}>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-glow transition-all"
                >
                  Get In Touch
                </button>
              </motion.div>
            </motion.div>

            {/* Right - Expertise Cards */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -5, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
                    className="glass p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all cursor-pointer"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-fit mb-4">
                      <Icon size={24} className="text-cyan-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
