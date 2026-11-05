import { Icon } from "./ui/Icon";
import Reveal from "./ui/Reveal";

/**
 * Full-page "revealing soon" panel shared by the schedule, sponsors, mentors
 * and team routes. Accent classes stay as complete Tailwind strings so the
 * compiler can see every candidate.
 */
const ACCENTS = {
  primary: {
    orbs: ["bg-primary/10", "bg-secondary/10", "bg-gold/10"],
    hoverBorder: "hover:border-primary/40",
    overlay: "from-white/10 via-transparent to-primary/10",
    topGlow: "bg-primary/25",
    bottomGlow: "bg-secondary/15",
    iconRing: "border-primary/15",
    iconBlur: "bg-primary/30",
    iconBox: "border-primary/40 bg-primary/10 text-primary",
    badge: "border-primary/35 bg-primary/10 text-primary",
    badgeShadow: "shadow-[0_0_30px_-10px_var(--color-primary)]",
    shimmer: "via-primary/20",
    dot: "bg-primary",
    accentText: "text-primary",
    line: "to-primary/60",
    diamond: "border-primary/70 bg-primary/25",
    tag: "border-primary/30 bg-primary/10 text-primary",
    footer: "text-primary",
  },
  gold: {
    orbs: ["bg-gold/10", "bg-primary/10", "bg-secondary/10"],
    hoverBorder: "hover:border-gold/45",
    overlay: "from-gold/15 via-transparent to-white/10",
    topGlow: "bg-gold/25",
    bottomGlow: "bg-primary/15",
    iconRing: "border-gold/20",
    iconBlur: "bg-gold/30",
    iconBox: "border-gold/45 bg-gold/10 text-gold",
    badge: "border-gold/35 bg-gold/10 text-gold",
    badgeShadow: "shadow-[0_0_30px_-10px_var(--color-gold)]",
    shimmer: "via-gold/20",
    dot: "bg-gold",
    accentText: "text-gold",
    line: "to-gold/60",
    diamond: "border-gold/70 bg-gold/25",
    tag: "border-gold/35 bg-gold/10 text-gold",
    footer: "text-gold",
  },
  secondary: {
    orbs: ["bg-secondary/10", "bg-primary/10", "bg-gold/10"],
    hoverBorder: "hover:border-secondary/45",
    overlay: "from-secondary/15 via-transparent to-white/10",
    topGlow: "bg-secondary/25",
    bottomGlow: "bg-primary/15",
    iconRing: "border-secondary/20",
    iconBlur: "bg-secondary/30",
    iconBox: "border-secondary/45 bg-secondary/10 text-secondary",
    badge: "border-secondary/35 bg-secondary/10 text-secondary",
    badgeShadow: "shadow-[0_0_30px_-10px_var(--color-secondary)]",
    shimmer: "via-secondary/20",
    dot: "bg-secondary",
    accentText: "text-secondary",
    line: "to-secondary/60",
    diamond: "border-secondary/70 bg-secondary/25",
    tag: "border-secondary/35 bg-secondary/10 text-secondary",
    footer: "text-secondary",
  },
};

export default function ComingSoonPage({
  id,
  icon,
  accent = "primary",
  description,
  badgeLabel,
  footerText,
}) {
  const tone = ACCENTS[accent] ?? ACCENTS.primary;
  const titleId = `${id}-reveal-title`;

  return (
    <section
      aria-labelledby={titleId}
      className="relative isolate flex min-h-svh items-center overflow-hidden pb-[clamp(4rem,9vw,7rem)] pt-[calc(var(--nav-h)+clamp(2rem,6vw,4.5rem))]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full ${tone.orbs[0]} blur-[130px]`}
        />
        <div
          className={`absolute bottom-[8%] right-[6%] h-56 w-56 rounded-full ${tone.orbs[1]} blur-[110px]`}
        />
        <div
          className={`absolute left-[4%] top-[16%] h-44 w-44 rounded-full ${tone.orbs[2]} blur-[100px]`}
        />
      </div>

      <div className="shell">
        <Reveal className="mx-auto max-w-4xl">
          <article
            className={`coming-soon-card group relative overflow-hidden rounded-[2rem] border border-line/60 bg-panel/50 p-1.5 shadow-[0_40px_120px_-55px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1.5 ${tone.hoverBorder}`}
          >
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.overlay}`}
            />

            <div className="coming-soon-inner relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-gradient-to-b from-ink-2/20 via-panel/10 to-panel/40 px-5 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 grid-lines grid-fade opacity-30"
              />
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-28 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full ${tone.topGlow} blur-3xl`}
              />
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full ${tone.bottomGlow} blur-3xl`}
              />

              <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
                <div className="animate-float">
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -inset-4 rounded-[1.75rem] border ${tone.iconRing}`}
                    />
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 rounded-2xl ${tone.iconBlur} blur-2xl`}
                    />
                    <span
                      className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105 ${tone.iconBox}`}
                    >
                      <Icon name={icon} size={30} />
                    </span>
                  </div>
                </div>

                <span
                  className={`coming-soon-badge relative mt-8 inline-flex items-center gap-2.5 overflow-hidden rounded-full border px-4 py-2 font-pixel text-[0.5rem] uppercase tracking-[0.18em] ${tone.badge} ${tone.badgeShadow}`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 animate-pulse bg-gradient-to-r from-transparent ${tone.shimmer} to-transparent`}
                  />
                  <span aria-hidden="true" className="relative flex h-2 w-2">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${tone.dot}`}
                    />
                    <span className={`relative inline-flex h-2 w-2 rounded-full ${tone.dot}`} />
                  </span>
                  <span className="relative">REVEALING SOON</span>
                </span>

                <h1
                  id={titleId}
                  className="mt-6 font-display text-[clamp(1.8rem,5.4vw,3.75rem)] uppercase leading-[1.03] tracking-[0.01em] text-text"
                >
                  STAY TUNED{" "}
                  <span className={`mt-1 block ${tone.accentText}`}>— REVEALING SOON!</span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                  {description}
                </p>

                <div aria-hidden="true" className="mt-8 flex items-center gap-2.5">
                  <span
                    className={`h-px w-12 bg-gradient-to-r from-transparent ${tone.line}`}
                  />
                  <span className={`h-1.5 w-1.5 rotate-45 border ${tone.diamond}`} />
                  <span
                    className={`h-px w-12 bg-gradient-to-l from-transparent ${tone.line}`}
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  <span
                    className={`coming-soon-tag inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-pixel text-[0.45rem] uppercase tracking-[0.14em] ${tone.tag}`}
                  >
                    <Icon name={icon} size={11} />
                    {badgeLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line/70 bg-white/[0.04] px-3 py-1.5 font-pixel text-[0.45rem] uppercase tracking-[0.14em] text-muted">
                    <Icon name="clock" size={11} />
                    TO BE REVEALED
                  </span>
                </div>
              </div>
            </div>
          </article>

          <p className="coming-soon-footer mt-7 text-center text-xs leading-relaxed text-muted sm:text-sm">
            {footerText}{" "}
            <span
              className={`coming-soon-footer-accent ml-2 inline-block whitespace-nowrap font-pixel text-[0.48rem] uppercase tracking-[0.12em] ${tone.footer}`}
            >
              Stay tuned
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
