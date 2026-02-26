import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';

const panoramas = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80',
    title: 'Alpine Ridge',
    location: 'Swiss Alps',
    description: 'Majestic peaks touching the clouds',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=80',
    title: 'Mountain Expanse',
    location: 'Himalayan Range',
    description: 'Endless horizons of natural wonder',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2000&q=80',
    title: 'Misty Valley',
    location: 'Scottish Highlands',
    description: 'Where earth meets sky in harmony',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&q=80',
    title: 'Forest Canopy',
    location: 'Pacific Northwest',
    description: 'Ancient trees reaching for light',
  },
];

export default function PanoramaGallery() {
  const constraintsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="relative">
      <div ref={constraintsRef} className="relative overflow-hidden rounded-2xl">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 40 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className={`flex gap-8 py-6 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          whileTap={{ cursor: 'grabbing' }}
        >
          {panoramas.map((panorama, i) => (
            <motion.div
              key={panorama.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(panorama.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative min-w-[90vw] md:min-w-[800px] h-[350px] md:h-[450px] rounded-2xl overflow-hidden group flex-shrink-0"
            >
              <motion.img
                src={panorama.url}
                alt={panorama.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredId === panorama.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.8 }}
                draggable={false}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/20 to-transparent" />
              
              {/* Animated light sweep */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: [
                    'linear-gradient(90deg, transparent 0%, rgba(192, 144, 111, 0.15) 50%, transparent 100%)',
                    'linear-gradient(90deg, transparent 100%, rgba(192, 144, 111, 0.15) 150%, transparent 200%)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === panorama.id ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  background: 'radial-gradient(circle at center, rgba(192, 144, 111, 0.2) 0%, transparent 70%)',
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-px bg-[#C0906F]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase">
                      {panorama.location}
                    </p>
                  </div>
                  
                  <h4 className="text-white text-3xl md:text-5xl font-extralight tracking-tight">
                    {panorama.title}
                  </h4>

                  <motion.p
                    className="text-[#A0A0A0] text-sm md:text-base font-light max-w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === panorama.id ? 1 : 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    {panorama.description}
                  </motion.p>
                </motion.div>
              </div>

              <div className="absolute top-6 right-6">
                <motion.div
                  className="backdrop-blur-md bg-white/5 rounded-full px-5 py-2.5 border border-white/20"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(192, 144, 111, 0.5)' }}
                >
                  <span className="text-white text-xs tracking-wider uppercase font-light">
                    Panorama
                  </span>
                </motion.div>
              </div>

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
                animate={{
                  borderColor: hoveredId === panorama.id ? 'rgba(192, 144, 111, 0.3)' : 'transparent',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex items-center justify-center gap-3">
          <motion.div
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <MoveHorizontal className="w-5 h-5 text-[#C0906F]" />
          </motion.div>
          <p className="text-[#666666] text-sm tracking-wider uppercase font-light">
            Drag to explore panoramas
          </p>
        </div>
      </motion.div>
    </div>
  );
}