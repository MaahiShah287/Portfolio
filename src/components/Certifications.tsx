import { useReveal } from '@/hooks/useReveal';
import { certificationsData } from '@/data/portfolio';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const { ref, visible } = useReveal();

  const getProviderBadge = (provider: string) => {
    switch (provider) {
      case 'IBM':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Deloitte':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Cisco':
        return 'bg-sky-50 text-sky-800 border-sky-200';
      default:
        return 'bg-slate-50 text-slate-800 border-slate-200';
    }
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow-badge mb-3">
              <Award size={13} className="text-brand-600" />
              06 — Verified Credentials
            </div>
            <h2 className="section-title">
              Certifications
            </h2>
            <p className="section-subtitle mx-auto">
              Formal industry certifications in Python programming, exploratory data analysis, business intelligence, and foundational data science.
            </p>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {certificationsData.map((cert) => {
              return (
                <div
                  key={cert.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Provider & Shield */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${getProviderBadge(cert.provider)}`}>
                        {cert.provider}
                      </span>
                      <ShieldCheck size={18} className="text-emerald-500" />
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-brand-600 transition-colors mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Issued by {cert.provider}
                    </p>
                  </div>

                  {/* Action Link with Placeholder */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors group/link"
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                    <span className="text-[10px] font-mono text-slate-400">
                      Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
