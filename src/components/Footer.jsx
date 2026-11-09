import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Muhammad-Ahtasham',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/muhammadahtasham',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:muhammadahtasham@mergestack.com',
      label: 'Email',
    },
    {
      icon: WhatsAppIcon,
      href: 'https://wa.me/+923076917988',
      label: 'WhatsApp',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/atiii_sham',
      label: 'Instagram',
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/AtiSham123/',
      label: 'Facebook',
    },
  ];

  return (
    <footer className="relative mt-12 md:pl-24 border-t border-blue-500/10 bg-dark-navy/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              MA
            </div>
            <p className="text-gray-400 text-sm">
              AI & Full-Stack Engineer crafting intelligent digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.2, y: -5 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass border border-blue-500/20 hover:border-blue-400 text-gray-400 hover:text-cyan-400 transition-all"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/10 pt-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400"
        >
          <p>
            © {currentYear} Muhammad Ahtasham. All rights reserved.
          </p>
          <p className="flex items-center gap-1 mt-4 sm:mt-0">
            Crafted with <Heart size={16} className="text-red-500" /> using React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
