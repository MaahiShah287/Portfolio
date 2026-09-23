import { useReveal } from '@/hooks/useReveal';
import { dashboards } from '@/data/portfolio';
import { Upload, BarChart3 } from 'lucide-react';
import { DecorativeGrid } from './Decorations';

export default function Dashboards() {
  const { ref, visible } = useReveal();

  return (
    <section id="dashboards" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-10 right-5 opacity-15">
        <DecorativeGrid className="w-32 h-32" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">05 — Dashboards</p>
          <h2 className="section-title">Data Analytics Dashboards</h2>
          <p className="text-mauve mt-4 text-lg">Turning raw data into decisions.</p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} grid md:grid-cols-3 gap-6`}
        >
          {dashboards.map((dash, idx) => (
            <div
              key={dash.title}
              className="card card-hover overflow-hidden group"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Dashboard placeholder frame */}
              <div className="aspect-[4/3] bg-gradient-to-br from-ivory to-blush/30 border-b border-plum-100/30 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-plum-100/40">
                      <Upload size={24} className="text-rose" />
                    </div>
                    <p className="text-xs font-semibold tracking-widest text-plum/40">
                      UPLOAD DASHBOARD IMAGE
                    </p>
                  </div>
                </div>
                {/* Mini chart decoration */}
                <div className="absolute bottom-3 left-3 opacity-20">
                  <BarChart3 size={20} className="text-plum" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-plum mb-2">{dash.title}</h3>
                <p className="text-sm text-mauve leading-relaxed">{dash.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
