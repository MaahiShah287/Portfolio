// Subtle data-visualization-inspired decorative SVG elements

export function DecorativeDots({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none">
      {[20, 40, 60, 80, 100].map((y) =>
        [20, 40, 60, 80, 100].map((x) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="1.5"
            fill="#C9829B"
            opacity={0.15 + ((x + y) % 40) / 100}
          />
        ))
      )}
    </svg>
  );
}

export function DecorativeCurve({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="200" height="60" viewBox="0 0 200 60" fill="none">
      <path
        d="M0 40 Q50 0 100 30 T200 20"
        stroke="#C9829B"
        strokeWidth="1.5"
        fill="none"
        opacity="0.25"
      />
      <circle cx="0" cy="40" r="3" fill="#C9829B" opacity="0.4" />
      <circle cx="100" cy="30" r="3" fill="#AFA1C8" opacity="0.4" />
      <circle cx="200" cy="20" r="3" fill="#5B3A4A" opacity="0.3" />
    </svg>
  );
}

export function DecorativeGrid({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="80" height="80" viewBox="0 0 80 80" fill="none">
      {[0, 20, 40, 60].map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="80" stroke="#AFA1C8" strokeWidth="0.5" opacity="0.2" />
      ))}
      {[0, 20, 40, 60].map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="80" y2={y} stroke="#AFA1C8" strokeWidth="0.5" opacity="0.2" />
      ))}
    </svg>
  );
}

export function DecorativePlus({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 4v16M4 12h16" stroke="#C9829B" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

export function DecorativeBlob({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="180" height="180" viewBox="0 0 180 180" fill="none">
      <path
        d="M90 10 C130 10 160 40 160 80 C160 130 120 170 80 160 C40 150 10 120 20 80 C30 40 50 10 90 10Z"
        fill="#F3E4EA"
        opacity="0.4"
      />
    </svg>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <DecorativeCurve className="opacity-30" />
      <div className="w-1.5 h-1.5 rounded-full bg-rose/40" />
      <DecorativeCurve className="opacity-30 -scale-x-100" />
    </div>
  );
}
