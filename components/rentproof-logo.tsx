type RentProofLogoProps = {
  className?: string;
  tone?: "light" | "dark";
  showTagline?: boolean;
};

export function RentProofLogo({
  className = "",
  tone = "dark",
  showTagline = true,
}: RentProofLogoProps) {
  const isLight = tone === "light";
  const wordmarkColor = isLight ? "text-white" : "text-slate-950";
  const taglineColor = isLight ? "text-slate-300" : "text-slate-500";
  const borderColor = isLight ? "border-white/10" : "border-slate-200";
  const markBackground = isLight
    ? "from-slate-900 via-slate-800 to-slate-700"
    : "from-slate-950 via-slate-900 to-slate-800";
  const markRing = isLight ? "ring-white/10" : "ring-slate-200";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br ${markBackground} ${borderColor} ring-1 ${markRing}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          className="h-8 w-8"
          fill="none"
        >
          <rect
            x="11"
            y="7"
            width="20"
            height="28"
            rx="5"
            stroke="#DCE7E0"
            strokeWidth="2.25"
          />
          <path
            d="M17 16H25.5"
            stroke="#DCE7E0"
            strokeWidth="2.25"
            strokeLinecap="round"
          />
          <path
            d="M17 21H25.5"
            stroke="#DCE7E0"
            strokeWidth="2.25"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M16 28.5L20 32.5L33 19.5"
            stroke="#34D399"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="min-w-0">
        <div
          className={`text-xl font-semibold tracking-[-0.03em] ${wordmarkColor}`}
        >
          RentProof
        </div>
        {showTagline ? (
          <div className={`text-xs leading-5 ${taglineColor}`}>
            Evidence and PRS readiness for landlords
          </div>
        ) : null}
      </div>
    </div>
  );
}
