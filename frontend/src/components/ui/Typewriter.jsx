import { useEffect, useState } from "react";

const TYPE_MIN = 70;
const TYPE_MAX = 130;
const ERASE_MIN = 35;
const ERASE_MAX = 65;
const HOLD_FULL = 1600;
const HOLD_EMPTY = 450;

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export default function Typewriter({ text, className = "" }) {
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState(() => (reduced ? text.length : 0));
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (reduced) return undefined;

    let delay;
    if (!erasing && count < text.length) {
      delay = randomBetween(TYPE_MIN, TYPE_MAX);
    } else if (!erasing) {
      delay = HOLD_FULL;
    } else if (count > 0) {
      delay = randomBetween(ERASE_MIN, ERASE_MAX);
    } else {
      delay = HOLD_EMPTY;
    }

    const timer = window.setTimeout(() => {
      if (!erasing && count < text.length) {
        setCount(count + 1);
      } else if (!erasing) {
        setErasing(true);
      } else if (count > 0) {
        setCount(count - 1);
      } else {
        setErasing(false);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [count, erasing, reduced, text]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text.slice(0, reduced ? text.length : count)}
        <span className="typewriter-caret">_</span>
      </span>
      <span className="sr-only">{text}_</span>
    </span>
  );
}
