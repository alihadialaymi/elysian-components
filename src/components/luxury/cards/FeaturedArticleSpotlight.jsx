import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FeaturedArticleSpotlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Image Side */}
        <div className="relative h-[300px] md:h-auto overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80"
            alt="Featured article"
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/50 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent md:hidden" />

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            style={{
              background: 'linear-gradient(135deg, transparent 40%, rgba(192, 144, 111, 0.15) 100%)',
            }}
          />

          <div className="absolute top-6 left-6">
            <motion.div
              className="px-4 py-2 rounded-full bg-[#C0906F]/20 backdrop-blur-md border border-[#C0906F]/30"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#C0906F] text-xs tracking-[0.3em] uppercase">
                Featured Story
              </span>
            </motion.div>
          </div>
        </div>

        {/* Content Side */}
        <div className="relative bg-[#0A0A0A] p-8 md:p-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">
              Architecture & Design
            </p>

            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extralight mb-6 leading-tight">
              Redefining Luxury in Modern Living
            </h2>

            <p className="text-[#A0A0A0] text-base font-light leading-relaxed mb-8 max-w-xl">
              An intimate exploration of how contemporary architects blend heritage with innovation, 
              creating spaces that transcend time and speak to the soul of modern elegance.
            </p>

            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              <div>
                <p className="text-white text-sm mb-1">Isabella Martinez</p>
                <p className="text-[#666666] text-xs">Senior Design Editor</p>
              </div>
              <div className="text-right">
                <p className="text-[#666666] text-xs">January 20, 2024</p>
                <p className="text-[#666666] text-xs mt-1">12 min read</p>
              </div>
            </div>

            <motion.button
              className="group/btn flex items-center gap-3 text-white"
              whileHover={{ x: 5 }}
            >
              <span className="text-sm tracking-wider border-b border-transparent group-hover/btn:border-[#C0906F] transition-colors duration-300">
                Read Full Story
              </span>
              <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:border-[#C0906F] group-hover/btn:bg-[#C0906F]/10 transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#C0906F]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            style={{ transform: 'translate(50%, -50%)' }}
          />
        </div>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        initial={{ boxShadow: '0 0 0 rgba(192, 144, 111, 0)' }}
        whileHover={{ boxShadow: '0 30px 80px rgba(192, 144, 111, 0.15)' }}
        transition={{ duration: 0.7 }}
      />
    </motion.div>
  );
}