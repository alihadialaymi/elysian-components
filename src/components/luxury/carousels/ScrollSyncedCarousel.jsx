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
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=80',
    title: 'Horizon Line',
    location: 'Nordic Coast',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1400&q=80',
    title: 'Valley Vista',
    location: 'Colorado Range',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80',
    title: 'Peak Serenity',
    location: 'Himalayan Range',
  },
];

export default function ScrollSyncedCarousel() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0.2, 0.8], ['10%', '-85%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={containerRef} 
      className="relative h-[600px] overflow-hidden rounded-2xl bg-[#0A0A0A]"
      style={{ opacity }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C0906F]/5 via-transparent to-transparent" />

      <motion.div style={{ x }} className="flex gap-6 h-full items-center px-6">
        {scenes.map((scene, i) => (
          <motion.div
            key={scene.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.03 }}
            className="relative min-w-[85vw] md:min-w-[650px] h-[500px] rounded-2xl overflow-hidden group flex-shrink-0"
          >
            <motion.img
              src={scene.image}
              alt={scene.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/30 to-transparent" />
            
            {/* Reflection sweep */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
              initial={false}
              animate={{
                background: [
                  'linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                  'linear-gradient(110deg, transparent 100%, rgba(255,255,255,0.2) 150%, transparent 200%)',
                ],
              }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2 }}
            />

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'radial-gradient(circle at center, rgba(192, 144, 111, 0.15) 0%, transparent 70%)',
              }}
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-[#C0906F]" />
                  <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase">
                    {scene.location}
                  </p>
                </div>
                <h4 className="text-white text-3xl md:text-5xl font-extralight tracking-tight">
                  {scene.title}
                </h4>
              </motion.div>
            </div>

            <div className="absolute top-6 right-6">
              <motion.div
                className="w-14 h-14 rounded-full border-2 border-[#C0906F]/30 backdrop-blur-md bg-white/5 flex items-center justify-center"
                whileHover={{ scale: 1.1, borderColor: 'rgba(192, 144, 111, 0.8)' }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[#C0906F] text-lg font-light">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>
            </div>

            {/* Border glow on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-[#C0906F]/0 pointer-events-none"
              whileHover={{ borderColor: 'rgba(192, 144, 111, 0.3)' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-[#666666] text-xs tracking-wider uppercase flex items-center gap-2">
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.span>
          Scroll to explore
        </p>
      </motion.div>
    </motion.div>
  );
}