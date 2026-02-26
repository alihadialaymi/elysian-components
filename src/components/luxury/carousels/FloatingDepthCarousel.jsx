import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&q=80',
    tag: 'Experience',
    title: 'Elevated Living',
    description: 'Where architecture meets aspiration',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1520483601560-4b59c9db46f7?w=900&q=80',
    tag: 'Design',
    title: 'Spatial Harmony',
    description: 'Creating balance through form',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900&q=80',
    tag: 'Vision',
    title: 'Future Forward',
    description: 'Innovation in every detail',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=80',
    tag: 'Heritage',
    title: 'Timeless Craft',
    description: 'Honoring tradition with modern vision',
  },
];

export default function FloatingDepthCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (offset) => {
    const absOffset = Math.abs(offset);
    return {
      scale: 1 - absOffset * 0.12,
      opacity: 1 - absOffset * 0.4,
      z: -absOffset * 60,
      blur: absOffset * 3,
    };
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((p) => (p - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative h-[550px] flex items-center justify-center py-8">
      <div className="relative w-full max-w-lg mx-auto" style={{ perspective: '1500px' }}>
        {cards.map((card, i) => {
          const offset = (i - currentIndex + cards.length) % cards.length;
          const adjustedOffset = offset > cards.length / 2 ? offset - cards.length : offset;
          const style = getCardStyle(adjustedOffset);

          return (
            <motion.div
              key={card.id}
              className="absolute inset-0"
              animate={{
                scale: style.scale,
                opacity: style.opacity,
                x: adjustedOffset * 50,
                rotateY: adjustedOffset * -12,
                filter: `blur(${style.blur}px)`,
                zIndex: cards.length - Math.abs(adjustedOffset),
              }}
              transition={{ 
                duration: 0.7, 
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/40 to-transparent" />
                
                {/* Active card shine effect */}
                {adjustedOffset === 0 && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                      background: [
                        'linear-gradient(135deg, transparent 0%, rgba(192, 144, 111, 0.2) 50%, transparent 100%)',
                        'linear-gradient(135deg, transparent 100%, rgba(192, 144, 111, 0.2) 150%, transparent 200%)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}

                {/* Active card glow */}
                {adjustedOffset === 0 && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                      boxShadow: [
                        '0 0 60px rgba(192, 144, 111, 0.3)',
                        '0 0 100px rgba(192, 144, 111, 0.5)',
                        '0 0 60px rgba(192, 144, 111, 0.3)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}
                
                <AnimatePresence mode="wait">
                  {adjustedOffset === 0 && (
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute bottom-0 left-0 right-0 p-8 space-y-4"
                    >
                      <motion.div
                        className="inline-block px-4 py-1.5 rounded-full bg-[#C0906F]/20 backdrop-blur-md border border-[#C0906F]/30"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase">
                          {card.tag}
                        </p>
                      </motion.div>
                      
                      <motion.h4
                        className="text-white text-3xl md:text-4xl font-extralight"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        {card.title}
                      </motion.h4>
                      
                      <motion.p
                        className="text-[#A0A0A0] text-sm font-light"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                      >
                        {card.description}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] hover:bg-[#C0906F]/10 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
        
        <div className="flex items-center gap-2">
          {cards.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              whileHover={{ scale: 1.2 }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'w-10 bg-[#C0906F]' : 'w-1.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] hover:bg-[#C0906F]/10 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}