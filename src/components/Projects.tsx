import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { projects, type Project } from '@/data/portfolio';
import { DecorativeDots, DecorativePlus, DecorativeGrid } from './Decorations';

export default function Projects() {
  const { ref, visible } = useReveal();
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-ivory relative overflow-hidden">
      <div className="absolute top-10 left-5 opacity-15">
        <DecorativeDots className="w-28 h-28" />
      </div>
      <div className="absolute bottom-20 right-5 opacity-20">
        <DecorativePlus className="w-10 h-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">04 — Projects</p>
          <h2 className="section-title">Analytics projects I'm proud of</h2>
        </div>

        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} space-y-8`}>
          {/* Featured project */}
          <FeaturedProject project={featured} />

          {/* Other projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((project, idx) => (
              <ProjectCard key={project.number} project={project} delay={idx * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const churnStats = [
    { label: 'Customers', value: '7,043' },
    { label: 'Churn Rate', value: '26.47%' },
    { label: 'High-Risk', value: '172' },
    { label: 'Test Recall', value: '81.55%' },
    { label: 'ROC-AUC', value: '0.8288' },
  ];

  return (
    <div className="card card-hover overflow-hidden shadow-md">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left — info */}
        <div className="p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-serif font-bold text-rose/30">{project.number}</span>
            <span className="px-3 py-1 rounded-full bg-rose/10 text-rose text-xs font-semibold">
              FEATURED
            </span>
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-plum mb-4">
            {project.title}
          </h3>
          <p className="text-mauve leading-relaxed mb-5">{project.description}</p>

          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-plum mb-2">
              Key Highlights
            </p>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-mauve">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose mt-1.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="skill-pill">{t}</span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} className="inline-flex items-center gap-2 px-5 py-2.5 bg-plum text-white text-sm font-medium rounded-lg hover:bg-plum-600 transition-colors">
                <Github size={16} /> GitHub
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} className="inline-flex items-center gap-2 px-5 py-2.5 border border-plum/30 text-plum text-sm font-medium rounded-lg hover:bg-plum hover:text-white transition-colors">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Right — dark plum analytics panel */}
        <div className="bg-plum-900 p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-10">
            <DecorativeGrid className="w-32 h-32" />
          </div>
          <div className="relative">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-6">
              Model Performance Metrics
            </p>
            <div className="grid grid-cols-2 gap-4">
              {churnStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-white font-serif mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-rose font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            {/* Mini chart decoration */}
            <div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-xs text-white/60 mb-2">Churn Distribution</div>
              <div className="flex items-end gap-1.5 h-16">
                {[30, 45, 35, 60, 40, 75, 55, 85, 50, 65, 45, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background: i % 3 === 0 ? '#C9829B' : i % 3 === 1 ? '#AFA1C8' : '#5B3A4A',
                      opacity: 0.6 + (h / 200),
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <div
      className="card card-hover overflow-hidden group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Preview area */}
      <div className="h-44 relative overflow-hidden">
        <ProjectPreview type={project.previewType} />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-serif font-bold text-rose/30">{project.number}</span>
          <h3 className="font-serif text-lg font-bold text-plum">{project.title}</h3>
        </div>
        <p className="text-sm text-mauve leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium bg-plum-50 text-plum border border-plum-100">
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-1.5 mb-5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-mauve">
              <span className="w-1 h-1 rounded-full bg-rose mt-1.5 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} className="inline-flex items-center gap-1.5 text-sm font-medium text-plum hover:text-rose transition-colors">
              <Github size={16} /> GitHub
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} className="inline-flex items-center gap-1.5 text-sm font-medium text-plum hover:text-rose transition-colors">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ type }: { type: Project['previewType'] }) {
  if (type === 'churn') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-plum-50 to-blush flex items-center justify-center">
        <span className="text-xs font-semibold tracking-widest text-plum/40">PROJECT PREVIEW</span>
      </div>
    );
  }
  if (type === 'blush') {
    return (
      <div className="w-full h-full bg-blush/40 flex items-center justify-center relative">
        <svg viewBox="0 0 200 80" className="w-3/4 h-3/4">
          <polyline points="0,60 30,40 60,50 90,20 120,35 150,15 180,25 200,10"
            fill="none" stroke="#5B3A4A" strokeWidth="2" />
          {[[0,60],[30,40],[60,50],[90,20],[120,35],[150,15],[180,25],[200,10]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="#C9829B" />
          ))}
        </svg>
        <span className="absolute bottom-2 right-3 text-[10px] font-semibold tracking-widest text-plum/30">PROJECT PREVIEW</span>
      </div>
    );
  }
  if (type === 'lavender') {
    return (
      <div className="w-full h-full bg-lavender-light/50 flex items-center justify-center relative">
        <div className="flex items-end gap-2 h-20">
          {[40, 70, 50, 85, 60, 75, 45].map((h, i) => (
            <div key={i} className="w-4 rounded-t" style={{ height: `${h}%`, background: i % 2 ? '#5B3A4A' : '#AFA1C8' }} />
          ))}
        </div>
        <span className="absolute bottom-2 right-3 text-[10px] font-semibold tracking-widest text-plum/30">PROJECT PREVIEW</span>
      </div>
    );
  }
  if (type === 'sql') {
    return (
      <div className="w-full h-full bg-plum-900 flex items-center justify-center">
        <span className="text-xs font-mono text-rose/60">SELECT * FROM insights</span>
      </div>
    );
  }
  // dashboard
  return (
    <div className="w-full h-full bg-gradient-to-br from-lavender-light/40 to-blush/40 flex items-center justify-center relative">
      <div className="grid grid-cols-3 gap-1.5 w-3/4">
        {[0,1,2,3,4,5].map((i) => (
          <div key={i} className="h-8 rounded bg-white/60 border border-plum-100/30" />
        ))}
      </div>
      <span className="absolute bottom-2 right-3 text-[10px] font-semibold tracking-widest text-plum/30">PROJECT PREVIEW</span>
    </div>
  );
}
