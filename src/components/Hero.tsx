import { ArrowRight, Mail, ArrowDown, Database, TrendingUp, Terminal, Layers, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-grid-pattern">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-brand-100/40 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Hero Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-50 text-brand-700 border border-brand-200/80 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              {personalInfo.eyebrow}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.12] mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-accent-indigo">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl font-semibold text-brand-900/90 mb-4 tracking-tight flex items-center gap-2 flex-wrap">
              <span>Data Analyst</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700 font-medium">Python</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700 font-medium">SQL</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700 font-medium">Power BI</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700 font-medium">Excel</span>
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a href="#projects" className="btn-primary w-full sm:w-auto">
                View My Projects
                <ArrowRight size={17} />
              </a>
              <a href="#contact" className="btn-secondary w-full sm:w-auto">
                <Mail size={17} className="text-slate-500" />
                Contact Me
              </a>
            </div>

            {/* Secondary Link & Micro Badge */}
            <div className="flex items-center gap-6 pt-2">
              <a
                href="#about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-600 transition-colors"
              >
                <span>Explore my work</span>
                <ArrowDown size={14} className="animate-bounce" />
              </a>
              <span className="h-3.5 w-px bg-slate-300" />
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>3rd Year Computer Engineering • SAKEC</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium Data Analytics Composition (5 cols) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <HeroAnalyticsBoard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroAnalyticsBoard() {
  return (
    <div className="relative w-full max-w-md lg:max-w-none">
      {/* Glow behind dashboard */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-500/20 to-accent-teal/20 blur-xl opacity-75" />

      {/* Main Glassmorphism Analytics Visual */}
      <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-card-hover p-5 sm:p-6 backdrop-blur-sm">
        {/* Top Header: Mock Dashboard Controls */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-xs font-semibold text-slate-700 ml-2 flex items-center gap-1">
              <Database size={13} className="text-brand-600" />
              analytics_pipeline.py
            </span>
          </div>
          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            Status: Active
          </span>
        </div>

        {/* Analytical Metric Cards Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Model Recall</span>
              <TrendingUp size={13} className="text-brand-600" />
            </div>
            <div className="text-xl font-bold text-navy-900 tracking-tight">81.55%</div>
            <div className="text-[10px] text-brand-600 font-medium mt-0.5">Churn Prediction Peak</div>
          </div>
          <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Records Analyzed</span>
              <Layers size={13} className="text-accent-teal" />
            </div>
            <div className="text-xl font-bold text-navy-900 tracking-tight">541,909</div>
            <div className="text-[10px] text-accent-teal font-medium mt-0.5">Online Retail CLV</div>
          </div>
        </div>

        {/* Interactive Dynamic Bar Chart Preview */}
        <div className="bg-white rounded-xl p-3.5 border border-slate-100 shadow-sm mb-4">
          <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-3">
            <span className="font-semibold text-navy-900">Customer Segment Distribution</span>
            <span className="text-[11px] text-slate-400 font-mono">RFM Segments</span>
          </div>
          <div className="flex items-end justify-between h-24 gap-2 pt-2 border-b border-slate-100 pb-1">
            {[
              { h: '45%', label: 'Loyal', val: '28%' },
              { h: '75%', label: 'High', val: '41%' },
              { h: '92%', label: 'Top Tier', val: '£1.06M', highlight: true },
              { h: '60%', label: 'At-Risk', val: '26%' },
              { h: '38%', label: 'Occasional', val: '15%' },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                <div
                  className={`w-full rounded-t-md transition-all duration-300 ${
                    bar.highlight
                      ? 'bg-gradient-to-t from-brand-600 to-brand-500 shadow-sm'
                      : 'bg-slate-200 group-hover:bg-brand-200'
                  }`}
                  style={{ height: bar.h }}
                />
                <span className="text-[9px] font-medium text-slate-500 truncate w-full text-center">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SQL & Code Snippet Frame */}
        <div className="bg-navy-900 rounded-xl p-3 font-mono text-[11px] text-slate-300 border border-navy-800 shadow-inner">
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5 pb-1 border-b border-navy-800">
            <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
              <Terminal size={11} />
              query_high_value_clv.sql
            </span>
            <span className="text-emerald-400">OPTIMIZED</span>
          </div>
          <pre className="text-[10.5px] leading-relaxed text-slate-300 overflow-x-auto">
            <span className="text-purple-400">SELECT</span> customer_id, <span className="text-amber-300">SUM</span>(revenue) <span className="text-purple-400">AS</span> clv,{'\n'}
            {'       '}<span className="text-purple-400">CASE WHEN</span> clv &gt; <span className="text-amber-400">10000</span> <span className="text-purple-400">THEN</span> <span className="text-emerald-300">'Top 119'</span>{'\n'}
            {'       '}<span className="text-purple-400">GROUP BY</span> customer_id <span className="text-purple-400">ORDER BY</span> clv <span className="text-purple-400">DESC</span>;
          </pre>
        </div>

        {/* Floating Mini Badge */}
        <div className="absolute -bottom-3 -right-3 bg-white rounded-xl border border-slate-200/80 shadow-md p-2.5 flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
            <CheckCircle2 size={16} />
          </div>
          <div className="text-left">
            <div className="text-[11px] font-bold text-navy-900 leading-tight">Academic Merit</div>
            <div className="text-[10px] font-semibold text-brand-600">CGPA 9.2 / 10</div>
          </div>
        </div>
      </div>
    </div>
  );
}
