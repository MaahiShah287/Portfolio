import { useReveal } from '@/hooks/useReveal';
import { educationData } from '@/data/portfolio';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const { ref, visible } = useReveal();

  return (
    <section id="education" className="py-20 lg:py-28 bg-white border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow-badge mb-3">
              <GraduationCap size={13} className="text-brand-600" />
              07 — Education
            </div>
            <h2 className="section-title">
              Academic Foundation
            </h2>
            <p className="section-subtitle mx-auto">
              Rigorous undergraduate engineering curriculum with an analytical focus on algorithms, databases, and structured problem solving.
            </p>
          </div>

          {/* Education Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                {/* Degree & College Info (8 cols) */}
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200/70 flex items-center justify-center text-brand-600 shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200/80 inline-block mb-1">
                        {educationData.status} Student
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
                        {educationData.degree}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base font-semibold text-slate-700">
                    {educationData.institution}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                      <BookOpen size={13} className="text-brand-600" />
                      Relevant Engineering Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {educationData.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CGPA Feature Highlight Box (4 cols) */}
                <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                    <Award size={20} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Cumulative GPA
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
                    {educationData.cgpa}
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full mt-2 border border-emerald-200">
                    Scale: 10.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
