import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Mail, MapPin, Calendar, Download } from 'lucide-react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={containerRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex justify-center lg:justify-end"
          >
            <motion.div 
              variants={itemVariants}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full transform -translate-x-4 -translate-y-4"></div>
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden border-4 border-white dark:border-zinc-700">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-4"
            >
              Hello, I'm Dhanush
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-zinc-600 dark:text-zinc-400 mb-6"
            >
              I'm a passionate software developer with expertise in building modern web applications. 
              With a strong foundation in computer science and a keen eye for design, I strive to create 
              elegant solutions that solve real-world problems.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-zinc-600 dark:text-zinc-400 mb-6"
            >
              My journey in software development began during my college years, and since then, 
              I've been constantly learning and improving my skills. I am ready to work with cutting-edge 
              technologies and am always excited to take on new challenges.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              <AboutDetail icon={<User size={18} />} label="Name" value="Dhanush R V" />
              <AboutDetail icon={<Mail size={18} />} label="Email" value="dhanushrv66@gmail.com" />
              <AboutDetail icon={<MapPin size={18} />} label="Location" value="Kovilpatti, India" />
              <AboutDetail icon={<Calendar size={18} />} label="Experience" value="Currently Studying" />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <a
                href="/resume.pdf"
                download="Dhanush_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface AboutDetailProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const AboutDetail: React.FC<AboutDetailProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
        {icon}
      </div>
      <div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
};

export default About;