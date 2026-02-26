import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    category: 'Architecture',
    title: 'The Language of Modern Spaces',
    excerpt: 'Exploring how contemporary design reshapes our relationship with the built environment.',
    author: 'Sarah Chen',
    readTime: '8 min read',
    date: 'Jan 15, 2024',
  },
  {
    id: 2,
    category: 'Design',
    title: 'Minimalism in the Digital Age',
    excerpt: 'How restraint and clarity continue to define excellence in creative expression.',
    author: 'Marcus Wilson',
    readTime: '6 min read',
    date: 'Jan 12, 2024',
  },
  {
    id: 3,
    category: 'Culture',
    title: 'Crafting Timeless Experiences',
    excerpt: 'The intersection of tradition and innovation in contemporary luxury design.',
    author: 'Elena Rossi',
    readTime: '10 min read',
    date: 'Jan 10, 2024',
  },
  {
    id: 4,
    category: 'Innovation',
    title: 'Sustainable Futures',
    excerpt: 'Pioneering approaches to environmentally conscious architecture and design.',
    author: 'David Park',
    readTime: '7 min read',
    date: 'Jan 8, 2024',
  },
];

export default function EditorialArticlesList() {
  return (
    <div className="space-y-1">
      {articles.map((article, i) => (
        <motion.article
          key={article.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          viewport={{ once: true }}
          className="group relative border-b border-white/5 last:border-0 py-8 cursor-pointer"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[#C0906F] text-xs tracking-[0.3em] uppercase">
                  {article.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#666666]" />
                <span className="text-[#666666] text-xs">
                  {article.date}
                </span>
              </div>

              <h3 className="text-white text-2xl md:text-3xl font-light mb-3 leading-tight group-hover:text-[#C0906F] transition-colors duration-300">
                {article.title}
              </h3>

              <p className="text-[#A0A0A0] text-sm font-light leading-relaxed mb-4 max-w-2xl">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-[#666666]">
                <span>{article.author}</span>
                <span className="w-1 h-1 rounded-full bg-[#666666]" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <motion.div
              className="flex items-center gap-2 text-white group-hover:text-[#C0906F] transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <span className="text-sm tracking-wider hidden md:block">Read</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>

          <motion.div
            className="absolute left-0 bottom-0 h-px bg-gradient-to-r from-[#C0906F] to-transparent"
            initial={{ width: '0%' }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.5 }}
          />
        </motion.article>
      ))}
    </div>
  );
}