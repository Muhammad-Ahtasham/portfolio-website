import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Zap, BarChart3 } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Sparkles,
      title: 'AI Application Development',
      description: 'Build AI-powered applications, integrate LLMs, create RAG systems, and develop intelligent agents.',
      features: ['LLM Integration', 'RAG Systems', 'AI Agents', 'Prompt Engineering'],
    },
    {
      icon: Cpu,
      title: 'Full-Stack Web Development',
      description: 'Create modern, scalable web applications with responsive design and optimal performance.',
      features: ['React/Next.js', 'Node.js APIs', 'Databases', 'Cloud Deployment'],
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Automate workflows with intelligent systems, integrate APIs, and streamline operations.',
      features: ['Workflow Automation', 'API Integration', 'Data Processing', 'System Optimization'],
    },
    {
      icon: BarChart3,
      title: 'ML & Computer Vision',
      description: 'Develop machine learning models for prediction, image analysis, and NLP solutions.',
      features: ['Model Development', 'Image Classification', 'NLP Solutions', 'Data Analysis'],
    },
  ];

  return (
    <section id="services" className="relative pt-12 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I offer comprehensive solutions tailored to bring your ideas to life with cutting-edge technology and intelligent design.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-6" />
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
                  className="group glass p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-fit mb-6 group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-all"
                  >
                    <Icon size={32} className="text-cyan-400" />
                  </motion.div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-cyan-400 uppercase">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, j) => (
                        <motion.span
                          key={j}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 transition-colors"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
