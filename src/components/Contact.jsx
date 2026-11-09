import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create mailto link
    const mailtoLink = `mailto:muhammadahtasham@mergestack.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muhammadahtasham@mergestack.com',
      href: 'mailto:muhammadahtasham@mergestack.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Muhammad Ahtasham',
      href: 'https://linkedin.com/in/muhammadahtasham',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Muhammad-Ahtasham',
      href: 'https://github.com/Muhammad-Ahtasham',
      color: 'from-violet-500 to-blue-500',
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Have an idea?
              </span>
            </h2>
            <p className="text-2xl font-semibold mb-6">
              Let's build something <span className="text-cyan-400">intelligent</span>
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={containerVariants}>
              {/* Quick Links */}
              <motion.div variants={itemVariants} className="space-y-4 mb-12">
                <p className="text-gray-300 text-lg mb-6">Get in touch with me through any of these channels:</p>
                {contactLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 glass rounded-lg border border-blue-500/20 hover:border-blue-400/50 transition-all group"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color} bg-opacity-20`}>
                        <Icon size={24} className="text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{link.label}</p>
                        <p className="font-semibold group-hover:text-cyan-400 transition-colors">{link.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Additional Info */}
              <motion.div variants={itemVariants} className="glass p-6 rounded-lg border border-blue-500/20">
                <p className="text-gray-300 mb-4">
                  <strong>Availability:</strong> I'm currently available for freelance projects, remote opportunities, and collaborations. Let me know your requirements, and I'll get back to you within 24 hours.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={containerVariants}>
              <motion.form
                variants={containerVariants}
                onSubmit={handleSubmit}
                className="glass p-8 rounded-2xl border border-blue-500/20"
              >
                {/* Name */}
                <motion.div variants={itemVariants} className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-blue-500/20 focus:border-blue-400 focus:outline-none text-white placeholder-gray-500 transition-colors"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants} className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-blue-500/20 focus:border-blue-400 focus:outline-none text-white placeholder-gray-500 transition-colors"
                  />
                </motion.div>

                {/* Subject */}
                <motion.div variants={itemVariants} className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-blue-500/20 focus:border-blue-400 focus:outline-none text-white placeholder-gray-500 transition-colors"
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-blue-500/20 focus:border-blue-400 focus:outline-none text-white placeholder-gray-500 transition-colors resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-glow transition-all"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-sm"
                  >
                    ✓ Email client opened! Please complete sending the email.
                  </motion.div>
                )}
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
