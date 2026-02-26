import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function CinematicVideoHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-person-walking-in-the-snow-2866-large.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />

      {/* Reflection Sweep Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
        animate={{
          background: [
            'linear-gradient(110deg, transparent 0%, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%, transparent 100%)',
            'linear-gradient(110deg, transparent 40%, transparent 80%, rgba(255,255,255,0.15) 90%, transparent 100%, transparent 140%)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          boxShadow: [
            'inset 0 0 80px rgba(192, 144, 111, 0.1)',
            'inset 0 0 100px rgba(192, 144, 111, 0.15)',
            'inset 0 0 80px rgba(192, 144, 111, 0.1)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
        <div className="flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <p className="text-[#C0906F] text-xs tracking-[0.3em] uppercase mb-4">
              Cinematic Experience
            </p>
            <h3 className="text-white text-4xl md:text-5xl font-extralight mb-4 leading-tight">
              Journey Through
              <br />
              Timeless Landscapes
            </h3>
            <p className="text-[#A0A0A0] text-base font-light max-w-md">
              Immerse yourself in breathtaking vistas captured in motion
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={toggleMute}
            className="w-10 h-10 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] transition-all duration-300"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </motion.button>
        </div>

        <div className="flex items-center justify-center">
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group/btn"
          >
            <div className="absolute inset-0 rounded-full bg-[#C0906F] blur-xl opacity-30 group-hover/btn:opacity-50 transition-opacity" />
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover/btn:bg-[#C0906F]/20 group-hover/btn:border-[#C0906F] transition-all duration-300">
              {isPlaying ? (
                <Pause className="w-6 h-6 md:w-8 md:h-8 text-white" fill="white" />
              ) : (
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="white" />
              )}
            </div>
          </motion.button>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-[#666666] text-xs tracking-wider uppercase">
            01:24 / 03:45
          </div>
          <div className="h-1 flex-1 mx-6 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#C0906F]"
              initial={{ width: '0%' }}
              animate={{ width: isPlaying ? '100%' : '24%' }}
              transition={{ duration: isPlaying ? 201 : 0 }}
            />
          </div>
          <div className="text-[#666666] text-xs tracking-wider uppercase">
            4K
          </div>
        </div>
      </div>
    </div>
  );
}