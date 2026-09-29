import { useReveal } from '@/hooks/useReveal';
import { personalInfo } from '@/data/portfolio';
import { Sparkles, Database, PieChart, Cpu, Compass, CheckCircle2, GraduationCap } from 'lucide-react';

export default function About() {
  const { ref, visible } = useReveal();

  const passions = [
    {
      icon: Database,
      title: 'Working with data',
      desc: 'Querying, transforming, and extracting signal from structured tables.',
    },
    {
      icon: Compass,
      title: 'Finding patterns',
      desc: 'Uncovering trends, correlations, and business anomalies through EDA.',
    },
    {
      icon: PieChart,
      title: 'Creating dashboards',
      desc: 'Building clear visual stories with Power BI and Excel for decision-makers.',
    },
    {
      icon: Cpu,
      title: 'Solving problems with tech',
      desc: 'Applying engineering principles and ML models to solve real-world challenges.',
    },
  ];

  const focusSkills = [
    'SQL',
    'Data Analytics',
    'Python',
    'Real-world analytics projects',
  ];

  const coreTech = ['SQL', 'Python', 'Power BI', 'Excel', 'Machine Learning', 'Data Visualization'];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Eyebrow and Section Header */}
          <div className="mb-12">
            <div className="eyebrow-badge mb-3">
              <Sparkles size={13} className="text-brand-600" />
              01 — About Me
            </div>
            <h2 className="section-title">
              Engineering mindset meets data curiosity.
            </h2>
            <p className="section-subtitle">
              Combining a technical Computer Engineering foundation with practical analytical capabilities.
            </p>
          </div>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT COLUMN: Narrative & Academic Highlight (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-base sm:text-lg text-slate-700 leading-relaxed space-y-4">
                <p>
                  I am a <strong className="text-navy-900 font-semibold">Computer Engineering student</strong> developing
                  my skills in <strong className="text-brand-600 font-semibold">Data Analytics</strong> and looking for
                  opportunities where I can apply analytical and technical skills to real-world problems.
                </p>
                <p className="text-slate-600 text-base">
                  Throughout my academic journey and internship, I have built practical projects involving{' '}
                  <span className="font-semibold text-navy-900">SQL, Python, Power BI, Excel, Machine Learning, and Data Visualization</span>.
                  I focus on writing clean queries, discovering actionable trends, and communicating data clearly through intuitive visualizations.
                </p>
              </div>

              {/* Education Snippet Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200/70 flex items-center justify-center text-brand-600 shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-navy-900">
                        {personalInfo.education.degree}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        CGPA {personalInfo.education.cgpa}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {personalInfo.education.college}
                    </p>
                    <span className="inline-block text-[11px] font-semibold text-brand-700 mt-2 bg-brand-50/80 px-2 py-0.5 rounded">
                      Currently in {personalInfo.education.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Technologies Tag Cloud */}
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                  Applied Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {coreTech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100/90 text-navy-800 border border-slate-200/70 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: What I Enjoy & Currently Focusing On Card (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* What I Enjoy Grid */}
              <div className="bg-slate-50/60 rounded-2xl p-6 border border-slate-200/80">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                  What I genuinely enjoy doing
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {passions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:border-brand-300 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                          <Icon size={17} />
                        </div>
                        <h4 className="text-xs font-bold text-navy-900 mb-1">{item.title}</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Distinct "Currently focusing on" Card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-brand-50 via-white to-blue-50/40 p-6 border-2 border-brand-200/80 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
                  <h3 className="text-sm font-bold text-brand-900 uppercase tracking-wider">
                    Currently focusing on
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  Deepening analytical rigor and expanding real-world project complexity daily:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {focusSkills.map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white text-navy-900 border border-brand-200 shadow-sm hover:border-brand-400 hover:text-brand-600 transition-colors"
                    >
                      <CheckCircle2 size={14} className="text-brand-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
