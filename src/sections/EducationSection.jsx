import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Star, BookOpen } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        tag="Academic Background"
        title="Education"
        description="Formal engineering education and academic performance in Computer Science."
      />

      <div className="max-w-3xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-slate-800"
          >
            {/* Top row */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-800">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30">
                <Star className="w-3.5 h-3.5 fill-emerald-400" />
                {edu.score}
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {edu.period}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-cyan-300">
                  {edu.status}
                </span>
              </div>
            </div>

            {/* Institution Info */}
            <div className="mb-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-cyan-400 mt-1 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                {edu.institution}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-2.5 pt-2">
              {edu.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
