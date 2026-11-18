interface Props {
  value: number; // 0..1
  size?: number;
  stroke?: number;
  label?: string;
}

/** Activity-style progress ring. Colors follow `currentColor` so it adapts to its container. */
export default function ProgressRing({ value, size = 64, stroke = 8, label }: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const v = Math.max(0, Math.min(1, value));
  return (
    <span className="ring" style={{ width: size, height: size }} role="img" aria-label={label ? `進み具合 ${label}` : undefined}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeOpacity={0.25} strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={`${c * v} ${c}`} transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      {label && <span className="ring-label">{label}</span>}
    </span>
  );
}
