import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, personalData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { Code, ShieldCheck, Layout, BookOpen, GraduationCap, MapPin } from 'lucide-react';

export default function AboutSection() {
  const icons = [Code, ShieldCheck, Layout, BookOpen];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        tag="About Me"
        title="About Me"
        description="A snapshot of my background, focus areas, and technical expertise."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-cyan-500/40 p-[1px] bg-cyan-950/70 shrink-0">
              <img
                src="/priyanshi.jpg"
                alt="Priyanshi Saini"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {personalData.name}
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                {personalData.tagline}
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {aboutData.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>B.Tech CSE (2023 – Present)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>GWECA, Ajmer</span>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-5 grid grid-cols-1 gap-3.5"
        >
          {aboutData.coreHighlights.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="glass-card p-4 rounded-xl flex items-start gap-3.5 hover:bg-slate-850/60 transition-colors"
              >
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
