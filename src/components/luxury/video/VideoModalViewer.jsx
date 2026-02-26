import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Maximize2, Volume2, VolumeX } from 'lucide-react';

export default function VideoModalViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <motion.div
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80"
          alt="Video thumbnail"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-[#C0906F] blur-2xl opacity-40" />
            <div className="relative w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#C0906F]/20 group-hover:border-[#C0906F] transition-all duration-300">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-6">
          <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-2">Featured</p>
          <h4 className="text-white text-2xl font-extralight">Premium Showcase</h4>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0A] z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full max-w-7xl max-h-screen p-8 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
                loop
                muted={isMuted}
                playsInline
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-person-walking-in-the-snow-2866-large.mp4" type="video/mp4" />
              </video>

              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  boxShadow: '0 0 200px rgba(192, 144, 111, 0.3)',
                }}
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4"
              >
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:border-[#C0906F] hover:bg-[#C0906F]/10 transition-all duration-300"
                >
                  {isPlaying ? (
                    <motion.div className="w-3 h-3 border-2 border-white" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" fill="white" />
                  )}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:border-[#C0906F] hover:bg-[#C0906F]/10 transition-all duration-300"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <button className="w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:border-[#C0906F] hover:bg-[#C0906F]/10 transition-all duration-300">
                  <Maximize2 className="w-5 h-5" />
                </button>
              </motion.div>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] hover:bg-[#C0906F]/10 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute top-8 left-8 text-white">
                <p className="text-xs tracking-wider uppercase text-[#666666] mb-1">Press ESC to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}