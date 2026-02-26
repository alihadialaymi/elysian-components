import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    id: 1,
    value: '15+',
    label: 'Years Excellence',
  },
  {
    id: 2,
    value: '200+',
    label: 'Projects Completed',
  },
  {
    id: 3,
    value: '50+',
    label: 'Awards Won',
  },
  {
    id: 4,
    value: '98%',
    label: 'Client Satisfaction',
  },
];

export default function StatsStrip() {
  return (
    <div className="relative py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative text-center group"
          >
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4
                className="text-white text-5xl md:text-6xl font-extralight mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.h4>
              
              <motion.div
                className="h-px w-12 mx-auto bg-[#C0906F] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 + 0.4 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <p className="text-[#A0A0A0] text-sm tracking-wider uppercase group-hover:text-white transition-colors duration-300">
              {stat.label}
            </p>

            {/* Vertical divider - hidden on last item on mobile, and last item overall */}
            {i < stats.length - 1 && (
              <div className={`absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent ${
                i === 1 ? 'hidden md:block' : i === 2 ? 'hidden md:block' : ''
              }`} />
            )}

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-[#C0906F]/0 group-hover:bg-[#C0906F]/5 transition-all duration-500 -z-10"
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0906F]/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </div>
  );
}