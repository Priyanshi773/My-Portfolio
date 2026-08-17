import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { ArrowDown, FileDown, Code2, Sparkles, Terminal } from 'lucide-react';

export default function HeroSection({ onShowToast }) {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="ambient-glow w-[380px] h-[380px] bg-cyan-600/10 top-1/4 left-1/2 -translate-x-1/2" />
      <div className="ambient-glow w-[300px] h-[300px] bg-teal-600/10 bottom-10 right-10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-mono text-slate-300 mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>Full Stack Developer • B.Tech CSE</span>
        </motion.div>

        {/* Hero Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3"
        >
          {personalData.name}
        </motion.h1>

        {/* Role Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 mb-5 tracking-tight font-mono"
        >
          {personalData.role}
        </motion.div>

        {/* Short Intro - Exactly as requested */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-8 font-normal"
        >
          "{personalData.shortIntro}"
        </motion.p>

        {/* Action Buttons: View Projects & Download Resume */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10 w-full sm:w-auto"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-md shadow-cyan-950/40 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={personalData.resumeUrl}
            download="Priyanshi_Saini_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 shadow-sm"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Icons: GitHub & LinkedIn */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex items-center gap-4"
        >
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200 shadow-sm"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200 shadow-sm"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
