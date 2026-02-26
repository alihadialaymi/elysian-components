import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80',
    title: 'Desert Mirage',
    subtitle: 'Where light meets silence'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    title: 'Alpine Serenity',
    subtitle: 'Peaks touching the infinite'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
    title: 'Coastal Whispers',
    subtitle: 'Waves of tranquility'
  },
];

export default function InfiniteMirrorSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
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
    <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-8 rounded-lg"
            style={{
              transform: `scale(${1 - i * 0.08}) translateZ(${-i * 50}px)`,
              opacity: 0.3 - i * 0.1,
              border: '1px solid rgba(192, 144, 111, 0.2)',
              boxShadow: '0 0 40px rgba(192, 144, 111, 0.1)',
            }}
            animate={{
              opacity: [0.3 - i * 0.1, 0.4 - i * 0.1, 0.3 - i * 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative h-full w-full">
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
            <div className="relative h-full w-full">
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]/50" />
              
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 100px rgba(192, 144, 111, 0.15)',
                }}
                animate={{
                  boxShadow: [
                    'inset 0 0 100px rgba(192, 144, 111, 0.15)',
                    'inset 0 0 120px rgba(192, 144, 111, 0.25)',
                    'inset 0 0 100px rgba(192, 144, 111, 0.15)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <h4 className="text-white text-3xl md:text-5xl font-extralight mb-2 tracking-wide">
                    {slides[currentIndex].title}
                  </h4>
                  <p className="text-[#A0A0A0] text-sm tracking-[0.2em] uppercase">
                    {slides[currentIndex].subtitle}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
        <button
          onClick={() => paginate(-1)}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'w-8 bg-[#C0906F]' : 'w-1 bg-white/30'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => paginate(1)}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}