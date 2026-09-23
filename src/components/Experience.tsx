import { useReveal } from '@/hooks/useReveal';
import { ExternalLink } from 'lucide-react';
import { DecorativeCurve } from './Decorations';

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-24 lg:py-32 bg-blush/30 relative overflow-hidden">
      <div className="absolute top-10 right-5 opacity-20">
        <DecorativeCurve />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">03 — Experience</p>
          <h2 className="section-title">Where I've applied my skills</h2>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} relative`}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-plum-100 -translate-x-1/2" />

          {/* Timeline item */}
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-8">
            {/* Milestone dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose border-4 border-ivory shadow-md z-10" />

            {/* Card */}
            <div className="md:w-1/2 md:ml-auto pl-12 md:pl-12">
              <div className="card card-hover p-6 bg-white shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-plum mb-1">
                      Data Analytics Intern
                    </h3>
                    <p className="text-rose font-medium text-sm">Elevate Labs</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                    COMPLETED
                  </span>
                </div>
                <p className="text-sm text-mauve leading-relaxed mb-4">
                  Completed a comprehensive data analytics internship focused on real-world data
                  analysis, building practical analytics projects, and developing hands-on skills
                  in data cleaning, exploration, visualization, and reporting.
                </p>
                <a
                  href="#certificate-link"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-plum hover:text-rose transition-colors group"
                >
                  View Certificate
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
