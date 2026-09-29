import { useReveal } from '@/hooks/useReveal';
import { projectsData } from '@/data/portfolio';
import {
  Github,
  ExternalLink,
  Sparkles,
  Database,
  TrendingUp,
  Terminal,
  Activity,
  CheckCircle2,
  PieChart,
} from 'lucide-react';

export default function Projects() {
  const { ref, visible } = useReveal();

  const [project1, project2, project3, project4] = projectsData;

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50/70 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-brand-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-teal-100/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow-badge mb-3">
              <Sparkles size={13} className="text-brand-600" />
              04 — Portfolio Projects
            </div>
            <h2 className="section-title">
              Featured Projects
            </h2>
            <p className="section-subtitle mx-auto">
              End-to-end data analytics and machine learning solutions addressing customer churn, CLV forecasting, workforce attrition, and relational SQL queries.
            </p>
          </div>

          <div className="space-y-12">
            {/* ==============================================================
                PROJECT 1: Customer Churn Intelligence System (Flagship Card)
                ============================================================== */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-12">
                {/* Left Content (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-200/80">
                        PROJECT {project1.number}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {project1.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
                      {project1.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {project1.description}
                    </p>

                    {/* Dataset specs */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 mb-6 flex items-center gap-3 text-xs text-slate-700">
                      <Database size={16} className="text-brand-600 shrink-0" />
                      <span>
                        <strong className="font-semibold text-navy-900">Dataset:</strong> {project1.dataset}
                      </span>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        System Capabilities
                      </p>
                      <ul className="grid gap-2">
                        {project1.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 size={15} className="text-brand-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project1.technologies.map((t) => (
                        <span key={t} className="data-badge font-semibold text-brand-900 bg-brand-50/70 border-brand-200/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={project1.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                    {project1.liveDemoUrl && (
                      <a
                        href={project1.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Visual Panel: Telemetry & Model Stats (5 cols) */}
                <div className="lg:col-span-5 bg-gradient-to-br from-navy-900 to-slate-900 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-navy-800">
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Activity size={16} className="text-brand-400" />
                        <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                          Model Performance Metrics
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-400/30">
                        Threshold: 0.4
                      </span>
                    </div>

                    {/* Stat Badges Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project1.stats?.map((stat) => (
                        <div
                          key={stat.label}
                          className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {stat.value}
                          </div>
                          <div className="text-[11px] text-slate-300 font-medium mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* SHAP Feature Importance Mockup */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
                        <span className="font-semibold">SHAP Feature Impact</span>
                        <span className="text-[10px] text-slate-400">Log Odds Impact</span>
                      </div>
                      <div className="space-y-2.5">
                        {[
                          { feature: 'Month-to-month Contract', pct: '88%', col: 'bg-red-400' },
                          { feature: 'Total Charges / Tenure', pct: '74%', col: 'bg-amber-400' },
                          { feature: 'Fiber Optic Internet', pct: '62%', col: 'bg-brand-400' },
                          { feature: 'No Online Security', pct: '50%', col: 'bg-blue-400' },
                        ].map((item, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-[10px] text-slate-300">
                              <span>{item.feature}</span>
                              <span className="font-mono">{item.pct}</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                              <div className={`h-full rounded-full ${item.col}`} style={{ width: item.pct }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Evaluated: SMOTE Balanced</span>
                    <span className="text-emerald-400 font-semibold">ROC-AUC: 0.8288</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ==============================================================
                PROJECT 2: Customer Lifetime Value (CLV) Prediction
                ============================================================== */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-12">
                {/* Visual Area First on LG (5 cols) */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-navy-900 p-6 sm:p-8 text-white flex flex-col justify-between order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-navy-800">
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-accent-teal" />
                        <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                          Random Forest CLV Model
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-400/30">
                        R²: 0.57
                      </span>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project2.stats?.map((stat) => (
                        <div
                          key={stat.label}
                          className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {stat.value}
                          </div>
                          <div className="text-[11px] text-slate-300 font-medium mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Customer Value Tier Distribution */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <span className="text-xs font-semibold text-slate-300 block mb-3">
                        RFM Revenue Impact
                      </span>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-300">Top 119 High-Value Customers</span>
                          <span className="font-mono font-bold text-teal-300">~£1.06M Revenue</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-teal-400 to-brand-400" style={{ width: '78%' }} />
                        </div>
                        <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
                          MAE of £678.69 validated via hold-out cross validation on 541,909 transactions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Dataset: Online Retail</span>
                    <span className="text-teal-300 font-semibold">4,335 Customers</span>
                  </div>
                </div>

                {/* Left / Info Content (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between order-1 lg:order-2">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-200/80">
                        PROJECT {project2.number}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-brand-700 border border-brand-200">
                        {project2.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
                      {project2.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {project2.description}
                    </p>

                    {/* Dataset specs */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 mb-6 flex items-center gap-3 text-xs text-slate-700">
                      <Database size={16} className="text-brand-600 shrink-0" />
                      <span>
                        <strong className="font-semibold text-navy-900">Dataset:</strong> {project2.dataset} (541,909 transactions, 4,335 customers)
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Analytics Highlights
                      </p>
                      <ul className="grid gap-2">
                        {project2.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 size={15} className="text-brand-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project2.technologies.map((t) => (
                        <span key={t} className="data-badge font-semibold text-brand-900 bg-brand-50/70 border-brand-200/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={project2.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                    {project2.liveDemoUrl && (
                      <a
                        href={project2.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ==============================================================
                PROJECTS 3 & 4 (2-Column Grid)
                ============================================================== */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* PROJECT 3: HR Analytics */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-200/80">
                      PROJECT {project3.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                      {project3.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                    {project3.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project3.description}
                  </p>

                  {/* Visual Preview Box */}
                  <div className="bg-slate-900 rounded-2xl p-5 mb-6 text-white border border-slate-800">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-2 border-b border-slate-800">
                      <span className="flex items-center gap-1.5 font-semibold text-purple-300">
                        <PieChart size={14} />
                        Attrition Risk Breakdown
                      </span>
                      <span className="text-[10px] text-slate-400">Power BI Visual</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Sales Department Turnover</span>
                          <span className="text-purple-300 font-mono font-semibold">High Risk</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-purple-400 rounded-full" style={{ width: '68%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>R&D Satisfaction & Overtime</span>
                          <span className="text-amber-300 font-mono font-semibold">Moderate Risk</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-amber-400 rounded-full" style={{ width: '42%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Core Features
                    </p>
                    <ul className="grid gap-2">
                      {project3.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 size={14} className="text-brand-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project3.technologies.map((t) => (
                      <span key={t} className="data-badge text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  <a
                    href={project3.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  {project3.liveDemoUrl && (
                    <a
                      href={project3.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* PROJECT 4: E-Commerce Sales Analytics (SQL) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-200/80">
                      PROJECT {project4.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {project4.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                    {project4.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project4.description}
                  </p>

                  {/* SQL Terminal Visual Mockup */}
                  <div className="bg-navy-900 rounded-2xl p-4 mb-6 text-white font-mono text-[11px] border border-navy-800 shadow-inner">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 pb-1 border-b border-navy-800">
                      <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                        <Terminal size={12} />
                        sales_aggregation.sql
                      </span>
                      <span className="text-emerald-400">MYSQL</span>
                    </div>
                    <pre className="text-slate-300 leading-relaxed overflow-x-auto">
                      <span className="text-purple-400">SELECT</span> p.category, <span className="text-amber-300">COUNT</span>(o.order_id),{'\n'}
                      {'       '}<span className="text-amber-300">SUM</span>(oi.price * oi.quantity) <span className="text-purple-400">AS</span> gross_sales{'\n'}
                      <span className="text-purple-400">FROM</span> orders o{'\n'}
                      <span className="text-purple-400">JOIN</span> order_items oi <span className="text-purple-400">ON</span> o.id = oi.order_id{'\n'}
                      <span className="text-purple-400">GROUP BY</span> p.category <span className="text-purple-400">ORDER BY</span> gross_sales <span className="text-purple-400">DESC</span>;
                    </pre>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Analytical Focus
                    </p>
                    <ul className="grid gap-2">
                      {project4.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 size={14} className="text-brand-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project4.technologies.map((t) => (
                      <span key={t} className="data-badge text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  <a
                    href={project4.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  {project4.liveDemoUrl && (
                    <a
                      href={project4.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
