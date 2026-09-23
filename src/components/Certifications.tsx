import { useReveal } from '@/hooks/useReveal';
import { certifications } from '@/data/portfolio';
import { ExternalLink } from 'lucide-react';
import { DecorativeCurve } from './Decorations';

export default function Certifications() {
  const { ref, visible } = useReveal();

  return (
    <section id="certifications" className="py-24 lg:py-32 bg-blush/30 relative overflow-hidden">
      <div className="absolute top-10 left-5 opacity-20">
        <DecorativeCurve />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">06 — Certifications</p>
          <h2 className="section-title">Certifications & achievements</h2>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="card card-hover p-6 border border-plum-100/40"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blush flex items-center justify-center">
                    <Icon size={24} className="text-plum" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-plum-50 text-plum text-xs font-semibold border border-plum-100">
                    {cert.provider}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-plum mb-4">
                  {cert.title}
                </h3>
                <a
                  href={cert.link}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-plum hover:text-rose transition-colors group"
                >
                  View Certificate
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
