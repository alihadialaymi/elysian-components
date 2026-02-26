import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const items = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    title: 'Light Study',
    year: '2024',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1511184059754-f72dbb2e8ab8?w=800&q=80',
    title: 'Form & Shadow',
    year: '2024',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    title: 'Texture',
    year: '2024',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=800&q=80',
    title: 'Geometry',
    year: '2024',
  },
];

export default function MagneticCursorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    cursorX.set(x * 0.1);
    cursorY.set(y * 0.1);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    cursorX.set(0);
    cursorY.set(0);
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => setActiveIndex(i)}
            className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group"
          >
            <motion.div
              style={{
                x: activeIndex === i ? cursorXSpring : 0,
                y: activeIndex === i ? cursorYSpring : 0,
              }}
              className="w-full h-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C0906F]/20 via-transparent to-transparent" />
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at center, transparent 40%, rgba(192, 144, 111, 0.1) 100%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: activeIndex === i ? 1 : 0,
                y: activeIndex === i ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#C0906F] text-xs mb-1">{item.year}</p>
              <h5 className="text-white text-lg font-light">{item.title}</h5>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}