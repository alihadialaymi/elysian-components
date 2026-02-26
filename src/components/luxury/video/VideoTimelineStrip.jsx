import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const clips = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    title: 'Mountain Dawn',
    time: '00:00',
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
    title: 'Forest Light',
    time: '00:45',
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    title: 'Ocean Breeze',
    time: '01:30',
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&q=80',
    title: 'Desert Heat',
    time: '02:15',
  },
  {
    id: 5,
    thumbnail: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80',
    title: 'Valley Mist',
    time: '03:00',
  },
];

export default function VideoTimelineStrip() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-6">
      {/* Active Preview */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-video rounded-2xl overflow-hidden group"
      >
        <img
          src={clips[activeIndex].thumbnail}
          alt={clips[activeIndex].title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-[#0A0A0A]/30" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative cursor-pointer"
          >
            <div className="absolute inset-0 rounded-full bg-[#C0906F] blur-xl opacity-50" />
            <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#C0906F]/20 hover:border-[#C0906F] transition-all duration-300">
              <Play className="w-6 h-6 text-white ml-1" fill="white" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-6">
          <p className="text-[#C0906F] text-xs font-mono mb-1">{clips[activeIndex].time}</p>
          <h4 className="text-white text-2xl font-extralight">{clips[activeIndex].title}</h4>
        </div>
      </motion.div>

      {/* Timeline Strip */}
      <div className="relative">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {clips.map((clip, i) => (
            <motion.div
              key={clip.id}
              onClick={() => setActiveIndex(i)}
              whileHover={{ y: -4 }}
              className={`relative flex-shrink-0 w-32 md:w-40 cursor-pointer group/clip ${
                i === activeIndex ? 'ring-2 ring-[#C0906F] ring-offset-2 ring-offset-[#0A0A0A]' : ''
              }`}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={clip.thumbnail}
                  alt={clip.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover/clip:scale-110"
                />

                <div className={`absolute inset-0 transition-all duration-300 ${
                  i === activeIndex 
                    ? 'bg-[#C0906F]/20' 
                    : 'bg-[#0A0A0A]/40 group-hover/clip:bg-[#0A0A0A]/20'
                }`} />

                <motion.div
                  className={`absolute inset-0 border-2 transition-all duration-300 ${
                    i === activeIndex ? 'border-[#C0906F]' : 'border-transparent'
                  }`}
                />

                {i === activeIndex && (
                  <motion.div
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#C0906F] flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="w-3 h-3 text-white ml-0.5" fill="white" />
                  </motion.div>
                )}

                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-[10px] font-mono bg-[#0A0A0A]/70 backdrop-blur-sm px-2 py-1 rounded inline-block">
                    {clip.time}
                  </p>
                </div>
              </div>

              <motion.p
                className={`text-xs mt-2 transition-colors duration-300 ${
                  i === activeIndex ? 'text-[#C0906F]' : 'text-[#666666] group-hover/clip:text-[#A0A0A0]'
                }`}
              >
                {clip.title}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-2">
          <motion.div
            className="h-full bg-[#C0906F]"
            initial={{ width: '0%' }}
            animate={{ width: `${((activeIndex + 1) / clips.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </div>
  );
}