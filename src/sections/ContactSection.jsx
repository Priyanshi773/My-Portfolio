import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

export default function ContactSection({ onShowToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    if (onShowToast) {
      onShowToast(`Copied ${field === 'email' ? 'email address' : 'phone number'} to clipboard!`, 'success');
    }
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulated smooth form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast('Thank you! Your message has been prepared for dispatch.', 'success');
      }
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        tag="Get in Touch"
        title="Let's Connect"
        description="Whether you have an internship opportunity, a project to collaborate on, or just want to connect, feel free to reach out!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-3 group">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Email
                </span>
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                >
                  {personalData.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalData.email, 'email')}
              className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors shrink-0 cursor-pointer"
              aria-label="Copy email"
              title="Copy Email"
            >
              {copiedField === 'email' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-3 group">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Phone
                </span>
                <a
                  href={`tel:${personalData.phone}`}
                  className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                >
                  +91 {personalData.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalData.phone, 'phone')}
              className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors shrink-0 cursor-pointer"
              aria-label="Copy phone"
              title="Copy Phone"
            >
              {copiedField === 'phone' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="grid grid-cols-2 gap-3.5 pt-2">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between text-slate-300 hover:text-white transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold">GitHub</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition-colors" />
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between text-slate-300 hover:text-white transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold">LinkedIn</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800"
          >
            <h3 className="text-lg font-bold text-white tracking-tight mb-1 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              Send a Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your details below and I'll get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out. You can also reach me directly at <strong className="text-cyan-300">{personalData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-mono text-cyan-400 hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-slate-300 mb-1.5"
                  >
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="e.g. Priyanshi"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-slate-300 mb-1.5"
                  >
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="e.g. recruiter@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-slate-300 mb-1.5"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Write your message or inquiry here..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-cyan-950/40 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
