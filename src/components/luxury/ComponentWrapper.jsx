import React from 'react';
import { motion } from 'framer-motion';

export default function ComponentWrapper({ name, description, hint, children, variant = 'default' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-24 last:mb-0"
    >
      <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h3 className="text-white text-2xl md:text-3xl font-light mb-2">{name}</h3>
          <p className="text-[#A0A0A0] text-sm font-light max-w-md">{description}</p>
        </div>
        {hint && (
          <div className="flex items-center gap-2 text-[#666666] text-xs">
            <div className="w-4 h-4 rounded-full border border-[#666666] flex items-center justify-center">
              <span className="text-[8px]">i</span>
            </div>
            <span className="tracking-wide">{hint}</span>
          </div>
        )}
      </div>
      
      <div className={`
        rounded-2xl overflow-hidden
        ${variant === 'fullbleed' ? '' : 'bg-[#141414]/50 border border-white/5 p-6 md:p-8'}
      `}>
        {children}
      </div>
    </motion.div>
  );
}