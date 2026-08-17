import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import {
  Layout,
  Server,
  Database,
  Code2,
  CloudUpload,
  Wrench,
  Cpu,
  Layers,
} from 'lucide-react';

const iconMap = {
  Layout,
  Server,
  Database,
  Code2,
  CloudUpload,
  Wrench,
  Cpu,
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        tag="Technical Toolkit"
        title="Skills & Technologies"
        description="Structured overview of my technical stack across full-stack development, core computer science, and developer tooling."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl mx-auto">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                isSelected
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((categoryGroup, index) => {
          const IconComp = iconMap[categoryGroup.icon] || Layers;
          return (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="glass-card p-5 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-white text-sm tracking-tight">
                      {categoryGroup.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    {categoryGroup.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {categoryGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
