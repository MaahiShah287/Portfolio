import { useReveal } from '@/hooks/useReveal';
import { experienceData } from '@/data/portfolio';
import { Briefcase, Award, ExternalLink, CheckCircle2, Star } from 'lucide-react';

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-20 lg:py-28 bg-white border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow-badge mb-3">
              <Briefcase size={13} className="text-brand-600" />
              03 — Professional Experience
            </div>
            <h2 className="section-title">
              Hands-on internship & practical application.
            </h2>
            <p className="section-subtitle mx-auto">
              Real-world industry exposure solving analytical problems, delivering dashboards, and deriving business insights.
            </p>
          </div>

          {/* Timeline Experience Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative pl-6 sm:pl-10 border-l-2 border-brand-200">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-brand-600 border-4 border-white shadow-sm ring-2 ring-brand-100" />

              {/* Experience Card */}
              <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-300 transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-200/70 mb-6">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
                        {experienceData.role}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 size={13} />
                        {experienceData.status}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-brand-700">
                      {experienceData.company}
                    </p>
                  </div>

                  {/* Best Performer Recognition Tag */}
                  {experienceData.isBestPerformer && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/90 shadow-sm shrink-0">
                      <Star size={15} className="text-amber-500 fill-amber-400" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Best Performer Awarded
                      </span>
                    </div>
                  )}
                </div>

                {/* Highlights List */}
                <div className="space-y-3 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Contributions & Responsibilities
                  </p>
                  <ul className="grid gap-2.5">
                    {experienceData.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges & Certificate Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-slate-200/70">
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'SQL', 'Power BI', 'EDA', 'Data Visualization', 'Excel'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white text-slate-700 border border-slate-200 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={experienceData.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100/90 border border-brand-200/80 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Award size={15} />
                    <span>View Certificate</span>
                    <ExternalLink size={13} className="text-brand-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
