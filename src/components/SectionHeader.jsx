import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ tag, title, description, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className={`mb-12 ${center ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-2xl'}`}
    >
      {tag && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          {tag}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
