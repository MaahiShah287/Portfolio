import { ArrowRight, Mail } from 'lucide-react';
import { DecorativeDots, DecorativePlus } from './Decorations';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 opacity-30 animate-float-slow">
        <DecorativeDots className="w-32 h-32" />
      </div>
      <div className="absolute bottom-32 left-10 opacity-20">
        <DecorativePlus className="w-8 h-8" />
      </div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blush/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="animate-fade-up">
            <p className="eyebrow mb-4">Aspiring Data Analyst</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
              Hi, I'm <span className="text-plum">Maahi</span>{' '}
              <span className="text-rose">Shah</span>
            </h1>
            <p className="text-lg font-medium text-charcoal/80 mb-4">
              Data Analyst | Python | SQL | Power BI | Excel
            </p>
            <p className="text-base text-mauve leading-relaxed max-w-lg mb-8">
              Computer Engineering student passionate about turning data into meaningful insights
              and building practical analytics solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT — Abstract analytics composition */}
          <div className="relative animate-fade-in">
            <HeroVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisualization() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Background gradient blob */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blush/40 to-lavender-light/40 blur-2xl" />

      {/* Main panel */}
      <div className="relative w-full h-full rounded-[2rem] border border-plum-100/40 bg-white/60 backdrop-blur-sm p-6 flex flex-col gap-4">
        {/* Floating bar chart */}
        <div className="absolute -top-4 -left-4 w-32 h-24 bg-white rounded-xl border border-plum-100/50 shadow-lg p-3 animate-float-slow">
          <div className="flex items-end justify-between h-full gap-1">
            {[40, 65, 45, 80, 55, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  background: i % 2 === 0 ? '#5B3A4A' : '#C9829B',
                  opacity: 0.7 + i * 0.05,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating line chart */}
        <div className="absolute top-6 -right-4 w-36 h-20 bg-white rounded-xl border border-plum-100/50 shadow-lg p-3 animate-float-medium">
          <svg viewBox="0 0 120 50" className="w-full h-full">
            <polyline
              points="0,35 20,20 40,28 60,10 80,22 100,8 120,15"
              fill="none"
              stroke="#5B3A4A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[[0,35],[20,20],[40,28],[60,10],[80,22],[100,8],[120,15]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="2" fill="#C9829B" />
            ))}
          </svg>
        </div>

        {/* Circular data viz */}
        <div className="flex-1 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-48 h-48">
            {/* Outer ring */}
            <circle cx="100" cy="100" r="85" fill="none" stroke="#F3E4EA" strokeWidth="12" />
            <circle
              cx="100" cy="100" r="85"
              fill="none"
              stroke="#5B3A4A"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="340 534"
              transform="rotate(-90 100 100)"
              opacity="0.8"
            />
            {/* Middle ring */}
            <circle cx="100" cy="100" r="65" fill="none" stroke="#EDE8F4" strokeWidth="10" />
            <circle
              cx="100" cy="100" r="65"
              fill="none"
              stroke="#C9829B"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="280 408"
              transform="rotate(-90 100 100)"
              opacity="0.7"
            />
            {/* Inner ring */}
            <circle cx="100" cy="100" r="45" fill="none" stroke="#F3E4EA" strokeWidth="8" />
            <circle
              cx="100" cy="100" r="45"
              fill="none"
              stroke="#AFA1C8"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="200 283"
              transform="rotate(-90 100 100)"
              opacity="0.6"
            />
            {/* Center text */}
            <text x="100" y="95" textAnchor="middle" className="font-serif" fill="#5B3A4A" fontSize="22" fontWeight="bold">
              81%
            </text>
            <text x="100" y="112" textAnchor="middle" fill="#756D74" fontSize="9">
              Recall
            </text>
          </svg>
        </div>

        {/* Bottom SQL/code element */}
        <div className="bg-plum-900 rounded-xl p-4 text-white/90 font-mono text-xs leading-relaxed animate-float-slow">
          <div className="flex gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-rose/60" />
            <span className="w-2 h-2 rounded-full bg-lavender/60" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
          </div>
          <div>
            <span className="text-rose">SELECT</span> customer_id,<br />
            <span className="text-rose">COUNT</span>(*) <span className="text-rose">AS</span> orders<br />
            <span className="text-rose">FROM</span> transactions<br />
            <span className="text-rose">GROUP BY</span> customer_id;<br />
            <span className="text-lavender">-- 7,043 rows</span>
          </div>
        </div>

        {/* Floating data points */}
        <div className="absolute -bottom-3 right-8 w-28 h-16 bg-white rounded-xl border border-plum-100/50 shadow-lg p-3 animate-float-medium">
          <div className="text-[10px] text-mauve font-medium mb-1">Churn Rate</div>
          <div className="text-lg font-bold text-plum">26.47%</div>
          <div className="h-1 rounded-full bg-blush mt-1">
            <div className="h-1 rounded-full bg-rose" style={{ width: '26%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
