import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const artworks = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=80',
    title: 'Ethereal Study I',
    artist: 'Contemporary Collection',
    year: '2024',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=1200&q=80',
    title: 'Minimal Forms',
    artist: 'Modern Series',
    year: '2024',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&q=80',
    title: 'Abstract Vision',
    artist: 'Digital Archive',
    year: '2024',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=1200&q=80',
    title: 'Color Theory',
    artist: 'Studio Works',
    year: '2024',
  },
];

export default function MuseumLightbox() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {artworks.map((artwork, i) => (
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group relative aspect-[4/5] cursor-pointer"
            onClick={() => setSelectedIndex(i)}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#141414]">
              <img
                src={artwork.url}
                alt={artwork.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
              />
              
              <motion.div
                className="absolute inset-0 border border-[#C0906F] opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/20 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="w-12 h-12 rounded-full bg-[#C0906F]/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ZoomIn className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="mt-3"
            >
              <p className="text-white text-sm font-light">{artwork.title}</p>
              <p className="text-[#666666] text-xs mt-1">{artwork.artist}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#0A0A0A] z-50 flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl max-h-[80vh] p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={artworks[selectedIndex].url}
                alt={artworks[selectedIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: '0 0 100px rgba(192, 144, 111, 0.2)',
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
            >
              <h4 className="text-white text-2xl font-extralight mb-2">
                {artworks[selectedIndex].title}
              </h4>
              <p className="text-[#A0A0A0] text-sm">
                {artworks[selectedIndex].artist} · {artworks[selectedIndex].year}
              </p>
            </motion.div>

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] hover:bg-[#C0906F]/10 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {artworks.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === selectedIndex ? 'w-8 bg-[#C0906F]' : 'w-1 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}