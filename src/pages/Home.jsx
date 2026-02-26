import React from 'react';
import { motion } from 'framer-motion';
import StickyNav from '@/components/luxury/StickyNav';
import DesignTokens from '@/components/luxury/DesignTokens';
import ComponentWrapper from '@/components/luxury/ComponentWrapper';
import InfiniteMirrorSlider from '@/components/luxury/sliders/InfiniteMirrorSlider';
import CinematicFullscreenSlider from '@/components/luxury/sliders/CinematicFullscreenSlider';
import EditorialVerticalSlider from '@/components/luxury/sliders/EditorialVerticalSlider';
import MinimalProductSlider from '@/components/luxury/sliders/MinimalProductSlider';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <StickyNav />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[#C0906F]/30 bg-[#C0906F]/5">
              <span className="text-[#C0906F] text-xs tracking-[0.3em] uppercase">Components Library</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 leading-tight">
              Luxury UI
              <br />
              <span className="bg-gradient-to-r from-[#C0906F] to-[#8B6B4F] bg-clip-text text-transparent">
                Components
              </span>
            </h1>
            
            <p className="text-[#A0A0A0] text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              A premium collection of high-end interface components crafted with precision. 
              Elegant interactions, smooth animations, and luxurious feel in every detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design Tokens */}
      <section id="tokens">
        <DesignTokens />
      </section>

      {/* Sliders */}
      <section id="sliders" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">Category 01</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">Sliders</h2>
            <p className="text-[#A0A0A0] text-lg font-light max-w-2xl">
              Premium slider components with cinematic transitions and elegant controls.
            </p>
          </motion.div>

          <ComponentWrapper
            name="Infinite Mirror Depth Slider"
            description="Layered depth illusion with subtle glow edges creating a mirror-like infinity effect."
            hint="Use arrows or dots to navigate"
          >
            <InfiniteMirrorSlider />
          </ComponentWrapper>

          <ComponentWrapper
            name="Cinematic Fullscreen Slider"
            description="Premium full-bleed slider with light sweep overlay and elegant text placement."
            hint="Auto-advances every 6 seconds"
          >
            <CinematicFullscreenSlider />
          </ComponentWrapper>

          <ComponentWrapper
            name="Editorial Vertical Slider"
            description="Magazine-style storytelling slides with smooth vertical transitions."
            hint="Navigate with vertical arrows"
          >
            <EditorialVerticalSlider />
          </ComponentWrapper>

          <ComponentWrapper
            name="Minimal Product Slider"
            description="Clean product showcase with micro thumbnails and premium transitions."
            hint="Click thumbnails to switch"
          >
            <MinimalProductSlider />
          </ComponentWrapper>
        </div>
      </section>

      {/* Carousels - Coming Soon */}
      <section id="carousels" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">Category 02</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">Carousels</h2>
            <p className="text-[#666666] text-sm font-light">More components loading...</p>
          </motion.div>
        </div>
      </section>

      {/* Galleries - Coming Soon */}
      <section id="galleries" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">Category 03</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">Galleries</h2>
            <p className="text-[#666666] text-sm font-light">More components loading...</p>
          </motion.div>
        </div>
      </section>

      {/* Video Components - Coming Soon */}
      <section id="video" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">Category 04</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">Video Components</h2>
            <p className="text-[#666666] text-sm font-light">More components loading...</p>
          </motion.div>
        </div>
      </section>

      {/* Cards & Editorial - Coming Soon */}
      <section id="cards" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">Category 05</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">Cards & Editorial</h2>
            <p className="text-[#666666] text-sm font-light">More components loading...</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#666666] text-sm font-light">
            Luxury UI Components Library — Crafted with precision
          </p>
        </div>
      </footer>
    </div>
  );
}