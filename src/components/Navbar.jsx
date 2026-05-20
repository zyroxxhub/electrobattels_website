import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'classes', label: 'Classes' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'footer', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (id, e) => {
    e.preventDefault();
    closeMenu();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full z-40 transition-all duration-500 ease-[0.16,1,0.3,1] bg-[#E8D9B8] py-3 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick('top', e)} className="flex items-center group -ml-1 sm:ml-0">
            <img 
              src="/logo-bird.png" 
              alt="Electrobattles Logo" 
              className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                document.getElementById('fallback-logo-text').style.display = 'block';
              }}
            />
            <span id="fallback-logo-text" className="font-serif italic text-xl sm:text-2xl font-bold tracking-wider text-studio-charcoal hidden">
              Electrobattles
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 font-serif text-xs tracking-widest uppercase">
              {navLinks.map((link) => (
                <li key={link.id} className="relative group">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(link.id, e)}
                    className="transition-colors duration-500 ease-[0.16,1,0.3,1] py-1.5 text-studio-charcoal/70 hover:text-studio-gold hover:font-bold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-studio-charcoal hover:text-studio-gold transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 lg:hidden bg-[#F5ECD7]/80 backdrop-blur-lg flex flex-col justify-center items-center px-6 pt-24"
          >
            <ul className="flex flex-col space-y-6 text-center font-serif text-base tracking-widest uppercase mb-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(link.id, e)}
                    className="block py-2 transition-colors duration-300 text-studio-charcoal hover:text-studio-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
