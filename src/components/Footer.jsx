import React from 'react';
import { personalData, navLinks } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06090e] py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-sm text-cyan-400">PS</span>
            <span className="font-semibold text-white text-sm">{personalData.name}</span>
          </div>
          <p className="text-slate-400 text-xs font-mono">
            {personalData.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors ml-2 cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-[11px] font-mono gap-2">
        <span>© 2026 Priyanshi Saini. All rights reserved.</span>
        <span>B.Tech CSE • Software Engineer</span>
      </div>
    </footer>
  );
}
