import React from 'react';
import { motion } from 'framer-motion';
import StickyNav from '@/components/luxury/StickyNav';
import DesignTokens from '@/components/luxury/DesignTokens';
import ComponentWrapper from '@/components/luxury/ComponentWrapper';
import InfiniteMirrorSlider from '@/components/luxury/sliders/InfiniteMirrorSlider';
import CinematicFullscreenSlider from '@/components/luxury/sliders/CinematicFullscreenSlider';
import EditorialVerticalSlider from '@/components/luxury/sliders/EditorialVerticalSlider';
import MinimalProductSlider from '@/components/luxury/sliders/MinimalProductSlider';
import ScrollSyncedCarousel from '@/components/luxury/carousels/ScrollSyncedCarousel';
import MagneticCursorCarousel from '@/components/luxury/carousels/MagneticCursorCarousel';
import FloatingDepthCarousel from '@/components/luxury/carousels/FloatingDepthCarousel';
import SplitScreenCarousel from '@/components/luxury/carousels/SplitScreenCarousel';
import ReflectionGallery from '@/components/luxury/galleries/ReflectionGallery';
import MosaicGallery from '@/components/luxury/galleries/MosaicGallery';
import PanoramaGallery from '@/components/luxury/galleries/PanoramaGallery';
import MuseumLightbox from '@/components/luxury/galleries/MuseumLightbox';
import CinematicVideoHero from '@/components/luxury/video/CinematicVideoHero';
import VideoPreviewGrid from '@/components/luxury/video/VideoPreviewGrid';
import VideoModalViewer from '@/components/luxury/video/VideoModalViewer';
import VideoTimelineStrip from '@/components/luxury/video/VideoTimelineStrip';
import LuxuryExperienceCards from '@/components/luxury/cards/LuxuryExperienceCards';
import EditorialArticlesList from '@/components/luxury/cards/EditorialArticlesList';
import FeaturedArticleSpotlight from '@/components/luxury/cards/FeaturedArticleSpotlight';
import QuoteCarousel from '@/components/luxury/cards/QuoteCarousel';
import StatsStrip from '@/components/luxury/cards/StatsStrip';

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

      {/* Carousels */}
      <section id="carousels" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">Category 02</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">Carousels</h2>
            <p className="text-[#A0A0A0] text-lg font-light max-w-2xl">
              Interactive carousel experiences with advanced motion and user engagement.
            </p>
          </motion.div>

          <ComponentWrapper
            name="Scroll-Synced Cinematic Carousel"
            description="Horizontal carousel that progresses as you scroll vertically through the page."
            hint="Scroll down to see the effect"
          >
            <ScrollSyncedCarousel />
          </ComponentWrapper>

          <ComponentWrapper
            name="Magnetic Cursor Carousel"
            description="Cards respond to cursor position with tilt and highlight effects."
            hint="Move cursor over cards (touch for mobile)"
          >
            <MagneticCursorCarousel />
          </ComponentWrapper>

          <ComponentWrapper
            name="Floating Depth Cards Carousel"
            description="Stacked cards with layered depth, blur, and scale transitions."
            hint="Navigate with arrows"
          >
            <FloatingDepthCarousel />
          </ComponentWrapper>

          <ComponentWrapper
            name="Split-Screen Media Carousel"
            description="Synchronized media and narrative presentation in split-screen layout."
            hint="Auto-advances or click next"
          >
            <SplitScreenCarousel />
          </ComponentWrapper>
        </div>
      </section>

      {/* Galleries */}
      <section id="galleries" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">Category 03</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">Galleries</h2>
            <p className="text-[#A0A0A0] text-lg font-light max-w-2xl">
              Elegant image presentation with premium interactions and immersive viewing experiences.
            </p>
          </motion.div>

          <ComponentWrapper
            name="Reflection Illusion Gallery"
            description="Mirror reflection effect under images with subtle reactive blur and fade."
            hint="Hover over images"
          >
            <ReflectionGallery />
          </ComponentWrapper>

          <ComponentWrapper
            name="Mosaic-to-Cinema Gallery"
            description="Grid layout that expands into immersive fullscreen viewer."
            hint="Click any image to expand"
          >
            <MosaicGallery />
          </ComponentWrapper>

          <ComponentWrapper
            name="Panorama Glide Gallery"
            description="Horizontal drag gallery with inertia and premium feel."
            hint="Drag to browse panoramas"
          >
            <PanoramaGallery />
          </ComponentWrapper>

          <ComponentWrapper
            name="Museum Lightbox Gallery"
            description="Minimal fullscreen viewer with elegant navigation and focus."
            hint="Click to view in lightbox"
          >
            <MuseumLightbox />
          </ComponentWrapper>
        </div>
      </section>

      {/* Video Components */}
      <section id="video" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">Category 04</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">Video Components</h2>
            <p className="text-[#A0A0A0] text-lg font-light max-w-2xl">
              Cinematic video presentations with elegant controls and immersive playback.
            </p>
          </motion.div>

          <ComponentWrapper
            name="Cinematic Video Hero Module"
            description="Full-featured video background with premium overlay and controls."
            hint="Click play button"
          >
            <CinematicVideoHero />
          </ComponentWrapper>

          <ComponentWrapper
            name="Video Preview Cards Grid"
            description="Grid of video cards with hover preview and modal player."
            hint="Hover and click cards"
          >
            <VideoPreviewGrid />
          </ComponentWrapper>

          <ComponentWrapper
            name="Luxury Video Modal Viewer"
            description="Fullscreen modal player with premium controls and focus mode."
            hint="Click thumbnail to open"
          >
            <VideoModalViewer />
          </ComponentWrapper>

          <ComponentWrapper
            name="Video Timeline Strip"
            description="Horizontal timeline with expanding active preview selection."
            hint="Click timeline items"
          >
            <VideoTimelineStrip />
          </ComponentWrapper>
        </div>
      </section>

      {/* Cards & Editorial */}
      <section id="cards" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">Category 05</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">Cards & Editorial</h2>
            <p className="text-[#A0A0A0] text-lg font-light max-w-2xl">
              Content presentation with Apple-inspired editorial layouts and luxury card designs.
            </p>
          </motion.div>

          <ComponentWrapper
            name="Luxury Experience Cards"
            description="Premium cards with location tags, timing, and hover effects."
            hint="Hover for interactions"
          >
            <LuxuryExperienceCards />
          </ComponentWrapper>

          <ComponentWrapper
            name="Editorial Articles List"
            description="Clean Apple-style editorial layout for article browsing."
            hint="Hover over articles"
          >
            <EditorialArticlesList />
          </ComponentWrapper>

          <ComponentWrapper
            name="Featured Article Spotlight"
            description="Cinematic split-screen article feature with immersive imagery."
            hint="Hover to reveal effects"
          >
            <FeaturedArticleSpotlight />
          </ComponentWrapper>

          <ComponentWrapper
            name="Quote/Testimonial Carousel"
            description="Elegant typography transitions for testimonials and quotes."
            hint="Auto-rotates every 6 seconds"
          >
            <QuoteCarousel />
          </ComponentWrapper>

          <ComponentWrapper
            name="Stats/Facts Strip"
            description="Minimal numbers display with elegant dividers and animations."
            hint="Scroll into view"
          >
            <StatsStrip />
          </ComponentWrapper>
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