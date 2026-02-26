import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const scenes = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80',
    title: 'Mountain Majesty',
    location: 'Swiss Alps',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80',
    title: 'Forest Cathedral',
    location: 'Pacific Northwest',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=80',
    title: 'Horizon Line',
    location: 'Nordic Coast',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1400&q=80',
    title: 'Valley Vista',
    location: 'Colorado Range',
  },
];

export default function ScrollSyncedCarousel() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <div ref={containerRef} className="relative h-[500px] overflow-hidden">
      <motion.div style={{ x }} className="flex gap-6 h-full">
        {scenes.map((scene, i) => (
          <motion.div
            key={scene.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative min-w-[80vw] md:min-w-[600px] h-full rounded-2xl overflow-hidden group"
          >
            <img
              src={scene.image}
              alt={scene.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-2">
                  {scene.location}
                </p>
                <h4 className="text-white text-3xl md:text-4xl font-extralight">
                  {scene.title}
                </h4>
              </motion.div>
            </div>

            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-sm bg-white/5 flex items-center justify-center">
                <span className="text-white text-sm font-light">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[#666666] text-xs tracking-wider uppercase">Scroll to explore</p>
      </div>
    </div>
  );
}