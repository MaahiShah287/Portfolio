// Subtle data-analytics-inspired decorative elements

export function DecorativeGrid({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {[0, 30, 60, 90, 120].map((x) => (
        <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="120" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2 4" />
      ))}
      {[0, 30, 60, 90, 120].map((y) => (
        <line key={`h-${y}`} x1="0" y1={y} x2="120" y2={y} stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2 4" />
      ))}
    </svg>
  );
}

export function DecorativeScatter({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {[
        { x: 15, y: 80, r: 2.5, c: '#3b82f6' },
        { x: 30, y: 65, r: 3, c: '#2563eb' },
        { x: 45, y: 55, r: 2, c: '#0d9488' },
        { x: 60, y: 35, r: 3.5, c: '#3b82f6' },
        { x: 75, y: 25, r: 2.5, c: '#2563eb' },
        { x: 88, y: 15, r: 4, c: '#0284c7' },
        { x: 25, y: 75, r: 1.5, c: '#94a3b8' },
        { x: 50, y: 45, r: 2, c: '#94a3b8' },
        { x: 70, y: 30, r: 1.8, c: '#94a3b8' },
      ].map((pt, i) => (
        <circle key={i} cx={pt.x} cy={pt.y} r={pt.r} fill={pt.c} opacity="0.45" />
      ))}
    </svg>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-2 py-4" aria-hidden="true">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-200" />
      <div className="w-1.5 h-1.5 rounded-full bg-brand-500/40" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-200" />
    </div>
  );
}
