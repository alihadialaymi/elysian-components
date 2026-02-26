import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80',
    category: 'Innovation',
    title: 'The Future of Design',
    narrative: 'Pioneering new approaches to spatial thinking, we explore how technology and craftsmanship converge to create experiences that transcend the ordinary.',
    stat: '15 Years',
    statLabel: 'Excellence',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    category: 'Collaboration',
    title: 'Building Tomorrow',
    narrative: 'Through collective vision and shared passion, we bring together minds that challenge conventions and redefine what\'s possible in modern design.',
    stat: '200+',
    statLabel: 'Projects',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    category: 'Excellence',
    title: 'Crafting Experiences',
    narrative: 'Every detail matters. From concept to completion, our dedication to perfection ensures that each project embodies our commitment to exceptional quality.',
    stat: '50+',
    statLabel: 'Awards',
  },
];

export default function SplitScreenCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % stories.length);

  return (
    <div className="relative h-[500px] md:h-[550px] rounded-xl overflow-hidden bg-[#0A0A0A]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Media Side */}
        <div className="relative h-[250px] md:h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={stories[currentIndex].image}
                alt={stories[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/50 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/80 md:hidden" />
            </motion.div>
          </AnimatePresence>

          {/* Stat Overlay */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-8 left-8"
            >
              <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-[#C0906F] text-4xl font-extralight mb-1">
                  {stories[currentIndex].stat}
                </p>
                <p className="text-white text-xs tracking-wider uppercase">
                  {stories[currentIndex].statLabel}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Narrative Side */}
        <div className="relative flex flex-col justify-center p-6 md:p-12 bg-[#0A0A0A]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">
                {stories[currentIndex].category}
              </p>
              
              <h3 className="text-white text-3xl md:text-4xl font-extralight mb-6 leading-tight">
                {stories[currentIndex].title}
              </h3>
              
              <p className="text-[#A0A0A0] text-base font-light leading-relaxed mb-8">
                {stories[currentIndex].narrative}
              </p>
              
              <button 
                onClick={next}
                className="group flex items-center gap-3 text-white"
              >
                <span className="text-sm tracking-wider">Next Story</span>
                <motion.span
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#C0906F] group-hover:bg-[#C0906F]/10 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-2">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentIndex ? 'w-12 bg-[#C0906F]' : 'w-1 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}