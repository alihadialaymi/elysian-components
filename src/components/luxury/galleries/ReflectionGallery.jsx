import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&q=80',
    title: 'Solitude',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80',
    title: 'Peaks',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
    title: 'Summit',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80',
    title: 'Vista',
  },
];

export default function ReflectionGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {images.map((image, i) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* Main Image */}
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <motion.img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#C0906F]/0 via-transparent to-[#C0906F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <p className="text-white text-sm font-light">{image.title}</p>
            </motion.div>
          </div>

          {/* Reflection */}
          <div className="relative mt-2 h-20 overflow-hidden rounded-b-xl">
            <motion.img
              src={image.url}
              alt={`${image.title} reflection`}
              className="w-full h-full object-cover opacity-30"
              style={{
                transform: 'scaleY(-1)',
                filter: 'blur(3px)',
              }}
              animate={{
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
            
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(to bottom, transparent, rgba(192, 144, 111, 0.05))',
                  'linear-gradient(to bottom, transparent, rgba(192, 144, 111, 0.1))',
                  'linear-gradient(to bottom, transparent, rgba(192, 144, 111, 0.05))',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}