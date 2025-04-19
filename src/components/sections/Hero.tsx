import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const textArray = ["Frontend Developer", "Logical Thinker", "Problem Solver", "Leadership"];
  
  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentText = textArray[textIndex];
      
      if (isDeleting) {
        if (typedTextRef.current) {
          typedTextRef.current.textContent = currentText.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 50; // Faster when deleting
      } else {
        if (typedTextRef.current) {
          typedTextRef.current.textContent = currentText.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 100; // Normal speed when typing
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typingSpeed = 500; // Pause before typing next text
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/4 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-3xl transform -translate-x-1/2 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Dhanush</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl mb-8 text-zinc-700 dark:text-zinc-300"
          >
            I'm a <span ref={typedTextRef} className="text-blue-500"></span><span className="text-blue-500 animate-blink">|</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-zinc-600 dark:text-zinc-400 mb-10 text-lg"
          >
            Welcome to my portfolio! I specialize in creating modern web applications and solving complex problems with elegant solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download="Dhanush_Resume.pdf"
              className="px-8 py-3 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-zinc-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;