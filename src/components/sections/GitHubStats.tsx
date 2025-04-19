import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Code, FileCode, GitPullRequest, Star } from 'lucide-react';

const GitHubStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // These would typically come from an API call to GitHub
  const stats = [
    { icon: <FileCode className="w-6 h-6" />, title: 'Repositories', value: 2, color: 'from-blue-500 to-cyan-400' },
    { icon: <Code className="w-6 h-6" />, title: 'Contributions', value: 2, color: 'from-purple-500 to-pink-500' },
    { icon: <GitPullRequest className="w-6 h-6" />, title: 'Pull Requests', value: 0, color: 'from-green-500 to-emerald-400' },
    { icon: <Star className="w-6 h-6" />, title: 'Stars Received', value: 0, color: 'from-amber-500 to-orange-400' },
  ];

  // LeetCode badges
  const leetCodeBadges = [
    { name: 'LinkedList', level: 'Gold', solved: 11, total: 81 },
    { name: 'Recursion', level: 'Silver', solved: 6, total: 47 },
    { name: 'Counting Sort', level: 'Bronze', solved: 1, total: 11 },
    { name: 'Total Problems', level: 'Gold', solved: 55, total: 3521 },
  ];

  return (
    <section id="github-stats" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-800/30">
      <div className="container mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Coding Stats</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            Check out my GitHub contributions and LeetCode achievements, showcasing my coding journey and problem-solving skills.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">GitHub Statistics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 text-white`}>
                  {stat.icon}
                </div>
                <h4 className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-1">{stat.title}</h4>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>

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
                src={`https://github-readme-stats.vercel.app/api?username=DhanushRV001&show_icons=true&theme=${isInView ? 'dark' : 'dark'}&hide_border=true&count_private=true`} 
                alt="GitHub Stats" 
                className="w-full"
              />
            </a>
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">LeetCode Badges</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leetCodeBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full ${getBadgeColor(badge.level)} flex items-center justify-center text-white`}>
                      <span className="text-xl font-bold">{badge.level[0]}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-center text-zinc-700 dark:text-zinc-300 mb-2">{badge.name}</h4>
                  <div className="text-center mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeTextColor(badge.level)}`}>
                      {badge.level}
                    </span>
                  </div>
                  <div className="text-center text-zinc-600 dark:text-zinc-400">
                    <p>{badge.solved} / {badge.total} problems</p>
                  </div>
                  <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full mt-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${(badge.solved / badge.total) * 100}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full ${getBadgeProgressColor(badge.level)}`}
                    ></motion.div>
                  </div>
                </div>

                <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10 ${getBadgeColor(badge.level)}`}></div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <motion.a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:shadow-lg transition-all duration-300"
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

function getBadgeColor(level: string): string {
  switch (level.toLowerCase()) {
    case 'gold':
      return 'bg-gradient-to-r from-amber-500 to-yellow-400';
    case 'silver':
      return 'bg-gradient-to-r from-zinc-400 to-slate-300';
    case 'bronze':
      return 'bg-gradient-to-r from-amber-700 to-amber-600';
    default:
      return 'bg-gradient-to-r from-blue-500 to-cyan-400';
  }
}

function getBadgeTextColor(level: string): string {
  switch (level.toLowerCase()) {
    case 'gold':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
    case 'silver':
      return 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300';
    case 'bronze':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
    default:
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
  }
}

function getBadgeProgressColor(level: string): string {
  switch (level.toLowerCase()) {
    case 'gold':
      return 'bg-gradient-to-r from-amber-500 to-yellow-400';
    case 'silver':
      return 'bg-gradient-to-r from-zinc-400 to-slate-300';
    case 'bronze':
      return 'bg-gradient-to-r from-amber-700 to-amber-600';
    default:
      return 'bg-gradient-to-r from-blue-500 to-cyan-400';
  }
}

export default GitHubStats;