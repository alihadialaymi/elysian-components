import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&q=80',
    title: 'Solitude',
    artist: 'Emma Clarke',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80',
    title: 'Peaks',
    artist: 'James Wilson',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
    title: 'Summit',
    artist: 'Maria Santos',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80',
    title: 'Vista',
    artist: 'Alex Chen',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80',
    title: 'Forest',
    artist: 'Sophie Laurent',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80',
    title: 'Horizon',
    artist: 'David Park',
  },
];

export default function ReflectionGallery() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {images.map((image, i) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative cursor-pointer"
            onClick={() => setExpandedId(image.id)}
          >
            {/* Main Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <motion.img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7 }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shine sweep effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                initial={false}
                whileHover={{
                  background: [
                    'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                    'linear-gradient(120deg, transparent 100%, rgba(255,255,255,0.3) 150%, transparent 200%)',
                  ],
                }}
                transition={{ duration: 1.5 }}
              />
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-5"
              >
                <div className="backdrop-blur-md bg-[#0A0A0A]/60 rounded-lg p-4 border border-white/10">
                  <h5 className="text-white text-lg font-light mb-1">{image.title}</h5>
                  <p className="text-[#666666] text-xs">{image.artist}</p>
                </div>
              </motion.div>

              {/* Expand icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
              >
                <Maximize2 className="w-4 h-4 text-white" />
              </motion.div>

              {/* Border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
                whileHover={{ borderColor: 'rgba(192, 144, 111, 0.3)' }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Enhanced Reflection */}
            <div className="relative mt-3 h-24 overflow-hidden rounded-b-2xl">
              <motion.img
                src={image.url}
                alt={`${image.title} reflection`}
                className="w-full h-full object-cover"
                style={{
                  transform: 'scaleY(-1)',
                  filter: 'blur(4px)',
                }}
                animate={{
                  opacity: [0.25, 0.35, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/60 to-[#0A0A0A]" />
              
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'linear-gradient(to bottom, transparent 40%, rgba(192, 144, 111, 0.08))',
                    'linear-gradient(to bottom, transparent 40%, rgba(192, 144, 111, 0.15))',
                    'linear-gradient(to bottom, transparent 40%, rgba(192, 144, 111, 0.08))',
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expandedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setExpandedId(null)}
            className="fixed inset-0 bg-[#0A0A0A]/98 backdrop-blur-xl z-50 flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={images.find(img => img.id === expandedId)?.url}
              alt={images.find(img => img.id === expandedId)?.title}
              className="max-w-5xl max-h-[85vh] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}