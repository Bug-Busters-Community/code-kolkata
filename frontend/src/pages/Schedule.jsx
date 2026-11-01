import { Icon } from "../components/ui/Icon";
import Reveal from "../components/ui/Reveal";

export default function Schedule() {
  return (
    <section
      aria-labelledby="schedule-reveal-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden pb-[clamp(4rem,9vw,7rem)] pt-[calc(var(--nav-h)+clamp(2rem,6vw,4.5rem))]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-[8%] right-[6%] h-56 w-56 rounded-full bg-secondary/10 blur-[110px]" />
        <div className="absolute left-[4%] top-[16%] h-44 w-44 rounded-full bg-gold/10 blur-[100px]" />
      </div>

      <div className="shell">
        <Reveal className="mx-auto max-w-4xl">
          <article className="group relative overflow-hidden rounded-[2rem] border border-line/60 bg-panel/50 p-1.5 shadow-[0_40px_120px_-55px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/40">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary/10"
            />

            <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-gradient-to-b from-ink-2/20 via-panel/10 to-panel/40 px-5 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 grid-lines grid-fade opacity-30"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-28 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-secondary/15 blur-3xl"
              />

              <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
                <div className="animate-float">
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -inset-4 rounded-[1.75rem] border border-primary/15"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-2xl bg-primary/30 blur-2xl"
                    />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                      <Icon name="calendar" size={30} />
                    </span>
                  </div>
                </div>

                <span className="relative mt-8 inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-primary/35 bg-primary/10 px-4 py-2 font-pixel text-[0.5rem] uppercase tracking-[0.18em] text-primary shadow-[0_0_30px_-10px_var(--color-primary)]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                  />
                  <span aria-hidden="true" className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span className="relative">REVEALING SOON</span>
                </span>

                <h1
                  id="schedule-reveal-title"
                  className="mt-6 font-display text-[clamp(1.8rem,5.4vw,3.75rem)] uppercase leading-[1.03] tracking-[0.01em] text-text"
                >
                  STAY TUNED{" "}
                  <span className="mt-1 block text-primary">— REVEALING SOON!</span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                  The event schedule and session lineup will be revealed soon.
                </p>

                <div aria-hidden="true" className="mt-8 flex items-center gap-2.5">
                  <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
                  <span className="h-1.5 w-1.5 rotate-45 border border-primary/70 bg-primary/25" />
                  <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-pixel text-[0.45rem] uppercase tracking-[0.14em] text-primary">
                    <Icon name="calendar" size={11} />
                    Run of show
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line/70 bg-white/[0.04] px-3 py-1.5 font-pixel text-[0.45rem] uppercase tracking-[0.14em] text-muted">
                    <Icon name="clock" size={11} />
                    TO BE REVEALED
                  </span>
                </div>
              </div>
            </div>
          </article>

          <p className="mt-7 text-center text-xs leading-relaxed text-muted sm:text-sm">
            The complete schedule drops with the official announcement.{" "}
            <span className="ml-2 inline-block whitespace-nowrap font-pixel text-[0.48rem] uppercase tracking-[0.12em] text-primary">
              Stay tuned
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
