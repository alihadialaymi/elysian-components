import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Tag } from 'lucide-react';

const experiences = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    tag: 'Exclusive',
    title: 'Desert Sanctuary',
    location: 'Arabian Dunes',
    duration: '3 Days',
    price: 'From $1,200',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80',
    tag: 'Premium',
    title: 'Alpine Retreat',
    location: 'Swiss Mountains',
    duration: '5 Days',
    price: 'From $2,400',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    tag: 'Signature',
    title: 'Coastal Haven',
    location: 'Mediterranean Coast',
    duration: '7 Days',
    price: 'From $3,600',
  },
];

export default function LuxuryExperienceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative"
        >
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#141414]">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />

            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#C0906F]/0 via-transparent to-[#C0906F]/20 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'linear-gradient(135deg, transparent 30%, rgba(192, 144, 111, 0.1) 100%)',
              }}
            />

            <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
              <span className="px-3 py-1.5 rounded-full bg-[#C0906F]/20 backdrop-blur-md border border-[#C0906F]/30 text-[#C0906F] text-xs tracking-wider uppercase">
                {exp.tag}
              </span>
              <motion.div
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white text-lg">→</span>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-white text-2xl font-extralight mb-4 leading-tight">
                  {exp.title}
                </h4>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-[#A0A0A0] text-sm">
                    <MapPin className="w-4 h-4 text-[#C0906F]" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#A0A0A0] text-sm">
                    <Clock className="w-4 h-4 text-[#C0906F]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-white text-lg font-light">{exp.price}</span>
                  <span className="text-[#666666] text-xs tracking-wider uppercase">Per person</span>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            initial={{ boxShadow: '0 0 0 rgba(192, 144, 111, 0)' }}
            whileHover={{ boxShadow: '0 20px 60px rgba(192, 144, 111, 0.2)' }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  );
}