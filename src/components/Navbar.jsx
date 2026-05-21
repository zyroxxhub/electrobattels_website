import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { id: 'top',     label: 'Home' },
  { id: 'about',   label: 'Philosophy' },
  { id: 'classes', label: 'Disciplines' },
  { id: 'reviews', label: 'Testimonials' },
  { id: 'footer',  label: 'Contact' },
];

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    // When mobile menu is open, prevent background scrolling
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-luxury-black/85 backdrop-blur-md border-b ${
          scrolled ? 'border-luxury-border shadow-sm' : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 md:h-16 flex items-center justify-between">
          {/* Logo - Minimalist Typographic */}
          <a href="#" onClick={(e) => nav('top', e)} className="flex items-center group">
            <span className="font-serif text-lg md:text-xl tracking-widest text-luxury-white uppercase font-light group-hover:text-luxury-gold transition-colors duration-500">
              Electrobattles
            </span>
          </a>
 
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-10">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => nav(l.id, e)}
                    className="text-editorial-caption link-editorial"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
 
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-luxury-white hover:text-luxury-gold transition-colors duration-500"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6 stroke-[1]" /> : <Menu className="w-6 h-6 stroke-[1]" />}
          </button>
        </div>
      </motion.header>
 
      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col justify-center items-center bg-luxury-black"
          >
            <ul className="flex flex-col items-center gap-10 font-serif text-3xl font-light text-luxury-white">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => nav(l.id, e)}
                    className="hover:text-luxury-gold transition-colors duration-500 block"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
 
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-16"
            >

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
