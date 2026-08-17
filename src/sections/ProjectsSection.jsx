import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import ProjectModal from '../components/ProjectModal';
import { GithubIcon } from '../components/SocialIcons';
import {
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles,
  Info,
  ChevronRight,
  Shield,
  ShoppingBag,
  CloudSun,
  Server,
  Zap,
} from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        tag="Featured Work"
        title="Projects & Architecture"
        description="Comprehensive full-stack applications showcasing end-to-end implementation, security patterns, and API integrations."
      />

      <div className="space-y-10">
        {projectsData.map((project, index) => {
          const isMall = project.id === 'mall-app';
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-slate-800/90 hover:border-slate-700/80 transition-all duration-300"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Project Overview & Tech */}
                <div className="lg:col-span-7 space-y-5">
                  {/* Badge & Title */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
                        {isMall ? <ShoppingBag className="w-3.5 h-3.5" /> : <CloudSun className="w-3.5 h-3.5" />}
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {project.metrics.architecture}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    "{project.description}"
                  </p>

                  {/* Tech Stack Badges */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-slate-200 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs: Live Demo, GitHub, Quick View */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Details & Architecture</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Features & Highlights Showcase */}
                <div className="lg:col-span-5 bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
                        Feature Highlights
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400/80">
                      {project.features.length} Features
                    </span>
                  </div>

                  <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 group hover:text-white transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {project.featureGroups && (
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-mono">
                        Modular Architecture
                      </span>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Inspect breakdown</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
