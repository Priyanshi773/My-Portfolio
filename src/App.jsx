import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-25 pointer-events-none z-0" />

      {/* Global Toast Manager */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 space-y-4">
        <HeroSection onShowToast={showToast} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
