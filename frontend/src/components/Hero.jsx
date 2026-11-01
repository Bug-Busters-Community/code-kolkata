import { useEffect, useMemo, useState } from "react";
import event from "../config/event";
import Button from "./ui/Button";
import Countdown from "./ui/Countdown";
import { Icon, SocialIcon } from "./ui/Icon";

const TITLE = event.name.toUpperCase();

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event_) => setReduced(event_.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function Wordmark({ reduced }) {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (reduced) return undefined;

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(Math.min(index, TITLE.length));
      if (index >= TITLE.length) window.clearInterval(timer);
    }, 55);

    return () => window.clearInterval(timer);
  }, [reduced]);

  const words = useMemo(() => {
    const list = TITLE.split(" ");
    return list.map((word, wordIndex) => {
      const start = list.slice(0, wordIndex).reduce((total, part) => total + part.length + 1, 0);
      const chars = Array.from(word).map((char, offset) => ({ char, index: start + offset }));
      return { word, chars };
    });
  }, []);

  const visibleCount = reduced ? TITLE.length : typed;
  const done = visibleCount >= TITLE.length;

  return (
    <h1
      id="hero-title"
      className={`hero-title mt-4 text-text ${done && !reduced ? "glitch-flicker" : ""}`}
      aria-label={event.name}
    >
      <span aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span key={`${word.word}-${wordIndex}`}>
            {wordIndex > 0 ? <span className="inline-block w-[0.3em]" /> : null}
            <span className="inline-block whitespace-nowrap">
              {word.chars.map(({ char, index }) => (
                <span
                  key={index}
                  className="relative inline-block"
                  style={{ opacity: index < visibleCount ? 1 : 0 }}
                >
                  {char === " " ? " " : char}
                  {!reduced && index === visibleCount - 1 ? (
                    <span className="cursor-block absolute bottom-[0.08em] left-full" />
                  ) : null}
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </h1>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10 grid-lines grid-fade opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 scanlines opacity-60" aria-hidden="true" />

      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 2xl:flex">
        <span className="font-pixel text-[0.42rem] uppercase tracking-[0.2em] text-muted [writing-mode:vertical-rl]">
          Follow
        </span>
        <span className="h-10 w-px bg-line" aria-hidden="true" />
        {event.socials
          .filter((social) => social.href)
          .map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="btn-icon border-transparent bg-transparent hover:border-primary"
            >
              <SocialIcon name={social.icon} size={17} />
            </a>
          ))}
        <span className="h-10 w-px bg-line" aria-hidden="true" />
      </div>

      <div className="shell relative z-10 flex flex-col items-center pb-24 pt-[calc(var(--nav-h)+2.25rem)] text-center lg:pb-28">
        <p className="font-pixel text-[0.55rem] uppercase leading-relaxed tracking-[0.16em] text-primary">
          <span className="text-gold" aria-hidden="true">
            ✦{" "}
          </span>
          Welcome to the build weekend
          <span className="text-gold" aria-hidden="true">
            {" "}✦
          </span>
        </p>

        <Wordmark reduced={reduced} />

        <p className="mt-5 max-w-[46ch] text-pretty text-sm uppercase leading-relaxed tracking-[0.12em] text-white/75 sm:text-base">
          {event.tagline}
        </p>

        <p className="mt-4 font-pixel text-[0.5rem] uppercase leading-relaxed tracking-[0.12em] text-muted sm:text-[0.55rem]">
          {event.organizers[0].name} <span className="text-primary">×</span>{" "}{event.organizers[1].name}
        </p>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <li className="chip">
            <Icon name="calendar" size={13} />
            {event.dates.label}
          </li>
          <li className="chip">
            <Icon name="mapPin" size={13} />
            {event.venue.city}
          </li>
          <li className="chip chip-primary">{event.theme}</li>
        </ul>

        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
          <Button to="/register" variant="primary">
            Register now <Icon name="arrowRight" size={15} />
          </Button>
          <Button to="/about" variant="secondary">
            Learn more
          </Button>
        </div>

        <div className="mt-10 w-full max-w-md">
          <div className="flex items-center justify-between gap-3">
            <span className="font-pixel text-[0.5rem] uppercase tracking-[0.16em] text-muted">
              Launch sequence
            </span>
            <span className={`chip ${event.dates.isConfirmed ? "chip-primary" : "chip-danger"}`}>
              {event.dates.isConfirmed ? "Confirmed" : "Tentative"}
            </span>
          </div>
          <Countdown target={event.dates.iso} className="mt-3" />
        </div>

        <a
          href="#stats"
          className="mt-8 inline-flex min-h-11 items-center gap-2 font-pixel text-[0.5rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-primary lg:hidden"
        >
          Scroll
          <span className="animate-scroll-cue">
            <Icon name="chevronDown" size={14} />
          </span>
        </a>
      </div>

      <a
        href="#stats"
        aria-label="Scroll down to event details"
        className="group absolute bottom-7 right-7 z-10 hidden flex-col items-center gap-3 lg:flex"
      >
        <span className="font-pixel text-[0.45rem] uppercase tracking-[0.22em] text-muted transition-colors group-hover:text-primary [writing-mode:vertical-rl]">
          Scroll down
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-line" aria-hidden="true">
          <span className="animate-scroll-cue absolute inset-x-0 top-0 h-5 bg-primary" />
        </span>
      </a>
    </section>
  );
}