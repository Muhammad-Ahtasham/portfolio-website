import React from 'react';
import { motion } from 'framer-motion';
import careerHistory from '../data/careerHistory.json';

const Experience = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Professional Experience
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          </motion.div>

          {/* Timeline */}
          <motion.div variants={containerVariants} className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-violet-500" />

            {/* Timeline items */}
            <div className="space-y-10">
              {careerHistory.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="relative pl-14 sm:pl-20">
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute left-0 sm:left-2 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-dark-bg flex items-center justify-center z-10"
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-cyan-400 font-semibold">{item.company}</p>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, j) => (
                        <motion.span
                          key={j}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 text-xs rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
