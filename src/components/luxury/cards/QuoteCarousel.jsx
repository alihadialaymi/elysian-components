import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "A masterclass in refined elegance. Every detail speaks to a deeper understanding of luxury.",
    author: "Alexandra Chen",
    title: "Creative Director",
    company: "Lumina Collective",
  },
  {
    id: 2,
    quote: "Transformative design that transcends trends. This is what timeless excellence looks like.",
    author: "Marcus Rodriguez",
    title: "Chief Design Officer",
    company: "Meridian Studios",
  },
  {
    id: 3,
    quote: "An extraordinary vision brought to life with precision and artistry. Simply unparalleled.",
    author: "Sophia Laurent",
    title: "Principal Architect",
    company: "Atelier Moderne",
  },
];

export default function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#C0906F] to-[#8B6B4F] flex items-center justify-center">
                <span className="text-white text-3xl font-serif">"</span>
              </div>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white text-2xl md:text-3xl lg:text-4xl font-extralight leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              {testimonials[currentIndex].quote}
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-2"
            >
              <p className="text-white text-lg font-light">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-[#666666] text-sm">
                {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="relative group"
            >
              <span className={`block h-1 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'w-12 bg-[#C0906F]' : 'w-1 bg-white/30 group-hover:bg-white/50'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-[#C0906F]/30"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-transparent to-[#C0906F]/30"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
    </div>
  );
}