/**
 * Fluid gradient-mesh cover for insight cards: vivid color blobs blended
 * together with a flowing ribbon streak and glassy sheen — an abstract,
 * "rendered" look rather than flat blocks or charts.
 */

const BLOBS = [
  { top: -14, left: -10, size: 78 },
  { top: 26, left: 50, size: 84 },
  { top: 52, left: 2, size: 64 },
  { top: -20, left: 42, size: 60 },
];

export default function InsightCover({
  palette,
  seed = 0,
  className = "",
  contentClassName = "",
  children,
}: {
  palette: [string, string, string];
  seed?: number;
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}) {
  const colorAt = (i: number) => palette[(i + seed) % palette.length];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(140deg, ${palette[0]}, ${palette[2]})` }}
    >
      {/* blended color blobs → fluid mesh */}
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-2xl mix-blend-screen"
          style={{
            top: `${b.top}%`,
            left: `${b.left}%`,
            width: `${b.size}%`,
            height: `${b.size}%`,
            background: `radial-gradient(circle, ${colorAt(i)}, transparent 68%)`,
            opacity: 0.9,
          }}
        />
      ))}

      {/* flowing ribbon streak */}
      <svg
        viewBox="0 0 320 240"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        style={seed % 2 ? { transform: "scaleX(-1)" } : undefined}
        aria-hidden
      >
        <defs>
          <linearGradient id="ic-ribbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="ic-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <path
          d="M -20 150 C 70 60, 150 220, 240 90 S 360 30, 360 120 L 360 240 L -20 240 Z"
          fill="url(#ic-ribbon)"
          opacity="0.55"
          filter="url(#ic-blur)"
        />
        <path
          d="M -20 172 C 70 112, 170 250, 262 128 S 384 78, 384 162"
          stroke="#ffffff"
          strokeOpacity="0.4"
          strokeWidth="2.5"
          fill="none"
          filter="url(#ic-blur)"
        />
      </svg>

      {/* glass sheen + depth vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_22%_-5%,rgba(255,255,255,0.3),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-34px_70px_rgba(0,0,0,0.25)]" />

      {children && <div className={`relative z-10 h-full ${contentClassName}`}>{children}</div>}
    </div>
  );
}
