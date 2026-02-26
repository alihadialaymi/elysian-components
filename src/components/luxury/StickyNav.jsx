import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'tokens', label: 'Tokens' },
  { id: 'sliders', label: 'Sliders' },
  { id: 'carousels', label: 'Carousels' },
  { id: 'galleries', label: 'Galleries' },
  { id: 'video', label: 'Video' },
  { id: 'cards', label: 'Cards & Editorial' },
];

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState('tokens');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      const sections = categories.map(cat => ({
        id: cat.id,
        element: document.getElementById(cat.id)
      })).filter(s => s.element);

      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].element.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-700 ${
          isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C0906F] to-[#8B6B4F] flex items-center justify-center">
                <span className="text-white text-xs font-medium">LX</span>
              </div>
              <span className="text-white font-light tracking-wide">Luxury UI</span>
            </motion.div>
            
            <div className="flex items-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="relative px-4 py-2 group"
                >
                  <span className={`text-sm transition-colors duration-300 ${
                    activeSection === cat.id ? 'text-white' : 'text-[#666666] group-hover:text-[#A0A0A0]'
                  }`}>
                    {cat.label}
                  </span>
                  {activeSection === cat.id && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C0906F]"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="w-24" />
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5"
      >
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C0906F] to-[#8B6B4F] flex items-center justify-center">
              <span className="text-white text-[10px] font-medium">LX</span>
            </div>
            <span className="text-white text-sm font-light">Luxury UI</span>
          </div>
          
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-white"
          >
            <motion.div
              animate={{ rotate: isMobileOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-5 h-5"
            >
              <span className={`absolute left-0 w-5 h-px bg-white transition-all duration-300 ${
                isMobileOpen ? 'top-1/2 rotate-90' : 'top-1'
              }`} />
              <span className={`absolute left-0 top-1/2 w-5 h-px bg-white transition-opacity duration-300 ${
                isMobileOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute left-0 w-5 h-px bg-white transition-all duration-300 ${
                isMobileOpen ? 'top-1/2' : 'top-3'
              }`} />
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/5"
            >
              <div className="p-4 space-y-1">
                {categories.map((cat, i) => (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    onClick={() => scrollToSection(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 ${
                      activeSection === cat.id 
                        ? 'bg-[#C0906F]/10 text-[#C0906F]' 
                        : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}