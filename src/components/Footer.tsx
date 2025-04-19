import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-16 bg-zinc-100 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-700/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              Dhanush
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              Creating innovative digital experiences
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/DhanushRV001" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/dhanushrv66" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="https://leetcode.com" icon={<ExternalLink size={20} />} label="LeetCode" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            © {currentYear} Dhanush. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <a href="#" className="text-zinc-600 dark:text-zinc-400 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;