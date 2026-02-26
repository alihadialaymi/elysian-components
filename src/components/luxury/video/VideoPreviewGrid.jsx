import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const videos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    title: 'Alpine Ascent',
    duration: '2:34',
    category: 'Nature',
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    title: 'Forest Depths',
    duration: '1:45',
    category: 'Nature',
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    title: 'Ocean Calm',
    duration: '3:12',
    category: 'Seascape',
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
    title: 'Desert Wind',
    duration: '2:20',
    category: 'Desert',
  },
];

export default function VideoPreviewGrid() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredId(video.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setSelectedVideo(video)}
            className="group relative aspect-[9/12] rounded-xl overflow-hidden cursor-pointer"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-[#0A0A0A]/30" />

            <motion.div
              className="absolute inset-0 bg-[#C0906F]/0 group-hover:bg-[#C0906F]/10 transition-all duration-500"
            />

            <div className="absolute top-3 right-3 px-2 py-1 rounded bg-[#0A0A0A]/70 backdrop-blur-sm border border-white/10">
              <span className="text-white text-xs font-mono">{video.duration}</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full bg-[#C0906F] blur-xl opacity-50" />
                <div className="relative w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-[#C0906F] text-[10px] tracking-wider uppercase mb-1">
                {video.category}
              </p>
              <h5 className="text-white text-sm font-light">{video.title}</h5>
            </div>

            <motion.div
              className="absolute inset-0 border-2 border-[#C0906F] opacity-0 group-hover:opacity-100 pointer-events-none"
              transition={{ duration: 0.3 }}
            />

            {/* Reflection Sweep on Hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
              initial={false}
              animate={hoveredId === video.id ? { 
                background: [
                  'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                  'linear-gradient(120deg, transparent 100%, rgba(255,255,255,0.2) 150%, transparent 200%)',
                ]
              } : {}}
              transition={{ duration: 1.5 }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-[#141414]">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  poster={selectedVideo.thumbnail}
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-person-walking-in-the-snow-2866-large.mp4" type="video/mp4" />
                </video>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <h4 className="text-white text-2xl font-light mb-2">{selectedVideo.title}</h4>
                <p className="text-[#666666] text-sm">{selectedVideo.category} · {selectedVideo.duration}</p>
              </motion.div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-14 right-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C0906F] transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}