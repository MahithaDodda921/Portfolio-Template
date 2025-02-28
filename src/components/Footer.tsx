import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Mail, 
  Code, 
  Copyright 
} from 'lucide-react';
const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:mahithadodda921@gmail.com";
  };
const Footer = () => {
    const socialLinks = [
        {
          icon: <Linkedin className="w-6 h-6" />,
          href: "https://www.linkedin.com/in/mahitha9201/",
          name: "LinkedIn"
        },
        {
          icon: <Github className="w-6 h-6" />,
          href: "https://github.com/MahithaDodda921",
          name: "GitHub"
        },
        {
          icon: <Mail className="w-6 h-6" />,
          href: "mailto:mahithadodda921@gmail.com", // Added subject
          name: "Email"
        }
      ];

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Code className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Mahitha Dodda</h3>
            </div>
            <p className="text-gray-300">
              Full-stack developer and data engineer passionate about creating 
              innovative solutions and solving complex technical challenges.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                key={index}
                href={social.href}
                onClick={social.name === 'Email' ? handleEmailClick : undefined}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all"
              >
                {social.icon}
              </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-white/10 mt-8 pt-6 text-center flex items-center justify-center gap-2"
        >
          <Copyright className="w-5 h-5 text-gray-400" />
          <p className="text-gray-400">
            2024 Mahitha Dodda. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;