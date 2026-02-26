import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    category: 'Architecture',
    title: 'The Art of Vertical Space',
    excerpt: 'Exploring how modern architects redefine urban landscapes through innovative structural design.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80',
    category: 'Design',
    title: 'Minimalism Redefined',
    excerpt: 'A journey through spaces where less becomes infinitely more, revealing beauty in restraint.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1200&q=80',
    category: 'Culture',
    title: 'Cities of Tomorrow',
    excerpt: 'Visionary perspectives on sustainable urban development and human-centered design.',
  },
];

export default function EditorialVerticalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction) => ({
      y: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  return (
    <div className="relative h-[500px] md:h-[550px] rounded-xl overflow-hidden bg-[#0A0A0A]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="relative h-[200px] md:h-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/50 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/80 md:hidden" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-6 left-6 md:top-8 md:left-8">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/5"
            >
              <span className="text-white text-lg md:text-2xl font-extralight">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
            </motion.div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center p-6 md:p-12 bg-[#0A0A0A]">
          {/* Parallax Background */}
          <motion.div
            className="absolute top-1/3 right-0 w-48 h-48 rounded-full bg-[#C0906F]/5 blur-3xl"
            style={{ translateY: '0px' }}
            whileInView={{ translateY: '-30px' }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <motion.p
                className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {slides[currentIndex].category}
              </motion.p>
              
              <motion.h3
                className="text-white text-2xl md:text-4xl font-light mb-4 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {slides[currentIndex].title}
              </motion.h3>
              
              <motion.p
                className="text-[#A0A0A0] text-sm md:text-base font-light leading-relaxed mb-8 max-w-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {slides[currentIndex].excerpt}
              </motion.p>
              
              <button className="group flex items-center gap-2 text-white text-sm">
                <span className="border-b border-transparent group-hover:border-[#C0906F] transition-colors duration-300">
                  Read Article
                </span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </button>
            </motion.div>
          </AnimatePresence>

          <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] transition-all duration-300"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            
            <div className="flex flex-col items-center gap-2 py-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`w-1 rounded-full transition-all duration-500 ${
                    i === currentIndex ? 'h-8 bg-[#C0906F]' : 'h-1 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => paginate(1)}
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] transition-all duration-300"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}