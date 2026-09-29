import { useReveal } from '@/hooks/useReveal';
import { dashboardsData } from '@/data/portfolio';
import { LayoutDashboard, Image } from 'lucide-react';

export default function Dashboards() {
  const { ref, visible } = useReveal();

  return (
    <section id="dashboards" className="py-20 lg:py-28 bg-white border-t border-slate-200/70 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-slate-100/60 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow-badge mb-3">
              <LayoutDashboard size={13} className="text-brand-600" />
              05 — Business Intelligence
            </div>
            <h2 className="section-title">
              Data Analytics Dashboards
            </h2>
            <p className="section-subtitle mx-auto">
              Interactive dashboards built to transform raw data into clear, actionable insights.
            </p>
          </div>

          {/* Dashboards Showcase Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {dashboardsData.map((dash) => {
              return (
                <div
                  key={dash.id}
                  className="bg-slate-50/60 rounded-3xl border border-slate-200 shadow-card hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Mock Dashboard Window Frame */}
                    <div className="bg-slate-900 border-b border-slate-800 p-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <span className="text-[10px] text-slate-400 font-mono ml-2 truncate max-w-[160px]">
                          {dash.title.toLowerCase().replace(/\s+/g, '_')}.pbix
                        </span>
                      </div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-brand-300 px-1.5 py-0.5 rounded bg-brand-500/20">
                        Live Visual
                      </span>
                    </div>

                    {/* Dashboard Image Canvas / Placeholder Zone */}
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200/80 border-b border-slate-200 flex flex-col items-center justify-center p-6 overflow-hidden group-hover:bg-slate-100 transition-colors">
                      {/* Subtle Grid Pattern Overlay */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                      {/* Mock Chart Artistry */}
                      <div className="relative flex flex-col items-center text-center z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-brand-600 mb-3 group-hover:scale-110 transition-transform">
                          <Image size={24} strokeWidth={1.75} />
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-300/80 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                          <span className="text-[11px] font-bold font-mono tracking-wider text-slate-700 uppercase">
                            {dash.imagePlaceholder}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-brand-600 transition-colors">
                        {dash.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {dash.description}
                      </p>

                      {/* Metrics (Present on Dashboard 1 with Exact Known Values) */}
                      {dash.metrics && dash.metrics.length > 0 && (
                        <div className="mb-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Known Dashboard Metrics
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {dash.metrics.map((metric) => (
                              <div key={metric.label} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                                <div className="text-xs font-bold text-navy-900">{metric.value}</div>
                                <div className="text-[10px] text-slate-500 mt-0.5">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tool Badges Footer */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {dash.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white text-navy-800 border border-slate-200/80 shadow-2xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
