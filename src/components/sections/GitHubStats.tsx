import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Code } from 'lucide-react';

const GitHubStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="github-stats" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-800/30">
      <div className="container mx-auto" ref={containerRef}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Coding Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            Here's a quick snapshot of my GitHub and LeetCode journey — showing my passion for building and problem-solving.
          </p>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-xl"
        >
          <a 
            href="https://github.com/DhanushRV001"
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg"
          >
            <img 
              src="https://github-readme-stats.vercel.app/api?username=DhanushRV001&show_icons=true&theme=github_dark&count_private=true&hide_border=true"
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </a>
        </motion.div>

        {/* GitHub Profile Button */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="https://github.com/DhanushRV001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-800 dark:bg-zinc-700 text-white hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors duration-300"
          >
            <Github size={18} />
            View GitHub Profile
          </motion.a>
        </div>

        {/* LeetCode Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">LeetCode Stats</h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6"
          >
            <img 
              src="https://leetcard.jacoblin.cool/Dhanush_R_V?theme=dark" 
              alt="Dhanush LeetCode Card"
              className="w-full rounded-lg"
            />
          </motion.div>

          <div className="mt-8 flex justify-center">
            <motion.a
              href="https://leetcode.com/Dhanush_R_V"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white hover:shadow-lg transition-all duration-300"
            >
              <Code size={18} />
              View LeetCode Profile
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
