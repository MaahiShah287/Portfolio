import { useReveal } from '@/hooks/useReveal';
import { skillCategories } from '@/data/portfolio';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-50/70 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow-badge mb-3">
              <Sparkles size={13} className="text-brand-600" />
              02 — Skills & Toolkit
            </div>
            <h2 className="section-title">
              Technical toolkit built for data-driven results.
            </h2>
            <p className="section-subtitle mx-auto">
              Categorized core competencies developed through practical coursework, real datasets, and internship projects.
            </p>
          </div>

          {/* Categorized Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-medium text-slate-400">
                          {category.skills.length} Core Competencies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                      {category.subtitle}
                    </p>
                  </div>

                  {/* Skills Badges (No fake percentages) */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100/80 text-navy-800 border border-slate-200/70 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Honest Skill Assurance Notice */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 shadow-sm">
              <CheckCircle2 size={15} className="text-emerald-500" />
              <span>
                Demonstrated through functional code repositories, SQL analyses, and interactive dashboards.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
