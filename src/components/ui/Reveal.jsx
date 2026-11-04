import { useEffect, useRef, useState } from "react";

/** Reveals children once they scroll into view. Motion is disabled when the user asks for it. */
export default function Reveal({
  as: Tag = "div",
  children,
  delay = 0,
  variant = "",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () =>
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      className={["reveal", variant, visible ? "is-visible" : "", className].filter(Boolean).join(" ")}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
