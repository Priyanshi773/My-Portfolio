import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Terminal } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        tag="Hands-on Learning"
        title="Experience & Internship"
        description="Practical project-based learning and hands-on software development experience."
      />

      <div className="max-w-3xl mx-auto">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-slate-800"
          >
            {/* Top meta strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-800">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
                <Award className="w-3.5 h-3.5" />
                {exp.badge}
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Header info */}
            <div className="mb-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {exp.title}
              </h3>
              <p className="text-sm font-medium text-cyan-400 mt-1">
                {exp.organization}
              </p>
            </div>

            {/* Details list */}
            <div className="space-y-3 mb-6">
              {exp.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>

            {/* Skills Acquired */}
            <div className="pt-4 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                Core Competencies Strengthened
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.skillsLearned.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-slate-300 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
