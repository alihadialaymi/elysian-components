import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80', title: 'Ocean Depths' },
  { id: 2, url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1400&q=80', title: 'Desert Light' },
  { id: 3, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80', title: 'Mountain Air' },
  { id: 4, url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=80', title: 'Sand Dunes' },
  { id: 5, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80', title: 'Forest Path' },
  { id: 6, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&q=80', title: 'Golden Hour' },
];

export default function MosaicGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const navigate = (direction) => {
    if (selectedIndex === null) return;
    const newIndex = (selectedIndex + direction + images.length) % images.length;
    setSelectedIndex(newIndex);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((image, i) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedIndex(i)}
            className={`relative rounded-lg overflow-hidden cursor-pointer group ${
              i === 0 ? 'md:col-span-2 md:row-span-2' : 'aspect-square'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <motion.div
              className="absolute inset-0 border-2 border-[#C0906F] opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm font-light">{image.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedIndex}
                    src={images[selectedIndex].url}
                    alt={images[selectedIndex].title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <h4 className="text-white text-2xl font-light">{images[selectedIndex].title}</h4>
                <p className="text-[#666666] text-sm mt-2">
                  {selectedIndex + 1} / {images.length}
                </p>
              </motion.div>

              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-[#0A0A0A]/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-[#0A0A0A]/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}