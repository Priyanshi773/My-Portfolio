import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { ArrowDown, FileDown, CheckCircle2 } from 'lucide-react';

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
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="ambient-glow w-[420px] h-[420px] bg-cyan-600/15 top-1/4 left-1/3 -translate-x-1/2" />
      <div className="ambient-glow w-[320px] h-[320px] bg-teal-600/10 bottom-10 right-10" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
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
              <span>Software Engineer • B.Tech CSE</span>
            </motion.div>

            {/* Hero Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2"
            >
              {personalData.name}
            </motion.h1>

            {/* Role Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 tracking-tight font-mono"
            >
              {personalData.role}
            </motion.div>

            {/* Short Intro */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 font-normal"
            >
              {personalData.shortIntro}
            </motion.p>

            {/* Action Buttons: View Projects & Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8 w-full sm:w-auto"
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

          {/* Right Column: Framed Profile Photo with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-[320px] sm:max-w-[340px] w-full">
              {/* Ambient backlight glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/30 to-teal-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Main Photo Frame */}
              <div className="relative rounded-2xl p-2 bg-slate-900/80 border border-slate-700/80 backdrop-blur-md overflow-hidden shadow-2xl">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="/priyanshi.jpg"
                    alt="Priyanshi Saini"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] group-hover:scale-105 transition duration-500"
                    loading="eager"
                  />
                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Inside Photo Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-xs">
                    <span className="font-semibold text-white font-mono">Priyanshi Saini</span>
                    <span className="text-[11px] font-mono text-cyan-400">GWEC Ajmer</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: CGPA */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-cyan-500/40 shadow-xl backdrop-blur-md text-[11px] font-mono font-semibold text-cyan-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>CGPA 8.74</span>
              </div>

              {/* Floating Badge 2: Software Engineer */}
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-slate-700 shadow-xl backdrop-blur-md text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Software Engineer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
