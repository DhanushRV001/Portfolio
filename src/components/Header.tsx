import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Dhanush
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <a
                  href={item.href}
                  className="text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="rounded-full p-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <button
            onClick={toggleMenu}
            className="md:hidden rounded-full p-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatedMobileMenu isOpen={isMenuOpen} navItems={navItems} setIsMenuOpen={setIsMenuOpen} />
    </motion.header>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  navItems: { name: string; href: string }[];
  setIsMenuOpen: (isOpen: boolean) => void;
}

const AnimatedMobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems, setIsMenuOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        height: isOpen ? 'auto' : 0,
      }}
      transition={{ duration: 0.3 }}
      className="md:hidden overflow-hidden bg-white dark:bg-zinc-900 shadow-lg"
    >
      <nav className="container mx-auto px-4 py-2">
        <ul className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: navItems.indexOf(item) * 0.05 }}
            >
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Header;