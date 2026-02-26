import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    name: 'Essence',
    price: '$420',
    detail: 'Titanium finish',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
    name: 'Precision',
    price: '$680',
    detail: 'Ceramic body',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80',
    name: 'Aura',
    price: '$340',
    detail: 'Glass blend',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    name: 'Vision',
    price: '$520',
    detail: 'Polarized lens',
  },
];

export default function MinimalProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative py-8">
      <div className="relative h-[300px] md:h-[400px] mb-8 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-[#C0906F]/20 blur-3xl scale-75" />
            
            <div className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#141414] p-8">
              <img
                src={products[currentIndex].image}
                alt={products[currentIndex].name}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 text-right hidden md:block"
          >
            <p className="text-[#C0906F] text-xs tracking-[0.2em] uppercase mb-2">
              {products[currentIndex].detail}
            </p>
            <h4 className="text-white text-3xl font-extralight mb-1">
              {products[currentIndex].name}
            </h4>
            <p className="text-[#A0A0A0] text-lg">
              {products[currentIndex].price}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:hidden"
        >
          <p className="text-[#C0906F] text-xs tracking-[0.2em] uppercase mb-1">
            {products[currentIndex].detail}
          </p>
          <h4 className="text-white text-2xl font-extralight mb-1">
            {products[currentIndex].name}
          </h4>
          <p className="text-[#A0A0A0]">
            {products[currentIndex].price}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-3 md:gap-4">
        {products.map((product, i) => (
          <motion.button
            key={product.id}
            onClick={() => setCurrentIndex(i)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden transition-all duration-500 ${
              i === currentIndex 
                ? 'ring-2 ring-[#C0906F] ring-offset-2 ring-offset-[#0A0A0A]' 
                : 'opacity-40 hover:opacity-70'
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-[#0A0A0A]/30 transition-opacity duration-300 ${
              i === currentIndex ? 'opacity-0' : 'opacity-100'
            }`} />
          </motion.button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 mt-6">
        {products.map((_, i) => (
          <div
            key={i}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              i === currentIndex ? 'w-6 bg-[#C0906F]' : 'w-1 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}