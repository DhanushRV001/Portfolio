import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Database, Server, Globe, Monitor } from 'lucide-react';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Java', level: 70 },
        { name: 'C', level: 75 },
        { name: 'Data Structures', level: 70 },
      ]
    },
    {
      id: 'other',
      title: 'Other Skills',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'Quick Learner', level: 80 },
        { name: 'Leadership', level: 95 },
        { name: 'Logical Thinker', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            Here are some of the technologies and skills I've acquired throughout my journey as a software developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500 dark:text-zinc-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;