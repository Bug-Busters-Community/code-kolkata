import { useEffect, useRef, useState } from "react";

export default function CountUp({ value, suffix = "", duration = 1400, className = "" }) {
  const ref = useRef(null);
  const [animate] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches && typeof IntersectionObserver !== "undefined";
  });
  const [display, setDisplay] = useState(() => (animate ? 0 : value));

  useEffect(() => {
    const node = ref.current;
    if (!node || !animate) return undefined;

    let frame = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration, animate]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display.toLocaleString("en-IN")}
      {suffix ? <span aria-hidden="true">{suffix}</span> : null}
    </span>
  );
}
