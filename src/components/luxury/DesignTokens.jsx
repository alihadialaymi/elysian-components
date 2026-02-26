import React from 'react';
import { motion } from 'framer-motion';

const colors = [
  { name: 'Background', value: '#0A0A0A', desc: 'Primary dark base' },
  { name: 'Surface', value: '#141414', desc: 'Elevated surfaces' },
  { name: 'Surface Alt', value: '#1A1A1A', desc: 'Card backgrounds' },
  { name: 'Border', value: '#222222', desc: 'Subtle dividers' },
  { name: 'Accent', value: '#C0906F', desc: 'Primary bronze accent' },
  { name: 'Text Primary', value: '#FFFFFF', desc: 'Headings' },
  { name: 'Text Secondary', value: '#A0A0A0', desc: 'Body copy' },
  { name: 'Text Muted', value: '#666666', desc: 'Captions' },
];

const typography = [
  { name: 'Display', size: '72px', weight: '200', sample: 'Elegant' },
  { name: 'Heading 1', size: '48px', weight: '300', sample: 'Refined' },
  { name: 'Heading 2', size: '32px', weight: '400', sample: 'Premium' },
  { name: 'Body Large', size: '20px', weight: '300', sample: 'Luxury in every detail' },
  { name: 'Body', size: '16px', weight: '400', sample: 'Crafted with precision' },
  { name: 'Caption', size: '12px', weight: '500', sample: 'ATTENTION TO DETAIL' },
];

const shadows = [
  { name: 'Glow Subtle', value: '0 0 60px rgba(192, 144, 111, 0.1)' },
  { name: 'Glow Medium', value: '0 0 80px rgba(192, 144, 111, 0.15)' },
  { name: 'Elevation', value: '0 20px 60px rgba(0, 0, 0, 0.5)' },
  { name: 'Card', value: '0 4px 24px rgba(0, 0, 0, 0.3)' },
];

export default function DesignTokens() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">Foundation</p>
          <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">Design Tokens</h2>
          <p className="text-[#A0A0A0] text-lg font-light max-w-xl">
            The fundamental building blocks that define our premium visual language.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-white text-xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-[#C0906F]" />
            Color Palette
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {colors.map((color, i) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group"
              >
                <div 
                  className="aspect-[4/3] rounded-lg mb-3 relative overflow-hidden border border-white/5 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundColor: color.value }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="text-white text-sm font-medium">{color.name}</p>
                <p className="text-[#666666] text-xs font-mono">{color.value}</p>
                <p className="text-[#A0A0A0] text-xs mt-1">{color.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-white text-xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-[#C0906F]" />
            Typography Scale
          </h3>
          <div className="space-y-6 border-l border-[#222222] pl-8">
            {typography.map((type, i) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group py-4 border-b border-[#141414] last:border-0"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[#666666] text-xs tracking-wider uppercase">{type.name}</span>
                  <span className="text-[#666666] text-xs font-mono">{type.size} / {type.weight}</span>
                </div>
                <p 
                  className="text-white transition-colors duration-500 group-hover:text-[#C0906F]"
                  style={{ fontSize: type.size, fontWeight: type.weight }}
                >
                  {type.sample}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-[#C0906F]" />
            Shadow & Glow
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {shadows.map((shadow, i) => (
              <motion.div
                key={shadow.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div 
                  className="aspect-square rounded-xl bg-[#141414] mb-4 flex items-center justify-center"
                  style={{ boxShadow: shadow.value }}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1A1A1A]" />
                </div>
                <p className="text-white text-sm">{shadow.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}