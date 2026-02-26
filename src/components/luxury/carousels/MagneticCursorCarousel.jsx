import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const items = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    title: 'Light Study',
    year: '2024',
    artist: 'Emma Wilson',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1511184059754-f72dbb2e8ab8?w=800&q=80',
    title: 'Form & Shadow',
    year: '2024',
    artist: 'Marcus Chen',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    title: 'Texture',
    year: '2024',
    artist: 'Sofia Rodriguez',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=800&q=80',
    title: 'Geometry',
    year: '2024',
    artist: 'David Park',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80',
    title: 'Minimalism',
    year: '2024',
    artist: 'Anna Laurent',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    title: 'Balance',
    year: '2024',
    artist: 'James Kim',
  },
];

export default function MagneticCursorCarousel() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    cursorX.set(x * 0.15);
    cursorY.set(y * 0.15);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    cursorX.set(0);
    cursorY.set(0);
    setActiveIndex(null);
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true, margin: "-50px" }}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => setActiveIndex(i)}
            onTouchEnd={() => setActiveIndex(null)}
            className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group"
          >
            <motion.div
              style={{
                x: activeIndex === i ? cursorXSpring : 0,
                y: activeIndex === i ? cursorYSpring : 0,
              }}
              className="w-full h-full"
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: activeIndex === i ? 1.15 : 1,
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Magnetic glow effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ 
                opacity: activeIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C0906F]/30 via-transparent to-transparent" />
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(192, 144, 111, 0.2) 0%, transparent 60%)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Shine sweep on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
              initial={false}
              animate={activeIndex === i ? { 
                background: [
                  'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
                  'linear-gradient(120deg, transparent 100%, rgba(255,255,255,0.25) 150%, transparent 200%)',
                ]
              } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
            />

            {/* Content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeIndex === i ? 1 : 0,
                y: activeIndex === i ? 0 : 20,
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="backdrop-blur-md bg-[#0A0A0A]/50 rounded-lg p-4 border border-[#C0906F]/20">
                <p className="text-[#C0906F] text-xs mb-1 tracking-wider">{item.year}</p>
                <h5 className="text-white text-xl font-light mb-1">{item.title}</h5>
                <p className="text-[#666666] text-xs">{item.artist}</p>
              </div>
            </motion.div>

            {/* Border highlight */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-transparent pointer-events-none"
              animate={{
                borderColor: activeIndex === i ? 'rgba(192, 144, 111, 0.4)' : 'transparent',
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}