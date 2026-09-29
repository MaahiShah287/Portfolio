import { Github, Linkedin, Mail, BarChart2, ArrowUp } from 'lucide-react';
import { personalInfo, navItems, contactConfig } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: contactConfig.github,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: contactConfig.linkedin,
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: `mailto:${contactConfig.email}`,
      icon: Mail,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white border-t border-navy-800 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-navy-800">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white">
                <BarChart2 size={16} />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Data Analyst | Computer Engineering Student
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Footer Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              );
            })}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-xl bg-brand-600/30 border border-brand-500/40 text-brand-300 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors ml-2"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-400">
            Engineered with React • Vite • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
