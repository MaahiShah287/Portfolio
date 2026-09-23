import { useReveal } from '@/hooks/useReveal';
import { GraduationCap } from 'lucide-react';
import { DecorativeDots } from './Decorations';

export default function Education() {
  const { ref, visible } = useReveal();

  return (
    <section id="education" className="py-24 lg:py-32 bg-ivory relative overflow-hidden">
      <div className="absolute bottom-10 right-10 opacity-15">
        <DecorativeDots className="w-28 h-28" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">07 — Education</p>
          <h2 className="section-title">Academic foundation</h2>
        </div>

        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="card card-hover p-8 border border-plum-100/40 relative overflow-hidden">
            {/* Timeline accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-plum to-rose" />

            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blush flex items-center justify-center flex-shrink-0">
                <GraduationCap size={28} className="text-plum" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-bold text-plum mb-1">
                  B.Tech — Computer Engineering
                </h3>
                <p className="text-mauve text-sm mb-3">
                  Shah & Anchor Kutchhi Engineering College
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-rose/10 text-rose text-xs font-semibold border border-rose/20">
                    3rd Year
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-mauve">
                      CGPA
                    </span>
                    <span className="font-serif text-2xl font-bold text-plum">9.2</span>
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
