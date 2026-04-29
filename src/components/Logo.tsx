export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Петро Мобил логотип" role="img">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="4" width="24" height="20" rx="2" stroke="#2563eb" strokeWidth="2" />
        <rect x="6" y="8" width="6" height="8" rx="1" fill="#2563eb" opacity="0.3" stroke="#2563eb" strokeWidth="1.5" />
        <rect x="16" y="8" width="6" height="8" rx="1" fill="#2563eb" opacity="0.3" stroke="#2563eb" strokeWidth="1.5" />
        <line x1="6" y1="20" x2="22" y2="20" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="12" r="1.5" fill="#2563eb" />
        <circle cx="19" cy="12" r="1.5" fill="#2563eb" />
      </svg>
      <span className="text-lg font-bold text-foreground">Петро Мобил</span>
    </div>
  )
}