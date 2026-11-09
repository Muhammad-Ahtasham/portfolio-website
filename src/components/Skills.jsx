import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'FastAPI', 'REST APIs'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'AI & Machine Learning',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'Computer Vision', 'NLP'],
      color: 'from-violet-500 to-blue-500',
    },
    {
      title: 'Generative AI',
      skills: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'AI Agents', 'Vector Databases'],
      color: 'from-blue-500 to-violet-500',
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector DBs', 'Firebase', 'Weaviate'],
      color: 'from-green-500 to-cyan-500',
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'Netlify', 'Vercel', 'CI/CD'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
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
                Technical Skills
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and frameworks I use to build intelligent solutions.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-6" />
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 0 25px rgba(59, 130, 246, 0.3)' }}
                className="group glass p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all"
              >
                {/* Category Title with gradient */}
                <motion.h3
                  className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </motion.h3>

                {/* Skills Tags */}
                <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={j}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
