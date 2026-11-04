import { useEffect, useMemo, useState } from "react";

const EVENT_TIME_ZONE = "Asia/Kolkata";

function diffFrom(targetTime, now) {
  const distance = targetTime - now;
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
  const targetTime = useMemo(() => new Date(target).getTime(), [target]);
  const [now, setNow] = useState(() => Date.now());

  const finished = Number.isFinite(targetTime) && targetTime <= now;

  useEffect(() => {
    if (finished) return undefined;
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, [finished]);

  const remaining = useMemo(() => diffFrom(targetTime, now), [targetTime, now]);
  const label = useMemo(
    () =>
      new Date(target).toLocaleString("en-IN", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: EVENT_TIME_ZONE,
      }),
    [target],
  );

  if (finished) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`corner-ticks border border-primary/50 bg-primary/10 px-4 py-4 text-center backdrop-blur-sm ${className}`}
      >
        <p className="font-pixel text-[0.55rem] uppercase tracking-[0.16em] text-primary">
          The countdown has ended
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text">
          CODE KOLKATA has started — the build sprint is live.
        </p>
      </div>
    );
  }

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
