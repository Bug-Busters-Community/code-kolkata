import { useEffect, useMemo, useState } from "react";

function diffFrom(target, now) {
  const distance = new Date(target).getTime() - now;
  if (!Number.isFinite(distance) || distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Mins" },
  { key: "seconds", label: "Secs" },
];

export default function Countdown({ target, className = "" }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const remaining = useMemo(() => diffFrom(target, now), [target, now]);
  const label = useMemo(() => new Date(target).toLocaleString(), [target]);

  return (
    <div
      role="timer"
      aria-label={`Countdown to the event date, ${label}`}
      className={`grid grid-cols-4 gap-2 sm:gap-3 ${className}`}
    >
      {UNITS.map((unit) => (
        <div
          key={unit.key}
          className="corner-ticks relative border border-line bg-ink/55 px-1 py-2.5 text-center backdrop-blur-sm sm:px-2 sm:py-3"
        >
          <span className="block font-display text-[clamp(1.4rem,4.4vw,2.1rem)] leading-none tabular-nums text-text">
            {String(remaining[unit.key]).padStart(2, "0")}
          </span>
          <span className="mt-1 block font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-muted">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
