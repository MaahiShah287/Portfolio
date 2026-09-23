import { useReveal } from '@/hooks/useReveal';
import { skillCategories } from '@/data/portfolio';
import { DecorativeDots, DecorativePlus } from './Decorations';

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 opacity-15">
        <DecorativeDots className="w-24 h-24" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <DecorativePlus className="w-12 h-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">02 — Skills</p>
          <h2 className="section-title">Tools that turn data into decisions</h2>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className={`card card-hover p-6 ${cat.bg} border border-plum-100/40`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Icon size={22} className={cat.accent} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-plum">{cat.title}</h3>
                </div>
                <p className="text-sm text-mauve leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
