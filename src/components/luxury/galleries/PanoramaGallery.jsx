import React, { useRef, useState } from 'react';
import { motion, useDragControls } from 'framer-motion';

const panoramas = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80',
    title: 'Alpine Ridge',
    location: 'Swiss Alps',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80',
    title: 'Coastal Horizon',
    location: 'Mediterranean',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2000&q=80',
    title: 'Desert Vista',
    location: 'Sahara',
  },
];

export default function PanoramaGallery() {
  const constraintsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="relative">
      <div ref={constraintsRef} className="relative overflow-hidden rounded-xl">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="flex gap-6 cursor-grab active:cursor-grabbing py-4"
        >
          {panoramas.map((panorama, i) => (
            <motion.div
              key={panorama.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative min-w-[90vw] md:min-w-[700px] h-[300px] md:h-[400px] rounded-xl overflow-hidden group flex-shrink-0"
            >
              <img
                src={panorama.url}
                alt={panorama.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent" />
              
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: [
                    'linear-gradient(90deg, transparent 0%, rgba(192, 144, 111, 0.1) 50%, transparent 100%)',
                    'linear-gradient(90deg, transparent 100%, rgba(192, 144, 111, 0.1) 150%, transparent 200%)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-2">
                    {panorama.location}
                  </p>
                  <h4 className="text-white text-3xl font-extralight">
                    {panorama.title}
                  </h4>
                </motion.div>
              </div>

              <div className="absolute top-6 right-6">
                <div className="backdrop-blur-sm bg-white/5 rounded-full px-4 py-2 border border-white/10">
                  <span className="text-white text-xs tracking-wider uppercase">
                    Panorama
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-[#666666] text-xs tracking-wider uppercase flex items-center justify-center gap-2">
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ←
          </motion.span>
          Drag to explore
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            →
          </motion.span>
        </p>
      </div>
    </div>
  );
}