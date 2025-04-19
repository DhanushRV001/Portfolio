import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, ChevronLeft } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'Plant Disease Detection',
    description: 'Real-Time disease detection with product recommendations and religional chatbot.',
    image: 'https://www.wallpaperflare.com/static/901/957/108/nature-grass-plants-close-wallpaper.jpg',
    technologies: ['React', 'Python', 'YOLOv5', 'Flask', 'Dialogflow'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com',
    category:  'ai'
  },
  {
    id: 2,
    title: 'Women Safety System',
    description: 'Detects distress screams and sends real-time location alerts to emergency contacts, with a cancel option for false alarms.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.YbM_-OGbcHDoQCGgeaI9-QHaDt&pid=Api&rs=1&c=1&qlt=95&w=219&h=109',
    technologies: ['React', 'Web APIs', 'Tailwind CSS', 'HTML'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'web'
  },

  {
    id: 3,
    title: 'Multilingual chatbot',
    description: 'A chatbot helps to address the queries of Plant diseases in various religional languages.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.gDwlPpM7C8quBSQP1ZWjpwHaEK&pid=Api&rs=1&c=1&qlt=95&w=198&h=111',
    technologies: ['React', 'Dialogflow', 'HTML', 'Tailwind CSS'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'web'
  },

];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'ai', name: 'AI Projects' },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-800/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            Here are some of the projects I've worked on. Each project is a unique opportunity to solve problems and learn new skills.
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:shadow-md'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-600 dark:text-zinc-400">No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoLink: string;
    githubLink: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-500/40 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">{project.title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            Live Demo <ExternalLink size={16} className="ml-1" />
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Code <Github size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;