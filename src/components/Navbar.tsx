import { useState, useEffect } from 'react';
import { Menu, X, BarChart2, ArrowUpRight } from 'lucide-react';
import { navItems, personalInfo } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navItems.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group no-underline"
            aria-label="Maahi Shah - Back to top"
          >
            <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <BarChart2 size={18} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-navy-900 group-hover:text-brand-600 transition-colors leading-none">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                Aspiring Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-brand-600 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Medium screen navigation fallback if 9 items is tight */}
          <nav className="hidden md:flex xl:hidden items-center gap-1">
            {navItems.slice(0, 6).map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    isActive ? 'text-brand-600 bg-brand-50' : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold text-brand-600 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Quick CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 text-white hover:bg-brand-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl border border-slate-200 bg-white text-navy-800 hover:bg-slate-50 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[500px] opacity-100 mt-3 pt-3 border-t border-slate-200/80' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1.5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-elevated">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-full py-2.5 rounded-xl text-center text-sm font-semibold bg-brand-600 text-white flex items-center justify-center gap-1.5"
              >
                Let's Connect
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
