import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1400&q=80',
    title: 'Emerald Canopy',
    subtitle: 'Nature\'s cathedral',
    cta: 'Explore',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&q=80',
    title: 'Golden Horizons',
    subtitle: 'Where earth meets sky',
    cta: 'Discover',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1400&q=80',
    title: 'Sandstone Dreams',
    subtitle: 'Ancient whispers',
    cta: 'Journey',
  },
];

export default function CinematicFullscreenSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightSweep, setLightSweep] = useState(false);

  const nextSlide = useCallback(() => {
    setLightSweep(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setLightSweep(false);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative h-[450px] md:h-[550px] rounded-xl overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.1,
          }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-[#0A0A0A]/20" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
        }}
        animate={{
          x: lightSweep ? ['100%', '-100%'] : '-100%',
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-lg"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4"
              >
                {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </motion.p>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white text-4xl md:text-6xl font-extralight mb-4 leading-tight"
              >
                {slides[currentIndex].title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[#A0A0A0] text-lg font-light mb-8"
              >
                {slides[currentIndex].subtitle}
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-white"
              >
                <span className="text-sm tracking-wider">{slides[currentIndex].cta}</span>
                <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#C0906F] group-hover:bg-[#C0906F]/10 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <motion.div
          key={currentIndex}
          className="h-full bg-[#C0906F]"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
        />
      </div>

      <div className="absolute bottom-8 right-8 flex items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="group relative"
          >
            <span className={`block w-12 h-px transition-all duration-500 ${
              i === currentIndex ? 'bg-[#C0906F]' : 'bg-white/30 group-hover:bg-white/50'
            }`} />
            <span className={`absolute -bottom-4 left-0 text-xs transition-opacity duration-300 ${
              i === currentIndex ? 'text-[#C0906F] opacity-100' : 'text-white/50 opacity-0 group-hover:opacity-100'
            }`}>
              {String(i + 1).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}