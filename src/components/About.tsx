import { useReveal } from '@/hooks/useReveal';
import { DecorativeCurve, DecorativePlus } from './Decorations';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-24 lg:py-32 bg-ivory relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-20">
        <DecorativeCurve />
      </div>
      <div className="absolute bottom-20 left-5 opacity-20">
        <DecorativePlus className="w-10 h-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} grid lg:grid-cols-2 gap-12 lg:gap-20 items-start`}
        >
          {/* LEFT */}
          <div>
            <p className="eyebrow mb-4">01 — About Me</p>
            <h2 className="section-title mb-6">Turning curiosity into insights.</h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-rose" />
              <span className="text-sm font-medium text-rose">Computer Engineering Student</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-base md:text-lg text-mauve leading-relaxed mb-8">
              I'm a Computer Engineering student with a deep passion for data analytics. I love the
              process of taking messy, real-world data and transforming it into clear, actionable
              insights that drive better decisions. From writing SQL queries to building predictive
              models and interactive dashboards, I enjoy every step of the analytics journey.
            </p>
            <p className="text-base md:text-lg text-mauve leading-relaxed mb-8">
              My goal is to combine my engineering foundation with analytical skills to solve
              meaningful business problems and help organizations make data-driven decisions with
              confidence.
            </p>

            {/* Currently focusing card */}
            <div className="bg-blush/50 rounded-2xl p-6 border-l-4 border-plum relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose/10 rounded-full -translate-y-8 translate-x-8 blur-xl" />
              <h3 className="font-serif text-lg font-semibold text-plum mb-4 relative">
                Currently focusing on
              </h3>
              <div className="flex flex-wrap gap-2 relative">
                {['SQL', 'Data Analytics', 'Python', 'Real-world analytics projects'].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white/70 rounded-lg text-sm font-medium text-plum border border-plum-100/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
