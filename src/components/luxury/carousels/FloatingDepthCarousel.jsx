import React, { useState } from 'react';
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
];

export default function FloatingDepthCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardStyle = (offset) => {
    const absOffset = Math.abs(offset);
    return {
      scale: 1 - absOffset * 0.1,
      opacity: 1 - absOffset * 0.3,
      z: -absOffset * 50,
      filter: `blur(${absOffset * 2}px)`,
    };
  };

  const next = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + cards.length) % cards.length);

  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <div className="relative w-full max-w-md mx-auto" style={{ perspective: '1000px' }}>
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
                x: adjustedOffset * 40,
                rotateY: adjustedOffset * -10,
                filter: style.filter,
                zIndex: cards.length - Math.abs(adjustedOffset),
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                
                {adjustedOffset === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 p-8"
                  >
                    <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-3">
                      {card.tag}
                    </p>
                    <h4 className="text-white text-3xl font-extralight mb-2">
                      {card.title}
                    </h4>
                    <p className="text-[#A0A0A0] text-sm font-light">
                      {card.description}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'w-8 bg-[#C0906F]' : 'w-1 bg-white/30'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}