import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';
import myImage from '../assets/me.jpg';

const HeroSection = () => {
  // Typewriter effect state
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Parallax effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Titles with expanded variety
  const titles = [
    'Software Engineer',
    'Full Stack Developer', 
    'Data Engineer',
    'Problem Solver'
  ];

  // Parallax mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(current => {
        if (isDeleting) {
          setTypingSpeed(75); // Faster when deleting
          return fullText.substring(0, current.length - 1);
        } else {
          setTypingSpeed(75); // Slower when typing
          return fullText.substring(0, current.length + 1);
        }
      });

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const SocialLink = ({ href, icon, label }) => {
    const handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.open(href, '_blank', 'noopener,noreferrer');
    };
  
    return (
      <a 
        href={href}
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg 
                   hover:bg-white/20 transition-all duration-300 text-white cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {icon}
        <span>{label}</span>
      </a>
    );
  };

  // Parallax transform styles
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
    transition: 'transform 0.5s ease-out'
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Advanced Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-deep-purple-800 to-dark-blue-900 opacity-95"
        style={{
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          transition: {
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />

      {/* Geometric Particle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => {
          const size = Math.random() * 20 + 10;
          const shape = Math.random() > 0.5 ? 'circle' : 'polygon';
          
          return (
            <motion.div
              key={i}
              className={`absolute ${shape === 'circle' ? 'rounded-full' : 'polygon'} 
                          bg-white/10 backdrop-blur-sm`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: shape === 'circle' ? '50%' : 'none',
                clipPath: shape === 'polygon' 
                  ? 'polygon(50% 0%, 0% 100%, 100% 100%)' 
                  : 'none'
              }}
              animate={{
                x: `${Math.random() * 200 - 100}px`,
                y: `${Math.random() * 200 - 100}px`,
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: "easeInOut"
                }
              }}
            />
          );
        })}
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-grid-white/5 opacity-50"></div>

      {/* Content */}
      <motion.section 
        id="hero" 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image with Parallax and Motion */}
        <motion.div 
          className="mb-8 relative"
          style={parallaxStyle}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={myImage}
              alt="Mahitha Dodda"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            />
          </div>
          {/* Decorative circle */}
          <motion.div 
            className="absolute -inset-2 border-2 border-blue-300 rounded-full opacity-70"
            animate={{
              rotate: 360,
              transition: { 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
          />
        </motion.div>

        {/* Text Content */}
                  <div className="space-y-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-purple-100 mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi, I'm Mahitha
          </motion.h1>

          <div className="h-8 md:h-10">
            <motion.p 
              className="text-xl md:text-2xl text-purple-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I'm a{' '}
              <span className="text-white font-semibold">
                {text}
                <span className="animate-blink">|</span>
              </span>
            </motion.p>
          </div>

          <motion.p 
            className="text-purple-100 max-w-2xl mx-auto text-lg leading-relaxed mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
             {/* Add professional summary */}
           
          </motion.p>

          {/* Social Links with Expanded Options */}
          <motion.div 
            className="flex justify-center gap-4 mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <SocialLink 
              href="https://www.linkedin.com/in/mahitha9201/"
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
              color="#0077B5"
            />
            <SocialLink 
              href="mailto:mahithadodda921@gmail.com"
              icon={<Mail className="w-5 h-5" />}
              label="Email"
              color="#EA4335"
            />
            <SocialLink 
              href="https://github.com/MahithaDodda921"
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
              color="#333"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator with Motion */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-blue-200 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-blue-200 rounded-full animate-scroll"></div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;